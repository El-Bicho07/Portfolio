import React from "react";
import Link from "next/link";
import { Layers, Calendar, ArrowRight, FileText, ExternalLink } from "lucide-react";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { PROTOSEM_ENTRIES } from "@/data/protosem";

export default function ProtosemPage() {
  return (
    <div className="py-12 space-y-12">
      {/* Header */}
      <RevealOnScroll delayMs={0}>
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--accent-muted)] border border-[var(--accent)]/30 text-[var(--accent)] text-xs uppercase tracking-widest font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Practical Innovation Semester</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight">
            Protosem <span className="text-gradient-accent">Progress Logs</span>
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            Weekly progress logs, system prototyping notes, and practical updates from the Protosem innovation program.
          </p>
        </div>
      </RevealOnScroll>

      {/* 3-Column Overview Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROTOSEM_ENTRIES.map((entry, idx) => (
          <RevealOnScroll key={entry.id} delayMs={100 * (idx + 1)}>
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-[var(--border)] bg-[#12151E] flex flex-col justify-between space-y-6 hover:border-[var(--accent)]/50 transition-all duration-300 shadow-xl group h-full">
              {/* Card Header & Badge */}
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 border-b border-[var(--border)] pb-3">
                  <span className="px-2.5 py-1 rounded-md bg-[var(--accent-muted)] border border-[var(--accent)]/30 text-[var(--accent)] text-xs uppercase font-bold tracking-wider">
                    {entry.week}
                  </span>
                  <span className="text-xs text-[var(--text-secondary)] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[var(--accent)]" />
                    <span>{entry.date}</span>
                  </span>
                </div>

                <h2 className="text-lg sm:text-xl font-bold font-heading text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors leading-snug">
                  {entry.title}
                </h2>

                {/* Short Summary (1-2 sentences) */}
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {entry.summary}
                </p>
              </div>

              {/* View Document Button (Dynamic Route Link or External New Tab Link) */}
              <div className="pt-2 border-t border-[var(--border)]">
                {entry.externalUrl ? (
                  <a
                    href={entry.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[var(--accent-muted)] border border-[var(--accent)]/40 text-[var(--accent)] text-xs font-bold uppercase tracking-wider hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-all duration-200 shadow-sm group/btn"
                  >
                    <span className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span>View Document</span>
                    </span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <Link
                    href={`/protosem/week/${entry.weekNumber}`}
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[var(--accent-muted)] border border-[var(--accent)]/40 text-[var(--accent)] text-xs font-bold uppercase tracking-wider hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-all duration-200 shadow-sm group/btn"
                  >
                    <span className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span>View Document</span>
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
