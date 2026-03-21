import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import ScrollToTop from "@/components/ScrollToTop";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.nbpkorea.co.kr";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: t("title"),
      template: "%s",
    },
    description: t("description"),
    openGraph: {
      type: "website",
      siteName: "NBPKOREA",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NBPKOREA" }],
    },
    twitter: {
      card: "summary_large_image",
      images: ["/og-image.png"],
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-icon.png",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "ko" | "en")) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NBPKOREA",
    url: BASE_URL,
    logo: `${BASE_URL}/icon.png`,
    telephone: "031-434-6566",
    email: "NBPKOREA@NBPKOREA.co.kr",
    address: {
      "@type": "PostalAddress",
      streetAddress: "엠티브이로 8길 22",
      addressLocality: "안산시 단원구",
      addressRegion: "경기도",
      postalCode: "15424",
      addressCountry: "KR",
    },
    foundingDate: "2006",
    sameAs: [],
  };

  return (
    <html lang={locale}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <ScrollToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
