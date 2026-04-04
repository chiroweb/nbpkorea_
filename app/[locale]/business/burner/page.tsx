import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import BurnerBusinessPage from "@/components/pages/business/BurnerBusinessPage";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  return buildPageMetadata({
    locale: locale as "ko" | "en",
    path: "/business/burner",
    copy: {
      ko: {
        title: "산업용 버너 사업부 | 엔비피코리아(NBPKOREA)",
        description: "엔비피코리아 산업용 버너 사업부. 덕트버너, 패키지 버너, 메탈파이버 버너 등 NOx 저배출·고효율 산업용 버너 라인업.",
      },
      en: {
        title: "Industrial Burner Division | NBPKOREA",
        description: "NBPKOREA Industrial Burner Division. Duct burners, package burners, metal fiber burners, and high-efficiency industrial burner solutions.",
      },
    },
  });
}

export default function Page() {
  return <BurnerBusinessPage />;
}
