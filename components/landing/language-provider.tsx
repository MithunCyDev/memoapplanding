"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  landingContent,
  type LandingContent,
  type Language,
} from "@/lib/landing-content";

interface LanguageContextValue {
  content: LandingContent;
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    const savedLanguage = window.localStorage.getItem("memoapp-language");

    return savedLanguage === "bn" || savedLanguage === "en"
      ? savedLanguage
      : "en";
  });

  useEffect(() => {
    document.documentElement.lang = language === "bn" ? "bn" : "en";
  }, [language]);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("memoapp-language", nextLanguage);
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      content: landingContent[language],
      language,
      setLanguage,
      toggleLanguage: () => setLanguage(language === "bn" ? "en" : "bn"),
    }),
    [language, setLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
