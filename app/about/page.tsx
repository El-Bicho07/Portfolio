import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Terminal, Cpu, ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function AboutPage() {
  return (
    <div className="space-y-16 py-8">
      {/* Page Header */}
      <RevealOnScroll delayMs={0}>
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
            <Terminal className="w-4 h-4" />
            <span>About Me</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight">
            Who I Am & <span className="text-gradient-accent">How I Work</span>
          </h1>
        </div>
      </RevealOnScroll>

      {/* Main Grid: Avatar + Real Content Blocks */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Real Profile Photo Frame */}
        <div className="lg:col-span-5">
          <RevealOnScroll delayMs={150} direction="left">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-[var(--border)] relative group overflow-hidden shadow-2xl">
              {/* Profile Image Container */}
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-[var(--accent)]/40 shadow-2xl glow-accent">
                <Image
                  src="/suryakumar.jpg"
                  alt="Suryakumar"
                  fill
                  priority
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                {/* Subtle dark gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E] via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Photo Caption / Metadata */}
              <div className="mt-6 pt-4 border-t border-[var(--border)] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-heading font-extrabold text-lg text-[var(--text-primary)]">
                    {PERSONAL_INFO.name}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[var(--accent)] px-2.5 py-0.5 rounded-full bg-[var(--accent-muted)] border border-[var(--accent)]/30">
                    Developer
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-[var(--text-secondary)]">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[var(--accent)]" />
                    <span>Location</span>
                  </span>
                  <span className="font-semibold text-[var(--text-primary)]">
                    {PERSONAL_INFO.location}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-[var(--text-secondary)]">
                  <span className="flex items-center gap-1.5">
                    <Cpu className="w-4 h-4 text-[var(--accent)]" />
                    <span>Focus Stack</span>
                  </span>
                  <span className="font-semibold text-[var(--text-primary)]">
                    Python & Machine Learning
                  </span>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Right Column: Authentic Copy */}
        <div className="lg:col-span-7 space-y-8">
          <RevealOnScroll delayMs={300} direction="right">
            <div className="glass-card rounded-2xl p-8 border border-[var(--border)] space-y-6">
              {/* Who I Am Block */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)] block">
                  Who I Am
                </span>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  {PERSONAL_INFO.whoIAm}
                </p>
              </div>

              <div className="border-t border-[var(--border)] pt-6 space-y-3">
                {/* How I Work Block */}
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)] block">
                  How I Work & AI Collaborations
                </span>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  {PERSONAL_INFO.howIWork}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex items-center justify-between">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent)] text-[var(--bg)] text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-all glow-accent"
                >
                  <span>Explore Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/skills"
                  className="text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  View Orbiting Skills →
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
}
