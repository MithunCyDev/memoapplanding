"use client";

import { useLanguage } from "@/components/landing/language-provider";
import { buildWhatsAppLink } from "@/lib/whatsapp-link";

function ChatIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
    </svg>
  );
}

export function FloatingTalkButton() {
  const { content } = useLanguage();

  return (
    <a
      aria-label={content.common.talkWithUs}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-4xl bg-(--color-primary) px-4 py-3 text-sm font-bold text-white! shadow-xl shadow-[rgba(1,64,52,0.28)] transition hover:bg-(--color-primary-dark) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-primary) **:text-white! sm:bottom-6 sm:right-6 sm:px-5"
      href={buildWhatsAppLink(content.common.talkWithUsMessage)}
      rel="noreferrer"
      target="_blank"
    >
      <ChatIcon />
      <span>{content.common.talkWithUs}</span>
    </a>
  );
}
