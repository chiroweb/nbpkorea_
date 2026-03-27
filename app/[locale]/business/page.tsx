import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import BusinessPage from "@/components/pages/BusinessPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("business.title"),
    description: t("business.description"),
    openGraph: {
      title: t("business.title"),
      description: t("business.description"),
      locale: locale === "ko" ? "ko_KR" : "en_US",
    },
    alternates: {
      languages: {
        ko: "/business",
        en: "/en/business",
      },
    },
  };
}

export default function Page() {
  return <BusinessPage />;
}
