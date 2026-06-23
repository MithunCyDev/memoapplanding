import type { Metadata } from "next";
import { Footer } from "@/components/landing/footer";
import { LegalDocumentContent } from "@/components/landing/legal-document-content";
import { Header } from "@/components/landing/landing-page";
import {
  buildPrivacyPolicyPageSchema,
  jsonLd,
  openGraphImage,
  pageSeo,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: pageSeo.privacyPolicy.title,
  description: pageSeo.privacyPolicy.description,
  keywords: [...pageSeo.privacyPolicy.keywords],
  alternates: {
    canonical: pageSeo.privacyPolicy.path,
  },
  openGraph: {
    type: "website",
    url: pageSeo.privacyPolicy.path,
    siteName: "MemoApp",
    title: pageSeo.privacyPolicy.openGraphTitle,
    description: pageSeo.privacyPolicy.description,
    images: [openGraphImage],
  },
  twitter: {
    card: "summary_large_image",
    title: pageSeo.privacyPolicy.openGraphTitle,
    description: pageSeo.privacyPolicy.description,
    images: [openGraphImage.url],
  },
};

const privacyPolicySchema = buildPrivacyPolicyPageSchema();

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <script
        type="application/ld+json"
        // Structured data is static and controlled by this application.
        dangerouslySetInnerHTML={{
          __html: jsonLd(privacyPolicySchema),
        }}
      />
      <Header />
      <main>
        <LegalDocumentContent documentKey="privacyPolicy" />
      </main>
      <Footer />
    </div>
  );
}
