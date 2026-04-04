import type { Metadata } from "next";
import FpbBurnerPage from "@/components/pages/products/FpbBurnerPage";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale: locale as "ko" | "en",
    path: "/products/burner/fpb-burner",
    copy: {
      ko: {
        title: "패키지 버너 | 엔비피코리아(NBPKOREA)",
        description: "가스, 저녹스, 이중연료 등 다양한 라인업의 패키지 버너. 현장 조건별 맞춤 연소 솔루션을 제공하는 엔비피코리아 버너 제품군.",
      },
      en: {
        title: "Package Burner | NBPKOREA",
        description: "Package burner lineup covering gas, low-NOx, and dual-fuel industrial combustion applications.",
      },
    },
  });
}

export default function Page() {
  return <FpbBurnerPage />;
}
