import type { Metadata } from "next";
import ValveBurnerPage from "@/components/pages/products/ValveBurnerPage";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale: locale as "ko" | "en",
    path: "/products/burner/valve-burner",
    copy: {
      ko: {
        title: "밸브 버너 | 엔비피코리아(NBPKOREA)",
        description: "정밀 가스 제어와 안정적인 연소 운전을 위한 밸브 버너. 산업용 연소 시스템에 적용되는 엔비피코리아 버너 솔루션.",
      },
      en: {
        title: "Valve Burner | NBPKOREA",
        description: "Valve burner for controlled industrial combustion requiring precise gas regulation and stable operation.",
      },
    },
  });
}

export default function Page() {
  return <ValveBurnerPage />;
}
