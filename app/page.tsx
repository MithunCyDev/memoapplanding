import { LandingPage } from "@/components/landing/landing-page";
import { siteConfig } from "@/lib/site";

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MemoApp",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, Android, iOS",
  description: siteConfig.description,
  url: siteConfig.url,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "BDT",
    category: "SaaS POS subscription",
  },
  featureList: [
    "POS billing",
    "Inventory management",
    "Customer dues tracking",
    "Purchase and supplier management",
    "Retail reports",
    "Offline-first sync",
    "AI shop assistant",
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MemoApp",
  url: siteConfig.url,
  email: siteConfig.contactEmail,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // Structured data is static and controlled by this application.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, organizationSchema]),
        }}
      />
      <LandingPage />
    </>
  );
}
