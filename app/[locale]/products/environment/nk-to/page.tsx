import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import NkToPage from "@/components/pages/products/NkToPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("nkTo.title"),
    description: t("nkTo.description"),
    openGraph: {
      title: t("nkTo.title"),
      description: t("nkTo.description"),
      locale: locale === "ko" ? "ko_KR" : "en_US",
    },
    alternates: {
      languages: {
        ko: "/products/environment/nk-to",
        en: "/en/products/environment/nk-to",
      },
    },
  };
}

export default function Page() {
  return <NkToPage />;
}
