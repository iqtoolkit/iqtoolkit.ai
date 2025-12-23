import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giovanni Martinez — About",
  description:
    "Database Administrator and AI-Enabled Database Architect with more than 10 years experience in PostgreSQL and open-source databases. Creator of iqtoolkit.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030712] text-[#e4ebff]">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#1f8f63] blur-[200px]"></div>
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#15487a] blur-[220px]"></div>
      </div>

      {/* Header */}
      <header className="relative border-b border-[#1f2b3f] bg-[#030712]/90 backdrop-blur-xl">
        <div className="mx-auto max-w-4xl px-6 py-6 lg:px-8">
          <Link href="/" className="text-sm text-[#8ea2c6] transition-colors hover:text-[#6dffbd]">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative mx-auto max-w-4xl px-6 py-16 lg:px-8 space-y-12">
        {/* Hero */}
        <section className="text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full border border-[#1f2b3f] bg-[#0b1425] p-8 shadow-[0_25px_80px_rgba(31,47,70,0.45)]">
            <span className="text-6xl">👨‍💻</span>
          </div>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#6dffbd]">About</p>
          <h1 className="text-5xl font-bold">Giovanni Martinez</h1>
          <p className="mt-4 text-lg text-[#c0c9e5]">
            Senior Database Administrator → AI Database Architect. Building iqtoolkit so DB teams
            get battle-tested intelligence without giving up privacy.
          </p>
        </section>

        {/* Introduction (condensed bullets) */}
        <section className="rounded-3xl border border-[#1f2b3f] bg-[#0b1425] p-8 shadow-[0_25px_120px_rgba(7,15,32,0.65)]">
          <ul className="space-y-4 text-lg leading-relaxed text-[#c0c9e5]">
            <li>
              • Database Administrator and AI-enabled Architect with more than 10 years of
              experience across PostgreSQL and open-source ecosystems; creator of{" "}
              <strong>iqtoolkit</strong> (launched 2025).
            </li>
            <li>• Focus: query performance, reliability engineering, and privacy-first AI.</li>
            <li>
              • Location & contact: Ocala, FL •{" "}
              <a
                className="underline decoration-[#3fb366] underline-offset-4"
                href="mailto:gio@iqtoolkit.ai"
              >
                gio@iqtoolkit.ai
              </a>
            </li>
            <li className="flex flex-wrap gap-3">
              • Links:
              <a
                className="text-[#6dffbd] underline-offset-4 hover:underline"
                href="https://www.iqtoolkit.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                iqtoolkit.ai
              </a>
              •
              <a
                className="text-[#6dffbd] underline-offset-4 hover:underline"
                href="https://github.com/iqtoolkit"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/iqtoolkit
              </a>
              •
              <a
                className="text-[#6dffbd] underline-offset-4 hover:underline"
                href="https://linkedin.com/in/iqtoolkit"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/gmartinez-dbai
              </a>
              •
              <a
                className="text-[#6dffbd] underline-offset-4 hover:underline"
                href="https://mastodon.social/@iqtoolkit"
                target="_blank"
                rel="me noopener noreferrer"
              >
                @iqtoolkit
              </a>
            </li>
          </ul>
        </section>

        {/* Why iqtoolkit Exists */}
        <section className="rounded-3xl border border-[#1f2b3f] bg-[#0b1425] p-8">
          <h2 className="mb-4 text-3xl font-bold text-white">Why iqtoolkit Exists</h2>
          <div className="prose prose-invert prose-lg max-w-none text-[#c0c9e5] prose-p:text-[#c0c9e5] prose-li:text-[#c0c9e5] prose-headings:text-white prose-strong:text-white">
            <p>
              After more than a decade of manually diagnosing slow queries, building monitoring
              dashboards, and tuning database performance in production environments, Giovanni
              recognized a critical gap: database teams are drowning in metrics but starving for
              actionable intelligence.
            </p>
            <p>
              <strong>iqtoolkit was created to solve real production challenges</strong> — bringing
              AI-powered insights to database operations without cloud dependencies, vendor lock-in,
              or privacy compromises. Every feature is built from actual DBA pain points, not
              theoretical use cases.
            </p>
            <p>
              <strong className="text-[#6dffbd]">The vision:</strong> Make AI-powered database
              intelligence accessible to every operations team—regardless of budget, cloud provider,
              or infrastructure complexity.
            </p>
          </div>
        </section>

        {/* Technical Background */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-white">Technical Background</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Databases",
                body: "PostgreSQL, MongoDB, SQL Server, MySQL, Cassandra",
              },
              {
                title: "Cloud & DevOps",
                body: "Azure, AWS, Kubernetes, Terraform, Docker, GitOps",
              },
              {
                title: "AI/ML & Development",
                body: "Python, Local LLM (Ollama), FastAPI, Apache Airflow",
              },
              {
                title: "Certifications",
                body: "Azure AI Fundamentals, Azure Solutions Architect Expert, Certified Kubernetes Administrator (CKA); previously AWS Solutions Architect.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#1f2b3f] bg-[#0b1425] p-6 shadow-[0_15px_60px_rgba(3,7,18,0.45)]"
              >
                <h3 className="mb-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-[#c0c9e5]">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-[#1f2b3f] bg-[#0b1425] p-6">
            <h3 className="mb-3 text-lg font-semibold text-white">Languages</h3>
            <p className="text-[#c0c9e5]">
              <strong>English</strong> (Native) • <strong>Spanish</strong> (Professional Working
              Proficiency)
            </p>
          </div>
        </section>

        {/* CTA for Full CV */}
        <section className="rounded-3xl border border-[#1f2b3f] bg-gradient-to-r from-[#08111f] to-[#0f262a] p-8 shadow-[0_35px_160px_rgba(31,71,51,0.35)]">
          <p className="text-lg text-[#c0c9e5]">
            Want the full history, experience, and certification matrix?
          </p>
          <div className="mt-6">
            <Link
              href="/cv"
              className="inline-flex items-center gap-2 rounded-full bg-[#3fb366] px-8 py-3 text-base font-semibold text-[#030712] transition-all hover:scale-105 hover:bg-[#6dffbd]"
            >
              📄 View Full Professional CV
            </Link>
          </div>
        </section>

        {/* Let's Connect */}
        <section className="rounded-3xl border border-[#1f2b3f] bg-[#050b18] p-8">
          <h2 className="mb-4 text-3xl font-bold text-white">Let&apos;s Connect</h2>
          <p className="text-[#c0c9e5]">
            Currently building AI-enabled database diagnostics and mentoring teams on PostgreSQL,
            Kubernetes, and Terraform. Whether you want to contribute to iqtoolkit or swap
            architecture notes, reach out.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://linkedin.com/in/gmartinez-dbai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#3fb366] px-6 py-3 text-sm font-semibold text-[#030712] transition-all hover:bg-[#6dffbd]"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/iqtoolkit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#1f2b3f] px-6 py-3 text-sm font-medium text-[#c0c9e5] transition-all hover:border-[#6dffbd] hover:text-[#6dffbd]"
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
              className="inline-flex items-center gap-2 rounded-full border border-[#1f2b3f] px-6 py-3 text-sm font-medium text-[#c0c9e5] transition-all hover:border-[#6dffbd] hover:text-[#6dffbd]"
            >
              <span className="text-lg">🤖</span>
              iqtoolkit Project
            </a>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex flex-wrap gap-4 border-t border-[#1f2b3f] pt-8 text-sm text-[#8ea2c6]">
          <Link href="/" className="transition-colors hover:text-[#6dffbd]">
            ← Back to Home
          </Link>
          <span className="opacity-30">|</span>
          <a
            href="https://github.com/iqtoolkit"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#6dffbd]"
          >
            View personal GitHub profile →
          </a>
        </div>
      </main>
    </div>
  );
}
