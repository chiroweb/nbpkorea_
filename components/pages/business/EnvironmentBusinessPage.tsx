"use client";

import SubpageLayout from "@/components/SubpageLayout";
import { useInView } from "@/hooks/useInView";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

const products = [
  { title: "NK-RTO", subtitle: "축열식 연소산화장치", desc: "VOCs를 고온 산화 분해하고 축열재로 열을 회수하는 고효율 환경시스템.", image: `${S3}/images/%ED%99%98%EA%B2%BD%EC%82%AC%EC%97%85%EB%B6%80/Business%20Area/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EC%9A%A9%20RTO%20%EB%A0%8C%EB%8D%94%EB%A7%81-nowatermark.jpg`, href: "/products/environment/nk-rto" },
  { title: "NK-RCO", subtitle: "축열식 촉매연소산화장치", desc: "촉매를 활용하여 저온에서도 VOCs를 분해. 에너지 효율 극대화.", image: `${S3}/images/%ED%99%98%EA%B2%BD%EC%82%AC%EC%97%85%EB%B6%80/Business%20Area/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EC%9A%A9%20RCO%20%EB%A0%8C%EB%8D%94%EB%A7%81-nowatermark.jpg`, href: "/products/environment/nk-rco" },
  { title: "NK-CTO", subtitle: "촉매연소산화장치", desc: "소·중풍량 VOCs 처리에 최적화된 촉매 산화 방식.", image: `${S3}/images/%ED%99%98%EA%B2%BD%EC%82%AC%EC%97%85%EB%B6%80/Environment%20Business%20Division/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EC%9A%A9%20CTO%20%EB%A0%8C%EB%8D%94%EB%A7%81-nowatermark.jpg`, href: "/products/environment/nk-cto" },
  { title: "NK-TO", subtitle: "직접연소산화장치", desc: "고농도 VOCs를 직접 연소하여 처리하는 방식.", image: `${S3}/images/%ED%99%98%EA%B2%BD%EC%82%AC%EC%97%85%EB%B6%80/Business%20Area/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EC%9A%A9%20DTO%20%EB%A0%8C%EB%8D%94%EB%A7%81-nowatermark.jpg`, href: "/products/environment/nk-to" },
];

const coreValues = [
  { title: "VOCs·악취 완전 처리", desc: "축열식·촉매식·직접연소 등 다양한 방식으로 산업 현장의 유해가스와 악취를 법적 기준 이하로 처리합니다." },
  { title: "95% 이상 열 회수율", desc: "축열재를 활용한 열교환 시스템으로 에너지를 재이용하여 운영 비용을 절감합니다." },
  { title: "설계·시공·인허가 원스톱", desc: "환경영향평가부터 설계·제작·시공·시운전·인허가까지 전 과정을 일괄 수행합니다." },
];

const industries = [
  { name: "조선/해양", desc: "도장 공정 VOCs 처리, 악취 제거", clients: "한화오션, 현대중공업, 삼성중공업", image: `${S3}/assets/industry1.png`, tag: "조선" },
  { name: "자동차", desc: "도장 라인 배기가스 처리", clients: "BMW, Mercedes-Benz, KIA", image: `${S3}/assets/industry2.png`, tag: "자동차" },
  { name: "화학/석유화학", desc: "공정 배출 VOCs·악취 처리", clients: "경인양행, 화학 주요 기업", image: `${S3}/assets/industry3.png`, tag: "화학" },
  { name: "반도체", desc: "클린룸 배기 유해가스 처리", clients: "반도체 주요 제조사", image: `/images/industry-semiconductor.png`, tag: "반도체" },
  { name: "식품/제약", desc: "식품 가공 악취, 제약 공정 배기 처리", clients: "농협목우촌, 이디야커피", image: `/images/industry-food.png`, tag: "식품" },
  { name: "환경/폐수처리", desc: "음식물·폐수 처리장 악취 제거", clients: "한국환경공단, 부산환경공단", image: `/images/industry-energy-plant.png`, tag: "환경" },
];

const techFeatures = [
  "축열재 열회수율 95% 이상 — 운영비 절감",
  "SMART 연소 제어 시스템 — 자동 운전·원격 모니터링",
  "VOCs 제거 효율 99% 이상 달성",
  "소풍량~대풍량까지 커스텀 설계 대응",
  "내열·내식 소재 적용으로 장수명 설계",
  "환경부 인허가 대행 경험 다수 보유",
];

export default function EnvironmentBusinessPage() {
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: aboutRef, isInView: aboutInView } = useInView({ threshold: 0.1 });
  const { ref: statsRef, isInView: statsInView } = useInView({ threshold: 0.1 });
  const { ref: productRef, isInView: productInView } = useInView({ threshold: 0.1 });
  const { ref: industryRef, isInView: industryInView } = useInView({ threshold: 0.1 });
  const { ref: techRef, isInView: techInView } = useInView({ threshold: 0.1 });

  return (
    <SubpageLayout
      title="환경시스템 사업부"
      subtitle="Environmental Systems Division"
      breadcrumb={[
        { label: "사업분야", href: "/business" },
        { label: "환경시스템", href: "/business/environment" },
      ]}
    >
      {/* 1. 히어로 */}
      <section ref={heroRef} className="relative overflow-hidden">
        <div className="relative aspect-[21/9] md:aspect-[21/7] w-full bg-[#1a1a1a]">
          <Image src={`${S3}/images/combustion-site-hd.jpg`} alt="NBPKOREA 환경시스템" fill className="object-cover opacity-60" priority  unoptimized />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/90 via-[#1a1a1a]/50 to-transparent" />
          <div className={`absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-4xl transition-all duration-1000 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-xs tracking-[0.1em] uppercase text-[#C05010] mb-3">Environmental Systems</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-snug">산업 현장의 공기를 지킵니다</h2>
            <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-2xl">VOCs·악취를 고온 산화 방식으로 처리하는 RTO, RCO, CTO, TO 등 산업용 환경시스템을 설계·제작·시공합니다.</p>
          </div>
        </div>
      </section>

      {/* 2. 이 사업부가 하는 일 */}
      <section ref={aboutRef} className="py-20 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`max-w-3xl mb-16 transition-all duration-1000 ${aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <p className="text-lg md:text-xl lg:text-2xl text-[#2d2a28] leading-relaxed font-light">
              NBPKOREA 환경시스템 사업부는 <strong className="font-bold">조선, 자동차, 화학, 반도체</strong> 등
              산업 현장에서 발생하는 <strong className="font-bold">휘발성유기화합물(VOCs)과 악취</strong>를 처리하는
              환경시스템을 공급합니다. 축열식·촉매식·직접연소 방식으로 <strong className="font-bold">99% 이상의 제거 효율</strong>을 달성합니다.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {coreValues.map((value, index) => (
              <div key={value.title} className={`border-t-2 border-[#C05010] pt-6 transition-all duration-1000 ${aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${200 + index * 150}ms` }}>
                <h3 className="text-base md:text-lg font-bold text-[#2d2a28] mb-3">{value.title}</h3>
                <p className="text-sm md:text-base text-[#5C6470] leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 숫자 실적 */}
      <section ref={statsRef} className="py-16 md:py-20 px-6 md:px-12 bg-[#2d2a28]">
        <div className="max-w-7xl mx-auto">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 transition-all duration-1000 ${statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {[
              { number: "99%+", label: "VOCs 제거 효율", sub: "법적 기준 초과 달성" },
              { number: "95%+", label: "열 회수율", sub: "축열재 열교환" },
              { number: "80+", label: "납품 실적", sub: "국내외 산업 현장" },
              { number: "17건", label: "등록 특허", sub: "독자 기술 특허" },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center md:text-left">
                <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#C05010] block mb-2">{stat.number}</span>
                <span className="text-base font-semibold text-white block mb-1">{stat.label}</span>
                <span className="text-xs text-[#C8C3BD]">{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 제품 라인업 */}
      <section ref={productRef} className="py-20 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`mb-14 transition-all duration-1000 ${productInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <span className="section-label block mb-4">Products</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2d2a28] mb-4">제품 라인업</h2>
            <p className="text-sm md:text-base text-[#5C6470] max-w-2xl leading-relaxed">풍량·농도·공정 조건에 따라 최적의 VOCs 처리 방식을 제안합니다.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
            {products.map((product, index) => (
              <Link href={product.href} key={product.title} className={`group block transition-all duration-700 ${productInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="relative aspect-[4/3] overflow-hidden bg-[#FAFAFA] border border-[#D4DAE2] group-hover:border-[#C05010]/50 transition-colors duration-300">
                  <Image src={product.image} alt={product.title} fill className="object-contain group-hover:scale-105 transition-transform duration-700"  unoptimized />
                </div>
                <div className="mt-4">
                  <span className="text-xs tracking-[0.06em] uppercase text-[#5C6470]">{product.subtitle}</span>
                  <h3 className="text-lg font-bold text-[#2d2a28] group-hover:text-[#C05010] transition-colors mt-1">{product.title}</h3>
                  <p className="text-sm text-[#5C6470] leading-relaxed mt-2">{product.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 적용 분야 */}
      <section ref={industryRef} className="py-20 md:py-24 px-6 md:px-12 bg-[#F5F7F8]">
        <div className="max-w-7xl mx-auto">
          <div className={`mb-14 transition-all duration-1000 ${industryInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <span className="section-label block mb-4">Applications</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2d2a28] mb-4">적용 분야</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {industries.map((item, index) => (
              <Link href={`/performance?tag=${encodeURIComponent(item.tag)}&cat=environment`} key={item.name} className={`group relative block aspect-[4/3] overflow-hidden transition-all duration-700 ${industryInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${index * 80}ms` }}>
                <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700"  unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5"><h3 className="text-lg font-bold text-white">{item.name}</h3></div>
                <div className="absolute inset-0 bg-[#2d2a28]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center p-6">
                  <h3 className="text-lg font-bold text-white mb-3">{item.name}</h3>
                  <p className="text-sm text-white/80 leading-relaxed mb-4">{item.desc}</p>
                  <p className="text-xs text-white/50 mb-4">{item.clients}</p>
                  <span className="inline-flex items-center gap-2 text-xs text-[#C05010]">납품 실적 보기 <svg width="14" height="6" viewBox="0 0 14 6" fill="none"><path d="M0 3H13M13 3L10 1M13 3L10 5" stroke="currentColor" strokeWidth="1" /></svg></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 기술 강점 */}
      <section ref={techRef} className="py-20 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`mb-14 transition-all duration-1000 ${techInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <span className="section-label block mb-4">Technology</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2d2a28]">기술 강점</h2>
          </div>
          <div className="grid md:grid-cols-5 gap-8 md:gap-12">
            <div className={`md:col-span-2 flex flex-col gap-8 transition-all duration-1000 ${techInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              {[
                { number: "99%+", label: "VOCs 제거 효율", desc: "법적 배출 기준을 초과 달성하는 처리 성능" },
                { number: "95%+", label: "열 회수율", desc: "축열재 기반 열교환으로 에너지 비용 절감" },
              ].map((stat) => (
                <div key={stat.label} className="border-l-2 border-[#C05010] pl-6">
                  <span className="text-4xl md:text-5xl font-bold text-[#C05010] block mb-1">{stat.number}</span>
                  <span className="text-base font-semibold text-[#2d2a28] block mb-2">{stat.label}</span>
                  <p className="text-sm text-[#5C6470] leading-relaxed">{stat.desc}</p>
                </div>
              ))}
            </div>
            <div className={`md:col-span-3 transition-all duration-1000 delay-200 ${techInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
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

      {/* 7. CTA */}
      <section className="py-20 md:py-24 px-6 md:px-12 bg-[#FAFAFA] border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2d2a28] mb-4">환경시스템에 대해 더 알고 싶으신가요?</h2>
          <p className="text-sm md:text-base text-[#5C6470] mb-8 max-w-xl mx-auto leading-relaxed">현장 조건에 맞는 최적의 VOCs 처리 솔루션을 제안해드립니다.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/support?type=catalog" className="inline-flex items-center gap-3 text-sm tracking-[0.04em] border border-[#D4DAE2] px-8 py-4 text-[#5C6470] hover:border-[#C05010] hover:text-[#C05010] transition-all duration-300">카탈로그 신청 <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1" /></svg></Link>
            <Link href="/support" className="inline-flex items-center gap-3 text-sm tracking-[0.04em] bg-[#C05010] text-white px-8 py-4 hover:bg-[#2d2a28] transition-all duration-300">기술 상담 신청 <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1" /></svg></Link>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
