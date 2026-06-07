import type { Metadata } from "next";
import { FaqRouteContent } from "@/components/landing/faq-route-content";
import { Footer, Header } from "@/components/landing/landing-page";
import { RouteHero } from "@/components/landing/route-hero";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Find answers about MemoApp setup, POS memos, inventory, dues, team access, pricing, and in-app support options.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FaqPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main>
        <RouteHero contentKey="faq" />
        <FaqRouteContent />
      </main>
      <Footer />
    </div>
  );
}
