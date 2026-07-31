"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Briefcase, Calendar, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { EXPERIENCE_ENTRIES, ExperienceEntry } from "@/data/experienceData";

export function TimelineExperience() {
  const [activeNodes, setActiveNodes] = useState<Record<string, boolean>>({});
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-timeline-id");
            if (id) {
              setActiveNodes((prev) => ({ ...prev, [id]: true }));
            }
          }
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -100px 0px" }
    );

    const elements = containerRef.current?.querySelectorAll("[data-timeline-id]");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div ref={containerRef} className="relative py-6 max-w-4xl mx-auto space-y-12">
      {/* Background Vertical Timeline Line */}
      <div className="absolute left-4 sm:left-1/2 top-10 bottom-10 w-[2px] bg-[var(--border)] -translate-x-1/2 hidden sm:block pointer-events-none" />
      <div className="absolute left-5 top-10 bottom-10 w-[2px] bg-[var(--border)] sm:hidden pointer-events-none" />

      {EXPERIENCE_ENTRIES.map((entry, index) => {
        const isActive = !!activeNodes[entry.id];
        const isEven = index % 2 === 0;

        return (
          <div
            key={entry.id}
            data-timeline-id={entry.id}
            className={`relative flex flex-col sm:flex-row items-start ${
              isEven ? "sm:flex-row-reverse" : ""
            } gap-6 sm:gap-12 transition-all duration-700`}
          >
            {/* Timeline Center Node Ring */}
            <div className="absolute left-5 sm:left-1/2 top-6 -translate-x-1/2 z-10 flex items-center justify-center">
              <div
                className={`w-6 h-6 rounded-full border-2 transition-all duration-500 flex items-center justify-center ${
                  isActive
                    ? "bg-[var(--bg-elevated)] border-[var(--accent)] glow-accent scale-110"
                    : "bg-[var(--bg)] border-[var(--border)]"
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full transition-colors duration-500 ${
                    isActive ? "bg-[var(--accent)] animate-pulse" : "bg-gray-600"
                  }`}
                />
              </div>
            </div>

            {/* Content Card (Distinct horizontal slide/activate transition) */}
            <div className="w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0">
              <div
                className={`glass-card rounded-2xl p-6 sm:p-7 border transition-all duration-700 ${
                  isActive
                    ? "border-[var(--accent)]/40 shadow-xl opacity-100 translate-x-0"
                    : "border-[var(--border)] opacity-30 translate-x-6 sm:translate-x-0"
                }`}
              >
                {/* Entry Tag/Period */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[var(--accent)] px-2.5 py-1 rounded-md bg-[var(--accent-muted)]">
                    <Calendar className="w-3 h-3" />
                    <span>{entry.period}</span>
                  </span>
                  <span className="text-xs text-[var(--text-secondary)] font-medium">
                    {entry.organization}
                  </span>
                </div>

                {/* Role Title */}
                <h3 className="text-xl font-bold font-heading text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <span>{entry.role}</span>
                  {entry.id === "protosem-trainee" && (
                    <Sparkles className="w-4 h-4 text-[var(--accent)]" />
                  )}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {entry.description}
                </p>

                {/* Highlights List */}
                <ul className="space-y-2 mb-4">
                  {entry.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs text-[var(--text-primary)] font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Special Link (e.g. Innovation Engineer Trainee -> /protosem) */}
                {entry.link && (
                  <div className="pt-3 border-t border-[var(--border)]">
                    <Link
                      href={entry.link}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--accent)] hover:underline uppercase tracking-wider"
                    >
                      <span>{entry.linkText || "View Details →"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Spacer for 2-column Desktop Layout */}
            <div className="hidden sm:block sm:w-[calc(50%-2.5rem)]" />
          </div>
        );
      })}
    </div>
  );
}
