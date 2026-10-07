import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Cpu,
  Sparkles,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { IOT_HERO_DATA, IOT_TASKS, OVERALL_REFLECTION, PROJECT_OVERVIEW } from "@/data/iotData";
import { TaskNavigation } from "@/components/iot/TaskNavigation";
import { TaskSection } from "@/components/iot/TaskSection";
import { SystemAtAGlance } from "@/components/iot/SystemAtAGlance";
import { ProgressionMatrix } from "@/components/iot/ProgressionMatrix";

export const metadata: Metadata = {
  title: "IoT & Embedded Systems | Suryakumar.dev",
  description:
    "ESP32 Microcontroller Architecture, MQTT & Firebase Cloud Integration Documentation — ProtoSem Log Week 07",
};

export default function IoTDocumentationPage() {
  return (
    <div className="py-12 space-y-12 max-w-5xl mx-auto">
      {/* Top Back Navigation Link */}
      <RevealOnScroll delayMs={0}>
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/protosem"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--accent)] text-xs font-semibold uppercase tracking-wider hover:border-[var(--accent)] transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Protosem Logs</span>
          </Link>

          <span className="text-xs font-mono text-[var(--text-secondary)]">
            Protosem Progress Log · Week 07
          </span>
        </div>
      </RevealOnScroll>

      {/* 1. HERO SECTION */}
      <RevealOnScroll delayMs={100}>
        <header className="glass-card rounded-2xl p-8 sm:p-12 border border-[var(--border)] bg-[#12151E] space-y-8 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Accent Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

          <div className="space-y-4 max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--accent-muted)] border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-mono uppercase tracking-widest font-bold">
              <Cpu className="w-3.5 h-3.5" />
              <span>{IOT_HERO_DATA.weekLabel}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight text-[var(--text-primary)]">
              {IOT_HERO_DATA.title}
            </h1>

            <p className="text-xl sm:text-2xl font-bold font-heading text-gradient-accent">
              {IOT_HERO_DATA.subtitle}
            </p>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed pt-2">
              {IOT_HERO_DATA.description}
            </p>
          </div>

          {/* Architectural Progression Flow Strip */}
          <div className="space-y-3 pt-4 border-t border-[var(--border)] relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] flex items-center gap-2">
              <Zap className="w-4 h-4 text-[var(--accent)]" />
              <span>Architectural Evolution</span>
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
              {IOT_HERO_DATA.progression.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-center space-y-1 hover:border-[var(--accent)]/50 transition-colors"
                >
                  <span className="text-[10px] font-mono font-bold text-[var(--accent)] block">
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-bold text-[var(--text-primary)] block truncate">
                    {item.label}
                  </span>
                  <span className="text-[9px] text-[var(--text-secondary)] block truncate">
                    {item.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </header>
      </RevealOnScroll>

      {/* Project Overview Card */}
      <RevealOnScroll delayMs={150}>
        <section className="glass-card rounded-2xl p-6 sm:p-8 border border-[var(--border)] bg-[#12151E] space-y-4 shadow-xl">
          <div className="flex items-center gap-2 border-b border-[var(--border)] pb-3">
            <BookOpen className="w-4 h-4 text-[var(--accent)]" />
            <h2 className="text-sm font-bold text-[var(--accent)] uppercase tracking-wider font-heading">
              Project Overview & Methodological Progression
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            {PROJECT_OVERVIEW}
          </p>
        </section>
      </RevealOnScroll>

      {/* 2. SYSTEM AT A GLANCE */}
      <RevealOnScroll delayMs={200}>
        <SystemAtAGlance />
      </RevealOnScroll>

      {/* 3. TASK PROGRESSION MATRIX */}
      <RevealOnScroll delayMs={250}>
        <ProgressionMatrix />
      </RevealOnScroll>

      {/* 4. STICKY TASK NAVIGATION */}
      <TaskNavigation />

      {/* 5. MAIN TASK CASE STUDIES (Tasks 01 to 05) */}
      <div className="space-y-12">
        {IOT_TASKS.map((task) => (
          <RevealOnScroll key={task.id} delayMs={100}>
            <TaskSection task={task} />
          </RevealOnScroll>
        ))}
      </div>

      {/* 6. CONCLUSION (Synthesis & Lessons Learned) */}
      <RevealOnScroll delayMs={200}>
        <section className="glass-card rounded-2xl p-8 sm:p-10 border border-[var(--border)] bg-[#12151E] space-y-6 shadow-2xl">
          <div className="space-y-2 border-b border-[var(--border)] pb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[var(--accent)]" />
              <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider font-heading">
                Comprehensive Synthesis
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[var(--text-primary)]">
              Overall Technical Reflection & Lessons Learned
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed whitespace-pre-line bg-[var(--bg)] p-6 rounded-xl border border-[var(--border)] font-normal">
            {OVERALL_REFLECTION}
          </p>

          <div className="pt-4 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified ESP32 Technical Documentation · Suryakumar.dev</span>
            </div>

            <Link
              href="/protosem"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--accent-muted)] border border-[var(--accent)]/40 text-[var(--accent)] text-xs font-bold uppercase tracking-wider hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-all duration-200 shadow-sm"
            >
              <span>Back to All ProtoSem Logs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </RevealOnScroll>
    </div>
  );
}
