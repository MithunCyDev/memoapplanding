"use client";

import Link from "next/link";
import { useLanguage } from "@/components/landing/language-provider";
import {
  legalContent,
  type LegalDocumentContent as LegalDocument,
  type LegalDocumentKey,
} from "@/lib/legal-content";
import { siteConfig } from "@/lib/site";

interface LegalDocumentContentProps {
  documentKey: LegalDocumentKey;
}

export function LegalDocumentContent({
  documentKey,
}: LegalDocumentContentProps) {
  const { language } = useLanguage();
  const document: LegalDocument = legalContent[language][documentKey];
  const titleId = `${documentKey}-title`;

  return (
    <>
      <section className="relative isolate bg-(--color-secondary) px-5 pb-20 pt-32 text-white lg:px-8">
        <div className="absolute inset-0 -z-10 surface-grid opacity-20" />
        <div className="absolute left-1/2 top-20 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-(--color-secondary-light)/20 blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--color-info)">
              {document.eyebrow}
            </p>
            <h1
              className="text-balance mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
              id={titleId}
            >
              {document.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
              {document.intro}
            </p>
            <p className="mt-6 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/80">
              {document.lastUpdatedLabel}: {document.lastUpdatedDate}
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby={titleId}
        className="px-5 py-16 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-(--color-border) bg-white p-5 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-(--color-primary)">
              {document.summaryTitle}
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {document.summaryItems.map((item) => (
                <div
                  className="rounded-3xl border border-(--color-border) bg-(--color-background) p-5"
                  key={item}
                >
                  <div className="mb-4 size-8 rounded-full bg-(--color-primary-light) p-2">
                    <div className="size-full rounded-full bg-(--color-primary)" />
                  </div>
                  <p className="leading-7 text-(--color-muted)">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.3fr_1fr]">
            <aside className="hidden lg:block lg:self-start">
              <nav
                aria-label={document.sectionNavTitle}
                className="sticky top-28 rounded-2xl border border-(--color-border) bg-white p-4 shadow-sm"
              >
                <p className="px-4 pb-3 text-xs font-bold uppercase tracking-[0.2em] text-(--color-primary)">
                  {document.sectionNavTitle}
                </p>
                <div className="space-y-1">
                  {document.sections.map((section) => (
                    <a
                      className="block rounded-2xl px-4 py-3 text-sm font-semibold leading-5 text-(--color-muted) transition hover:bg-(--color-primary-light) hover:text-(--color-primary-dark)"
                      href={`#${section.id}`}
                      key={section.id}
                    >
                      {section.title}
                    </a>
                  ))}
                </div>
              </nav>
            </aside>

            <article
              aria-labelledby={titleId}
              className="rounded-2xl border border-(--color-border) bg-white p-6 shadow-sm sm:p-8 lg:p-10"
            >
              <div className="space-y-10">
                {document.sections.map((section) => (
                  <section
                    className="scroll-mt-28 border-b border-(--color-border) pb-10 last:border-b-0 last:pb-0"
                    id={section.id}
                    key={section.id}
                  >
                    <h2 className="text-2xl font-semibold tracking-tight text-(--color-ink)">
                      {section.title}
                    </h2>
                    {section.body ? (
                      <p className="mt-4 leading-8 text-(--color-muted)">
                        {section.body}
                      </p>
                    ) : null}
                    {section.items ? (
                      <ul className="mt-5 space-y-3 pl-0">
                        {section.items.map((item) => (
                          <li className="flex gap-3 leading-8" key={item}>
                            <span className="mt-3 size-2 shrink-0 rounded-full bg-(--color-primary)" />
                            <span className="text-(--color-muted)">{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                ))}

                <section className="rounded-2xl bg-(--color-primary-light) p-6 sm:p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-(--color-primary)">
                    MemoApp support
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-(--color-secondary)">
                    {document.contactTitle}
                  </h2>
                  <p className="mt-4 leading-8 text-(--color-primary-dark)">
                    {document.contactBody}
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      className="primary-button inline-flex justify-center rounded-full px-5 py-3 text-sm font-bold"
                      href={`mailto:${siteConfig.contactEmail}`}
                    >
                      {document.contactEmailLabel}: {siteConfig.contactEmail}
                    </a>
                    <Link
                      className="inline-flex justify-center rounded-full border border-(--color-border) bg-white px-5 py-3 text-sm font-bold text-(--color-primary-dark) transition hover:bg-(--color-background)"
                      href="/"
                    >
                      {document.backToHome}
                    </Link>
                  </div>
                </section>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
