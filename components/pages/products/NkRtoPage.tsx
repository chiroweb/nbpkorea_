"use client";

import SubpageLayout from "@/components/SubpageLayout";
import ProductNav from "@/components/ProductNav";
import { useInView } from "@/hooks/useInView";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import FloatingCaseLink from "@/components/FloatingCaseLink";


const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

const specs = [
  { model: "NKRTO-050", airflow: 50, heatInput: "250,000", power: 22, length: "4,060", width: "2,300", height: "3,700" },
  { model: "NKRTO-100", airflow: 100, heatInput: "550,000", power: 22, length: "3,400", width: "1,860", height: "3,540" },
  { model: "NKRTO-150", airflow: 150, heatInput: "550,000", power: 37, length: "3,400", width: "1,860", height: "3,540" },
  { model: "NKRTO-200", airflow: 200, heatInput: "870,000", power: 45, length: "4,000", width: "2,400", height: "3,540" },
  { model: "NKRTO-250", airflow: 250, heatInput: "870,000", power: 55, length: "4,000", width: "2,400", height: "3,540" },
  { model: "NKRTO-300", airflow: 300, heatInput: "870,000", power: 75, length: "4,500", width: "2,400", height: "3,540" },
  { model: "NKRTO-400", airflow: 400, heatInput: "1,200,000", power: 90, length: "4,700", width: "2,540", height: "3,540" },
];

const content = {
  en: {
    heroTitle: "Regenerative Thermal Oxidizer\n(RTO)",
    heroDesc1: "RTO is a direct combustion energy-saving incineration system that uses regenerative media as a heat recovery medium. This technology removes organic solvents and organic odors while recovering the generated combustion heat through regenerative media, preventing air pollution and enabling the recovered waste heat to be used as a heat source for production processes.",
    heroDesc2: "Process gas containing VOCs passes through preheated ceramic regenerative media and is decomposed and oxidized at high temperatures around 850°C. During this process, VOCs generate combustion heat which is stored in the regenerative media. It achieves a maximum treatment efficiency of over 99%.",
    heroTags: ["Treatment Efficiency 99%+", "Heat Recovery 95%+", "Combustion Temp 700~850°C", "High-Volume Treatment"],
    applications: [
      "Semiconductors, Displays, LCD", "Automotive, Shipbuilding, Steel, Plants", "Petroleum, Chemical Manufacturing",
      "Painting Processes, Paint Manufacturing", "Water/Sewage, Sewage Sludge, Odor Treatment", "Printing, Ink Manufacturing",
      "Plastics, Synthetic Rubber Resin Manufacturing", "Plywood and Furniture Factories", "Food Waste, Animal Byproduct Sludge",
      "Food Processing, Biotech", "Pharmaceutical Manufacturing", "Textiles, Leather, Wood Manufacturing",
      "New Materials Manufacturing/Processing", "Metal, Molds, Castings, Wire Manufacturing", "Other VOCs and Odor-emitting Sites",
    ],
    mechanismLabel: "High-temp Oxidation\n700~850°C",
    features: [
      "Perfect smokeless treatment efficiency (99%)",
      "Maximum heat recovery rate of 95% or more",
      "Minimized NOx generation through low-temperature oxidation",
      "Minimized installation space through complete design technology",
      "ICT-based touch panel technology (touch screen)",
      "Gas cost savings possible based on soft switching flow",
      "MIDCO U.S.A & ECOSTAR TURKEY",
      "Inverter switching system applied according to capacity changes",
      "Vertical inspection for maintenance safety and continuity",
      "Various layouts possible depending on site installation conditions",
      "Optimized internal material processing through design technology",
      "Eco-friendly equipment with no secondary pollutants",
    ],
    floatingLabel: "View RTO Case Studies",
    imgAlt: "NK-RTO Regenerative Thermal Oxidizer",
  },
  ko: {
    heroTitle: "축열식연소산화장치\n(RTO)",
    heroDesc1: "RTO는 축열재를 열회수 매체로 사용하는 직접연소식 에너지 절감형 소각로 시스템입니다. 이 기술은 유기용제나 유기성 악취를 제거함과 동시에 발생하는 연소열을 축열재로 회수하여 대기오염을 방지하고 폐열을 생산공정의 열원으로 사용할 수 있는 시스템입니다.",
    heroDesc2: "VOCs 물질이 포함된 처리가스가 예열되어 있는 세라믹 축열재를 거쳐 850°C 내외의 고온 분위기에서 분해, 산화처리되고 VOCs는 이 과정에서 연소열을 생성해 축열재로 생성된 연소열을 축열하는 방식입니다. 최대 99% 이상의 처리효율을 가집니다.",
    heroTags: ["처리효율 99%+", "열회수율 95%+", "연소온도 700~850°C", "대풍량 처리"],
    applications: [
      "반도체, 디스플레이, LCD", "자동차, 조선, 철강, 플랜트", "석유, 화학 제품 제조",
      "도장 공정, 도료 제조", "상·하수, 분뇨, 악취 처리", "인쇄, 잉크 제조",
      "플라스틱, 합성 고무 수지 제조", "합판 및 가구 공장", "음식물, 동물성 폐기물 슬러지",
      "식품가공, 바이오산업", "의약품 제조", "섬유, 피혁, 목재 제조",
      "신소재 제조, 가공", "금속, 금형, 주물, 전선 제조", "기타 VOCs, 악취 발생 사업장",
    ],
    mechanismLabel: "고온산화\n700~850°C",
    features: [
      "완벽한 발연 없이 소지 처리 효율 (99%)",
      "최대 95% 이상 높은 열 회수율",
      "저온 산화 방식으로 NOx 발생량 최소화",
      "완벽한 설계가 기술력으로 설치공간 최소화",
      "ICT 기반 터치 패널 기술 채용 (터치 스크린)",
      "소프트 전환 흐름을 바탕으로 가스비 절감 가능",
      "MIDCO U.S.A & ECOSTAR TURKEY",
      "용량별 변화에 따른 인버터 전환 시스템 적용",
      "유지 안전성과 및 지속성을 위한 점검의 수직",
      "현장 설치 여건에 따라 다양한 레이아웃 가능",
      "내밀한 설계가 기술력으로 내장재 처리를 최적",
      "2차 오염물질이 발생하지 않는 친환경 설비",
    ],
    floatingLabel: "RTO 적용 사례 보러가기",
    imgAlt: "NK-RTO 축열식연소산화장치",
  },
};

export default function NkRtoPage() {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: specRef, isInView: specInView } = useInView({ threshold: 0.1 });
  const { ref: appRef, isInView: appInView } = useInView({ threshold: 0.1 });
  const t = useTranslations("products");
  const locale = useLocale() as "en" | "ko";
  const c = content[locale] ?? content.ko;

  return (
    <SubpageLayout
      title="NK-RTO"
      subtitle={`${t("environment.nkRto.subtitle")} — Regenerative Thermal Oxidizer`}
      breadcrumb={[
        { label: t("breadcrumb"), href: "/products" },
        { label: t("breadcrumbs.environment"), href: "/products" },
        { label: "NK-RTO", href: "/products/environment/nk-rto" },
      ]}
    >
      <FloatingCaseLink category="environment" tag="RTO" label={c.floatingLabel} />
      {/* 공통 제품 네비게이션 */}
      <ProductNav activeTab="environment" activeProduct="nk-rto" />

      {/* Hero */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div
            ref={heroRef}
            className={`transition-all duration-1000 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <span className="text-[13px] tracking-[0.04em] uppercase text-[#C05010] block mb-3">
              Environment · Regenerative Thermal Oxidizer
            </span>
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.08em] text-[#2d2a28] mb-6 whitespace-pre-line">
              {c.heroTitle}
            </h2>
            <p className="text-sm text-[#5C6470] leading-relaxed mb-6">
              {c.heroDesc1}
            </p>
            <p className="text-sm text-[#5C6470] leading-relaxed mb-8">
              {c.heroDesc2}
            </p>
            <div className="flex flex-wrap gap-3">
              {c.heroTags.map((tag) => (
                <span key={tag} className="text-[14px] tracking-[0.04em] border border-[#D4DAE2] px-3 py-1 text-[#5C6470]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div
            className={`transition-all duration-1000 delay-300 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-white border border-[#C05010]/30">
              <Image
                src={`${S3}/images/%ED%99%98%EA%B2%BD%EC%82%AC%EC%97%85%EB%B6%80/Business%20Area/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EC%9A%A9%20RTO%20%EB%A0%8C%EB%8D%94%EB%A7%81-nowatermark.jpg`}
                alt={c.imgAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 적용 분야 — 히어로 바로 아래 */}
      <section ref={appRef} className="px-6 md:px-12 py-12 border-t border-[#D4DAE2] bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-6">{t("common.applications")}</p>
          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 transition-all duration-1000 ${appInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {c.applications.map((app) => (
              <Link key={app} href={`/performance?tag=${encodeURIComponent(app)}&cat=environment`} className="text-[14px] tracking-[0.04em] border border-[#D4DAE2] px-3 py-2 text-[#5C6470] hover:border-[#C05010] hover:text-[#C05010] hover:bg-[#C05010]/5 transition-all duration-200">

                {app}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mechanism */}
      <section className="px-6 md:px-12 py-12 bg-white border-y border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-6">Mechanism</p>
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            {[
              { label: "VOCs + O₂", bg: "#DCE2E8", text: "#2d2a28" },
              { label: "→", isArrow: true },
              { label: c.mechanismLabel, bg: "#C05010", text: "#fff" },
              { label: "→", isArrow: true },
              { label: "CO₂ + H₂O", bg: "#E8A060", text: "#fff" },
              { label: "+", isArrow: true },
              { label: "Heat of Reaction", bg: "#C05010", text: "#fff" },
            ].map((step, i) => (
              step.isArrow ? (
                <span key={i} className="text-xl text-[#C8D0DA]">→</span>
              ) : (
                <div
                  key={i}
                  className="px-4 py-3 text-xs tracking-[0.08em] text-center whitespace-pre-line"
                  style={{ backgroundColor: step.bg, color: step.text }}
                >
                  {step.label}
                </div>
              )
            ))}
          </div>
          <p className="text-[14px] text-[#5C6470] mt-4 tracking-[0.05em]">{t("common.heatRecovery")} (Heat Recovery via Ceramic Regenerator)</p>
          <div className="mt-10 flex justify-start">
            <div className="relative w-full max-w-4xl overflow-hidden border border-[#D4DAE2] bg-white">
              <Image
                src="https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com/images/rto.png"
                alt="NK-RTO mechanism diagram"
                width={816}
                height={600}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-8">{t("common.features")}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-4 border border-[#D4DAE2]">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C05010] flex-shrink-0" />
                <span className="text-sm text-[#3D4450] leading-relaxed tracking-[0.02em]">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spec Table */}
      <section ref={specRef} className="px-6 md:px-12 py-16 bg-[#FAFAFA] border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-2">{t("common.specifications")}</p>
          <p className="text-xs text-[#5C6470] mb-8 tracking-[0.05em]">{t("common.selectModel")}</p>
          <div className={`overflow-x-auto transition-all duration-1000 ${specInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b-2 border-[#2d2a28]">
                  <th className="text-left py-3 px-4 text-[13px] tracking-[0.06em] uppercase text-[#2d2a28] font-medium">MODEL</th>
                  <th className="text-center py-3 px-4 text-[13px] tracking-[0.06em] uppercase text-[#2d2a28] font-medium">Airflow<br />(Nm³/min)</th>
                  <th className="text-center py-3 px-4 text-[13px] tracking-[0.06em] uppercase text-[#2d2a28] font-medium">Heat Input<br />(Kcal/hr)</th>
                  <th className="text-center py-3 px-4 text-[13px] tracking-[0.06em] uppercase text-[#2d2a28] font-medium">Power<br />(kW)</th>
                  <th className="text-center py-3 px-4 text-[13px] tracking-[0.06em] uppercase text-[#2d2a28] font-medium">Length<br />(mm)</th>
                  <th className="text-center py-3 px-4 text-[13px] tracking-[0.06em] uppercase text-[#2d2a28] font-medium">Width<br />(mm)</th>
                  <th className="text-center py-3 px-4 text-[13px] tracking-[0.06em] uppercase text-[#2d2a28] font-medium">Height<br />(mm)</th>
                </tr>
              </thead>
              <tbody>
                {specs.map((row) => (
                  <tr
                    key={row.model}
                    onClick={() => setSelectedModel(selectedModel === row.model ? null : row.model)}
                    className={`cursor-pointer border-b border-[#D4DAE2] transition-colors duration-300 ${
                      selectedModel === row.model
                        ? "bg-[#C05010]/10 border-l-2 border-[#C05010]"
                        : "hover:bg-white"
                    }`}
                  >
                    <td className={`py-3.5 px-4 font-medium tracking-[0.05em] ${selectedModel === row.model ? "text-[#C05010]" : "text-[#2d2a28]"}`}>
                      {row.model}
                    </td>
                    <td className="py-3.5 px-4 text-center text-[#5C6470]">{row.airflow}</td>
                    <td className="py-3.5 px-4 text-center text-[#5C6470]">{row.heatInput}</td>
                    <td className="py-3.5 px-4 text-center text-[#5C6470]">{row.power}</td>
                    <td className="py-3.5 px-4 text-center text-[#5C6470]">{row.length}</td>
                    <td className="py-3.5 px-4 text-center text-[#5C6470]">{row.width}</td>
                    <td className="py-3.5 px-4 text-center text-[#5C6470]">{row.height}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[13px] text-[#5C6470] mt-4 tracking-[0.03em]">
            ※ {t("common.specNote")}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-16 border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg tracking-[0.08em] font-light text-[#2d2a28] mb-2">{t("environment.nkRto.ctaTitle")}</h3>
            <p className="text-sm text-[#5C6470]">{t("environment.nkRto.ctaDesc")}</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/products" className="btn-link group text-[#5C6470] text-xs tracking-[0.06em] uppercase">
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="rotate-180">
                <path d="M0 4H15M15 4L11 1M15 4L11 7" stroke="currentColor" strokeWidth="1"/>
              </svg>
              {t("common.backToList")}
            </Link>
            <Link
              href="/support"
              className="text-xs tracking-[0.06em] uppercase border border-[#2d2a28] px-6 py-3 hover:bg-[#C05010] hover:border-[#C05010] hover:text-white transition-all duration-300"
            >
              {t("common.contact")}
            </Link>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
