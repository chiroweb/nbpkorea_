import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import NewsPage from "@/components/pages/NewsPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("news.title"),
    description: t("news.description"),
    openGraph: {
      title: t("news.title"),
      description: t("news.description"),
      locale: locale === "ko" ? "ko_KR" : "en_US",
    },
    alternates: {
      languages: {
        ko: "/news",
        en: "/en/news",
      },
    },
  };
}

export default function Page() {
  return <NewsPage />;
}
