import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import PerformancePage from "@/components/pages/PerformancePage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("performance.title"),
    description: t("performance.description"),
    openGraph: {
      title: t("performance.title"),
      description: t("performance.description"),
      locale: locale === "ko" ? "ko_KR" : "en_US",
    },
    alternates: {
      canonical: locale === "ko" ? "/performance" : "/en/performance",
      languages: {
        ko: "/performance",
        en: "/en/performance",
      },
    },
  };
}

export default function Page() {
  return <PerformancePage />;
}
