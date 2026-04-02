import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import EnvironmentBusinessPage from "@/components/pages/business/EnvironmentBusinessPage";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  return {
    title: "환경설비 사업부 — NBPKOREA",
    description: "NBPKOREA 환경설비 사업부. RTO, RCO, CTO, TO 등 VOCs·악취 처리 산업용 환경설비를 설계·제작·시공합니다.",
  };
}

export default function Page() {
  return <EnvironmentBusinessPage />;
}
