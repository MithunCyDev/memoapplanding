"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/landing/language-provider";
import { ororaSoftUrl } from "@/lib/landing-content";
import { siteConfig } from "@/lib/site";

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
const footerSupportWhatsAppNumber = "01835623863";

function buildWhatsAppLink(message: string) {
  const digits = footerSupportWhatsAppNumber.replace(/\D/g, "");
  const normalizedNumber = digits.startsWith("880")
    ? digits
    : digits.startsWith("0")
      ? `88${digits}`
      : `880${digits}`;

  return `https://wa.me/${normalizedNumber}?text=${encodeURIComponent(message)}`;
}

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
    <footer className="bg-(--color-secondary) px-5 pt-16 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 pb-10 lg:grid-cols-[1.25fr_0.8fr_0.95fr] lg:gap-16">
          <div>
            <Link aria-label="MemoApp home" className="inline-flex " href="/">
              <Image
                alt="MemoApp"
                className="h-10 w-auto"
                height={58}
                src="/logo_white.png"
                width={260}
              />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/68">
              {footer.description}
            </p>
            <a
              className="mt-5 inline-flex text-sm font-semibold text-(--color-info) transition hover:text-(--color-info-light) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-info)"
              href={ororaSoftUrl}
              rel="noreferrer"
              target="_blank"
            >
              Powered by OroraSoft
            </a>
          </div>

          <nav aria-label="Footer product navigation">
            <h2 className="text-sm font-bold uppercase tracking-[0.22em] text-(--color-info)">
              {footer.productTitle}
            </h2>
            <div className="mt-5 flex flex-col gap-3">
              {footer.productLinks.map((item) => (
                <FooterLink item={item} key={item.href} />
              ))}
            </div>
          </nav>

          <nav aria-label="Footer company and support navigation">
            <h2 className="text-sm font-bold uppercase tracking-[0.22em] text-(--color-info)">
              {footer.companyTitle}
            </h2>
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
            </div>
          </nav>
        </div>

        <section className="mb-10 rounded-2xl border border-white/10 bg-white/5 p-5  lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-(--color-info)">
              {footer.contactTitle}
            </p>
            <p className="mt-3 text-sm leading-7 text-white/72">
              {footer.contactDescription}
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
            <a
              className="inline-flex justify-center rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1ebe5d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]"
              href={buildWhatsAppLink(footer.whatsappMessage)}
              rel="noreferrer"
              target="_blank"
            >
              {footer.whatsappSupport}
            </a>
            <FooterLink
              className="inline-flex justify-center rounded-full border border-white/18 px-5 py-3 text-sm font-bold text-white transition hover:border-(--color-info) hover:text-(--color-info) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-info)"
              item={footer.companyLinks[1]}
            />
          </div>
        </section>

        <div className="border-t border-white/12 py-6">
          <p className="mb-4 max-w-3xl text-xs leading-6 text-white/55">
            {footer.googleDataNote}{" "}
            <Link
              className="font-semibold text-white/62 underline decoration-white/25 underline-offset-4 transition hover:text-(--color-info)"
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>
          </p>
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
