# Changelog

## 2025-12-25

### Features

- **Roadmap Page Revamp** - Complete UI overhaul of the roadmap page with improved design and user experience
- **New Blog Post** - Added comprehensive guide on using iqtoolkit pgtools HOT Update Optimization

### Improvements

- **Enhanced Component Styling** - Improved readability and aesthetics across various components
- **Link Updates** - Updated all GitHub and LinkedIn links to point to official iqtoolkit organization profiles
- **Layout Refinements** - Adjusted spacing and margins in About and Home pages for better visual hierarchy
- **Expertise Formatting** - Improved formatting of expertise descriptions on Home page

### Dependencies

- Upgraded `next` from `16.0.10` to `16.1.1` for latest features and bug fixes
- Upgraded `@next/mdx` from `16.0.7` to `16.1.1` for improved MDX support
- Upgraded `react` from `19.2.0` to `19.2.3` for React bug fixes
- Upgraded `react-dom` from `19.2.0` to `19.2.3` for consistency
- Updated tooling dependencies group with 7 packages for improved development experience

### CI/CD

- Bumped `actions/upload-artifact` from v5 to v6 in GitHub Actions workflow

## 2025-12-06

### Security Patch

- Upgraded `next`, `@next/mdx`, and `eslint-config-next` to `16.0.7` to pick up the upstream security fix.
- Ran `npm run validate` (format, lint, type-check, build) plus `npm audit fix` to ensure the dependency tree is clean before deployment.
