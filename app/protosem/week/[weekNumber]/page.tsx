import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Sparkles,
  BookOpen,
  ImageIcon,
  Tag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { PROTOSEM_ENTRIES } from "@/data/protosem";

interface WeekPageProps {
  params: Promise<{
    weekNumber: string;
  }>;
}

export async function generateStaticParams() {
  return PROTOSEM_ENTRIES.map((entry) => ({
    weekNumber: String(entry.weekNumber),
  }));
}

export default async function ProtosemWeekPage({ params }: WeekPageProps) {
  const { weekNumber } = await params;
  const currentIndex = PROTOSEM_ENTRIES.findIndex(
    (e) => String(e.weekNumber) === String(weekNumber)
  );

  if (currentIndex === -1) {
    notFound();
  }

  const entry = PROTOSEM_ENTRIES[currentIndex];
  const prevEntry = currentIndex > 0 ? PROTOSEM_ENTRIES[currentIndex - 1] : null;
  const nextEntry =
    currentIndex < PROTOSEM_ENTRIES.length - 1
      ? PROTOSEM_ENTRIES[currentIndex + 1]
      : null;

  const images = entry.images || [];

  return (
    <div className="py-12 space-y-8 max-w-4xl mx-auto">
      {/* Top Back Navigation Link */}
      <RevealOnScroll delayMs={0}>
        <Link
          href="/protosem"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--accent)] text-xs font-semibold uppercase tracking-wider hover:border-[var(--accent)] transition-all duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Protosem Logs</span>
        </Link>
      </RevealOnScroll>

      {/* Main Document Card */}
      <RevealOnScroll delayMs={100}>
        <article className="glass-card rounded-2xl p-8 sm:p-12 border border-[var(--border)] bg-[#12151E] space-y-8 shadow-2xl">
          {/* Header */}
          <div className="space-y-4 border-b border-[var(--border)] pb-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-md bg-[var(--accent-muted)] border border-[var(--accent)]/30 text-[var(--accent)] text-xs uppercase font-bold tracking-wider">
                {entry.week}
              </span>
              <span className="text-xs text-[var(--text-secondary)] flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>{entry.date}</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-[var(--text-primary)]">
              {entry.title}
            </h1>

            {/* Skills Used Tag Row */}
            {entry.skillsUsed && entry.skillsUsed.length > 0 && (
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-[var(--text-secondary)] flex items-center gap-1.5 mr-1">
                  <Tag className="w-3.5 h-3.5 text-[var(--accent)]" />
                  <span>Skills Used:</span>
                </span>
                {entry.skillsUsed.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-xs bg-[var(--bg)] border border-[var(--border)] text-[var(--accent)] font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Sprint Highlights */}
          {entry.notes && entry.notes.length > 0 && (
            <div className="space-y-3 bg-[var(--bg)] p-5 rounded-xl border border-[var(--border)]">
              <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider block flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[var(--accent)]" />
                <span>Sprint Highlights</span>
              </span>
              <ul className="space-y-2">
                {entry.notes.map((note, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2.5 text-xs sm:text-sm text-[var(--text-primary)] font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Full Weekly Report (Structured with Subheadings if multiple distinct activities exist) */}
          <div className="space-y-4 pt-2">
            <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider block flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[var(--accent)]" />
              <span>Full Weekly Report</span>
            </span>

            <div className="p-6 sm:p-8 rounded-xl bg-[var(--bg)] border border-[var(--border)] space-y-6">
              {entry.sections && entry.sections.length > 0 ? (
                /* Multi-activity entries split into short subheadings */
                <div className="space-y-6">
                  {entry.sections.map((section, idx) => (
                    <div key={idx} className="space-y-2">
                      <h3 className="text-sm font-bold text-[var(--accent)] uppercase tracking-wider">
                        {section.subheading}
                      </h3>
                      <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                        {section.text}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                /* Continuous report block for single-throughline entries */
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                  {entry.content}
                </p>
              )}
            </div>
          </div>

          {/* Photo Gallery Section */}
          <div className="space-y-4 pt-4 border-t border-[var(--border)]">
            <span className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider block flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-[var(--accent)]" />
              <span>Week Photo Gallery ({images.length} Photos)</span>
            </span>

            {images.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((src, idx) => (
                  <div
                    key={src}
                    className="group relative aspect-video rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--bg)] shadow-md"
                  >
                    <img
                      src={src}
                      alt={`${entry.title} photo ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            ) : (
              /* Clear "No photos added yet" Empty State */
              <div className="p-8 rounded-xl bg-[var(--bg)] border border-dashed border-[var(--border)] text-center space-y-2">
                <ImageIcon className="w-8 h-8 text-[var(--text-secondary)] mx-auto opacity-40" />
                <p className="text-xs text-[var(--text-secondary)] font-medium">
                  No photos added yet for this week
                </p>
              </div>
            )}
          </div>

          {/* Bottom Navigation Links: Previous Week / Next Week */}
          <div className="pt-6 border-t border-[var(--border)] flex items-center justify-between gap-4">
            {prevEntry ? (
              <Link
                href={`/protosem/week/${prevEntry.weekNumber}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
              >
                <ChevronLeft className="w-4 h-4 text-[var(--accent)]" />
                <span>Previous: {prevEntry.week}</span>
              </Link>
            ) : (
              <div />
            )}

            {nextEntry ? (
              <Link
                href={`/protosem/week/${nextEntry.weekNumber}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200 ml-auto"
              >
                <span>Next: {nextEntry.week}</span>
                <ChevronRight className="w-4 h-4 text-[var(--accent)]" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </article>
      </RevealOnScroll>
    </div>
  );
}
