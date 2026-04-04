import type { Metadata } from "next";
import HvacDehumidifierPage from "@/components/pages/products/HvacDehumidifierPage";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale: locale as "ko" | "en",
    path: "/products/hvac/dehumidifier",
    copy: {
      ko: {
        title: "복합식 제습기 | 엔비피코리아(NBPKOREA)",
        description: "냉각 제습과 가스 가열을 결합한 복합식 제습기. 4계절 복합 운전과 고습 환경 대응을 지원하는 엔비피코리아 제습 솔루션.",
      },
      en: {
        title: "Combined Dehumidifier | NBPKOREA",
        description: "Combined dehumidifier integrating cooling dehumidification and gas reheating for high-humidity industrial environments.",
      },
    },
  });
}

export default function Page() {
  return <HvacDehumidifierPage />;
}
