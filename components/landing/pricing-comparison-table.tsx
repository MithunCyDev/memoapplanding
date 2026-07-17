"use client";

import type { LandingContent } from "@/lib/landing-content";

type ComparisonRow = LandingContent["pricingRoute"]["comparisonRows"][number];

type PlanKey = "basic" | "growth" | "pro" | "enterprise";

const PLAN_KEYS: PlanKey[] = ["basic", "growth", "pro", "enterprise"];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <span
        aria-label="Included"
        className="inline-flex size-7 items-center justify-center rounded-full bg-[rgba(2,115,74,0.12)] text-(--color-primary)"
      >
        <svg
          aria-hidden
          className="size-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </span>
    );
  }

  if (value === false || value === "—") {
    return (
      <span
        aria-label="Not included"
        className="inline-flex size-7 items-center justify-center rounded-full bg-[rgba(221,10,10,0.08)] text-[#c62828]"
      >
        <svg
          aria-hidden
          className="size-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </span>
    );
  }

  return (
    <span className="flex flex-col items-center gap-1">
      <span
        aria-hidden
        className="inline-flex size-7 items-center justify-center rounded-full bg-[rgba(2,115,74,0.12)] text-(--color-primary)"
      >
        <svg
          className="size-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </span>
      <span className="max-w-28 text-center text-xs font-medium leading-snug text-(--color-ink) sm:text-sm">
        {value}
      </span>
    </span>
  );
}

export function PricingComparisonTable({
  content,
}: {
  content: LandingContent["pricingRoute"];
}) {
  const columns = content.comparisonColumns;

  return (
    <div className="mt-12 overflow-hidden rounded-2xl border border-(--color-border) bg-white shadow-[0_1px_4px_rgba(15,23,42,0.06)]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[52rem] border-separate border-spacing-0 text-left">
          <caption className="sr-only">{content.comparisonTitle}</caption>
          <thead>
            <tr>
              <th
                className="sticky left-0 z-20 min-w-40 border-b border-(--color-border) bg-white px-4 py-4 text-sm font-bold text-(--color-primary-dark) sm:min-w-48 sm:px-5"
                scope="col"
              >
                {columns.feature}
              </th>
              {PLAN_KEYS.map((plan) => {
                const col = columns[plan];
                const isFeatured = plan === "growth";
                const isEnterprise = plan === "enterprise";
                return (
                  <th
                    className={`min-w-28 border-b border-(--color-border) bg-white px-3 py-4 text-center sm:min-w-32 sm:px-4 ${
                      isFeatured ? "border-x-2 border-x-(--color-primary)" : ""
                    }`}
                    key={plan}
                    scope="col"
                  >
                    <div className="flex flex-col items-center gap-1.5">
                      {isFeatured ? (
                        <span className="rounded-md bg-(--color-primary) px-2 py-0.5 text-[0.65rem] font-extrabold uppercase tracking-wide text-white">
                          {columns.popularBadge}
                        </span>
                      ) : (
                        <span className="h-5" aria-hidden />
                      )}
                      <span
                        className={`text-sm font-extrabold sm:text-base ${
                          isEnterprise ? "text-[#800080]" : "text-(--color-ink)"
                        }`}
                      >
                        {col.name}
                      </span>
                      <span
                        className={`text-xs font-semibold sm:text-sm ${
                          isEnterprise
                            ? "text-[#800080]/80"
                            : "text-(--color-muted)"
                        }`}
                      >
                        {col.price}
                      </span>
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {content.comparisonRows.map((row: ComparisonRow) => (
              <tr key={row.feature}>
                <th
                  className="sticky left-0 z-10 border-b border-(--color-border) bg-white px-4 py-3.5 text-left text-sm font-semibold text-(--color-ink) shadow-[6px_0_10px_-6px_rgba(0,0,0,0.08)] sm:px-5"
                  scope="row"
                >
                  {row.feature}
                </th>
                {PLAN_KEYS.map((plan) => {
                  const isFeatured = plan === "growth";
                  return (
                    <td
                      className={`border-b border-(--color-border) bg-white px-3 py-3.5 text-center align-middle sm:px-4 ${
                        isFeatured
                          ? "border-x-2 border-x-(--color-primary)"
                          : ""
                      }`}
                      key={plan}
                    >
                      <div className="flex justify-center">
                        <CellValue value={row[plan]} />
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
