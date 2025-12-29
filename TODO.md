# Deployment TODOs: Custom Domain + Cloud CDN + Direct GitHub Actions Deploy

This document captures operational steps to wire:

- Custom domain mapping for Cloud Run
- Cloud CDN using HTTPS Load Balancer + Serverless NEG (Cloud Run)
- Direct GitHub Actions deploy (docker build/push + gcloud run deploy), skipping Cloud Build

## Custom Domain for Cloud Run

1. Create the domain mapping (replace with your domain):

```bash
gcloud run domain-mappings create \
  --service iqtoolkit-ai \
  --domain your-domain.com \
  --region us-central1
```

2. Get DNS records to add at your registrar/DNS provider:

```bash
gcloud run domain-mappings describe your-domain.com --region us-central1
```

3. Add the suggested DNS `A/AAAA` (apex) and `CNAME` (subdomains) records. Propagation may take time.

4. Verify mapping and HTTPS:

```bash
gcloud run domain-mappings list --region us-central1
```

Notes:

- Domain mapping issues are frequently DNS propagation or mismatched records.
- For multiple environments (e.g., staging), map subdomains like `staging.your-domain.com` to distinct Cloud Run services.

## Cloud CDN for Cloud Run via HTTPS Load Balancer

To enable CDN and advanced routing, front Cloud Run with an HTTPS Load Balancer and a serverless NEG.

High-level steps:

```bash
# 1) Create serverless NEG pointing to your Cloud Run service
gcloud compute network-endpoint-groups create cr-neg-iqtoolkit \
  --region=us-central1 \
  --network-endpoint-type=serverless \
  --serverless-deployment-platform=cloud-run \
  --cloud-run-service=iqtoolkit-ai

# 2) Create backend service and attach NEG + enable CDN
gcloud compute backend-services create bs-iqtoolkit \
  --global \
  --protocol HTTPS \
  --enable-cdn

gcloud compute backend-services add-backend bs-iqtoolkit \
  --global \
  --network-endpoint-group=cr-neg-iqtoolkit \
  --network-endpoint-group-region=us-central1

# 3) Create URL map
gcloud compute url-maps create um-iqtoolkit \
  --default-service bs-iqtoolkit

# 4) Create managed SSL cert for your domain
gcloud compute ssl-certificates create cert-iqtoolkit \
  --domains=your-domain.com

# 5) Create HTTPS target proxy
gcloud compute target-https-proxies create thp-iqtoolkit \
  --url-map=um-iqtoolkit \
  --ssl-certificates=cert-iqtoolkit

# 6) Create global forwarding rule
gcloud compute forwarding-rules create fr-iqtoolkit \
  --global \
  --target-https-proxy=thp-iqtoolkit \
  --ports=443

# 7) Point DNS for your domain to the forwarding rule IP (A/AAAA records)
gcloud compute forwarding-rules describe fr-iqtoolkit --global --format='get(IPAddress)'
```

Notes:

- Managed certs require DNS to point to the LB before cert issuance completes.
- Cloud CDN will cache static assets aggressively; Cloud Run continues to serve dynamic routes.
- For multiple domains, create additional certs and URL map host rules.

## Direct GitHub Actions Deploy (skipping Cloud Build)

This pipeline builds and pushes the Docker image to Artifact Registry, then deploys to Cloud Run — authenticating via WIF (Workload Identity Federation) with no long-lived keys.

Prerequisites:

- Apply infra from `infra/` to provision Artifact Registry and WIF provider/SA.
- GitHub repo secrets:
  - `GCP_PROJECT_ID`: your GCP project ID
  - `GCP_WIF_PROVIDER`: full resource name from `opentofu output wif_provider_resource`
  - `GCP_SERVICE_ACCOUNT`: service account email from `opentofu output deployer_service_account_email`

Workflow: `.github/workflows/deploy-direct.yml` (created in repo)

Key behavior:

- Auth via WIF → `gcloud auth configure-docker` → `docker build` → `docker push` → `gcloud run deploy`
- Uses `REGION=us-central1`, `REPO=iqtoolkit`, `SERVICE=iqtoolkit-ai` (customize as needed)

Manual equivalent commands:

```bash
# Authenticate
# (In Actions, handled by google-github-actions/auth)

# Configure Docker to use gcloud as a credential helper for Artifact Registry
gcloud auth configure-docker us-central1-docker.pkg.dev -q

# Build and tag
IMAGE="us-central1-docker.pkg.dev/${GCP_PROJECT_ID}/iqtoolkit/iqtoolkit-ai:$(git rev-parse --short HEAD)"
docker build -t "$IMAGE" .

# Push
docker push "$IMAGE"

# Deploy
gcloud run deploy iqtoolkit-ai \
  --image "$IMAGE" \
  --region us-central1 \
  --allow-unauthenticated \
  --port 3000 \
  --set-secrets EMAILOCTOPUS_API_KEY=EMAILOCTOPUS_API_KEY:latest,EMAILOCTOPUS_LIST_ID=EMAILOCTOPUS_LIST_ID:latest
```

## Notes & Best Practices

- Prefer WIF over service account keys for CI authentication.
- Pin GitHub Actions versions and enable branch protection for `main`.
- Use Secret Manager for sensitive values; avoid `.env` in CI.
- Add Cloud Monitoring alerts for `run.googleapis.com/request_count` and `5xx` rates.
- Consider staging → prod promotion via separate services or revisions.
