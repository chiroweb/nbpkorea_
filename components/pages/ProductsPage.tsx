"use client";

import SubpageLayout from "@/components/SubpageLayout";
import ProductNav from "@/components/ProductNav";
import { useInView } from "@/hooks/useInView";
import { Link } from "@/i18n/navigation";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

// ── 환경설비 카드 ──────────────────────────────────────────────
function EnvironmentCard({ product, viewDetail, index }: { product: { title: string; subtitle: string; href: string; image: string; description: string; tags: string[] }; viewDetail: string; index: number }) {
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
          <h3 className="text-lg md:text-xl tracking-[0.08em] font-bold text-[#2d2a28] mb-3 group-hover:text-[#C05010] transition-colors duration-300">
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
            <span>{viewDetail}</span>
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
function CombustionCard({ product, viewDetail, index }: { product: { id: string; title: string; subtitle: string; href: string; image: string; description: string; tags: string[] }; viewDetail: string; index: number }) {
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
          <h3 className="text-lg md:text-xl tracking-[0.08em] font-bold text-[#2d2a28] mb-3 group-hover:text-[#C05010] transition-colors duration-300">
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
            <span>{viewDetail}</span>
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
function BurnerCard({ product, viewDetail, index }: { product: { id: string; title: string; subtitle: string; href: string; image: string; description: string; tags: string[] }; viewDetail: string; index: number }) {
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
          <h3 className="text-lg md:text-xl tracking-[0.08em] font-bold text-[#2d2a28] mb-3 group-hover:text-[#C05010] transition-colors duration-300">
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
            <span>{viewDetail}</span>
            <svg width="14" height="6" viewBox="0 0 14 6" fill="none" className="transition-transform group-hover:translate-x-1">
              <path d="M0 3H13M13 3L10 1M13 3L10 5" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
}

function IndustryTagsSection({ tags, label }: { tags: string[]; label: string }) {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  return (
    <section ref={ref} className="py-16 px-6 md:px-12 bg-[#F2F4F7] border-t border-[#D4DAE2]">
      <div className="max-w-7xl mx-auto">
        <p className="text-[13px] tracking-[0.2em] uppercase text-[#888480] mb-6">{label}</p>
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

function FeatureSection({ whyLabel, whyTitle, whyDesc, stats }: { whyLabel: string; whyTitle: string; whyDesc: string; stats: { number: string; label: string }[] }) {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-[#F2F4F7]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className={`transition-all duration-1000 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <span className="section-label block mb-4">{whyLabel}</span>
            <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-bold text-[#2d2a28] mb-6" style={{ whiteSpace: "pre-line" }}>
              {whyTitle}
            </h2>
            <p className="text-sm leading-[2] text-[#888480] mb-8">
              {whyDesc}
            </p>
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <span className="text-2xl md:text-3xl font-light text-[#2d2a28] block mb-1">{stat.number}</span>
                  <span className="text-[13px] tracking-[0.15em] uppercase text-[#888480]">{stat.label}</span>
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

  // URL query param으로 탭 초기화 (상세 페이지에서 돌아올 때)
  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam && ["environment", "combustion", "burner"].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  // ── 환경설비 ──────────────────────────────────────────────────
  const environmentProducts = [
    {
      title: "NK-CTO",
      subtitle: t("environment.nkCto.subtitle"),
      href: "/products/environment/nk-cto",
      image: `${S3}/images/%ED%99%98%EA%B2%BD%EC%82%AC%EC%97%85%EB%B6%80/Environment%20Business%20Division/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EC%9A%A9%20CTO%20%EB%A0%8C%EB%8D%94%EB%A7%81-nowatermark.jpg`,
      description: t("environment.nkCto.description"),
      tags: ["반도체", "도장", "식품", "제약"],
    },
    {
      title: "NK-RTO",
      subtitle: t("environment.nkRto.subtitle"),
      href: "/products/environment/nk-rto",
      image: `${S3}/images/%ED%99%98%EA%B2%BD%EC%82%AC%EC%97%85%EB%B6%80/Business%20Area/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EC%9A%A9%20RTO%20%EB%A0%8C%EB%8D%94%EB%A7%81-nowatermark.jpg`,
      description: t("environment.nkRto.description"),
      tags: ["조선", "자동차", "화학"],
    },
    {
      title: "NK-RCO",
      subtitle: t("environment.nkRco.subtitle"),
      href: "/products/environment/nk-rco",
      image: `${S3}/images/%ED%99%98%EA%B2%BD%EC%82%AC%EC%97%85%EB%B6%80/Business%20Area/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EC%9A%A9%20RCO%20%EB%A0%8C%EB%8D%94%EB%A7%81-nowatermark.jpg`,
      description: t("environment.nkRco.description"),
      tags: ["중공업", "화학", "환경"],
    },
    {
      title: "NK-TO",
      subtitle: t("environment.nkTo.subtitle"),
      href: "/products/environment/nk-to",
      image: `${S3}/images/%ED%99%98%EA%B2%BD%EC%82%AC%EC%97%85%EB%B6%80/Business%20Area/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EC%9A%A9%20DTO%20%EB%A0%8C%EB%8D%94%EB%A7%81-nowatermark.jpg`,
      description: t("environment.nkTo.description"),
      tags: ["음식물처리", "폐수처리", "소규모"],
    },
  ];

  // ── 연소설비 ──────────────────────────────────────────────────
  const combustionProducts = [
    {
      id: "direct-heater",
      title: t("combustion.nkgh.subtitle"),
      subtitle: "Direct Gas Heater (NKGH Series)",
      href: "/products/combustion/nkgh",
      image: `${S3}/images/%EC%97%B0%EC%86%8C/1p1.png`,
      description: t("combustion.nkgh.description"),
      tags: ["조선", "제조공장", "대공간"],
    },
    {
      id: "indirect-heater",
      title: t("combustion.nkIdgh.subtitle"),
      subtitle: "Indirect Gas Heater (NK-IDGH Series)",
      href: "/products/combustion/nk-idgh",
      image: `${S3}/images/%EA%B0%84%EC%A0%91%EC%8B%9D/2-100.png`,
      description: t("combustion.nkIdgh.description"),
      tags: ["도장부스", "식품", "클린룸"],
    },
    {
      id: "dehumidifier",
      title: t("combustion.dehumidifier.subtitle"),
      subtitle: "Hybrid Dehumidifier (NK-NDGH Series)",
      href: "/products/combustion/dehumidifier",
      image: `${S3}/images/humidremover.jpg`,
      description: t("combustion.dehumidifier.description"),
      tags: ["조선", "도장전처리", "클린룸"],
    },
    {
      id: "paint-dryer",
      title: t("combustion.paintDryer.subtitle"),
      subtitle: "Paint Dryer System",
      href: "/products/combustion/paint-dryer",
      image: `${S3}/images/forcar.png`,
      description: t("combustion.paintDryer.description"),
      tags: ["자동차", "도장부스"],
    },
  ];

  // ── 산업용 버너 ───────────────────────────────────────────────
  const burnerProducts = [
    {
      id: "duct-burner",
      title: t("nav.ductBurner"),
      subtitle: t("burner.ductBurner.subtitle"),
      href: "/products/burner/duct-burner",
      image: `${S3}/images/burner/1FT.png`,
      description: t("burner.ductBurner.description"),
      tags: ["주력 제품", "NOₓ 저배출", "범용"],
    },
    {
      id: "line-burner",
      title: t("nav.lineBurner"),
      subtitle: t("burner.lineBurner.subtitle"),
      href: "/products/burner/line-burner",
      image: `${S3}/images/burner/line-burner.png`,
      description: t("burner.lineBurner.description"),
      tags: ["연속공정", "직선가열"],
    },
    {
      id: "portable-burner",
      title: t("nav.portableBurner"),
      subtitle: t("burner.portableBurner.subtitle"),
      href: "/products/burner/portable-burner",
      image: `${S3}/images/burner/portable-40man.png`,
      description: t("burner.portableBurner.description"),
      tags: ["이동형", "특수용도"],
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
                <EnvironmentCard key={product.title} product={product} viewDetail={t("viewDetail")} index={index} />
              ))}
            </div>
          )}

          {/* 연소설비 — 4열 링크 카드 */}
          {activeTab === "combustion" && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
              {combustionProducts.map((product, index) => (
                <CombustionCard key={product.id} product={product} viewDetail={t("viewDetail")} index={index} />
              ))}
            </div>
          )}

          {/* 산업용 버너 — 4열 링크 카드 */}
          {activeTab === "burner" && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
              {burnerProducts.map((product, index) => (
                <BurnerCard key={product.id} product={product} viewDetail={t("viewDetail")} index={index} />
              ))}
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
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-bold text-[#2d2a28] mb-4">
            {t("common.ctaTitle")}
          </h2>
          <p className="text-sm text-[#888480] tracking-[0.08em] mb-8">
            {t("common.ctaMainDesc")}
          </p>
          <Link
            href="/support"
            className="inline-flex items-center gap-3 text-xs tracking-[0.15em] uppercase border border-[#2d2a28] px-8 py-4 hover:bg-[#C05010] hover:text-white transition-all"
          >
            {t("common.ctaButton")}
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
