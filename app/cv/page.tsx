import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giovanni Martinez — Resume / CV",
  description:
    "Database Administrator and AI-Enabled Database Architect with 13+ years experience in PostgreSQL and open-source databases. Creator of iqtoolkit.",
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
          {/* Removed header download/Mastodon buttons per user preference */}
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
            Database Administrator | AI-Enabled Database Architect
          </p>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ocala, FL • www.iqtoolkit.ai • github.com/gmartinez-dbai •
            linkedin.com/in/gmartinez-dbai • mastodon.social/@iqtoolkit • gio@iqtoolkit.ai
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
              href="https://mastodon.social/@iqtoolkit"
              target="_blank"
              rel="me noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition-all hover:border-blue-600 hover:text-blue-600 dark:border-gray-700 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
            >
              🐘 Mastodon
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
              Database Administrator with <strong>13+ years</strong> of PostgreSQL and open-source
              database experience, focused on data optimization, AI-driven analysis tools, and
              large-scale implementation. Creator of <strong>iqtoolkit</strong> (launched 2025), an
              AI-powered multi-database analysis platform for PostgreSQL, MongoDB, and more.
            </p>
            <p>
              Demonstrated success deploying databases within Kubernetes and modern cloud-native
              environments. Experienced in integrating CI/CD, compliance, and automation into
              database operations, with hands-on coaching of teams in Postgres, Python, and DevOps
              tooling. Passionate about open-source, privacy-first data solutions, and distributed
              systems.
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
                "Diagnosed and resolved complex PostgreSQL performance and stability issues on terabyte-scale production infrastructure",
                "Architected and managed Datadog-based monitoring and real-time alerting for PostgreSQL",
                "Led database deployments inside Kubernetes, including CloudNativePG tests and Liquibase integration into CI/CD",
                "Implemented Transparent Data Encryption (TDE) and Change Data Capture (CDC) for SQL Server",
                "Automated routines using Puppet and Terraform; standardized configuration management",
                "Mentored team members in Python, PostgreSQL, Kubernetes, DevOps Tools, and Terraform",
              ]}
              technologies={[
                "PostgreSQL",
                "SQL Server",
                "Kubernetes",
                "Docker",
                "Terraform",
                "Liquibase",
                "Datadog",
                "AWS",
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
                "Assisted teams with troubleshooting, tuning, and cluster configurations for Cassandra & PostgreSQL",
                "Implemented MongoDB upgrade with zero downtime",
                "Automated provisioning and routine tasks using Bash/Python/PowerShell",
                "Supported MySQL, Cassandra, MongoDB, PostgreSQL, and SQL Server (monitoring, backup, failover, upgrades)",
                "Documented infrastructure and best practices",
              ]}
              technologies={[
                "PostgreSQL",
                "Cassandra",
                "MongoDB",
                "MySQL",
                "SQL Server",
                "Automation",
              ]}
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
              technologies={["SQL Server", "Database Administration", "Systems Administration"]}
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
              title="Databases"
              skills={["PostgreSQL (13+ yrs)", "SQL Server", "Cassandra", "MongoDB", "MySQL"]}
            />
            <SkillCategory
              title="Data Engineering"
              skills={[
                "Apache Airflow",
                "Argo Workflows",
                "DBT (familiar)",
                "Liquibase",
                "Data pipeline automation",
              ]}
            />
            <SkillCategory
              title="Cloud & Infrastructure"
              skills={["Azure", "AWS", "Kubernetes", "Docker", "Terraform", "Linode", "Puppet"]}
            />
            <SkillCategory
              title="Development & AI/ML"
              skills={["Python", "SQL", "Bash/Shell", "FastAPI", "Local LLM deployment (Ollama)"]}
            />
            <SkillCategory
              title="Security & Compliance"
              skills={[
                "Access control",
                "Transparent Data Encryption (TDE)",
                "Change Data Capture (CDC)",
                "HIPAA",
                "SOC 2",
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
                Professional Certifications
              </h3>
              <div className="space-y-3">
                <CertificationGroup title="Cloud & AI">
                  <Certification
                    name="Microsoft Certified: Azure AI Fundamentals (AI-900)"
                    issuer="Microsoft"
                    date="2025"
                  />
                </CertificationGroup>

                <CertificationGroup title="Data Engineering & Orchestration">
                  <Certification
                    name="Astronomer Certification for Apache Airflow (Fundamentals & DAG Authoring)"
                    issuer="Astronomer"
                    date="2021–2025"
                  />
                  <Certification
                    name="Liquibase Certified Practitioner"
                    issuer="Liquibase"
                    date="2025"
                  />
                  <Certification name="Liquibase Fundamentals" issuer="Liquibase" date="2020" />
                </CertificationGroup>

                <CertificationGroup title="Kubernetes & Containers">
                  <Certification
                    name="CKA: Certified Kubernetes Administrator"
                    issuer="The Linux Foundation"
                    date="2024"
                    expires="2026"
                  />
                  <Certification
                    name="CAPA: Certified Argo Project Associate"
                    issuer="The Linux Foundation"
                    date="2024"
                    expires="2026"
                  />
                </CertificationGroup>

                <CertificationGroup title="Azure Architecture & Administration">
                  <Certification
                    name="Microsoft Certified: Azure Solutions Architect Expert"
                    issuer="Microsoft"
                    date="2023"
                    expires="2026"
                  />
                  <Certification
                    name="Microsoft Certified: Azure Administrator Associate"
                    issuer="Microsoft"
                    date="2023"
                    expires="2026"
                  />
                </CertificationGroup>

                <CertificationGroup title="Programming & Databases">
                  <Certification
                    name="PCEP™ – Certified Entry-Level Python Programmer"
                    issuer="Python Institute"
                    date="2024"
                  />
                  <Certification
                    name="Apache Cassandra™ 3.x Administrator Associate"
                    issuer="DataStax"
                    date="2020"
                  />
                  <Certification
                    name="Microsoft Certified: Azure Fundamentals"
                    issuer="Microsoft"
                    date="2020"
                  />
                </CertificationGroup>

                <CertificationGroup title="Database & Security">
                  <Certification
                    name="MCSA: SQL Server 2012/2014 - Certified 2016"
                    issuer="Microsoft"
                    date="2016"
                  />
                  <Certification
                    name="Computer Hacking Forensic Investigator Certification"
                    issuer="EC-Council"
                    date="2015"
                  />
                  <Certification
                    name="Certified Ethical Hacker (CEH)"
                    issuer="EC-Council"
                    date="2014"
                  />
                </CertificationGroup>
              </div>
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

interface CertificationGroupProps {
  title: string;
  children: React.ReactNode;
}

function CertificationGroup({ title, children }: CertificationGroupProps) {
  return (
    <div className="border-l-4 border-blue-500 pl-4">
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{title}</h4>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

interface CertificationProps {
  name: string;
  issuer: string;
  date: string;
  expires?: string;
  credentialId?: string;
}

function Certification({ name, issuer, date, expires, credentialId }: CertificationProps) {
  return (
    <div className="text-gray-700 dark:text-gray-300">
      <div className="font-medium">{name}</div>
      <div className="text-sm text-gray-600 dark:text-gray-400">
        {issuer} • {date}
        {expires && ` • Expires ${expires}`}
        {credentialId && (
          <span className="ml-2 text-xs font-mono bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded">
            ID: {credentialId}
          </span>
        )}
      </div>
    </div>
  );
}
