import Image from "next/image";
import { SectionHeading } from "@/components/landing/section-heading";
import {
  AnalyticsMockup,
  HeroDashboardMockup,
  MobileCounterMockup,
} from "@/components/landing/product-mockups";
import { siteConfig } from "@/lib/site";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

const stats = [
  { value: "5x", label: "faster memo creation" },
  { value: "24/7", label: "offline-ready counter work" },
  { value: "360°", label: "sales, stock, dues, and reports" },
] as const;

const featureCards = [
  {
    title: "Counter-fast POS billing",
    description:
      "Create memos, invoices, quotations, and challans with a flow built for real retail counters.",
    badge: "POS",
  },
  {
    title: "Inventory that stays useful",
    description:
      "Track products, categories, stock in/out, purchase history, and low-stock signals before shelves go empty.",
    badge: "Stock",
  },
  {
    title: "Customer dues without confusion",
    description:
      "Maintain customer ledgers, collect baki payments, and understand who owes what at a glance.",
    badge: "Dues",
  },
  {
    title: "Purchases and suppliers",
    description:
      "Keep supplier ledgers, payable records, purchase bills, expenses, and cashflow sessions in one place.",
    badge: "Ledger",
  },
  {
    title: "Reports owners can act on",
    description:
      "See sales, profit, cash, inventory value, and due trends without waiting for manual spreadsheets.",
    badge: "Reports",
  },
  {
    title: "AI assistant for shop decisions",
    description:
      "Ask business questions in plain language and get guidance on stock, dues, sales trends, and next actions.",
    badge: "AI",
  },
  {
    title: "Full Bangla language support",
    description:
      "Let teams work comfortably in English, Bangla, or Banglish with local shop terms that feel familiar.",
    badge: "Bangla",
  },
  {
    title: "Google Drive auto backup",
    description:
      "Protect customers, products, suppliers, purchases, and memos with scheduled full-shop backup to Google Drive.",
    badge: "Backup",
  },
  {
    title: "Automatic due reminders",
    description:
      "Help customers remember baki payments with clear due reminders that support healthier cash collection.",
    badge: "Reminder",
  },
  {
    title: "Business notes you can share",
    description:
      "Create quick shop notes, save them automatically, and share important updates with the right people.",
    badge: "Notes",
  },
  {
    title: "Social sharing made simple",
    description:
      "Share memos, business updates, and customer-ready information across common social channels faster.",
    badge: "Share",
  },
  {
    title: "Employee management",
    description:
      "Organize staff records, salary workflows, and role-aware operations as your shop team grows.",
    badge: "Team",
  },
] as const;

const workflowSteps = [
  {
    step: "01",
    title: "Open counter",
    description:
      "Start the day with cashflow visibility, product shortcuts, and ready-to-use memo actions.",
  },
  {
    step: "02",
    title: "Sell, collect, sync",
    description:
      "Record sales, partial payments, and customer dues even when internet quality is uneven.",
  },
  {
    step: "03",
    title: "Review the business",
    description:
      "Close the day with reports, low-stock alerts, expense context, and owner-ready insights.",
  },
] as const;

const pricingPlans = [
  {
    name: "Basic",
    price: "For small shops",
    description: "Start clean billing, inventory, and customer records.",
    features: ["POS memo creation", "Products and stock", "Customer dues"],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "For busy counters",
    description: "Add richer reports, purchases, suppliers, and collections.",
    features: [
      "Purchases and suppliers",
      "Reports and cashflow",
      "Offline sync",
    ],
    highlighted: true,
  },
  {
    name: "Pro",
    price: "For scaling teams",
    description:
      "Support owners, employees, and multi-process shop operations.",
    features: ["Employee workflows", "AI assistant", "Priority support"],
    highlighted: false,
  },
] as const;

const testimonials = [
  {
    quote:
      "MemoApp feels designed around the way local shops actually sell, collect dues, and check stock.",
    name: "Retail owner",
    role: "Grocery and daily needs",
  },
  {
    quote:
      "The best part is seeing counter sales, baki collection, and inventory together instead of in separate notebooks.",
    name: "Operations manager",
    role: "Multi-counter store",
  },
] as const;

const faqs = [
  {
    question: "Is MemoApp only a POS system?",
    answer:
      "No. POS billing is the front counter, but MemoApp also covers inventory, customers, dues, suppliers, purchases, expenses, reports, and AI-assisted insights.",
  },
  {
    question: "Will this landing page connect to the backend now?",
    answer:
      "Not yet. The current landing page is static-first for speed and SEO, with clean CTA placeholders ready for future backend integration.",
  },
  {
    question: "Is the product suitable for Bangladeshi shops?",
    answer:
      "Yes. The positioning, terminology, and workflows are shaped around local retail operations, including baki/dues, Bengali-friendly usage, and practical offline sync.",
  },
] as const;

export function LandingPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main>
        <HeroSection />
        <LogoStrip />
        <FeatureSection />
        <WorkflowSection />
        <ShowcaseSection />
        <PricingSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[rgba(248,249,245,0.84)] backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8"
      >
        <a className="flex items-center" href="#top" aria-label="MemoApp home">
          <Image
            alt="MemoApp"
            className="h-12 w-auto"
            height={58}
            priority
            src="/logo.png"
            width={260}
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              className="text-sm font-medium text-(--color-muted) transition hover:text-(--color-primary)"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          className="rounded-full bg-(--color-secondary) px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgba(1,64,52,0.18)] transition hover:bg-(--color-primary-dark)"
          href="#contact"
        >
          Request demo
        </a>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      className="relative isolate bg-(--color-secondary) pt-32 text-white sm:pt-36"
      id="top"
    >
      <div className="absolute inset-0 -z-10 surface-grid opacity-20" />
      <div className="absolute left-1/2 top-12 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-(--color-secondary-light)/20 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:pb-28">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/80">
            <span className="size-2 rounded-full bg-(--color-info)" />
            Built for BD SMEs and modern retail counters
          </div>
          <h1 className="text-balance mt-7 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            POS, stock, dues, and insights in one calm workspace.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
            MemoApp helps shop owners create fast memos, manage inventory, track
            baki, record purchases, and understand business health from
            anywhere.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              className="rounded-full bg-(--color-info) px-7 py-4 text-center text-sm font-bold text-(--color-secondary) shadow-xl shadow-[rgba(255,153,51,0.22)] transition hover:bg-(--color-info-light)"
              href="#contact"
            >
              Start with MemoApp
            </a>
            <a
              className="rounded-full border border-white/20 px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-white/10"
              href="#features"
            >
              Explore features
            </a>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div className="glass-card rounded-3xl p-4" key={stat.label}>
                <p className="text-3xl font-semibold">{stat.value}</p>
                <p className="mt-1 text-sm leading-6 text-white/65">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <HeroDashboardMockup />
      </div>
    </section>
  );
}

function LogoStrip() {
  return (
    <section
      aria-label="Product pillars"
      className="border-b border-(--color-border) bg-(--color-paper)"
    >
      <div className="mx-auto grid max-w-7xl gap-4 px-5 py-8 sm:grid-cols-2 lg:grid-cols-5 lg:px-8">
        {["Billing", "Inventory", "Customer dues", "Purchases", "Reports"].map(
          (item) => (
            <div
              className="rounded-2xl bg-(--color-background) px-5 py-4 text-center text-sm font-semibold text-(--color-primary-dark)"
              key={item}
            >
              {item}
            </div>
          ),
        )}
      </div>
    </section>
  );
}

function FeatureSection() {
  return (
    <section className="px-5 py-24 lg:px-8" id="features">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Everything a shop needs"
          title="A complete retail operating system, not just billing software."
          description="MemoApp connects the daily counter with the back-office details owners need: sales, stock, customers, suppliers, staff, and cash visibility."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((feature) => (
            <article
              className="feature-card group rounded-4xl border border-(--color-border) bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-[rgba(1,64,52,0.08)]"
              key={feature.title}
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="rounded-full bg-(--color-primary-light) px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-(--color-primary-dark)">
                  {feature.badge}
                </span>
                <span className="grid size-11 place-items-center rounded-2xl bg-(--color-background) text-(--color-primary) transition group-hover:bg-(--color-primary) group-hover:text-white">
                  →
                </span>
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-4 leading-7 text-(--color-muted)">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section
      className="bg-(--color-primary-light) px-5 py-24 lg:px-8"
      id="workflow"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeading
            align="left"
            eyebrow="Daily flow"
            title="Designed for the rhythm of a real shop day."
            description="From opening cash to the final report, MemoApp keeps busy selling moments simple and gives owners the clarity to make better decisions."
          />
          <div className="grid gap-5">
            {workflowSteps.map((step) => (
              <article
                className="grid gap-5 rounded-4xl bg-white p-6 shadow-sm sm:grid-cols-[auto_1fr]"
                key={step.step}
              >
                <span className="grid size-14 place-items-center rounded-2xl bg-(--color-primary) text-lg font-semibold text-white">
                  {step.step}
                </span>
                <div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 leading-7 text-(--color-muted)">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ShowcaseSection() {
  return (
    <section className="relative bg-(--color-secondary) px-5 py-24 text-white lg:px-8">
      <div className="absolute inset-0 surface-grid opacity-10" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          inverse
          eyebrow="Owner-ready view"
          title="Beautiful enough for the owner, fast enough for the counter."
          description="The landing page uses abstract product mockups so it can show the MemoApp experience without copying third-party design assets."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-center">
          <AnalyticsMockup />
          <div className="space-y-5">
            {[
              "Offline-first workflows keep selling possible during network drops.",
              "Bengali-friendly shop terms make the product feel familiar to local teams.",
              "Membership-ready positioning supports future pricing and onboarding flows.",
            ].map((item) => (
              <div className="glass-card rounded-3xl p-5" key={item}>
                <p className="leading-7 text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="px-5 py-24 lg:px-8" id="pricing">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Plans for every stage"
          title="Simple packaging for small shops, busy counters, and growing teams."
          description="Pricing can later connect to the MemoApp membership backend. For now, the landing page presents clear plan positioning and conversion paths."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              className={`rounded-4xl border p-7 ${
                plan.highlighted
                  ? "border-(--color-primary) bg-(--color-secondary) text-white shadow-2xl shadow-[rgba(1,64,52,0.18)]"
                  : "border-(--color-border) bg-white"
              }`}
              key={plan.name}
            >
              <p
                className={`text-sm font-semibold uppercase tracking-[0.22em] ${
                  plan.highlighted
                    ? "text-(--color-info)"
                    : "text-(--color-primary)"
                }`}
              >
                {plan.name}
              </p>
              <h3 className="mt-4 text-3xl font-semibold">{plan.price}</h3>
              <p
                className={`mt-4 leading-7 ${
                  plan.highlighted ? "text-white/70" : "text-(--color-muted)"
                }`}
              >
                {plan.description}
              </p>
              <ul className="mt-7 space-y-3">
                {plan.features.map((feature) => (
                  <li className="flex gap-3" key={feature}>
                    <span
                      className={`mt-1 size-5 rounded-full ${
                        plan.highlighted
                          ? "bg-(--color-info)"
                          : "bg-(--color-primary-light)"
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                className={`mt-8 inline-flex w-full justify-center rounded-full px-5 py-3 text-sm font-bold ${
                  plan.highlighted
                    ? "bg-(--color-info) text-(--color-secondary)"
                    : "bg-(--color-primary) text-white"
                }`}
                href="#contact"
              >
                Talk to sales
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Built around shop owners"
            title="A product story that speaks to real retail pain."
            description="The page focuses on outcomes buyers understand quickly: faster billing, tighter dues control, stock confidence, and clear daily reports."
          />
        </div>
        <div className="grid gap-5">
          {testimonials.map((testimonial) => (
            <figure
              className="rounded-4xl border border-(--color-border) bg-(--color-background) p-7"
              key={testimonial.name}
            >
              <blockquote className="text-xl font-medium leading-9">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-(--color-muted)">
                  {testimonial.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="px-5 py-24 lg:px-8" id="faq">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Questions"
          title="Clear answers for early landing page visitors."
          description="These FAQs are written for SEO and conversion while leaving space for future product, pricing, and support updates."
        />
        <div className="mt-12 divide-y divide-(--color-border) rounded-4xl border border-(--color-border) bg-white">
          {faqs.map((faq) => (
            <details className="group p-6" key={faq.question}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold">
                {faq.question}
                <span className="text-2xl text-(--color-primary) transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 leading-7 text-(--color-muted)">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="px-5 pb-24 lg:px-8" id="contact">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-5xl bg-(--color-secondary) lg:grid-cols-[1fr_0.7fr]">
        <div className="p-8 text-white sm:p-12 lg:p-16">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--color-info)">
            Ready for launch
          </p>
          <h2 className="text-balance mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Turn MemoApp into a website that sells the product before the demo.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
            Capture interest from shop owners, explain the value clearly, and
            keep the page ready for backend-powered lead capture when needed.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              className="rounded-full bg-(--color-info) px-7 py-4 text-center text-sm font-bold text-(--color-secondary)"
              href={`mailto:${siteConfig.contactEmail}`}
            >
              Contact MemoApp
            </a>
            <a
              className="rounded-full border border-white/20 px-7 py-4 text-center text-sm font-bold text-white"
              href="#features"
            >
              Review features
            </a>
          </div>
        </div>
        <div className="flex items-end justify-center bg-(--color-primary-light) p-8 lg:p-12">
          <MobileCounterMockup />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-(--color-border) bg-white px-5 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-(--color-muted) md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} MemoApp. All rights reserved.</p>
        <div className="flex flex-wrap gap-5">
          {navItems.map((item) => (
            <a
              className="hover:text-(--color-primary)"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
