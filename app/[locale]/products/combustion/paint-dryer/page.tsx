import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import PaintDryerPage from "@/components/pages/products/PaintDryerPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("paintDryer.title"),
    description: t("paintDryer.description"),
    openGraph: {
      title: t("paintDryer.title"),
      description: t("paintDryer.description"),
      locale: locale === "ko" ? "ko_KR" : "en_US",
    },
    alternates: {
      languages: {
        ko: "/products/combustion/paint-dryer",
        en: "/en/products/combustion/paint-dryer",
      },
    },
  };
}

export default function Page() {
  return <PaintDryerPage />;
}
