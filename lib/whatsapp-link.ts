import { siteConfig } from "@/lib/site";

export function buildWhatsAppLink(message: string) {
  const digits = siteConfig.whatsappNumber.replace(/\D/g, "");
  const normalizedNumber = digits.startsWith("880")
    ? digits
    : digits.startsWith("0")
      ? `88${digits}`
      : `880${digits}`;

  return `https://wa.me/${normalizedNumber}?text=${encodeURIComponent(message)}`;
}
