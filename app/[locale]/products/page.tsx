import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ProductsPage from "@/components/pages/ProductsPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("products.title"),
    description: t("products.description"),
    openGraph: {
      title: t("products.title"),
      description: t("products.description"),
      locale: locale === "ko" ? "ko_KR" : "en_US",
    },
    alternates: {
      languages: {
        ko: "/products",
        en: "/en/products",
      },
    },
  };
}

export default function Page() {
  return <ProductsPage />;
}
