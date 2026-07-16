export {
  appLoginUrl,
  defaultLanguage,
  installUrl,
  navItems,
  ororaSoftAboutUrl,
  ororaSoftUrl,
  type Language,
} from "./shared";

export { enLandingContent } from "./en";

import type { Language } from "./shared";
import { enLandingContent } from "./en";

export type LandingContent =
  | typeof enLandingContent
  | typeof import("./bn").bnLandingContent;

/** Server/build usage (schema, sitemap). English only to avoid loading both locales. */
export const landingContent = {
  en: enLandingContent,
} as const;

export async function loadLandingContent(
  language: Language,
): Promise<LandingContent> {
  if (language === "en") {
    return enLandingContent;
  }

  const { bnLandingContent } = await import("./bn");
  return bnLandingContent;
}
