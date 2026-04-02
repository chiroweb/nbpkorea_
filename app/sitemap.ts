import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.nbpkorea.co.kr";

const staticPaths = [
  "",
  "/about",
  "/business",
  "/business/environment",
  "/business/hvac",
  "/business/combustion",
  "/business/burner",
  "/products",
  "/products/environment/nk-rto",
  "/products/environment/nk-rco",
  "/products/environment/nk-cto",
  "/products/environment/nk-to",
  "/products/hvac/cleanroom",
  "/products/hvac/dry-room",
  "/products/hvac/direct-ahu",
  "/products/hvac/door-heater",
  "/products/hvac/dehumidifier",
  "/products/combustion/nkgh",
  "/products/combustion/nk-idgh",
  "/products/combustion/dehumidifier",
  "/products/combustion/paint-dryer",
  "/products/burner/duct-burner",
  "/products/burner/fpb-burner",
  "/products/burner/furnace-burner",
  "/products/burner/low-nox-burner",
  "/products/burner/oven-burner",
  "/products/burner/metal-fiber-burner",
  "/products/burner/valve-train",
  "/products/burner/portable-burner",
  "/products/burner/valve-burner",
  "/performance",
  "/technology",
  "/news",
  "/support",
];

async function getNewsSlugs(): Promise<string[]> {
  try {
    const res = await fetch(`${BASE_URL}/api/news`, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const posts = await res.json();
    if (!Array.isArray(posts)) return [];
    return posts.map((p: { slug: string }) => p.slug).filter(Boolean);
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const newsSlugs = await getNewsSlugs();

  const staticEntries: MetadataRoute.Sitemap = staticPaths.flatMap((path) => [
    {
      url: `${BASE_URL}${path || "/"}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1.0 : 0.8,
      alternates: {
        languages: {
          ko: `${BASE_URL}${path || "/"}`,
          en: `${BASE_URL}/en${path || "/"}`,
        },
      },
    },
    {
      url: `${BASE_URL}/en${path || "/"}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 0.7 : 0.5,
      alternates: {
        languages: {
          ko: `${BASE_URL}${path || "/"}`,
          en: `${BASE_URL}/en${path || "/"}`,
        },
      },
    },
  ]);

  const newsEntries: MetadataRoute.Sitemap = newsSlugs.flatMap((slug) => [
    {
      url: `${BASE_URL}/news/${slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/en/news/${slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    },
  ]);

  return [...staticEntries, ...newsEntries];
}
