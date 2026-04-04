import type { Metadata } from "next";
import NkCtoPage from "@/components/pages/products/NkCtoPage";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale: locale as "ko" | "en",
    path: "/products/environment/nk-cto",
    copy: {
      ko: {
        title: "NK-CTO 촉매연소산화장치 | 엔비피코리아(NBPKOREA)",
        description: "촉매를 이용해 VOCs와 악취를 저온에서 처리하는 NK-CTO 촉매연소산화장치. 반도체, 도장, 화학 공정용 엔비피코리아 설비.",
      },
      en: {
        title: "NK-CTO Catalytic Thermal Oxidizer | NBPKOREA",
        description: "NK-CTO catalytic thermal oxidizer for low-temperature VOC and odor treatment in semiconductor, coating, and chemical processes.",
      },
    },
  });
}

export default function Page() {
  return <NkCtoPage />;
}
