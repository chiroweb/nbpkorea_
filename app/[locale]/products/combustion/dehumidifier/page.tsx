import type { Metadata } from "next";
import DehumidifierPage from "@/components/pages/products/DehumidifierPage";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale: locale as "ko" | "en",
    path: "/products/combustion/dehumidifier",
    copy: {
      ko: {
        title: "복합식 제습기 | 엔비피코리아(NBPKOREA)",
        description: "냉동 제습과 가스 가열을 결합한 복합식 제습기. 선박 블록, 도장 작업장, 클린룸 등 고습 환경용 엔비피코리아 솔루션.",
      },
      en: {
        title: "Hybrid Dehumidifier | NBPKOREA",
        description: "Hybrid dehumidifier combining cooling dehumidification and gas heating for shipyard, paint booth, and high-humidity industrial environments.",
      },
    },
  });
}

export default function Page() {
  return <DehumidifierPage />;
}
