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
