import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import CombustionBusinessPage from "@/components/pages/business/CombustionBusinessPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: "연소설비 & 산업용 버너 사업부 — NBPKOREA",
    description:
      "NBPKOREA 연소설비 사업부. 덕트버너, 직화식·간접식 가스히터, 메탈파이버 버너 등 NOx 저배출·고효율 산업용 연소 시스템을 설계·제조합니다.",
    openGraph: {
      title: "연소설비 & 산업용 버너 사업부 — NBPKOREA",
      description:
        "NBPKOREA 연소설비 사업부. 덕트버너, 직화식·간접식 가스히터, 메탈파이버 버너 등 NOx 저배출·고효율 산업용 연소 시스템.",
      locale: locale === "ko" ? "ko_KR" : "en_US",
    },
  };
}

export default function Page() {
  return <CombustionBusinessPage />;
}
