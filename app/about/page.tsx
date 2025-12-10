import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giovanni Martinez — About",
  description:
    "Database Administrator and AI-Enabled Database Architect with more than 10 years experience in PostgreSQL and open-source databases. Creator of iqtoolkit.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700">
        <div className="mx-auto max-w-4xl px-6 py-6 lg:px-8">
          <Link
            href="/"
            className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        {/* Hero */}
        <div className="mb-12">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1">
            <div className="rounded-full bg-white dark:bg-gray-900 p-8">
              <span className="text-6xl">👨‍💻</span>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Giovanni Martinez
          </h1>
        </div>

        {/* Introduction (condensed bullets) */}
        <div className="mb-6">
          <ul className="grid gap-4 text-lg text-gray-800 dark:text-gray-200">
            <li>
              • Database Administrator and AI-enabled Architect with more than 10 years of
              experience across PostgreSQL and open-source ecosystems; creator of{" "}
              <strong>iqtoolkit</strong> (launched 2025).
            </li>
            <li>
              • Focus: query performance, reliability engineering, and privacy-first AI for on-prem
              and cloud.
            </li>
            <li>
              • Location & contact: Ocala, FL •{" "}
              <a className="underline hover:text-blue-600" href="mailto:gio@iqtoolkit.ai">
                gio@iqtoolkit.ai
              </a>
            </li>
            <li>
              • Links:{" "}
              <a
                className="underline hover:text-blue-600"
                href="https://www.iqtoolkit.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                iqtoolkit.ai
              </a>{" "}
              •
              <a
                className="underline hover:text-blue-600 ml-1"
                href="https://github.com/gmartinez-dbai"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/gmartinez-dbai
              </a>{" "}
              •
              <a
                className="underline hover:text-blue-600 ml-1"
                href="https://linkedin.com/in/gmartinez-dbai"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/gmartinez-dbai
              </a>{" "}
              •
              <a
                className="underline hover:text-blue-600 ml-1"
                href="https://mastodon.social/@iqtoolkit"
                target="_blank"
                rel="me noopener noreferrer"
              >
                @iqtoolkit
              </a>
            </li>
          </ul>
        </div>

        {/* Why iqtoolkit Exists */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Why iqtoolkit Exists
          </h2>
          <div className="prose prose-lg max-w-none prose-p:text-gray-700 dark:prose-invert dark:prose-p:text-gray-300">
            <p>
              After more than a decade of manually diagnosing slow queries, building monitoring
              dashboards, and tuning database performance in production environments, Giovanni
              recognized a critical gap in the industry: database teams are drowning in metrics but
              starving for actionable intelligence.
            </p>
            <p>
              <strong>iqtoolkit was created to solve real production challenges</strong>—bringing
              AI-powered insights to database operations without cloud dependencies, vendor lock-in,
              or privacy compromises. Every feature is built from actual DBA pain points, not
              theoretical use cases.
            </p>
            <p>
              <strong className="text-blue-600 dark:text-blue-400">The vision:</strong> Make
              AI-powered database intelligence accessible to every operations team—regardless of
              budget, cloud provider, or infrastructure complexity.
            </p>
          </div>
        </section>

        {/* Technical Background */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Technical Background
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800/50">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Databases
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                PostgreSQL, MongoDB, SQL Server, MySQL, Cassandra
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800/50">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Cloud & DevOps
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Azure, AWS, Kubernetes, Terraform, Docker, GitOps
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800/50">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                AI/ML & Development
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Python, Local LLM (Ollama), FastAPI, Apache Airflow
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800/50">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Certifications
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <div>
                  <span className="font-semibold">Current:</span> Microsoft Certified: Azure AI
                  Fundamentals (AI-900), Azure Solutions Architect Expert, Certified Kubernetes
                  Administrator (CKA)
                </div>
                <div>
                  <span className="font-semibold">Previous (Expired):</span> AWS Solutions Architect
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800/50">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Languages</h3>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>English</strong> (Native) • <strong>Spanish</strong> (Professional Working
              Proficiency)
            </p>
          </div>
        </section>

        {/* CTA for Full CV */}
        <section className="mb-12">
          <div className="rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white p-8 dark:border-blue-700 dark:from-blue-950/30 dark:to-gray-900">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              <strong>My full professional resume:</strong>
            </p>
            <Link
              href="/cv"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3 text-base font-medium text-white transition-all hover:bg-blue-700"
            >
              📄 View Full Professional CV
            </Link>
          </div>
        </section>

        {/* Let's Connect */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Let&apos;s Connect
          </h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Currently building AI-enabled database diagnostics and mentoring teams on PostgreSQL,
            Kubernetes, and Terraform.
          </p>
          <div className="prose prose-lg max-w-none prose-p:text-gray-700 dark:prose-invert dark:prose-p:text-gray-300 mb-6">
            <p>
              Whether you&apos;re interested in contributing to iqtoolkit, exploring collaboration
              opportunities, or discussing database architecture and AI integration:
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://linkedin.com/in/gmartinez-dbai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-700"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect on LinkedIn
            </a>
            <a
              href="https://github.com/gmartinez-dbai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition-all hover:border-blue-600 hover:text-blue-600 dark:border-gray-700 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </a>
            <a
              href="https://github.com/iqtoolkit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition-all hover:border-blue-600 hover:text-blue-600 dark:border-gray-700 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
            >
              <span className="text-lg">🤖</span>
              iqtoolkit Project
            </a>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex flex-wrap gap-4 border-t border-gray-200 pt-8 dark:border-gray-700">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            ← Back to Home
          </Link>
          <span className="text-gray-300 dark:text-gray-700">|</span>
          <a
            href="https://github.com/gmartinez-dbai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            View personal GitHub profile →
          </a>
        </div>
      </main>
    </div>
  );
}
