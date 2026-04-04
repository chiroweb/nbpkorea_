import type { Metadata } from "next";
import DoorHeaterPage from "@/components/pages/products/DoorHeaterPage";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale: locale as "ko" | "en",
    path: "/products/hvac/door-heater",
    copy: {
      ko: {
        title: "도어히터 | 엔비피코리아(NBPKOREA)",
        description: "공장·물류센터·냉동창고 출입구용 도어히터. 외기 유입 차단과 열손실 저감을 위한 엔비피코리아 에어커튼형 가열 솔루션.",
      },
      en: {
        title: "Door Heater | NBPKOREA",
        description: "Door heater for factory, logistics, and cold storage entrances, designed to reduce heat loss and block outdoor air intrusion.",
      },
    },
  });
}

export default function Page() {
  return <DoorHeaterPage />;
}
