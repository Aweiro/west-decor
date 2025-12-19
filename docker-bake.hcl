group "default" {
  targets = ["app"]
}

target "app" {
  context    = "."
  dockerfile = "Dockerfile"

  platforms = ["linux/amd64"]

  tags = [
    "aweiro/phone-catalog:latest",
    "aweiro/phone-catalog:amd64"
  ]

  push = true
}