"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/landing/language-provider";
import { SectionHeading } from "@/components/landing/section-heading";
import { usePrefersReducedMotion } from "@/components/landing/use-prefers-reduced-motion";

type DemoPhase = "idle" | "active" | "success";

const STEP_DURATIONS_MS = [4800, 6400, 6400, 4800] as const;
const PHASE_ACTIVE_AT_MS = 1300;
const PHASE_SUCCESS_AT_MS = 4000;
const UPLOAD_DURATION_MS = PHASE_SUCCESS_AT_MS - PHASE_ACTIVE_AT_MS;
const POS_PRODUCTS = ["Rice", "Oil", "Tea", "Soap", "Milk", "Eggs"] as const;

function useDemoCycle(stepCount: number, enabled: boolean) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [phase, setPhase] = useState<DemoPhase>("idle");

  useEffect(() => {
    if (!enabled) {
      return;
    }

    setPhase("idle");
    const phaseTimers = [
      window.setTimeout(() => setPhase("active"), PHASE_ACTIVE_AT_MS),
      window.setTimeout(() => setPhase("success"), PHASE_SUCCESS_AT_MS),
    ];

    const stepTimer = window.setTimeout(() => {
      setActiveStepIndex((current) => (current + 1) % stepCount);
    }, STEP_DURATIONS_MS[activeStepIndex] ?? 2500);

    return () => {
      phaseTimers.forEach((timerId) => window.clearTimeout(timerId));
      window.clearTimeout(stepTimer);
    };
  }, [activeStepIndex, enabled, stepCount]);

  return { activeStepIndex, phase };
}

export function FeaturesSetupJourney() {
  const { content } = useLanguage();
  const journey = content.featuresRoute.setupJourney;
  const prefersReducedMotion = usePrefersReducedMotion();
  const { activeStepIndex, phase } = useDemoCycle(
    journey.steps.length,
    !prefersReducedMotion,
  );
  const displayStepIndex = prefersReducedMotion
    ? journey.steps.length - 1
    : activeStepIndex;
  const activeStep = journey.steps[displayStepIndex];

  if (!activeStep) {
    return null;
  }

  const showUnderOneMinuteBadge =
    activeStep.visual === "products" || activeStep.visual === "customers";

  return (
    <section className="bg-white px-5 py-24 lg:px-8" id="feature-details">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={journey.eyebrow}
          title={journey.title}
          description={journey.description}
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            {prefersReducedMotion ? (
              <ol className="space-y-4">
                {journey.steps.map((step, index) => (
                  <li
                    className={`rounded-2xl border p-5 transition ${
                      index === displayStepIndex
                        ? "border-(--color-primary) bg-(--color-primary-light)/40"
                        : "border-(--color-border) bg-(--color-background)"
                    }`}
                    key={step.step}
                  >
                    <span className="text-sm font-bold tracking-[0.2em] text-(--color-primary)">
                      {step.step}
                    </span>
                    <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-(--color-muted)">
                      {step.description}
                    </p>
                  </li>
                ))}
              </ol>
            ) : (
              <>
                <div className="relative px-1">
                  <div className="absolute inset-x-3 top-4 h-0.5 rounded-full bg-(--color-border)" />
                  <div
                    className="absolute left-3 top-4 h-0.5 rounded-full bg-(--color-primary) transition-[width] duration-500 ease-out"
                    style={{
                      width: `calc((100% - 1.5rem) * ${
                        journey.steps.length > 1
                          ? activeStepIndex / (journey.steps.length - 1)
                          : 0
                      })`,
                    }}
                  />
                  <ol className="relative flex justify-between">
                    {journey.steps.map((step, index) => {
                      const isActive = index === activeStepIndex;
                      const isComplete = index < activeStepIndex;
                      return (
                        <li
                          className="flex flex-col items-center gap-2"
                          key={step.step}
                        >
                          <span
                            className={`grid size-8 place-items-center rounded-full text-xs font-bold transition-all duration-500 ${
                              isActive
                                ? "scale-110 bg-(--color-primary) text-white shadow-md shadow-[rgba(2,115,74,0.3)] ring-4 ring-(--color-primary-light)"
                                : isComplete
                                  ? "bg-(--color-primary) text-white"
                                  : "border border-(--color-border) bg-white text-(--color-muted)"
                            }`}
                          >
                            {isComplete ? "✓" : step.step}
                          </span>
                        </li>
                      );
                    })}
                  </ol>
                </div>

                <div className="mt-5 h-1 overflow-hidden rounded-full bg-(--color-background)">
                  <div
                    className="journey-progress-bar h-full origin-left rounded-full bg-(--color-primary)"
                    key={activeStepIndex}
                    style={{
                      animationDuration: `${
                        STEP_DURATIONS_MS[activeStepIndex] ?? 2500
                      }ms`,
                    }}
                  />
                </div>

                <div
                  aria-live="polite"
                  className="journey-enter mt-7"
                  key={displayStepIndex}
                >
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {activeStep.title}
                  </h3>
                  <p className="mt-4 leading-7 text-(--color-muted)">
                    {activeStep.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {activeStep.highlights.map((highlight) => (
                      <li className="flex gap-3" key={highlight}>
                        <span className="mt-2 size-2 shrink-0 rounded-full bg-(--color-primary)" />
                        <span className="leading-7 text-(--color-muted)">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {showUnderOneMinuteBadge ? (
                    <span className="mt-6 inline-flex rounded-full bg-(--color-info)/15 px-4 py-2 text-sm font-bold text-(--color-info-dark)">
                      {journey.underOneMinuteLabel}
                    </span>
                  ) : null}
                </div>
              </>
            )}
          </div>

          <div className="relative flex min-h-120 items-center justify-center overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-background) p-4 shadow-sm sm:p-6 lg:min-h-128">
            <div className="pointer-events-none absolute inset-x-6 top-0 h-24 rounded-full bg-(--color-primary-light)/50 blur-3xl" />
            <div
              className="journey-enter relative w-full"
              key={displayStepIndex}
            >
              {activeStep.visual === "shop" ? (
                <ShopVisual demo={journey.shopDemo} phase={phase} />
              ) : null}
              {activeStep.visual === "products" &&
              "dropZoneTitle" in activeStep ? (
                <ImportVisual
                  chrome={journey.importChrome}
                  phase={phase}
                  step={activeStep}
                  variant="products"
                />
              ) : null}
              {activeStep.visual === "customers" &&
              "googleContactsLabel" in activeStep ? (
                <ImportVisual
                  chrome={journey.importChrome}
                  phase={phase}
                  step={activeStep}
                  variant="customers"
                />
              ) : null}
              {activeStep.visual === "pos" ? (
                <PosVisual labels={journey.posDemo} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShopVisual({
  demo,
  phase,
}: {
  demo: ShopDemoLabels;
  phase: DemoPhase;
}) {
  const isComplete = phase === "success";

  return (
    <div className="mx-auto max-w-md rounded-2xl border border-(--color-border) bg-white p-5 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--color-primary)">
        {demo.shopNameLabel}
      </p>
      <p className="mt-2 text-lg font-semibold">{demo.shopName}</p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Field label={demo.phoneLabel} value={demo.phone} />
        <Field label={demo.categoryLabel} value={demo.category} />
        <Field label={demo.roleLabel} value={demo.role} />
      </div>

      <div
        className={`mt-6 flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
          isComplete
            ? "bg-(--color-primary-light) text-(--color-primary-dark)"
            : "bg-(--color-background) text-(--color-muted)"
        }`}
      >
        <span
          className={`grid size-8 place-items-center rounded-full text-xs ${
            isComplete
              ? "bg-(--color-primary) text-white"
              : "border border-(--color-border) bg-white"
          }`}
        >
          {isComplete ? "✓" : "…"}
        </span>
        {isComplete ? demo.createdLabel : demo.shopNameLabel}
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-(--color-background) px-3 py-2.5">
      <p className="text-xs text-(--color-muted)">{label}</p>
      <p className="mt-1 text-sm font-semibold">{value}</p>
    </div>
  );
}

type ShopDemoLabels = {
  shopNameLabel: string;
  shopName: string;
  phoneLabel: string;
  phone: string;
  categoryLabel: string;
  category: string;
  roleLabel: string;
  role: string;
  createdLabel: string;
};

type PosDemoLabels = {
  header: string;
  currentMemo: string;
  synced: string;
  due: string;
  shareButton: string;
};

type ImportStepContent = {
  dropZoneTitle?: string;
  dropZoneHint?: string;
  downloadTemplateLabel?: string;
  successMessage?: string;
  exampleFile?: string;
  googleContactsLabel?: string;
};

type ImportChromeLabels = {
  productsTitle: string;
  customersTitle: string;
  browseLabel: string;
  uploadingLabel: string;
  completeLabel: string;
  googleHint: string;
  orLabel: string;
  mappedLabel: string;
  productColumns: readonly string[];
  customerColumns: readonly string[];
  contactCount: string;
};

const GOOGLE_AVATARS = [
  { initial: "A", className: "bg-[#4285f4]" },
  { initial: "S", className: "bg-[#ea4335]" },
  { initial: "M", className: "bg-[#34a853]" },
] as const;

function UploadCloudIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
      viewBox="0 0 24 24"
    >
      <path d="M7 18a4 4 0 0 1-.9-7.9 5 5 0 0 1 9.6-1.6A3.5 3.5 0 0 1 18 18" />
      <path d="M12 12v6" />
      <path d="m9 14 3-3 3 3" />
    </svg>
  );
}

function FileGlyph({ label }: { label: string }) {
  return (
    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-(--color-primary) text-[0.6rem] font-bold tracking-wide text-white">
      {label}
    </span>
  );
}

function ColumnChips({ columns }: { columns: readonly string[] }) {
  return (
    <div className="mt-3 flex flex-wrap gap-1.5">
      {columns.map((column) => (
        <span
          className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[0.68rem] font-semibold text-(--color-primary-dark) shadow-sm"
          key={column}
        >
          <span className="text-(--color-primary)">✓</span>
          {column}
        </span>
      ))}
    </div>
  );
}

function ImportVisual({
  step,
  phase,
  variant,
  chrome,
}: {
  step: ImportStepContent;
  phase: DemoPhase;
  variant: "products" | "customers";
  chrome: ImportChromeLabels;
}) {
  const isActive = phase === "active";
  const isSuccess = phase === "success";
  const title =
    variant === "products" ? chrome.productsTitle : chrome.customersTitle;
  const columns =
    variant === "products" ? chrome.productColumns : chrome.customerColumns;
  const fileLabel = step.exampleFile?.toLowerCase().endsWith(".csv")
    ? "CSV"
    : "XLS";

  return (
    <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-(--color-border) bg-white shadow-xl shadow-[rgba(1,64,52,0.08)]">
      <div className="flex items-center justify-between border-b border-(--color-border) bg-(--color-background) px-4 py-3">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-(--color-primary)">
          {title}
        </p>
      </div>

      <div className="space-y-3.5 p-5">
        {variant === "customers" && step.googleContactsLabel ? (
          <>
            <div
              className={`flex items-center gap-3 rounded-2xl border px-3.5 py-3 transition ${
                phase === "idle"
                  ? "border-[#4285f4]/40 bg-[#4285f4]/8 shadow-sm"
                  : "border-(--color-border) bg-white"
              }`}
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-(--color-border) bg-white text-base font-bold text-[#4285f4]">
                G
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">
                  {step.googleContactsLabel}
                </p>
                <p className="text-xs text-(--color-muted)">
                  {chrome.googleHint}
                </p>
              </div>
              <div className="flex items-center -space-x-2">
                {GOOGLE_AVATARS.map((avatar) => (
                  <span
                    className={`grid size-7 place-items-center rounded-full text-[0.65rem] font-bold text-white ring-2 ring-white ${avatar.className}`}
                    key={avatar.initial}
                  >
                    {avatar.initial}
                  </span>
                ))}
                <span className="grid size-7 place-items-center rounded-full bg-(--color-primary-light) text-[0.6rem] font-bold text-(--color-primary-dark) ring-2 ring-white">
                  {chrome.contactCount}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-(--color-muted)">
              <span className="h-px flex-1 bg-(--color-border)" />
              {chrome.orLabel}
              <span className="h-px flex-1 bg-(--color-border)" />
            </div>
          </>
        ) : null}

        {variant === "products" && step.downloadTemplateLabel ? (
          <button
            className="flex w-full items-center justify-between gap-3 rounded-2xl border border-(--color-info)/30 bg-(--color-info)/10 px-3.5 py-3 text-left"
            type="button"
          >
            <span className="flex items-center gap-2.5">
              <FileGlyph label="XLS" />
              <span className="text-sm font-semibold text-(--color-info-dark)">
                {step.downloadTemplateLabel}
              </span>
            </span>
            <span className="rounded-full bg-(--color-info) px-3 py-1 text-xs font-bold text-(--color-secondary)">
              .xlsx
            </span>
          </button>
        ) : null}

        <div className="flex min-h-44 flex-col justify-center">
          {phase === "idle" ? (
            <div className="rounded-2xl border-2 border-dashed border-(--color-border) bg-(--color-background)/70 px-4 py-7 text-center">
              <UploadCloudIcon className="mx-auto size-9 text-(--color-primary)" />
              <p className="mt-3 text-sm font-semibold">{step.dropZoneTitle}</p>
              {step.dropZoneHint ? (
                <p className="mt-1 text-xs text-(--color-muted)">
                  {step.dropZoneHint}
                </p>
              ) : null}
              <span className="mt-4 inline-flex rounded-full bg-(--color-primary) px-4 py-1.5 text-xs font-semibold text-white shadow-sm">
                {chrome.browseLabel}
              </span>
            </div>
          ) : null}

          {isActive ? (
            <div className="rounded-2xl border border-(--color-primary)/30 bg-(--color-primary-light)/40 p-4">
              <div className="flex items-center gap-3">
                <FileGlyph label={fileLabel} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">
                    {step.exampleFile}
                  </p>
                  <p className="text-xs text-(--color-muted)">
                    {chrome.uploadingLabel}
                  </p>
                </div>
              </div>
              <div className="mt-3.5 h-2 overflow-hidden rounded-full bg-white">
                <div
                  className="journey-progress-bar h-full origin-left rounded-full bg-(--color-primary)"
                  style={{ animationDuration: `${UPLOAD_DURATION_MS}ms` }}
                />
              </div>
              <ColumnChips columns={columns} />
            </div>
          ) : null}

          {isSuccess ? (
            <div className="rounded-2xl border border-(--color-primary)/30 bg-(--color-primary-light) p-4">
              <div className="flex items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-(--color-primary) text-white">
                  ✓
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-(--color-primary-dark)">
                    {step.successMessage}
                  </p>
                  <p className="text-xs text-(--color-primary-dark)/70">
                    {chrome.mappedLabel}
                  </p>
                </div>
              </div>
              <ColumnChips columns={columns} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function PosVisual({ labels }: { labels: PosDemoLabels }) {
  return (
    <div className="mx-auto w-full max-w-72 rounded-[2.25rem] border-8 border-(--color-secondary) bg-(--color-background) p-3 shadow-2xl shadow-[rgba(1,64,52,0.2)]">
      <div className="mx-auto mb-3 h-1.5 w-14 rounded-full bg-(--color-secondary)/20" />
      <div className="overflow-hidden rounded-[1.7rem] bg-white">
        <div className="bg-(--color-secondary) p-4 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--color-info)">
            {labels.header}
          </p>
          <div className="mt-3 flex items-end justify-between">
            <div>
              <p className="text-xs text-white/60">{labels.currentMemo}</p>
              <h3 className="text-2xl font-semibold">৳ 1,035</h3>
            </div>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold">
              {labels.synced}
            </span>
          </div>
        </div>

        <div className="p-4">
          <div className="grid grid-cols-3 gap-2">
            {POS_PRODUCTS.map((item) => (
              <span
                className="rounded-2xl bg-(--color-primary-light) px-2 py-3 text-center text-xs font-semibold text-(--color-primary-dark)"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-4 rounded-2xl bg-(--color-background) p-3">
            <div className="flex justify-between text-xs text-(--color-muted)">
              <span>{labels.due}</span>
              <strong className="text-(--color-primary)">৳ 240</strong>
            </div>
            <div className="mt-3 h-2 rounded-full bg-white">
              <div className="h-2 w-2/3 rounded-full bg-(--color-primary)" />
            </div>
          </div>
          <div className="mt-4 w-full rounded-2xl bg-(--color-primary) px-4 py-3 text-center text-sm font-semibold text-white">
            {labels.shareButton}
          </div>
        </div>
      </div>
    </div>
  );
}
