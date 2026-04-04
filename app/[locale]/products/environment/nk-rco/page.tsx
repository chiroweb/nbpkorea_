import type { Metadata } from "next";
import NkRcoPage from "@/components/pages/products/NkRcoPage";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale: locale as "ko" | "en",
    path: "/products/environment/nk-rco",
    copy: {
      ko: {
        title: "NK-RCO 축열촉매산화장치 | 엔비피코리아(NBPKOREA)",
        description: "축열식과 촉매산화를 결합한 NK-RCO 고효율 VOCs 처리 시스템. 저온 운전과 운영비 절감을 지원하는 엔비피코리아 환경설비.",
      },
      en: {
        title: "NK-RCO Regenerative Catalytic Oxidizer | NBPKOREA",
        description: "NK-RCO regenerative catalytic oxidizer combining heat recovery and catalytic treatment for efficient VOC abatement.",
      },
    },
  });
}

export default function Page() {
  return <NkRcoPage />;
}
