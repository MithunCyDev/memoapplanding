"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/components/landing/language-provider";
import {
  legalContent,
  type LegalDocumentContent as LegalDocument,
  type LegalDocumentKey,
} from "@/lib/legal-content";
import { ororaSoftAboutUrl } from "@/lib/landing-content";
import { siteConfig } from "@/lib/site";
import { buildWhatsAppLink } from "@/lib/whatsapp-link";

interface LegalDocumentContentProps {
  documentKey: LegalDocumentKey;
}

function SectionNav({
  document,
  className,
  onNavigate,
}: {
  document: LegalDocument;
  className?: string;
  onNavigate?: () => void;
}) {
  return (
    <nav aria-label={document.sectionNavTitle} className={className}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-(--color-muted)">
        {document.sectionNavTitle}
      </p>
      <ol className="space-y-1">
        {document.sections.map((section) => (
          <li key={section.id}>
            <a
              className="block rounded-lg px-2 py-2 text-sm leading-snug text-(--color-muted) transition hover:bg-(--color-background) hover:text-(--color-ink)"
              href={`#${section.id}`}
              onClick={onNavigate}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function LegalDocumentContent({
  documentKey,
}: LegalDocumentContentProps) {
  const { language } = useLanguage();
  const document: LegalDocument = legalContent[language][documentKey];
  const titleId = `${documentKey}-title`;
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const whatsappMessage =
    documentKey === "privacyPolicy"
      ? "Hello MemoApp team, I have a question about the Privacy Policy."
      : "Hello MemoApp team, I have a question about the Terms of Service.";

  return (
    <>
      <section className="border-b border-(--color-border) bg-white px-5 pb-10 pt-28 lg:px-8 lg:pb-12 lg:pt-32">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-(--color-primary)">
            {document.eyebrow}
          </p>
          <h1
            className="mt-3 text-3xl font-semibold tracking-tight text-(--color-ink) sm:text-4xl"
            id={titleId}
          >
            {document.title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-(--color-muted)">
            {document.intro}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-(--color-muted)">
            <span>
              {document.lastUpdatedLabel}: {document.lastUpdatedDate}
            </span>
            {document.ororaSoftLinkLabel ? (
              <>
                <span aria-hidden="true">·</span>
                <a
                  className="font-medium text-(--color-primary) underline-offset-4 hover:underline"
                  href={ororaSoftAboutUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {document.ororaSoftLinkLabel}
                </a>
              </>
            ) : null}
          </div>
        </div>
      </section>

      <section
        aria-labelledby={titleId}
        className="px-5 py-12 lg:px-8 lg:py-16"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 rounded-lg border border-(--color-border) bg-white p-5 sm:p-6">
            <h2 className="text-sm font-semibold text-(--color-ink)">
              {document.summaryTitle}
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-(--color-muted)">
              {document.summaryItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {document.businessIdentityBody ? (
            <p className="mb-8 max-w-4xl text-sm leading-6 text-(--color-muted)">
              {document.businessIdentityBody}
            </p>
          ) : null}

          <div className="lg:hidden">
            <button
              aria-expanded={mobileNavOpen}
              className="flex w-full items-center justify-between rounded-lg border border-(--color-border) bg-white px-4 py-3 text-left text-sm font-semibold text-(--color-ink)"
              onClick={() => setMobileNavOpen((open) => !open)}
              type="button"
            >
              {document.mobileNavToggleLabel ?? document.sectionNavTitle}
              <span className="text-lg leading-none text-(--color-primary)">
                {mobileNavOpen ? "−" : "+"}
              </span>
            </button>
            {mobileNavOpen ? (
              <div className="mt-2 rounded-lg border border-(--color-border) bg-white p-3">
                <SectionNav
                  document={document}
                  onNavigate={() => setMobileNavOpen(false)}
                />
              </div>
            ) : null}
          </div>

          <div className="grid gap-10 lg:grid-cols-[15rem_1fr] lg:gap-12">
            <aside className="hidden lg:block lg:self-start">
              <div className="sticky top-28 rounded-lg border border-(--color-border) bg-white p-4">
                <SectionNav document={document} />
              </div>
            </aside>

            <article className="min-w-0">
              <div className="divide-y divide-(--color-border) rounded-lg border border-(--color-border) bg-white">
                {document.sections.map((section) => (
                  <section
                    className="scroll-mt-28 px-5 py-7 sm:px-7 sm:py-8"
                    id={section.id}
                    key={section.id}
                  >
                    <h2 className="text-lg font-semibold tracking-tight text-(--color-ink)">
                      {section.title}
                    </h2>
                    {section.body ? (
                      <p className="mt-3 text-sm leading-7 text-(--color-muted)">
                        {section.body}
                      </p>
                    ) : null}
                    {section.items ? (
                      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-(--color-muted)">
                        {section.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                ))}
              </div>

              <footer className="mt-10 rounded-lg border border-(--color-border) bg-white px-5 py-6 sm:px-7">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--color-muted)">
                  {document.contactSupportEyebrow ?? "Support"}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-(--color-ink)">
                  {document.contactTitle}
                </h2>
                <p className="mt-2 text-sm leading-6 text-(--color-muted)">
                  {document.contactBody}
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    className="inline-flex justify-center rounded-lg bg-(--color-primary) px-5 py-2.5 text-sm font-bold text-white! shadow-sm transition hover:bg-(--color-primary-dark) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-primary)"
                    href={`mailto:${siteConfig.contactEmail}`}
                  >
                    {document.contactEmailLabel}: {siteConfig.contactEmail}
                  </a>
                  {document.whatsappSupportLabel ? (
                    <a
                      className="inline-flex justify-center rounded-lg bg-(--color-info) px-5 py-2.5 text-sm font-bold text-(--color-secondary)! shadow-sm transition hover:bg-(--color-info-light) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-info)"
                      href={buildWhatsAppLink(whatsappMessage)}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {document.whatsappSupportLabel}
                    </a>
                  ) : null}
                  <Link
                    className="inline-flex justify-center rounded-lg border border-(--color-border) bg-(--color-background) px-5 py-2.5 text-sm font-bold text-(--color-ink)! transition hover:border-(--color-primary)/35 hover:bg-(--color-primary-light)/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-primary)"
                    href="/"
                  >
                    {document.backToHome}
                  </Link>
                </div>
              </footer>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
