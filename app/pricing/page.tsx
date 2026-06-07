import type { Metadata } from "next";
import { Footer, Header } from "@/components/landing/landing-page";
import { PricingRouteContent } from "@/components/landing/pricing-route-content";
import { RouteHero } from "@/components/landing/route-hero";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Compare MemoApp Trial, Basic, Growth, and Pro plans for SaaS POS billing, inventory, dues, reporting, AI, backup, and team workflows.",
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main>
        <RouteHero contentKey="pricing" />
        <PricingRouteContent />
      </main>
      <Footer />
    </div>
  );
}
