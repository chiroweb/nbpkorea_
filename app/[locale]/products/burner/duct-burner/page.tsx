import type { Metadata } from "next";
import DuctBurnerPage from "@/components/pages/products/DuctBurnerPage";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale: locale as "ko" | "en",
    path: "/products/burner/duct-burner",
    copy: {
      ko: {
        title: "덕트버너 | 엔비피코리아(NBPKOREA)",
        description: "덕트 내부 직접 설치형 산업용 덕트버너. 메탈 표면연소 방식과 저NOx 설계를 적용한 엔비피코리아 버너 솔루션.",
      },
      en: {
        title: "Duct Burner | NBPKOREA",
        description: "Industrial duct burner installed directly in ducts, featuring metal surface combustion and low-NOx performance.",
      },
    },
  });
}

export default function Page() {
  return <DuctBurnerPage />;
}
