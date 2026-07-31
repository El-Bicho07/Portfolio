"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2, Calendar, Sparkles, BookOpen, ImageIcon } from "lucide-react";
import { PROTOSEM_UPDATES, ProtosemUpdate } from "@/data/protosemUpdates";

export function ProtosemGallery() {
  const [selectedUpdate, setSelectedUpdate] = useState<ProtosemUpdate | null>(null);
  const [enlargedImageIndex, setEnlargedImageIndex] = useState<number | null>(null);

  const activeImages = selectedUpdate?.images || [];

  const handleNextImage = useCallback(() => {
    if (enlargedImageIndex === null || activeImages.length === 0) return;
    setEnlargedImageIndex((prev) => (prev! + 1) % activeImages.length);
  }, [enlargedImageIndex, activeImages.length]);

  const handlePrevImage = useCallback(() => {
    if (enlargedImageIndex === null || activeImages.length === 0) return;
    setEnlargedImageIndex((prev) => (prev! - 1 + activeImages.length) % activeImages.length);
  }, [enlargedImageIndex, activeImages.length]);

  // Keyboard navigation & Escape key listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (enlargedImageIndex !== null) {
        if (e.key === "Escape") {
          setEnlargedImageIndex(null);
        } else if (e.key === "ArrowRight") {
          handleNextImage();
        } else if (e.key === "ArrowLeft") {
          handlePrevImage();
        }
      } else if (selectedUpdate !== null) {
        if (e.key === "Escape") {
          setSelectedUpdate(null);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedUpdate, enlargedImageIndex, handleNextImage, handlePrevImage]);

  return (
    <div className="space-y-8">
      {/* Week Cards List */}
      {PROTOSEM_UPDATES.map((update) => {
        const hasPhotos = Boolean(update.images && update.images.length > 0);
        const hasDetailReport = Boolean(update.detailReport && update.detailReport.trim().length > 0);
        const canViewMore = hasPhotos || hasDetailReport;
        const thumbnailImages = hasPhotos ? update.images!.slice(0, 2) : [];

        return (
          <section
            key={update.id}
            className="glass-card rounded-2xl p-6 sm:p-8 border border-[var(--border)] space-y-6 hover:border-[var(--accent)]/40 transition-colors"
          >
            {/* Week Card Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border)] pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-[var(--accent-muted)] border border-[var(--accent)]/30 text-[var(--accent)] text-[11px] uppercase font-bold tracking-wider">
                    {update.week}
                  </span>
                  <span className="text-xs text-[var(--text-secondary)] flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{update.date}</span>
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-[var(--text-primary)] mt-1">
                  {update.title}
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              {update.description}
            </p>

            {/* Sprint Highlights Block */}
            {update.notes && update.notes.length > 0 && (
              <div className="space-y-2 bg-[var(--bg)] p-4 rounded-xl border border-[var(--border)]">
                <span className="text-[11px] font-bold text-[var(--accent)] uppercase tracking-wider block">
                  Sprint Highlights
                </span>
                <ul className="space-y-1.5">
                  {update.notes.map((note, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-xs text-[var(--text-primary)] font-medium"
                    >
                      <Sparkles className="w-3 h-3 text-[var(--accent)] shrink-0" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Card Photos Thumbnail Strip (if real photos exist) */}
            {hasPhotos && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {thumbnailImages.map((src, imgIdx) => (
                  <div
                    key={src}
                    onClick={() => {
                      setSelectedUpdate(update);
                      setEnlargedImageIndex(imgIdx);
                    }}
                    className="group relative rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--bg)] aspect-video cursor-pointer hover:border-[var(--accent)] transition-all duration-300 shadow-md"
                  >
                    <Image
                      src={src}
                      alt={`${update.title} photo ${imgIdx + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                      <span className="text-xs font-semibold text-white flex items-center gap-1">
                        <Maximize2 className="w-3.5 h-3.5 text-[var(--accent)]" />
                        <span>Click to Enlarge</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* View More Button */}
            {canViewMore && (
              <div className="flex justify-end pt-2">
                <button
                  onClick={() => {
                    setSelectedUpdate(update);
                    setEnlargedImageIndex(null);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent-muted)] border border-[var(--accent)]/40 text-[var(--accent)] text-xs font-bold uppercase tracking-wider hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-all duration-200 shadow-sm"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>View More & Full Report</span>
                </button>
              </div>
            )}
          </section>
        );
      })}

      {/* Detail Modal Overlay */}
      {selectedUpdate !== null && (
        <div
          onClick={() => setSelectedUpdate(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full glass-card rounded-2xl border border-[var(--border)] overflow-hidden flex flex-col p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto my-auto shadow-2xl"
          >
            {/* Close Modal Button */}
            <button
              onClick={() => setSelectedUpdate(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[var(--bg)] border border-[var(--border)] text-white hover:text-[var(--accent)] transition-colors z-20"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-8 border-b border-[var(--border)] pb-4">
              <span className="px-2.5 py-0.5 rounded-md bg-[var(--accent-muted)] border border-[var(--accent)]/30 text-[var(--accent)] text-[11px] uppercase font-bold tracking-wider">
                {selectedUpdate.week} — {selectedUpdate.date}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[var(--text-primary)]">
                {selectedUpdate.title}
              </h2>
            </div>

            {/* Detailed Report Block */}
            {selectedUpdate.detailReport && (
              <div className="space-y-3 bg-[var(--bg)] p-5 rounded-xl border border-[var(--border)]">
                <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider block flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Detailed Reflection & Weekly Report</span>
                </span>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                  {selectedUpdate.detailReport}
                </p>
              </div>
            )}

            {/* Photo Gallery Grid in Modal */}
            <div className="space-y-4 pt-2 border-t border-[var(--border)]">
              <span className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider block flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-[var(--accent)]" />
                <span>Week Photo Gallery ({activeImages.length} Photos)</span>
              </span>

              {activeImages.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {activeImages.map((src, idx) => (
                    <div
                      key={src}
                      onClick={() => setEnlargedImageIndex(idx)}
                      className="group relative aspect-video rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--bg)] cursor-pointer hover:border-[var(--accent)] transition-all duration-300 shadow-md"
                    >
                      <Image
                        src={src}
                        alt={`${selectedUpdate.title} photo ${idx + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3">
                        <span className="text-[11px] font-semibold text-white flex items-center gap-1">
                          <Maximize2 className="w-3.5 h-3.5 text-[var(--accent)]" />
                          <span>Enlarge</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Clear "No photos added yet" State Box */
                <div className="p-8 rounded-xl bg-[var(--bg)] border border-dashed border-[var(--border)] text-center space-y-2">
                  <ImageIcon className="w-8 h-8 text-[var(--text-secondary)] mx-auto opacity-40" />
                  <p className="text-xs text-[var(--text-secondary)] font-medium">
                    No photos added yet for this week
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Shared Lightbox Full-Screen Overlay (Reused for all image enlargements) */}
      {enlargedImageIndex !== null && activeImages.length > 0 && (
        <div
          onClick={() => setEnlargedImageIndex(null)}
          className="fixed inset-0 z-60 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full h-[75vh] sm:h-[85vh] glass-card rounded-2xl border border-[var(--border)] overflow-hidden flex flex-col items-center justify-center p-4 sm:p-6 shadow-2xl"
          >
            {/* Close Lightbox */}
            <button
              onClick={() => setEnlargedImageIndex(null)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] text-white hover:text-[var(--accent)] transition-colors z-30"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            {activeImages.length > 1 && (
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[var(--bg-elevated)]/80 border border-[var(--border)] text-white hover:text-[var(--accent)] transition-colors z-30"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Enlarged Image */}
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-black flex items-center justify-center">
              <Image
                src={activeImages[enlargedImageIndex]}
                alt={`Photo ${enlargedImageIndex + 1}`}
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Next Button */}
            {activeImages.length > 1 && (
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[var(--bg-elevated)]/80 border border-[var(--border)] text-white hover:text-[var(--accent)] transition-colors z-30"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Counter Footer */}
            <div className="w-full mt-3 pt-3 border-t border-[var(--border)] flex items-center justify-between text-xs text-[var(--text-secondary)] font-semibold">
              <span>{selectedUpdate?.week} — {selectedUpdate?.title}</span>
              <span className="text-[var(--accent)]">
                {enlargedImageIndex + 1} / {activeImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
