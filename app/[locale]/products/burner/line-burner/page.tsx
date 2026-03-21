import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import LineBurnerPage from "@/components/pages/products/LineBurnerPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("lineBurner.title"),
    description: t("lineBurner.description"),
    openGraph: {
      title: t("lineBurner.title"),
      description: t("lineBurner.description"),
      locale: locale === "ko" ? "ko_KR" : "en_US",
    },
    alternates: {
      languages: {
        ko: "/products/burner/line-burner",
        en: "/en/products/burner/line-burner",
      },
    },
  };
}

export default function Page() {
  return <LineBurnerPage />;
}
