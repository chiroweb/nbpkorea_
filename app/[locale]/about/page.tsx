import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import AboutPage from "@/components/pages/AboutPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("about.title"),
    description: t("about.description"),
    openGraph: {
      title: t("about.title"),
      description: t("about.description"),
      locale: locale === "ko" ? "ko_KR" : "en_US",
    },
    alternates: {
      canonical: locale === "ko" ? "/about" : "/en/about",
      languages: {
        ko: "/about",
        en: "/en/about",
      },
    },
  };
}

export default function Page() {
  return <AboutPage />;
}
