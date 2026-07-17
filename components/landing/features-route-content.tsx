"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/landing/language-provider";
import { SectionHeading } from "@/components/landing/section-heading";

export function FeaturesRouteContent() {
  const { content } = useLanguage();
  const routeContent = content.featuresRoute;
  const spotlight = routeContent.aiSpotlight;

  return (
    <>
      <section className="border-b border-(--color-border) bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={routeContent.platformSection.eyebrow}
            title={routeContent.platformSection.title}
            description={routeContent.platformSection.description}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {routeContent.platformSection.items.map((item) => (
              <article
                className="rounded-lg border border-(--color-border) bg-(--color-background) p-6 shadow-sm"
                key={item.title}
              >
                <h2 className="text-lg font-semibold text-(--color-ink)">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-(--color-muted)">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-(--color-secondary) px-5 py-24 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="lg:pt-2">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--color-info)">
              {spotlight.eyebrow}
            </p>
            <h2 className="text-balance mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              {spotlight.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/72 sm:text-lg">
              {spotlight.description}
            </p>
            <ul className="mt-8 space-y-3">
              {spotlight.highlights.map((highlight) => (
                <li
                  className="flex gap-3 text-sm leading-7 text-white/80"
                  key={highlight}
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 size-2 shrink-0 rounded-full bg-(--color-info)"
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <Link
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-(--color-info) px-6 py-3 text-sm font-bold text-(--color-secondary) transition hover:bg-(--color-info-light)"
              href="/pricing"
            >
              {spotlight.pricingLink}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="flex w-full min-w-0 justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-full border border-white/18 bg-white/5 p-6">
              <Image
                alt={spotlight.title}
                className="h-auto w-full rounded-full ring-2 ring-(--color-info)/55 ring-offset-4 ring-offset-(--color-secondary)"
                height={600}
                sizes="(min-width: 1024px) 28rem, min(100vw - 2.5rem, 28rem)"
                src="/invoicescan.png"
                width={600}
              />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-7xl rounded-2xl border border-white/12 bg-white/6 p-6 sm:p-8 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-(--color-info)">
              {spotlight.importEyebrow}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              {spotlight.importTitle}
            </h3>
            <p className="mt-4 max-w-2xl leading-7 text-white/72">
              {spotlight.importDescription}
            </p>
            <ul className="mt-5 space-y-2">
              {spotlight.importHighlights.map((highlight) => (
                <li
                  className="flex gap-3 text-sm leading-6 text-white/78"
                  key={highlight}
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-(--color-info)"
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:mt-0 lg:grid-cols-1">
            {["products.xlsx", "customers.csv", "template.xlsx"].map((file) => (
              <div
                className="rounded-2xl border border-white/12 bg-(--color-secondary) px-4 py-3"
                key={file}
              >
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-(--color-info)">
                  Excel / CSV
                </p>
                <p className="mt-1 text-sm font-semibold">{file}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-(--color-secondary) px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            inverse
            eyebrow={routeContent.trustStripEyebrow}
            title={routeContent.trustStripTitle}
            description={routeContent.trustStripDescription}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {routeContent.trustStripItems.map((item) => (
              <article
                className="rounded-2xl border border-white/12 bg-white/6 p-6 backdrop-blur"
                key={item.title}
              >
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/72">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-(--color-primary-light) px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={routeContent.audienceEyebrow}
            title={routeContent.audienceTitle}
            description={routeContent.audienceDescription}
          />
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {routeContent.audiences.map((audience) => (
              <article
                className="rounded-2xl bg-white p-6 shadow-sm"
                key={audience.title}
              >
                <h2 className="text-xl font-semibold">{audience.title}</h2>
                <p className="mt-3 leading-7 text-(--color-muted)">
                  {audience.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={routeContent.faqEyebrow}
            title={routeContent.faqTitle}
            description={routeContent.faqDescription}
          />
          <div className="mt-12 grid gap-3 lg:grid-cols-2">
            {routeContent.faqs.map((faq) => (
              <details
                className="group rounded-2xl border border-(--color-border) bg-white px-5 py-4 shadow-sm"
                key={faq.question}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-semibold leading-snug">
                  {faq.question}
                  <span className="shrink-0 text-xl text-(--color-primary) transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-(--color-muted)">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-(--color-secondary) p-8 text-white sm:p-10">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {routeContent.ctaTitle}
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-white/70">
              {routeContent.ctaDescription}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                className="rounded-full bg-(--color-info) px-6 py-3 text-center text-sm font-bold text-(--color-secondary)"
                href="/workflow"
              >
                {routeContent.workflowLink}
              </Link>
              <Link
                className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-bold text-white"
                href="/pricing"
              >
                {routeContent.pricingLink}
              </Link>
              <Link
                className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-bold text-white"
                href="/faq"
              >
                {routeContent.faqLink}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
