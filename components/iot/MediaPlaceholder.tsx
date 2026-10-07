"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ImageIcon, Video, Maximize2 } from "lucide-react";
import { ImageLightbox } from "./ImageLightbox";

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
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const hasMedia = Boolean(src && src.trim().length > 0);

  if (!hasMedia) {
    return (
      <div
        className={`glass-card rounded-xl p-6 border border-dashed border-[var(--border)] bg-[#12151E]/60 flex flex-col items-center justify-center text-center space-y-2 shadow-md ${className}`}
      >
        <div className="w-10 h-10 rounded-full bg-[var(--accent-muted)] border border-[var(--accent)]/30 flex items-center justify-center text-[var(--accent)] shrink-0">
          {type === "image" ? (
            <ImageIcon className="w-5 h-5" />
          ) : (
            <Video className="w-5 h-5" />
          )}
        </div>
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--accent)]">
          {type === "image" ? "IMAGE PLACEHOLDER" : "VIDEO PLACEHOLDER"}
        </span>
      </div>
    );
  }

  return (
    <>
      <div
        ref={triggerRef}
        tabIndex={0}
        role="button"
        aria-label={`View enlarged evidence image: ${alt}`}
        onClick={() => type === "image" && setIsOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            if (type === "image") setIsOpen(true);
          }
        }}
        className={`group relative glass-card rounded-xl overflow-hidden border border-[var(--border)] bg-[#12151E] p-2 shadow-lg hover:border-[var(--accent)]/50 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--accent)] ${className}`}
      >
        <div className="relative aspect-video rounded-lg overflow-hidden bg-black border border-[var(--border)]">
          <Image
            src={src!}
            alt={alt}
            fill
            unoptimized
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <Maximize2 className="w-5 h-5" />
            </div>
          </div>
        </div>

        {alt && alt !== "IoT Case Study Evidence" && (
          <p className="mt-2 text-[11px] font-mono text-[var(--text-secondary)] px-1 truncate">
            {alt}
          </p>
        )}
      </div>

      {/* Accessible Reusable Image Lightbox */}
      {isOpen && type === "image" && (
        <ImageLightbox
          src={src!}
          alt={alt}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          triggerRef={triggerRef}
        />
      )}
    </>
  );
}
