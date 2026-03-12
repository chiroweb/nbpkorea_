import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NBP KOREA | 산업용 연소/환경 설비 전문기업",
  description: "NBP KOREA는 2006년 설립 이래 산업용 연소장비 및 환경설비 분야의 전문 기업입니다. 금속화이버 버너, 환경설비(CTO, RTO, RCO), 산업용 가스히터 등 고효율 솔루션을 설계·제작·시공합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
