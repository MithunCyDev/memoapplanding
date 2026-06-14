const businessMetrics = [
  ["Today’s Sales", "৳48,320"],
  ["Profit", "৳11,420"],
  ["Low Stock", "12 Items"],
] as const;

const restockItems = [
  ["Cooking Oil", "Critical"],
  ["Rice Premium", "Low"],
  ["Sugar", "Restock Soon"],
] as const;

const reportBars = [
  { label: "Sat", value: "h-14" },
  { label: "Sun", value: "h-20" },
  { label: "Mon", value: "h-16" },
  { label: "Tue", value: "h-24" },
  { label: "Wed", value: "h-32" },
  { label: "Thu", value: "h-28" },
];

export function HeroDashboardMockup() {
  return (
    <div className="relative mx-auto mt-8 mb-8 w-full max-w-xl lg:mt-10 lg:mb-12">
      <div className="absolute z-10 -right-3 top-0 hidden rounded-2xl border border-white/20 bg-white/12 px-4 py-3 text-xs font-semibold text-white shadow-2xl shadow-black/20 backdrop-blur-xl sm:block">
        Floating alert: 3 items need action
      </div>
      <div className="absolute z-10 -left-4 bottom-20 hidden rounded-full bg-(--color-info) px-4 py-2 text-xs font-bold text-(--color-secondary) shadow-xl shadow-[rgba(255,153,51,0.22)] sm:block">
        AI chat ready
      </div>

      <div className="relative overflow-hidden rounded-[2.25rem] border border-white/15 bg-white/10 p-3 shadow-2xl shadow-black/25 backdrop-blur-xl">
        <div className="absolute inset-x-8 top-0 h-24 rounded-full bg-(--color-secondary-light)/20 blur-3xl" />
        <div className="relative rounded-[1.75rem] bg-[#f8f9f5] p-4 text-(--color-ink) sm:p-5">
          <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
            <section className="rounded-3xl border border-(--color-border) bg-white p-4 shadow-sm">
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-(--color-primary)">
                  Business pulse
                </p>
                <span className="rounded-full bg-(--color-primary-light) px-3 py-1 text-[0.68rem] font-bold text-(--color-primary-dark)">
                  Live
                </span>
              </div>
              <div className="space-y-3">
                {businessMetrics.map(([label, value]) => (
                  <div
                    className="flex items-center justify-between gap-4 rounded-2xl bg-(--color-background) px-3 py-2.5"
                    key={label}
                  >
                    <span className="text-sm font-medium text-(--color-muted)">
                      {label}
                    </span>
                    <strong className="text-base text-(--color-secondary)">
                      {value}
                    </strong>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-2xl bg-(--color-primary-light) p-3">
                <div className="flex items-center justify-between text-xs font-semibold text-(--color-primary-dark)">
                  <span>Profit margin</span>
                  <span>23.6%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-white">
                  <div className="h-2 w-[72%] rounded-full bg-(--color-primary)" />
                </div>
              </div>
            </section>

            <section className="rounded-3xl bg-(--color-secondary) p-4 text-white shadow-xl shadow-[rgba(1,64,52,0.18)]">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-(--color-info)">
                    MemoAI Assistant
                  </p>
                  <p className="mt-2 text-lg font-semibold leading-6">
                    “Which products should I restock before Eid?”
                  </p>
                </div>
                <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-white/10 text-lg">
                  AI
                </span>
              </div>

              <div className="mt-5 space-y-2">
                {restockItems.map(([item, status]) => (
                  <div
                    className="flex items-center justify-between gap-3 rounded-2xl bg-white/8 px-3 py-2 text-sm"
                    key={item}
                  >
                    <span>{item}</span>
                    <span className="rounded-full bg-(--color-info) px-2.5 py-1 text-[0.65rem] font-bold text-(--color-secondary)">
                      {status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-white/12 bg-white/8 p-3">
                <p className="text-xs text-white/65">Predicted stockout</p>
                <p className="mt-1 text-2xl font-semibold">5 days</p>
              </div>
            </section>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-[0.78fr_1.22fr]">
            <div className="rounded-3xl border border-(--color-border) bg-white p-3">
              <div className="mx-auto h-1.5 w-12 rounded-full bg-(--color-border)" />
              <div className="mt-3 rounded-2xl bg-(--color-background) p-3">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--color-primary)">
                  Mobile POS
                </p>
                <p className="mt-2 text-lg font-semibold">৳ 1,035</p>
                <div className="mt-3 grid grid-cols-2 gap-2 text-[0.68rem] font-semibold">
                  {["Print", "Share", "Due", "Paid"].map((action) => (
                    <span
                      className="rounded-xl bg-white px-2 py-2 text-center"
                      key={action}
                    >
                      {action}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-(--color-border) bg-white p-4">
              <div className="flex items-start gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-(--color-primary) text-sm font-bold text-white">
                  AI
                </span>
                <div className="rounded-2xl bg-(--color-background) p-3">
                  <p className="text-sm font-semibold">Suggested action</p>
                  <p className="mt-1 text-sm leading-6 text-(--color-muted)">
                    Create a purchase note for oil, rice, and sugar before the
                    next sales rush.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AnalyticsMockup() {
  return (
    <div className="rounded-2xl border border-(--color-border) bg-white p-5 shadow-xl shadow-[rgba(1,64,52,0.08)]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-(--color-primary)">
            Weekly sales
          </p>
          <p className="mt-1 text-3xl font-semibold">৳ 2.84L</p>
        </div>
        <span className="rounded-full bg-(--color-primary-light) px-3 py-1 text-sm font-semibold text-(--color-primary-dark)">
          +18%
        </span>
      </div>
      <div className="mt-8 flex h-36 items-end gap-3">
        {reportBars.map((bar) => (
          <div
            className="flex flex-1 flex-col items-center gap-2"
            key={bar.label}
          >
            <div
              className={`${bar.value} w-full rounded-t-2xl bg-linear-to-t from-(--color-primary) to-(--color-secondary-light)`}
            />
            <span className="text-xs text-(--color-muted)">{bar.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {["Stock value", "Baki due", "Net cash"].map((label, index) => (
          <div className="rounded-2xl bg-(--color-background) p-3" key={label}>
            <p className="text-xs text-(--color-muted)">{label}</p>
            <p className="mt-1 font-semibold">
              {index === 0 ? "৳ 7.2L" : index === 1 ? "৳ 38K" : "৳ 64K"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MobileCounterMockup() {
  return (
    <div className="mx-auto w-full max-w-72 rounded-[2.25rem] border-8 border-(--color-secondary) bg-(--color-background) p-3 shadow-2xl shadow-[rgba(1,64,52,0.2)]">
      <div className="mx-auto mb-3 h-1.5 w-14 rounded-full bg-(--color-secondary)/20" />
      <div className="overflow-hidden rounded-[1.7rem] bg-white">
        <div className="bg-(--color-secondary) p-4 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--color-info)">
            MemoApp POS
          </p>
          <div className="mt-3 flex items-end justify-between">
            <div>
              <p className="text-xs text-white/60">Current memo</p>
              <h3 className="text-2xl font-semibold">৳ 1,035</h3>
            </div>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold">
              Synced
            </span>
          </div>
        </div>

        <div className="p-4">
          <div className="grid grid-cols-3 gap-2">
            {["Rice", "Oil", "Tea", "Soap", "Milk", "Eggs"].map((item) => (
              <button
                className="rounded-2xl bg-(--color-primary-light) px-2 py-3 text-xs font-semibold text-(--color-primary-dark)"
                key={item}
                type="button"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="mt-4 rounded-2xl bg-(--color-background) p-3">
            <div className="flex justify-between text-xs text-(--color-muted)">
              <span>Due</span>
              <strong className="text-(--color-primary)">৳ 240</strong>
            </div>
            <div className="mt-3 h-2 rounded-full bg-white">
              <div className="h-2 w-2/3 rounded-full bg-(--color-primary)" />
            </div>
          </div>
          <button
            className="mt-4 w-full rounded-2xl bg-(--color-primary) px-4 py-3 text-sm font-semibold text-white"
            type="button"
          >
            Print / Share memo
          </button>
        </div>
      </div>
    </div>
  );
}
