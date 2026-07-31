"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Terminal,
  Cpu,
  Sparkles,
  Code2,
  Globe,
  Palette,
  GitBranch,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface SkillNode {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
}

const SKILL_NODES: SkillNode[] = [
  {
    id: "python",
    name: "Python",
    category: "Primary Focus & Core Language",
    icon: <Terminal className="w-4 h-4" />,
  },
  {
    id: "ml",
    name: "Machine Learning",
    category: "Primary Focus & Models",
    icon: <Cpu className="w-4 h-4" />,
  },
  {
    id: "ai-tooling",
    name: "AI-Agent Tooling",
    category: "Antigravity & Cursor",
    icon: <Sparkles className="w-4 h-4" />,
  },
  {
    id: "ts",
    name: "TypeScript",
    category: "Web Tooling",
    icon: <Code2 className="w-4 h-4" />,
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Web Framework",
    icon: <Globe className="w-4 h-4" />,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Design System Styling",
    icon: <Palette className="w-4 h-4" />,
  },
  {
    id: "git",
    name: "Git",
    category: "Version Control",
    icon: <GitBranch className="w-4 h-4" />,
  },
];

export function OrbitingSkills() {
  const [activeSkill, setActiveSkill] = useState<SkillNode | null>(null);
  const [isCenterHovered, setIsCenterHovered] = useState(false);

  const total = SKILL_NODES.length;
  const desktopRadius = 190;
  const mobileRadius = 125;

  return (
    <div className="flex flex-col items-center justify-center space-y-8 py-6">
      {/* Skill Description Box */}
      <div className="h-12 flex items-center justify-center text-center">
        {activeSkill ? (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent-muted)] border border-[var(--accent)] text-xs font-semibold text-[var(--accent)] animate-fade-in glow-accent">
            <span>{activeSkill.name}</span>
            <span className="opacity-40">•</span>
            <span className="text-[var(--text-secondary)] font-normal">
              {activeSkill.category}
            </span>
          </div>
        ) : (
          <p className="text-xs text-[var(--text-secondary)]">
            Hover over the center to pause orbit, or hover/tap any skill node to inspect.
          </p>
        )}
      </div>

      {/* Orbit Container */}
      <div
        className={`relative w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] flex items-center justify-center rounded-full select-none ${
          isCenterHovered ? "orbit-paused" : ""
        }`}
      >
        {/* Track Rings */}
        <div className="absolute inset-4 sm:inset-8 rounded-full border border-dashed border-[var(--border)] pointer-events-none opacity-60" />
        <div className="absolute inset-16 sm:inset-24 rounded-full border border-[var(--border)]/40 pointer-events-none" />

        {/* Center Badge with Real Profile Photo */}
        <div
          onMouseEnter={() => setIsCenterHovered(true)}
          onMouseLeave={() => setIsCenterHovered(false)}
          className="z-20 w-28 h-28 sm:w-36 sm:h-36 rounded-full glass-card border-2 border-[var(--accent)] flex flex-col items-center justify-center p-2 text-center shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-300 glow-accent relative overflow-hidden group"
        >
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border border-[var(--accent)] mb-1 shadow-md">
            <Image
              src="/suryakumar.jpg"
              alt="Suryakumar"
              fill
              className="object-cover object-top"
            />
          </div>
          <span className="font-heading font-extrabold text-[11px] sm:text-xs text-[var(--text-primary)] leading-none">
            {PERSONAL_INFO.name}
          </span>
          <span className="text-[8px] sm:text-[9px] text-[var(--accent)] mt-1 font-semibold uppercase tracking-wider">
            {isCenterHovered ? "Orbit Paused" : "Hover to Pause"}
          </span>
        </div>

        {/* Orbiting Skill Nodes */}
        <div
          className={`absolute inset-0 w-full h-full animate-orbit ${
            isCenterHovered ? "[animation-play-state:paused]" : ""
          }`}
        >
          {SKILL_NODES.map((skill, index) => {
            const angleRad = (index * (2 * Math.PI)) / total;
            const desktopX = Math.cos(angleRad) * desktopRadius;
            const desktopY = Math.sin(angleRad) * desktopRadius;
            const mobileX = Math.cos(angleRad) * mobileRadius;
            const mobileY = Math.sin(angleRad) * mobileRadius;

            const isHighlighted = activeSkill?.id === skill.id;
            const isPrimaryFocus = skill.id === "python" || skill.id === "ml";

            return (
              <div
                key={skill.id}
                style={
                  {
                    "--dx": `${desktopX}px`,
                    "--dy": `${desktopY}px`,
                    "--mx": `${mobileX}px`,
                    "--my": `${mobileY}px`,
                  } as React.CSSProperties
                }
                className="absolute left-1/2 top-1/2 -ml-6 -mt-6 sm:-ml-8 sm:-mt-8 transform-orbit"
              >
                <div
                  className={`animate-counter-orbit ${
                    isCenterHovered ? "[animation-play-state:paused]" : ""
                  }`}
                >
                  <button
                    onMouseEnter={() => setActiveSkill(skill)}
                    onMouseLeave={() => setActiveSkill(null)}
                    onClick={() => setActiveSkill(isHighlighted ? null : skill)}
                    className={`group flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-semibold transition-all duration-200 shadow-lg ${
                      isHighlighted
                        ? "bg-[var(--accent)] text-[var(--bg)] border-[var(--accent)] scale-115 z-30 glow-accent"
                        : isPrimaryFocus
                        ? "glass-card text-[var(--text-primary)] border-[var(--accent)]/60 text-[var(--accent)] glow-accent"
                        : "glass-card text-[var(--text-primary)] border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    }`}
                  >
                    <span className={isHighlighted ? "text-[var(--bg)]" : "text-[var(--accent)]"}>
                      {skill.icon}
                    </span>
                    <span className="whitespace-nowrap font-heading text-[11px] sm:text-xs">
                      {skill.name}
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
