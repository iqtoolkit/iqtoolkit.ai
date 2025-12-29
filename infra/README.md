# Infra (OpenTofu/Terraform) - AWS Deployment

This folder contains infrastructure-as-code to provision AWS resources for iqtoolkit.ai:

- **S3 bucket** for Terraform state storage (with versioning & encryption)
- **DynamoDB table** for state locking
- **AWS Amplify** app for Next.js hosting with SSR
- **Secrets Manager** secrets for `EMAILOCTOPUS_API_KEY` and `EMAILOCTOPUS_LIST_ID`
- **IAM roles** for Amplify to access secrets

## Prerequisites

- AWS account with appropriate permissions
- AWS CLI configured (`aws configure`)
- OpenTofu (or Terraform) installed
- GitHub repository for your application
- GitHub personal access token (for Amplify to access your repo)

## Two-Phase Deployment

### Phase 1: Create S3 State Bucket (Local State)

The first run creates the S3 bucket and DynamoDB table while keeping state locally.

```bash
cd infra

# Set required variables
export TF_VAR_github_repository_url="https://github.com/YOUR_ORG/iqtoolkit.ai"
export TF_VAR_aws_region="us-east-1"  # Optional, defaults to us-east-1

# Initialize with local state
opentofu init

# Plan and review
opentofu plan -out tfplan

# Apply to create S3 bucket, DynamoDB, and all resources
opentofu apply tfplan
```

After successful apply, note the outputs:

```bash
opentofu output s3_state_bucket_name
opentofu output dynamodb_lock_table_name
opentofu output amplify_app_url
```

### Phase 2: Migrate State to S3

After the S3 bucket is created, migrate the state file from local to S3.

1. **Uncomment the backend configuration** in `providers.tf`:

```hcl
backend "s3" {
  bucket         = "iqtoolkit-ai-terraform-state"
  key            = "amplify/terraform.tfstate"
  region         = "us-east-1"
  dynamodb_table = "iqtoolkit-ai-terraform-locks"
  encrypt        = true
}
```

2. **Migrate the state**:

```bash
# Re-initialize to configure the S3 backend
opentofu init -migrate-state

# Confirm when prompted to copy state to S3
# Answer: yes
```

3. **Verify state migration**:

```bash
# List S3 bucket contents
aws s3 ls s3://iqtoolkit-ai-terraform-state/amplify/

# Run plan to verify (should show no changes)
opentofu plan
```

4. **Clean up local state files** (optional):

```bash
rm terraform.tfstate*
```

## GitHub Integration

### Connect Amplify to GitHub

1. Generate a GitHub personal access token with `repo` permissions
2. Add it to AWS Secrets Manager or provide during Amplify setup:

```bash
aws amplify update-app \
  --app-id $(opentofu output -raw amplify_app_id) \
  --access-token YOUR_GITHUB_TOKEN
```

3. Trigger initial deployment:

```bash
aws amplify start-job \
  --app-id $(opentofu output -raw amplify_app_id) \
  --branch-name main \
  --job-type RELEASE
```

### Auto-deployments

Amplify will automatically deploy when you push to the configured branches.

## Managing Secrets

### Option 1: Create secrets via OpenTofu (during apply)

```bash
opentofu apply \
  -var create_secret_versions=true \
  -var emailoctopus_api_key="YOUR_API_KEY" \
  -var emailoctopus_list_id="YOUR_LIST_ID"
```

### Option 2: Manually add secret values after creation

```bash
# Add EmailOctopus API key
aws secretsmanager put-secret-value \
  --secret-id iqtoolkit-ai/emailoctopus-api-key \
  --secret-string "YOUR_API_KEY"

# Add EmailOctopus list ID
aws secretsmanager put-secret-value \
  --secret-id iqtoolkit-ai/emailoctopus-list-id \
  --secret-string "YOUR_LIST_ID"
```

## Custom Domain Setup

To use a custom domain (e.g., iqtoolkit.ai):

1. Add the domain variable:

```bash
opentofu apply -var custom_domain="iqtoolkit.ai"
```

2. After applying, get the DNS records from Amplify:

```bash
aws amplify get-domain-association \
  --app-id $(opentofu output -raw amplify_app_id) \
  --domain-name iqtoolkit.ai
```

3. Add the provided CNAME records to your DNS provider

4. Wait for SSL certificate validation (can take up to 48 hours)

## Monitoring & Logs

View Amplify build logs:

```bash
# List recent builds
aws amplify list-jobs \
  --app-id $(opentofu output -raw amplify_app_id) \
  --branch-name main

# Get specific build logs
aws amplify get-job \
  --app-id $(opentofu output -raw amplify_app_id) \
  --branch-name main \
  --job-id JOB_ID
```

## Cost Optimization

- **Amplify Hosting**: Pay for build minutes and data transfer
- **S3**: Minimal cost for state storage
- **DynamoDB**: PAY_PER_REQUEST mode (only pay for actual requests)
- **Secrets Manager**: ~$0.40/month per secret

## Cleanup

To destroy all resources:

```bash
# Destroy infrastructure
opentofu destroy

# Manually delete the S3 state bucket (if needed)
aws s3 rb s3://iqtoolkit-ai-terraform-state --force
```

⚠️ **Warning**: The S3 bucket has deletion protection. Remove versioning first if you need to delete it.

## Troubleshooting

### State Lock Issues

If you encounter a state lock error:

```bash
# Force unlock (use with caution)
opentofu force-unlock LOCK_ID
```

### Amplify Build Failures

Check the Amplify console or use:

```bash
aws amplify get-app --app-id $(opentofu output -raw amplify_app_id)
```

### GitHub Authentication Issues

Re-connect GitHub:

```bash
aws amplify update-app \
  --app-id $(opentofu output -raw amplify_app_id) \
  --access-token NEW_GITHUB_TOKEN
```
