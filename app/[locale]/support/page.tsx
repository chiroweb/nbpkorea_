import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import SupportPage from "@/components/pages/SupportPage";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "metadata" });
  return buildPageMetadata({
    locale: locale as "ko" | "en",
    path: "/support",
    copy: {
      ko: {
        title: t("support.title"),
        description: t("support.description"),
      },
      en: {
        title: t("support.title"),
        description: t("support.description"),
      },
    },
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "support.faq" });
  const faqs = t.raw("items") as { question: string; answer: string }[];
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SupportPage />
    </>
  );
}
