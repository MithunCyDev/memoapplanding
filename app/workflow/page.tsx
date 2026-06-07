import type { Metadata } from "next";
import {
  FinalCtaSection,
  Footer,
  Header,
  WorkflowSection,
} from "@/components/landing/landing-page";
import { RouteHero } from "@/components/landing/route-hero";
import { WorkflowRouteHighlights } from "@/components/landing/workflow-route-content";

export const metadata: Metadata = {
  title: "Workflow",
  description:
    "See how MemoApp supports a complete shop workflow from opening counter to selling, syncing, collecting dues, and reviewing reports.",
  alternates: {
    canonical: "/workflow",
  },
};

export default function WorkflowPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main>
        <RouteHero contentKey="workflow" />
        <WorkflowSection />
        <WorkflowRouteHighlights />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
