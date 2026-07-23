import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { LanguageProvider } from "@/components/landing/language-provider";
import { FloatingTalkButton } from "@/components/landing/floating-talk-button";
import { PageVisibilityRoot } from "@/components/landing/page-visibility-root";
import { GoogleAnalytics } from "@/components/google-analytics";
import { MetaPixel } from "@/components/meta-pixel";
import { openGraphImage, pageSeo } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: pageSeo.home.title,
    template: "%s | MemoApp",
  },
  description: pageSeo.home.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.name,
  authors: [{ name: "MemoApp" }],
  creator: "MemoApp",
  publisher: "MemoApp",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_BD",
    url: "/",
    siteName: siteConfig.name,
    title: pageSeo.home.title,
    description: pageSeo.home.description,
    images: [openGraphImage],
  },
  twitter: {
    card: "summary_large_image",
    title: pageSeo.home.title,
    description: pageSeo.home.description,
    images: [openGraphImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  colorScheme: "light",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
      <body>
        <MetaPixel />
        <LanguageProvider>
          <PageVisibilityRoot>{children}</PageVisibilityRoot>
          <FloatingTalkButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
