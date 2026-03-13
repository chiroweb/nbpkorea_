"use client";

import SubpageLayout from "@/components/SubpageLayout";
import ProductNav from "@/components/ProductNav";
import { useInView } from "@/hooks/useInView";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const S3 = "https://nbpkoreare.s3.ap-northeast-2.amazonaws.com";

const specs = [
  { model: "NK-IDGH-40",  capacity: "400,000",   fuel: "LNG/LPG/도시가스", power: "AC 220/380V", type: "열교환 간접식", control: "비례제어" },
  { model: "NK-IDGH-60",  capacity: "600,000",   fuel: "LNG/LPG/도시가스", power: "AC 220/380V", type: "열교환 간접식", control: "비례제어" },
  { model: "NK-IDGH-80",  capacity: "800,000",   fuel: "LNG/LPG/도시가스", power: "AC 220/380V", type: "열교환 간접식", control: "비례제어" },
  { model: "NK-IDGH-100", capacity: "1,000,000", fuel: "LNG/LPG/도시가스", power: "AC 220/380V", type: "열교환 간접식", control: "비례제어" },
];

const features = [
  "열교환기를 통한 청정 간접 가열 방식",
  "연소 배기가스가 공급 공기와 분리 — 청정 공기 유지",
  "도장 부스·클린룸·식품 공정 등 청정 환경 필수 현장에 최적",
  "40만~100만 Kcal/h 4개 모델 라인업",
  "LNG / LPG / 도시가스 모두 적용 가능",
  "비례제어(Modulating Control)로 정밀 온도 조절",
  "스테인리스 열교환기로 내식성·내열성 확보",
  "유해 가스 분리 구조로 작업자 안전 환경 제공",
  "자동점화 및 자동 재점화 안전 시스템 내장",
  "과열 방지·불꽃 감지 안전 장치 기본 탑재",
  "MIDCO International(미국) 기술 협력 파트너십",
  "현장 조건 맞춤형 설계·제작·시공·A/S 원스톱",
];

const applications = [
  "자동차 도장 부스",
  "선박 블록 도장 작업장",
  "식품 가공·건조 공정",
  "클린룸·반도체 공정",
  "제약 생산 시설",
  "인쇄·코팅 공정",
  "농수산물 건조시설",
  "목재·합판 가공",
  "섬유·피혁 건조",
  "정밀 도장 시설",
  "저온 저장·창고",
  "기타 청정 가열 필요 시설",
];

export default function NkIdghPage() {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: specRef, isInView: specInView } = useInView({ threshold: 0.1 });
  const { ref: appRef, isInView: appInView } = useInView({ threshold: 0.1 });

  return (
    <SubpageLayout
      title="NK-IDGH Series"
      subtitle="간접가열식 가스히터 — Indirect Gas Heater"
      breadcrumb={[
        { label: "제품/솔루션", href: "/products" },
        { label: "연소설비", href: "/products?tab=combustion" },
        { label: "NK-IDGH Series", href: "/products/combustion/nk-idgh" },
      ]}
    >
      <ProductNav activeTab="combustion" activeProduct="nk-idgh" />

      {/* Hero */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div
            ref={heroRef}
            className={`transition-all duration-1000 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#C05010] block mb-3">
              Combustion · Indirect Gas Heater
            </span>
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.08em] text-[#2d2a28] mb-6">
              간접가열식 가스히터<br />(NK-IDGH Series)
            </h2>
            <p className="text-sm text-[#8B95A1] leading-[2] mb-6">
              NK-IDGH 시리즈는 열교환기(Heat Exchanger)를 사용하여 연소 가스와 공급 공기를 완전히 분리하는 간접 가열 방식의 산업용 가스히터입니다. 연소 배기가스가 가열 공기와 섞이지 않으므로 도장 부스, 식품 가공, 클린룸, 제약 시설 등 청정한 공기가 반드시 필요한 현장에 최적화되어 있습니다.
            </p>
            <p className="text-sm text-[#8B95A1] leading-[2] mb-8">
              400,000 Kcal/h(NK-IDGH-40)부터 1,000,000 Kcal/h(NK-IDGH-100)까지 4개 모델로 구성되며, 스테인리스 열교환기를 적용하여 내식성과 내열성이 뛰어납니다. LNG·LPG·도시가스를 모두 사용할 수 있으며, 비례제어 방식으로 공급 온도를 정밀하게 관리합니다.
            </p>
            <div className="flex flex-wrap gap-3">
              {["400,000~1,000,000 Kcal/h", "간접 열교환 방식", "청정 공기 공급", "비례제어"].map((tag) => (
                <span key={tag} className="text-[11px] tracking-[0.1em] border border-[#D4DAE2] px-3 py-1 text-[#8B95A1]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-300 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="relative aspect-[4/3] overflow-hidden bg-[#DCE2E8]">
              <Image
                src={`${S3}/images/%EA%B0%84%EC%A0%91%EC%8B%9D/2-100.png`}
                alt="NK-IDGH 간접가열식 가스히터"
                fill className="object-cover" priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 작동 원리 */}
      <section className="px-6 md:px-12 py-12 bg-[#F2F4F7] border-y border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#8B95A1] mb-6">작동 원리 — Indirect Firing Principle</p>
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            {[
              { label: "가스 공급\nLNG/LPG", bg: "#DCE2E8", text: "#2d2a28" },
              { label: "→", isArrow: true },
              { label: "버너 연소\n(연소실 내부)", bg: "#C05010", text: "#fff" },
              { label: "→", isArrow: true },
              { label: "열교환기\n(배기·공기 분리)", bg: "#E8A060", text: "#fff" },
              { label: "→", isArrow: true },
              { label: "청정 열풍\n(Clean Hot Air)", bg: "#2d2a28", text: "#fff" },
            ].map((step, i) =>
              step.isArrow ? (
                <span key={i} className="text-xl text-[#C8D0DA]">→</span>
              ) : (
                <div key={i} className="px-4 py-3 text-xs tracking-[0.08em] text-center whitespace-pre-line"
                  style={{ backgroundColor: step.bg, color: step.text }}>
                  {step.label}
                </div>
              )
            )}
          </div>
          <p className="text-[11px] text-[#8B95A1] mt-4">연소 배기가스는 외부로 배출 — 가열 공기는 청정 상태 유지</p>
        </div>
      </section>

      {/* 특징 */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#8B95A1] mb-8">제품 특징</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-4 border border-[#D4DAE2]">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C05010] flex-shrink-0" />
                <span className="text-xs text-[#8B95A1] leading-[1.8]">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 스펙 테이블 */}
      <section ref={specRef} className="px-6 md:px-12 py-16 bg-[#F2F4F7] border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#8B95A1] mb-2">제품 제원</p>
          <p className="text-xs text-[#8B95A1] mb-8 tracking-[0.05em]">행을 클릭하여 원하는 모델을 선택하세요</p>
          <div className={`overflow-x-auto transition-all duration-1000 ${specInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <table className="w-full text-xs border-collapse min-w-[580px]">
              <thead>
                <tr className="border-b-2 border-[#2d2a28]">
                  {["MODEL", "용량 (Kcal/h)", "연료", "전원", "가열 방식", "제어방식"].map((h) => (
                    <th key={h} className="py-3 px-4 text-left text-[10px] tracking-[0.12em] uppercase text-[#2d2a28] font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {specs.map((row) => (
                  <tr
                    key={row.model}
                    onClick={() => setSelectedModel(selectedModel === row.model ? null : row.model)}
                    className={`cursor-pointer border-b border-[#D4DAE2] transition-colors duration-300 ${
                      selectedModel === row.model ? "bg-[#C05010]/10 border-l-2 border-[#C05010]" : "hover:bg-white"
                    }`}
                  >
                    <td className={`py-3.5 px-4 font-medium tracking-[0.05em] ${selectedModel === row.model ? "text-[#C05010]" : "text-[#2d2a28]"}`}>{row.model}</td>
                    <td className="py-3.5 px-4 text-[#8B95A1]">{row.capacity}</td>
                    <td className="py-3.5 px-4 text-[#8B95A1]">{row.fuel}</td>
                    <td className="py-3.5 px-4 text-[#8B95A1]">{row.power}</td>
                    <td className="py-3.5 px-4 text-[#8B95A1]">{row.type}</td>
                    <td className="py-3.5 px-4 text-[#8B95A1]">{row.control}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[10px] text-[#8B95A1] mt-4">※ 본 제원은 표준 사양 기준이며, 현장 조건에 따라 변경될 수 있습니다.</p>
        </div>
      </section>

      {/* 적용 분야 */}
      <section ref={appRef} className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#8B95A1] mb-8">적용 분야</p>
          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 transition-all duration-1000 ${appInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {applications.map((app) => (
              <div key={app} className="border border-[#D4DAE2] px-3 py-3 text-[11px] text-[#8B95A1] text-center leading-snug hover:border-[#C05010] hover:text-[#C05010] transition-colors">
                {app}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-16 border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg tracking-[0.08em] font-light text-[#2d2a28] mb-2">NK-IDGH 도입을 검토 중이신가요?</h3>
            <p className="text-sm text-[#8B95A1]">청정 공기가 필요한 현장에 최적화된 사양을 제안해 드립니다.</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/products?tab=combustion" className="btn-link group text-[#8B95A1] text-xs tracking-[0.15em] uppercase">
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="rotate-180"><path d="M0 4H15M15 4L11 1M15 4L11 7" stroke="currentColor" strokeWidth="1"/></svg>
              목록으로
            </Link>
            <Link href="/support" className="text-xs tracking-[0.15em] uppercase border border-[#2d2a28] px-6 py-3 hover:bg-[#C05010] hover:border-[#C05010] hover:text-white transition-all duration-300">
              문의하기
            </Link>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
