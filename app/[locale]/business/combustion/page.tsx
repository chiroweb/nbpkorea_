import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import CombustionBusinessPage from "@/components/pages/business/CombustionBusinessPage";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  return buildPageMetadata({
    locale: locale as "ko" | "en",
    path: "/business/combustion",
    copy: {
      ko: {
        title: "연소설비 사업부 | 엔비피코리아(NBPKOREA)",
        description: "엔비피코리아 연소설비 사업부. 직화식·간접식 가스히터, 복합식 제습기, 차량 도장 건조기 등 고효율 산업용 연소 시스템을 설계·제조합니다.",
      },
      en: {
        title: "Combustion Systems Division | NBPKOREA",
        description: "NBPKOREA Combustion Systems Division. Direct-fired and indirect gas heaters, hybrid dehumidifiers, and industrial combustion systems for demanding sites.",
      },
    },
  });
}

export default function Page() {
  return <CombustionBusinessPage />;
}
