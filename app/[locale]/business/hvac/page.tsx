import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import HvacBusinessPage from "@/components/pages/business/HvacBusinessPage";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  return {
    title: "공조설비 사업부 — NBPKOREA",
    description: "NBPKOREA 공조설비 사업부. 반도체 클린룸, 2차전지 드라이룸, 직화식 공조기 등 정밀 공조 시스템을 설계·제작·시공합니다.",
  };
}

export default function Page() {
  return <HvacBusinessPage />;
}
