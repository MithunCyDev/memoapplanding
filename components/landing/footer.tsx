"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/landing/language-provider";
import { SocialLinks } from "@/components/landing/social-links";
import { ororaSoftUrl } from "@/lib/landing-content";
import { siteConfig } from "@/lib/site";
import { buildWhatsAppLink } from "@/lib/whatsapp-link";

interface FooterLinkItem {
  label: string;
  href: string;
  external: boolean;
}

interface FooterLinkProps {
  item: FooterLinkItem;
  className?: string;
}

const linkClassName =
  "text-sm font-medium text-white/68 transition hover:text-(--color-info) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-info)";
const sectionHeadingClassName =
  "text-xs font-bold uppercase tracking-[0.22em] text-(--color-info)";

function FooterLink({ item, className = linkClassName }: FooterLinkProps) {
  if (item.external) {
    return (
      <a
        className={className}
        href={item.href}
        rel="noreferrer"
        target="_blank"
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link className={className} href={item.href}>
      {item.label}
    </Link>
  );
}

export function Footer() {
  const { content } = useLanguage();
  const footer = content.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-(--color-secondary) px-5 pt-16 text-white lg:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-(--color-info)/70 to-transparent"
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 pb-12 md:grid-cols-2 xl:grid-cols-4 xl:gap-12">
          <div className="xl:col-span-1">
            <Link aria-label="MemoApp home" className="inline-flex" href="/">
              <Image
                alt="MemoApp"
                className="h-10 w-auto"
                height={58}
                src="/logo_white.png"
                width={260}
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/68">
              {footer.description}
            </p>
            <a
              className="mt-4 inline-flex text-sm font-semibold text-(--color-info) transition hover:text-(--color-info-light) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-info)"
              href={ororaSoftUrl}
              rel="noreferrer"
              target="_blank"
            >
              Powered by OroraSoft
            </a>
            <div className="mt-6">
              <p className={sectionHeadingClassName}>{footer.followUsTitle}</p>
              <SocialLinks className="mt-3 flex items-center gap-2.5" />
            </div>
          </div>

          <nav aria-label="Footer product navigation">
            <h2 className={sectionHeadingClassName}>{footer.productTitle}</h2>
            <div className="mt-5 flex flex-col gap-3">
              {footer.productLinks.map((item) => (
                <FooterLink item={item} key={item.href} />
              ))}
            </div>
          </nav>

          <nav aria-label="Footer company and support navigation">
            <h2 className={sectionHeadingClassName}>{footer.companyTitle}</h2>
            <div className="mt-5 flex flex-col gap-3">
              {footer.companyLinks.map((item) => (
                <FooterLink item={item} key={item.href} />
              ))}
              <a
                className={linkClassName}
                href={`mailto:${siteConfig.contactEmail}`}
              >
                {footer.emailSupport}
              </a>
              <a
                className={linkClassName}
                href={buildWhatsAppLink(footer.whatsappMessage)}
                rel="noreferrer"
                target="_blank"
              >
                {footer.whatsappSupport}
              </a>
            </div>
          </nav>

          <section aria-label={footer.officeTitle}>
            <h2 className={sectionHeadingClassName}>{footer.officeTitle}</h2>
            <p className="mt-5 text-sm leading-7 text-white/68">
              {siteConfig.officeAddress}
            </p>
          </section>
        </div>

        <div className="border-t border-white/12 py-6">
          <div className="flex flex-col gap-5 text-xs text-white/55 lg:flex-row lg:items-center lg:justify-between">
            <p>{`© ${year} ${siteConfig.name}. ${content.common.copyright}`}</p>
            <nav
              aria-label={footer.legalTitle}
              className="flex flex-wrap gap-x-4 gap-y-2"
            >
              {footer.legalLinks.map((item) => (
                <FooterLink
                  className="font-semibold text-white/62 transition hover:text-(--color-info) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-info)"
                  item={item}
                  key={item.href}
                />
              ))}
              <a
                className="font-semibold text-white/62 transition hover:text-(--color-info) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-info)"
                href={ororaSoftUrl}
                rel="noreferrer"
                target="_blank"
              >
                {footer.developedBy}
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
