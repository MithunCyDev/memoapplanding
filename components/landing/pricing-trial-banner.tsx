import { appLoginUrl } from "@/lib/landing-content";
import type { PricingPlan } from "@/lib/pricing-plans";

interface PricingTrialBannerProps {
  plan: PricingPlan;
  title: string;
  subtitle: string;
  badge: string;
}

export function PricingTrialBanner({
  plan,
  title,
  subtitle,
  badge,
}: PricingTrialBannerProps) {
  return (
    <div className="mb-10">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-(--color-ink) lg:text-3xl">
          {title}
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-(--color-muted) lg:text-base">
          {subtitle}
        </p>
      </div>

      <article className="relative overflow-hidden rounded-2xl border-2 border-(--color-primary) bg-linear-to-br from-(--color-primary-light) via-white to-[#f4faf7] shadow-lg shadow-[rgba(2,115,74,0.14)]">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-(--color-secondary)" />

        <div className="flex flex-col gap-6 p-6 lg:flex-row lg:items-center lg:gap-8 lg:p-8">
          <div className="flex shrink-0 items-start gap-4 lg:max-w-sm">
            <div className="grid size-12 place-items-center rounded-2xl bg-(--color-secondary) text-white shadow-sm">
              <svg
                aria-hidden
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 8v4l3 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-(--color-primary)">
                {plan.name}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <p className="text-3xl font-bold text-(--color-ink)">
                  {plan.monthlyPrice}
                  <span className="ml-1 text-base font-semibold text-(--color-muted)">
                    {plan.monthlyTerm}
                  </span>
                </p>
                <span className="rounded-full bg-(--color-info) px-3 py-1 text-xs font-bold text-(--color-secondary)">
                  {badge}
                </span>
              </div>
              <p className="mt-2 text-sm leading-6 text-(--color-muted)">
                {plan.blurb}
              </p>
              {"teamSeats" in plan && plan.teamSeats ? (
                <p className="mt-2 text-sm font-semibold text-(--color-primary-dark)">
                  {plan.teamSeats}
                </p>
              ) : null}
            </div>
          </div>

          <ul className="grid flex-1 gap-2 sm:grid-cols-2">
            {plan.features.map((feature) => (
              <li
                className="flex gap-2.5 text-sm leading-6 text-(--color-ink)"
                key={feature}
              >
                <span
                  aria-hidden
                  className="mt-1.5 size-2 shrink-0 rounded-full bg-(--color-secondary)"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="shrink-0 lg:w-52">
            <a
              className="primary-button inline-flex w-full justify-center rounded-full px-6 py-3.5 text-sm font-bold shadow-md transition hover:opacity-95"
              href={appLoginUrl}
            >
              {plan.cta}
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
