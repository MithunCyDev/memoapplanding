"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  defaultLanguage,
  enLandingContent,
  loadLandingContent,
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
const languageStorageKey = "memoapp-language-pref";
const languageChangeEvent = "memoapp-language-change";

interface LanguageProviderProps {
  children: ReactNode;
}

function getStoredLanguage(): Language {
  if (typeof window === "undefined") {
    return defaultLanguage;
  }

  const savedLanguage = window.localStorage.getItem(languageStorageKey);

  return savedLanguage === "bn" || savedLanguage === "en"
    ? savedLanguage
    : defaultLanguage;
}

function subscribeToLanguageChange(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(languageChangeEvent, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(languageChangeEvent, onStoreChange);
  };
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const language = useSyncExternalStore<Language>(
    subscribeToLanguageChange,
    getStoredLanguage,
    () => defaultLanguage,
  );
  const [content, setContent] = useState<LandingContent>(enLandingContent);

  useEffect(() => {
    document.documentElement.lang = language === "bn" ? "bn" : "en";
  }, [language]);

  useEffect(() => {
    let cancelled = false;

    void loadLandingContent(language).then((nextContent) => {
      if (!cancelled) {
        setContent(nextContent);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [language]);

  const setLanguage = useCallback((nextLanguage: Language) => {
    window.localStorage.setItem(languageStorageKey, nextLanguage);
    window.dispatchEvent(new Event(languageChangeEvent));
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      content,
      language,
      setLanguage,
      toggleLanguage: () => setLanguage(language === "bn" ? "en" : "bn"),
    }),
    [content, language, setLanguage],
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
