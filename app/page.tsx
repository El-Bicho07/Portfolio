import Link from "next/link";
import { ArrowRight, Code, Cpu, MapPin } from "lucide-react";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Home() {
  return (
    <div className="space-y-24 py-8">
      {/* 1. Hero Section */}
      <RevealOnScroll delayMs={0}>
        <section className="relative overflow-hidden rounded-2xl glass-card p-8 sm:p-12 lg:p-16 border border-[var(--border)]">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--accent-muted)] border border-[var(--accent)]/30 text-[var(--accent)] text-xs uppercase tracking-widest font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              <span>{PERSONAL_INFO.location}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight leading-none">
              {PERSONAL_INFO.headline}
            </h1>

            <p className="text-lg sm:text-xl font-medium text-[var(--text-primary)] leading-snug">
              {PERSONAL_INFO.subtext}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              {/* Primary CTA */}
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[var(--accent)] text-[var(--bg)] font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-all duration-200 glow-accent"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Secondary Contact CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-primary)] font-semibold text-sm uppercase tracking-wider hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
              >
                <span>Get In Touch</span>
              </Link>

              {/* Third Protosem Log CTA */}
              <Link
                href="/protosem"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-primary)] font-semibold text-sm uppercase tracking-wider hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
              >
                <span>Protosem Log</span>
              </Link>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* 2. Brief Intro / About Teaser */}
      <RevealOnScroll delayMs={150}>
        <section className="glass-card rounded-2xl p-8 sm:p-10 border border-[var(--border)]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 text-[var(--accent)] text-xs font-semibold uppercase tracking-widest">
                <Code className="w-4 h-4" />
                <span>Who I Am</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading">
                Driven by Machine Learning & Developer Tools
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                {PERSONAL_INFO.whoIAm}
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:underline whitespace-nowrap"
            >
              <span>Read more about me</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </RevealOnScroll>

      {/* 3. Condensed Skills Strip */}
      <RevealOnScroll delayMs={300}>
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[var(--text-secondary)] flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[var(--accent)]" />
              <span>Core Tech Stack</span>
            </h3>
            <Link
              href="/skills"
              className="text-xs text-[var(--accent)] hover:underline font-medium"
            >
              View Orbiting Skills →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {PERSONAL_INFO.skills.map((skill) => (
              <div
                key={skill.name}
                className="glass-card p-3 rounded-xl border border-[var(--border)] text-center flex flex-col items-center justify-center hover:border-[var(--accent)]/50 transition-colors"
              >
                <span className="text-xs font-bold text-[var(--text-primary)]">
                  {skill.name}
                </span>
                <span className="text-[9px] text-[var(--text-secondary)] mt-0.5">
                  {skill.category}
                </span>
              </div>
            ))}
          </div>
        </section>
      </RevealOnScroll>

      {/* 4. Featured Projects Preview */}
      <RevealOnScroll delayMs={450}>
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[var(--accent)]">
                Portfolio Showcase
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading mt-1">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--accent)] hover:underline"
            >
              <span>View all projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PERSONAL_INFO.projects.slice(0, 3).map((project) => (
              <div
                key={project.id}
                className="glass-card rounded-xl p-6 border border-[var(--border)] flex flex-col justify-between hover:border-[var(--accent)]/50 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold font-heading text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                      {project.title}
                    </h3>
                    {project.badgeText && (
                      <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider text-[var(--accent)] bg-[var(--bg)] border border-[var(--border)]">
                        {project.badgeText}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-6 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-medium bg-[var(--bg)] border border-[var(--border)] text-[var(--text-secondary)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--accent)] group-hover:translate-x-1 transition-transform"
                    >
                      <span>View Code</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--accent)] group-hover:translate-x-1 transition-transform"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </RevealOnScroll>
    </div>
  );
}
