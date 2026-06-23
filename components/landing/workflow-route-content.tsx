"use client";

import Link from "next/link";
import { useLanguage } from "@/components/landing/language-provider";
import { SectionHeading } from "@/components/landing/section-heading";

function FlowStepsGrid({
  steps,
}: {
  steps: ReadonlyArray<{ title: string; description: string }>;
}) {
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2">
      {steps.map((step) => (
        <article
          className="rounded-2xl border border-(--color-border) bg-white p-6 shadow-sm"
          key={step.title}
        >
          <h3 className="text-lg font-semibold">{step.title}</h3>
          <p className="mt-3 leading-7 text-(--color-muted)">{step.description}</p>
        </article>
      ))}
    </div>
  );
}

export function WorkflowRouteHighlights() {
  const { content } = useLanguage();
  const routeContent = content.workflowRoute;

  return (
    <>
      <section className="border-b border-(--color-border) bg-(--color-background) px-5 py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="max-w-4xl text-lg leading-8 text-(--color-muted)">
            {routeContent.seoIntro}
          </p>
        </div>
      </section>

      <section className="bg-(--color-primary-light) px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={routeContent.onboardingEyebrow}
            title={routeContent.onboardingTitle}
            description={routeContent.onboardingDescription}
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {routeContent.onboardingSteps.map((step) => (
              <article
                className="rounded-2xl border border-(--color-border) bg-white p-6 shadow-sm"
                key={step.title}
              >
                <span className="inline-flex size-10 items-center justify-center rounded-2xl bg-(--color-primary) text-sm font-bold text-white">
                  {step.step}
                </span>
                <h2 className="mt-4 text-xl font-semibold">{step.title}</h2>
                <p className="mt-3 leading-7 text-(--color-muted)">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={routeContent.timelineEyebrow}
            title={routeContent.timelineTitle}
            description={routeContent.timelineDescription}
          />

          <div className="mt-14 grid gap-5">
            {routeContent.timeline.map((step) => (
              <article
                className="grid gap-5 rounded-2xl border border-(--color-border) bg-white p-6 shadow-sm lg:grid-cols-[auto_1fr_auto] lg:items-center"
                key={step.step}
              >
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-(--color-primary) text-lg font-semibold text-white">
                  {step.step}
                </span>
                <div>
                  <h2 className="text-2xl font-semibold">{step.title}</h2>
                  <p className="mt-3 leading-7 text-(--color-muted)">
                    {step.description}
                  </p>
                </div>
                <Link
                  className="rounded-full bg-(--color-primary-light) px-5 py-3 text-center text-sm font-bold text-(--color-primary-dark) transition hover:bg-(--color-primary) hover:text-white"
                  href={step.featureHref}
                >
                  {step.featureLabel}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={routeContent.bakiFlowEyebrow}
            title={routeContent.bakiFlowTitle}
            description={routeContent.bakiFlowDescription}
          />
          <FlowStepsGrid steps={routeContent.bakiFlowSteps} />
        </div>
      </section>

      <section className="bg-(--color-background) px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={routeContent.restockFlowEyebrow}
            title={routeContent.restockFlowTitle}
            description={routeContent.restockFlowDescription}
          />
          <FlowStepsGrid steps={routeContent.restockFlowSteps} />
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            align="left"
            eyebrow={routeContent.rolesEyebrow}
            title={routeContent.rolesTitle}
            description={routeContent.rolesDescription}
          />
          <div className="grid gap-5 md:grid-cols-3">
            {routeContent.roles.map((role) => (
              <article
                className="rounded-2xl border border-(--color-border) bg-(--color-background) p-7 shadow-sm"
                key={role.title}
              >
                <h2 className="text-2xl font-semibold">{role.title}</h2>
                <p className="mt-4 leading-7 text-(--color-muted)">
                  {role.description}
                </p>
                {"permissions" in role && role.permissions ? (
                  <ul className="mt-5 space-y-2">
                    {role.permissions.map((permission) => (
                      <li className="flex gap-2 text-sm leading-6" key={permission}>
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-(--color-primary)" />
                        <span className="text-(--color-muted)">{permission}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {content.workflowHighlights.map((item) => (
            <article
              className="rounded-2xl border border-(--color-border) bg-white p-7 shadow-sm"
              key={item.title}
            >
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <p className="mt-4 leading-7 text-(--color-muted)">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-7xl rounded-2xl bg-(--color-secondary) p-8 text-white sm:p-10">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {routeContent.ctaTitle}
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-white/70">
            {routeContent.ctaDescription}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex justify-center rounded-full bg-(--color-info) px-6 py-3 text-sm font-bold text-(--color-secondary)"
              href="/pricing"
            >
              {routeContent.pricingLink}
            </Link>
            <Link
              className="inline-flex justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white"
              href="/features"
            >
              {routeContent.featuresLink}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
