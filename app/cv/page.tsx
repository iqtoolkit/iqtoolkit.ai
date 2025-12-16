import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giovanni Martinez — Resume / CV",
  description:
    "Database Administrator and AI-Enabled Database Architect with more than 10 years experience in PostgreSQL and open-source databases. Creator of iqtoolkit.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030712] text-[#e4ebff]">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-[#1f8f63] blur-[220px]"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#15487a] blur-[240px]"></div>
      </div>

      {/* Header */}
      <header className="relative border-b border-[#1f2b3f] bg-[#030712]/90 backdrop-blur-xl">
        <div className="mx-auto max-w-5xl px-6 py-6 lg:px-8">
          <Link href="/" className="text-sm text-[#8ea2c6] transition-colors hover:text-[#6dffbd]">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative mx-auto max-w-5xl px-6 py-16 lg:px-8">
        {/* Hero */}
        <div className="mb-16 text-center">
          <div className="mx-auto mb-6 inline-flex items-center justify-center rounded-full border border-[#1f2b3f] bg-[#0b1425] p-8 shadow-[0_25px_120px_rgba(3,7,18,0.6)]">
            <span className="text-6xl">👨‍💻</span>
          </div>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#6dffbd]">Curriculum Vitae</p>
          <h1 className="text-5xl font-bold text-white">Giovanni Martinez</h1>
          <p className="mt-2 text-2xl font-semibold bg-gradient-to-r from-[#3fb366] to-[#6dffbd] bg-clip-text text-transparent">
            Database Administrator · AI-Enabled Database Architect
          </p>
          <p className="mt-4 text-xl text-[#c0c9e5]">
            Ocala, FL • iqtoolkit.ai • github.com/gmartinez-dbai • linkedin.com/in/gmartinez-dbai •
            mastodon.social/@iqtoolkit • gio@iqtoolkit.ai
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
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
              href="https://github.com/gmartinez-dbai"
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
              href="https://mastodon.social/@iqtoolkit"
              target="_blank"
              rel="me noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#1f2b3f] px-6 py-3 text-sm font-medium text-[#c0c9e5] transition-all hover:border-[#6dffbd] hover:text-[#6dffbd]"
            >
              🐘 Mastodon
            </a>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-white">Professional Summary</h2>
          <div className="prose prose-lg max-w-none text-[#c0c9e5] prose-strong:text-white">
            <p>
              Database Administrator with more than 10 years of PostgreSQL and open-source database
              experience, focused on data optimization, AI-driven analysis tools, and large-scale
              implementation. Creator of <strong>iqtoolkit</strong> (launched 2025), an AI-powered
              multi-database analysis platform for PostgreSQL, MongoDB, and more.
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
          <h2 className="mb-8 text-3xl font-bold text-white">Experience</h2>
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
          <h2 className="mb-8 text-3xl font-bold text-white">Technical Expertise</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <SkillCategory
              title="Databases"
              skills={["PostgreSQL (10+ yrs)", "SQL Server", "Cassandra", "MongoDB", "MySQL"]}
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
          <h2 className="mb-8 text-3xl font-bold text-white">Education & Certifications</h2>
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#1f2b3f] bg-[#0b1425] p-6">
              <h3 className="mb-2 text-xl font-semibold text-white">
                Master&apos;s Degree, Information Security and Assurance
              </h3>
              <p className="text-[#8ea2c6]">Western Governors University | 2014 - 2015</p>
            </div>
            <div className="rounded-2xl border border-[#1f2b3f] bg-[#0b1425] p-6">
              <h3 className="mb-2 text-xl font-semibold text-white">
                Bachelor&apos;s Degree, Information Systems with Major in Networks
              </h3>
              <p className="text-[#8ea2c6]">
                EDP College of Puerto Rico Inc-San Juan | 2008 - 2012
              </p>
            </div>
            <div className="rounded-2xl border border-[#1f2b3f] bg-[#0b1425] p-6">
              <h3 className="mb-4 text-xl font-semibold text-white">Professional Certifications</h3>
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
          <h2 className="mb-8 text-3xl font-bold text-white">Open Source Projects</h2>
          <div className="rounded-2xl border border-[#1f2b3f] bg-gradient-to-br from-[#060c1a] to-[#0d1f23] p-8 shadow-[0_30px_160px_rgba(20,71,51,0.35)]">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-4xl">🤖</span>
              <div>
                <h3 className="mb-2 text-2xl font-bold text-white">iqtoolkit Analyzer</h3>
                <p className="mb-4 text-lg font-medium text-[#6dffbd]">Founder & Lead Developer</p>
              </div>
            </div>
            <p className="mb-4 text-[#c0c9e5]">
              Self-hosted, privacy-first database intelligence platform for PostgreSQL and MongoDB
            </p>
            <ul className="mb-6 space-y-2 text-[#c0c9e5]">
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
              className="inline-flex items-center gap-2 rounded-full bg-[#3fb366] px-6 py-3 text-sm font-semibold text-[#030712] transition-all hover:bg-[#6dffbd]"
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
          <h2 className="mb-6 text-3xl font-bold text-white">Languages</h2>
          <div className="flex gap-4">
            <div className="flex-1 rounded-2xl border border-[#1f2b3f] bg-[#0b1425] p-6">
              <p className="mb-2 text-lg font-semibold text-white">English 🇺🇸</p>
              <p className="text-[#8ea2c6]">Professional working proficiency</p>
            </div>
            <div className="flex-1 rounded-2xl border border-[#1f2b3f] bg-[#0b1425] p-6">
              <p className="mb-2 text-lg font-semibold text-white">Spanish 🇵🇷</p>
              <p className="text-[#8ea2c6]">Native or bilingual proficiency</p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="rounded-2xl border border-[#1f2b3f] bg-gradient-to-br from-[#060d1b] to-[#0e1f23] p-12">
            <h2 className="mb-4 text-3xl font-bold text-white">Let&apos;s Connect</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-[#c0c9e5]">
              Interested in database optimization, AI-powered solutions, or contributing to
              iqtoolkit? Reach out any time.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://linkedin.com/in/gmartinez-dbai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#3fb366] px-8 py-4 text-base font-semibold text-[#030712] transition-all hover:bg-[#6dffbd]"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect on LinkedIn
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-[#1f2b3f] px-8 py-4 text-base font-semibold text-[#c0c9e5] transition-all hover:border-[#6dffbd] hover:text-[#6dffbd]"
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
    <div className="rounded-2xl border border-[#1f2b3f] bg-[#0b1425] p-8 shadow-[0_20px_120px_rgba(3,7,18,0.55)]">
      <div className="mb-4">
        <h3 className="mb-2 text-2xl font-bold text-white">{company}</h3>
        <p className="mb-1 text-lg font-semibold text-[#6dffbd]">{title}</p>
        <div className="flex flex-wrap gap-2 text-sm text-[#8ea2c6]">
          <span>{location}</span>
          <span>•</span>
          <span>{period}</span>
          <span>•</span>
          <span>{duration}</span>
        </div>
      </div>
      <ul className="mb-6 space-y-2">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex gap-2 text-[#c0c9e5]">
            <span className="mt-1 text-[#6dffbd]">•</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center rounded-full bg-[#123f2a] px-3 py-1 text-xs font-medium text-[#6dffbd]"
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
    <div className="rounded-2xl border border-[#1f2b3f] bg-[#0b1425] p-6">
      <h3 className="mb-4 text-xl font-bold text-white">{title}</h3>
      <div className="flex flex-wrap gap-2 text-[#c0c9e5]">
        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center rounded-full bg-[#111b2d] px-3 py-1 text-sm"
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
    <div className="border-l-4 border-[#3fb366] pl-4">
      <h4 className="mb-3 text-lg font-semibold text-white">{title}</h4>
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
    <div className="text-[#c0c9e5]">
      <div className="font-medium text-white">{name}</div>
      <div className="text-sm text-[#8ea2c6]">
        {issuer} • {date}
        {expires && ` • Expires ${expires}`}
        {credentialId && (
          <span className="ml-2 rounded bg-[#111b2d] px-2 py-0.5 text-xs font-mono">
            ID: {credentialId}
          </span>
        )}
      </div>
    </div>
  );
}
