import type { Metadata } from "next";
import NkRtoPage from "@/components/pages/products/NkRtoPage";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale: locale as "ko" | "en",
    path: "/products/environment/nk-rto",
    copy: {
      ko: {
        title: "NK-RTO 축열식연소산화장치 | 엔비피코리아(NBPKOREA)",
        description: "VOCs 처리와 열회수를 동시에 고려한 NK-RTO 축열식연소산화장치. 에너지 절감형 산업용 환경설비를 제공하는 엔비피코리아 솔루션.",
      },
      en: {
        title: "NK-RTO Regenerative Thermal Oxidizer | NBPKOREA",
        description: "NK-RTO regenerative thermal oxidizer for VOC treatment with regenerative heat recovery and energy-efficient operation.",
      },
    },
  });
}

export default function Page() {
  return <NkRtoPage />;
}
