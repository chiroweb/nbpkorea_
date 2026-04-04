import type { Metadata } from "next";
import NkToPage from "@/components/pages/products/NkToPage";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale: locale as "ko" | "en",
    path: "/products/environment/nk-to",
    copy: {
      ko: {
        title: "NK-TO 직접연소산화장치 | 엔비피코리아(NBPKOREA)",
        description: "고농도·고유량 배기가스 처리용 NK-TO 직접연소산화장치. 산업 현장의 VOCs 저감을 위한 엔비피코리아 환경설비 솔루션.",
      },
      en: {
        title: "NK-TO Direct-Fired Thermal Oxidizer | NBPKOREA",
        description: "NK-TO direct-fired thermal oxidizer optimized for high-concentration, high-volume exhaust gas and VOC treatment.",
      },
    },
  });
}

export default function Page() {
  return <NkToPage />;
}
