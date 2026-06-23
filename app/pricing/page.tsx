import type { Metadata } from "next";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/landing-page";
import { PricingRouteContent } from "@/components/landing/pricing-route-content";
import { RouteHero } from "@/components/landing/route-hero";
import {
  buildPricingPageSchema,
  jsonLd,
  openGraphImage,
  pageSeo,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: pageSeo.pricing.title,
  description: pageSeo.pricing.description,
  keywords: [...pageSeo.pricing.keywords],
  alternates: {
    canonical: pageSeo.pricing.path,
  },
  openGraph: {
    type: "website",
    url: pageSeo.pricing.path,
    siteName: "MemoApp",
    title: pageSeo.pricing.openGraphTitle,
    description: pageSeo.pricing.description,
    images: [openGraphImage],
  },
  twitter: {
    card: "summary_large_image",
    title: pageSeo.pricing.openGraphTitle,
    description: pageSeo.pricing.description,
    images: [openGraphImage.url],
  },
};

const pricingSchema = buildPricingPageSchema();

export default function PricingPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <script
        type="application/ld+json"
        // Structured data is static and controlled by this application.
        dangerouslySetInnerHTML={{
          __html: jsonLd(pricingSchema),
        }}
      />
      <Header />
      <main>
        <RouteHero contentKey="pricing" />
        <PricingRouteContent />
      </main>
      <Footer />
    </div>
  );
}
