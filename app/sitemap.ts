import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();

  const routes = [
    { path: "", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/cakes", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/bakery", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/order", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/faq", changeFrequency: "monthly" as const, priority: 0.5 },
    { path: "/delivery", changeFrequency: "yearly" as const, priority: 0.4 },
    { path: "/returns", changeFrequency: "yearly" as const, priority: 0.3 },
    { path: "/privacy", changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  return routes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
