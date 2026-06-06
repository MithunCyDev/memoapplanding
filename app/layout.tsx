import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "MemoApp | SaaS POS for Modern Shops",
    template: "%s | MemoApp",
  },
  description: siteConfig.description,
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
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_BD",
    url: "/",
    siteName: siteConfig.name,
    title: "MemoApp | SaaS POS for Modern Shops",
    description: siteConfig.description,
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "MemoApp SaaS POS landing page preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MemoApp | SaaS POS for Modern Shops",
    description: siteConfig.description,
    images: ["/og.svg"],
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
  themeColor: "#02734A",
  colorScheme: "light",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
