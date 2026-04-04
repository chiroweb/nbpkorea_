import type { Metadata } from "next";
import PaintDryerPage from "@/components/pages/products/PaintDryerPage";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale: locale as "ko" | "en",
    path: "/products/combustion/paint-dryer",
    copy: {
      ko: {
        title: "차량 도장 건조 시스템 | 엔비피코리아(NBPKOREA)",
        description: "자동차 도장 부스용 고효율 열풍 건조 시스템. 고출력, 빠른 승온, 정밀 제어를 지원하는 엔비피코리아 건조 솔루션.",
      },
      en: {
        title: "Vehicle Paint Dryer | NBPKOREA",
        description: "High-efficiency vehicle paint dryer for automotive paint booths with rapid heating and precise temperature control.",
      },
    },
  });
}

export default function Page() {
  return <PaintDryerPage />;
}
