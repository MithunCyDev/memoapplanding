import type { Metadata } from "next";
import { PharmacyPosPage } from "@/components/landing/pharmacy-pos-page";
import {
  buildPharmacyPosPageSchema,
  jsonLd,
  openGraphImage,
  pageSeo,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: pageSeo.pharmacyPos.title,
  description: pageSeo.pharmacyPos.description,
  keywords: [...pageSeo.pharmacyPos.keywords],
  alternates: {
    canonical: pageSeo.pharmacyPos.path,
  },
  openGraph: {
    type: "website",
    url: pageSeo.pharmacyPos.path,
    siteName: "MemoApp",
    title: pageSeo.pharmacyPos.openGraphTitle,
    description: pageSeo.pharmacyPos.description,
    images: [openGraphImage],
  },
  twitter: {
    card: "summary_large_image",
    title: pageSeo.pharmacyPos.openGraphTitle,
    description: pageSeo.pharmacyPos.description,
    images: [openGraphImage.url],
  },
};

const pharmacyPosSchema = buildPharmacyPosPageSchema();

export default function PharmacyPosRoutePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // Structured data is static and controlled by this application.
        dangerouslySetInnerHTML={{
          __html: jsonLd(pharmacyPosSchema),
        }}
      />
      <PharmacyPosPage />
    </>
  );
}
