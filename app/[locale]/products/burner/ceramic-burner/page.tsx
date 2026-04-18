import type { Metadata } from "next";
import CeramicBurnerPage from "@/components/pages/products/CeramicBurnerPage";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale: locale as "ko" | "en",
    path: "/products/burner/ceramic-burner",
    copy: {
      ko: {
        title: "세라믹 버너 | 엔비피코리아(NBPKOREA)",
        description: "내열 세라믹 표면연소 방식의 산업용 버너. 적외선 복사열 극대화와 균일한 열분포로 에너지 효율을 향상시킵니다.",
      },
      en: {
        title: "Ceramic Burner | NBPKOREA",
        description: "Industrial ceramic surface combustion burner that maximizes infrared radiant heat with uniform heat distribution.",
      },
    },
  });
}

export default function Page() {
  return <CeramicBurnerPage />;
}
