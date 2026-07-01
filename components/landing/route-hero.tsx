"use client";

import { useLanguage } from "@/components/landing/language-provider";
import type { LandingContent } from "@/lib/landing-content";

type RouteHeroKey = keyof LandingContent["routeHeroes"];

interface RouteHeroProps {
  contentKey: RouteHeroKey;
}

export function RouteHero({ contentKey }: RouteHeroProps) {
  const { content } = useLanguage();
  const hero = content.routeHeroes[contentKey];

  return (
    <section className="bg-(--color-secondary) px-5 pb-20 pt-32 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--color-info)">
          {hero.eyebrow}
        </p>
        <h1 className="text-balance mt-5 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          {hero.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          {hero.description}
        </p>
      </div>
    </section>
  );
}
