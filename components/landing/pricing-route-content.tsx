"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useLanguage } from "@/components/landing/language-provider";
import { SectionHeading } from "@/components/landing/section-heading";
import { appLoginUrl } from "@/lib/landing-content";
import { splitPricingPlans } from "@/lib/pricing-plans";

type BillingCycle = "monthly" | "yearly";

export function PricingRouteContent() {
  const { content } = useLanguage();
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const { paidPlans } = useMemo(
    () => splitPricingPlans(content.pricingPlans),
    [content.pricingPlans],
  );

  return (
    <>
      <section className="px-5 py-10 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 rounded-2xl border border-(--color-border) bg-white p-4 shadow-sm lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
            {content.pricingBenefits.map((benefit) => (
              <span
                className="rounded-full bg-(--color-primary-light) px-4 py-2 text-sm font-semibold text-(--color-primary-dark)"
                key={benefit}
              >
                {benefit}
              </span>
            ))}
          </div>
          <div className="flex justify-center">
            <div className="rounded-full bg-(--color-background) p-1">
              {(["monthly", "yearly"] as const).map((cycle) => (
                <button
                  className={`rounded-full px-5 py-2 text-sm font-bold transition ${
                    billingCycle === cycle
                      ? "bg-(--color-secondary) text-white shadow-sm"
                      : "text-(--color-muted) hover:text-(--color-primary)"
                  }`}
                  key={cycle}
                  onClick={() => setBillingCycle(cycle)}
                  type="button"
                >
                  {cycle === "monthly"
                    ? content.billing.monthly
                    : `${content.billing.yearly} · ${content.billing.saveLabel}`}
                </button>
              ))}
            </div>
          </div>
          {billingCycle === "yearly" ? (
            <p className="rounded-3xl bg-(--color-primary-light) px-4 py-3 text-center text-sm font-semibold text-(--color-primary-dark) lg:col-span-2">
              {content.billing.yearlyBenefit}
            </p>
          ) : null}
        </div>
      </section>

      <section className="px-5 pb-24 pt-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-(--color-ink)">
              {content.paidPlansHeading.title}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-(--color-muted) lg:text-base">
              {content.paidPlansHeading.subtitle}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {paidPlans.map((plan) => (
              <article
                className={`relative flex h-full flex-col rounded-2xl border p-7 ${
                  plan.highlighted
                    ? "border-(--color-primary) bg-(--color-secondary) text-white shadow-2xl shadow-[rgba(1,64,52,0.18)]"
                    : "border-(--color-border) bg-white shadow-sm"
                }`}
                key={plan.name}
              >
                <div className="mb-8 flex items-center justify-between gap-3">
                  <p
                    className={`text-sm font-semibold uppercase tracking-[0.22em] ${
                      plan.highlighted
                        ? "text-(--color-info)"
                        : "text-(--color-primary)"
                    }`}
                  >
                    {plan.name}
                  </p>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      plan.highlighted
                        ? "bg-(--color-info) text-(--color-secondary)"
                        : "bg-(--color-primary-light) text-(--color-primary-dark)"
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>

                <p
                  className={`text-sm font-semibold ${
                    plan.highlighted ? "text-white/70" : "text-(--color-muted)"
                  }`}
                >
                  {plan.target}
                </p>

                <h2 className="text-4xl font-semibold">
                  {billingCycle === "monthly"
                    ? plan.monthlyPrice
                    : plan.yearlyPrice}
                  <span className="text-base font-medium opacity-70">
                    {billingCycle === "monthly"
                      ? plan.monthlyTerm
                      : plan.yearlyTerm}
                  </span>
                </h2>
                <p
                  className={`mt-2 text-sm ${
                    plan.highlighted ? "text-white/65" : "text-(--color-muted)"
                  }`}
                >
                  {billingCycle === "yearly" && plan.yearlyWasPrice
                    ? `${content.billing.wasLabel} ${plan.yearlyWasPrice} · ${plan.yearlyNote}`
                    : plan.yearly}
                </p>
                <p
                  className={`mt-5 min-h-24 leading-7 ${
                    plan.highlighted ? "text-white/70" : "text-(--color-muted)"
                  }`}
                >
                  {plan.blurb}
                </p>
                {"teamSeats" in plan && plan.teamSeats ? (
                  <p
                    className={`mt-3 text-sm font-semibold ${
                      plan.highlighted
                        ? "text-(--color-info)"
                        : "text-(--color-primary-dark)"
                    }`}
                  >
                    {plan.teamSeats}
                  </p>
                ) : null}

                <ul className="mt-7 space-y-3">
                  {plan.features.map((feature) => (
                    <li className="flex gap-3" key={feature}>
                      <span
                        className={`mt-1.5 size-2 shrink-0 rounded-full ${
                          plan.highlighted
                            ? "bg-(--color-info)"
                            : "bg-(--color-primary)"
                        }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <a
                    className={`inline-flex w-full justify-center rounded-full px-5 py-3 text-sm font-bold ${
                      plan.highlighted
                        ? "bg-(--color-info) text-(--color-secondary)"
                        : "primary-button"
                    }`}
                    href={
                      "ctaHref" in plan && plan.ctaHref
                        ? plan.ctaHref
                        : appLoginUrl
                    }
                  >
                    {plan.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={content.pricingRoute.comparisonEyebrow}
            title={content.pricingRoute.comparisonTitle}
            description={content.pricingRoute.comparisonDescription}
          />

          <div className="mt-12 overflow-x-auto rounded-2xl border border-(--color-border) bg-white shadow-sm">
            <table className="w-full min-w-240 border-collapse text-left">
              <caption className="sr-only">
                {content.pricingRoute.comparisonTitle}
              </caption>
              <thead>
                <tr className="bg-(--color-primary-light)">
                  {content.pricingRoute.comparisonColumns.map((column) => (
                    <th
                      className="px-5 py-4 text-sm font-bold text-(--color-primary-dark)"
                      key={column}
                      scope="col"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.pricingRoute.comparisonRows.map((row) => (
                  <tr
                    className="border-t border-(--color-border)"
                    key={row.feature}
                  >
                    <th
                      className="px-5 py-4 font-semibold text-(--color-ink)"
                      scope="row"
                    >
                      {row.feature}
                    </th>
                    <td className="px-5 py-4 text-(--color-muted)">
                      {row.trial}
                    </td>
                    <td className="px-5 py-4 text-(--color-muted)">
                      {row.basic}
                    </td>
                    <td className="px-5 py-4 text-(--color-muted)">
                      {row.growth}
                    </td>
                    <td className="px-5 py-4 text-(--color-muted)">
                      {row.pro}
                    </td>
                    <td className="px-5 py-4 text-(--color-muted)">
                      {row.enterprise}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {content.pricingRoute.assurance.map((item) => (
              <div
                className="rounded-3xl bg-(--color-primary-light) p-5 text-sm font-semibold leading-6 text-(--color-primary-dark)"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={content.pricingRoute.faqEyebrow}
            title={content.pricingRoute.faqTitle}
            description={content.pricingRoute.faqDescription}
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {content.pricingRoute.faqs.map((faq) => (
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
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              className="rounded-full bg-(--color-secondary) px-6 py-3 text-center text-sm font-bold text-white"
              href="/features"
            >
              {content.pricingRoute.featuresLink}
            </Link>
            <Link
              className="rounded-full border border-(--color-border) bg-white px-6 py-3 text-center text-sm font-bold text-(--color-secondary)"
              href="/faq"
            >
              {content.pricingRoute.faqLink}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-(--color-primary-light) px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {content.whyMemoApp.map((item) => (
            <article
              className="rounded-2xl bg-white p-7 shadow-sm"
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
    </>
  );
}
