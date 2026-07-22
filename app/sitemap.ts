import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const routes = [
  { path: "/", priority: 1, lastModified: "2026-06-23" },
  { path: "/features", priority: 0.9, lastModified: "2026-06-23" },
  { path: "/workflow", priority: 0.8, lastModified: "2026-06-23" },
  { path: "/pricing", priority: 0.9, lastModified: "2026-06-23" },
  { path: "/pharmacy-pos", priority: 0.8, lastModified: "2026-07-23" },
  { path: "/faq", priority: 0.7, lastModified: "2026-06-23" },
  { path: "/privacy-policy", priority: 0.6, lastModified: "2026-06-23" },
  { path: "/terms-of-service", priority: 0.6, lastModified: "2026-06-23" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path === "/" ? "" : route.path}`,
    lastModified: route.lastModified,
    changeFrequency: "weekly",
    priority: route.priority,
  }));
}
