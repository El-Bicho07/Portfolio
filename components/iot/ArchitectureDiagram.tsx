"use client";

import React from "react";
import { ArrowRight, ChevronRight, Cpu } from "lucide-react";

interface ArchitectureDiagramProps {
  steps: string[];
  title?: string;
}

export function ArchitectureDiagram({ steps, title = "System Architecture Flow" }: ArchitectureDiagramProps) {
  return (
    <div className="glass-card rounded-xl p-5 border border-[var(--border)] bg-[#12151E] space-y-4 shadow-lg">
      <div className="flex items-center gap-2 border-b border-[var(--border)] pb-3">
        <Cpu className="w-4 h-4 text-[var(--accent)]" />
        <h4 className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider font-heading">
          {title}
        </h4>
      </div>

      {/* Desktop / Tablet Horizontal Flow & Mobile Flex Wrap */}
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-3 overflow-x-auto py-2">
        {steps.map((step, idx) => {
          const isLast = idx === steps.length - 1;

          return (
            <React.Fragment key={idx}>
              <div className="flex-1 min-w-[130px] p-3 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-center space-y-1 hover:border-[var(--accent)]/50 transition-all shadow-sm group">
                <span className="text-[10px] font-mono font-bold text-[var(--accent)] block">
                  STEP 0{idx + 1}
                </span>
                <span className="text-xs font-semibold text-[var(--text-primary)] block group-hover:text-[var(--accent)] transition-colors leading-snug">
                  {step}
                </span>
              </div>

              {!isLast && (
                <div className="hidden md:flex items-center justify-center shrink-0 text-[var(--accent)]">
                  <ArrowRight className="w-4 h-4 opacity-70" />
                </div>
              )}

              {!isLast && (
                <div className="flex md:hidden items-center justify-center w-full my-0.5 text-[var(--accent)]">
                  <ChevronRight className="w-4 h-4 rotate-90 opacity-70" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
