import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import HvacBusinessPage from "@/components/pages/business/HvacBusinessPage";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  return buildPageMetadata({
    locale: locale as "ko" | "en",
    path: "/business/hvac",
    copy: {
      ko: {
        title: "공조설비 사업부 | 엔비피코리아(NBPKOREA)",
        description: "엔비피코리아 공조설비 사업부. 반도체 클린룸, 2차전지 드라이룸, 직화식 공조기 등 정밀 공조 시스템을 설계·제작·시공합니다.",
      },
      en: {
        title: "HVAC Systems Division | NBPKOREA",
        description: "NBPKOREA HVAC Systems Division. Precision air handling systems for cleanrooms, dry rooms, direct-fired AHUs, and industrial HVAC applications.",
      },
    },
  });
}

export default function Page() {
  return <HvacBusinessPage />;
}
