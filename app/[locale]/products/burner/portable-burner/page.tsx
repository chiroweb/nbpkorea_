import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import PortableBurnerPage from "@/components/pages/products/PortableBurnerPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("portableBurner.title"),
    description: t("portableBurner.description"),
    openGraph: {
      title: t("portableBurner.title"),
      description: t("portableBurner.description"),
      locale: locale === "ko" ? "ko_KR" : "en_US",
    },
    alternates: {
      languages: {
        ko: "/products/burner/portable-burner",
        en: "/en/products/burner/portable-burner",
      },
    },
  };
}

export default function Page() {
  return <PortableBurnerPage />;
}
