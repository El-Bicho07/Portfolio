"use client";

import React, { useState } from "react";
import { Check, Copy, Code2 } from "lucide-react";
import { CodeSnippet } from "@/data/iotData";

interface CodeBlockProps {
  snippet: CodeSnippet;
}

export function CodeBlock({ snippet }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

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

        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)]/40 transition-all shrink-0"
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
      </div>

      {/* Description line if provided */}
      {snippet.description && (
        <div className="px-4 py-2 bg-[#0F1117] border-b border-[var(--border)]/50 text-xs text-[var(--text-secondary)] font-medium">
          {snippet.description}
        </div>
      )}

      {/* Code Area with Scroll Container */}
      <div className="p-4 overflow-x-auto max-h-[480px]">
        <pre className="text-xs sm:text-sm font-mono text-slate-200 leading-relaxed whitespace-pre font-normal tab-4">
          <code>{snippet.code}</code>
        </pre>
      </div>
    </div>
  );
}
