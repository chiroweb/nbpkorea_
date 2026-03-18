"use client";

import SubpageLayout from "@/components/SubpageLayout";
import ProductNav from "@/components/ProductNav";
import { useInView } from "@/hooks/useInView";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

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
// combustionProducts는 링크 카드로만 사용 (상세 페이지 별도)
const combustionProducts = [
  {
    id: "direct-heater",
    title: "직접가열식 가스히터",
    subtitle: "Direct Gas Heater (NKGH Series)",
    href: "/products/combustion/nkgh",
    image: `${S3}/images/%EC%97%B0%EC%86%8C/1p1.png`,
    description: "조선소·창고·공장 등 대공간을 빠르게 가열하는 직화식 산업용 가스히터. 250,000~1,000,000 Kcal/h 5개 모델 라인업.",
    tags: ["조선", "제조공장", "대공간"],
  },
  {
    id: "indirect-heater",
    title: "간접가열식 가스히터",
    subtitle: "Indirect Gas Heater (NK-IDGH Series)",
    href: "/products/combustion/nk-idgh",
    image: `${S3}/images/%EA%B0%84%EC%A0%91%EC%8B%9D/2-100.png`,
    description: "열교환기를 통해 청정 공기를 공급하는 간접 가열 방식. 도장 부스·식품 가공·클린룸 등 청정 환경 필수 현장에 최적.",
    tags: ["도장부스", "식품", "클린룸"],
  },
  {
    id: "dehumidifier",
    title: "하이브리드 제습기",
    subtitle: "Hybrid Dehumidifier (NK-NDGH Series)",
    href: "/products/combustion/dehumidifier",
    image: `${S3}/images/humidremover.jpg`,
    description: "냉동 제습 + 가스 가열 복합 패키지. 4계절 운전 지원, 선박 블록 도장·용접·클린룸 등 고습 환경 전용.",
    tags: ["조선", "도장전처리", "클린룸"],
  },
  {
    id: "paint-dryer",
    title: "차량 도장 건조 시스템",
    subtitle: "Paint Dryer System",
    href: "/products/combustion/paint-dryer",
    image: `${S3}/images/forcar.png`,
    description: "자동차 도장 부스 특화 열풍 건조 시스템. 1,250,000 Kcal/h 고출력, PLC 비례제어, KIA·BMW 협력사 납품 실적.",
    tags: ["자동차", "도장부스"],
  },
];

// ── 산업용 버너 ───────────────────────────────────────────────
const burnerProducts = [
  {
    id: "duct-burner",
    title: "덕트버너",
    subtitle: "Duct Burner — Metal Fiber Surface Combustion",
    href: "/products/burner/duct-burner",
    image: `${S3}/images/burner/1FT.png`,
    description: "금속화이버 표면연소 방식 덕트 가열 버너. 0.5FT~5FT 다양한 라인업, 30단계 정밀 화염 제어, NOₓ·CO 저배출.",
    tags: ["주력 제품", "NOₓ 저배출", "범용"],
  },
  {
    id: "line-burner",
    title: "라인버너",
    subtitle: "Line Burner",
    href: "/products/burner/line-burner",
    image: `${S3}/images/burner/line-burner.png`,
    description: "원통형 구조의 산업용 라인 버너. 연속 공정 라인의 직선 가열에 최적화된 고효율 연소 시스템.",
    tags: ["연속공정", "직선가열"],
  },
  {
    id: "portable-burner",
    title: "이동버너",
    subtitle: "Portable Burner",
    href: "/products/burner/portable-burner",
    image: `${S3}/images/burner/portable-40man.png`,
    description: "이동형·특수 용도 산업용 버너. 조선소·건설 현장 등 이동이 필요한 작업에 적합한 독립 패키지 가열 시스템.",
    tags: ["이동형", "특수용도"],
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
            className="object-contain group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-[#2d2a28]/0 group-hover:bg-[#2d2a28]/10 transition-all duration-500" />
          <div className="absolute bottom-4 right-4 w-8 h-8 flex items-center justify-center border border-white/60 rounded-full bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <path d="M1 7L7 1M7 1H2M7 1V6" stroke="white" strokeWidth="1"/>
            </svg>
          </div>
        </div>
        <div>
          <span className="text-[13px] tracking-[0.2em] uppercase text-[#888480] block mb-1">
            {product.subtitle}
          </span>
          <h3 className="text-lg md:text-xl tracking-[0.08em] font-medium text-[#2d2a28] mb-3 group-hover:text-[#C05010] transition-colors duration-300">
            {product.title}
          </h3>
          <p className="text-xs leading-[2] text-[#888480] mb-4">{product.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {product.tags.map((tag) => (
              <span key={tag} className="text-[13px] tracking-[0.08em] border border-[#D4DAE2] px-2 py-0.5 text-[#888480]">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-[14px] tracking-[0.12em] uppercase text-[#2d2a28]/40 group-hover:text-[#C05010] transition-colors duration-300">
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

// ── 연소설비 카드 (환경설비와 동일한 링크 방식) ──────────────────
function CombustionCard({ product, index }: { product: typeof combustionProducts[0]; index: number }) {
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
            className="object-contain group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-[#2d2a28]/0 group-hover:bg-[#2d2a28]/10 transition-all duration-500" />
          <div className="absolute bottom-4 right-4 w-8 h-8 flex items-center justify-center border border-white/60 rounded-full bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <path d="M1 7L7 1M7 1H2M7 1V6" stroke="white" strokeWidth="1"/>
            </svg>
          </div>
        </div>
        <div>
          <span className="text-[13px] tracking-[0.2em] uppercase text-[#888480] block mb-1">
            {product.subtitle}
          </span>
          <h3 className="text-lg md:text-xl tracking-[0.08em] font-medium text-[#2d2a28] mb-3 group-hover:text-[#C05010] transition-colors duration-300">
            {product.title}
          </h3>
          <p className="text-xs leading-[2] text-[#888480] mb-4">{product.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {product.tags.map((tag) => (
              <span key={tag} className="text-[13px] tracking-[0.08em] border border-[#D4DAE2] px-2 py-0.5 text-[#888480]">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-[14px] tracking-[0.12em] uppercase text-[#2d2a28]/40 group-hover:text-[#C05010] transition-colors duration-300">
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

// ── 버너 카드 (링크 카드 방식) ──────────────────────────────────
function BurnerCard({ product, index }: { product: typeof burnerProducts[0]; index: number }) {
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
            className="object-contain group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-[#2d2a28]/0 group-hover:bg-[#2d2a28]/10 transition-all duration-500" />
          <div className="absolute bottom-4 right-4 w-8 h-8 flex items-center justify-center border border-white/60 rounded-full bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <path d="M1 7L7 1M7 1H2M7 1V6" stroke="white" strokeWidth="1"/>
            </svg>
          </div>
        </div>
        <div>
          <span className="text-[13px] tracking-[0.2em] uppercase text-[#888480] block mb-1">
            {product.subtitle}
          </span>
          <h3 className="text-lg md:text-xl tracking-[0.08em] font-medium text-[#2d2a28] mb-3 group-hover:text-[#C05010] transition-colors duration-300">
            {product.title}
          </h3>
          <p className="text-xs leading-[2] text-[#888480] mb-4">{product.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {product.tags.map((tag) => (
              <span key={tag} className="text-[13px] tracking-[0.08em] border border-[#D4DAE2] px-2 py-0.5 text-[#888480]">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-[14px] tracking-[0.12em] uppercase text-[#2d2a28]/40 group-hover:text-[#C05010] transition-colors duration-300">
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

function IndustryTagsSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const tags = ["조선/해양", "자동차", "중공업", "화학/석유화학", "환경/악취처리", "반도체", "식품가공", "제약", "섬유", "에너지"];
  return (
    <section ref={ref} className="py-16 px-6 md:px-12 bg-[#F2F4F7] border-t border-[#D4DAE2]">
      <div className="max-w-7xl mx-auto">
        <p className="text-[13px] tracking-[0.2em] uppercase text-[#888480] mb-6">Industry Applications</p>
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
            <span className="section-label block mb-4">Why NBPKOREA</span>
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
                  <span className="text-[13px] tracking-[0.15em] uppercase text-[#888480]">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-300 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#DCE2E8]">
              <Image src={`${S3}/images/building.jpg`} alt="NBPKOREA 제품 개요" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsPageInner() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("environment");

  // URL query param으로 탭 초기화 (상세 페이지에서 돌아올 때)
  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam && ["environment", "combustion", "burner"].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  return (
    <SubpageLayout
      title="PRODUCTS & SOLUTIONS"
      subtitle="환경설비, 연소설비, 산업용 버너 — 산업 현장을 위한 최적의 솔루션"
      breadcrumb={[{ label: "제품/솔루션", href: "/products" }]}
    >
      {/* 공통 ProductNav */}
      <ProductNav
        activeTab={activeTab as "environment" | "combustion" | "burner"}
        onTabChange={setActiveTab}
      />

      {/* Product Content */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          {/* 환경설비 — 4열 그리드 */}
          {activeTab === "environment" && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
              {environmentProducts.map((product, index) => (
                <EnvironmentCard key={product.title} product={product} index={index} />
              ))}
            </div>
          )}

          {/* 연소설비 — 4열 링크 카드 */}
          {activeTab === "combustion" && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
              {combustionProducts.map((product, index) => (
                <CombustionCard key={product.id} product={product} index={index} />
              ))}
            </div>
          )}

          {/* 산업용 버너 — 4열 링크 카드 */}
          {activeTab === "burner" && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
              {burnerProducts.map((product, index) => (
                <BurnerCard key={product.id} product={product} index={index} />
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

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsPageInner />
    </Suspense>
  );
}
