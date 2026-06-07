import type { Metadata } from "next";
import {
  FeatureSection,
  FinalCtaSection,
  Footer,
  Header,
} from "@/components/landing/landing-page";
import { RouteHero } from "@/components/landing/route-hero";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore MemoApp features for POS billing, inventory, customer dues, Bangla support, Google Drive backup, business notes, sharing, employees, and AI.",
  alternates: {
    canonical: "/features",
  },
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main>
        <RouteHero contentKey="features" />
        <FeatureSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
