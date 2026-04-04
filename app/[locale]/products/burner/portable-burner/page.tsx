import type { Metadata } from "next";
import PortableBurnerPage from "@/components/pages/products/PortableBurnerPage";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale: locale as "ko" | "en",
    path: "/products/burner/portable-burner",
    copy: {
      ko: {
        title: "포터블 버너 | 엔비피코리아(NBPKOREA)",
        description: "현장 이동성과 즉시 투입이 필요한 작업용 포터블 버너. 조선·건설·건조 현장에 대응하는 엔비피코리아 이동형 버너.",
      },
      en: {
        title: "Portable Burner | NBPKOREA",
        description: "Portable industrial burner for mobile field heating, drying, and temporary on-site combustion needs.",
      },
    },
  });
}

export default function Page() {
  return <PortableBurnerPage />;
}
