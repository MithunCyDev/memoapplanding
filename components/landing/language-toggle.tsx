"use client";

import { useLanguage } from "@/components/landing/language-provider";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      aria-label="Switch language"
      className="flex rounded-full border border-(--color-border) bg-white p-1 text-xs font-bold shadow-sm"
      role="group"
    >
      <button
        aria-pressed={language === "bn"}
        className={`rounded-full px-3 py-2 transition ${
          language === "bn"
            ? "bg-(--color-primary) text-white"
            : "text-(--color-muted) hover:text-(--color-primary)"
        }`}
        onClick={() => setLanguage("bn")}
        type="button"
      >
        বাংলা
      </button>
      <button
        aria-pressed={language === "en"}
        className={`rounded-full px-3 py-2 transition ${
          language === "en"
            ? "bg-(--color-primary) text-white"
            : "text-(--color-muted) hover:text-(--color-primary)"
        }`}
        onClick={() => setLanguage("en")}
        type="button"
      >
        EN
      </button>
    </div>
  );
}
