"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { LanguageToggle } from "@/components/landing/language-toggle";
import { useLanguage } from "@/components/landing/language-provider";
import { installUrl } from "@/lib/landing-content";

interface MobileNavMenuProps {
  open: boolean;
  onClose: () => void;
}

function CloseIcon() {
  return (
    <svg
      aria-hidden
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

function MenuLink({
  href,
  external,
  label,
  isActive,
  onNavigate,
}: {
  href: string;
  external: boolean;
  label: string;
  isActive: boolean;
  onNavigate: () => void;
}) {
  const className = `flex items-center rounded-xl px-4 py-3 text-[0.95rem] font-semibold transition ${
    isActive
      ? "bg-(--color-primary-light) text-(--color-primary-dark)"
      : "text-(--color-ink) hover:bg-(--color-primary-light)/70 hover:text-(--color-primary-dark)"
  }`;

  if (external) {
    return (
      <a
        className={className}
        href={href}
        onClick={onNavigate}
        rel="noreferrer"
        target="_blank"
      >
        {label}
      </a>
    );
  }

  return (
    <Link className={className} href={href} onClick={onNavigate}>
      {label}
    </Link>
  );
}

function LegalLink({
  href,
  label,
  isActive,
  onNavigate,
}: {
  href: string;
  label: string;
  isActive: boolean;
  onNavigate: () => void;
}) {
  return (
    <Link
      className={`text-[0.72rem] font-medium transition hover:text-(--color-primary) ${
        isActive ? "text-(--color-primary-dark)" : "text-(--color-muted)"
      }`}
      href={href}
      onClick={onNavigate}
    >
      {label}
    </Link>
  );
}

export function MobileNavMenuButton({
  open,
  onToggle,
}: {
  open: boolean;
  onToggle: () => void;
}) {
  const { content } = useLanguage();
  const label = open ? "Close menu" : "Open menu";

  return (
    <button
      aria-expanded={open}
      aria-label={label}
      className="inline-flex size-11 items-center justify-center text-(--color-ink) transition hover:text-(--color-primary) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary)/25 md:hidden"
      onClick={onToggle}
      type="button"
    >
      <span className="relative block size-5">
        <span
          className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
            open ? "top-2 rotate-45" : "top-0.5"
          }`}
        />
        <span
          className={`absolute left-0 top-2 block h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
            open ? "top-2 -rotate-45" : "top-3.5"
          }`}
        />
      </span>
      <span className="sr-only">{content.common.menuLabel}</span>
    </button>
  );
}

function MobileNavDrawer({ open, onClose }: MobileNavMenuProps) {
  const { content } = useLanguage();
  const pathname = usePathname();
  const panelId = useId();
  const footer = content.footer;
  const [visible, setVisible] = useState(false);

  const mainLinks = [...footer.productLinks, footer.companyLinks[0]];

  useEffect(() => {
    if (!open) {
      setVisible(false);
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      setVisible(true);
    });

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-0 z-[100] transition-opacity duration-300 md:hidden ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <button
        aria-label="Close menu overlay"
        className="absolute inset-0 bg-[rgba(1,32,26,0.62)] backdrop-blur-sm"
        onClick={onClose}
        type="button"
      />

      <aside
        aria-label="Mobile navigation"
        aria-modal="true"
        className={`fixed inset-y-0 right-0 flex h-dvh w-[min(100%,21rem)] flex-col bg-white shadow-[-16px_0_48px_rgba(1,32,26,0.18)] transition-transform duration-300 ease-out ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
        id={panelId}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
      >
        <div className="flex items-center justify-between border-b border-(--color-border) px-5 py-4">
          <LanguageToggle />

          <button
            aria-label="Close menu"
            className="inline-flex size-10 items-center justify-center text-(--color-ink) transition hover:text-(--color-primary) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary)/25"
            onClick={onClose}
            type="button"
          >
            <CloseIcon />
          </button>
        </div>

        <nav
          aria-label="Site pages"
          className="flex-1 overflow-y-auto px-4 py-5"
        >
          <div className="flex flex-col gap-0.5">
            {mainLinks.map((item) => (
              <MenuLink
                external={item.external}
                href={item.href}
                isActive={!item.external && pathname === item.href}
                key={item.href}
                label={item.label}
                onNavigate={onClose}
              />
            ))}
          </div>
        </nav>

        <div className="border-t border-(--color-border) px-5 py-5">
          <a
            className="primary-button inline-flex w-full justify-center rounded-full px-5 py-3.5 text-sm font-semibold shadow-lg shadow-[rgba(1,64,52,0.18)]"
            href={installUrl}
            onClick={onClose}
            rel="noreferrer"
            target="_blank"
          >
            {content.common.downloadMemoApp}
          </a>

          <nav
            aria-label={content.common.menuLegalLabel}
            className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1"
          >
            {footer.legalLinks.map((item, index) => (
              <span className="inline-flex items-center gap-2" key={item.href}>
                {index > 0 ? (
                  <span
                    aria-hidden
                    className="text-[0.65rem] text-(--color-border)"
                  >
                    |
                  </span>
                ) : null}
                <LegalLink
                  href={item.href}
                  isActive={pathname === item.href}
                  label={item.label}
                  onNavigate={onClose}
                />
              </span>
            ))}
          </nav>
        </div>
      </aside>
    </div>
  );
}

export function MobileNavMenu({ open, onClose }: MobileNavMenuProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <MobileNavDrawer onClose={onClose} open={open} />,
    document.body,
  );
}
