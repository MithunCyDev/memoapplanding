import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MemoApp - AI-Powered POS & Shop Management",
    short_name: "MemoApp",
    description: siteConfig.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f8f9f5",
    theme_color: "#02734A",
    icons: [
      {
        src: "/favicon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "260x58",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
