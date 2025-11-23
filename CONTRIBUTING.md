# Contributing to iqtoolkit.ai

Thank you for your interest in contributing to iqtoolkit.ai! We welcome contributions from the community.

## 📋 Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment.

## 🚀 Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/iqtoolkit.ai.git`
3. Create a new branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Commit your changes: `git commit -m 'Add some feature'`
6. Push to the branch: `git push origin feature/your-feature-name`
7. Submit a pull request

## 💻 Development Workflow

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Setup

```bash
npm install
npm run dev
```

### Before Submitting

Run the validation suite to ensure all checks pass:

```bash
npm run validate
```

This command runs:

- Prettier formatting check
- ESLint
- TypeScript type checking
- Production build

## 🧪 Testing

- Write tests for new features
- Ensure all tests pass: `npm test`
- Check test coverage: `npm run test:coverage`

## 📝 Code Style

- We use Prettier for code formatting
- ESLint enforces code quality rules
- TypeScript for type safety
- Follow existing code patterns

### Format Your Code

```bash
npm run format
```

### Lint Your Code

```bash
npm run lint:fix
```

## 📦 Commit Messages

Use clear and meaningful commit messages:

- `feat: add new feature`
- `fix: fix bug in component`
- `docs: update documentation`
- `style: format code`
- `refactor: refactor component`
- `test: add tests`
- `chore: update dependencies`

## 🔍 Pull Request Process

1. Update the README.md with details of changes if needed
2. Ensure all tests pass and code is formatted
3. Update documentation for any new features
4. The PR will be merged once you have approval from maintainers

## 🐛 Reporting Bugs

Create an issue with:

- Clear title and description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Environment details

## 💡 Suggesting Enhancements

Create an issue with:

- Clear title and description
- Use case and benefits
- Possible implementation approach

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🙏 Questions?

Feel free to open an issue for any questions or concerns.

Thank you for contributing to iqtoolkit.ai! 🎉
