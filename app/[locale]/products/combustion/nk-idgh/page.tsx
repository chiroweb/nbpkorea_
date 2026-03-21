import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import NkIdghPage from "@/components/pages/products/NkIdghPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("nkIdgh.title"),
    description: t("nkIdgh.description"),
    openGraph: {
      title: t("nkIdgh.title"),
      description: t("nkIdgh.description"),
      locale: locale === "ko" ? "ko_KR" : "en_US",
    },
    alternates: {
      languages: {
        ko: "/products/combustion/nk-idgh",
        en: "/en/products/combustion/nk-idgh",
      },
    },
  };
}

export default function Page() {
  return <NkIdghPage />;
}
