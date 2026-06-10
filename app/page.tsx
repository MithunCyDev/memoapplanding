import { LandingPage } from "@/components/landing/landing-page";
import { buildHomePageSchema, jsonLd } from "@/lib/schema";

const homeSchema = buildHomePageSchema();

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // Structured data is static and controlled by this application.
        dangerouslySetInnerHTML={{
          __html: jsonLd(homeSchema),
        }}
      />
      <LandingPage />
    </>
  );
}
