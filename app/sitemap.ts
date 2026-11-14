import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { systems } from "@/lib/systems";
import { cities } from "@/lib/cities";
import { guides } from "@/lib/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const core = [
    "",
    "/residential",
    "/commercial",
    "/societies",
    "/process",
    "/projects",
    "/subsidy",
    "/about",
    "/contact",
    "/calculator",
    "/quote",
    "/guides",
  ];

  const routes = [
    ...core,
    ...systems.map((system) => `/systems/${system.slug}`),
    ...cities.map((city) => `/solar/${city.slug}`),
    ...guides.map((guide) => `/guides/${guide.slug}`),
  ];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/contact" || route === "/quote" ? 0.9 : 0.8,
  }));
}
