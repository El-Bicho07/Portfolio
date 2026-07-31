import React from "react";
import { Cpu, Code2, Database, Wrench } from "lucide-react";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { OrbitingSkills } from "@/components/OrbitingSkills";

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Core Technologies",
      icon: <Cpu className="w-4 h-4 text-[var(--accent)]" />,
      items: ["Python", "Machine Learning", "AI-Assisted Dev Tooling"],
    },
    {
      title: "Web & Frontend",
      icon: <Code2 className="w-4 h-4 text-[var(--accent)]" />,
      items: ["TypeScript", "Next.js (App Router)", "React", "Tailwind CSS"],
    },
    {
      title: "Tooling & Infrastructure",
      icon: <Wrench className="w-4 h-4 text-[var(--accent)]" />,
      items: ["Git & GitHub", "REST APIs", "Vercel", "VS Code Extensions"],
    },
  ];

  return (
    <div className="py-12 space-y-16">
      {/* Page Title */}
      <RevealOnScroll delayMs={0}>
        <div className="space-y-3 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--accent-muted)] border border-[var(--accent)]/30 text-[var(--accent)] text-xs uppercase tracking-widest font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Expertise Orbit</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight">
            Skills & <span className="text-gradient-accent">Ecosystem</span>
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            Hover over the central badge to pause the orbit, or interact with individual nodes to inspect core competencies.
          </p>
        </div>
      </RevealOnScroll>

      {/* Orbiting Skills Visualization */}
      <RevealOnScroll delayMs={150}>
        <div className="glass-card rounded-3xl p-6 sm:p-12 border border-[var(--border)] relative overflow-hidden">
          <OrbitingSkills />
        </div>
      </RevealOnScroll>

      {/* Structured Category Breakdown */}
      <RevealOnScroll delayMs={300}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className="glass-card p-6 rounded-2xl border border-[var(--border)] space-y-4 hover:border-[var(--accent)]/40 transition-colors"
            >
              <div className="flex items-center gap-2 text-sm font-bold font-heading text-[var(--text-primary)]">
                {cat.icon}
                <span>{cat.title}</span>
              </div>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-xs text-[var(--text-secondary)] font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </div>
  );
}
