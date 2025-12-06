# Changelog

## 2025-12-06

### Security Patch

- Upgraded `next`, `@next/mdx`, and `eslint-config-next` to `16.0.7` to pick up the upstream security fix.
- Ran `npm run validate` (format, lint, type-check, build) plus `npm audit fix` to ensure the dependency tree is clean before deployment.
