"use client";

import { usePageVisibility } from "@/components/landing/use-page-visibility";
import { usePrefersReducedMotion } from "@/components/landing/use-prefers-reduced-motion";

/** False when the user prefers reduced motion or the tab is hidden. */
export function useMotionAllowed() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const pageVisible = usePageVisibility();

  return !prefersReducedMotion && pageVisible;
}
