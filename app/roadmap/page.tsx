import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roadmap | iqtoolkit.ai",
  description:
    "iqtoolkit.ai roadmap: current release status, upcoming milestones, and long-term direction.",
};

export default function RoadmapPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Roadmap</h1>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          Transparent milestones for what is shipping now, next, and later.
        </p>
        <div className="mt-4 flex items-center justify-center gap-4 text-sm">
          <a
            href="https://github.com/iqtoolkit/iqtoolkit-analyzer/blob/main/ROADMAP.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline underline-offset-4 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            GitHub ROADMAP.md →
          </a>
          <a
            href="https://github.com/iqtoolkit/iqtoolkit-analyzer/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline underline-offset-4 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Releases →
          </a>
        </div>
      </header>

      <section className="mb-12 rounded-2xl border border-green-200 bg-green-50 p-6 dark:border-green-900 dark:bg-green-900/20">
        <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Now</h2>
        <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">v0.2.2 — Stable</p>
        <ul className="list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
          <li>PostgreSQL analyzer: slow query analysis, EXPLAIN insights, index suggestions.</li>
          <li>
            MongoDB analyzer: aggregation pipeline analysis, index strategy, sharding insights.
          </li>
          <li>AI-powered analysis via Ollama (private) or OpenAI (cloud).</li>
          <li>Self-hosted deployment: Docker, Kubernetes (Helm), on-prem friendly.</li>
          <li>Reports: export to Markdown, JSON, and HTML (MongoDB dashboards included).</li>
        </ul>
      </section>

      <section className="mb-12 rounded-2xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-900/20">
        <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Next</h2>
        <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">v0.2.3 — Q1 2026 (target)</p>
        <ul className="list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
          <li>Deeper PostgreSQL EXPLAIN/EXPLAIN ANALYZE heuristics and tips.</li>
          <li>Improved index advisor with workload-aware recommendations.</li>
          <li>Refinements to analyzer UX and richer output details.</li>
        </ul>
      </section>

      <section className="mb-12 rounded-2xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-900/20">
        <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Later</h2>
        <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">v0.3.0 — Q2 2026 (target)</p>
        <ul className="list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
          <li>Service orchestration via iqtoolkithub (Analyzer + IQAI integration).</li>
          <li>Operational maturity improvements and deployment hardening.</li>
          <li>Foundations for broader multi-database governance workflows.</li>
        </ul>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Beyond</h2>
        <ul className="list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
          <li>Expanded database support (MySQL, SQL Server).</li>
          <li>Data governance workflows (PII/PHI detection, compliance readiness).</li>
          <li>Deeper integrations with observability and metadata ecosystems.</li>
        </ul>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          For the most accurate details and changes, follow the canonical roadmap in{" "}
          <a
            href="https://github.com/iqtoolkit/iqtoolkit-analyzer/blob/main/ROADMAP.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline underline-offset-4 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            GitHub
          </a>
          .
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-700"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
