import type { Metadata } from "next";
import { FeaturesRouteContent } from "@/components/landing/features-route-content";
import { Footer } from "@/components/landing/footer";
import { LandingAssistant } from "@/components/landing/landing-assistant";
import {
  FeatureSection,
  FinalCtaSection,
  Header,
} from "@/components/landing/landing-page";
import { RouteHero } from "@/components/landing/route-hero";
import {
  buildFeaturesPageSchema,
  jsonLd,
  openGraphImage,
  pageSeo,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: pageSeo.features.title,
  description: pageSeo.features.description,
  keywords: [...pageSeo.features.keywords],
  alternates: {
    canonical: pageSeo.features.path,
  },
  openGraph: {
    type: "website",
    url: pageSeo.features.path,
    siteName: "MemoApp",
    title: pageSeo.features.openGraphTitle,
    description: pageSeo.features.description,
    images: [openGraphImage],
  },
  twitter: {
    card: "summary_large_image",
    title: pageSeo.features.openGraphTitle,
    description: pageSeo.features.description,
    images: [openGraphImage.url],
  },
};

const featuresSchema = buildFeaturesPageSchema();

export default function FeaturesPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <script
        type="application/ld+json"
        // Structured data is static and controlled by this application.
        dangerouslySetInnerHTML={{
          __html: jsonLd(featuresSchema),
        }}
      />
      <Header />
      <main>
        <RouteHero contentKey="features" />
        <FeatureSection />
        <FeaturesRouteContent />
        <FinalCtaSection />
      </main>
      <Footer />
      <LandingAssistant />
    </div>
  );
}
