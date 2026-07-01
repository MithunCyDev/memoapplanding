"use client";

import { useEffect, useState, type RefObject } from "react";

interface UseInViewOptions {
  rootMargin?: string;
  threshold?: number;
}

/** True when the referenced element intersects the viewport. */
export function useInView<T extends Element>(
  ref: RefObject<T | null>,
  { rootMargin = "120px", threshold = 0.05 }: UseInViewOptions = {},
) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry?.isIntersecting ?? false);
      },
      { rootMargin, threshold },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, rootMargin, threshold]);

  return inView;
}
