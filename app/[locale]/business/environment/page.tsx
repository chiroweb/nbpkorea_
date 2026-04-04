import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import EnvironmentBusinessPage from "@/components/pages/business/EnvironmentBusinessPage";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  return buildPageMetadata({
    locale: locale as "ko" | "en",
    path: "/business/environment",
    copy: {
      ko: {
        title: "환경설비 사업부 | 엔비피코리아(NBPKOREA)",
        description: "엔비피코리아 환경설비 사업부. RTO, RCO, CTO, TO 등 VOCs·악취 처리 산업용 환경설비를 설계·제작·시공합니다.",
      },
      en: {
        title: "Environmental Systems Division | NBPKOREA",
        description: "NBPKOREA Environmental Systems Division. Industrial VOC and odor treatment systems including RTO, RCO, CTO, and TO.",
      },
    },
  });
}

export default function Page() {
  return <EnvironmentBusinessPage />;
}
