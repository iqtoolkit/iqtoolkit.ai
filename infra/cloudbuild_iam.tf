data "google_project" "current" {}

# Cloud Build default service account: PROJECT_NUMBER@cloudbuild.gserviceaccount.com
locals {
  cloudbuild_sa_email = "${data.google_project.current.number}@cloudbuild.gserviceaccount.com"
}

resource "google_project_iam_member" "cb_artifact_writer" {
  project = var.project_id
  role    = "roles/artifactregistry.writer"
  member  = "serviceAccount:${local.cloudbuild_sa_email}"
}

resource "google_project_iam_member" "cb_run_admin" {
  project = var.project_id
  role    = "roles/run.admin"
  member  = "serviceAccount:${local.cloudbuild_sa_email}"
}

resource "google_project_iam_member" "cb_secret_accessor" {
  project = var.project_id
  role    = "roles/secretmanager.secretAccessor"
  member  = "serviceAccount:${local.cloudbuild_sa_email}"
}
