"use client";

import SubpageLayout from "@/components/SubpageLayout";
import ClientsSection from "@/components/ClientsSection";
import { useInView } from "@/hooks/useInView";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

export default function BusinessPage() {
  const t = useTranslations("business");
  const locale = useLocale();
  const { ref: divRef, isInView: divInView } = useInView({ threshold: 0.1 });
  const { ref: statsRef, isInView: statsInView } = useInView({ threshold: 0.2 });

  const divisions = [
    {
      id: "environment",
      title: t("environment.title"),
      subtitle: "Environmental Systems",
      desc: locale === "en" ? "Environmental systems for VOCs & odor treatment including RTO, RCO, CTO, TO" : "RTO, RCO, CTO, TO 등 VOCs·악취 처리 환경시스템",
      image: `${S3}/images/combustion-site-hd.jpg`,
      href: "/business/environment",
      highlight: locale === "en" ? "99%+ VOCs Removal" : "99%+ VOCs 제거",
    },
    {
      id: "hvac",
      title: t("hvac.title"),
      subtitle: "HVAC Systems",
      desc: locale === "en" ? "Precision HVAC systems including cleanroom, dry room, and direct-fired AHU" : "클린룸, 드라이룸, 직화식 공조기 등 정밀 공조 시스템",
      image: `${S3}/images/hvac/hvac-main.png`,
      href: "/business/hvac",
      highlight: locale === "en" ? "Semiconductor & Battery" : "반도체·2차전지 대응",
    },
    {
      id: "combustion",
      title: t("combustion.title"),
      subtitle: "Combustion Systems",
      desc: locale === "en" ? "Industrial combustion equipment including direct/indirect gas heaters" : "직화식·간접식 가스히터 등 산업용 연소장비",
      image: `${S3}/images/combustion-main.jpeg`,
      href: "/business/combustion",
      highlight: locale === "en" ? "Shipbuilding & Automotive" : "조선·자동차 납품",
    },
    {
      id: "burner",
      title: t("burner.title"),
      subtitle: "Industrial Burners",
      desc: locale === "en" ? "Low-NOx burner lineup including duct, MPG, and metal fiber burners" : "덕트버너, MPG 버너, 메탈파이버 등 NOx 저배출 버너 라인업",
      image: `${S3}/images/burner/duct-burner-hero.jpg`,
      href: "/business/burner",
      highlight: locale === "en" ? "MIDCO Tech Alliance" : "MIDCO 기술 제휴",
    },
  ];

  const stats = [
    { value: locale === "en" ? "20+" : "20년+", label: t("stats.years"), sub: t("stats.yearsSub") },
    { value: "80+", label: t("stats.clients"), sub: t("stats.clientsSub") },
    { value: "17", label: t("stats.patents"), sub: t("stats.patentsSub") },
    { value: locale === "en" ? "3" : "3개국", label: t("stats.partners"), sub: t("stats.partnersSub") },
  ];

  return (
    <SubpageLayout
      title={t("title")}
      subtitle={t("subtitle")}
      breadcrumb={[{ label: t("breadcrumb"), href: "/business" }]}
    >
      {/* ── 사업부 2x2 그리드 (사진 카드 + 호버 오버레이) ── */}
      <section ref={divRef} className="py-20 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {divisions.map((div, index) => (
              <Link
                key={div.id}
                href={div.href}
                className={`group relative block aspect-[16/10] overflow-hidden transition-all duration-700 ${
                  divInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* 사진 — 호버 시 확대만 */}
                <Image
                  src={div.image}
                  alt={div.title}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />

                {/* 하단 그라데이션 (고정) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                {/* 하단 텍스트 (항상 표시) */}
                <div className="absolute bottom-0 left-0 right-0 px-5 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h3 className="text-base md:text-lg font-bold text-white">{div.title}</h3>
                    <span className="text-xs text-white/70 hidden md:inline">|</span>
                    <span className="text-xs text-[#C05010] font-medium hidden md:inline">{div.highlight}</span>
                  </div>
                  <span className="text-xs tracking-[0.06em] uppercase text-white/50">{div.subtitle}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 숫자 실적 ── */}
      <section ref={statsRef} className="py-16 md:py-20 px-6 md:px-12 bg-[#2d2a28]">
        <div className="max-w-7xl mx-auto">
          <div
            className={`grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ${
              statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#C05010] block mb-2">
                  {stat.value}
                </span>
                <span className="text-base font-semibold text-white block mb-1">
                  {stat.label}
                </span>
                <span className="text-xs text-[#C8C3BD]">{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 주요 거래처 (홈페이지와 동일한 마퀴) ── */}
      <ClientsSection />

      {/* ── CTA ── */}
      <section className="py-20 md:py-24 px-6 md:px-12 bg-white border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2d2a28] mb-4">
            {locale === "en" ? "Need a Custom System Solution?" : "맞춤 시스템 솔루션이 필요하신가요?"}
          </h2>
          <p className="text-sm md:text-base text-[#5C6470] mb-8 max-w-xl mx-auto leading-relaxed">
            {locale === "en" ? "We propose optimal environmental and combustion systems for your site conditions." : "현장 조건에 맞는 최적의 환경·연소 시스템을 제안해 드립니다."}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/support?type=catalog"
              className="inline-flex items-center gap-3 text-sm tracking-[0.04em] border border-[#D4DAE2] px-8 py-4 text-[#5C6470] hover:border-[#C05010] hover:text-[#C05010] transition-all duration-300"
            >
              {locale === "en" ? "Request Catalog" : "카탈로그 신청"}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1" />
              </svg>
            </Link>
            <Link
              href="/support"
              className="inline-flex items-center gap-3 text-sm tracking-[0.04em] bg-[#C05010] text-white px-8 py-4 hover:bg-[#2d2a28] transition-all duration-300"
            >
              {locale === "en" ? "Contact Us" : "상담 문의하기"}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
