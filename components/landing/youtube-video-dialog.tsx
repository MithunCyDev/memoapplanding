"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export const heroYoutubeVideoId = "zS2IL7HEVxI";

interface YoutubeVideoDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  videoId?: string;
}

export function YoutubeVideoDialog({
  open,
  onClose,
  title,
  videoId = heroYoutubeVideoId,
}: YoutubeVideoDialogProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!mounted || !open) {
    return null;
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-8"
      role="presentation"
    >
      <button
        aria-label="Close video overlay"
        className="absolute inset-0 bg-[rgba(1,32,26,0.78)] backdrop-blur-sm"
        onClick={onClose}
        type="button"
      />

      <div
        aria-label={title}
        aria-modal="true"
        className="relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl border border-white/15 bg-black shadow-2xl shadow-black/40"
        role="dialog"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <p className="truncate text-sm font-semibold text-white">{title}</p>
          <button
            aria-label="Close video"
            className="inline-flex size-9 items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white"
            onClick={onClose}
            type="button"
          >
            <svg
              aria-hidden
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        <div className="aspect-video w-full bg-black">
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
          />
        </div>
      </div>
    </div>,
    document.body,
  );
}
