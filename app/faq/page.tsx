import type { Metadata } from "next";
import { FaqRouteContent } from "@/components/landing/faq-route-content";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/landing-page";
import { RouteHero } from "@/components/landing/route-hero";
import {
  buildFaqPageSchema,
  jsonLd,
  openGraphImage,
  pageSeo,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: pageSeo.faq.title,
  description: pageSeo.faq.description,
  keywords: [...pageSeo.faq.keywords],
  alternates: {
    canonical: pageSeo.faq.path,
  },
  openGraph: {
    type: "website",
    url: pageSeo.faq.path,
    siteName: "MemoApp",
    title: pageSeo.faq.openGraphTitle,
    description: pageSeo.faq.description,
    images: [openGraphImage],
  },
  twitter: {
    card: "summary_large_image",
    title: pageSeo.faq.openGraphTitle,
    description: pageSeo.faq.description,
    images: [openGraphImage.url],
  },
};

const faqSchema = buildFaqPageSchema();

export default function FaqPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <script
        type="application/ld+json"
        // Structured data is static and controlled by this application.
        dangerouslySetInnerHTML={{
          __html: jsonLd(faqSchema),
        }}
      />
      <Header />
      <main>
        <RouteHero contentKey="faq" />
        <FaqRouteContent />
      </main>
      <Footer />
    </div>
  );
}
