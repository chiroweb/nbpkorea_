import type { Metadata } from "next";
import DirectAhuPage from "@/components/pages/products/DirectAhuPage";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale: locale as "ko" | "en",
    path: "/products/hvac/direct-ahu",
    copy: {
      ko: {
        title: "직화식 공조기 | 엔비피코리아(NBPKOREA)",
        description: "가스를 직접 연소해 공기를 가열하는 직화식 공조기. 빠른 승온, 대풍량 대응, PLC 비례제어가 가능한 엔비피코리아 공조 솔루션.",
      },
      en: {
        title: "Direct-Fired AHU | NBPKOREA",
        description: "Direct-fired AHU for rapid temperature rise, large airflow handling, and modulating control in industrial HVAC applications.",
      },
    },
  });
}

export default function Page() {
  return <DirectAhuPage />;
}
