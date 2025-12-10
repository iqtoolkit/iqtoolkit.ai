"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const scrollToNewsletter = () => {
    const el = document.getElementById("newsletter");
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 100; // offset for sticky nav
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

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
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/80 sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/img/iqtoolkitai-high-resolution-logo-transparent.png"
                  alt="iqtoolkit.ai high-resolution logo (transparent)"
                  width={415}
                  height={83}
                  className="h-20 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Menu */}
            <div className="hidden md:flex md:items-center md:gap-8">
              <a
                href="#features"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                Features
              </a>
              <Link
                href="/blog"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                About
              </Link>
              <Link
                href="/roadmap"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                Roadmap
              </Link>
              <a
                href="https://docs.iqtoolkit.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                Docs
              </a>
              <a
                href="https://github.com/iqtoolkit/iqtoolkit-analyzer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://github.com/iqtoolkit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                Org GitHub
              </a>
              <button
                type="button"
                onClick={scrollToNewsletter}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 text-sm font-medium text-white transition-all hover:scale-105"
              >
                Get Updates
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                aria-label="Open menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl text-center">
          {/* Tightened Hero */}
          <div className="mb-6">
            <h1 className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl">
              Diagnose database incidents faster with AI-powered query analysis.
            </h1>
          </div>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-700 dark:text-gray-300 sm:text-2xl"></p>
          <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/iqtoolkit/iqtoolkit-analyzer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-base font-semibold text-white transition-all hover:scale-105"
            >
              View on GitHub
            </a>
            <span className="text-sm text-gray-600 dark:text-gray-400">v0.2.2 — Stable</span>
          </div>

          {/* Key Differentiator */}
          <div className="mx-auto mb-16 max-w-3xl rounded-2xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950/30">
            <p className="text-lg font-medium text-blue-900 dark:text-blue-100">
              🔒 <strong>Self-Hosted & Privacy-First</strong> - Deploy on your infrastructure via
              Docker or Kubernetes. Choose Ollama for private, on-premises AI or OpenAI for
              cloud-based analysis. Your data never leaves your control. No vendor lock-in. Ever.
            </p>
          </div>

          {/* Features Grid - Roadmap (clearly mark Now vs Coming Soon) */}
          <div className="mx-auto mb-16 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Multi-Database Support"
              description="Analyze PostgreSQL and MongoDB today; MySQL and SQL Server next."
              icon="🗄️"
              badge="v0.2.2"
              badgeTone="now"
            />
            <FeatureCard
              title="AI-Powered Analysis"
              description="Automatically surface slow queries, spot missing indexes, and summarize EXPLAIN plans."
              icon="🤖"
              badge="v0.2.2"
              badgeTone="now"
            />
            <FeatureCard
              title="Self-Hosted & Open Source"
              description="Deploy via Docker or Kubernetes; keep data private with local LLMs (Ollama) or use OpenAI in the cloud."
              icon="🔒"
              badge="v0.2.2"
              badgeTone="now"
            />
            <FeatureCard
              title="PostgreSQL Analyzer"
              description="Turn EXPLAIN into action: index suggestions, plan insights, and anomaly detection."
              icon="🐘"
              badge="v0.2.2"
              badgeTone="now"
            />
            <FeatureCard
              title="MongoDB Analyzer"
              description="Find slow ops, highlight inefficient scans, and guide index strategies."
              icon="🍃"
              badge="v0.2.2"
              badgeTone="now"
            />
            <FeatureCard
              title="Data Governance (Coming Soon)"
              description="Policy controls and audit trails for regulated teams."
              icon="🛡️"
              badge="v0.3"
              badgeTone="soon"
            />
            <FeatureCard
              title="Rich Reports"
              description="Export results to Markdown, JSON, and HTML (including MongoDB dashboards) to share or archive analyses."
              icon="📈"
              badge="v0.2.2"
              badgeTone="now"
            />
          </div>

          {/* Architecture Snapshot */}
          <div className="mx-auto mb-16 max-w-4xl rounded-2xl border border-gray-200 bg-white p-6 text-left dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              Modular Monorepo Architecture
            </h3>
            <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
              Built for velocity and reliability with clear module boundaries and shared contracts.
            </p>
            <ul className="grid gap-2 text-sm text-gray-700 dark:text-gray-300 sm:grid-cols-2">
              <li>
                • <strong>iqtoolkit_analyzer</strong> — CLI package (to be service-ized)
              </li>
              <li>
                • <strong>iqtoolkit-contracts</strong> — Shared Pydantic models
              </li>
              <li>
                • <strong>iqtoolkit-iqai</strong> — AI Copilot service (pydantic-ai)
              </li>
              <li>
                • <strong>iqtoolkithub</strong> — Orchestration gateway (Analyzer + IQAI)
              </li>
              <li>
                • <strong>iqtoolkit-deployment</strong> — Helm/K8s deployment assets
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <Link
                href="/roadmap"
                className="text-blue-600 underline underline-offset-4 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                View the Roadmap →
              </Link>
              <a
                href="https://github.com/iqtoolkit/iqtoolkit-analyzer/blob/main/ROADMAP.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline underline-offset-4 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                GitHub ROADMAP.md →
              </a>
            </div>
          </div>

          {/* CTA Section with Email Signup (single dominant CTA + subtle nudge) */}
          <div className="mb-16 flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col items-center gap-3">
              <a
                href="https://github.com/iqtoolkit/iqtoolkit-analyzer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-base font-medium text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="mr-1">⭐</span>
                Star on GitHub
                <Image
                  src="https://img.shields.io/github/stars/iqtoolkit/iqtoolkit-analyzer?style=social"
                  alt="GitHub stars"
                  width={90}
                  height={20}
                  unoptimized
                  className="h-5 w-auto"
                />
              </a>
              <Link
                href="/blog/why-iqtoolkit-suite"
                className="text-sm text-gray-600 underline underline-offset-4 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                Or read the launch post →
              </Link>
              <a
                href="https://mastodon.social/@iqtoolkit"
                target="_blank"
                rel="me noopener noreferrer"
                className="text-sm text-gray-600 underline underline-offset-4 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                Follow @iqtoolkit on Mastodon
              </a>
              <a
                href="https://twitter.com/iqtoolkit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 underline underline-offset-4 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                Follow @iqtoolkit on Twitter
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
                Release notes, deployment tips, and tuning guides.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* About the Creator */}
      <section className="border-t border-gray-200 bg-gradient-to-b from-gray-50 to-white dark:border-gray-800 dark:from-gray-900 dark:to-gray-950">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              About the Creator
            </h2>
            <div className="mx-auto max-w-3xl">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                <strong className="text-blue-600 dark:text-blue-400">Giovanni Martinez</strong> is a
                Senior Database Administrator transitioning to AI Database Architect with{" "}
                <strong>13+ years of experience</strong> optimizing databases for education
                organizations, SaaS companies, and Fortune 100 enterprises including McKesson&apos;s
                healthcare platforms.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                After years of solving the same database performance challenges across PostgreSQL,
                MongoDB, and SQL Server, Giovanni founded <strong>iqtoolkit</strong> to build what
                the industry was missing: a <strong>privacy-first, self-hosted platform</strong>{" "}
                that unifies database intelligence across multiple database systems—without vendor
                lock-in or sending sensitive data to third-party clouds.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                From deploying Transparent Data Encryption at enterprise scale to architecting
                AI-powered monitoring dashboards with Datadog, Giovanni brings deep expertise in{" "}
                <strong>
                  database optimization, cloud architecture (AWS/Azure), and AI/ML integration
                </strong>
                . Based in Florida, he&apos;s building iqtoolkit as an open-source solution that
                puts database professionals back in control of their data and their AI.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-700"
                >
                  View Full Bio & Experience
                </Link>
                <Image
                  src="/img/text-wordmark-slogan-centered-color.png"
                  alt="iqtoolkit wordmark"
                  width={240}
                  height={40}
                  className="h-10 w-auto"
                />
                <a
                  href="https://linkedin.com/in/gmartinez-dbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border-2 border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition-all hover:border-blue-600 hover:text-blue-600 dark:border-gray-700 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
                >
                  <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://github.com/gmartinez-dbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border-2 border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition-all hover:border-blue-600 hover:text-blue-600 dark:border-gray-700 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
                >
                  <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  <Link
                    href="/blog"
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <a
                    href="https://github.com/iqtoolkit/iqtoolkit-analyzer"
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
                <li>
                  <Link
                    href="/cv"
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    Resume/CV
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social & Contact */}
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">Connect</h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/iqtoolkit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  aria-label="GitHub (Org)"
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
                  href="https://github.com/iqtoolkit/iqtoolkit-analyzer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  aria-label="GitHub (Analyzer Repo)"
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
                  href="https://mastodon.social/@iqtoolkit"
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  aria-label="Mastodon"
                >
                  <Image
                    src="/img/mastodon.svg"
                    alt="Mastodon"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </a>
                <a
                  href="https://twitter.com/iqtoolkit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  aria-label="Twitter"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 4.01c-.77.35-1.6.58-2.47.69a4.3 4.3 0 001.88-2.37 8.54 8.54 0 01-2.72 1.05 4.27 4.27 0 00-3.14-1.37c-2.36 0-4.28 1.96-4.28 4.37 0 .34.03.66.1.97-3.56-.18-6.72-1.95-8.84-4.63a4.46 4.46 0 00-.58 2.2 4.4 4.4 0 001.9 3.64 4.2 4.2 0 01-1.94-.55v.06c0 2.1 1.45 3.85 3.38 4.25a4.2 4.2 0 01-1.13.16c-.28 0-.55-.03-.81-.08.55 1.8 2.16 3.11 4.06 3.14A8.5 8.5 0 012 18.34a12 12 0 006.64 2.02c7.97 0 12.33-6.78 12.33-12.67 0-.19-.01-.37-.02-.56A8.99 8.99 0 0022 4.01z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/gmartinez-dbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  aria-label="LinkedIn"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5C0 2.12 1.08 1 2.48 1s2.5 1.12 2.5 2.5zM.24 8.16h4.5V24H.24V8.16zM8.65 8.16h4.31v2.15h.06c.6-1.14 2.07-2.34 4.27-2.34 4.56 0 5.4 3 5.4 6.9V24h-4.5v-7.7c0-1.84-.03-4.2-2.56-4.2-2.57 0-2.96 2-2.96 4.06V24h-4.5V8.16z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-800">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} iqtoolkit.ai — Open source MIT License. Specialized in
              Database + AI integration. Contact:{" "}
              <a className="underline hover:text-blue-600" href="mailto:gio@iqtoolkit.ai">
                gio@iqtoolkit.ai
              </a>
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
  badge?: string;
  badgeTone?: "now" | "soon";
}

function FeatureCard({ title, description, icon, badge, badgeTone }: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:scale-105 hover:border-blue-300 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-700">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 transition-opacity group-hover:opacity-100 dark:from-blue-950/20 dark:to-purple-950/20"></div>
      <div className="relative">
        <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 p-3 dark:from-blue-900/50 dark:to-purple-900/50">
          <span className="text-3xl">{icon}</span>
        </div>
        {badge ? (
          <span
            className={`mb-2 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${
              badgeTone === "soon"
                ? "border-amber-200 bg-amber-100 text-amber-800 dark:border-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
                : "border-green-200 bg-green-100 text-green-800 dark:border-green-800 dark:bg-green-900/30 dark:text-green-300"
            }`}
          >
            {badge}
          </span>
        ) : null}
        <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}
