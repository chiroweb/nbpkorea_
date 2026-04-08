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
  { model: "NBP-050", size: "0.5FT", capacity: "125,000", kw: "147", pressure: "35", fuel: "LNG / LPG" },
  { model: "NBP-100", size: "1FT", capacity: "250,000", kw: "293", pressure: "35", fuel: "LNG / LPG" },
  { model: "NBP-150", size: "1.5FT", capacity: "375,000", kw: "440", pressure: "35", fuel: "LNG / LPG" },
  { model: "NBP-200", size: "2FT", capacity: "500,000", kw: "586", pressure: "35", fuel: "LNG / LPG" },
  { model: "NBP-250", size: "2.5FT", capacity: "625,000", kw: "733", pressure: "35", fuel: "LNG / LPG" },
  { model: "NBP-300", size: "3FT", capacity: "750,000", kw: "879", pressure: "35", fuel: "LNG / LPG" },
  { model: "NBP-400", size: "4FT", capacity: "1,000,000", kw: "1,172", pressure: "35", fuel: "LNG / LPG" },
  { model: "NBP-450", size: "4.5FT", capacity: "1,125,000", kw: "1,319", pressure: "35", fuel: "LNG / LPG" },
  { model: "NBP-500", size: "5FT", capacity: "1,250,000", kw: "1,466", pressure: "50", fuel: "LNG / LPG" },
  { model: "NBP-600", size: "6FT", capacity: "1,500,000", kw: "1,759", pressure: "50", fuel: "LNG / LPG" },
];

const sizeGallery = [
  { label: "0.5FT", image: `${S3}/images/burner/0.5FT.png` },
  { label: "1FT",   image: `${S3}/images/burner/1FT.png` },
  { label: "1.5FT", image: `${S3}/images/burner/1.5FT.png` },
  { label: "3FT",   image: `${S3}/images/burner/3FT-T.png` },
  { label: "5FT",   image: `${S3}/images/burner/5FT-T.png` },
];

const content = {
  en: {
    title: "Duct Burner",
    titleSub: "(Duct Burner)",
    heroDesc1: "NBPKOREA Duct Burner generates infrared radiant heat from a surface combustion element made of heat-resistant metal fiber. Based on a technical partnership with MIDCO International (USA), it achieves low NOx and CO emission design compliant with ANSI Z83.4 / Z83.18 standards.",
    heroDesc2: "The NBP series lineup ranges from compact (0.5FT) to large (6FT), featuring a two-stage combustion method and 30-step precision turndown control for stable duct temperature management. Both LNG and LPG gas can be used without nozzle replacement.",
    heroTags: ["Two-Stage Combustion", "30-Step Flame Control", "Low NOx Emission", "0.5FT~6FT Lineup"],
    imgAlt: "Duct Burner — Metal Surface Combustion Burner",
    applications: [
      "Duct Heating System",
      "Paint Booth Hot Air Supply",
      "Agricultural & Marine Product Drying",
      "Wood & Plywood Drying",
      "Textile & Leather Drying",
      "Food Processing Drying",
      "Printing & Coating Lines",
      "Pharmaceutical Drying Process",
      "Semiconductor Cleanroom Auxiliary Heat",
      "Shipyard Block Heating",
      "Other Industrial Duct Heating",
    ],
    combustionTitle: "Combustion Principle — Two-Stage Surface Combustion",
    combustionSteps: [
      { label: "Gas Supply\nLNG/LPG", bg: "#DCE2E8", text: "#2d2a28" },
      { label: "→", isArrow: true },
      { label: "1st Stage\n(Low-NOx Premix)", bg: "#C05010", text: "#fff" },
      { label: "→", isArrow: true },
      { label: "2nd Stage\n(Complete Combustion)", bg: "#E8A060", text: "#fff" },
      { label: "→", isArrow: true },
      { label: "Metal Fiber Surface\nIR Radiant Heat", bg: "#2d2a28", text: "#fff" },
      { label: "→", isArrow: true },
      { label: "Uniform Heating\nInside Duct", bg: "#4A5568", text: "#fff" },
    ],
    combustionNote: "Flame length maintained under 25cm / 30-step precision turndown control / Differential pressure 0.05\"~1.4\" W.C. wide-range operation",
    features: [
      "Minimized NO2 and CO emissions — compliant with ANSI Z83.4 / Z83.18",
      "Two-stage combustion method minimizes NOx emissions even at maximum firing",
      "187,500 Kcal/h high output at 35mmAq passing pressure per 30cm width",
      "Over 250,000 Kcal/h combustion at 50mmAQ (large models)",
      "HMA-2 method — wide-range operation at 0.05\"~1.4\" W.C. differential pressure",
      "Air velocity 800~4,000 ft/min — flexible adaptation to various duct designs",
      "Two-stage combustion system maximizes flame stability, maintaining flame length under 25cm",
      "Both LNG and LPG gas usable without nozzle replacement",
      "Heat-resistant metal fiber combustion surface — over 30% energy efficiency improvement via radiant heat transfer",
      "Various NBP lineup from 0.5FT to 6FT for custom duct size selection",
      "30-step flame control — precision temperature control superior to other burner brands",
      "MIDCO International (USA) technical partnership — globally proven combustion system",
    ],
    sizeLineupTitle: "Size Lineup",
    sizeLineupDesc: "Custom selection from compact 0.5FT to large 6FT (1.5M Kcal/h) to match field duct dimensions",
    sizeAltPrefix: "Duct Burner",
    tableHeaders: ["MODEL", "Size", "Output (kW)", "Combustion Capacity (Kcal/h)", "Passing Pressure (mmAq)", "Fuel"],
    techPartnership: ["MIDCO International (USA) Technical Alliance", "ANSI Z83.4 / Z83.18 Compliant", "19 Registered Patents", "Global Combustion Technology Locally Applied"],
    appExampleAlt: "Duct Burner Application Example",
    floatingLabel: "View Duct Burner Case Studies",
  },
  ko: {
    title: "덕트버너",
    titleSub: "(Duct Burner)",
    heroDesc1: "엔비피코리아 덕트버너는 내열 메탈파이버(Metal Fiber)로 제작된 연소면에서 적외선 복사열을 발생시키는 표면연소 방식의 산업용 덕트 가열 버너입니다. MIDCO International(미국)과의 기술 협력을 바탕으로, ANSI Z83.4 / Z83.18 기준을 충족하는 NOx·CO 저배출 설계를 실현합니다.",
    heroDesc2: "소형(0.5FT)부터 대형(6FT)까지 NBP 시리즈 라인업을 갖추고 있으며, 2단 연소 방식과 30단계 정밀 턴다운 제어로 덕트 내 온도를 안정적으로 관리합니다. 노즐 교체 없이 LNG / LPG 가스를 모두 사용할 수 있습니다.",
    heroTags: ["2단 연소 방식", "30단계 화염 제어", "NOx 저배출", "0.5FT~6FT 라인업"],
    imgAlt: "덕트버너 — 메탈 표면연소 버너",
    applications: [
      "덕트 가열 시스템",
      "도장 부스 열풍 공급",
      "농수산물 건조 라인",
      "목재·합판 건조",
      "섬유·피혁 건조",
      "식품 가공 건조",
      "인쇄·코팅 라인",
      "제약 건조 공정",
      "반도체 클린룸 보조 열원",
      "조선소 블록 가열",
      "기타 산업용 덕트 가열",
    ],
    combustionTitle: "연소 원리 — Two-Stage Surface Combustion",
    combustionSteps: [
      { label: "가스 공급\nLNG/LPG", bg: "#DCE2E8", text: "#2d2a28" },
      { label: "→", isArrow: true },
      { label: "1차 연소\n(저NOx 예혼합)", bg: "#C05010", text: "#fff" },
      { label: "→", isArrow: true },
      { label: "2차 연소\n(완전 연소)", bg: "#E8A060", text: "#fff" },
      { label: "→", isArrow: true },
      { label: "메탈파이버면\n적외선 복사열", bg: "#2d2a28", text: "#fff" },
      { label: "→", isArrow: true },
      { label: "덕트 내\n균일 가열", bg: "#4A5568", text: "#fff" },
    ],
    combustionNote: "화염 길이 25cm 이하 유지 / 30단계 정밀 턴다운 제어 / 차압 0.05″~1.4″ W.C. 광범위 운전",
    features: [
      "NO2 및 CO 배출 최소화 — ANSI Z83.4 / Z83.18 기준 적합",
      "2단 연소(Two-Stage) 방식으로 최대 연소 시에도 NOx 배출 최소화",
      "폭 30cm 기준 통과압력 35mmAq일 때 187,500 Kcal/h 고출력 실현",
      "50mmAQ 조건에서 250,000 Kcal/h 이상 연소 가능 (대형 모델)",
      "HMA-2 방식 — 차압 0.05″~1.4″ W.C. 광범위 운전",
      "공기 속도 800~4,000 ft/min 대응 — 다양한 덕트 설계에 유연 적용",
      "2단 연소 시스템으로 화염 안정성 극대화, 화염 길이 25cm 이하 유지",
      "노즐 교체 없이 LNG / LPG 가스 모두 사용 가능",
      "내열 메탈파이버 연소면 — 복사 열전달로 에너지 효율 30% 이상 향상",
      "0.5FT~6FT 다양한 NBP 라인업으로 덕트 크기에 맞춤 선택",
      "화염 제어 30단계 — 타 메이커 버너 대비 정밀 온도 제어",
      "MIDCO International(미국) 기술 협력 — 글로벌 검증된 연소 시스템",
    ],
    sizeLineupTitle: "사이즈별 라인업",
    sizeLineupDesc: "소형 0.5FT부터 대형 6FT(150만 Kcal/h)까지 현장 덕트 크기에 맞춘 맞춤 선택",
    sizeAltPrefix: "덕트버너",
    tableHeaders: ["MODEL", "사이즈", "출력 (kW)", "연소 용량 (Kcal/h)", "통과압력 (mmAq)", "연료"],
    techPartnership: ["MIDCO International (미국) 기술 제휴", "ANSI Z83.4 / Z83.18 기준 적합", "19건 등록 특허", "글로벌 연소 기술 현지 적용"],
    appExampleAlt: "덕트버너 적용 예시",
    floatingLabel: "덕트버너 적용 사례 보러가기",
  },
};

export default function DuctBurnerPage() {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: specRef, isInView: specInView } = useInView({ threshold: 0.1 });
  const { ref: galleryRef, isInView: galleryInView } = useInView({ threshold: 0.1 });
  const { ref: appRef, isInView: appInView } = useInView({ threshold: 0.1 });
  const t = useTranslations("products");
  const locale = useLocale() as "en" | "ko";
  const c = content[locale] ?? content.ko;

  return (
    <SubpageLayout
      title={t("nav.ductBurner")}
      subtitle={`Duct Burner — ${t("burner.ductBurner.subtitle")}`}
      breadcrumb={[
        { label: t("breadcrumb"), href: "/products" },
        { label: t("breadcrumbs.burner"), href: "/products?tab=burner" },
        { label: t("nav.ductBurner"), href: "/products/burner/duct-burner" },
      ]}
    >
      <FloatingCaseLink category="burner" tag={locale === "en" ? "Duct Burner" : "덕트버너"} label={c.floatingLabel} />
      <ProductNav activeTab="burner" activeProduct="duct-burner" />

      {/* Hero */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div
            ref={heroRef}
            className={`transition-all duration-1000 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <span className="text-[13px] tracking-[0.04em] uppercase text-[#C05010] block mb-3">
              Industrial Burner · Duct Burner
            </span>
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.08em] text-[#2d2a28] mb-6">
              {c.title}<br />{c.titleSub}
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
                src={`${S3}/images/burner/duct-burner-hero.jpg`}
                alt={c.imgAlt}
                fill className="object-cover object-center" priority
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
              <Link key={app} href={`/performance?tag=${encodeURIComponent(app)}&cat=burner`} className="text-[14px] tracking-[0.04em] border border-[#D4DAE2] px-3 py-2 text-[#5C6470] hover:border-[#C05010] hover:text-[#C05010] hover:bg-[#C05010]/5 transition-all duration-200">

                {app}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 연소 원리 */}
      <section className="px-6 md:px-12 py-12 bg-[#FAFAFA] border-y border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-6">{c.combustionTitle}</p>
          <div className="flex flex-wrap items-center gap-3">
            {c.combustionSteps.map((step, i) =>
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
          <p className="text-[14px] text-[#5C6470] mt-4">{c.combustionNote}</p>
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

      {/* 사이즈별 갤러리 */}
      <section ref={galleryRef} className="px-6 md:px-12 py-16 bg-[#FAFAFA] border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-2">{t("common.sizeLineup")}</p>
          <p className="text-xs text-[#5C6470] mb-8 tracking-[0.05em]">{c.sizeLineupDesc}</p>
          <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 transition-all duration-1000 ${galleryInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {sizeGallery.map((item) => (
              <div key={item.label} className="bg-white border border-[#D4DAE2] overflow-hidden">
                <div className="relative aspect-square bg-[#F8F9FB]">
                  <Image
                    src={item.image}
                    alt={`${c.sizeAltPrefix} ${item.label}`}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="px-3 py-2 border-t border-[#E8ECF0]">
                  <span className="text-[14px] tracking-[0.08em] text-[#2d2a28] font-medium">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 스펙 테이블 */}
      <section ref={specRef} className="px-6 md:px-12 py-16 border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-2">{t("common.specifications")}</p>
          <p className="text-xs text-[#5C6470] mb-8 tracking-[0.05em]">{t("common.selectModel")}</p>
          <div className={`overflow-x-auto transition-all duration-1000 ${specInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b-2 border-[#2d2a28]">
                  {c.tableHeaders.map((h) => (
                    <th key={h} className="py-3 px-4 text-left text-[13px] tracking-[0.12em] uppercase text-[#2d2a28] font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {specs.map((row) => (
                  <tr
                    key={row.model}
                    onClick={() => setSelectedModel(selectedModel === row.model ? null : row.model)}
                    className={`cursor-pointer border-b border-[#D4DAE2] transition-colors duration-300 ${
                      selectedModel === row.model ? "bg-[#C05010]/10 border-l-2 border-[#C05010]" : "hover:bg-[#F8F9FB]"
                    }`}
                  >
                    <td className={`py-3.5 px-4 font-medium tracking-[0.05em] ${selectedModel === row.model ? "text-[#C05010]" : "text-[#2d2a28]"}`}>{row.model}</td>
                    <td className="py-3.5 px-4 text-[#5C6470]">{row.size}</td>
                    <td className="py-3.5 px-4 text-[#5C6470]">{row.kw}</td>
                    <td className="py-3.5 px-4 text-[#5C6470]">{row.capacity}</td>
                    <td className="py-3.5 px-4 text-[#5C6470]">{row.pressure}</td>
                    <td className="py-3.5 px-4 text-[#5C6470]">{row.fuel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[13px] text-[#5C6470] mt-4">※ {t("common.specNote")}</p>
        </div>
      </section>

      {/* 기술 파트너십 */}
      <section className="px-6 md:px-12 py-12 bg-white border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-6">{t("common.techPartnership")}</p>
          <div className="flex flex-wrap gap-4">
            {c.techPartnership.map((item) => (
              <div key={item} className="border border-[#D4DAE2] px-4 py-2.5 text-xs text-[#5C6470] tracking-[0.05em]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 적용 예시 */}
      <section className="px-6 md:px-12 py-16 border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-8">{t("common.applicationExamples")}</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#F8F9FB] border border-[#D4DAE2]">
              <Image src={`${S3}/images/burner/duct-burner-app-1.jpg`} alt={c.appExampleAlt} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-16 border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg tracking-[0.08em] font-light text-[#2d2a28] mb-2">{t("burner.ductBurner.ctaTitle")}</h3>
            <p className="text-sm text-[#5C6470]">{t("burner.ductBurner.ctaDesc")}</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/products?tab=burner" className="btn-link group text-[#5C6470] text-xs tracking-[0.06em] uppercase">
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
