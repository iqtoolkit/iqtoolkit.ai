"use client";

import { useState, FormEvent } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(data.message || "Successfully subscribed!");
        setEmail("");
        // Redirect to thank you page after 2 seconds
        setTimeout(() => {
          window.location.href = "/thank-you";
        }, 2000);
      } else {
        setStatus("error");
        setMessage(data.error || "Failed to subscribe. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("An unexpected error occurred. Please try again.");
      console.error("Newsletter subscription error:", error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-950">
      {/* Hero Section */}
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl text-center">
          {/* Logo/Brand with Visual Impact */}
          <div className="mb-6">
            <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-4 shadow-lg">
              <span className="text-4xl">🤖</span>
            </div>
            <h1 className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl">
              iqtoolkit<span className="text-blue-600">.ai</span>
            </h1>
          </div>

          {/* Compelling Value Proposition */}
          <p className="mx-auto mb-6 max-w-3xl text-2xl font-semibold text-gray-900 dark:text-white sm:text-3xl">
            Unified Database Intelligence Platform
          </p>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Self-hosted, open-source platform for multi-database operations. Built by a
            DBA-turned-architect to bring intelligent query analysis and performance insights to
            MongoDB, PostgreSQL, and beyond. Currently in development - v0.2.0-alpha launching
            December 2025.
          </p>

          {/* Key Differentiator */}
          <div className="mx-auto mb-16 max-w-3xl rounded-2xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950/30">
            <p className="text-lg font-medium text-blue-900 dark:text-blue-100">
              🔒 <strong>Self-Hosted & Privacy-First</strong> - Deploy on your infrastructure via
              Docker or Kubernetes. Choose Ollama for private, on-premises AI or OpenAI for
              cloud-based analysis. Your data never leaves your control. No vendor lock-in. Ever.
            </p>
          </div>

          {/* Features Grid - Roadmap */}
          <div className="mx-auto mb-16 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Multi-Database Support"
              description="Unified platform for MongoDB and PostgreSQL query analysis (v0.2.0). MySQL and SQL Server coming in v0.4.0."
              icon="🗄️"
            />
            <FeatureCard
              title="AI-Powered Analysis"
              description="Query optimization powered by your choice of Ollama (private) or OpenAI (cloud). Intelligent index recommendations and performance insights."
              icon="🤖"
            />
            <FeatureCard
              title="Self-Hosted & Open Source"
              description="Deploy via Docker, Kubernetes with Helm charts, or on-premises. MIT/Apache 2.0 license. Full control of your data."
              icon="🔒"
            />
            <FeatureCard
              title="PostgreSQL Analyzer"
              description="EXPLAIN plan analysis, query rewriting suggestions, index recommendations, and anti-pattern detection (Dec 2025)."
              icon="🐘"
            />
            <FeatureCard
              title="MongoDB Analyzer"
              description="Aggregation pipeline optimization, document structure analysis, index strategy recommendations, and sharding insights (Dec 2025)."
              icon="🍃"
            />
            <FeatureCard
              title="Data Governance (Coming Soon)"
              description="Schema discovery, PII/PHI detection, compliance readiness (GDPR, HIPAA, SOC 2) via OpenMetadata integration."
              icon="📋"
            />
          </div>

          {/* CTA Section with Email Signup */}
          <div className="mb-16 flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <a
                href="https://github.com/iqtoolkit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-base font-medium text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
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
                Explore on GitHub
              </a>
              <a
                href="https://docs.iqtoolkit.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border-2 border-blue-600 px-8 py-4 text-base font-medium text-blue-600 transition-all hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white"
              >
                View Documentation
              </a>
            </div>

            {/* Email Signup Form */}
            <div id="newsletter" className="mt-8 w-full max-w-md">
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="flex-1 rounded-full border border-gray-300 px-6 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400"
                  required
                  disabled={status === "loading"}
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="rounded-full bg-blue-600 px-8 py-3 font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === "loading" ? "Subscribing..." : "Stay Updated"}
                </button>
              </form>
              {message && (
                <p
                  className={`mt-3 text-center text-sm ${
                    status === "success"
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {message}
                </p>
              )}
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Get notified about new features and releases
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Brand & Mission */}
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                iqtoolkit.ai
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Empowering database professionals with AI-driven insights and automation tools.
                Built by engineers, for engineers.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                Resources
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/blog"
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/iqtoolkit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    GitHub Repository
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/iqtoolkit/iqtoolkit.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/iqtoolkit/iqtoolkit.ai/blob/main/CONTRIBUTING.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    Contributing
                  </a>
                </li>
              </ul>
            </div>

            {/* Social & Contact */}
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/iqtoolkit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  aria-label="GitHub"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/iqtoolkit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  aria-label="Twitter"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-800">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} iqtoolkit.ai - Open source MIT License. Specialized in
              Database + AI integration.
            </p>
          </div>
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
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:scale-105 hover:border-blue-300 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-700">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 transition-opacity group-hover:opacity-100 dark:from-blue-950/20 dark:to-purple-950/20"></div>
      <div className="relative">
        <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 p-3 dark:from-blue-900/50 dark:to-purple-900/50">
          <span className="text-3xl">{icon}</span>
        </div>
        <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}
