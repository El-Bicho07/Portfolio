import React from "react";
import { Layers } from "lucide-react";
import { ProtosemGallery } from "@/components/ProtosemGallery";

export default function ProtosemPage() {
  return (
    <div className="py-12 space-y-12">
      {/* Header */}
      <div className="space-y-3 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--accent-muted)] border border-[var(--accent)]/30 text-[var(--accent)] text-xs uppercase tracking-widest font-semibold">
          <Layers className="w-3.5 h-3.5" />
          <span>Practical Innovation Semester</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight">
          Protosem <span className="text-gradient-accent">Progress Gallery</span>
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
          Weekly progress logs, system prototyping photos, and practical updates from the Protosem innovation program.
        </p>
      </div>

      {/* Gallery & Lightbox */}
      <ProtosemGallery />
    </div>
  );
}
