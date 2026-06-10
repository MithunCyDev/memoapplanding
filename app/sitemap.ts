import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const routes = [
  { path: "/", priority: 1, lastModified: "2026-06-11" },
  { path: "/features", priority: 0.9, lastModified: "2026-06-11" },
  { path: "/workflow", priority: 0.8, lastModified: "2026-06-11" },
  { path: "/pricing", priority: 0.9, lastModified: "2026-06-11" },
  { path: "/faq", priority: 0.7, lastModified: "2026-06-11" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path === "/" ? "" : route.path}`,
    lastModified: route.lastModified,
    changeFrequency: "weekly",
    priority: route.priority,
  }));
}
