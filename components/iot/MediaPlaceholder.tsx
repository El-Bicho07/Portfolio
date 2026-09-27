"use client";

import React from "react";
import Image from "next/image";
import { ImageIcon, Video } from "lucide-react";

interface MediaPlaceholderProps {
  type?: "image" | "video";
  src?: string;
  alt?: string;
  className?: string;
}

export function MediaPlaceholder({
  type = "image",
  src,
  alt = "IoT Case Study Evidence",
  className = "",
}: MediaPlaceholderProps) {
  const hasMedia = Boolean(src && src.trim().length > 0);

  if (!hasMedia) {
    return (
      <div
        className={`glass-card rounded-xl p-8 border border-dashed border-[var(--border)] bg-[#12151E]/60 flex flex-col items-center justify-center text-center space-y-2 shadow-md hover:border-[var(--accent)]/50 transition-all ${className}`}
      >
        <div className="w-10 h-10 rounded-full bg-[var(--accent-muted)] border border-[var(--accent)]/30 flex items-center justify-center text-[var(--accent)] shrink-0">
          {type === "image" ? (
            <ImageIcon className="w-5 h-5" />
          ) : (
            <Video className="w-5 h-5" />
          )}
        </div>
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--accent)]">
          {type === "image" ? "IMAGE" : "VIDEO"}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`glass-card rounded-xl overflow-hidden border border-[var(--border)] bg-[#12151E] p-2 shadow-lg hover:border-[var(--accent)]/40 transition-all ${className}`}
    >
      <div className="relative aspect-video rounded-lg overflow-hidden bg-black border border-[var(--border)]">
        <Image
          src={src!}
          alt={alt}
          fill
          unoptimized
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
}
