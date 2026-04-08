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

const content = {
  en: {
    title: "Paint Dryer System",
    heroTitle: "Paint Dryer System",
    heroDesc1: "NBPKOREA's paint dryer system is a high-output hot air drying system specialized for automotive paint booths and ship paint lines. With a high output of 1,250,000 Kcal/h, it rapidly heats large paint booths to the target temperature and maintains uniform booth temperature through PLC modulating control.",
    heroDesc2: "Through uniform hot air distribution duct design, it minimizes temperature variation on painted surfaces, simultaneously improving paint quality and productivity. It has a proven delivery track record with KIA, BMW, and Audi partner paint lines, and is compatible with LNG, LPG, and city gas.",
    heroTags: ["1,250,000 Kcal/h", "Fixed Installation", "PLC Modulating Control", "Uniform Temperature Distribution"],
    applications: [
      "Automotive Paint Booth",
      "Ship Block Painting",
      "Construction Equipment Painting",
      "Motorcycle & EV Painting",
      "Aircraft Parts Painting",
      "Steel Structure Anti-Corrosion Painting",
      "Industrial Machinery Surface Treatment",
      "Home Appliance Paint Line",
      "Plastic Bumper Painting",
      "Building Material Coating Process",
      "KIA/BMW Partners",
      "Other Precision Paint Facilities",
    ],
    processSteps: [
      { label: "Gas Supply\nLNG/LPG", bg: "#DCE2E8", text: "#2d2a28" },
      { label: "→", isArrow: true },
      { label: "Burner Combustion\n(High Output)", bg: "#C05010", text: "#fff" },
      { label: "→", isArrow: true },
      { label: "Hot Air Generation\n& Distribution Duct", bg: "#E8A060", text: "#fff" },
      { label: "→", isArrow: true },
      { label: "Paint Booth\nUniform Drying", bg: "#2d2a28", text: "#fff" },
    ],
    processNote: "PLC modulating control — Uniform booth temperature maintenance / Automatic overheat shutdown",
    features: [
      "Hot air drying system optimized for automotive paint booths",
      "Uniform temperature distribution design minimizes paint quality variation",
      "PLC modulating control for precise booth temperature maintenance",
      "1,250,000 Kcal/h high output — supports large paint booths",
      "Compatible with LNG / LPG / city gas",
      "Fixed installation — integrated with paint line configuration",
      "Uniform hot air distribution duct design ensures surface drying uniformity",
      "Built-in overheat protection and automatic shutdown safety device",
      "External booth installation maintains clean internal environment",
      "Delivery track record with KIA, BMW, and Audi partners",
      "Applicable to automotive, ship, and construction equipment paint lines",
      "One-stop custom design, installation, and maintenance service",
    ],
    specHeaders: ["Category", "Capacity (Kcal/h)", "Fuel", "Installation Type", "Control Method"],
    specs: [
      { model: "Paint Dryer", capacity: "1,250,000", fuel: "LNG/LPG", install: "Fixed Type", control: "PLC Modulating" },
    ],
    specNote: "Capacity and specifications are adjusted according to paint booth size and site conditions.",
    deliveryTitle: "Key Delivery Track Record",
    deliveryItems: ["KIA Partner Paint Line", "BMW Partner Paint Booth", "Audi Partner Paint Facility", "Automotive Parts Drying System"],
    floatingLabel: "View Paint Dryer Case Studies",
    imgAlt: "Paint Dryer System",
  },
  ko: {
    title: "차량 도장 건조기",
    heroTitle: "차량 도장 건조기",
    heroDesc1: "엔비피코리아 차량 도장 건조기는 자동차 도장 부스 및 선박 도장 라인에 특화된 고출력 열풍 건조 시스템입니다. 1,250,000 Kcal/h의 고출력으로 대형 도장 부스를 단시간 내에 목표 온도로 승온하고, PLC 비례제어 방식으로 부스 내 온도를 균일하게 유지합니다.",
    heroDesc2: "열풍 균등 분배 덕트 설계를 통해 도장 표면의 온도 편차를 최소화하여 도장 품질과 생산성을 동시에 향상시킵니다. KIA, BMW, 아우디 협력사 도장 라인에 납품된 실적을 보유하고 있으며, LNG·LPG·도시가스를 모두 사용할 수 있습니다.",
    heroTags: ["1,250,000 Kcal/h", "고정형 설치", "PLC 비례제어", "균일 온도 분포"],
    applications: [
      "자동차 도장 부스",
      "선박 블록 도장",
      "건설기계 도장",
      "이륜차·전기차 도장",
      "항공기 부품 도장",
      "철구조물 방청 도장",
      "산업 기계 표면 처리",
      "가전제품 도장 라인",
      "플라스틱 범퍼 도장",
      "건자재 코팅 공정",
      "KIA·BMW 협력사",
      "기타 정밀 도장 시설",
    ],
    processSteps: [
      { label: "가스 공급\nLNG/LPG", bg: "#DCE2E8", text: "#2d2a28" },
      { label: "→", isArrow: true },
      { label: "버너 연소\n(고출력)", bg: "#C05010", text: "#fff" },
      { label: "→", isArrow: true },
      { label: "열풍 생성\n& 분배 덕트", bg: "#E8A060", text: "#fff" },
      { label: "→", isArrow: true },
      { label: "도장 부스\n균일 건조", bg: "#2d2a28", text: "#fff" },
    ],
    processNote: "PLC 비례제어 — 부스 내 온도 균일 유지 / 과열 방지 자동 차단",
    features: [
      "자동차 도장 부스에 최적화된 열풍 건조 시스템",
      "균일한 온도 분포 설계로 도장 품질 편차 최소화",
      "PLC 비례제어 방식으로 부스 내 온도 정밀 유지",
      "1,250,000 Kcal/h 고출력 — 대형 도장 부스 대응",
      "LNG / LPG / 도시가스 모두 적용 가능",
      "고정형 설치 — 도장 라인 통합 구성 가능",
      "열풍 균등 분배 덕트 설계로 표면 건조 균일성 확보",
      "과열 방지 및 자동 차단 안전 장치 내장",
      "도장 부스 외부 설치로 내부 청정 환경 유지",
      "KIA, BMW, 아우디 협력사 납품 실적 보유",
      "자동차·선박·건설기계 도장 라인 모두 적용",
      "현장 맞춤형 설계·시공·유지보수 원스톱 서비스",
    ],
    specHeaders: ["구분", "용량 (Kcal/h)", "연료", "설치 방식", "제어방식"],
    specs: [
      { model: "차량 도장 건조기", capacity: "1,250,000", fuel: "LNG/LPG", install: "고정형 (Fixed Type)", control: "PLC 비례제어" },
    ],
    specNote: "도장 부스 규모와 현장 조건에 따라 용량 및 사양이 조정됩니다.",
    deliveryTitle: "주요 납품 실적",
    deliveryItems: ["KIA 협력사 도장 라인", "BMW 협력사 도장 부스", "아우디 협력사 도장 시설", "자동차 부품사 건조 시스템"],
    floatingLabel: "도장건조기 적용 사례 보러가기",
    imgAlt: "차량 도장 건조기",
  },
};

export default function PaintDryerPage() {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: specRef, isInView: specInView } = useInView({ threshold: 0.1 });
  const { ref: appRef, isInView: appInView } = useInView({ threshold: 0.1 });
  const t = useTranslations("products");
  const locale = useLocale() as "en" | "ko";
  const c = content[locale] ?? content.ko;

  return (
    <SubpageLayout
      title={t("nav.paintDryer")}
      subtitle={`Paint Dryer System — ${t("combustion.paintDryer.subtitle")}`}
      breadcrumb={[
        { label: t("breadcrumb"), href: "/products" },
        { label: t("breadcrumbs.combustion"), href: "/products?tab=combustion" },
        { label: t("nav.paintDryer"), href: "/products/combustion/paint-dryer" },
      ]}
    >
      <FloatingCaseLink category="combustion" tag={locale === "en" ? "Paint Dryer" : "도장건조기"} label={c.floatingLabel} />
      <ProductNav activeTab="combustion" activeProduct="paint-dryer" />

      {/* Hero */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div
            ref={heroRef}
            className={`transition-all duration-1000 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <span className="text-[13px] tracking-[0.04em] uppercase text-[#C05010] block mb-3">
              Combustion · Paint Dryer System
            </span>
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.08em] text-[#2d2a28] mb-6">
              {c.heroTitle}<br />(Paint Dryer System)
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
          <div className={`transition-all duration-1000 delay-300 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="relative aspect-[4/3] overflow-hidden bg-white border border-[#C05010]/30">
              <Image
                src={`${S3}/images/forcar.png`}
                alt={c.imgAlt}
                fill className="object-cover" priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 적용 분야 */}
      <section ref={appRef} className="px-6 md:px-12 py-12 border-t border-[#D4DAE2] bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-6">{t("common.applications")}</p>
          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 transition-all duration-1000 ${appInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {c.applications.map((app) => (
              <Link key={app} href={`/performance?tag=${encodeURIComponent(app)}&cat=combustion`} className="text-[14px] tracking-[0.04em] border border-[#D4DAE2] px-3 py-2 text-[#5C6470] hover:border-[#C05010] hover:text-[#C05010] hover:bg-[#C05010]/5 transition-all duration-200">

                {app}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 시스템 흐름 */}
      <section className="px-6 md:px-12 py-12 bg-[#FAFAFA] border-y border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-6">System Flow</p>
          <div className="flex flex-wrap items-center gap-3">
            {c.processSteps.map((step, i) =>
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
          <p className="text-[14px] text-[#5C6470] mt-4">{c.processNote}</p>
        </div>
      </section>

      {/* 특징 */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-8">{t("common.features")}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-4 border border-[#D4DAE2]">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C05010] flex-shrink-0" />
                <span className="text-sm text-[#3D4450] leading-relaxed">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 스펙 테이블 */}
      <section ref={specRef} className="px-6 md:px-12 py-16 bg-[#FAFAFA] border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-2">{t("common.specifications")}</p>
          <p className="text-xs text-[#5C6470] mb-8 tracking-[0.05em]">{t("common.selectModel")}</p>
          <div className={`overflow-x-auto transition-all duration-1000 ${specInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <table className="w-full text-sm border-collapse min-w-[480px]">
              <thead>
                <tr className="border-b-2 border-[#2d2a28]">
                  {c.specHeaders.map((h) => (
                    <th key={h} className="py-3 px-4 text-left text-[13px] tracking-[0.12em] uppercase text-[#2d2a28] font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.specs.map((row) => (
                  <tr
                    key={row.model}
                    onClick={() => setSelectedModel(selectedModel === row.model ? null : row.model)}
                    className={`cursor-pointer border-b border-[#D4DAE2] transition-colors duration-300 ${
                      selectedModel === row.model ? "bg-[#C05010]/10 border-l-2 border-[#C05010]" : "hover:bg-white"
                    }`}
                  >
                    <td className={`py-3.5 px-4 font-medium tracking-[0.05em] ${selectedModel === row.model ? "text-[#C05010]" : "text-[#2d2a28]"}`}>{row.model}</td>
                    <td className="py-3.5 px-4 text-[#5C6470]">{row.capacity}</td>
                    <td className="py-3.5 px-4 text-[#5C6470]">{row.fuel}</td>
                    <td className="py-3.5 px-4 text-[#5C6470]">{row.install}</td>
                    <td className="py-3.5 px-4 text-[#5C6470]">{row.control}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[13px] text-[#5C6470] mt-4">※ {c.specNote}</p>
        </div>
      </section>

      {/* 납품 실적 */}
      <section className="px-6 md:px-12 py-12 bg-white border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-6">{c.deliveryTitle}</p>
          <div className="flex flex-wrap gap-4">
            {c.deliveryItems.map((item) => (
              <div key={item} className="border border-[#D4DAE2] px-4 py-2.5 text-xs text-[#5C6470] tracking-[0.05em]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-16 border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg tracking-[0.08em] font-light text-[#2d2a28] mb-2">{t("combustion.paintDryer.ctaTitle")}</h3>
            <p className="text-sm text-[#5C6470]">{t("combustion.paintDryer.ctaDesc")}</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/products?tab=combustion" className="btn-link group text-[#5C6470] text-xs tracking-[0.06em] uppercase">
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="rotate-180"><path d="M0 4H15M15 4L11 1M15 4L11 7" stroke="currentColor" strokeWidth="1"/></svg>
              {t("common.backToList")}
            </Link>
            <Link href="/support?type=catalog" className="text-xs tracking-[0.06em] uppercase border border-[#D4DAE2] px-6 py-3 text-[#5C6470] hover:border-[#C05010] hover:text-[#C05010] transition-all duration-300">
              {t("common.catalog")}
            </Link>
            <Link href="/support" className="text-xs tracking-[0.06em] uppercase bg-[#C05010] text-white px-6 py-3 hover:bg-[#2d2a28] transition-all duration-300">
              {t("common.contact")}
            </Link>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
