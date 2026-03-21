import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import NkRcoPage from "@/components/pages/products/NkRcoPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("nkRco.title"),
    description: t("nkRco.description"),
    openGraph: {
      title: t("nkRco.title"),
      description: t("nkRco.description"),
      locale: locale === "ko" ? "ko_KR" : "en_US",
    },
    alternates: {
      languages: {
        ko: "/products/environment/nk-rco",
        en: "/en/products/environment/nk-rco",
      },
    },
  };
}

export default function Page() {
  return <NkRcoPage />;
}
