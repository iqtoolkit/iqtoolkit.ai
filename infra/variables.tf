variable "project_id" {
  description = "GCP project ID"
  type        = string
}

variable "region" {
  description = "Default region (e.g., us-central1)"
  type        = string
  default     = "us-central1"
}

variable "artifact_repo" {
  description = "Artifact Registry repository name"
  type        = string
  default     = "iqtoolkit"
}

variable "create_secret_versions" {
  description = "Set to true to create initial Secret Manager versions from provided values"
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
