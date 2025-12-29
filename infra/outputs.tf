output "s3_state_bucket_name" {
  description = "S3 bucket name for Terraform state"
  value       = aws_s3_bucket.terraform_state.id
}

output "dynamodb_lock_table_name" {
  description = "DynamoDB table name for state locking"
  value       = aws_dynamodb_table.terraform_locks.name
}

output "amplify_app_id" {
  description = "Amplify App ID"
  value       = aws_amplify_app.main.id
}

output "amplify_default_domain" {
  description = "Default Amplify domain"
  value       = aws_amplify_app.main.default_domain
}

output "amplify_app_url" {
  description = "Production branch URL"
  value       = "https://${aws_amplify_branch.main.branch_name}.${aws_amplify_app.main.default_domain}"
}

output "custom_domain_url" {
  description = "Custom domain URL (if configured)"
  value       = var.custom_domain != "" ? "https://${var.custom_domain}" : "Not configured"
}

output "secret_arns" {
  description = "ARNs of created secrets"
  value = {
    emailoctopus_api_key = aws_secretsmanager_secret.emailoctopus_api_key.arn
    emailoctopus_list_id = aws_secretsmanager_secret.emailoctopus_list_id.arn
  }
}

output "amplify_service_role_arn" {
  description = "IAM role ARN for Amplify"
  value       = aws_iam_role.amplify.arn
}
