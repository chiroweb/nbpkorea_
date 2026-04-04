import type { Metadata } from "next";
import DryRoomPage from "@/components/pages/products/DryRoomPage";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale: locale as "ko" | "en",
    path: "/products/hvac/dry-room",
    copy: {
      ko: {
        title: "드라이룸 공조기 | 엔비피코리아(NBPKOREA)",
        description: "2차전지 제조 공정용 드라이룸 공조기. 노점온도 -40℃ 이하 극저습 환경과 정밀 습도 제어를 지원하는 엔비피코리아 공조 시스템.",
      },
      en: {
        title: "Dry Room AHU | NBPKOREA",
        description: "Dry Room AHU for secondary battery manufacturing, designed for ultra-low humidity operation and dew point control below -40°C.",
      },
    },
  });
}

export default function Page() {
  return <DryRoomPage />;
}
