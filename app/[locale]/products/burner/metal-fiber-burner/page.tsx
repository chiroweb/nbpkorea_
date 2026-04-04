import type { Metadata } from "next";
import MetalFiberBurnerPage from "@/components/pages/products/MetalFiberBurnerPage";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale: locale as "ko" | "en",
    path: "/products/burner/metal-fiber-burner",
    copy: {
      ko: {
        title: "메탈버너 | 엔비피코리아(NBPKOREA)",
        description: "균일 연소와 복사열 전달에 강점이 있는 메탈버너. 저NOx와 고효율을 동시에 고려한 엔비피코리아 산업용 버너.",
      },
      en: {
        title: "Metal Fiber Burner | NBPKOREA",
        description: "Metal fiber burner delivering uniform combustion, radiant heat, and high-efficiency industrial heating performance.",
      },
    },
  });
}

export default function Page() {
  return <MetalFiberBurnerPage />;
}
