import type { Metadata } from "next";
import NkghPage from "@/components/pages/products/NkghPage";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale: locale as "ko" | "en",
    path: "/products/combustion/nkgh",
    copy: {
      ko: {
        title: "NKGH 직화식 가스히터 | 엔비피코리아(NBPKOREA)",
        description: "NKGH 시리즈 직화식 가스히터. 조선소, 창고, 공장 등 대공간 가열에 적합한 엔비피코리아 산업용 가스히터 라인업.",
      },
      en: {
        title: "NKGH Direct-Fired Gas Heater | NBPKOREA",
        description: "NKGH series direct-fired gas heaters for shipyards, warehouses, and large industrial spaces requiring rapid heating response.",
      },
    },
  });
}

export default function Page() {
  return <NkghPage />;
}
