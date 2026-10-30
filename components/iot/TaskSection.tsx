"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Lightbulb,
  Cpu,
  Wrench,
  Settings,
  Code2,
  ImageIcon,
  Sparkles,
  AlertTriangle,
  Compass,
  GitBranch,
  CheckCircle2,
  HelpCircle,
  Sliders,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { IoTTask } from "@/data/iotData";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { CircuitDiagram } from "./CircuitDiagram";
import { CodeBlock } from "./CodeBlock";
import { MediaPlaceholder } from "./MediaPlaceholder";
import { VimeoEmbed } from "./VimeoEmbed";

interface TaskSectionProps {
  task: IoTTask;
}

export function TaskSection({ task }: TaskSectionProps) {
  const [expandedTroubleshoot, setExpandedTroubleshoot] = useState<number | null>(0);
  const hasImages = task.images && task.images.length > 0;
  const hasVideos = task.videos && task.videos.length > 0;
  const hasEvidence = hasImages || hasVideos;

  return (
    <section
      id={task.id}
      className="glass-card rounded-2xl p-6 sm:p-10 border border-[var(--border)] bg-[#12151E] space-y-8 shadow-2xl scroll-mt-36"
    >
      {/* 1. Task Header */}
      <div className="space-y-4 border-b border-[var(--border)] pb-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-md bg-[var(--accent-muted)] border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-mono font-bold tracking-wider uppercase">
              Task {task.number}
            </span>
            <span className="text-xs text-[var(--text-secondary)] font-medium">
              {task.subtitle}
            </span>
          </div>

          {/* Repository & Source Badge */}
          {task.repositoryInfo && (
            <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-[11px] font-mono text-[var(--text-secondary)]">
              <GitBranch className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>Source: </span>
              <span className="text-[var(--text-primary)] font-bold">
                {task.repositoryInfo.repoName}
              </span>
              <span
                className={`ml-1 px-1.5 py-0.2 rounded text-[9px] uppercase font-bold ${
                  task.repositoryInfo.status === "available_public"
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                    : "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                }`}
              >
                {task.repositoryInfo.status === "available_public"
                  ? "Public Repo"
                  : "Verified Local Source"}
              </span>
            </div>
          )}
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[var(--text-primary)] tracking-tight">
          {task.title}
        </h2>
      </div>

      {/* 2. Task Overview */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider flex items-center gap-2 font-heading">
          <BookOpen className="w-4 h-4 text-[var(--accent)]" />
          <span>Task Overview & Implementation Scope</span>
        </h3>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed bg-[var(--bg)] p-5 rounded-xl border border-[var(--border)] whitespace-pre-line">
          {task.overview}
        </p>
      </div>

      {/* 3. Hardware / Software Stack Metadata */}
      {task.hardware && task.hardware.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider flex items-center gap-2 font-heading">
            <Wrench className="w-4 h-4 text-[var(--accent)]" />
            <span>Specifications & Component Stack</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {task.hardware.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] space-y-1 hover:border-[var(--accent)]/40 transition-colors"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-[var(--text-primary)] truncate">
                    {item.name}
                  </span>
                  <span className="text-[9px] uppercase font-mono px-2 py-0.5 rounded bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--accent)]/30 shrink-0">
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

      {/* 4. Evidence Area (Preserved Strictly Without Modifications to Assets/Ordering) */}
      {hasEvidence && (
        <div className="space-y-4 border-t border-[var(--border)] pt-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider flex items-center gap-2 font-heading">
              <ImageIcon className="w-4 h-4 text-[var(--accent)]" />
              <span>Evidence & Visual Verification</span>
            </h3>
            <span className="text-[10px] font-mono text-[var(--text-secondary)]">
              Task {task.number} Artifacts
            </span>
          </div>

          {/* Photographic Evidence */}
          {hasImages && (
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-[var(--text-secondary)] font-heading">
                Photographic & Interface Evidence ({task.images.length})
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {task.images.map((img, idx) => (
                  <MediaPlaceholder key={idx} type="image" src={img.src} alt={img.alt} />
                ))}
              </div>
            </div>
          )}

          {/* Demonstration Video Evidence */}
          {hasVideos && (
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-semibold text-[var(--text-secondary)] font-heading">
                Demonstration Video Evidence ({task.videos.length})
              </h4>
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

      {/* 5. Theoretical Framework / Cloud Computing Foundations (Especially for Task 4) */}
      {task.theorySections && task.theorySections.length > 0 && (
        <div className="space-y-4 border-t border-[var(--border)] pt-6">
          <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2 font-heading">
            <Lightbulb className="w-4 h-4 text-emerald-400" />
            <span>Theoretical Framework & Core Concepts</span>
          </h3>

          <div className="space-y-4">
            {task.theorySections.map((sec, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[var(--bg)] border border-[var(--border)] space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border)]/60 pb-2.5">
                  <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)] font-heading">
                    {sec.title}
                  </h4>
                  {sec.badge && (
                    <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                      {sec.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {sec.summary}
                </p>

                {sec.details && sec.details.length > 0 && (
                  <ul className="space-y-1.5 text-xs text-[var(--text-secondary)] list-disc list-inside leading-relaxed pt-1">
                    {sec.details.map((d, dIdx) => (
                      <li key={dIdx} className="leading-relaxed">
                        {d}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6. Key Implementation Concepts Grid */}
      {task.concepts && task.concepts.length > 0 && (
        <div className="space-y-3 border-t border-[var(--border)] pt-6">
          <h4 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider font-heading flex items-center gap-2">
            <Lightbulb className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>Implementation Concepts & Terminology</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {task.concepts.map((concept, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[var(--bg)] border border-[var(--border)] space-y-1.5 hover:border-[var(--accent)]/40 transition-colors"
              >
                <h5 className="text-xs font-bold text-[var(--text-primary)] font-heading">
                  {concept.term}
                </h5>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {concept.definition}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 7. Electrical Circuit Diagram & Pin Interconnection Matrix */}
      {task.circuitData && (
        <div className="border-t border-[var(--border)] pt-6">
          <CircuitDiagram data={task.circuitData} />
        </div>
      )}

      {/* 8. System Design & Data Flow */}
      {task.diagramSteps && task.diagramSteps.length > 0 && (
        <div className="space-y-3 border-t border-[var(--border)] pt-6">
          <h4 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider font-heading flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>End-to-End System Design & Data Flow</span>
          </h4>
          <ArchitectureDiagram steps={task.diagramSteps} title={`${task.title} Protocol Flow`} />
        </div>
      )}

      {/* 9. LM393 Calibration Guide (Task 5) */}
      {task.calibrationSteps && task.calibrationSteps.length > 0 && (
        <div className="space-y-3 border-t border-[var(--border)] pt-6">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-lime-400" />
            <h4 className="text-xs font-bold text-lime-400 uppercase tracking-wider font-heading">
              LM393 Digital LDR Potentiometer Calibration Procedure
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {task.calibrationSteps.map((step) => (
              <div
                key={step.stepNumber}
                className="p-3.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] space-y-1.5 hover:border-lime-500/40 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-lime-500/10 border border-lime-500/30 text-lime-400 text-[10px] font-mono font-bold flex items-center justify-center shrink-0">
                    {step.stepNumber}
                  </span>
                  <span className="text-xs font-bold text-[var(--text-primary)]">
                    {step.title}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed pl-7">
                  {step.action}
                </p>
                <p className="text-[11px] text-slate-400 italic pl-7">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 10. Testing Procedures Matrix (Task 3) */}
      {task.testingProcedures && task.testingProcedures.length > 0 && (
        <div className="space-y-3 border-t border-[var(--border)] pt-6">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-sky-400" />
            <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider font-heading">
              Automation Verification & Multi-Condition Test Matrix
            </h4>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[var(--border)] bg-[#0A0B0E]">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-[#12151E] border-b border-[var(--border)] text-[10px] font-mono uppercase font-bold text-[var(--accent)]">
                  <th className="py-2.5 px-3">Test Scenario</th>
                  <th className="py-2.5 px-3">Trigger Method</th>
                  <th className="py-2.5 px-3">Dispatched Payload</th>
                  <th className="py-2.5 px-3">Expected Hardware Action</th>
                  <th className="py-2.5 px-3">Observed Behavior</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]/60 text-xs text-[var(--text-secondary)]">
                {task.testingProcedures.map((test, idx) => (
                  <tr key={idx} className="hover:bg-[#12151E]/60 transition-colors">
                    <td className="py-2.5 px-3 font-semibold text-[var(--text-primary)] font-sans">
                      {test.scenario}
                    </td>
                    <td className="py-2.5 px-3 font-mono text-sky-400 text-[11px]">
                      {test.triggerMethod}
                    </td>
                    <td className="py-2.5 px-3 font-mono text-amber-300 text-[11px]">
                      {test.payload}
                    </td>
                    <td className="py-2.5 px-3 text-[11px] leading-snug">
                      {test.expectedBehavior}
                    </td>
                    <td className="py-2.5 px-3 text-[11px] text-emerald-400 font-mono">
                      {test.verifiedResult}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 11. Complete Source Code Implementation */}
      {task.codeSnippets && task.codeSnippets.length > 0 && (
        <div className="space-y-3 border-t border-[var(--border)] pt-6">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-semibold text-sky-400 uppercase tracking-wider font-heading flex items-center gap-2">
              <Code2 className="w-4 h-4 text-sky-400" />
              <span>Complete Source Code Implementation ({task.codeSnippets.length} Files)</span>
            </h4>
            <span className="text-[10px] font-mono text-[var(--text-secondary)]">
              Full Implementation · Non-Truncated
            </span>
          </div>

          <div className="space-y-4">
            {task.codeSnippets.map((snippet, idx) => (
              <CodeBlock key={idx} snippet={snippet} defaultExpanded={idx === 0} />
            ))}
          </div>
        </div>
      )}

      {/* 12. Setup & Configuration Steps */}
      {task.configuration && task.configuration.length > 0 && (
        <div className="space-y-3 border-t border-[var(--border)] pt-6">
          <h4 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider font-heading flex items-center gap-2">
            <Settings className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>Setup & Configuration Procedure</span>
          </h4>
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

      {/* 13. Dedicated Troubleshooting / Problems Encountered & Solutions Section */}
      {task.troubleshooting && task.troubleshooting.length > 0 && (
        <div className="space-y-4 border-t border-[var(--border)] pt-6">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2 font-heading">
              <HelpCircle className="w-4 h-4 text-amber-400" />
              <span>Problems Encountered & Solutions Implemented</span>
            </h4>
            <span className="text-[10px] font-mono text-[var(--text-secondary)]">
              {task.troubleshooting.length} Documented Engineering Challenges
            </span>
          </div>

          <div className="space-y-3">
            {task.troubleshooting.map((item, idx) => {
              const isExpanded = expandedTroubleshoot === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-[var(--border)] bg-[var(--bg)] overflow-hidden transition-all shadow-md"
                >
                  <button
                    onClick={() => setExpandedTroubleshoot(isExpanded ? null : idx)}
                    className="w-full p-4 flex items-center justify-between text-left hover:bg-[#12151E] transition-colors gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                        0{idx + 1}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)] font-heading">
                        {item.problem}
                      </span>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-[var(--accent)] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[var(--text-secondary)] shrink-0" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="p-4 pt-0 space-y-3 border-t border-[var(--border)]/50 text-xs text-[var(--text-secondary)] leading-relaxed">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                        <div className="p-3 rounded-lg bg-[#0E1017] border border-[var(--border)]/60 space-y-1">
                          <span className="text-[10px] font-mono uppercase font-bold text-rose-400 block">
                            Root Cause
                          </span>
                          <p>{item.cause}</p>
                        </div>
                        <div className="p-3 rounded-lg bg-[#0E1017] border border-[var(--border)]/60 space-y-1">
                          <span className="text-[10px] font-mono uppercase font-bold text-sky-400 block">
                            Debugging Procedure
                          </span>
                          <p>{item.debugging}</p>
                        </div>
                      </div>

                      <div className="p-3 rounded-lg bg-[#0E1017] border border-emerald-500/20 space-y-1">
                        <span className="text-[10px] font-mono uppercase font-bold text-emerald-400 block">
                          Implemented Solution
                        </span>
                        <p className="text-[var(--text-primary)] font-medium">{item.solution}</p>
                      </div>

                      <div className="p-3 rounded-lg bg-[#0E1017] border border-[var(--border)]/60 space-y-1">
                        <span className="text-[10px] font-mono uppercase font-bold text-[var(--accent)] block">
                          Verification & Outcome
                        </span>
                        <p>{item.result}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 14. Technical Limitations & Future Improvements */}
      {task.limitations && task.limitations.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-[var(--border)] pt-6">
          <div className="p-4 rounded-xl bg-[var(--bg)] border border-[var(--border)] space-y-2">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5 font-heading">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Technical Limitations & Tradeoffs</span>
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

      {/* 15. Task Reflection */}
      <div className="space-y-3 bg-[var(--accent-muted)]/40 p-5 rounded-xl border border-[var(--accent)]/30">
        <h3 className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider flex items-center gap-2 font-heading">
          <Sparkles className="w-4 h-4 text-[var(--accent)]" />
          <span>Task Reflection & Engineering Retrospective</span>
        </h3>
        <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed italic">
          &quot;{task.reflection}&quot;
        </p>
      </div>
    </section>
  );
}
