import type { Metadata } from "next";
import { Footer } from "@/components/landing/footer";
import { Header, WorkflowSection } from "@/components/landing/landing-page";
import { RouteHero } from "@/components/landing/route-hero";
import { WorkflowRouteHighlights } from "@/components/landing/workflow-route-content";
import {
  buildWorkflowPageSchema,
  jsonLd,
  openGraphImage,
  pageSeo,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: pageSeo.workflow.title,
  description: pageSeo.workflow.description,
  keywords: [...pageSeo.workflow.keywords],
  alternates: {
    canonical: pageSeo.workflow.path,
  },
  openGraph: {
    type: "website",
    url: pageSeo.workflow.path,
    siteName: "MemoApp",
    title: pageSeo.workflow.openGraphTitle,
    description: pageSeo.workflow.description,
    images: [openGraphImage],
  },
  twitter: {
    card: "summary_large_image",
    title: pageSeo.workflow.openGraphTitle,
    description: pageSeo.workflow.description,
    images: [openGraphImage.url],
  },
};

const workflowSchema = buildWorkflowPageSchema();

export default function WorkflowPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <script
        type="application/ld+json"
        // Structured data is static and controlled by this application.
        dangerouslySetInnerHTML={{
          __html: jsonLd(workflowSchema),
        }}
      />
      <Header />
      <main>
        <RouteHero contentKey="workflow" />
        <WorkflowSection />
        <WorkflowRouteHighlights />
      </main>
      <Footer />
    </div>
  );
}
