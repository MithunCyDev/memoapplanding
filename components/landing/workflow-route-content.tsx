"use client";

import { useLanguage } from "@/components/landing/language-provider";

export function WorkflowRouteHighlights() {
  const { content } = useLanguage();

  return (
    <section className="px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
        {content.workflowHighlights.map((item) => (
          <article
            className="rounded-4xl border border-(--color-border) bg-white p-7 shadow-sm"
            key={item.title}
          >
            <h2 className="text-2xl font-semibold">{item.title}</h2>
            <p className="mt-4 leading-7 text-(--color-muted)">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
