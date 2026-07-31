import React from "react";
import { Briefcase } from "lucide-react";
import { TimelineExperience } from "@/components/TimelineExperience";

export default function ExperiencePage() {
  return (
    <div className="py-12 space-y-12">
      {/* Header */}
      <div className="space-y-3 max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--accent-muted)] border border-[var(--accent)]/30 text-[var(--accent)] text-xs uppercase tracking-widest font-semibold">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Professional Chronicle</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight">
          Career & <span className="text-gradient-accent">Experience</span>
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
          A timeline of technical work, hands-on innovation engineering, and software project contributions.
        </p>
      </div>

      {/* Vertical Timeline */}
      <TimelineExperience />
    </div>
  );
}
