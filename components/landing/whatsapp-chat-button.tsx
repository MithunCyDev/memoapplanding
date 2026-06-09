import { siteConfig } from "@/lib/site";

const supportWhatsAppNumber = process.env.NEXT_PUBLIC_SUPPORT_WHATSAPP_NUMBER;

type WhatsAppChatButtonProps = {
  label: string;
  message: string;
  className?: string;
};

function buildWhatsAppLink(message: string) {
  if (!supportWhatsAppNumber) {
    return `mailto:${siteConfig.contactEmail}`;
  }

  const digits = supportWhatsAppNumber.replace(/\D/g, "");
  const normalizedNumber = digits.startsWith("880")
    ? digits
    : digits.startsWith("0")
      ? `88${digits}`
      : `880${digits}`;

  return `https://wa.me/${normalizedNumber}?text=${encodeURIComponent(message)}`;
}

export function WhatsAppChatButton({
  label,
  message,
  className = "",
}: WhatsAppChatButtonProps) {
  return (
    <a
      aria-label={label}
      className={`inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white! shadow-2xl shadow-[rgba(1,64,52,0.2)] transition hover:bg-[#1ebe5d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] **:text-white! ${className}`}
      href={buildWhatsAppLink(message)}
      rel="noreferrer"
      target="_blank"
    >
      <svg
        aria-hidden="true"
        className="size-5 shrink-0"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.96L2.05 22l5.25-1.38a9.86 9.86 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91a9.86 9.86 0 0 0-2.91-7.01ZM12.05 20.15h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.24 8.24 0 0 1-1.26-4.39c0-4.55 3.7-8.25 8.25-8.25a8.2 8.2 0 0 1 5.83 2.42 8.2 8.2 0 0 1 2.41 5.84c-.01 4.54-3.71 8.23-8.25 8.23Zm4.52-6.17c-.25-.12-1.47-.72-1.69-.8-.23-.08-.39-.12-.56.12-.17.25-.64.8-.79.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.38.11-.51.12-.11.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.44.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29Z" />
      </svg>
      <span>{label}</span>
    </a>
  );
}
