"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useLanguage } from "@/components/landing/language-provider";
import {
  type AssistantAnswer,
  getAssistantAnswer,
} from "@/lib/assistant-answers";
import { siteConfig } from "@/lib/site";

type AssistantMessage = {
  id: number;
  role: "assistant" | "user";
  text: string;
  suggestions?: string[];
  links?: AssistantAnswer["links"];
};

const supportWhatsAppNumber = "01835623863";

function buildWhatsAppLink(message: string) {
  const digits = supportWhatsAppNumber.replace(/\D/g, "");
  const normalizedNumber = digits.startsWith("880")
    ? digits
    : digits.startsWith("0")
      ? `88${digits}`
      : `880${digits}`;

  return `https://wa.me/${normalizedNumber}?text=${encodeURIComponent(message)}`;
}

function isExternalHref(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

function AssistantLink({ href, label }: { href: string; label: string }) {
  const className =
    "inline-flex rounded-full border border-(--color-border) bg-white px-3 py-2 text-xs font-bold text-(--color-secondary) transition hover:border-(--color-primary) hover:text-(--color-primary) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-primary)";

  if (href === "whatsapp") {
    return (
      <a
        className={className}
        href={buildWhatsAppLink(
          "Hello MemoApp team, I need help with MemoApp.",
        )}
        rel="noreferrer"
        target="_blank"
      >
        {label}
      </a>
    );
  }

  if (isExternalHref(href)) {
    return (
      <a
        className={className}
        href={href}
        rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
      >
        {label}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {label}
    </Link>
  );
}

export function LandingAssistant() {
  const { content, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<AssistantMessage[]>([]);
  const [isResponding, setIsResponding] = useState(false);
  const nextMessageId = useRef(1);
  const responseTimerIds = useRef<number[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const assistant = content.assistant;

  const supportLinks = useMemo(
    () => [
      {
        href: "whatsapp",
        label: assistant.whatsappSupportLabel,
      },
      {
        href: `mailto:${siteConfig.contactEmail}`,
        label: assistant.emailSupportLabel,
      },
    ],
    [assistant.emailSupportLabel, assistant.whatsappSupportLabel],
  );

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const focusTimerId = window.setTimeout(
      () => inputRef.current?.focus(),
      150,
    );

    return () => window.clearTimeout(focusTimerId);
  }, [isOpen]);

  useEffect(() => {
    const pendingTimerIds = responseTimerIds.current;

    return () => {
      pendingTimerIds.forEach((timerId) => window.clearTimeout(timerId));
    };
  }, []);

  const createMessage = useCallback(
    (message: Omit<AssistantMessage, "id">): AssistantMessage => {
      const id = nextMessageId.current;
      nextMessageId.current += 1;

      return { id, ...message };
    },
    [],
  );

  const askQuestion = useCallback(
    (question: string) => {
      const trimmedQuestion = question.trim();

      if (!trimmedQuestion || isResponding) {
        return;
      }

      const answer = getAssistantAnswer({
        content,
        language,
        question: trimmedQuestion,
      });
      const userMessage = createMessage({
        role: "user",
        text: trimmedQuestion,
      });

      setMessages((currentMessages) => [...currentMessages, userMessage]);
      setInput("");
      setIsResponding(true);

      const timerId = window.setTimeout(() => {
        const assistantMessage = createMessage({
          role: "assistant",
          text: answer.text,
          suggestions: answer.suggestions,
          links: answer.links,
        });

        setMessages((currentMessages) => [
          ...currentMessages,
          assistantMessage,
        ]);
        setIsResponding(false);
      }, 520);

      responseTimerIds.current.push(timerId);
    },
    [content, createMessage, isResponding, language],
  );

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      askQuestion(input);
    },
    [askQuestion, input],
  );

  return (
    <div
      className={
        isOpen
          ? "fixed inset-0 z-50 flex h-dvh flex-col items-stretch sm:inset-x-auto sm:bottom-6 sm:left-auto sm:right-6 sm:top-auto sm:h-auto sm:w-auto sm:items-end"
          : "fixed inset-x-3 bottom-3 z-50 flex max-h-[calc(100dvh-1.5rem)] flex-col items-end gap-2 sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-auto sm:gap-3"
      }
    >
      {isOpen ? (
        <section
          aria-label={assistant.title}
          className="flex h-full w-full flex-col overflow-hidden border border-(--color-border) bg-white shadow-2xl shadow-(--color-secondary)/20 sm:h-auto sm:max-h-[min(82vh,42rem)] sm:w-100 sm:rounded-3xl"
        >
          <header className="flex shrink-0 items-start justify-between gap-4 bg-(--color-secondary) p-5 text-white">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-(--color-info)">
                {assistant.title}
              </p>
              <p className="mt-2 text-sm leading-6 text-white/75">
                {assistant.subtitle}
              </p>
            </div>
            <button
              aria-label={assistant.closeLabel}
              className="rounded-full border border-white/20 px-3 py-1 text-sm font-bold text-white transition hover:border-(--color-info) hover:text-(--color-info) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-info)"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              ×
            </button>
          </header>

          <div className="min-h-0 flex-1 overflow-y-auto bg-(--color-background) p-4">
            <div className="space-y-3">
              <div className="max-w-[85%] rounded-3xl rounded-tl-md bg-white p-4 text-sm leading-6 text-(--color-muted) shadow-sm">
                {assistant.welcomeMessage}
              </div>

              {messages.map((message) => (
                <div
                  className={
                    message.role === "user"
                      ? "ml-auto max-w-[85%] rounded-3xl rounded-tr-md bg-(--color-primary) p-4 text-sm leading-6 text-white shadow-sm"
                      : "max-w-[85%] rounded-3xl rounded-tl-md bg-white p-4 text-sm leading-6 text-(--color-muted) shadow-sm"
                  }
                  key={message.id}
                >
                  <p className="whitespace-pre-line">{message.text}</p>

                  {message.links && message.links.length > 0 ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {message.links.map((link) => (
                        <AssistantLink
                          href={link.href}
                          key={`${message.id}-${link.href}`}
                          label={link.label}
                        />
                      ))}
                    </div>
                  ) : null}

                  {message.suggestions && message.suggestions.length > 0 ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {message.suggestions.map((suggestion) => (
                        <button
                          className="rounded-full border border-(--color-border) bg-(--color-primary)/5 px-3 py-2 text-left text-xs font-semibold text-(--color-secondary) transition hover:border-(--color-primary) hover:text-(--color-primary) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-primary)"
                          key={`${message.id}-${suggestion}`}
                          onClick={() => askQuestion(suggestion)}
                          type="button"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}

              {isResponding ? (
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-xs font-semibold text-(--color-muted) shadow-sm">
                  <span className="flex gap-1" aria-hidden="true">
                    <span className="h-1.5 w-1.5 rounded-full bg-(--color-primary)" />
                    <span className="h-1.5 w-1.5 rounded-full bg-(--color-primary)/70" />
                    <span className="h-1.5 w-1.5 rounded-full bg-(--color-primary)/40" />
                  </span>
                  {assistant.typingLabel}
                </div>
              ) : null}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {assistant.quickPrompts.map((prompt) => (
                <button
                  className="rounded-full border border-(--color-border) bg-white px-3 py-2 text-left text-xs font-bold text-(--color-secondary) transition hover:border-(--color-primary) hover:text-(--color-primary) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-primary)"
                  key={prompt.query}
                  onClick={() => askQuestion(prompt.query)}
                  type="button"
                >
                  {prompt.label}
                </button>
              ))}
            </div>
          </div>

          <form
            className="shrink-0 border-t border-(--color-border) bg-white p-3"
            onSubmit={handleSubmit}
          >
            <div className="flex gap-2">
              <input
                className="min-w-0 flex-1 rounded-full border border-(--color-border) px-4 py-3 text-sm text-(--color-secondary) outline-none transition placeholder:text-(--color-muted)/60 focus:border-(--color-primary)"
                disabled={isResponding}
                onChange={(event) => setInput(event.target.value)}
                placeholder={assistant.placeholder}
                ref={inputRef}
                type="text"
                value={input}
              />
              <button
                className="rounded-full bg-(--color-primary) px-4 py-3 text-sm font-bold text-white transition hover:bg-(--color-primary-dark) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-primary) disabled:cursor-not-allowed disabled:opacity-55"
                disabled={isResponding || input.trim().length === 0}
                type="submit"
              >
                {assistant.sendLabel}
              </button>
            </div>
          </form>

          <div className="shrink-0 border-t border-(--color-border) bg-white p-3">
            <div className="flex flex-wrap gap-2">
              {supportLinks.map((link) => (
                <AssistantLink
                  href={link.href}
                  key={link.href}
                  label={link.label}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {!isOpen ? (
        <div className="flex flex-wrap justify-end gap-2">
          <button
            aria-label={assistant.launcherLabel}
            className="assistant-launcher group inline-flex h-16 w-16 items-center justify-start gap-3 overflow-hidden rounded-full border border-white/80 bg-white/95 p-1.5 text-left text-sm font-bold text-(--color-secondary) backdrop-blur-xl transition-[width,background-color,color] duration-300 hover:bg-white hover:text-(--color-primary-dark) focus-visible:w-58 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-info) sm:hover:w-58"
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            <span
              className="assistant-launcher-badge relative grid size-13 shrink-0 overflow-hidden rounded-full border-2 border-white bg-(--color-primary-light)"
              aria-hidden="true"
            >
              <Image
                alt=""
                className="object-cover"
                fill
                sizes="52px"
                src="/female_assistent2.png"
              />
            </span>
            <span className="max-w-0 overflow-hidden opacity-0 transition-all duration-300 group-focus-visible:max-w-36 group-focus-visible:opacity-100 sm:group-hover:max-w-36 sm:group-hover:opacity-100">
              <span className="block whitespace-nowrap leading-5">
                {assistant.launcherLabel}
              </span>
              <span className="block whitespace-nowrap text-[0.7rem] font-semibold leading-4 text-(--color-muted)">
                {assistant.subtitle}
              </span>
            </span>
          </button>
        </div>
      ) : null}
    </div>
  );
}
