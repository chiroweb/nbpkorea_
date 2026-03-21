import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import NkghPage from "@/components/pages/products/NkghPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("nkgh.title"),
    description: t("nkgh.description"),
    openGraph: {
      title: t("nkgh.title"),
      description: t("nkgh.description"),
      locale: locale === "ko" ? "ko_KR" : "en_US",
    },
    alternates: {
      languages: {
        ko: "/products/combustion/nkgh",
        en: "/en/products/combustion/nkgh",
      },
    },
  };
}

export default function Page() {
  return <NkghPage />;
}
