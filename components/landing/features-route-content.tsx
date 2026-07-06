"use client";

import Link from "next/link";
import { useLanguage } from "@/components/landing/language-provider";
import { FeaturesSetupJourney } from "@/components/landing/features-setup-journey";
import { SectionHeading } from "@/components/landing/section-heading";

export function FeaturesRouteContent() {
  const { content } = useLanguage();
  const routeContent = content.featuresRoute;

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

      <FeaturesSetupJourney />

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
                className="rounded-2xl border border-white/12 bg-white/[0.06] p-6 backdrop-blur"
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

          <div className="mt-12 rounded-5xl bg-(--color-secondary) p-8 text-white sm:p-10">
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
