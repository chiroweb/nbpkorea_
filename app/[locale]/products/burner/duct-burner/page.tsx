import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import DuctBurnerPage from "@/components/pages/products/DuctBurnerPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("ductBurner.title"),
    description: t("ductBurner.description"),
    openGraph: {
      title: t("ductBurner.title"),
      description: t("ductBurner.description"),
      locale: locale === "ko" ? "ko_KR" : "en_US",
    },
    alternates: {
      languages: {
        ko: "/products/burner/duct-burner",
        en: "/en/products/burner/duct-burner",
      },
    },
  };
}

export default function Page() {
  return <DuctBurnerPage />;
}
