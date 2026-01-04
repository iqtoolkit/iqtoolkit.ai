import fs from "fs";
import path from "path";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roadmap | iqtoolkit.ai",
  description:
    "iqtoolkit.ai roadmap: current release status, upcoming milestones, and long-term direction.",
};

function readLiveVersion() {
  const versionPath = path.join(process.cwd(), "VERSION");
  try {
    const raw = fs.readFileSync(versionPath, "utf8").trim();
    return raw || "unknown";
  } catch {
    return "unknown";
  }
}

export default function RoadmapPage() {
  const liveVersion = readLiveVersion();
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
          <div className="mt-5 flex justify-center">
            <span className="rounded-full bg-[#0c1d2c] px-4 py-2 text-xs font-semibold text-[#6dffbd]">
              Live status: {liveVersion}
            </span>
          </div>
        </div>

        <section className="mb-10 rounded-3xl border border-[#1f2b3f] bg-[#050b18] p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Recent releases</h2>
            <span className="rounded-full bg-[#0f1a29] px-3 py-1 text-xs font-semibold text-[#8ea2c6]">
              Shipped
            </span>
          </div>
          <ul className="mt-4 space-y-2 text-[#c0c9e5]">
            <li>
              v0.2.6 — Database-direct EXPLAIN analysis, config integration, contextual AI
              recommendations.
            </li>
            <li>v0.2.5 — Documentation and roadmap clarification; repo version sync.</li>
            <li>v0.2.4 — Governance and contributor workflow simplification.</li>
          </ul>
        </section>

        <section className="mb-10 rounded-3xl border border-[#1f8f63] bg-[#061812] p-6 shadow-[0_25px_120px_rgba(6,24,18,0.6)]">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Now</h2>
            <span className="rounded-full bg-[#123f2a] px-3 py-1 text-xs font-semibold text-[#6dffbd]">
              v0.2.6 — Stable
            </span>
          </div>
          <ul className="mt-4 space-y-2 text-[#c0c9e5]">
            <li>Database-direct EXPLAIN against live PostgreSQL (no log files required).</li>
            <li>
              IQToolkit config integration with environment variable expansion for database
              connections.
            </li>
            <li>
              AI providers: 6 supported (Ollama default plus OpenAI, Gemini, Bedrock, Claude, Azure
              OpenAI) with contextual recommendations.
            </li>
            <li>CLI: `--db-name`, `--sql`, and `--query-file` flags for on-demand analysis.</li>
            <li>Reports: JSON, Markdown, and HTML (interactive MongoDB dashboards included).</li>
            <li>
              Deployment: Docker/Compose with privacy-first defaults via Ollama; cloud optional.
            </li>
          </ul>
        </section>

        <section className="mb-10 rounded-3xl border border-[#a26b1f] bg-[#20160a] p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Next</h2>
            <span className="rounded-full bg-[#3a250c] px-3 py-1 text-xs font-semibold text-[#f5c075]">
              v0.2.7 — Jan-Feb 2026
            </span>
          </div>
          <ul className="mt-4 space-y-2 text-[#c0c9e5]">
            <li>Stabilization sprint with test coverage expansion to 80%+.</li>
            <li>PostgreSQL EXPLAIN parser hardening for parallel and large plans.</li>
            <li>Documentation polish, provider guides, and PyPI publication.</li>
            <li>Prep for modular architecture and service split.</li>
          </ul>
        </section>

        <section className="mb-10 rounded-3xl border border-[#1c3a63] bg-[#081322] p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Later</h2>
            <span className="rounded-full bg-[#11233a] px-3 py-1 text-xs font-semibold text-[#8fb4ff]">
              v0.3.0 — Feb-Mar 2026
            </span>
          </div>
          <ul className="mt-4 space-y-2 text-[#c0c9e5]">
            <li>Modular architecture: Analyzer service, IQAI service, shared contracts, hub.</li>
            <li>Orchestration between Analyzer + IQAI with clear interfaces.</li>
            <li>Deployment hardening with Helm/CI/CD from dev → staging → prod.</li>
          </ul>
        </section>

        <section className="rounded-3xl border border-[#1f2b3f] bg-[#050b18] p-6">
          <h2 className="text-xl font-semibold text-white">Beyond</h2>
          <ul className="mt-4 space-y-2 text-[#c0c9e5]">
            <li>
              v1.0.0 (Q4 2026): web UI, API access, auth, scheduling, and enterprise integrations.
            </li>
            <li>ML/self-learning intelligence for trend detection and regression alerts.</li>
            <li>Collaboration and integrations: webhook support, Slack/Teams notifications.</li>
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
