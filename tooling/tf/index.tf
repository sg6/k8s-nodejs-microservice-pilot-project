terraform {
  required_providers {
    vultr = {
      source = "vultr/vultr"
      version = "2.23.1"
    }
  }
}

variable "API_KEY" {
  description = "API KEY for Vultr"
  type = string
}

provider "vultr" {
  api_key = var.API_KEY
  rate_limit = 100
  retry_limit = 3
}

resource "vultr_kubernetes" "vke_cluster" {
  region  = "ams"
  label   = "vke-nodejs-app-custer"
  version = "v1.31.2+1"

  node_pools {
    node_quantity = 1
    plan          = "vc2-1c-2gb"
    label         = "vke-nodepool"
    auto_scaler   = true
    min_nodes     = 1
    max_nodes     = 4
  }
}