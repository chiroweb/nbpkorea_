import type { Metadata } from "next";
import NkIdghPage from "@/components/pages/products/NkIdghPage";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale: locale as "ko" | "en",
    path: "/products/combustion/nk-idgh",
    copy: {
      ko: {
        title: "NK-IDGH 간접식 가스히터 | 엔비피코리아(NBPKOREA)",
        description: "열교환기를 통한 청정 공기 공급형 간접식 가스히터. 도장 부스, 식품, 클린룸에 적합한 엔비피코리아 산업용 가열 설비.",
      },
      en: {
        title: "NK-IDGH Indirect Gas Heater | NBPKOREA",
        description: "Indirect gas heater using a heat exchanger for clean air supply in paint booths, food processing, and clean environments.",
      },
    },
  });
}

export default function Page() {
  return <NkIdghPage />;
}
