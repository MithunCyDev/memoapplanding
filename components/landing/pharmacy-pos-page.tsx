"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Header } from "@/components/landing/landing-page";
import { useLanguage } from "@/components/landing/language-provider";
import { useInView } from "@/components/landing/use-in-view";
import { appLoginUrl } from "@/lib/landing-content";
import { siteConfig } from "@/lib/site";
import { buildWhatsAppLink } from "@/lib/whatsapp-link";

function PlayfulAccentDot() {
  return (
    <span
      aria-hidden="true"
      className="size-2 shrink-0 rounded-full bg-(--color-info)"
    />
  );
}

export function PharmacyPosPage() {
  const { content } = useLanguage();
  const page = content.pharmacyPosPage;
  const whatsappHref = buildWhatsAppLink(page.hero.whatsappMessage);
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen overflow-hidden bg-(--color-paper)">
      <Header />

      <main>
        <section className="relative isolate overflow-hidden bg-(--color-secondary) pt-28 text-white sm:pt-32">
          <div className="absolute inset-0 -z-10 surface-grid opacity-20" />
          <div className="hero-flow-orb hero-flow-orb-primary" />
          <div className="hero-flow-orb hero-flow-orb-secondary" />
          <div className="hero-flow-orb hero-flow-orb-accent" />
          <div className="hero-flow-ribbon" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-10 lg:px-8 lg:pb-24">
            <div className="relative z-10">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-xl">
                <PlayfulAccentDot />
                {page.hero.eyebrow}
              </p>
              <h1 className="text-balance mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.35rem] lg:leading-[1.08]">
                {page.hero.title}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/72 sm:text-lg">
                {page.hero.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  className="rounded-full bg-(--color-info) px-7 py-4 text-center text-sm font-bold text-(--color-secondary)! shadow-xl shadow-[rgba(255,153,51,0.22)] transition hover:bg-(--color-info-light)"
                  href={appLoginUrl}
                >
                  {page.hero.tryCta}
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-center text-sm font-bold text-white! transition hover:bg-white/10"
                  href={whatsappHref}
                  rel="noreferrer"
                  target="_blank"
                >
                  <WhatsAppGlyph />
                  {page.hero.whatsappCta}
                </a>
              </div>
            </div>

            <PharmacyHeroVisual alt={page.hero.imageAlt} />
          </div>
        </section>

        <DashboardShowcaseSection />

        <section className="border-b border-(--color-border) bg-white px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-(--color-primary)">
              {page.features.eyebrow}
            </p>
            <h2 className="mt-3 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-(--color-ink) sm:text-4xl">
              {page.features.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-(--color-muted)">
              {page.features.description}
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {page.features.items.map((item, index) => (
                <article
                  className="rounded-2xl border border-(--color-border) bg-(--color-background) p-5 shadow-sm transition hover:border-(--color-primary)/35 hover:shadow-md"
                  key={item.title}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--color-primary)">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-(--color-ink)">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-(--color-muted)">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-(--color-paper) px-5 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-center text-sm font-semibold uppercase tracking-[0.22em] text-(--color-primary)">
              {page.trust.eyebrow}
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {page.trust.items.map((item) => (
                <article
                  className="rounded-2xl border border-(--color-border) bg-white p-6 text-center shadow-sm"
                  key={item.title}
                >
                  <h3 className="text-lg font-semibold text-(--color-ink)">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-(--color-muted)">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-(--color-secondary) px-5 py-20 text-white lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {page.finalCta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/72">
              {page.finalCta.description}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                className="rounded-full bg-(--color-info) px-7 py-4 text-center text-sm font-bold text-(--color-secondary)! shadow-xl shadow-[rgba(255,153,51,0.22)] transition hover:bg-(--color-info-light)"
                href={appLoginUrl}
              >
                {page.finalCta.tryCta}
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-center text-sm font-bold text-white! transition hover:bg-white/10"
                href={whatsappHref}
                rel="noreferrer"
                target="_blank"
              >
                <WhatsAppGlyph />
                {page.finalCta.whatsappCta}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-(--color-border) bg-white px-5 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-(--color-muted)">
            © {year} {siteConfig.name}. {content.common.copyright}
          </p>
          <nav
            aria-label="Legal"
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
          >
            <Link
              className="text-sm font-medium text-(--color-muted)! transition hover:text-(--color-primary)!"
              href="/privacy-policy"
            >
              {page.chrome.privacyLabel}
            </Link>
            <Link
              className="text-sm font-medium text-(--color-muted)! transition hover:text-(--color-primary)!"
              href="/terms-of-service"
            >
              {page.chrome.termsLabel}
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function PharmacyHeroVisual({ alt }: { alt: string }) {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      <div
        aria-hidden="true"
        className="absolute -inset-10 -z-10 rounded-full bg-(--color-info)/18 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-6 top-8 -z-10 hidden h-40 w-40 rounded-full bg-white/10 blur-2xl sm:block"
      />

      <div className="relative overflow-hidden rounded-2xl bg-white p-3 shadow-2xl shadow-black/30 sm:p-4">
        <Image
          alt={alt}
          className="h-auto w-full"
          height={900}
          priority
          sizes="(min-width: 1024px) 42vw, 92vw"
          src="/memoapppharmecy-POS.png"
          width={1200}
        />
      </div>
    </div>
  );
}

function DashboardShowcaseSection() {
  const { content } = useLanguage();
  const dashboard = content.pharmacyPosPage.dashboard;
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.18 });

  return (
    <section
      className="border-b border-(--color-border) bg-(--color-background) px-5 py-20 lg:px-8"
      ref={sectionRef}
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-(--color-primary)">
          {dashboard.eyebrow}
        </p>
        <h2 className="mt-3 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-(--color-ink) sm:text-4xl">
          {dashboard.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-(--color-muted)">
          {dashboard.description}
        </p>

        <figure
          className={`mx-auto mt-12 max-w-5xl overflow-hidden rounded-2xl border border-(--color-border) bg-white shadow-xl shadow-[rgba(1,64,52,0.08)] transition duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center justify-between border-b border-(--color-border) bg-(--color-paper) px-4 py-3">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="size-2.5 rounded-full bg-[#ff5f57]" />
              <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="size-2.5 rounded-full bg-[#28c840]" />
            </div>
            <figcaption className="text-xs font-bold uppercase tracking-[0.18em] text-(--color-primary)">
              {dashboard.label}
            </figcaption>
          </div>
          <Image
            alt={dashboard.imageAlt}
            className="h-auto w-full"
            height={769}
            sizes="(min-width: 1024px) 72vw, 100vw"
            src="/product-dashboard.png"
            width={1480}
          />
        </figure>
      </div>
    </section>
  );
}

function WhatsAppGlyph() {
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12.04 2C6.58 2 2.15 6.36 2.15 11.72c0 1.9.5 3.75 1.45 5.39L2 22l5.07-1.55a10.1 10.1 0 0 0 4.97 1.27h.01c5.46 0 9.89-4.36 9.89-9.72C21.94 6.36 17.5 2 12.04 2Zm5.76 13.9c-.24.67-1.4 1.23-1.94 1.31-.5.07-1.12.1-1.81-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.07.99-2.35.26-.28.57-.35.76-.35h.55c.17 0 .4-.07.63.48.24.56.8 1.94.87 2.08.07.14.12.3.02.48-.1.19-.14.3-.28.46-.14.16-.3.36-.42.48-.14.14-.29.29-.12.57.17.28.74 1.22 1.59 1.98 1.1.97 2.02 1.27 2.3 1.41.29.14.45.12.62-.07.17-.19.72-.84.91-1.13.19-.28.39-.24.65-.14.26.1 1.66.78 1.95.92.28.14.47.21.54.33.07.12.07.7-.17 1.37Z" />
    </svg>
  );
}
