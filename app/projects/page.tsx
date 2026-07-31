import React from "react";
import { FolderGit2, ExternalLink, ArrowUpRight } from "lucide-react";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function ProjectsPage() {
  return (
    <div className="py-12 space-y-12">
      {/* Header */}
      <RevealOnScroll delayMs={0}>
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--accent-muted)] border border-[var(--accent)]/30 text-[var(--accent)] text-xs uppercase tracking-widest font-semibold">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Portfolio Showcase</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight">
            Projects & <span className="text-gradient-accent">Repositories</span>
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            Real projects built across Python, React/React Native, machine learning analytics, and AI developer tooling.
          </p>
        </div>
      </RevealOnScroll>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PERSONAL_INFO.projects.map((project, idx) => (
          <RevealOnScroll key={project.id} delayMs={150 * (idx + 1)}>
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-[var(--border)] flex flex-col justify-between h-full hover:border-[var(--accent)]/50 transition-all duration-300 group shadow-lg">
              <div className="space-y-5">
                {/* Header Row: Badge & Repository Icon */}
                <div className="flex items-center justify-between">
                  {project.badgeText && (
                    <span className="px-2.5 py-1 rounded-md bg-[var(--bg)] border border-[var(--border)] text-[10px] uppercase font-bold tracking-wider text-[var(--accent)]">
                      {project.badgeText}
                    </span>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-1"
                      aria-label="View Source Code on GitHub"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                  )}
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h2 className="text-xl font-bold font-heading text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Footer: Tags & Repository Action */}
              <div className="pt-6 space-y-4 border-t border-[var(--border)]/50 mt-6">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded text-[10px] font-medium bg-[var(--bg)] border border-[var(--border)] text-[var(--text-secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--accent)] group-hover:translate-x-1 transition-transform uppercase tracking-wider"
                  >
                    <span>View Repository</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
