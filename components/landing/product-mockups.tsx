const receiptLines = [
  ["Rice premium 5kg", "৳ 520"],
  ["Soybean oil 2L", "৳ 370"],
  ["Tea pack", "৳ 145"],
];

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
    <div className="relative mx-auto max-w-xl rounded-4xl border border-white/15 bg-white/10 p-3 shadow-2xl shadow-black/20">
      <div className="rounded-3xl bg-[#f8f9f5] p-4 text-(--color-ink) sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--color-primary)">
              Today at counter
            </p>
            <p className="mt-1 text-2xl font-semibold">৳ 48,320</p>
          </div>
          <div className="rounded-full bg-(--color-primary-light) px-3 py-1 text-sm font-semibold text-(--color-primary-dark)">
            Synced
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-(--color-border) bg-white p-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">Quick memo</p>
                <p className="text-xs text-(--color-muted)">
                  Fast billing for busy shops
                </p>
              </div>
              <span className="rounded-full bg-(--color-info) px-3 py-1 text-xs font-bold text-white">
                POS
              </span>
            </div>
            <div className="space-y-3">
              {receiptLines.map(([name, price]) => (
                <div
                  className="flex items-center justify-between rounded-2xl bg-(--color-background) px-3 py-2 text-sm"
                  key={name}
                >
                  <span>{name}</span>
                  <strong>{price}</strong>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-dashed border-(--color-border) pt-4">
              <span className="text-sm text-(--color-muted)">Total</span>
              <strong className="text-xl">৳ 1,035</strong>
            </div>
          </div>

          <div className="space-y-3">
            <div className="rounded-3xl bg-(--color-secondary) p-4 text-white">
              <p className="text-sm text-white/70">AI assistant</p>
              <p className="mt-2 text-lg font-semibold">
                “Which items are low before Eid?”
              </p>
              <p className="mt-3 text-sm text-white/70">
                12 products need restock. Top risk: oil and snacks.
              </p>
            </div>
            <div className="rounded-3xl border border-(--color-border) bg-white p-4">
              <p className="text-sm font-semibold">Dues collected</p>
              <p className="mt-2 text-2xl font-semibold text-(--color-primary)">
                ৳ 9,240
              </p>
              <div className="mt-3 h-2 rounded-full bg-(--color-primary-light)">
                <div className="h-2 w-3/4 rounded-full bg-(--color-primary)" />
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
    <div className="rounded-4xl border border-(--color-border) bg-white p-5 shadow-xl shadow-[rgba(1,64,52,0.08)]">
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
    <div className="mx-auto w-full max-w-76 rounded-[2.4rem] border-10 border-(--color-secondary) bg-(--color-background) p-4 shadow-2xl shadow-[rgba(1,64,52,0.18)]">
      <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-(--color-secondary)/20" />
      <div className="rounded-3xl bg-white p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--color-primary)">
          Counter mode
        </p>
        <h3 className="mt-2 text-xl font-semibold">Create memo</h3>
        <div className="mt-4 grid grid-cols-3 gap-2">
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
        <button
          className="mt-5 w-full rounded-2xl bg-(--color-primary) px-4 py-3 text-sm font-semibold text-white"
          type="button"
        >
          Print / Share memo
        </button>
      </div>
    </div>
  );
}
