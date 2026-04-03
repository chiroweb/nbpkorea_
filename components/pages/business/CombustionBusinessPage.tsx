"use client";

import SubpageLayout from "@/components/SubpageLayout";
import { useInView } from "@/hooks/useInView";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useState } from "react";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

/* ── 제품 라인업 (연소시스템만) ── */
const products = [
  {
    title: "직화식 가스히터",
    subtitle: "Direct-Fired Gas Heater",
    desc: "대공간 직접 난방. 조선소·제조공장 블록 건조 및 동절기 난방에 최적화.",
    image: `${S3}/images/%EC%97%B0%EC%86%8C/1p1.png`,
    href: "/products/combustion/nkgh",
  },
  {
    title: "간접식 가스히터",
    subtitle: "Indirect Gas Heater",
    desc: "열교환기 방식으로 깨끗한 열풍 공급. 도장부스·식품·클린룸 적용.",
    image: `${S3}/images/combustion/indirect-heater-thumb.jpg`,
    href: "/products/combustion/nk-idgh",
  },
];

/* ── 핵심 가치 3개 ── */
const coreValues = [
  {
    title: "고효율 연소 설계",
    desc: "2단 연소(Two-Stage) 방식과 자체 개발 버너 기술로 에너지 효율을 극대화하고, NOx·CO 배출을 최소화합니다.",
  },
  {
    title: "현장 맞춤 솔루션",
    desc: "조선소 대공간부터 식품 클린룸까지, 현장 조건에 맞는 열량·풍량·온도를 설계하여 최적의 연소 시스템을 제안합니다.",
  },
  {
    title: "설계부터 A/S까지 원스톱",
    desc: "자체 설계·제작·시공·시운전·A/S를 일괄 수행합니다. 전국 서비스망으로 빠른 대응이 가능합니다.",
  },
];

/* ── 기술 특징 ── */
const techFeatures = [
  "2단 연소(Two-Stage) 방식으로 NOx·CO 배출 최소화",
  "ANSI Z83.4 / Z83.18 국제 기준 적합",
  "직화식·간접식 연소 방식 모두 자체 설계·생산",
  "LNG / LPG 다연료 대응 — 노즐 교체 불필요",
  "현장 조건에 맞춘 맞춤형 열량 설계",
  "조선·자동차·반도체·식품 등 다양한 산업 검증",
];

/* ── 적용 분야 (사진 카드 + 호버 오버레이) ── */
const industries = [
  {
    name: "조선/해양",
    desc: "선박 블록 건조, 도장 건조, 탱크 제습 등 대형 공간 가열",
    clients: "한화오션, 현대중공업, 삼성중공업",
    image: `${S3}/assets/industry1.png`,
    tag: "조선",
  },
  {
    name: "자동차",
    desc: "도장 부스 열풍 공급, 건조 라인 가열",
    clients: "BMW, Mercedes-Benz, KIA",
    image: `${S3}/assets/industry2.png`,
    tag: "자동차",
  },
  {
    name: "반도체/디스플레이",
    desc: "클린룸 보조 열원, 공정 가열 등 정밀 온도 제어",
    clients: "반도체·디스플레이 주요 제조사",
    image: `${S3}/images/intro2.jpg`,
    tag: "반도체",
  },
  {
    name: "식품/제약",
    desc: "농수산물 건조, 식품 가공, 제약 GMP 공정",
    clients: "농협목우촌, 이디야커피",
    image: `${S3}/images/into3.jpg`,
    tag: "식품",
  },
  {
    name: "중공업/철강",
    desc: "열처리로, 가열로, 소각로 등 고온 연소 설비",
    clients: "POSCO, 동국제강, 두산",
    image: `${S3}/assets/industry3.png`,
    tag: "중공업",
  },
  {
    name: "에너지/화학",
    desc: "석유화학 플랜트, 발전소 등 대규모 열원",
    clients: "에너지·화학 주요 기업",
    image: `${S3}/images/company/building-1.jpg`,
    tag: "에너지",
  },
];

/* ── 글로벌 파트너 ── */
const partners = [
  {
    name: "MIDCO International",
    country: "미국",
    desc: "산업용 버너·연소 시스템 전문 제조사. 50년 이상의 연소 기술 노하우를 보유하고 있으며, NBPKOREA와 2007년부터 기술 제휴 관계를 유지하고 있습니다.",
    since: "2007",
    logo: `${S3}/images/midco.webp`,
    href: "https://midcointernational.com/",
  },
  {
    name: "ECOSTAR",
    country: "터키",
    desc: "산업용 환경시스템 전문 기업. 유럽·중동 시장을 기반으로 한 기술 파트너로, NBPKOREA와 2013년부터 협력하고 있습니다.",
    since: "2013",
    logo: `${S3}/images/ecostar.png`,
    href: "https://www.ecostar.com.tr",
  },
];

function IndustryCard({ item, index }: { item: (typeof industries)[0]; index: number }) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
    <Link
      href={`/performance?tag=${encodeURIComponent(item.tag)}&cat=combustion`}
      className="group relative block aspect-[4/3] overflow-hidden"
    >
      {/* 배경 사진 */}
      <Image
        src={item.image}
        alt={item.name}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-700"
      />

      {/* 기본: 하단 그라데이션 + 제목 */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/70 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-lg font-bold text-white">{item.name}</h3>
      </div>

      {/* 호버: 어두운 오버레이 + 상세 설명 올라옴 */}
      <div className="absolute inset-0 bg-[#2d2a28]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center p-6">
        <h3 className="text-lg font-bold text-white mb-3">{item.name}</h3>
        <p className="text-sm text-white/80 leading-relaxed mb-4">{item.desc}</p>
        <p className="text-xs text-white/50 mb-4">{item.clients}</p>
        <span className="inline-flex items-center gap-2 text-xs text-[#C05010]">
          납품 실적 보기
          <svg width="14" height="6" viewBox="0 0 14 6" fill="none">
            <path d="M0 3H13M13 3L10 1M13 3L10 5" stroke="currentColor" strokeWidth="1" />
          </svg>
        </span>
      </div>
    </Link>
    </div>
  );
}

export default function CombustionBusinessPage() {
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: aboutRef, isInView: aboutInView } = useInView({ threshold: 0.1 });
  const { ref: statsRef, isInView: statsInView } = useInView({ threshold: 0.1 });
  const { ref: productRef, isInView: productInView } = useInView({ threshold: 0.1 });
  const { ref: industryRef, isInView: industryInView } = useInView({ threshold: 0.1 });
  const { ref: techRef, isInView: techInView } = useInView({ threshold: 0.1 });
  const { ref: partnerRef, isInView: partnerInView } = useInView({ threshold: 0.1 });

  return (
    <SubpageLayout
      title="연소시스템 사업부"
      subtitle="Combustion Systems Division"
      breadcrumb={[
        { label: "사업분야", href: "/business" },
        { label: "연소시스템", href: "/business/combustion" },
      ]}
    >
      {/* ── 1. 히어로 ── */}
      <section ref={heroRef} className="relative overflow-hidden">
        <div className="relative aspect-[21/9] md:aspect-[21/7] w-full bg-[#1a1a1a]">
          <Image
            src={`${S3}/images/combustion-main.jpeg`}
            alt="NBPKOREA 연소시스템 현장"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/90 via-[#1a1a1a]/50 to-transparent" />
          <div
            className={`absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-4xl transition-all duration-1000 ${
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-xs tracking-[0.1em] uppercase text-[#C05010] mb-3">
              Combustion Systems
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-snug">
              산업 현장의 열을 설계합니다
            </h2>
            <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-2xl">
              산업용 직접·간접 가스히터, 복합식 제습기 등 고효율 연소장비를 설계·제작·공급합니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. "이 사업부가 하는 일" — 선언적 메시지 + 핵심 가치 3개 ── */}
      <section ref={aboutRef} className="py-20 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div
            className={`max-w-3xl mb-16 transition-all duration-1000 ${
              aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg md:text-xl lg:text-2xl text-[#2d2a28] leading-relaxed font-light">
              NBPKOREA 연소시스템 사업부는 <strong className="font-bold">조선, 자동차, 반도체, 식품</strong> 등
              국내 주요 산업 현장에 고효율 연소장비를 공급하고 있습니다.
              2006년 설립 이래 <strong className="font-bold">80여 고객사</strong>에 납품하며 쌓아온 기술력으로,
              현장 조건에 최적화된 연소 솔루션을 제안합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {coreValues.map((value, index) => (
              <div
                key={value.title}
                className={`border-t-2 border-[#C05010] pt-6 transition-all duration-1000 ${
                  aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <h3 className="text-base md:text-lg font-bold text-[#2d2a28] mb-3">{value.title}</h3>
                <p className="text-sm md:text-base text-[#5C6470] leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. 숫자 실적 블록 ── */}
      <section ref={statsRef} className="py-16 md:py-20 px-6 md:px-12 bg-[#2d2a28]">
        <div className="max-w-7xl mx-auto">
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 transition-all duration-1000 ${
              statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {[
              { number: "20년+", label: "업력", sub: "2006년 설립" },
              { number: "80+", label: "납품 실적", sub: "국내외 고객사" },
              { number: "17건", label: "등록 특허", sub: "독자 기술 특허" },
              { number: "3개국", label: "글로벌 파트너", sub: "미국 · 터키" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center md:text-left"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#C05010] block mb-2">
                  {stat.number}
                </span>
                <span className="text-base font-semibold text-white block mb-1">{stat.label}</span>
                <span className="text-xs text-[#C8C3BD]">{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. 제품 라인업 ── */}
      <section ref={productRef} className="py-20 md:py-24 px-6 md:px-12 bg-[#F5F7F8]">
        <div className="max-w-7xl mx-auto">
          <div
            className={`mb-14 transition-all duration-1000 ${
              productInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="section-label block mb-4">Products</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2d2a28] mb-4">제품 라인업</h2>
            <p className="text-sm md:text-base text-[#5C6470] max-w-2xl leading-relaxed">
              직화식·간접식 가스히터를 중심으로 현장 조건에 맞는 연소 솔루션을 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
            {products.map((product, index) => (
              <Link
                href={product.href}
                key={product.title}
                className={`group block transition-all duration-700 ${
                  productInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#FAFAFA] border border-[#D4DAE2] group-hover:border-[#C05010]/50 transition-colors duration-300">
                  <Image src={product.image} alt={product.title} fill className="object-contain group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="mt-4">
                  <span className="text-xs tracking-[0.06em] uppercase text-[#5C6470]">{product.subtitle}</span>
                  <h3 className="text-lg font-bold text-[#2d2a28] group-hover:text-[#C05010] transition-colors mt-1">{product.title}</h3>
                  <p className="text-sm text-[#5C6470] leading-relaxed mt-2">{product.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-14 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/products?tab=combustion"
              className="inline-flex items-center justify-center gap-3 text-sm tracking-[0.04em] border border-[#2d2a28] px-8 py-4 hover:bg-[#C05010] hover:border-[#C05010] hover:text-white transition-all duration-300"
            >
              연소시스템 전체 제품 보기
              <svg width="14" height="6" viewBox="0 0 14 6" fill="none"><path d="M0 3H13M13 3L10 1M13 3L10 5" stroke="currentColor" strokeWidth="1" /></svg>
            </Link>
            <Link
              href="/business/burner"
              className="inline-flex items-center justify-center gap-3 text-sm tracking-[0.04em] border border-[#D4DAE2] px-8 py-4 text-[#5C6470] hover:border-[#C05010] hover:text-[#C05010] transition-all duration-300"
            >
              산업용 버너 사업부 보기
              <svg width="14" height="6" viewBox="0 0 14 6" fill="none"><path d="M0 3H13M13 3L10 1M13 3L10 5" stroke="currentColor" strokeWidth="1" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. 적용 분야 (사진 카드 3x2 + 호버 오버레이) ── */}
      <section ref={industryRef} className="py-20 md:py-24 px-6 md:px-12 bg-[#F5F7F8]">
        <div className="max-w-7xl mx-auto">
          <div
            className={`mb-14 transition-all duration-1000 ${
              industryInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="section-label block mb-4">Applications</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2d2a28] mb-4">적용 분야</h2>
            <p className="text-sm md:text-base text-[#5C6470] max-w-2xl leading-relaxed">
              NBPKOREA의 연소시스템는 조선, 자동차, 반도체부터 식품, 에너지까지
              다양한 산업 현장에서 검증되고 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {industries.map((item, index) => (
              <IndustryCard key={item.name} item={item} index={index} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/performance?cat=combustion"
              className="inline-flex items-center gap-3 text-sm tracking-[0.04em] border border-[#2d2a28] px-8 py-4 hover:bg-[#C05010] hover:border-[#C05010] hover:text-white transition-all duration-300"
            >
              연소시스템 납품 실적 보기
              <svg width="14" height="6" viewBox="0 0 14 6" fill="none"><path d="M0 3H13M13 3L10 1M13 3L10 5" stroke="currentColor" strokeWidth="1" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. 기술 강점 (좌측 큰 수치 + 우측 리스트) ── */}
      <section ref={techRef} className="py-20 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div
            className={`mb-14 transition-all duration-1000 ${
              techInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="section-label block mb-4">Technology</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2d2a28]">기술 강점</h2>
          </div>

          <div className="grid md:grid-cols-5 gap-8 md:gap-12">
            <div
              className={`md:col-span-2 flex flex-col gap-8 transition-all duration-1000 ${
                techInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              {[
                { number: "17건+", label: "등록 특허", desc: "연소 기술 관련 독자 특허 보유" },
                { number: "2007~", label: "MIDCO 기술 제휴", desc: "미국 MIDCO International 파트너십" },
              ].map((stat) => (
                <div key={stat.label} className="border-l-2 border-[#C05010] pl-6">
                  <span className="text-4xl md:text-5xl font-bold text-[#C05010] block mb-1">{stat.number}</span>
                  <span className="text-base font-semibold text-[#2d2a28] block mb-2">{stat.label}</span>
                  <p className="text-sm text-[#5C6470] leading-relaxed">{stat.desc}</p>
                </div>
              ))}
            </div>

            <div
              className={`md:col-span-3 transition-all duration-1000 delay-200 ${
                techInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="grid gap-4">
                {techFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 border border-[#D4DAE2] hover:border-[#C05010]/30 transition-colors duration-300">
                    <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-[#C05010] flex-shrink-0" />
                    <span className="text-sm md:text-base text-[#3D4450] leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. 글로벌 파트너십 (사진 포함) ── */}
      <section ref={partnerRef} className="py-20 md:py-24 px-6 md:px-12 bg-[#F5F7F8]">
        <div className="max-w-7xl mx-auto">
          <div
            className={`mb-14 transition-all duration-1000 ${
              partnerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="section-label block mb-4">Partnership</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2d2a28] mb-4">글로벌 기술 파트너십</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {partners.map((partner, index) => (
              <a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group border border-[#D4DAE2] bg-white hover:border-[#C05010]/30 transition-all duration-700 ${
                  partnerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative h-32 md:h-40 bg-[#F8F9FB] flex items-center justify-center p-8 border-b border-[#D4DAE2]">
                  <Image src={partner.logo} alt={partner.name} width={200} height={80} className="object-contain max-h-16 md:max-h-20 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs tracking-[0.06em] uppercase text-[#C05010] border border-[#C05010]/30 px-2 py-0.5">{partner.country}</span>
                    <span className="text-xs text-[#5C6470]">Since {partner.since}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-[#2d2a28] mb-3 group-hover:text-[#C05010] transition-colors">{partner.name}</h3>
                  <p className="text-sm md:text-base text-[#5C6470] leading-relaxed">{partner.desc}</p>
                  <div className="flex items-center gap-2 mt-4 text-xs text-[#5C6470] group-hover:text-[#C05010] transition-colors">
                    <span>웹사이트 방문</span>
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1" /></svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CTA ── */}
      <section className="py-20 md:py-24 px-6 md:px-12 bg-white border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2d2a28] mb-4">
            연소시스템에 대해 더 알고 싶으신가요?
          </h2>
          <p className="text-sm md:text-base text-[#5C6470] mb-8 max-w-xl mx-auto leading-relaxed">
            NBPKOREA의 기술진이 현장 조건에 최적화된 연소 솔루션을 제안해드립니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/support?type=catalog"
              className="inline-flex items-center gap-3 text-sm tracking-[0.04em] border border-[#D4DAE2] px-8 py-4 text-[#5C6470] hover:border-[#C05010] hover:text-[#C05010] transition-all duration-300"
            >
              카탈로그 신청
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1" /></svg>
            </Link>
            <Link
              href="/support"
              className="inline-flex items-center gap-3 text-sm tracking-[0.04em] bg-[#C05010] text-white px-8 py-4 hover:bg-[#2d2a28] transition-all duration-300"
            >
              기술 상담 신청
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
