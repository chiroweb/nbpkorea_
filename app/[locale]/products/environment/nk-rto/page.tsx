import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import NkRtoPage from "@/components/pages/products/NkRtoPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("nkRto.title"),
    description: t("nkRto.description"),
    openGraph: {
      title: t("nkRto.title"),
      description: t("nkRto.description"),
      locale: locale === "ko" ? "ko_KR" : "en_US",
    },
    alternates: {
      languages: {
        ko: "/products/environment/nk-rto",
        en: "/en/products/environment/nk-rto",
      },
    },
  };
}

export default function Page() {
  return <NkRtoPage />;
}
