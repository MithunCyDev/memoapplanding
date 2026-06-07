"use client";

import { useLanguage } from "@/components/landing/language-provider";
import { appLoginUrl } from "@/lib/landing-content";
import { siteConfig } from "@/lib/site";

export function FaqRouteContent() {
  const { content } = useLanguage();
  const popularQuestions = content.faqs.slice(0, 4);

  return (
    <section className="px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.42fr]">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">
            {content.faqPage.browseTopics}
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {content.faqTopics.map((topic) => (
              <article
                className="rounded-4xl border border-(--color-border) bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[rgba(1,64,52,0.08)]"
                key={topic.title}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-(--color-primary)">
                  {topic.title}
                </p>
                <p className="mt-4 leading-7 text-(--color-muted)">
                  {topic.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 divide-y divide-(--color-border) rounded-4xl border border-(--color-border) bg-white">
            {content.faqs.map((faq) => (
              <details className="group p-6" key={faq.question}>
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
          </div>
        </div>

        <aside className="space-y-5">
          <div className="rounded-4xl border border-(--color-border) bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">{content.faqPage.popular}</h2>
            <div className="mt-5 space-y-3">
              {popularQuestions.map((faq) => (
                <p
                  className="rounded-2xl bg-(--color-background) p-4 text-sm font-semibold"
                  key={faq.question}
                >
                  {faq.question}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-4xl bg-(--color-secondary) p-6 text-white shadow-xl shadow-[rgba(1,64,52,0.16)]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-(--color-info)">
              {content.faqPage.stillNeedHelp}
            </p>
            <h2 className="mt-4 text-2xl font-semibold">
              {content.faqPage.supportTitle}
            </h2>
            <p className="mt-4 leading-7 text-white/70">
              {content.faqPage.supportDescription}
            </p>
            <div className="mt-6 grid gap-3">
              <a
                className="rounded-full bg-(--color-info) px-5 py-3 text-center text-sm font-bold text-(--color-secondary)"
                href={appLoginUrl}
              >
                {content.faqPage.openHelpCenter}
              </a>
              <a
                className="rounded-full border border-white/20 px-5 py-3 text-center text-sm font-bold text-white"
                href={`mailto:${siteConfig.contactEmail}`}
              >
                {content.faqPage.emailSupport}
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
