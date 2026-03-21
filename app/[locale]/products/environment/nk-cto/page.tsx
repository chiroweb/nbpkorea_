import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import NkCtoPage from "@/components/pages/products/NkCtoPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("nkCto.title"),
    description: t("nkCto.description"),
    openGraph: {
      title: t("nkCto.title"),
      description: t("nkCto.description"),
      locale: locale === "ko" ? "ko_KR" : "en_US",
    },
    alternates: {
      languages: {
        ko: "/products/environment/nk-cto",
        en: "/en/products/environment/nk-cto",
      },
    },
  };
}

export default function Page() {
  return <NkCtoPage />;
}
