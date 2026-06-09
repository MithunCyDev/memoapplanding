"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/components/landing/language-provider";
import { WhatsAppChatButton } from "@/components/landing/whatsapp-chat-button";

export function FaqRouteContent() {
  const { content } = useLanguage();
  const [selectedGroup, setSelectedGroup] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const groups = [
    { key: "all", label: content.faqPage.allGroups },
    ...content.faqTopics.map((topic) => ({
      key: topic.title,
      label: topic.title,
    })),
  ];

  const filteredFaqs = useMemo(() => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();

    return content.faqs.filter((faq) => {
      const groupMatches =
        selectedGroup === "all" || faq.category === selectedGroup;
      const searchMatches =
        normalizedSearchTerm.length === 0 ||
        `${faq.category} ${faq.question} ${faq.answer}`
          .toLowerCase()
          .includes(normalizedSearchTerm);

      return groupMatches && searchMatches;
    });
  }, [content, searchTerm, selectedGroup]);

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
        </div>
      </div>

      <div className="mx-auto mt-14 grid max-w-7xl gap-8 lg:grid-cols-[0.32fr_1fr]">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-4xl border border-(--color-border) bg-white p-4 shadow-sm">
            <div className="space-y-2">
              {groups.map((group) => {
                const isSelected = selectedGroup === group.key;
                const groupCount =
                  group.key === "all"
                    ? content.faqs.length
                    : content.faqs.filter((faq) => faq.category === group.key)
                        .length;

                return (
                  <button
                    className={`flex w-full items-center justify-between rounded-3xl px-4 py-3 text-left text-sm font-semibold transition ${
                      isSelected
                        ? "bg-(--color-secondary) text-white"
                        : "bg-(--color-background) text-(--color-muted) hover:bg-(--color-primary-light) hover:text-(--color-primary-dark)"
                    }`}
                    key={group.key}
                    onClick={() => setSelectedGroup(group.key)}
                    type="button"
                  >
                    <span>{group.label}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs ${
                        isSelected
                          ? "bg-white/10 text-white"
                          : "bg-white text-(--color-primary)"
                      }`}
                    >
                      {groupCount}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        <div>
          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <details
                className="group rounded-4xl border border-(--color-border) bg-white p-6 shadow-sm"
                key={faq.question}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold">
                  <span>
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-(--color-primary)">
                      {faq.category}
                    </span>
                    {faq.question}
                  </span>
                  <span className="text-2xl text-(--color-primary) transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-(--color-muted)">
                  {faq.answer}
                </p>
              </details>
            ))}
            {filteredFaqs.length === 0 ? (
              <div className="rounded-4xl border border-dashed border-(--color-border) bg-white p-8 text-center">
                <h3 className="text-2xl font-semibold">
                  {content.faqPage.emptyTitle}
                </h3>
                <p className="mt-3 text-(--color-muted)">
                  {content.faqPage.emptyDescription}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <WhatsAppChatButton
        className="fixed bottom-6 right-6 z-50"
        label={content.faqPage.chatWithUs}
        message={content.faqPage.whatsappMessage}
      />
    </section>
  );
}
