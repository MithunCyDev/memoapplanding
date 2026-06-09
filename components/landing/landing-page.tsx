"use client";

import Image from "next/image";
import Link from "next/link";
import { HeaderNav } from "@/components/landing/header-nav";
import { LanguageToggle } from "@/components/landing/language-toggle";
import { useLanguage } from "@/components/landing/language-provider";
import { SectionHeading } from "@/components/landing/section-heading";
import {
  AnalyticsMockup,
  HeroDashboardMockup,
  MobileCounterMockup,
} from "@/components/landing/product-mockups";
import {
  appLoginUrl,
  ororaSoftAboutUrl,
  ororaSoftUrl,
} from "@/lib/landing-content";
import { siteConfig } from "@/lib/site";

export function LandingPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main>
        <HeroSection />
        <LogoStrip />
        <FeatureSection />
        <WorkflowSection />
        <ShowcaseSection />
        <PricingSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
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
  const { content } = useLanguage();

  return (
    <section
      className="relative isolate bg-(--color-secondary) pt-32 text-white sm:pt-36"
      id="top"
    >
      <div className="absolute inset-0 -z-10 surface-grid opacity-20" />
      <div className="absolute left-1/2 top-12 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-(--color-secondary-light)/20 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:pb-28">
        <div>
          <div className="inline-flex max-w-76 flex-col gap-2 rounded-3xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium text-white/80 sm:max-w-none sm:flex-row sm:items-center sm:gap-3 sm:rounded-full sm:py-2">
            <span className="flex items-center gap-2">
              <span className="size-2 shrink-0 rounded-full bg-(--color-info)" />
              <span>{content.hero.eyebrow}</span>
            </span>
            <span className="hidden h-4 w-px bg-white/20 sm:block" />
            <a
              className="pl-4 text-sm font-semibold text-(--color-info) transition hover:text-(--color-info-light) sm:pl-0"
              href={ororaSoftAboutUrl}
              rel="noreferrer"
              target="_blank"
            >
              {content.common.productBy} OroraSoft
            </a>
          </div>
          <h1 className="text-balance mt-7 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-6xl">
            {content.hero.titlePrefix}{" "}
            <span className="inline-flex -translate-y-1 items-center rounded-2xl bg-(--color-info) px-3 py-1 text-3xl font-bold leading-none text-(--color-secondary) shadow-xl shadow-[rgba(255,153,51,0.2)] sm:text-4xl lg:text-4xl">
              {content.hero.titleHighlight}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
            {content.hero.description}
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
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
        <HeroDashboardMockup />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-2 lg:grid-cols-6">
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
                  className="feature-marquee-card group rounded-4xl border border-(--color-border) bg-white/95 p-6 shadow-sm shadow-[rgba(1,64,52,0.04)] ring-1 ring-white/70 transition  hover:border-(--color-primary) hover:shadow-2xl hover:shadow-[rgba(1,64,52,0.1)]"
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
        <div className="rounded-4xl border border-(--color-border) bg-(--color-primary-light) p-5 text-center text-sm font-semibold text-(--color-primary-dark) sm:p-6">
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
                className="grid gap-5 rounded-4xl bg-white p-6 shadow-sm sm:grid-cols-[auto_1fr]"
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
          <AnalyticsMockup />
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

export function PricingSection() {
  const { content } = useLanguage();

  return (
    <section className="px-5 py-24 lg:px-8" id="pricing">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={content.pricingHeading.eyebrow}
          title={content.pricingHeading.title}
          description={content.pricingHeading.description}
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {content.pricingPlans.map((plan) => (
            <article
              className={`rounded-4xl border p-7 ${
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
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const { content } = useLanguage();

  return (
    <section className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <SectionHeading
            align="left"
            eyebrow={content.testimonialsHeading.eyebrow}
            title={content.testimonialsHeading.title}
            description={content.testimonialsHeading.description}
          />
        </div>
        <div className="grid gap-5">
          {content.testimonials.map((testimonial) => (
            <figure
              className="rounded-4xl border border-(--color-border) bg-(--color-background) p-7"
              key={testimonial.name}
            >
              <blockquote className="text-xl font-medium leading-9">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-(--color-muted)">
                  {testimonial.role}
                </p>
              </figcaption>
            </figure>
          ))}
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
              className="group rounded-4xl border border-(--color-border) bg-white p-6 shadow-sm"
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

export function Footer() {
  return (
    <footer className="border-t border-(--color-border) bg-white px-5 py-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-(--color-muted) md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} MemoApp. All rights reserved.</p>
        <a
          className="font-semibold text-(--color-primary) hover:text-(--color-primary-dark) md:text-right"
          href={ororaSoftUrl}
          rel="noreferrer"
          target="_blank"
        >
          Developed and maintained by OroraSoft.
        </a>
      </div>
    </footer>
  );
}
