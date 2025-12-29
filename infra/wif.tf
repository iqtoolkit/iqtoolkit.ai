data "google_project" "current" {}

variable "wif_pool_id" {
  description = "Workload Identity Pool ID"
  type        = string
  default     = "github-pool"
}

variable "wif_provider_id" {
  description = "Workload Identity Provider ID"
  type        = string
  default     = "github-provider"
}

variable "github_org" {
  description = "GitHub organization/owner"
  type        = string
}

variable "github_repo" {
  description = "GitHub repository name"
  type        = string
}

variable "deployer_sa_id" {
  description = "Service account ID (slug, without domain)"
  type        = string
  default     = "github-deployer"
}

# Workload Identity Pool
resource "google_iam_workload_identity_pool" "github" {
  workload_identity_pool_id = var.wif_pool_id
  display_name              = "GitHub Actions Pool"
  description               = "OIDC pool for GitHub Actions"
}

# Workload Identity Pool Provider (OIDC)
resource "google_iam_workload_identity_pool_provider" "github" {
  workload_identity_pool_id = google_iam_workload_identity_pool.github.workload_identity_pool_id
  workload_identity_pool_provider_id = var.wif_provider_id
  display_name                        = "GitHub OIDC Provider"
  description                         = "trusts tokens from token.actions.githubusercontent.com"
  attribute_mappings = {
    "google.subject"       = "assertion.sub"
    "attribute.repository" = "assertion.repository"
    "attribute.actor"      = "assertion.actor"
    "attribute.ref"        = "assertion.ref"
  }
  oidc {
    issuer_uri = "https://token.actions.githubusercontent.com"
  }
}

# Service Account used by GitHub Actions via WIF
resource "google_service_account" "deployer" {
  account_id   = var.deployer_sa_id
  display_name = "GitHub Actions Deployer"
}

# Allow identities from the pool (limited to specific repo) to impersonate the SA
resource "google_service_account_iam_member" "wif_to_sa" {
  service_account_id = google_service_account.deployer.name
  role               = "roles/iam.workloadIdentityUser"
  member             = "principalSet://iam.googleapis.com/projects/${data.google_project.current.number}/locations/global/workloadIdentityPools/${google_iam_workload_identity_pool.github.workload_identity_pool_id}/attribute.repository/${var.github_org}/${var.github_repo}"
}

# Project roles for the deployer SA
resource "google_project_iam_member" "run_admin" {
  project = var.project_id
  role    = "roles/run.admin"
  member  = "serviceAccount:${google_service_account.deployer.email}"
}

resource "google_project_iam_member" "artifact_writer" {
  project = var.project_id
  role    = "roles/artifactregistry.writer"
  member  = "serviceAccount:${google_service_account.deployer.email}"
}

resource "google_project_iam_member" "cloudbuild_editor" {
  project = var.project_id
  role    = "roles/cloudbuild.builds.editor"
  member  = "serviceAccount:${google_service_account.deployer.email}"
}

resource "google_project_iam_member" "secret_accessor" {
  project = var.project_id
  role    = "roles/secretmanager.secretAccessor"
  member  = "serviceAccount:${google_service_account.deployer.email}"
}
