import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import DehumidifierPage from "@/components/pages/products/DehumidifierPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("dehumidifier.title"),
    description: t("dehumidifier.description"),
    openGraph: {
      title: t("dehumidifier.title"),
      description: t("dehumidifier.description"),
      locale: locale === "ko" ? "ko_KR" : "en_US",
    },
    alternates: {
      languages: {
        ko: "/products/combustion/dehumidifier",
        en: "/en/products/combustion/dehumidifier",
      },
    },
  };
}

export default function Page() {
  return <DehumidifierPage />;
}
