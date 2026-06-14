import type { Metadata } from "next";
import { Footer } from "@/components/landing/footer";
import { LandingAssistant } from "@/components/landing/landing-assistant";
import { LegalDocumentContent } from "@/components/landing/legal-document-content";
import { Header } from "@/components/landing/landing-page";
import {
  buildTermsOfServicePageSchema,
  jsonLd,
  openGraphImage,
  pageSeo,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: pageSeo.termsOfService.title,
  description: pageSeo.termsOfService.description,
  keywords: [...pageSeo.termsOfService.keywords],
  alternates: {
    canonical: pageSeo.termsOfService.path,
  },
  openGraph: {
    type: "website",
    url: pageSeo.termsOfService.path,
    siteName: "MemoApp",
    title: pageSeo.termsOfService.openGraphTitle,
    description: pageSeo.termsOfService.description,
    images: [openGraphImage],
  },
  twitter: {
    card: "summary_large_image",
    title: pageSeo.termsOfService.openGraphTitle,
    description: pageSeo.termsOfService.description,
    images: [openGraphImage.url],
  },
};

const termsOfServiceSchema = buildTermsOfServicePageSchema();

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <script
        type="application/ld+json"
        // Structured data is static and controlled by this application.
        dangerouslySetInnerHTML={{
          __html: jsonLd(termsOfServiceSchema),
        }}
      />
      <Header />
      <main>
        <LegalDocumentContent documentKey="termsOfService" />
      </main>
      <Footer />
      <LandingAssistant />
    </div>
  );
}
