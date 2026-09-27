"use client";

import React from "react";

interface VimeoEmbedProps {
  videoId: string;
  title?: string;
  aspectRatio?: "16/9" | "9/16";
  className?: string;
}

export function VimeoEmbed({
  videoId,
  title = "Vimeo Video Player",
  aspectRatio = "16/9",
  className = "",
}: VimeoEmbedProps) {
  const isVertical = aspectRatio === "9/16";

  return (
    <div
      className={`glass-card rounded-xl overflow-hidden border border-[var(--border)] bg-[#12151E] p-2 shadow-lg hover:border-[var(--accent)]/40 transition-all ${
        isVertical ? "max-w-[340px] mx-auto w-full" : "w-full"
      } ${className}`}
    >
      <div
        className={`relative w-full rounded-lg overflow-hidden bg-black border border-[var(--border)] ${
          isVertical ? "aspect-[9/16]" : "aspect-video"
        }`}
      >
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
          title={title}
          className="absolute inset-0 w-full h-full border-0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}
