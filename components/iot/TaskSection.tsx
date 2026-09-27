"use client";

import React from "react";
import {
  BookOpen,
  Lightbulb,
  Cpu,
  Wrench,
  Settings,
  Code2,
  ImageIcon,
  Video,
  Sparkles,
  AlertTriangle,
  Compass,
} from "lucide-react";
import { IoTTask } from "@/data/iotData";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { CodeBlock } from "./CodeBlock";
import { MediaPlaceholder } from "./MediaPlaceholder";
import { VimeoEmbed } from "./VimeoEmbed";

interface TaskSectionProps {
  task: IoTTask;
}

export function TaskSection({ task }: TaskSectionProps) {
  const hasImages = task.images && task.images.length > 0;
  const hasVideos = task.videos && task.videos.length > 0;

  return (
    <section
      id={task.id}
      className="glass-card rounded-2xl p-6 sm:p-10 border border-[var(--border)] bg-[#12151E] space-y-10 shadow-2xl scroll-mt-36"
    >
      {/* Task Header */}
      <div className="space-y-3 border-b border-[var(--border)] pb-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-md bg-[var(--accent-muted)] border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-mono font-bold tracking-wider uppercase">
            Task {task.number}
          </span>
          <span className="text-xs text-[var(--text-secondary)] font-medium">
            {task.subtitle}
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[var(--text-primary)] tracking-tight">
          {task.title}
        </h2>
      </div>

      {/* 1. Overview */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider flex items-center gap-2 font-heading">
          <BookOpen className="w-4 h-4 text-[var(--accent)]" />
          <span>1. Overview</span>
        </h3>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed bg-[var(--bg)] p-5 rounded-xl border border-[var(--border)]">
          {task.overview}
        </p>
      </div>

      {/* 2. Concepts */}
      {task.concepts && task.concepts.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider flex items-center gap-2 font-heading">
            <Lightbulb className="w-4 h-4 text-[var(--accent)]" />
            <span>2. Key Technical Concepts</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {task.concepts.map((concept, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[var(--bg)] border border-[var(--border)] space-y-1.5 hover:border-[var(--accent)]/40 transition-colors"
              >
                <h4 className="text-xs font-bold text-[var(--text-primary)] font-heading">
                  {concept.term}
                </h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {concept.definition}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. System Design */}
      {task.diagramSteps && task.diagramSteps.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider flex items-center gap-2 font-heading">
            <Cpu className="w-4 h-4 text-[var(--accent)]" />
            <span>3. System Design & Data Flow</span>
          </h3>
          <ArchitectureDiagram steps={task.diagramSteps} title={`${task.title} Data Flow`} />
        </div>
      )}

      {/* 4. Hardware & Software */}
      {task.hardware && task.hardware.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider flex items-center gap-2 font-heading">
            <Wrench className="w-4 h-4 text-[var(--accent)]" />
            <span>4. Hardware & Software Specifications</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {task.hardware.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] space-y-1"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-[var(--text-primary)] truncate">
                    {item.name}
                  </span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--accent)]/30 shrink-0">
                    {item.category}
                  </span>
                </div>
                <p className="text-[11px] text-[var(--text-secondary)] leading-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. Wiring / Setup */}
      {task.wiringNotes && (
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider flex items-center gap-2 font-heading">
            <Settings className="w-4 h-4 text-[var(--accent)]" />
            <span>5. Wiring & Electrical Setup</span>
          </h3>
          <div className="p-4 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            {task.wiringNotes}
          </div>
        </div>
      )}

      {/* 6. Implementation Source Code */}
      {task.codeSnippets && task.codeSnippets.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider flex items-center gap-2 font-heading">
            <Code2 className="w-4 h-4 text-[var(--accent)]" />
            <span>6. Implementation Source Code</span>
          </h3>
          <div className="space-y-4">
            {task.codeSnippets.map((snippet, idx) => (
              <CodeBlock key={idx} snippet={snippet} />
            ))}
          </div>
        </div>
      )}

      {/* 7. Configuration */}
      {task.configuration && task.configuration.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider flex items-center gap-2 font-heading">
            <Settings className="w-4 h-4 text-[var(--accent)]" />
            <span>7. System Configuration & Setup Steps</span>
          </h3>
          <ul className="space-y-2 bg-[var(--bg)] p-5 rounded-xl border border-[var(--border)]">
            {task.configuration.map((step, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-primary)]"
              >
                <span className="w-5 h-5 rounded-full bg-[var(--accent-muted)] border border-[var(--accent)]/40 text-[var(--accent)] text-[10px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed text-[var(--text-secondary)]">{step}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 8. Evidence Section */}
      {(hasImages || hasVideos) && (
        <div className="space-y-6 border-t border-[var(--border)] pt-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider flex items-center gap-2 font-heading">
              <ImageIcon className="w-4 h-4 text-[var(--accent)]" />
              <span>8. Evidence</span>
            </h3>
            <span className="text-[10px] font-mono text-[var(--text-secondary)]">
              Task {task.number} Documentation Media
            </span>
          </div>

          {/* Photographic Evidence */}
          {hasImages && (
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {task.images.map((img, idx) => (
                  <MediaPlaceholder key={idx} type="image" src={img.src} alt={img.alt} />
                ))}
              </div>
            </div>
          )}

          {/* Demonstration Video Evidence (Only if videos exist) */}
          {hasVideos && (
            <div className="space-y-3 pt-2">
              <div className="grid grid-cols-1 gap-4">
                {task.videos.map((vid, idx) => (
                  <VimeoEmbed
                    key={idx}
                    videoId={vid.videoId!}
                    title={vid.title}
                    aspectRatio={vid.aspectRatio || "16/9"}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Limitations & Future Improvements (Only present for Task 05 if applicable) */}
      {task.limitations && task.limitations.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-[var(--border)] pt-6">
          <div className="p-4 rounded-xl bg-[var(--bg)] border border-[var(--border)] space-y-2">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5 font-heading">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Technical Limitations</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-[var(--text-secondary)] list-disc list-inside leading-relaxed">
              {task.limitations.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-[var(--bg)] border border-[var(--border)] space-y-2">
            <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5 font-heading">
              <Compass className="w-3.5 h-3.5" />
              <span>Future System Improvements</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-[var(--text-secondary)] list-disc list-inside leading-relaxed">
              {task.futureImprovements?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* 9. Reflection */}
      <div className="space-y-3 bg-[var(--accent-muted)]/40 p-5 rounded-xl border border-[var(--accent)]/30">
        <h3 className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider flex items-center gap-2 font-heading">
          <Sparkles className="w-4 h-4 text-[var(--accent)]" />
          <span>9. Reflection</span>
        </h3>
        <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed italic">
          "{task.reflection}"
        </p>
      </div>
    </section>
  );
}
