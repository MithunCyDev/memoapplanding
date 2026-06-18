import type { LandingContent } from "@/lib/landing-content";

export type PricingPlan = LandingContent["pricingPlans"][number];

export function isTrialPlan(plan: PricingPlan) {
  return plan.monthlyPrice === "Free" || plan.monthlyPrice === "ফ্রি";
}

export function splitPricingPlans(plans: readonly PricingPlan[]) {
  const trialPlan = plans.find(isTrialPlan) ?? null;
  const paidPlans = plans.filter((plan) => !isTrialPlan(plan));
  return { trialPlan, paidPlans };
}
