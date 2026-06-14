"use client";

import Link from "next/link";
import { useLanguage } from "@/components/landing/language-provider";
import { SectionHeading } from "@/components/landing/section-heading";

const featureSectionIds = [
  "billing-pos",
  "inventory-purchases",
  "customers-dues",
  "reports-ai",
  "team-backup-security",
] as const;

export function FeaturesRouteContent() {
  const { content } = useLanguage();
  const routeContent = content.featuresRoute;

  return (
    <>
      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={routeContent.deepDiveEyebrow}
            title={routeContent.deepDiveTitle}
            description={routeContent.deepDiveDescription}
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {routeContent.deepDiveGroups.map((group, index) => (
              <article
                className="rounded-2xl border border-(--color-border) bg-(--color-background) p-7 shadow-sm"
                id={featureSectionIds[index]}
                key={group.title}
              >
                <h2 className="text-2xl font-semibold tracking-tight">
                  {group.title}
                </h2>
                <p className="mt-4 leading-7 text-(--color-muted)">
                  {group.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {group.bullets.map((bullet) => (
                    <li className="flex gap-3" key={bullet}>
                      <span className="mt-2 size-2 shrink-0 rounded-full bg-(--color-primary)" />
                      <span className="leading-7 text-(--color-muted)">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-(--color-primary-light) px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <SectionHeading
              align="left"
              eyebrow={routeContent.audienceEyebrow}
              title={routeContent.audienceTitle}
              description={routeContent.audienceDescription}
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
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
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {routeContent.faqs.map((faq) => (
              <details
                className="group rounded-2xl border border-(--color-border) bg-white p-6 shadow-sm"
                key={faq.question}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold">
                  {faq.question}
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

          <div className="mt-12 rounded-5xl bg-(--color-secondary) p-8 text-white sm:p-10">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {routeContent.ctaTitle}
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-white/70">
              {routeContent.ctaDescription}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
