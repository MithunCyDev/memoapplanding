import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const srcPath = path.join(root, "lib", "landing-content.ts");
const src = fs.readFileSync(srcPath, "utf8");

const enStart = src.indexOf("  en: {");
const bnStart = src.indexOf("  bn: {");
const endMarker = "\n} as const;";

if (enStart === -1 || bnStart === -1) {
  throw new Error("Could not locate en/bn blocks in landing-content.ts");
}

const enBody = src
  .slice(enStart + "  en: ".length, bnStart)
  .trimEnd()
  .replace(/\},\s*$/, "}");
const bnBody = src
  .slice(bnStart + "  bn: ".length, src.lastIndexOf(endMarker))
  .trimEnd()
  .replace(/\},\s*$/, "}");

const sharedHeader = src.slice(0, src.indexOf("export const landingContent"));

const sharedPath = path.join(root, "lib", "landing-content", "shared.ts");
const enPath = path.join(root, "lib", "landing-content", "en.ts");
const bnPath = path.join(root, "lib", "landing-content", "bn.ts");
const indexPath = path.join(root, "lib", "landing-content", "index.ts");

fs.mkdirSync(path.dirname(sharedPath), { recursive: true });
fs.writeFileSync(sharedPath, sharedHeader.trimEnd() + "\n");

fs.writeFileSync(
  enPath,
  `import { appLoginUrl, ororaSoftAboutUrl, ororaSoftUrl } from "./shared";

export const enLandingContent = ${enBody} as const;
`,
);

fs.writeFileSync(
  bnPath,
  `import { appLoginUrl, ororaSoftAboutUrl, ororaSoftUrl } from "./shared";

export const bnLandingContent = ${bnBody} as const;
`,
);

fs.writeFileSync(
  indexPath,
  `export {
  appLoginUrl,
  defaultLanguage,
  installUrl,
  navItems,
  ororaSoftAboutUrl,
  ororaSoftUrl,
  type Language,
} from "./shared";

export { enLandingContent } from "./en";
export { bnLandingContent } from "./bn";

import type { Language } from "./shared";
import { enLandingContent } from "./en";

export type LandingContent = typeof enLandingContent;

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
`,
);

console.log("Split landing content into lib/landing-content/");
