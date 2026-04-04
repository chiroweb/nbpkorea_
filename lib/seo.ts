import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.nbpkorea.co.kr";

export type SeoLocale = "ko" | "en";

type LocalizedSeoCopy = {
  ko: {
    title: string;
    description: string;
  };
  en: {
    title: string;
    description: string;
  };
};

type SeoOptions = {
  locale: SeoLocale;
  path: string;
  copy: LocalizedSeoCopy;
  imageUrl?: string;
};

export function getBrandDisplayName(locale: SeoLocale) {
  return locale === "ko" ? "엔비피코리아(NBPKOREA)" : "NBPKOREA";
}

export function getOrganizationName(locale: SeoLocale) {
  return locale === "ko" ? "엔비피코리아" : "NBPKOREA";
}

export function buildPageMetadata({ locale, path, copy, imageUrl }: SeoOptions): Metadata {
  const localized = copy[locale];
  const canonical = locale === "ko" ? path : `/en${path}`;
  const languages = {
    ko: path,
    en: `/en${path}`,
  };

  return {
    title: localized.title,
    description: localized.description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title: localized.title,
      description: localized.description,
      url: canonical,
      locale: locale === "ko" ? "ko_KR" : "en_US",
      images: imageUrl ? [{ url: imageUrl }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export function getBaseUrl() {
  return BASE_URL;
}
