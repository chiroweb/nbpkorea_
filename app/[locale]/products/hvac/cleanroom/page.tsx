import type { Metadata } from "next";
import CleanroomPage from "@/components/pages/products/CleanroomPage";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale: locale as "ko" | "en",
    path: "/products/hvac/cleanroom",
    copy: {
      ko: {
        title: "클린룸 공조기 | 엔비피코리아(NBPKOREA)",
        description: "반도체·디스플레이·제약 GMP 공정용 클린룸 공조기. HEPA·ULPA 필터링, 양압 관리, 정밀 온습도 제어를 지원하는 엔비피코리아 공조 솔루션.",
      },
      en: {
        title: "Cleanroom AHU | NBPKOREA",
        description: "Cleanroom AHU for semiconductor, display, and GMP environments with HEPA/ULPA filtration, positive pressure control, and precision temperature-humidity management.",
      },
    },
  });
}

export default function Page() {
  return <CleanroomPage />;
}
