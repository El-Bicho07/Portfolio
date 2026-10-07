"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { X } from "lucide-react";

interface ImageLightboxProps {
  src: string;
  alt?: string;
  isOpen: boolean;
  onClose: () => void;
  triggerRef?: React.RefObject<HTMLElement | null>;
}

export function ImageLightbox({
  src,
  alt = "Enlarged Evidence Image",
  isOpen,
  onClose,
  triggerRef,
}: ImageLightboxProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      // Focus trap logic
      if (e.key === "Tab" && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;

        const firstElement = focusables[0];
        const lastElement = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      // Save focus position
      previousFocusRef.current = triggerRef?.current || (document.activeElement as HTMLElement);

      // Lock body scroll
      document.body.style.overflow = "hidden";

      // Focus on close button inside lightbox
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);

      if (isOpen && previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    };
  }, [isOpen, handleKeyDown, triggerRef]);

  if (!isOpen || !src) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      {/* Close Button */}
      <button
        ref={closeButtonRef}
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-3 rounded-full bg-black/70 border border-white/20 text-white/90 hover:text-white hover:bg-black transition-all shadow-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Lightbox Content Container */}
      <div
        className="relative max-w-[95vw] max-h-[90vh] flex flex-col items-center justify-center space-y-3"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Responsive Image Contained Within Viewport */}
        <img
          src={src}
          alt={alt}
          className="max-w-[95vw] max-h-[82vh] w-auto h-auto object-contain rounded-xl shadow-2xl border border-white/10"
        />

        {/* Caption Banner */}
        {alt && alt !== "IoT Case Study Evidence" && (
          <p className="text-xs sm:text-sm font-mono text-zinc-300 bg-black/80 px-4 py-2 rounded-full border border-white/10 text-center max-w-[90vw] truncate">
            {alt}
          </p>
        )}
      </div>
    </div>
  );
}
