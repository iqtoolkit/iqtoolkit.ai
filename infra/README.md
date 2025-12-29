# Infra (OpenTofu/Terraform)

This folder contains infrastructure-as-code to provision Google Cloud prerequisites:

- Artifact Registry repository (Docker)
- Secret Manager secrets for `EMAILOCTOPUS_API_KEY` and `EMAILOCTOPUS_LIST_ID`

## Prerequisites

- GCP project created and selected
- IAM permissions to create Artifact Registry and Secrets
- OpenTofu (or Terraform) installed

## Usage (local state)

```bash
# Set project
export TF_VAR_project_id=YOUR_PROJECT_ID
# Region can be overridden via TF_VAR_region

cd infra
# Initialize providers
opentofu init
# Plan
opentofu plan -out tfplan
# Apply
opentofu apply tfplan
```

To create initial secret values at the same time:

```bash
opentofu apply \
  -var create_secret_versions=true \
  -var emailoctopus_api_key=YOUR_KEY \
  -var emailoctopus_list_id=YOUR_LIST
```

## Remote state (recommended)

Create a GCS bucket manually for state (one-time):

```bash
gsutil mb -l us-central1 gs://YOUR_STATE_BUCKET
```

Then edit `providers.tf` and uncomment the `backend "gcs" {}` block, adding a `backend.hcl` file:

```hcl
bucket = "YOUR_STATE_BUCKET"
prefix = "iqtoolkit-ai/infra"
project = "YOUR_PROJECT_ID"
```

Initialize with backend:

```bash
opentofu init -backend-config=backend.hcl
```

## Next steps

- Build and push the app image to the created Artifact Registry.
- Deploy Cloud Run referencing the image and reading secrets as env vars.
- Optionally automate via Cloud Build triggers or GitHub Actions with Workload Identity Federation.
