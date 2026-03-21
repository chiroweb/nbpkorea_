import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import SupportPage from "@/components/pages/SupportPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("support.title"),
    description: t("support.description"),
    openGraph: {
      title: t("support.title"),
      description: t("support.description"),
      locale: locale === "ko" ? "ko_KR" : "en_US",
    },
    alternates: {
      languages: {
        ko: "/support",
        en: "/en/support",
      },
    },
  };
}

export default function Page() {
  return <SupportPage />;
}
