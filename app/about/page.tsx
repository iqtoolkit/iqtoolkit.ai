import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Giovanni Martinez | iqtoolkit Creator",
  description:
    "Learn about Giovanni Martinez, Senior Database Administrator turned AI Database Architect and founder of iqtoolkit - 13+ years optimizing databases for Fortune 100 companies.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700">
        <div className="mx-auto max-w-5xl px-6 py-6 lg:px-8">
          <Link
            href="/"
            className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        {/* Hero */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1">
            <div className="rounded-full bg-white dark:bg-gray-900 p-8">
              <span className="text-6xl">👨‍💻</span>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Giovanni Martinez
          </h1>
          <p className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Senior Database Administrator → AI Database Architect
          </p>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            PostgreSQL Optimizer | Building ML/AI-Ready Data Systems | Open-Source Innovator
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="https://linkedin.com/in/gmartinez-dbai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-700"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
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
        </div>

        {/* Professional Summary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Summary
          </h2>
          <div className="prose prose-lg max-w-none prose-p:text-gray-700 dark:prose-invert dark:prose-p:text-gray-300">
            <p>
              Senior Database Administrator transitioning to AI Database Architect with{" "}
              <strong>13+ years of experience</strong> in database optimization, performance tuning,
              and cloud architecture. Founder of <strong>iqtoolkit</strong>—an open-source,
              privacy-first platform for intelligent database analysis and optimization.
            </p>
            <p>
              Proven expertise in building and tuning databases for education organizations, SaaS
              companies, and Fortune 100 enterprises (McKesson). Specializing in PostgreSQL,
              MongoDB, SQL Server optimization with emerging focus on AI-driven database solutions,
              ML/AI integration, and container-native deployments.
            </p>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Experience</h2>
          <div className="space-y-12">
            {/* CoverMyMeds */}
            <ExperienceCard
              company="CoverMyMeds (a McKesson business)"
              title="Database Administrator (Senior-level scope)"
              location="Remote, Ohio, United States"
              period="February 2022 - Present"
              duration="3 years 10 months"
              highlights={[
                "Diagnosed and resolved complex PostgreSQL performance bottlenecks, significantly increasing query efficiency and system stability",
                "Architected and deployed comprehensive Datadog monitoring dashboards for PostgreSQL, providing real-time alerting and deep performance insights",
                "Led enterprise-wide rollout of Transparent Data Encryption (TDE) and Change Data Capture (CDC) on SQL Server, strengthening data security and compliance",
                "Automated critical maintenance and deployment workflows with Puppet and Terraform, eliminating repetitive tasks and standardizing configurations",
                "Embedded database operations into CI/CD pipelines, accelerating feature delivery while maintaining reliability",
                "Part of cross-functional team overseeing mission-critical SQL Server and PostgreSQL platforms for healthcare applications",
              ]}
              technologies={[
                "PostgreSQL",
                "SQL Server",
                "Terraform",
                "Datadog",
                "Puppet",
                "Kubernetes",
                "AWS",
                "GitOps",
                "CI/CD",
              ]}
            />

            {/* KCF Technologies */}
            <ExperienceCard
              company="KCF Technologies, Inc."
              title="Senior Database Architect"
              location="State College, Pennsylvania, United States"
              period="December 2020 - February 2022"
              duration="1 year 3 months"
              highlights={[
                "Monitored PostgreSQL Servers and proactively resolved issues",
                "Performed index tuning and query optimization for improved database performance",
                "Architected and designed new and existing databases and tables",
                "Mentored and trained developers on efficient database/SQL programming techniques",
              ]}
              technologies={["PostgreSQL", "OLTP", "AWS", "Database Design", "Performance Tuning"]}
            />

            {/* Aspect Software */}
            <ExperienceCard
              company="Aspect Software"
              title="Platform Operations Engineer / Senior DBA / DBA"
              location="Orlando, Florida Area"
              period="June 2016 - December 2020"
              duration="4 years 7 months"
              highlights={[
                "Setup automated platform to provide PostgreSQL and Cassandra to developer teams",
                "Managed and optimized PostgreSQL database infrastructure for enterprise contact center solutions",
                "Installed, deployed, and maintained database infrastructure",
                "Identified, troubleshot, and resolved database system alarms and alerts",
                "Created and maintained database deployment documentation",
                "Performed capacity planning and maintained performance metrics",
              ]}
              technologies={["PostgreSQL", "Cassandra", "OLTP", "AWS", "Automation"]}
            />

            {/* EDP University */}
            <ExperienceCard
              company="EDP University of PR"
              title="Database and Systems Administrator"
              location="Puerto Rico"
              period="January 2012 - June 2016"
              duration="4 years 6 months"
              highlights={[
                "Provided support to Campus VUE users",
                "Developed reports using SQL skills",
                "Worked with servers and databases for educational institution",
              ]}
              technologies={["SQL Database", "Database Administration", "Systems Administration"]}
            />
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Technical Expertise
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <SkillCategory
              title="Database Technologies"
              skills={[
                "PostgreSQL",
                "Microsoft SQL Server",
                "MongoDB",
                "MySQL",
                "Cassandra",
                "Query Tuning",
                "Index Optimization",
                "Performance Tuning",
                "OLTP",
                "Data Migration",
                "Backup & Recovery",
              ]}
            />
            <SkillCategory
              title="Cloud & Infrastructure"
              skills={[
                "AWS",
                "Azure",
                "Kubernetes",
                "Docker",
                "Terraform",
                "Puppet",
                "GitOps",
                "CI/CD",
                "Infrastructure as Code",
              ]}
            />
            <SkillCategory
              title="Monitoring & Tools"
              skills={["Datadog", "Performance Metrics", "Real-time Alerting", "Apache Airflow"]}
            />
            <SkillCategory
              title="Development & AI/ML"
              skills={[
                "Python",
                "SQL",
                "Bash/Shell",
                "FastAPI",
                "AI-driven Database Solutions",
                "Ollama",
                "Azure AI",
                "Local LLM Deployment",
              ]}
            />
            <SkillCategory
              title="Security & Compliance"
              skills={[
                "Transparent Data Encryption (TDE)",
                "Change Data Capture (CDC)",
                "HIPAA",
                "SOC 2",
                "Privacy-First Architecture",
              ]}
            />
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Education & Certifications
          </h2>
          <div className="space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800/50">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Master&apos;s Degree, Information Security and Assurance
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Western Governors University | 2014 - 2015
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800/50">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Bachelor&apos;s Degree, Information Systems with Major in Networks
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                EDP College of Puerto Rico Inc-San Juan | 2008 - 2012
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800/50">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Recent Certifications
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Microsoft Certified: Azure AI Fundamentals</strong> - Microsoft (October
                  2025)
                </li>
                <li>
                  <strong>Astronomer Certification for Apache Airflow 3 Fundamentals</strong> -
                  Astronomer (July 2025)
                </li>
                <li className="text-sm text-gray-600 dark:text-gray-400">
                  + 14 additional certifications in database administration, cloud architecture, and
                  related technologies
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Open Source Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Open Source Projects
          </h2>
          <div className="rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50 p-8 dark:border-blue-700 dark:from-blue-950/30 dark:to-purple-950/30">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-4xl">🤖</span>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  iqtoolkit Analyzer
                </h3>
                <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-4">
                  Founder & Lead Developer
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Self-hosted, privacy-first database intelligence platform for PostgreSQL and MongoDB
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              <li>• Open-source (MIT license), container-native, ML-enabled query analyzer</li>
              <li>• Privacy by design with Ollama local AI (no vendor lock-in)</li>
              <li>• Multi-database support: PostgreSQL, MongoDB (MySQL/SQL Server roadmapped)</li>
              <li>
                • Actively driving AI-powered anomaly detection and user-first experience for
                operations teams
              </li>
              <li>
                • Complete rebranding from &apos;slow-query-doctor&apos; to &apos;iqtoolkit
                Analyzer&apos; with v0.2.2a1
              </li>
            </ul>
            <a
              href="https://github.com/iqtoolkit/iqtoolkit-analyzer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-700"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              View on GitHub
            </a>
          </div>
        </section>

        {/* Languages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Languages</h2>
          <div className="flex gap-4">
            <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800/50">
              <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">English 🇺🇸</p>
              <p className="text-gray-600 dark:text-gray-400">Professional working proficiency</p>
            </div>
            <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800/50">
              <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Spanish 🇵🇷</p>
              <p className="text-gray-600 dark:text-gray-400">Native or bilingual proficiency</p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white p-12 dark:border-blue-700 dark:from-blue-950/30 dark:to-gray-900">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Interested in database optimization, AI-powered solutions, or contributing to
              iqtoolkit? Let&apos;s connect on LinkedIn or GitHub.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://linkedin.com/in/gmartinez-dbai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-medium text-white transition-all hover:bg-blue-700"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect on LinkedIn
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border-2 border-blue-600 px-8 py-4 text-base font-medium text-blue-600 transition-all hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white"
              >
                Back to iqtoolkit.ai
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

interface ExperienceCardProps {
  company: string;
  title: string;
  location: string;
  period: string;
  duration: string;
  highlights: string[];
  technologies: string[];
}

function ExperienceCard({
  company,
  title,
  location,
  period,
  duration,
  highlights,
  technologies,
}: ExperienceCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800/50">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{company}</h3>
        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-1">{title}</p>
        <div className="flex flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-400">
          <span>{location}</span>
          <span>•</span>
          <span>{period}</span>
          <span>•</span>
          <span>{duration}</span>
        </div>
      </div>
      <ul className="space-y-2 mb-6">
        {highlights.map((highlight, index) => (
          <li key={index} className="text-gray-700 dark:text-gray-300 flex gap-2">
            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800/50">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-sm text-gray-700 dark:text-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
