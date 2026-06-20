"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Footer } from "@/components/landing/footer";
import { HeaderNav } from "@/components/landing/header-nav";
import { LandingAssistant } from "@/components/landing/landing-assistant";
import { LanguageToggle } from "@/components/landing/language-toggle";
import { useLanguage } from "@/components/landing/language-provider";
import { SectionHeading } from "@/components/landing/section-heading";
import { PricingTrialBanner } from "@/components/landing/pricing-trial-banner";
import { MobileCounterMockup } from "@/components/landing/product-mockups";
import { appLoginUrl, ororaSoftAboutUrl } from "@/lib/landing-content";
import { splitPricingPlans } from "@/lib/pricing-plans";
import { siteConfig } from "@/lib/site";

export function LandingPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main>
        <HeroSection />
        <LogoStrip />
        <AppPurposeSection />
        <FeatureSection />
        <WorkflowSection />
        <ShowcaseSection />
        <PricingSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <LandingAssistant />
    </div>
  );
}

export function Header() {
  const { content } = useLanguage();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[rgba(248,249,245,0.84)] backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8"
      >
        <Link className="flex items-center" href="/" aria-label="MemoApp home">
          <Image
            alt="MemoApp"
            className="h-9 w-auto sm:h-12"
            height={58}
            priority
            src="/logo.png"
            width={260}
          />
        </Link>

        <HeaderNav />

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <a
            className="primary-button hidden rounded-full px-5 py-3 text-sm font-semibold shadow-lg shadow-[rgba(1,64,52,0.18)] transition sm:inline-flex"
            href={appLoginUrl}
          >
            {content.common.tryForFree}
          </a>
        </div>
      </nav>
    </header>
  );
}

function HeroSection() {
  const { content, language } = useLanguage();
  const isBangla = language === "bn";

  return (
    <section
      className="relative isolate overflow-hidden bg-(--color-secondary) pt-32 text-white sm:pt-36"
      id="top"
    >
      <div className="absolute inset-0 -z-10 surface-grid opacity-20" />
      <div className="hero-flow-orb hero-flow-orb-primary" />
      <div className="hero-flow-orb hero-flow-orb-secondary" />
      <div className="hero-flow-orb hero-flow-orb-accent" />
      <div className="hero-flow-ribbon" />
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-5 pb-24 text-center lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-5xl">
          <div className="inline-flex max-w-76 flex-col gap-2 rounded-3xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium text-white/80 shadow-xl shadow-black/10 backdrop-blur-xl sm:max-w-none sm:flex-row sm:items-center sm:gap-3 sm:rounded-full sm:py-2">
            <span className="flex items-center gap-2">
              <span className="size-2 shrink-0 rounded-full bg-(--color-info)" />
              <span>{content.hero.eyebrow}</span>
            </span>
            <span className="hidden h-4 w-px bg-white/20 sm:block" />
            <a
              className="text-sm font-semibold text-(--color-info) transition hover:text-(--color-info-light)"
              href={ororaSoftAboutUrl}
              rel="noreferrer"
              target="_blank"
            >
              Powered by OroraSoft
            </a>
          </div>
          <h1
            className={`text-balance mx-auto mt-8 max-w-4xl font-semibold tracking-tighter ${
              isBangla
                ? "text-4xl leading-tight sm:text-5xl lg:text-6xl"
                : "text-5xl sm:text-6xl lg:text-7xl"
            }`}
          >
            {content.hero.titlePrefix}{" "}
            <span
              className={`inline-flex -translate-y-1 items-center rounded-xl bg-(--color-info) px-3 py-1 font-bold leading-none text-(--color-secondary) shadow-xl shadow-[rgba(255,153,51,0.2)] ${
                isBangla
                  ? "text-2xl sm:text-3xl lg:text-4xl"
                  : "text-3xl sm:text-4xl lg:text-5xl"
              }`}
            >
              {content.hero.titleHighlight}
            </span>
          </h1>
          <p
            className={`mx-auto mt-6 max-w-3xl leading-8 text-white/70 ${
              isBangla ? "text-base sm:text-lg" : "text-lg sm:text-xl"
            }`}
          >
            {content.hero.description}
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              className="rounded-full bg-(--color-info) px-7 py-4 text-center text-sm font-bold text-(--color-secondary) shadow-xl shadow-[rgba(255,153,51,0.22)] transition hover:bg-(--color-info-light)"
              href={appLoginUrl}
            >
              {content.common.startWithMemoApp}
            </a>
            <Link
              className="rounded-full border border-white/20 px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-white/10"
              href="/features"
            >
              {content.common.exploreFeatures}
            </Link>
          </div>
        </div>
        <HeroDashboardPreview stats={content.heroStats} />
        <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {content.stats.map((stat) => (
            <div
              className="glass-card rounded-2xl p-3 lg:p-2.5"
              key={stat.label}
            >
              <p className="text-xl font-semibold sm:text-2xl lg:text-lg">
                {stat.value}
              </p>
              <p className="mt-1 text-xs leading-5 text-white/65 lg:text-[0.68rem] lg:leading-4">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroDashboardPreview({
  stats,
}: {
  stats: ReadonlyArray<{ label: string; value: string }>;
}) {
  return (
    <div className="relative w-screen max-w-[calc(100vw-1.5rem)] sm:max-w-[calc(100vw-3rem)]">
      <div className="absolute -inset-x-8 bottom-0 top-16 -z-10 rounded-[3rem] bg-(--color-secondary-light)/12 blur-3xl" />
      <div className="absolute -top-5 right-3 z-20 hidden max-w-80 items-start gap-3 rounded-2xl border border-white/25 bg-white/95 p-3 text-left text-(--color-ink) shadow-2xl shadow-black/20 backdrop-blur-xl sm:flex lg:right-10">
        <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-(--color-info) text-sm font-bold text-(--color-secondary)">
          AI
        </span>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--color-primary)">
            Low stock alert
          </p>
          <p className="mt-1 text-sm font-semibold leading-5">
            Rice Premium may run out in 5 days. Create a purchase note now.
          </p>
        </div>
      </div>
      <div className="mx-auto w-full max-w-368 rounded-2xl border border-white/15 bg-white/10 p-2 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-3">
        <div className="overflow-hidden rounded-2xl bg-[#f8f9f5] text-(--color-ink)">
          <div className="flex items-center justify-between border-b border-(--color-border) bg-(--color-background) px-4 py-3">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="size-2.5 rounded-full bg-[#ff5f57]" />
              <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="size-2.5 rounded-full bg-[#28c840]" />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--color-primary)">
              Business pulse
            </p>
          </div>
          <div className="grid gap-4 p-4 sm:p-5 lg:grid-cols-[1.28fr_0.72fr]">
            <section className="rounded-2xl border border-(--color-border) bg-white p-4 shadow-sm sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-(--color-primary)">
                    Owner overview
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-(--color-secondary)">
                    Live business stats
                  </h2>
                </div>
                <span className="rounded-full bg-(--color-primary-light) px-3 py-1 text-xs font-bold text-(--color-primary-dark)">
                  Synced now
                </span>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    className="rounded-2xl border border-(--color-border) bg-(--color-background) p-4"
                    key={stat.label}
                  >
                    <p className="text-2xl font-semibold text-(--color-primary)">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm font-medium leading-5 text-(--color-muted)">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl bg-(--color-primary-light) p-4">
                <div className="flex flex-wrap items-center justify-between gap-3 text-sm font-semibold text-(--color-primary-dark)">
                  <span>Daily operating health</span>
                  <span>Strong momentum</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-white">
                  <div className="h-2 w-[78%] rounded-full bg-(--color-primary)" />
                </div>
              </div>
            </section>

            <section className="grid gap-4">
              <div className="rounded-2xl bg-(--color-secondary) p-5 text-left text-white shadow-xl shadow-[rgba(1,64,52,0.18)]">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-(--color-info)">
                      MemoAI Assistant
                    </p>
                    <p className="mt-2 text-xl font-semibold leading-7">
                      “Which products should I restock before Eid?”
                    </p>
                  </div>
                  <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-white/10 text-lg">
                    AI
                  </span>
                </div>
                <div className="mt-5 space-y-2">
                  {[
                    "Cooking oil · Critical",
                    "Rice premium · Low",
                    "Sugar · Restock soon",
                  ].map((item) => (
                    <div
                      className="rounded-2xl bg-white/8 px-3 py-2 text-sm font-semibold"
                      key={item}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-(--color-border) bg-white p-5 text-left shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--color-primary)">
                  Counter snapshot
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {["Print memo", "Share PDF", "Due paid", "Stock alert"].map(
                    (action) => (
                      <span
                        className="rounded-2xl bg-(--color-background) px-3 py-3 text-center text-sm font-semibold"
                        key={action}
                      >
                        {action}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoStrip() {
  const { content } = useLanguage();

  return (
    <section
      aria-label="Trusted by Bangladeshi businesses"
      className="border-b border-(--color-border) bg-(--color-paper) px-5 py-12 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-(--color-primary)">
            {content.trusted.eyebrow}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-(--color-ink) sm:text-4xl">
            {content.trusted.title}
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-(--color-muted)">
            {content.trusted.description}
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {content.trusted.metrics.map((metric) => (
            <article
              className="rounded-3xl border border-(--color-border) bg-(--color-background) p-5 shadow-sm"
              key={metric.label}
            >
              <p className="text-3xl font-semibold text-(--color-primary)">
                {metric.value}
              </p>
              <p className="mt-2 text-sm font-medium leading-6 text-(--color-muted)">
                {metric.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AppPurposeSection() {
  const { content } = useLanguage();
  const purpose = content.appPurpose;

  return (
    <section
      aria-labelledby="app-purpose-heading"
      className="border-b border-(--color-border) bg-white px-5 py-24 lg:px-8"
      id="about"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={purpose.eyebrow}
          title={purpose.title}
          description={purpose.description}
          id="app-purpose-heading"
        />

        <div className="mt-14">
          <h3 className="text-center text-sm font-bold uppercase tracking-[0.22em] text-(--color-primary)">
            {purpose.functionalityTitle}
          </h3>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {purpose.functionalityItems.map((item, index) => (
              <li
                className="rounded-2xl border border-(--color-border) bg-(--color-background) p-5"
                key={item}
              >
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-(--color-primary)">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-sm font-medium leading-7 text-(--color-ink)">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-secondary) text-white">
          <div className="border-b border-white/10 px-6 py-8 sm:px-10 sm:py-10">
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {purpose.googleDataTitle}
            </h3>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/72 sm:text-base">
              {purpose.googleDataDescription}
            </p>
          </div>

          <div className="grid gap-px bg-white/10 lg:grid-cols-2">
            {purpose.googleDataItems.map((item) => (
              <article
                className="bg-(--color-secondary) px-6 py-8 sm:px-10"
                key={item.title}
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-(--color-info)">
                  {item.title}
                </p>
                <p className="mt-4 text-sm leading-7 text-white/78 sm:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="border-t border-white/10 px-6 py-6 sm:px-10">
            <Link
              className="inline-flex rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:border-(--color-info) hover:text-(--color-info)"
              href="/privacy-policy"
            >
              {purpose.privacyLinkLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeatureSection() {
  const { content } = useLanguage();
  const midpoint = Math.ceil(content.featureCards.length / 2);
  const featureRows = [
    content.featureCards.slice(0, midpoint),
    content.featureCards.slice(midpoint),
  ];

  return (
    <section className="overflow-hidden px-5 py-24 lg:px-8" id="features">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={content.featuresHeading.eyebrow}
          title={content.featuresHeading.title}
          description={content.featuresHeading.description}
        />
      </div>

      <div className="mx-auto mt-14 max-w-384 space-y-5">
        {featureRows.map((row, rowIndex) => (
          <div
            className="feature-marquee"
            key={row.map((feature) => feature.title).join("-")}
          >
            <div
              className={`feature-marquee-track ${
                rowIndex === 1 ? "feature-marquee-track-reverse" : ""
              }`}
            >
              {[...row, ...row].map((feature, index) => (
                <article
                  aria-hidden={index >= row.length}
                  className="feature-marquee-card group rounded-2xl border border-(--color-border) bg-white/95 p-6 shadow-sm shadow-[rgba(1,64,52,0.04)] ring-1 ring-white/70 transition  hover:border-(--color-primary) hover:shadow-2xl hover:shadow-[rgba(1,64,52,0.1)]"
                  key={`${feature.title}-${index}`}
                >
                  <div className="mb-7 flex items-center justify-between gap-4">
                    <span className="rounded-full bg-(--color-primary-light) px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-(--color-primary-dark)">
                      {feature.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-4 leading-7 text-(--color-muted)">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-7xl">
        <div className="rounded-2xl border border-(--color-border) bg-(--color-primary-light) p-5 text-center text-sm font-semibold text-(--color-primary-dark) sm:p-6">
          {content.featureSummary}
        </div>
      </div>
    </section>
  );
}

export function WorkflowSection() {
  const { content } = useLanguage();

  return (
    <section
      className="bg-(--color-primary-light) px-5 py-24 lg:px-8"
      id="workflow"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeading
            align="left"
            eyebrow={content.workflowHeading.eyebrow}
            title={content.workflowHeading.title}
            description={content.workflowHeading.description}
          />
          <div className="grid gap-5">
            {content.workflowSteps.map((step) => (
              <article
                className="grid gap-5 rounded-2xl bg-white p-6 shadow-sm sm:grid-cols-[auto_1fr]"
                key={step.step}
              >
                <span className="grid size-14 place-items-center rounded-2xl bg-(--color-primary) text-lg font-semibold text-white">
                  {step.step}
                </span>
                <div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 leading-7 text-(--color-muted)">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ShowcaseSection() {
  const { content } = useLanguage();

  return (
    <section className="relative bg-(--color-secondary) px-5 py-24 text-white lg:px-8">
      <div className="absolute inset-0 surface-grid opacity-10" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          inverse
          eyebrow={content.showcase.eyebrow}
          title={content.showcase.title}
          description={content.showcase.description}
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-center">
          <ProductDashboardCard label={content.showcase.dashboardLabel} />
          <div className="space-y-5">
            {content.showcase.points.map((item) => (
              <div className="glass-card rounded-3xl p-5" key={item}>
                <p className="leading-7 text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductDashboardCard({ label }: { label: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/10 p-3 shadow-2xl shadow-black/20 backdrop-blur">
      <div className="overflow-hidden rounded-2xl bg-white shadow-xl shadow-black/10">
        <div className="flex items-center justify-between border-b border-(--color-border) bg-(--color-background) px-4 py-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-[#ff5f57]" />
            <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="size-2.5 rounded-full bg-[#28c840]" />
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--color-primary)">
            {label}
          </p>
        </div>
        <div className="relative aspect-979/465">
          <Image
            alt="MemoApp dashboard showing sales, purchases, customers, products, profit chart, low-stock products, and recent sales."
            className="object-cover object-top-left"
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            src="/product-dashboard.png"
          />
        </div>
      </div>
    </div>
  );
}

export function PricingSection() {
  const { content } = useLanguage();
  const { trialPlan, paidPlans } = useMemo(
    () => splitPricingPlans(content.pricingPlans),
    [content.pricingPlans],
  );

  return (
    <section className="px-5 py-24 lg:px-8" id="pricing">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={content.pricingHeading.eyebrow}
          title={content.pricingHeading.title}
          description={content.pricingHeading.description}
        />

        {trialPlan ? (
          <div className="mt-10">
            <PricingTrialBanner
              badge={content.trialBanner.badge}
              plan={trialPlan}
              subtitle={content.trialBanner.subtitle}
              title={content.trialBanner.title}
            />
          </div>
        ) : null}

        <div className="mb-6 mt-2">
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
              className={`flex h-full flex-col rounded-2xl border p-7 ${
                plan.highlighted
                  ? "border-(--color-primary) bg-(--color-secondary) text-white shadow-2xl shadow-[rgba(1,64,52,0.18)]"
                  : "border-(--color-border) bg-white"
              }`}
              key={plan.name}
            >
              <p
                className={`text-sm font-semibold uppercase tracking-[0.22em] ${
                  plan.highlighted
                    ? "text-(--color-info)"
                    : "text-(--color-primary)"
                }`}
              >
                {plan.name}
              </p>
              <div className="mt-4">
                <h3 className="text-3xl font-semibold">
                  {plan.price}
                  <span className="text-base font-medium opacity-70">
                    {plan.term}
                  </span>
                </h3>
                <p
                  className={`mt-2 text-sm ${
                    plan.highlighted ? "text-white/65" : "text-(--color-muted)"
                  }`}
                >
                  {plan.yearly}
                </p>
              </div>
              <p
                className={`mt-4 leading-7 ${
                  plan.highlighted ? "text-white/70" : "text-(--color-muted)"
                }`}
              >
                {plan.description}
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
  );
}

function TestimonialsSection() {
  const { content } = useLanguage();
  const testimonials = content.testimonials;
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [carouselInteractionVersion, setCarouselInteractionVersion] =
    useState(0);
  const activeTestimonial = testimonials[activeTestimonialIndex];
  const totalTestimonials = testimonials.length;

  useEffect(() => {
    if (totalTestimonials <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveTestimonialIndex((currentIndex) =>
        currentIndex === totalTestimonials - 1 ? 0 : currentIndex + 1,
      );
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [carouselInteractionVersion, totalTestimonials]);

  if (!activeTestimonial) {
    return null;
  }

  const resetCarouselTimer = () => {
    setCarouselInteractionVersion((currentVersion) => currentVersion + 1);
  };

  const showPreviousTestimonial = () => {
    resetCarouselTimer();
    setActiveTestimonialIndex((currentIndex) =>
      currentIndex === 0 ? totalTestimonials - 1 : currentIndex - 1,
    );
  };

  const showNextTestimonial = () => {
    resetCarouselTimer();
    setActiveTestimonialIndex((currentIndex) =>
      currentIndex === totalTestimonials - 1 ? 0 : currentIndex + 1,
    );
  };

  return (
    <section className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <div className="min-w-0">
          <SectionHeading
            align="left"
            eyebrow={content.testimonialsHeading.eyebrow}
            title={content.testimonialsHeading.title}
            description={content.testimonialsHeading.description}
          />
          <p className="mt-6 inline-flex rounded-full border border-(--color-border) bg-(--color-primary-light) px-4 py-2 text-sm font-bold text-(--color-primary-dark)">
            {content.testimonialsHeading.scrollHint}
          </p>
        </div>
        <div className="min-w-0 rounded-2xl border border-(--color-border) bg-(--color-background) p-4 shadow-sm sm:p-6">
          <div
            aria-live="polite"
            className="min-w-0 overflow-hidden rounded-2xl bg-white"
          >
            <div
              className="flex w-full transition-transform duration-700 ease-out motion-reduce:transition-none"
              style={{
                transform: `translateX(-${activeTestimonialIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <figure
                  aria-hidden={index !== activeTestimonialIndex}
                  className="min-h-92 w-full shrink-0 p-7 sm:min-h-80 sm:p-9"
                  key={testimonial.quote}
                >
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <span className="inline-flex rounded-full bg-(--color-primary-light) px-3 py-1 text-xs font-bold tracking-[0.18em] text-(--color-primary)">
                      {String(index + 1).padStart(2, "0")} /{" "}
                      {String(totalTestimonials).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-semibold text-(--color-muted)">
                      {testimonial.role}
                    </span>
                  </div>
                  <blockquote className="text-balance text-2xl font-semibold leading-10 tracking-tight sm:text-3xl sm:leading-11">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="mt-6">
                    <p className="font-semibold text-(--color-primary-dark)">
                      {testimonial.name}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-start sm:gap-6">
            <div className="flex gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  aria-label={`${content.testimonialsHeading.reviewLabel} ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeTestimonialIndex
                      ? "w-8 bg-(--color-primary)"
                      : "w-2.5 bg-(--color-border) hover:bg-(--color-primary-light)"
                  }`}
                  key={testimonial.quote}
                  onClick={() => {
                    resetCarouselTimer();
                    setActiveTestimonialIndex(index);
                  }}
                  type="button"
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                aria-label={content.testimonialsHeading.previousLabel}
                className="rounded-full border border-(--color-border) bg-white px-5 py-3 text-sm font-bold text-(--color-secondary) transition hover:border-(--color-primary) hover:text-(--color-primary) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-primary)"
                onClick={showPreviousTestimonial}
                type="button"
              >
                ←
              </button>
              <button
                aria-label={content.testimonialsHeading.nextLabel}
                className="rounded-full bg-(--color-secondary) px-5 py-3 text-sm font-bold text-white transition hover:bg-(--color-primary-dark) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-primary)"
                onClick={showNextTestimonial}
                type="button"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  const { content } = useLanguage();

  return (
    <section className="px-5 py-24 lg:px-8" id="faq">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={content.faqHeading.eyebrow}
          title={content.faqHeading.title}
          description={content.faqHeading.description}
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {content.faqs.map((faq) => (
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
      </div>
    </section>
  );
}

export function FinalCtaSection() {
  const { content } = useLanguage();

  return (
    <section className="px-5 pb-24 lg:px-8" id="contact">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-5xl bg-(--color-secondary) lg:grid-cols-[1fr_0.82fr]">
        <div className="p-8 text-white sm:p-12 lg:p-16">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--color-info)">
            {content.finalCta.eyebrow}
          </p>
          <h2 className="text-balance mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {content.finalCta.title}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
            {content.finalCta.description}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              className="rounded-full bg-(--color-info) px-7 py-4 text-center text-sm font-bold text-(--color-secondary)"
              href={`mailto:${siteConfig.contactEmail}`}
            >
              {content.common.contactMemoApp}
            </a>
            <Link
              className="rounded-full border border-white/20 px-7 py-4 text-center text-sm font-bold text-white"
              href="/features"
            >
              {content.common.reviewFeatures}
            </Link>
          </div>
        </div>
        <div className="relative flex items-center justify-center overflow-hidden bg-(--color-primary-light) p-8 lg:p-12">
          <div className="absolute z-10 right-8 top-8 rounded-3xl bg-white/80 px-5 py-4 shadow-xl shadow-[rgba(1,64,52,0.1)] backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--color-primary)">
              Live counter
            </p>
            <p className="mt-1 text-2xl font-semibold text-(--color-secondary)">
              ৳48,320
            </p>
          </div>
          <div className="absolute z-10 bottom-8 left-8 hidden rounded-3xl bg-(--color-secondary) px-5 py-4 text-white shadow-xl shadow-[rgba(1,64,52,0.16)] sm:block">
            <p className="text-xs text-white/65">AI reminder</p>
            <p className="mt-1 max-w-44 text-sm font-semibold leading-5">
              Restock oil and rice before the weekend rush.
            </p>
          </div>
          <div className="relative rounded-[2.75rem] border border-white/70 bg-white/35 p-5 shadow-2xl shadow-[rgba(1,64,52,0.16)] backdrop-blur">
            <MobileCounterMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
