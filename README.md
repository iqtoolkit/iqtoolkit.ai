# iqtoolkit.ai

[![CI/CD Pipeline](https://github.com/iqtoolkit/iqtoolkit.ai/actions/workflows/ci.yml/badge.svg)](https://github.com/iqtoolkit/iqtoolkit.ai/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR_SITE_ID/deploy-status)](https://app.netlify.com/sites/iqtoolkit-ai/deploys)

**Official website for iqtoolkit** - A flagship portfolio showcasing advanced AI tools and solutions.

Repository for the source code and deployment files of the iqtoolkit.ai website, published via Netlify. All updates, features, and infrastructure for iqtoolkit.ai live here.

## 🚀 Features

- ⚡ **Next.js 16** - Latest React framework with App Router
- 🎨 **Tailwind CSS 4** - Modern utility-first CSS framework
- 📱 **Responsive Design** - Mobile-first, works on all devices
- ♿ **Accessibility** - WCAG compliant
- 🔍 **SEO Optimized** - Meta tags, sitemap, robots.txt
- 📧 **Newsletter Integration** - EmailOctopus API for subscriber management
- 🧪 **Testing** - Jest & React Testing Library
- 📊 **Code Coverage** - Automated coverage reporting
- 🔧 **TypeScript** - Type-safe code
- 💅 **Prettier** - Consistent code formatting
- 🔒 **ESLint** - Code quality and best practices
- 🚦 **Lighthouse CI** - Automated performance monitoring
- 🤖 **Dependabot** - Automated dependency updates
- 🔄 **CI/CD** - GitHub Actions automated workflows

## 🏗️ Tech Stack

- **Framework:** Next.js 16 with React 19
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript 5
- **Testing:** Jest, React Testing Library
- **Linting:** ESLint with Next.js config
- **Formatting:** Prettier
- **CI/CD:** GitHub Actions
- **Deployment:** Netlify
- **Package Manager:** npm

## 📋 Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/iqtoolkit/iqtoolkit.ai.git
cd iqtoolkit.ai
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables (for newsletter):

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your EmailOctopus credentials. See [docs/EMAILOCTOPUS_SETUP.md](docs/EMAILOCTOPUS_SETUP.md) for details.

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

| Command                 | Description                                      |
| ----------------------- | ------------------------------------------------ |
| `npm run dev`           | Start development server                         |
| `npm run build`         | Build production bundle                          |
| `npm start`             | Start production server                          |
| `npm run lint`          | Run ESLint                                       |
| `npm run lint:fix`      | Fix ESLint errors                                |
| `npm run format`        | Format code with Prettier                        |
| `npm run format:check`  | Check code formatting                            |
| `npm run type-check`    | Run TypeScript type checking                     |
| `npm test`              | Run tests                                        |
| `npm run test:watch`    | Run tests in watch mode                          |
| `npm run test:coverage` | Run tests with coverage                          |
| `npm run validate`      | Run all checks (format, lint, type-check, build) |

## 🧪 Testing

Run the test suite:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Generate coverage report:

```bash
npm run test:coverage
```

## 🚀 Deployment

This site is automatically deployed to Netlify when changes are pushed to the main branch.

### Manual Deployment

1. Build the project:

```bash
npm run build
```

2. The build output will be in the `.next` directory.

### Netlify Configuration

The site is configured to deploy automatically via Netlify. Build settings:

- **Build Command:** `npm run build`
- **Publish Directory:** `.next`
- **Node Version:** 20.x

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Run validation before committing (`npm run validate`)
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Code Quality

All code must pass the following checks before being merged:

- ✅ Prettier formatting
- ✅ ESLint rules
- ✅ TypeScript type checking
- ✅ All tests passing
- ✅ Build successful

Run all checks at once:

```bash
npm run validate
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [Netlify](https://www.netlify.com/)

## 📧 Contact

For questions or support, please open an issue in this repository.

---

**Made with ❤️ by iqtoolkit**
