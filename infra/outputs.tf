output "artifact_repo_path" {
  description = "Artifact Registry repo path"
  value       = "${var.region}-docker.pkg.dev/${var.project_id}/${var.artifact_repo}"
}

output "secret_names" {
  description = "Created secret names"
  value       = [
    google_secret_manager_secret.emailoctopus_api_key.secret_id,
    google_secret_manager_secret.emailoctopus_list_id.secret_id
  ]
}

output "wif_provider_resource" {
  description = "Full resource name for the Workload Identity Provider"
  value       = google_iam_workload_identity_pool_provider.github.name
}

output "deployer_service_account_email" {
  description = "Service account email used by GitHub Actions"
  value       = google_service_account.deployer.email
}
