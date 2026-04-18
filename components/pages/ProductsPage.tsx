"use client";

import SubpageLayout from "@/components/SubpageLayout";
import ProductNav from "@/components/ProductNav";
import { useInView } from "@/hooks/useInView";
import { Link } from "@/i18n/navigation";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

// ── 공통 제품 카드 ──────────────────────────────────────────────
function ProductCard({ product, viewDetail, index, category }: { product: { title: string; subtitle: string; href: string; image: string; description: string; tags: string[] }; viewDetail: string; index: number; category?: string }) {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${(index % 4) * 150}ms` }}
    >
      {/* Image + Title — 제품 상세 링크 */}
      <Link href={product.href} className="group block">
        <div className="relative aspect-[4/3] mb-4 overflow-hidden bg-white border border-[#C05010]/30">
          <Image src={product.image} alt={product.title} fill className="object-contain group-hover:scale-105 transition-transform duration-700" unoptimized />
          <div className="absolute inset-0 bg-[#2d2a28]/0 group-hover:bg-[#2d2a28]/10 transition-all duration-500" />
          <div className="absolute bottom-4 right-4 w-8 h-8 flex items-center justify-center border border-white/60 rounded-full bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 7L7 1M7 1H2M7 1V6" stroke="white" strokeWidth="1"/></svg>
          </div>
        </div>
        <span className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] block mb-1">{product.subtitle}</span>
        <h3 className="text-lg md:text-xl tracking-[0.08em] font-bold text-[#2d2a28] mb-2 group-hover:text-[#C05010] transition-colors duration-300">{product.title}</h3>
      </Link>

      {/* 적용 분야 태그 — 각각 사업실적 페이지로 이동 */}
      <div className="flex flex-wrap gap-2 mb-3 mt-2">
        {product.tags.map((tag) => (
          <Link
            key={tag}
            href={`/performance?tag=${encodeURIComponent(tag)}${category ? `&cat=${category}` : ""}`}
            className="text-[13px] tracking-[0.06em] border border-[#D4DAE2] px-2.5 py-1 text-[#5C6470] hover:border-[#C05010] hover:text-[#C05010] hover:bg-[#C05010]/5 transition-all duration-200"
          >
            {tag}
          </Link>
        ))}
      </div>

      <p className="text-sm leading-relaxed text-[#5C6470] mb-3">{product.description}</p>
      <Link href={product.href} className="group/detail flex items-center gap-2 text-[14px] tracking-[0.12em] uppercase text-[#2d2a28]/40 hover:text-[#C05010] transition-colors duration-300">
        <span>{viewDetail}</span>
        <svg width="14" height="6" viewBox="0 0 14 6" fill="none" className="transition-transform group-hover/detail:translate-x-1">
          <path d="M0 3H13M13 3L10 1M13 3L10 5" stroke="currentColor" strokeWidth="1"/>
        </svg>
      </Link>
    </div>
  );
}

function IndustryTagsSection({ tags, label }: { tags: string[]; label: string }) {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  return (
    <section ref={ref} className="py-16 px-6 md:px-12 bg-[#FAFAFA] border-t border-[#D4DAE2]">
      <div className="max-w-7xl mx-auto">
        <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-6">{label}</p>
        <div className={`flex flex-wrap gap-3 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {tags.map((tag) => (
            <span key={tag} className="text-xs tracking-[0.08em] border border-[#C8D0DA] px-4 py-2 text-[#5C6470] hover:border-[#C05010] hover:text-[#C05010] transition-colors cursor-default">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureSection({ whyLabel, whyTitle, whyDesc, stats }: { whyLabel: string; whyTitle: string; whyDesc: string; stats: { number: string; label: string }[] }) {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className={`transition-all duration-1000 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <span className="section-label block mb-4">{whyLabel}</span>
            <h2 className="text-2xl md:text-3xl tracking-[0.04em] font-bold text-[#2d2a28] mb-6" style={{ whiteSpace: "pre-line" }}>
              {whyTitle}
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-[#5C6470] mb-8">
              {whyDesc}
            </p>
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <span className="text-2xl md:text-3xl font-light text-[#2d2a28] block mb-1">{stat.number}</span>
                  <span className="text-[13px] tracking-[0.06em] uppercase text-[#5C6470]">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-300 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#DCE2E8]">
              <Image src={`${S3}/images/building.jpg`} alt="NBPKOREA building" fill className="object-cover" />
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
  const t = useTranslations("products");
  const locale = useLocale();

  // URL query param으로 탭 초기화 (상세 페이지에서 돌아올 때)
  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam && ["environment", "hvac", "combustion", "burner"].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  // ── 환경시스템 ──────────────────────────────────────────────────
  const environmentProducts = [
    {
      title: "NK-RTO",
      subtitle: t("environment.nkRto.subtitle"),
      href: "/products/environment/nk-rto",
      image: `${S3}/images/%ED%99%98%EA%B2%BD%EC%82%AC%EC%97%85%EB%B6%80/Business%20Area/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EC%9A%A9%20RTO%20%EB%A0%8C%EB%8D%94%EB%A7%81-nowatermark.jpg`,
      description: t("environment.nkRto.description"),
      tags: locale === "en" ? ["Shipbuilding", "Automotive", "Chemical"] : ["조선", "자동차", "화학"],
    },
    {
      title: "NK-RCO",
      subtitle: t("environment.nkRco.subtitle"),
      href: "/products/environment/nk-rco",
      image: `${S3}/images/%ED%99%98%EA%B2%BD%EC%82%AC%EC%97%85%EB%B6%80/Business%20Area/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EC%9A%A9%20RCO%20%EB%A0%8C%EB%8D%94%EB%A7%81-nowatermark.jpg`,
      description: t("environment.nkRco.description"),
      tags: locale === "en" ? ["Heavy Industry", "Chemical", "Environmental"] : ["중공업", "화학", "환경"],
    },
    {
      title: "NK-CTO",
      subtitle: t("environment.nkCto.subtitle"),
      href: "/products/environment/nk-cto",
      image: `${S3}/images/%ED%99%98%EA%B2%BD%EC%82%AC%EC%97%85%EB%B6%80/Environment%20Business%20Division/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EC%9A%A9%20CTO%20%EB%A0%8C%EB%8D%94%EB%A7%81-nowatermark.jpg`,
      description: t("environment.nkCto.description"),
      tags: locale === "en" ? ["Semiconductor", "Painting", "Food", "Pharmaceutical"] : ["반도체", "도장", "식품", "제약"],
    },
    {
      title: "NK-TO",
      subtitle: t("environment.nkTo.subtitle"),
      href: "/products/environment/nk-to",
      image: `${S3}/images/%ED%99%98%EA%B2%BD%EC%82%AC%EC%97%85%EB%B6%80/Business%20Area/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EC%9A%A9%20DTO%20%EB%A0%8C%EB%8D%94%EB%A7%81-nowatermark.jpg`,
      description: t("environment.nkTo.description"),
      tags: locale === "en" ? ["Food Waste", "Wastewater", "Small-scale"] : ["음식물처리", "폐수처리", "소규모"],
    },
  ];

  // ── 공조시스템 ──────────────────────────────────────────────
  const hvacProducts = [
    {
      id: "cleanroom",
      title: t("hvac.cleanroom.subtitle"),
      subtitle: "Cleanroom AHU",
      href: "/products/hvac/cleanroom",
      image: `${S3}/images/hvac/cleanroom-ahu.png`,
      description: t("hvac.cleanroom.description"),
      tags: locale === "en" ? ["Semiconductor", "Pharmaceutical", "Precision"] : ["반도체", "제약", "정밀"],
    },
    {
      id: "dry-room",
      title: t("hvac.dryRoom.subtitle"),
      subtitle: "Dry Room AHU",
      href: "/products/hvac/dry-room",
      image: `${S3}/images/hvac/dry-room-ahu.png`,
      description: t("hvac.dryRoom.description"),
      tags: locale === "en" ? ["Secondary Battery", "Low-NOx"] : ["2차전지", "저녹스"],
    },
    {
      id: "direct-ahu",
      title: t("hvac.directAhu.subtitle"),
      subtitle: "Direct-Fired AHU",
      href: "/products/hvac/direct-ahu",
      image: `${S3}/images/hvac/direct-ahu.png`,
      description: t("hvac.directAhu.description"),
      tags: locale === "en" ? ["Direct-Fired", "HVAC"] : ["직화식", "공조"],
    },
    {
      id: "door-heater",
      title: t("hvac.doorHeater.subtitle"),
      subtitle: "Door Heater",
      href: "/products/hvac/door-heater",
      image: `${S3}/images/hvac/door-heater.png`,
      description: t("hvac.doorHeater.description"),
      tags: locale === "en" ? ["Entrance", "Air Curtain"] : ["출입구", "에어커튼"],
    },
    {
      id: "dehumidifier",
      title: t("hvac.dehumidifier.subtitle"),
      subtitle: "Dehumidifier",
      href: "/products/hvac/dehumidifier",
      image: `${S3}/images/hvac/dehumidifier-marine.jpg`,
      description: t("hvac.dehumidifier.description"),
      tags: locale === "en" ? ["Dehumidification", "Painting"] : ["제습", "도장"],
    },
  ];

  // ── 연소시스템 ──────────────────────────────────────────────────
  const combustionProducts = [
    {
      id: "direct-heater",
      title: t("combustion.nkgh.subtitle"),
      subtitle: "Direct-Fired Gas Heater",
      href: "/products/combustion/nkgh",
      image: `${S3}/images/%EC%97%B0%EC%86%8C/1p1.png`,
      description: t("combustion.nkgh.description"),
      tags: locale === "en" ? ["Shipbuilding", "Manufacturing", "Large Space"] : ["조선", "제조공장", "대공간"],
    },
    {
      id: "indirect-heater",
      title: t("combustion.nkIdgh.subtitle"),
      subtitle: "Indirect Gas Heater",
      href: "/products/combustion/nk-idgh",
      image: `${S3}/images/combustion/nkgh-thumb.png`,
      description: t("combustion.nkIdgh.description"),
      tags: locale === "en" ? ["Paint Booth", "Food", "Cleanroom"] : ["도장부스", "식품", "클린룸"],
    },
  ];

  // ── 산업용 버너 ───────────────────────────────────────────────
  const burnerProducts = [
    {
      id: "duct-burner",
      title: t("nav.ductBurner"),
      subtitle: t("burner.ductBurner.subtitle"),
      href: "/products/burner/duct-burner",
      image: `${S3}/images/burner/duct-burner-hero.jpg`,
      description: t("burner.ductBurner.description"),
      tags: locale === "en" ? ["Core Product", "Low NOx", "General Purpose"] : ["주력 제품", "NOx 저배출", "범용"],
    },
    {
      id: "metal-fiber-burner",
      title: t("nav.metalFiberBurner"),
      subtitle: t("burner.metalFiberBurner.subtitle"),
      href: "/products/burner/metal-fiber-burner",
      image: `${S3}/images/burner/metal-fiber-burner-thumb.png`,
      description: t("burner.metalFiberBurner.description"),
      tags: locale === "en" ? ["Ceramic", "Metal Fiber", "Infrared", "Low NOx"] : ["세라믹", "메탈섬유", "적외선", "저NOx"],
    },
    {
      id: "ceramic-burner",
      title: locale === "en" ? "Ceramic Burner" : "세라믹 버너",
      subtitle: "Ceramic Burner",
      href: "/products/burner/ceramic-burner",
      image: `${S3}/images/burner/ceramic-burner.jpg`,
      description: locale === "en"
        ? "A surface combustion burner utilizing heat-resistant ceramic material as the combustion surface. It maximizes infrared radiant heat for outstanding energy efficiency and achieves uniform heat distribution."
        : "내열 세라믹 소재를 연소면으로 활용한 표면연소 버너. 적외선 복사열을 극대화하여 에너지 효율이 뛰어나며 균일한 열분포를 실현합니다.",
      tags: locale === "en" ? ["Ceramic", "Infrared", "Surface Combustion"] : ["세라믹", "적외선", "표면연소"],
    },
    {
      id: "cylindrical-metal-burner",
      title: locale === "en" ? "Cylindrical Metal Burner" : "실린더형 메탈 버너",
      subtitle: "Cylindrical Metal Burner",
      href: "/products/burner/portable-burner",
      image: `${S3}/images/burner/metal-burner2.png`,
      description: locale === "en"
        ? "Mobile industrial burner that can be deployed directly to job sites for immediate operation without fixed equipment. Optimized for shipyard block heating, concrete curing, and ship tank drying."
        : "고정 설비 없이 현장에 직접 투입해 즉시 운전 가능한 이동형 산업용 버너. 조선소 블록 가열, 콘크리트 양생, 선박 탱크 건조 등 이동성·임시성이 필요한 현장에 최적화.",
      tags: locale === "en" ? ["Cylindrical", "Portable", "Multi-Fuel"] : ["실린더형", "이동형", "다연료"],
    },
    {
      id: "furnace-burner",
      title: t("nav.furnaceBurner"),
      subtitle: t("burner.furnaceBurner.subtitle"),
      href: "/products/burner/furnace-burner",
      image: `${S3}/images/burner/furnace-burner-main.jpg`,
      description: t("burner.furnaceBurner.description"),
      tags: locale === "en" ? ["Furnace", "High Temp"] : ["로용", "고온"],
    },
    {
      id: "low-nox-burner",
      title: t("nav.lowNoxBurner"),
      subtitle: t("burner.lowNoxBurner.subtitle"),
      href: "/products/burner/low-nox-burner",
      image: `${S3}/images/burner/low-nox-burner-main.png`,
      description: t("burner.lowNoxBurner.description"),
      tags: locale === "en" ? ["Low NOx", "Low Emission"] : ["Low NOx", "저배출"],
    },
    {
      id: "oven-burner",
      title: t("nav.ovenBurner"),
      subtitle: t("burner.ovenBurner.subtitle"),
      href: "/products/burner/oven-burner",
      image: `${S3}/images/burner/fpb/air-heating-burners-40199-6454995.jpg`,
      description: t("burner.ovenBurner.description"),
      tags: locale === "en" ? ["Oven", "Heat Treatment"] : ["오븐", "열처리"],
    },
    {
      id: "fpb-burner",
      title: t("nav.fpbBurner"),
      subtitle: t("burner.fpbBurner.subtitle"),
      href: "/products/burner/fpb-burner",
      image: `${S3}/images/burner/mpg-burner-main.jpg`,
      description: t("burner.fpbBurner.description"),
      tags: locale === "en" ? ["MPG Burner"] : ["MPG 버너"],
    },
    {
      id: "valve-train",
      title: t("nav.valveTrain"),
      subtitle: t("burner.valveTrain.subtitle"),
      href: "/products/burner/valve-train",
      image: `${S3}/images/burner/valve-train-main.jpg`,
      description: t("burner.valveTrain.description"),
      tags: locale === "en" ? ["Valve Train", "Gas Control", "Parts"] : ["밸브트레인", "가스제어", "부품류"],
    },
  ];

  const industryTags = t.raw("common.industryTags") as string[];
  const whyStats = [
    { number: t("common.whyPatentsNum"), label: t("common.whyPatentsLabel") },
    { number: t("common.whyDeliveriesNum"), label: t("common.whyDeliveriesLabel") },
    { number: t("common.whyServiceNum"), label: t("common.whyServiceLabel") },
  ];

  return (
    <SubpageLayout
      title={t("title")}
      subtitle={t("subtitle")}
      breadcrumb={[{ label: t("breadcrumb"), href: "/products" }]}
    >
      {/* 공통 ProductNav */}
      <ProductNav
        activeTab={activeTab as "environment" | "hvac" | "combustion" | "burner"}
        onTabChange={setActiveTab}
      />

      {/* Product Content */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          {/* 환경시스템 */}
          {activeTab === "environment" && (
            <div>
              <div className="grid grid-cols-2 lg:flex lg:gap-6 [&>*]:lg:flex-1">
                {environmentProducts.map((product, index) => (
                  <ProductCard key={product.title} product={product} viewDetail={t("viewDetail")} index={index} category="environment" />
                ))}
              </div>
              <div className="mt-12 flex justify-center">
                <Link
                  href="/performance?cat=environment"
                  className="inline-flex items-center gap-3 px-6 py-3 border border-[#C05010] text-[#C05010] text-[13px] tracking-[0.04em] hover:bg-[#C05010] hover:text-white transition-all duration-300"
                >
                  {locale === "en" ? "View Environmental System Case Studies" : "환경시스템 설치사례 보러가기"}
                  <svg width="14" height="6" viewBox="0 0 14 6" fill="none"><path d="M0 3H13M13 3L10 1M13 3L10 5" stroke="currentColor" strokeWidth="1" /></svg>
                </Link>
              </div>
            </div>
          )}

          {/* 공조시스템 */}
          {activeTab === "hvac" && (
            <div>
              <div className="grid grid-cols-2 lg:flex lg:gap-6 [&>*]:lg:flex-1">
                {hvacProducts.map((product, index) => (
                  <ProductCard key={product.title} product={product} viewDetail={t("viewDetail")} index={index} category="hvac" />
                ))}
              </div>
              <div className="mt-12 flex justify-center">
                <Link
                  href="/performance?cat=hvac"
                  className="inline-flex items-center gap-3 px-6 py-3 border border-[#C05010] text-[#C05010] text-[13px] tracking-[0.04em] hover:bg-[#C05010] hover:text-white transition-all duration-300"
                >
                  {locale === "en" ? "View HVAC System Case Studies" : "공조시스템 설치사례 보러가기"}
                  <svg width="14" height="6" viewBox="0 0 14 6" fill="none"><path d="M0 3H13M13 3L10 1M13 3L10 5" stroke="currentColor" strokeWidth="1" /></svg>
                </Link>
              </div>
            </div>
          )}

          {/* 연소시스템 */}
          {activeTab === "combustion" && (
            <div>
              <div className="grid grid-cols-2 lg:flex lg:gap-6 [&>*]:lg:flex-1 lg:max-w-3xl">
                {combustionProducts.map((product, index) => (
                  <ProductCard key={product.title} product={product} viewDetail={t("viewDetail")} index={index} category="combustion" />
                ))}
              </div>
              <div className="mt-12 flex justify-center">
                <Link
                  href="/performance?cat=combustion"
                  className="inline-flex items-center gap-3 px-6 py-3 border border-[#C05010] text-[#C05010] text-[13px] tracking-[0.04em] hover:bg-[#C05010] hover:text-white transition-all duration-300"
                >
                  {locale === "en" ? "View Combustion System Case Studies" : "연소시스템 설치사례 보러가기"}
                  <svg width="14" height="6" viewBox="0 0 14 6" fill="none"><path d="M0 3H13M13 3L10 1M13 3L10 5" stroke="currentColor" strokeWidth="1" /></svg>
                </Link>
              </div>
            </div>
          )}

          {/* 산업용 버너 — 7개 → 데스크탑 1행 4개 + 2행 3개 균등 */}
          {activeTab === "burner" && (
            <div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {burnerProducts.map((product, index) => (
                  <ProductCard key={product.title} product={product} viewDetail={t("viewDetail")} index={index} category="burner" />
                ))}
              </div>
              <div className="mt-12 flex justify-center">
                <Link
                  href="/performance?cat=burner"
                  className="inline-flex items-center gap-3 px-6 py-3 border border-[#C05010] text-[#C05010] text-[13px] tracking-[0.04em] hover:bg-[#C05010] hover:text-white transition-all duration-300"
                >
                  {locale === "en" ? "View Industrial Burner Case Studies" : "산업용 버너 설치사례 보러가기"}
                  <svg width="14" height="6" viewBox="0 0 14 6" fill="none"><path d="M0 3H13M13 3L10 1M13 3L10 5" stroke="currentColor" strokeWidth="1" /></svg>
                </Link>
              </div>
            </div>
          )}

        </div>
      </section>

      <IndustryTagsSection tags={industryTags} label={t("common.industryLabel")} />
      <FeatureSection
        whyLabel={t("common.whyLabel")}
        whyTitle={t("common.whyTitle")}
        whyDesc={t("common.whyDesc")}
        stats={whyStats}
      />

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl tracking-[0.04em] font-bold text-[#2d2a28] mb-4">
            {t("common.ctaTitle")}
          </h2>
          <p className="text-sm text-[#5C6470] tracking-[0.08em] mb-8">
            {t("common.ctaMainDesc")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/support?type=catalog"
              className="inline-flex items-center gap-3 text-xs tracking-[0.06em] uppercase border border-[#D4DAE2] px-8 py-4 text-[#5C6470] hover:border-[#C05010] hover:text-[#C05010] transition-all"
            >
              {locale === "en" ? "Request Catalog" : "카탈로그 신청"}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1"/>
              </svg>
            </Link>
            <Link
              href="/support"
              className="inline-flex items-center gap-3 text-xs tracking-[0.06em] uppercase bg-[#C05010] text-white px-8 py-4 hover:bg-[#2d2a28] transition-all"
            >
              {t("common.ctaButton")}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1"/>
              </svg>
            </Link>
          </div>
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
