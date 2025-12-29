terraform {
  required_version = ">= 1.5.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  # Backend configuration - uncomment after S3 bucket is created
  # Run: tofu init -migrate-state
  # backend "s3" {
  #   bucket         = "iqtoolkit-ai-terraform-state"
  #   key            = "amplify/terraform.tfstate"
  #   region         = "us-east-1"
  #   dynamodb_table = "iqtoolkit-ai-terraform-locks"
  #   encrypt        = true
  # }
}

provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project     = "iqtoolkit-ai"
      ManagedBy   = "OpenTofu"
      Environment = var.environment
    }
  }
}
