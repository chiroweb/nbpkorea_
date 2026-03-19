"use client";

import SubpageLayout from "@/components/SubpageLayout";
import ProductNav from "@/components/ProductNav";
import { useInView } from "@/hooks/useInView";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

const specs = [
  { model: "NKGH-25",  capacity: "250,000",   fuel: "LNG/LPG/도시가스", power: "AC 220/380V", pressure: "50 mmAq", control: "비례제어" },
  { model: "NKGH-40",  capacity: "400,000",   fuel: "LNG/LPG/도시가스", power: "AC 220/380V", pressure: "50 mmAq", control: "비례제어" },
  { model: "NKGH-60",  capacity: "600,000",   fuel: "LNG/LPG/도시가스", power: "AC 220/380V", pressure: "50 mmAq", control: "비례제어" },
  { model: "NKGH-80",  capacity: "800,000",   fuel: "LNG/LPG/도시가스", power: "AC 220/380V", pressure: "50 mmAq", control: "비례제어" },
  { model: "NKGH-100", capacity: "1,000,000", fuel: "LNG/LPG/도시가스", power: "AC 220/380V", pressure: "50 mmAq", control: "비례제어" },
];

const features = [
  "직화식 연소 방식으로 대공간을 신속하게 가열",
  "25만~100만 Kcal/h의 폭넓은 용량 라인업",
  "LNG / LPG / 도시가스 모두 적용 가능",
  "비례제어(Modulating Control)로 정밀 온도 조절",
  "이동식·고정식 설치 옵션 제공",
  "컴팩트한 구조로 협소한 현장에도 적합",
  "저소음 설계 및 내열 강판 적용으로 내구성 확보",
  "자동점화·자동 재점화 안전 시스템 내장",
  "과열 방지 안전 장치 및 불꽃 감지 센서 기본 탑재",
  "조선·자동차·창고·식품·화학 등 광범위한 산업 적용",
  "MIDCO International(미국) 기술 협력 파트너십",
  "현장 조건에 맞는 맞춤형 설계·제작·시공·A/S",
];

const applications = [
  "조선소 블록 도장 작업장",
  "자동차 도장 부스",
  "물류·창고 동계 가온",
  "선박 내부 작업장",
  "대형 공장·제조시설",
  "식품 가공 공장",
  "석유·화학 플랜트",
  "농수산물 건조시설",
  "건설 현장 양생",
  "군사·방산 시설",
  "터널·지하 구조물",
  "기타 대공간 가열",
];

export default function NkghPage() {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: specRef, isInView: specInView } = useInView({ threshold: 0.1 });
  const { ref: appRef, isInView: appInView } = useInView({ threshold: 0.1 });
  const t = useTranslations("products");

  return (
    <SubpageLayout
      title="NKGH Series"
      subtitle={`${t("combustion.nkgh.subtitle")} — Direct Gas Heater`}
      breadcrumb={[
        { label: t("breadcrumb"), href: "/products" },
        { label: t("breadcrumbs.combustion"), href: "/products?tab=combustion" },
        { label: "NKGH Series", href: "/products/combustion/nkgh" },
      ]}
    >
      <ProductNav activeTab="combustion" activeProduct="nkgh" />

      {/* Hero */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div
            ref={heroRef}
            className={`transition-all duration-1000 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <span className="text-[13px] tracking-[0.2em] uppercase text-[#C05010] block mb-3">
              Combustion · Direct Gas Heater
            </span>
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.08em] text-[#2d2a28] mb-6">
              직접가열식 가스히터<br />(NKGH Series)
            </h2>
            <p className="text-sm text-[#8B95A1] leading-[2] mb-6">
              NKGH 시리즈는 NBPKOREA와 미국 MIDCO International의 기술 협력을 바탕으로 개발된 직화식 산업용 가스히터입니다. 연소 버너의 화염이 공기와 직접 접촉하는 직화 방식으로, 대공간을 빠른 시간 내에 가열할 수 있어 조선소 블록 작업장, 창고, 도장 부스 등 광범위한 현장에서 사용됩니다.
            </p>
            <p className="text-sm text-[#8B95A1] leading-[2] mb-8">
              250,000 Kcal/h(NKGH-25)부터 1,000,000 Kcal/h(NKGH-100)까지 총 5개 모델로 구성되며, LNG·LPG·도시가스를 모두 사용할 수 있고 비례제어 방식으로 정밀한 온도 관리가 가능합니다. 이동식·고정식 설치 옵션을 모두 지원합니다.
            </p>
            <div className="flex flex-wrap gap-3">
              {["250,000~1,000,000 Kcal/h", "직화 방식", "LNG/LPG/도시가스", "비례제어"].map((tag) => (
                <span key={tag} className="text-[14px] tracking-[0.1em] border border-[#D4DAE2] px-3 py-1 text-[#8B95A1]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-300 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="relative aspect-[4/3] overflow-hidden bg-[#DCE2E8]">
              <Image
                src={`${S3}/images/%EC%97%B0%EC%86%8C/1p1.png`}
                alt="NKGH 직접가열식 가스히터"
                fill className="object-cover" priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 작동 원리 */}
      <section className="px-6 md:px-12 py-12 bg-[#F2F4F7] border-y border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.2em] uppercase text-[#8B95A1] mb-6">작동 원리 — Direct Firing Principle</p>
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            {[
              { label: "가스 공급\nLNG/LPG", bg: "#DCE2E8", text: "#2d2a28" },
              { label: "→", isArrow: true },
              { label: "버너 연소\n(직화방식)", bg: "#C05010", text: "#fff" },
              { label: "→", isArrow: true },
              { label: "열풍 발생\n(Hot Air)", bg: "#E8A060", text: "#fff" },
              { label: "→", isArrow: true },
              { label: "대공간 가열\n(Space Heating)", bg: "#2d2a28", text: "#fff" },
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
        </div>
      </section>

      {/* 특징 */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.2em] uppercase text-[#8B95A1] mb-8">{t("common.features")}</p>
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
          <p className="text-[13px] tracking-[0.2em] uppercase text-[#8B95A1] mb-2">{t("common.specifications")}</p>
          <p className="text-xs text-[#8B95A1] mb-8 tracking-[0.05em]">{t("common.selectModel")}</p>
          <div className={`overflow-x-auto transition-all duration-1000 ${specInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <table className="w-full text-xs border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b-2 border-[#2d2a28]">
                  {["MODEL", "용량 (Kcal/h)", "연료", "전원", "가스압력", "제어방식"].map((h) => (
                    <th key={h} className="py-3 px-4 text-left text-[13px] tracking-[0.12em] uppercase text-[#2d2a28] font-medium first:text-left">{h}</th>
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
                    <td className="py-3.5 px-4 text-[#8B95A1]">{row.pressure}</td>
                    <td className="py-3.5 px-4 text-[#8B95A1]">{row.control}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[13px] text-[#8B95A1] mt-4">※ {t("common.specNote")}</p>
        </div>
      </section>

      {/* 적용 분야 */}
      <section ref={appRef} className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.2em] uppercase text-[#8B95A1] mb-8">{t("common.applications")}</p>
          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 transition-all duration-1000 ${appInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {applications.map((app) => (
              <div key={app} className="border border-[#D4DAE2] px-3 py-3 text-[14px] text-[#8B95A1] text-center leading-snug hover:border-[#C05010] hover:text-[#C05010] transition-colors">
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
            <h3 className="text-lg tracking-[0.08em] font-light text-[#2d2a28] mb-2">{t("combustion.nkgh.ctaTitle")}</h3>
            <p className="text-sm text-[#8B95A1]">{t("combustion.nkgh.ctaDesc")}</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/products?tab=combustion" className="btn-link group text-[#8B95A1] text-xs tracking-[0.15em] uppercase">
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="rotate-180"><path d="M0 4H15M15 4L11 1M15 4L11 7" stroke="currentColor" strokeWidth="1"/></svg>
              {t("common.backToList")}
            </Link>
            <Link href="/support" className="text-xs tracking-[0.15em] uppercase border border-[#2d2a28] px-6 py-3 hover:bg-[#C05010] hover:border-[#C05010] hover:text-white transition-all duration-300">
              {t("common.contact")}
            </Link>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
