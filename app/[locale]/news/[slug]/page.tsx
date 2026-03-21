import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import NewsDetailPage from "@/components/pages/NewsDetailPage";

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
        return {
          title: `${post.title} | NBPKOREA`,
          description: post.excerpt ?? t("news.description"),
          openGraph: {
            title: `${post.title} | NBPKOREA`,
            description: post.excerpt ?? t("news.description"),
            images: post.image_url ? [{ url: post.image_url }] : undefined,
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
  };
}

export default function Page() {
  return <NewsDetailPage />;
}
