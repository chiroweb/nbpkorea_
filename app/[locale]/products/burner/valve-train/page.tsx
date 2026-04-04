import type { Metadata } from "next";
import ValveTrainPage from "@/components/pages/products/ValveTrainPage";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale: locale as "ko" | "en",
    path: "/products/burner/valve-train",
    copy: {
      ko: {
        title: "밸브트레인 | 엔비피코리아(NBPKOREA)",
        description: "산업용 버너 및 가스 연소 시스템용 밸브트레인. 가스 제어와 안전 구성에 필요한 엔비피코리아 부품 솔루션.",
      },
      en: {
        title: "Valve Train | NBPKOREA",
        description: "Industrial valve train for burner and gas combustion systems, supporting gas control and safety configuration.",
      },
    },
  });
}

export default function Page() {
  return <ValveTrainPage />;
}
