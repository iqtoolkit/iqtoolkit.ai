# ========================================
# S3 Bucket for Terraform State
# ========================================
resource "aws_s3_bucket" "terraform_state" {
  bucket = "iqtoolkit-ai-terraform-state"

  tags = {
    Name        = "Terraform State Bucket"
    Description = "Stores OpenTofu/Terraform state files"
  }
}

resource "aws_s3_bucket_versioning" "terraform_state" {
  bucket = aws_s3_bucket.terraform_state.id

  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "terraform_state" {
  bucket = aws_s3_bucket.terraform_state.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

resource "aws_s3_bucket_public_access_block" "terraform_state" {
  bucket = aws_s3_bucket.terraform_state.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# ========================================
# DynamoDB Table for State Locking
# ========================================
resource "aws_dynamodb_table" "terraform_locks" {
  name         = "iqtoolkit-ai-terraform-locks"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "LockID"

  attribute {
    name = "LockID"
    type = "S"
  }

  tags = {
    Name        = "Terraform State Lock Table"
    Description = "DynamoDB table for state locking"
  }
}

# ========================================
# AWS Secrets Manager
# ========================================
resource "aws_secretsmanager_secret" "emailoctopus_api_key" {
  name        = "iqtoolkit-ai/emailoctopus-api-key"
  description = "EmailOctopus API Key for newsletter subscriptions"

  tags = {
    Application = "iqtoolkit-ai"
  }
}

resource "aws_secretsmanager_secret" "emailoctopus_list_id" {
  name        = "iqtoolkit-ai/emailoctopus-list-id"
  description = "EmailOctopus List ID for newsletter subscriptions"

  tags = {
    Application = "iqtoolkit-ai"
  }
}

# Optional: create initial secret versions
resource "aws_secretsmanager_secret_version" "emailoctopus_api_key" {
  count         = var.create_secret_versions ? 1 : 0
  secret_id     = aws_secretsmanager_secret.emailoctopus_api_key.id
  secret_string = var.emailoctopus_api_key
}

resource "aws_secretsmanager_secret_version" "emailoctopus_list_id" {
  count         = var.create_secret_versions ? 1 : 0
  secret_id     = aws_secretsmanager_secret.emailoctopus_list_id.id
  secret_string = var.emailoctopus_list_id
}

# ========================================
# AWS Amplify App
# ========================================
resource "aws_amplify_app" "main" {
  name       = "iqtoolkit-ai"
  repository = var.github_repository_url

  # Build settings for Next.js
  build_spec = <<-EOT
    version: 1
    frontend:
      phases:
        preBuild:
          commands:
            - npm ci
        build:
          commands:
            - npm run build
      artifacts:
        baseDirectory: .next
        files:
          - '**/*'
      cache:
        paths:
          - node_modules/**/*
          - .next/cache/**/*
  EOT

  # Environment variables
  environment_variables = {
    NEXT_PUBLIC_SITE_URL      = "https://iqtoolkit.ai"
    EMAILOCTOPUS_API_KEY_ARN  = aws_secretsmanager_secret.emailoctopus_api_key.arn
    EMAILOCTOPUS_LIST_ID_ARN  = aws_secretsmanager_secret.emailoctopus_list_id.arn
    NODE_ENV                  = "production"
    _LIVE_UPDATES             = jsonencode([{"pkg":"@aws-amplify/cli","type":"npm","version":"latest"}])
  }

  # Enable auto branch creation for pull requests
  enable_branch_auto_build = true
  enable_auto_branch_creation = var.enable_pr_previews

  auto_branch_creation_patterns = var.enable_pr_previews ? ["pr-*"] : []

  auto_branch_creation_config {
    enable_auto_build = true
    framework         = "Next.js - SSR"
    stage             = "DEVELOPMENT"
  }

  # Platform settings
  platform = "WEB_COMPUTE" # Required for Next.js SSR

  # Custom rules for routing
  custom_rule {
    source = "/<*>"
    status = "404"
    target = "/404.html"
  }

  custom_rule {
    source = "</^[^.]+$|\\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|woff2|ttf|map|json|webp)$)([^.]+$)/>"
    status = "200"
    target = "/index.html"
  }

  tags = {
    Application = "iqtoolkit-ai"
  }
}

# ========================================
# Amplify Branch (main)
# ========================================
resource "aws_amplify_branch" "main" {
  app_id      = aws_amplify_app.main.id
  branch_name = var.main_branch_name
  framework   = "Next.js - SSR"
  stage       = "PRODUCTION"

  enable_auto_build = true

  tags = {
    Branch = "production"
  }
}

# ========================================
# Custom Domain (Optional)
# ========================================
resource "aws_amplify_domain_association" "main" {
  count       = var.custom_domain != "" ? 1 : 0
  app_id      = aws_amplify_app.main.id
  domain_name = var.custom_domain

  # Subdomain configuration
  sub_domain {
    branch_name = aws_amplify_branch.main.branch_name
    prefix      = ""
  }

  sub_domain {
    branch_name = aws_amplify_branch.main.branch_name
    prefix      = "www"
  }
}

# ========================================
# IAM Role for Amplify (to access Secrets Manager)
# ========================================
resource "aws_iam_role" "amplify" {
  name = "iqtoolkit-ai-amplify-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "amplify.amazonaws.com"
        }
      }
    ]
  })

  tags = {
    Application = "iqtoolkit-ai"
  }
}

resource "aws_iam_role_policy" "amplify_secrets" {
  name = "amplify-secrets-access"
  role = aws_iam_role.amplify.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "secretsmanager:GetSecretValue"
        ]
        Resource = [
          aws_secretsmanager_secret.emailoctopus_api_key.arn,
          aws_secretsmanager_secret.emailoctopus_list_id.arn
        ]
      }
    ]
  })
}
