"use client";

import { Fragment, useEffect, useState } from "react";
import { useMotionAllowed } from "@/components/landing/use-motion-allowed";
import { usePrefersReducedMotion } from "@/components/landing/use-prefers-reduced-motion";

type WorkflowStep = {
  step: string;
  title: string;
  description: string;
};

const STEP_HOLD_MS = 4200;
const LINE_FILL_MS = 700;

function WorkflowConnector({
  filled,
  animate,
}: {
  filled: boolean;
  animate: boolean;
}) {
  return (
    <>
      <div aria-hidden="true" className="flex justify-center py-1 sm:hidden">
        <div className="relative h-10 w-0.5 rounded-full bg-(--color-border)">
          <div
            className={`absolute inset-x-0 top-0 h-full w-0.5 origin-top rounded-full bg-(--color-primary) ${
              animate ? "transition-transform ease-out" : ""
            }`}
            style={{
              transform: `scaleY(${filled ? 1 : 0})`,
              transitionDuration: animate ? `${LINE_FILL_MS}ms` : "0ms",
            }}
          />
        </div>
      </div>

      <div
        aria-hidden="true"
        className="relative mt-7 hidden min-w-[2.5rem] flex-1 self-start sm:block sm:max-w-[5rem] lg:max-w-[6.5rem]"
      >
        <div className="h-0.5 w-full rounded-full bg-(--color-border)" />
        <div
          className={`absolute inset-y-0 left-0 h-0.5 w-full origin-left rounded-full bg-(--color-primary) ${
            animate ? "transition-transform ease-out" : ""
          }`}
          style={{
            transform: `scaleX(${filled ? 1 : 0})`,
            transitionDuration: animate ? `${LINE_FILL_MS}ms` : "0ms",
          }}
        />
      </div>
    </>
  );
}

export function WorkflowFlowDiagram({
  steps,
}: {
  steps: readonly WorkflowStep[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [connectedThrough, setConnectedThrough] = useState(-1);
  const motionAllowed = useMotionAllowed();
  const prefersReducedMotion = usePrefersReducedMotion();
  const animateLines = motionAllowed && !prefersReducedMotion;
  const activeStep = steps[activeIndex];

  useEffect(() => {
    if (!motionAllowed || prefersReducedMotion || steps.length <= 1) {
      return;
    }

    let lineTimer: number | undefined;

    const holdTimer = window.setTimeout(() => {
      if (activeIndex < steps.length - 1) {
        setConnectedThrough(activeIndex);
        lineTimer = window.setTimeout(() => {
          setActiveIndex((current) => current + 1);
        }, LINE_FILL_MS);
        return;
      }

      setConnectedThrough(-1);
      setActiveIndex(0);
    }, STEP_HOLD_MS);

    return () => {
      window.clearTimeout(holdTimer);
      if (lineTimer !== undefined) {
        window.clearTimeout(lineTimer);
      }
    };
  }, [activeIndex, motionAllowed, prefersReducedMotion, steps.length]);

  function selectStep(index: number) {
    setActiveIndex(index);
    setConnectedThrough(index - 1);
  }

  if (!activeStep) {
    return null;
  }

  return (
    <div className="mx-auto w-full max-w-xl">
      <div
        aria-label="Daily shop workflow"
        className="flex flex-col items-center sm:flex-row sm:items-start sm:justify-center"
        role="group"
      >
        {steps.map((step, index) => {
          const isActive = index === activeIndex;
          const isComplete = index < activeIndex;

          return (
            <Fragment key={step.step}>
              <div className="flex w-full flex-col items-center sm:w-auto sm:flex-1">
                <button
                  aria-current={isActive ? "step" : undefined}
                  aria-label={step.title}
                  className="group flex flex-col items-center border-0 bg-transparent p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary)/35"
                  onClick={() => selectStep(index)}
                  type="button"
                >
                  <span
                    className={`grid size-14 place-items-center rounded-lg border-2 text-sm font-bold transition-all duration-500 sm:size-16 sm:text-base ${
                      isActive
                        ? "scale-105 border-(--color-primary) bg-(--color-primary) text-white shadow-lg shadow-[rgba(2,115,74,0.22)] ring-4 ring-(--color-primary-light)"
                        : isComplete
                          ? "border-(--color-primary) bg-white text-(--color-primary-dark)"
                          : "border-(--color-border) bg-white text-(--color-muted) group-hover:border-(--color-primary)/35 group-hover:bg-(--color-primary-light)/50"
                    }`}
                  >
                    {step.step}
                  </span>
                  <span
                    className={`mt-3 max-w-[8.5rem] text-center text-xs font-semibold leading-snug transition-colors sm:text-sm ${
                      isActive ? "text-(--color-ink)" : "text-(--color-muted)"
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              </div>

              {index < steps.length - 1 ? (
                <WorkflowConnector
                  animate={animateLines}
                  filled={connectedThrough >= index}
                />
              ) : null}
            </Fragment>
          );
        })}
      </div>

      <div
        aria-live="polite"
        className="workflow-detail-enter mt-10 rounded-lg border border-(--color-border) bg-white p-6 shadow-sm sm:p-7"
        key={activeIndex}
      >
        <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-(--color-info)">
          {activeStep.step}
        </span>
        <h3 className="mt-2 text-xl font-semibold tracking-tight">
          {activeStep.title}
        </h3>
        <p className="mt-3 leading-7 text-(--color-muted)">
          {activeStep.description}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {steps.map((step, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              aria-label={step.title}
              className={`h-1 rounded-full transition-all duration-500 ${
                isActive
                  ? "w-8 bg-(--color-primary)"
                  : "w-1.5 bg-(--color-border) hover:bg-(--color-primary)/35"
              }`}
              key={`progress-${step.step}`}
              onClick={() => selectStep(index)}
              type="button"
            />
          );
        })}
      </div>
    </div>
  );
}
