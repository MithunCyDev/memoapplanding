"use client";

import { useLanguage } from "@/components/landing/language-provider";
import { appLoginUrl } from "@/lib/landing-content";

export function PricingRouteContent() {
  const { content } = useLanguage();

  return (
    <>
      <section className="px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3 rounded-4xl border border-(--color-border) bg-white p-4 shadow-sm">
          {content.pricingBenefits.map((benefit) => (
            <span
              className="rounded-full bg-(--color-primary-light) px-4 py-2 text-sm font-semibold text-(--color-primary-dark)"
              key={benefit}
            >
              {benefit}
            </span>
          ))}
        </div>
      </section>

      <section className="px-5 pb-24 pt-10 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
          {content.pricingPlans.map((plan) => (
            <article
              className={`relative rounded-4xl border p-7 ${
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

              <h2 className="text-4xl font-semibold">
                {plan.price}
                <span className="text-base font-medium opacity-70">
                  {plan.term}
                </span>
              </h2>
              <p
                className={`mt-2 text-sm ${
                  plan.highlighted ? "text-white/65" : "text-(--color-muted)"
                }`}
              >
                {plan.yearly}
              </p>
              <p
                className={`mt-5 min-h-24 leading-7 ${
                  plan.highlighted ? "text-white/70" : "text-(--color-muted)"
                }`}
              >
                {plan.description}
              </p>

              <ul className="mt-7 space-y-3">
                {plan.features.map((feature) => (
                  <li className="flex gap-3" key={feature}>
                    <span
                      className={`mt-1 size-5 rounded-full ${
                        plan.highlighted
                          ? "bg-(--color-info)"
                          : "bg-(--color-primary-light)"
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                className={`mt-8 inline-flex w-full justify-center rounded-full px-5 py-3 text-sm font-bold ${
                  plan.highlighted
                    ? "bg-(--color-info) text-(--color-secondary)"
                    : "primary-button"
                }`}
                href={appLoginUrl}
              >
                {content.common.startWithMemoApp}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-(--color-primary-light) px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {content.whyMemoApp.map((item) => (
            <article
              className="rounded-4xl bg-white p-7 shadow-sm"
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
