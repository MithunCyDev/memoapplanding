export const appLoginUrl = "https://memoappbd.shop/signup";
export const installUrl = "https://memoappbd.shop/install";
export const ororaSoftAboutUrl = "https://www.ororasoft.com/about";
export const ororaSoftUrl = "https://www.ororasoft.com/";

export type Language = "bn" | "en";

export const defaultLanguage: Language = "en";

export const navItems = [
  { label: "Home", href: "/", external: false },
  { label: "About Us", href: ororaSoftAboutUrl, external: true },
  { label: "Features", href: "/features", external: false },
  { label: "Workflow", href: "/workflow", external: false },
  { label: "Pricing", href: "/pricing", external: false },
  { label: "Privacy", href: "/privacy-policy", external: false },
] as const;
