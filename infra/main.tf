# Artifact Registry (Docker)
resource "google_artifact_registry_repository" "repo" {
  location       = var.region
  repository_id  = var.artifact_repo
  description    = "Docker repo for iqtoolkit.ai"
  format         = "DOCKER"
  cleanup_policy = "KEEP"
}

# Secret Manager (no versions by default)
resource "google_secret_manager_secret" "emailoctopus_api_key" {
  secret_id = "EMAILOCTOPUS_API_KEY"
  replication {
    auto {}
  }
}

resource "google_secret_manager_secret" "emailoctopus_list_id" {
  secret_id = "EMAILOCTOPUS_LIST_ID"
  replication {
    auto {}
  }
}

# Optional: create initial secret versions
resource "google_secret_manager_secret_version" "emailoctopus_api_key_version" {
  count      = var.create_secret_versions ? 1 : 0
  secret     = google_secret_manager_secret.emailoctopus_api_key.id
  enabled    = true
  payload    = var.emailoctopus_api_key
}

resource "google_secret_manager_secret_version" "emailoctopus_list_id_version" {
  count      = var.create_secret_versions ? 1 : 0
  secret     = google_secret_manager_secret.emailoctopus_list_id.id
  enabled    = true
  payload    = var.emailoctopus_list_id
}
