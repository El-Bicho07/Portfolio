"use client";

import React, { useState } from "react";
import { Check, Copy, Code2, ChevronDown, ChevronUp } from "lucide-react";
import { CodeSnippet } from "@/data/iotData";

interface CodeBlockProps {
  snippet: CodeSnippet;
  defaultExpanded?: boolean;
}

export function CodeBlock({ snippet, defaultExpanded = false }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const lineCount = snippet.code.split("\n").length;
  const isLongCode = lineCount > 10;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  return (
    <div className="glass-card rounded-xl border border-[var(--border)] overflow-hidden bg-[#0A0B0E] shadow-xl space-y-0">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between gap-4 px-4 py-3 bg-[#12151E] border-b border-[var(--border)]">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <Code2 className="w-4 h-4 text-[var(--accent)] shrink-0" />
          <span className="text-xs font-mono font-bold text-[var(--text-primary)] truncate">
            {snippet.filename}
          </span>
          <span className="text-[10px] font-mono uppercase font-semibold px-2 py-0.5 rounded bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--accent)]/30 shrink-0">
            {snippet.language}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)]/40 transition-all"
            aria-label="Copy Code"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>

          {isLongCode && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--accent-muted)] border border-[var(--accent)]/30 text-xs font-medium text-[var(--accent)] hover:bg-[var(--accent)]/20 transition-all"
              aria-label={isExpanded ? "Collapse Code" : "Expand Code"}
            >
              {isExpanded ? (
                <>
                  <span>Collapse</span>
                  <ChevronUp className="w-3.5 h-3.5" />
                </>
              ) : (
                <>
                  <span>Expand ({lineCount} lines)</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* One-line "Why this matters" note */}
      {snippet.description && (
        <div className="px-4 py-2.5 bg-[#0F1117] border-b border-[var(--border)]/50 flex items-center gap-2 text-xs text-[var(--text-secondary)]">
          <span className="text-[10px] font-mono uppercase font-bold text-[var(--accent)] px-1.5 py-0.5 rounded bg-[var(--accent-muted)] border border-[var(--accent)]/20 shrink-0">
            Why this matters
          </span>
          <span className="truncate leading-relaxed">{snippet.description}</span>
        </div>
      )}

      {/* Code Container with Collapsible Max-Height */}
      <div
        className={`p-4 overflow-x-auto relative transition-all duration-300 ${
          isExpanded || !isLongCode ? "max-h-[800px]" : "max-h-[160px] overflow-hidden"
        }`}
      >
        <pre className="text-xs sm:text-sm font-mono text-slate-200 leading-relaxed whitespace-pre font-normal tab-4">
          <code>{snippet.code}</code>
        </pre>

        {/* Gradient Overlay when Collapsed */}
        {!isExpanded && isLongCode && (
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0A0B0E] to-transparent pointer-events-none flex items-end justify-center pb-2">
            <span className="text-[11px] font-mono text-[var(--text-secondary)] bg-[#0A0B0E]/90 px-3 py-1 rounded-full border border-[var(--border)] shadow-md">
              Click &quot;Expand&quot; to view full {lineCount} lines
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
