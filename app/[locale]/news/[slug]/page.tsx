import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import NewsDetailPage from "@/components/pages/NewsDetailPage";
import { getBrandDisplayName } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "metadata" });

  // Try to fetch post title/description for richer metadata
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/api/news?slug=${encodeURIComponent(slug)}`,
      { next: { revalidate: 3600 } }
    );
    if (res.ok) {
      const post = await res.json();
      if (post) {
        const brand = getBrandDisplayName(locale as "ko" | "en");
        const canonical = locale === "ko" ? `/news/${slug}` : `/en/news/${slug}`;
        return {
          title: `${post.title} | ${brand}`,
          description: post.excerpt ?? t("news.description"),
          alternates: {
            canonical,
            languages: {
              ko: `/news/${slug}`,
              en: `/en/news/${slug}`,
            },
          },
          openGraph: {
            title: `${post.title} | ${brand}`,
            description: post.excerpt ?? t("news.description"),
            images: post.image_url ? [{ url: post.image_url }] : undefined,
            url: canonical,
            locale: locale === "ko" ? "ko_KR" : "en_US",
          },
        };
      }
    }
  } catch {
    // fall through to default
  }

  return {
    title: t("news.title"),
    description: t("news.description"),
    alternates: {
      canonical: locale === "ko" ? `/news/${slug}` : `/en/news/${slug}`,
      languages: {
        ko: `/news/${slug}`,
        en: `/en/news/${slug}`,
      },
    },
  };
}

export default function Page() {
  return <NewsDetailPage />;
}
