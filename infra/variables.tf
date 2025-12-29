variable "aws_region" {
  description = "AWS region for resources"
  type        = string
  default     = "us-east-1"
}

variable "environment" {
  description = "Environment name (e.g., production, staging)"
  type        = string
  default     = "production"
}

variable "github_repository_url" {
  description = "Full GitHub repository URL (e.g., https://github.com/username/repo)"
  type        = string
}

variable "main_branch_name" {
  description = "Main branch name for production deployment"
  type        = string
  default     = "main"
}

variable "custom_domain" {
  description = "Custom domain for Amplify app (leave empty to skip)"
  type        = string
  default     = ""
}

variable "enable_pr_previews" {
  description = "Enable automatic PR preview deployments"
  type        = bool
  default     = true
}

variable "create_secret_versions" {
  description = "Set to true to create initial Secrets Manager versions from provided values"
  type        = bool
  default     = false
}

variable "emailoctopus_api_key" {
  description = "Initial value for EmailOctopus API key (optional)"
  type        = string
  default     = ""
  sensitive   = true
}

variable "emailoctopus_list_id" {
  description = "Initial value for EmailOctopus list ID (optional)"
  type        = string
  default     = ""
  sensitive   = true
}
