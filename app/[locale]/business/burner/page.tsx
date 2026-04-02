import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import BurnerBusinessPage from "@/components/pages/business/BurnerBusinessPage";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  return {
    title: "산업용 버너 사업부 — NBPKOREA",
    description: "NBPKOREA 산업용 버너 사업부. 덕트버너, FPB, 메탈파이버 버너 등 NOx 저배출·고효율 산업용 버너 라인업.",
  };
}

export default function Page() {
  return <BurnerBusinessPage />;
}
