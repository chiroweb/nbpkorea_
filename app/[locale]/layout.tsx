import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import ScrollToTop from "@/components/ScrollToTop";
import { getBaseUrl, getBrandDisplayName, getOrganizationName } from "@/lib/seo";

const BASE_URL = getBaseUrl();

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
    keywords: t.has("keywords") ? t("keywords").split(", ") : undefined,
    openGraph: {
      type: "website",
      siteName: getBrandDisplayName(locale as "ko" | "en"),
      title: t("title"),
      description: t("description"),
      locale: locale === "ko" ? "ko_KR" : "en_US",
      images: [{ url: "https://nbpkoreare.s3.ap-northeast-2.amazonaws.com/images/og-image.png", width: 1200, height: 630, alt: "엔비피코리아 NBPKOREA" }],
    },
    twitter: {
      card: "summary_large_image",
      images: ["https://nbpkoreare.s3.ap-northeast-2.amazonaws.com/images/og-image.png"],
    },
    verification: {
      google: "G0e3Fu9PKHVK1FKNaEeTI4yWVshHWX5ye_hZNpc8BcY",
      other: {
        "naver-site-verification": [
          "660a1318bb81316856f860eed804e95c00af33a2",
          "7a53b48b9c79782fc4bcd662b5b22bbffd093874",
        ],
      },
    },
    manifest: "/manifest.json",
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
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
  const brandName = getOrganizationName(locale as "ko" | "en");
  const brandDisplayName = getBrandDisplayName(locale as "ko" | "en");

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brandName,
    alternateName: ["NBPKOREA", "엔비피코리아", "NBP코리아"],
    url: BASE_URL,
    logo: `${BASE_URL}/icon-512.png`,
    telephone: "031-434-6566",
    email: "nbpkorea@nbpkorea.co.kr",
    address: {
      "@type": "PostalAddress",
      streetAddress: "엠티브이8로 22",
      addressLocality: "안산시 단원구",
      addressRegion: "경기도",
      postalCode: "15424",
      addressCountry: "KR",
    },
    foundingDate: "2006",
    sameAs: [],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: brandDisplayName,
    alternateName: ["NBPKOREA", "엔비피코리아"],
    url: locale === "ko" ? BASE_URL : `${BASE_URL}/en`,
    inLanguage: locale,
  };

  return (
    <html lang={locale}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <ScrollToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
