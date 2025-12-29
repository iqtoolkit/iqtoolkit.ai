terraform {
  required_version = ">= 1.5.0"
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = ">= 5.0"
    }
  }
  # Recommended: use GCS backend for state (create bucket first)
  # backend "gcs" {}
}

provider "google" {
  project = var.project_id
  region  = var.region
}
