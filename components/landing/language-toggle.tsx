"use client";

import { useLanguage } from "@/components/landing/language-provider";
import type { Language } from "@/lib/landing-content";

const languageOptions: {
  value: Language;
  label: string;
  ariaLabel: string;
}[] = [
  { value: "en", label: "ENG", ariaLabel: "English" },
  { value: "bn", label: "BN", ariaLabel: "Bengali" },
];

export function LanguageToggle({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      aria-label="Language"
      className={
        className ??
        "inline-flex rounded-full border border-(--color-border) bg-(--color-background) p-0.5"
      }
      role="group"
    >
      {languageOptions.map((option) => {
        const isSelected = option.value === language;

        return (
          <button
            aria-label={option.ariaLabel}
            aria-pressed={isSelected}
            className={`rounded-full px-2 py-1.5 text-[0.58rem] font-bold tracking-[0.06em] transition ${
              isSelected
                ? "bg-white text-(--color-primary-dark) shadow-sm"
                : "text-(--color-muted) hover:text-(--color-primary-dark)"
            }`}
            key={option.value}
            onClick={() => setLanguage(option.value)}
            type="button"
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
