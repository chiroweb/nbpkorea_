import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import TechnologyPage from "@/components/pages/TechnologyPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("technology.title"),
    description: t("technology.description"),
    openGraph: {
      title: t("technology.title"),
      description: t("technology.description"),
      locale: locale === "ko" ? "ko_KR" : "en_US",
    },
    alternates: {
      canonical: locale === "ko" ? "/technology" : "/en/technology",
      languages: {
        ko: "/technology",
        en: "/en/technology",
      },
    },
  };
}

export default function Page() {
  return <TechnologyPage />;
}
