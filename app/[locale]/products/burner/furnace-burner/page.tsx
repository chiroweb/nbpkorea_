import type { Metadata } from "next";
import FurnaceBurnerPage from "@/components/pages/products/FurnaceBurnerPage";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale: locale as "ko" | "en",
    path: "/products/burner/furnace-burner",
    copy: {
      ko: {
        title: "로용버너 | 엔비피코리아(NBPKOREA)",
        description: "고온 가열과 안정적인 화염 제어가 필요한 산업용 로용버너. 공업로와 열처리 공정에 대응하는 엔비피코리아 버너 솔루션.",
      },
      en: {
        title: "Furnace Burner | NBPKOREA",
        description: "Industrial furnace burner for high-temperature heating and stable flame control in thermal processing applications.",
      },
    },
  });
}

export default function Page() {
  return <FurnaceBurnerPage />;
}
