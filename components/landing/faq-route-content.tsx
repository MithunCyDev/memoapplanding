"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/components/landing/language-provider";

export function FaqRouteContent() {
  const { content } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("all");

  const topicFilters = useMemo(
    () => [
      { key: "all", label: content.faqPage.allGroups },
      ...content.faqTopics.map((topic) => ({
        key: topic.title,
        label: topic.title,
      })),
    ],
    [content.faqPage.allGroups, content.faqTopics],
  );

  const filteredFaqs = useMemo(() => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();

    return content.faqs.filter((faq) => {
      const topicMatches =
        selectedTopic === "all" || faq.category === selectedTopic;
      const searchMatches =
        normalizedSearchTerm.length === 0 ||
        `${faq.category} ${faq.question} ${faq.answer}`
          .toLowerCase()
          .includes(normalizedSearchTerm);

      return topicMatches && searchMatches;
    });
  }, [content.faqs, searchTerm, selectedTopic]);

  return (
    <section className="relative px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--color-primary)">
            {content.faqPage.browseTopics}
          </p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {content.faqPage.title}
          </h2>
          <div className="mt-8 rounded-full border border-(--color-border) bg-white p-2 shadow-sm">
            <input
              aria-label={content.faqPage.searchPlaceholder}
              className="w-full rounded-full bg-transparent px-5 py-3 text-base outline-none placeholder:text-(--color-muted)"
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder={content.faqPage.searchPlaceholder}
              type="search"
              value={searchTerm}
            />
          </div>

          <div
            aria-label={content.faqPage.browseTopics}
            className="mt-4 flex flex-wrap items-center justify-center gap-2"
            role="group"
          >
            {topicFilters.map((topic) => {
              const isSelected = selectedTopic === topic.key;

              return (
                <button
                  aria-pressed={isSelected}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-primary) sm:text-sm ${
                    isSelected
                      ? "bg-(--color-secondary) text-white shadow-sm"
                      : "border border-(--color-border) bg-white text-(--color-muted) hover:border-(--color-primary)/35 hover:text-(--color-primary-dark)"
                  }`}
                  key={topic.key}
                  onClick={() => setSelectedTopic(topic.key)}
                  type="button"
                >
                  {topic.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {filteredFaqs.map((faq) => (
            <details
              className="group rounded-lg border border-(--color-border) bg-white p-4 shadow-sm"
              key={faq.question}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-base font-semibold leading-snug">
                <span>
                  <span className="mb-1.5 block text-[0.65rem] font-bold uppercase tracking-[0.16em] text-(--color-primary)">
                    {faq.category}
                  </span>
                  {faq.question}
                </span>
                <span className="shrink-0 text-xl leading-none text-(--color-primary) transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-(--color-muted)">
                {faq.answer}
              </p>
            </details>
          ))}
          {filteredFaqs.length === 0 ? (
            <div className="rounded-lg border border-dashed border-(--color-border) bg-white p-8 text-center sm:col-span-2">
              <h3 className="text-xl font-semibold">
                {content.faqPage.emptyTitle}
              </h3>
              <p className="mt-2 text-sm text-(--color-muted)">
                {content.faqPage.emptyDescription}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
