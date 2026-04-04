import type { Metadata } from "next";
import OvenBurnerPage from "@/components/pages/products/OvenBurnerPage";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale: locale as "ko" | "en",
    path: "/products/burner/oven-burner",
    copy: {
      ko: {
        title: "오븐버너 | 엔비피코리아(NBPKOREA)",
        description: "오븐·건조·열처리 공정에 적합한 산업용 오븐버너. 안정적 온도 제어와 공정 대응성을 고려한 엔비피코리아 버너 솔루션.",
      },
      en: {
        title: "Oven Burner | NBPKOREA",
        description: "Industrial oven burner for drying, curing, and thermal treatment processes requiring stable heat control.",
      },
    },
  });
}

export default function Page() {
  return <OvenBurnerPage />;
}
