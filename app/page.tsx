export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black">
      {/* Hero Section */}
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl text-center">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl md:text-7xl">
              iqtoolkit<span className="text-blue-600">.ai</span>
            </h1>
          </div>

          {/* Tagline */}
          <p className="mx-auto mb-12 max-w-2xl text-xl text-gray-600 dark:text-gray-400 sm:text-2xl">
            Advanced AI Tools & Solutions
          </p>

          {/* Description */}
          <div className="mx-auto mb-16 max-w-3xl">
            <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Welcome to the official portfolio of iqtoolkit - showcasing cutting-edge AI tools,
              machine learning solutions, and innovative technology projects.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Explore the intersection of artificial intelligence and practical applications, where
              advanced algorithms meet real-world solutions.
            </p>
          </div>

          {/* Features Grid */}
          <div className="mx-auto mb-16 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="AI-Powered"
              description="Leveraging cutting-edge artificial intelligence and machine learning technologies"
              icon="🤖"
            />
            <FeatureCard
              title="Open Source"
              description="Committed to open-source development and community collaboration"
              icon="🌐"
            />
            <FeatureCard
              title="Innovation"
              description="Pushing boundaries with innovative solutions and creative approaches"
              icon="💡"
            />
            <FeatureCard
              title="Performance"
              description="Optimized for speed, efficiency, and exceptional user experience"
              icon="⚡"
            />
            <FeatureCard
              title="Scalable"
              description="Built with modern architecture for growth and adaptability"
              icon="📈"
            />
            <FeatureCard
              title="Best Practices"
              description="Following industry standards and maintaining code quality"
              icon="✨"
            />
          </div>

          {/* CTA Section */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://github.com/iqtoolkit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-base font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              <svg
                className="mr-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              View on GitHub
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-black px-8 py-4 text-base font-medium text-black transition-colors hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} iqtoolkit.ai - All rights reserved. Built with ❤️ using
            Next.js
          </p>
        </div>
      </footer>
    </div>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      <div className="mb-3 text-4xl">{icon}</div>
      <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}
