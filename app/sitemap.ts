import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const routes = [
  { path: "/", priority: 1 },
  { path: "/features", priority: 0.9 },
  { path: "/workflow", priority: 0.8 },
  { path: "/pricing", priority: 0.9 },
  { path: "/faq", priority: 0.7 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path === "/" ? "" : route.path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route.priority,
  }));
}
