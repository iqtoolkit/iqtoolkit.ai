import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roadmap | iqtoolkit.ai",
  description:
    "iqtoolkit.ai roadmap: current release status, upcoming milestones, and long-term direction.",
};

export default function RoadmapPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030712] text-[#e4ebff]">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute -top-32 left-0 h-96 w-96 rounded-full bg-[#1f8f63] blur-[220px]"></div>
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#15487a] blur-[200px]"></div>
      </div>

      <header className="relative border-b border-[#1f2b3f] bg-[#030712]/90 backdrop-blur-xl">
        <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
          <Link href="/" className="text-sm text-[#8ea2c6] transition-colors hover:text-[#6dffbd]">
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#6dffbd]">
            product direction
          </p>
          <h1 className="text-4xl font-bold text-white">Roadmap</h1>
          <p className="mt-3 text-[#c0c9e5]">
            Transparent milestones for what is shipping now, next, and later.
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 text-sm">
            <a
              href="https://github.com/iqtoolkit/iqtoolkit-analyzer/blob/main/ROADMAP.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6dffbd] underline-offset-4 hover:underline"
            >
              GitHub ROADMAP.md →
            </a>
            <a
              href="https://github.com/iqtoolkit/iqtoolkit-analyzer/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6dffbd] underline-offset-4 hover:underline"
            >
              Releases →
            </a>
          </div>
        </div>

        <section className="mb-10 rounded-3xl border border-[#1f8f63] bg-[#061812] p-6 shadow-[0_25px_120px_rgba(6,24,18,0.6)]">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Now</h2>
            <span className="rounded-full bg-[#123f2a] px-3 py-1 text-xs font-semibold text-[#6dffbd]">
              v0.2.2 — Stable
            </span>
          </div>
          <ul className="mt-4 space-y-2 text-[#c0c9e5]">
            <li>PostgreSQL analyzer: slow query analysis, EXPLAIN insights, index suggestions.</li>
            <li>MongoDB analyzer: aggregation analysis, index strategy, sharding insights.</li>
            <li>AI-powered analysis via Ollama (private) or OpenAI (cloud).</li>
            <li>Self-hosted deployment: Docker, Kubernetes (Helm), on-prem friendly.</li>
            <li>Reports: export to Markdown, JSON, and HTML (MongoDB dashboards included).</li>
          </ul>
        </section>

        <section className="mb-10 rounded-3xl border border-[#a26b1f] bg-[#20160a] p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Next</h2>
            <span className="rounded-full bg-[#3a250c] px-3 py-1 text-xs font-semibold text-[#f5c075]">
              v0.2.3 — Q1 2026
            </span>
          </div>
          <ul className="mt-4 space-y-2 text-[#c0c9e5]">
            <li>Deeper PostgreSQL EXPLAIN/EXPLAIN ANALYZE heuristics and tips.</li>
            <li>Improved index advisor with workload-aware recommendations.</li>
            <li>Refinements to analyzer UX and richer output details.</li>
          </ul>
        </section>

        <section className="mb-10 rounded-3xl border border-[#1c3a63] bg-[#081322] p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Later</h2>
            <span className="rounded-full bg-[#11233a] px-3 py-1 text-xs font-semibold text-[#8fb4ff]">
              v0.3.0 — Q2 2026
            </span>
          </div>
          <ul className="mt-4 space-y-2 text-[#c0c9e5]">
            <li>Service orchestration via iqtoolkithub (Analyzer + IQAI integration).</li>
            <li>Operational maturity improvements and deployment hardening.</li>
            <li>Foundations for broader multi-database governance workflows.</li>
          </ul>
        </section>

        <section className="rounded-3xl border border-[#1f2b3f] bg-[#050b18] p-6">
          <h2 className="text-xl font-semibold text-white">Beyond</h2>
          <ul className="mt-4 space-y-2 text-[#c0c9e5]">
            <li>Expanded database support (MySQL, SQL Server).</li>
            <li>Data governance workflows (PII/PHI detection, compliance readiness).</li>
            <li>Deeper integrations with observability and metadata ecosystems.</li>
          </ul>
          <p className="mt-4 text-sm text-[#8ea2c6]">
            For the most accurate details and changes, follow the canonical roadmap in{" "}
            <a
              href="https://github.com/iqtoolkit/iqtoolkit-analyzer/blob/main/ROADMAP.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6dffbd] underline-offset-4 hover:underline"
            >
              GitHub
            </a>
            .
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-[#3fb366] px-6 py-3 text-sm font-semibold text-[#030712] transition-all hover:bg-[#6dffbd]"
            >
              ← Back to Home
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
