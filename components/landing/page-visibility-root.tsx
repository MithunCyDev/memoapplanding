"use client";

import { useEffect, type ReactNode } from "react";
import { usePageVisibility } from "@/components/landing/use-page-visibility";

interface PageVisibilityRootProps {
  children: ReactNode;
}

/** Syncs tab visibility to `html[data-page-visible]` so CSS can pause heavy animations. */
export function PageVisibilityRoot({ children }: PageVisibilityRootProps) {
  const pageVisible = usePageVisibility();

  useEffect(() => {
    document.documentElement.dataset.pageVisible = pageVisible
      ? "true"
      : "false";
  }, [pageVisible]);

  return children;
}
