import type { Metadata } from "next";
import LowNoxBurnerPage from "@/components/pages/products/LowNoxBurnerPage";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale: locale as "ko" | "en",
    path: "/products/burner/low-nox-burner",
    copy: {
      ko: {
        title: "저녹스 버너 | 엔비피코리아(NBPKOREA)",
        description: "NOx 저배출이 중요한 산업 현장을 위한 저녹스 버너. 환경 규제 대응과 고효율 연소를 고려한 엔비피코리아 솔루션.",
      },
      en: {
        title: "Low NOx Burner | NBPKOREA",
        description: "Low-NOx industrial burner designed for cleaner combustion and environmental compliance in demanding applications.",
      },
    },
  });
}

export default function Page() {
  return <LowNoxBurnerPage />;
}
