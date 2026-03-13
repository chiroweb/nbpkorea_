"use client";

import SubpageLayout from "@/components/SubpageLayout";
import { useInView } from "@/hooks/useInView";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const S3 = "https://nbpkoreare.s3.ap-northeast-2.amazonaws.com";

// ── 환경설비 ──────────────────────────────────────────────────
const environmentProducts = [
  {
    title: "NK-CTO",
    subtitle: "촉매연소산화장치",
    href: "/products/environment/nk-cto",
    image: `${S3}/images/%ED%99%98%EA%B2%BD%EC%82%AC%EC%97%85%EB%B6%80/Environment%20Business%20Division/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EC%9A%A9%20CTO%20%EB%A0%8C%EB%8D%94%EB%A7%81-nowatermark.jpg`,
    description: "촉매를 이용해 VOCs 및 악취를 저온(250~450°C)에서 산화 분해합니다. 처리 효율 98% 이상, NOx 저감에 유리한 저에너지 소비형 환경설비입니다.",
    tags: ["반도체", "도장", "식품", "제약"],
  },
  {
    title: "NK-RTO",
    subtitle: "축열식연소산화장치",
    href: "/products/environment/nk-rto",
    image: `${S3}/images/%ED%99%98%EA%B2%BD%EC%82%AC%EC%97%85%EB%B6%80/Business%20Area/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EC%9A%A9%20RTO%20%EB%A0%8C%EB%8D%94%EB%A7%81-nowatermark.jpg`,
    description: "850°C 이상의 고온에서 VOCs를 산화 분해하며, 축열체를 통해 열을 95% 이상 회수합니다. 대풍량 처리에 적합한 고효율 환경설비입니다.",
    tags: ["조선", "자동차", "화학"],
  },
  {
    title: "NK-RCO",
    subtitle: "축열식촉매연소산화장치",
    href: "/products/environment/nk-rco",
    image: `${S3}/images/%ED%99%98%EA%B2%BD%EC%82%AC%EC%97%85%EB%B6%80/Business%20Area/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EC%9A%A9%20RCO%20%EB%A0%8C%EB%8D%94%EB%A7%81-nowatermark.jpg`,
    description: "축열식과 촉매식의 장점을 결합한 하이브리드 시스템입니다. 중·소풍량의 고농도 VOCs 처리에 최적화되어 있습니다.",
    tags: ["중공업", "화학", "환경"],
  },
  {
    title: "NK-TO",
    subtitle: "직접연소탈취장치",
    href: "/products/environment/nk-to",
    image: `${S3}/images/%ED%99%98%EA%B2%BD%EC%82%AC%EC%97%85%EB%B6%80/Business%20Area/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EC%9A%A9%20DTO%20%EB%A0%8C%EB%8D%94%EB%A7%81-nowatermark.jpg`,
    description: "700~900°C의 직접 연소 방식으로 고농도 악취와 VOCs를 직접 산화 처리합니다. 소규모 현장 및 간헐적 발생 공정에 적합합니다.",
    tags: ["음식물처리", "폐수처리", "소규모"],
  },
];

// ── 연소설비 ──────────────────────────────────────────────────
type SpecRow = { model: string; capacity: string; fuel: string; power: string; control: string };

const combustionProducts = [
  {
    id: "direct-heater",
    title: "직접가열식 가스히터",
    subtitle: "Direct Gas Heater (NKGH Series)",
    image: `${S3}/images/%EC%97%B0%EC%86%8C/1p1.png`,
    description: "공장, 조선소, 창고 등 대공간을 빠르게 가열하는 직접 연소 방식의 산업용 가스히터입니다. 250,000~1,000,000 Kcal/h의 다양한 용량으로 제공됩니다.",
    tags: ["조선", "제조공장", "대공간"],
    specs: [
      { model: "NKGH-25", capacity: "250,000", fuel: "LNG/LPG", power: "AC 220V/380V", control: "비례제어" },
      { model: "NKGH-40", capacity: "400,000", fuel: "LNG/LPG", power: "AC 220V/380V", control: "비례제어" },
      { model: "NKGH-60", capacity: "600,000", fuel: "LNG/LPG", power: "AC 220V/380V", control: "비례제어" },
      { model: "NKGH-80", capacity: "800,000", fuel: "LNG/LPG", power: "AC 220V/380V", control: "비례제어" },
      { model: "NKGH-100", capacity: "1,000,000", fuel: "LNG/LPG", power: "AC 220V/380V", control: "비례제어" },
    ] as SpecRow[],
    specHeaders: ["MODEL", "용량(Kcal/h)", "연료", "전원", "제어방식"],
    specKeys: ["model", "capacity", "fuel", "power", "control"] as (keyof SpecRow)[],
  },
  {
    id: "indirect-heater",
    title: "간접가열식 가스히터",
    subtitle: "Indirect Gas Heater (NK-IDGH Series)",
    image: `${S3}/images/%EA%B0%84%EC%A0%91%EC%8B%9D/2-100.png`,
    description: "열교환기를 통해 청정한 공기를 공급하는 간접 가열 방식입니다. 도장 부스, 식품 가공, 클린룸 등 청정 공기가 필요한 현장에 적합합니다.",
    tags: ["도장부스", "식품", "클린룸"],
    specs: [
      { model: "NK-IDGH-40", capacity: "400,000", fuel: "LNG/LPG", power: "AC 220V/380V", control: "비례제어" },
      { model: "NK-IDGH-60", capacity: "600,000", fuel: "LNG/LPG", power: "AC 220V/380V", control: "비례제어" },
      { model: "NK-IDGH-80", capacity: "800,000", fuel: "LNG/LPG", power: "AC 220V/380V", control: "비례제어" },
      { model: "NK-IDGH-100", capacity: "1,000,000", fuel: "LNG/LPG", power: "AC 220V/380V", control: "비례제어" },
    ] as SpecRow[],
    specHeaders: ["MODEL", "용량(Kcal/h)", "연료", "전원", "제어방식"],
    specKeys: ["model", "capacity", "fuel", "power", "control"] as (keyof SpecRow)[],
  },
  {
    id: "dehumidifier",
    title: "하이브리드 제습기",
    subtitle: "Hybrid Dehumidifier System",
    image: `${S3}/images/humidremover.jpg`,
    description: "가열과 제습을 동시에 처리하는 복합 시스템입니다. 선박 블록 탱크, 도장 공정 전처리 등 고습 환경의 공정에 최적화되어 있습니다.",
    tags: ["조선", "도장전처리"],
    specs: [
      { model: "시스템 구성", capacity: "용량 맞춤 설계", fuel: "가스히터 + 냉각코일", power: "4계절 운전", control: "자동 제어" },
    ] as SpecRow[],
    specHeaders: ["구분", "용량", "구성요소", "운전방식", "제어"],
    specKeys: ["model", "capacity", "fuel", "power", "control"] as (keyof SpecRow)[],
    note: "AIR(고습도) → 루버 → 댐퍼 → 냉각코일(냉각제습) → 엘리미네이터 → 가스히터(동계 가온용) → 송풍기 → Room(저습도)",
  },
  {
    id: "paint-dryer",
    title: "차량 도장 건조 시스템",
    subtitle: "Paint Dryer System",
    image: `${S3}/images/forcar.png`,
    description: "자동차 및 조선 도장 라인에 특화된 열풍 건조 시스템입니다. 균일한 온도 분포와 정밀 제어로 도장 품질을 향상시킵니다.",
    tags: ["자동차", "조선"],
    specs: [
      { model: "도장건조기", capacity: "250,000", fuel: "LNG/LPG", power: "AC 380V", control: "PLC 비례제어" },
    ] as SpecRow[],
    specHeaders: ["구분", "용량(Kcal/h)", "연료", "전원", "제어"],
    specKeys: ["model", "capacity", "fuel", "power", "control"] as (keyof SpecRow)[],
    note: "KIA, BMW, 아우디 협력사 도장 라인 적용 실적",
  },
];

// ── 산업용 버너 ───────────────────────────────────────────────
const burnerProducts = [
  {
    title: "NBP-MB",
    subtitle: "금속화이버 표면연소 버너",
    image: `${S3}/images/metal%20burner1.png`,
    description: "NBP KOREA가 자체 개발한 고효율 금속화이버 버너입니다. 내열 금속섬유로 제작된 연소면에서 적외선 복사열을 발생시켜 에너지 효율을 30% 이상 향상시키고, NOx를 대폭 저감합니다.",
    tags: ["환경설비", "연소설비", "범용"],
    isMain: true,
  },
  {
    title: "NBP-SMB",
    subtitle: "소형 금속화이버 버너",
    image: `${S3}/images/smallmetalburner.png`,
    description: "소형 장비 및 협소 공간에 적합한 컴팩트형 금속화이버 버너입니다. 6가지 용량 변형 제품으로 다양한 소형 산업 장비에 맞춤 적용이 가능합니다.",
    tags: ["소형장비", "특수장비"],
  },
];

const tabs = [
  { id: "environment", label: "환경설비", sublabel: "Environment" },
  { id: "combustion", label: "연소설비", sublabel: "Combustion" },
  { id: "burner", label: "산업용 버너", sublabel: "Industrial Burner" },
];

// ── 환경설비 카드 ──────────────────────────────────────────────
function EnvironmentCard({ product, index }: { product: typeof environmentProducts[0]; index: number }) {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${(index % 3) * 150}ms` }}
    >
      <Link href={product.href} className="group block">
        <div className="relative aspect-[4/3] mb-6 overflow-hidden bg-[#DCE2E8]">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-[#2d2a28]/0 group-hover:bg-[#2d2a28]/10 transition-all duration-500" />
          <div className="absolute bottom-4 right-4 w-8 h-8 flex items-center justify-center border border-white/60 rounded-full bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <path d="M1 7L7 1M7 1H2M7 1V6" stroke="white" strokeWidth="1"/>
            </svg>
          </div>
        </div>
        <div>
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#888480] block mb-1">
            {product.subtitle}
          </span>
          <h3 className="text-lg md:text-xl tracking-[0.08em] font-medium text-[#2d2a28] mb-3 group-hover:text-[#C05010] transition-colors duration-300">
            {product.title}
          </h3>
          <p className="text-xs leading-[2] text-[#888480] mb-4">{product.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {product.tags.map((tag) => (
              <span key={tag} className="text-[10px] tracking-[0.08em] border border-[#D4DAE2] px-2 py-0.5 text-[#888480]">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase text-[#2d2a28]/40 group-hover:text-[#C05010] transition-colors duration-300">
            <span>상세 보기</span>
            <svg width="14" height="6" viewBox="0 0 14 6" fill="none" className="transition-transform group-hover:translate-x-1">
              <path d="M0 3H13M13 3L10 1M13 3L10 5" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
}

// ── 연소설비 아코디언 카드 ────────────────────────────────────
function CombustionCard({
  product,
  index,
  expanded,
  onToggle,
}: {
  product: typeof combustionProducts[0];
  index: number;
  expanded: boolean;
  onToggle: () => void;
}) {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [selectedModel, setSelectedModel] = useState<string | null>(null);

  return (
    <div
      ref={ref}
      className={`border border-[#D4DAE2] transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Card Header — clickable */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-6 p-6 text-left hover:bg-[#F2F4F7] transition-colors duration-200"
      >
        <div className="relative w-20 h-16 flex-shrink-0 overflow-hidden bg-[#DCE2E8]">
          <Image src={product.image} alt={product.title} fill className="object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#888480] block mb-0.5">
            {product.subtitle}
          </span>
          <h3 className="text-base md:text-lg tracking-[0.05em] font-medium text-[#2d2a28]">
            {product.title}
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {product.tags.map((tag) => (
              <span key={tag} className="text-[10px] tracking-[0.08em] border border-[#D4DAE2] px-2 py-0.5 text-[#888480]">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center border transition-all duration-300 ${expanded ? "border-[#C05010] bg-[#C05010] text-white" : "border-[#D4DAE2] text-[#888480]"}`}>
          <svg
            width="10" height="10" viewBox="0 0 10 10" fill="none"
            className={`transition-transform duration-300 ${expanded ? "rotate-45" : ""}`}
          >
            <path d="M5 1V9M1 5H9" stroke="currentColor" strokeWidth="1.2"/>
          </svg>
        </div>
      </button>

      {/* Accordion content */}
      <div className={`overflow-hidden transition-all duration-500 ${expanded ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-6 pb-6 border-t border-[#D4DAE2]">
          <p className="text-xs text-[#8B95A1] leading-[2] mt-4 mb-4">{product.description}</p>

          {product.note && (
            <div className="mb-4 p-3 bg-[#F2F4F7] border border-[#D4DAE2] text-[11px] text-[#8B95A1] tracking-[0.03em]">
              {product.note}
            </div>
          )}

          <p className="text-[10px] tracking-[0.1em] uppercase text-[#888480] mb-2">제품 제원 — 행 클릭으로 모델 선택</p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse min-w-[480px]">
              <thead>
                <tr className="border-b border-[#2d2a28]">
                  {product.specHeaders.map((h) => (
                    <th key={h} className="py-2.5 px-3 text-left text-[10px] tracking-[0.12em] uppercase text-[#2d2a28] font-medium first:text-left text-center first:text-left">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {product.specs.map((row) => (
                  <tr
                    key={row.model}
                    onClick={() => setSelectedModel(selectedModel === row.model ? null : row.model)}
                    className={`cursor-pointer border-b border-[#D4DAE2] transition-colors duration-200 ${
                      selectedModel === row.model
                        ? "bg-[#C05010]/10 border-l-2 border-[#C05010]"
                        : "hover:bg-[#F5F7F8]"
                    }`}
                  >
                    {product.specKeys.map((key, ki) => (
                      <td
                        key={key}
                        className={`py-3 px-3 ${ki === 0 ? "font-medium" : "text-center"} ${
                          selectedModel === row.model && ki === 0 ? "text-[#C05010]" : ki === 0 ? "text-[#2d2a28]" : "text-[#8B95A1]"
                        }`}
                      >
                        {row[key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── 버너 카드 ────────────────────────────────────────────────
function BurnerCard({ product, index }: { product: typeof burnerProducts[0]; index: number }) {
  const { ref, isInView } = useInView({ threshold: 0.15 });
  return (
    <div
      ref={ref}
      className={`group transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative aspect-[4/3] mb-6 overflow-hidden bg-[#DCE2E8]">
        <Image src={product.image} alt={product.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
      </div>
      <span className="text-[10px] tracking-[0.2em] uppercase text-[#888480] block mb-1">{product.subtitle}</span>
      <h3 className="text-lg md:text-xl tracking-[0.08em] font-medium text-[#2d2a28] mb-3">
        {product.title}
        {product.isMain && (
          <span className="ml-2 text-[10px] tracking-[0.1em] border border-[#C05010] text-[#C05010] px-2 py-0.5 align-middle">주력</span>
        )}
      </h3>
      <p className="text-xs leading-[2] text-[#888480] mb-4">{product.description}</p>
      <div className="flex flex-wrap gap-2">
        {product.tags.map((tag) => (
          <span key={tag} className="text-[10px] tracking-[0.08em] border border-[#D4DAE2] px-2 py-0.5 text-[#888480]">{tag}</span>
        ))}
      </div>
    </div>
  );
}

function IndustryTagsSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const tags = ["조선/해양", "자동차", "중공업", "화학/석유화학", "환경/악취처리", "반도체", "식품가공", "제약", "섬유", "에너지"];
  return (
    <section ref={ref} className="py-16 px-6 md:px-12 bg-[#F2F4F7] border-t border-[#D4DAE2]">
      <div className="max-w-7xl mx-auto">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#888480] mb-6">Industry Applications</p>
        <div className={`flex flex-wrap gap-3 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {tags.map((tag) => (
            <span key={tag} className="text-xs tracking-[0.08em] border border-[#C8D0DA] px-4 py-2 text-[#888480] hover:border-[#C05010] hover:text-[#C05010] transition-colors cursor-default">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-[#F2F4F7]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className={`transition-all duration-1000 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <span className="section-label block mb-4">Why NBP KOREA</span>
            <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-light text-[#2d2a28] mb-6">
              20년 기술력으로<br />산업 현장에 최적화된 솔루션
            </h2>
            <p className="text-sm leading-[2] text-[#888480] mb-8">
              자체 R&D와 19건의 등록 특허, 미국·터키 글로벌 파트너십을 바탕으로
              환경설비부터 연소장비까지 설계·제작·시공·A/S의 원스톱 서비스를 제공합니다.
            </p>
            <div className="grid grid-cols-3 gap-8">
              {[
                { number: "19건", label: "등록 특허" },
                { number: "80+", label: "납품 실적" },
                { number: "A/S", label: "전국 서비스" },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="text-2xl md:text-3xl font-light text-[#2d2a28] block mb-1">{stat.number}</span>
                  <span className="text-[10px] tracking-[0.15em] uppercase text-[#888480]">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-300 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#DCE2E8]">
              <Image src={`${S3}/images/building.jpg`} alt="NBP KOREA 제품 개요" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("environment");
  const [expandedCombustion, setExpandedCombustion] = useState<string | null>(null);

  const currentTab = tabs.find((t) => t.id === activeTab) ?? tabs[0];

  return (
    <SubpageLayout
      title="PRODUCTS & SOLUTIONS"
      subtitle="환경설비, 연소설비, 산업용 버너 — 산업 현장을 위한 최적의 솔루션"
      breadcrumb={[{ label: "제품/솔루션", href: "/products" }]}
    >
      {/* Tab Navigation */}
      <section className="py-16 px-6 md:px-12 border-b border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 md:flex-none px-8 py-4 text-xs tracking-[0.15em] uppercase border transition-all ${
                  activeTab === tab.id
                    ? "bg-[#2d2a28] text-[#F5F7F8] border-[#2d2a28]"
                    : "border-[#D4DAE2] text-[#888480] hover:border-[#C05010] hover:text-[#C05010]"
                }`}
              >
                <span className="hidden md:inline">{tab.label}</span>
                <span className="md:hidden">{tab.sublabel}</span>
              </button>
            ))}
          </div>
          <div className="mt-6">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#888480]">{currentTab.sublabel}</span>
            <p className="text-sm text-[#2d2a28] mt-1 tracking-[0.05em]">
              {currentTab.label}
              {activeTab === "environment" && <span className="text-[#888480]"> — 클릭하여 상세 페이지 이동</span>}
              {activeTab === "combustion" && <span className="text-[#888480]"> — 클릭하여 스펙 테이블 펼치기</span>}
            </p>
          </div>
        </div>
      </section>

      {/* Product Content */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          {/* 환경설비 */}
          {activeTab === "environment" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {environmentProducts.map((product, index) => (
                <EnvironmentCard key={product.title} product={product} index={index} />
              ))}
            </div>
          )}

          {/* 연소설비 — 아코디언 */}
          {activeTab === "combustion" && (
            <div className="space-y-3 max-w-4xl">
              {combustionProducts.map((product, index) => (
                <CombustionCard
                  key={product.id}
                  product={product}
                  index={index}
                  expanded={expandedCombustion === product.id}
                  onToggle={() => setExpandedCombustion(expandedCombustion === product.id ? null : product.id)}
                />
              ))}
            </div>
          )}

          {/* 산업용 버너 */}
          {activeTab === "burner" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {burnerProducts.map((product, index) => (
                <BurnerCard key={product.title} product={product} index={index} />
              ))}
            </div>
          )}

        </div>
      </section>

      <IndustryTagsSection />
      <FeatureSection />

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-light text-[#2d2a28] mb-4">
            맞춤 설비 솔루션이 필요하신가요?
          </h2>
          <p className="text-sm text-[#888480] tracking-[0.08em] mb-8">
            현장 조건에 맞는 최적의 환경·연소 설비를 제안해 드립니다. 전문 엔지니어와 상담하세요.
          </p>
          <Link
            href="/support"
            className="inline-flex items-center gap-3 text-xs tracking-[0.15em] uppercase border border-[#2d2a28] px-8 py-4 hover:bg-[#C05010] hover:text-white transition-all"
          >
            상담 문의하기
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </Link>
        </div>
      </section>
    </SubpageLayout>
  );
}
