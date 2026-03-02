# Secrets Demo App

Node.js application for Demo 020-130 (Secrets in CodeBuild).

## Purpose

Demonstrates how CodeBuild resolves secrets from Secrets Manager and Parameter Store
at build time. The buildspec.yml uses `parameter-store:` and `secrets-manager:` env
sections to inject credentials as environment variables.

## Secret Paths

- **Parameter Store:** `/devops-020-130/npm-registry-url`, `/devops-020-130/npm-auth-token`
- **Secrets Manager:** `devops-020-130/docker-credentials`, `devops-020-130/database-credentials`

## Local Development

```bash
npm install
npm start    # Starts server on port 3000
npm test     # Runs basic tests
```
