"use client";

import SubpageLayout from "@/components/SubpageLayout";
import { useInView } from "@/hooks/useInView";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

const products = [
  { title: "클린룸 공조기", subtitle: "Cleanroom AHU", desc: "반도체·제약 등 초정밀 청정 환경을 위한 공기조화 시스템.", image: `${S3}/images/hvac/cleanroom-ahu.png`, href: "/products/hvac/cleanroom" },
  { title: "드라이룸 공조기", subtitle: "Dry Room AHU", desc: "2차전지 제조 공정의 극저습 환경을 구현하는 제습 공조기.", image: `${S3}/images/hvac/dry-room-ahu.png`, href: "/products/hvac/dry-room" },
  { title: "직화식 공조기", subtitle: "Direct-Fired AHU", desc: "가스 직화 방식으로 대풍량을 빠르게 가열하는 산업용 공조기.", image: `${S3}/images/hvac/direct-ahu.png`, href: "/products/hvac/direct-ahu" },
  { title: "도어히터", subtitle: "Door Heater", desc: "출입구 에어커튼으로 외부 공기 유입을 차단하는 히터.", image: `${S3}/images/hvac/door-heater.png`, href: "/products/hvac/door-heater" },
  { title: "복합식 제습기", subtitle: "Dehumidifier", desc: "냉각식+흡착식 복합 방식으로 정밀 습도 제어.", image: `/images/dehumidifier-thumb.jpg`, href: "/products/hvac/dehumidifier" },
];

const coreValues = [
  { title: "정밀 온습도 제어", desc: "반도체 클린룸 Class 1~100, 드라이룸 이슬점 -40°C 이하 등 극한 조건의 정밀 공조를 구현합니다." },
  { title: "에너지 절감 설계", desc: "직화식 공조, 열회수 시스템, 복합식 제습 등 에너지 효율을 극대화하는 설계를 적용합니다." },
  { title: "첨단산업 맞춤 대응", desc: "반도체, 2차전지, 제약 GMP 등 산업별 규격과 환경 요구사항에 맞춘 공조 솔루션을 제공합니다." },
];

const industries = [
  { name: "반도체/디스플레이", desc: "클린룸 공조, FAB 온습도 관리", clients: "반도체 주요 제조사", image: `/images/industry-semiconductor.png`, tag: "반도체" },
  { name: "2차전지", desc: "드라이룸 극저습 환경 구현", clients: "2차전지 주요 제조사", image: `${S3}/assets/industry3.png`, tag: "2차전지" },
  { name: "제약/바이오", desc: "GMP 환경 공조, 클린룸 구축", clients: "제약·바이오 기업", image: `/images/industry-food.png`, tag: "제약" },
  { name: "자동차", desc: "도장 부스 공조, 건조 라인 온도 관리", clients: "BMW, Mercedes-Benz, KIA", image: `${S3}/assets/industry2.png`, tag: "자동차" },
  { name: "식품가공", desc: "식품 공장 온습도 관리, 건조 공정", clients: "농협목우촌, 이디야커피", image: `/images/industry-food.png`, tag: "식품" },
  { name: "조선/해양", desc: "선박 블록 제습, 도장 공정 공조", clients: "한화오션, 현대중공업", image: `${S3}/assets/industry1.png`, tag: "조선" },
];

const techFeatures = [
  "클린룸 Class 1~100 대응 HEPA/ULPA 필터 시스템",
  "드라이룸 이슬점 -40°C 이하 제습 성능",
  "직화식 공조로 대풍량 급속 가열 — 에너지 30% 절감",
  "냉각식+흡착식 복합 제습으로 정밀 습도 제어",
  "BMS 연동 자동 운전 및 원격 모니터링",
  "반도체·2차전지·제약 GMP 규격 대응 설계",
];

export default function HvacBusinessPage() {
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: aboutRef, isInView: aboutInView } = useInView({ threshold: 0.1 });
  const { ref: statsRef, isInView: statsInView } = useInView({ threshold: 0.1 });
  const { ref: productRef, isInView: productInView } = useInView({ threshold: 0.1 });
  const { ref: industryRef, isInView: industryInView } = useInView({ threshold: 0.1 });
  const { ref: techRef, isInView: techInView } = useInView({ threshold: 0.1 });

  return (
    <SubpageLayout
      title="공조시스템 사업부"
      subtitle="HVAC Systems Division"
      breadcrumb={[
        { label: "사업분야", href: "/business" },
        { label: "공조시스템", href: "/business/hvac" },
      ]}
    >
      {/* 1. 히어로 */}
      <section ref={heroRef} className="relative overflow-hidden">
        <div className="relative aspect-[21/9] md:aspect-[21/7] w-full bg-[#1a1a1a]">
          <Image src={`${S3}/images/hvac/hvac-main.png`} alt="NBPKOREA 공조시스템" fill className="object-cover opacity-60" priority  unoptimized />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/90 via-[#1a1a1a]/50 to-transparent" />
          <div className={`absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-4xl transition-all duration-1000 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-xs tracking-[0.1em] uppercase text-[#C05010] mb-3">HVAC Systems</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-snug">첨단산업의 공기를 설계합니다</h2>
            <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-2xl">반도체 클린룸, 2차전지 드라이룸, 제약 GMP 등 정밀 공조 시스템을 설계·제작·시공합니다.</p>
          </div>
        </div>
      </section>

      {/* 2. 이 사업부가 하는 일 */}
      <section ref={aboutRef} className="py-20 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`max-w-3xl mb-16 transition-all duration-1000 ${aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <p className="text-lg md:text-xl lg:text-2xl text-[#2d2a28] leading-relaxed font-light">
              NBPKOREA 공조시스템 사업부는 <strong className="font-bold">반도체, 2차전지, 제약</strong> 등
              첨단산업에 필요한 <strong className="font-bold">정밀 온습도·청정도 제어</strong> 시스템을 공급합니다.
              직화식 공조기, 복합식 제습기 등 <strong className="font-bold">에너지 절감형 공조 솔루션</strong>으로
              운영 비용을 절감합니다.
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
              { number: "-40°C", label: "드라이룸 이슬점", sub: "극저습 환경 구현" },
              { number: "30%", label: "에너지 절감", sub: "직화식 공조 대비" },
              { number: "80+", label: "납품 실적", sub: "국내외 산업 현장" },
              { number: "5종", label: "제품 라인업", sub: "클린룸·드라이룸·직화·도어히터·제습" },
            ].map((stat) => (
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
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10">
            {products.map((product, index) => (
              <Link href={product.href} key={product.title} className={`group block transition-all duration-700 ${productInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="relative aspect-[4/3] overflow-hidden bg-white border border-[#D4DAE2] group-hover:border-[#C05010]/50 transition-colors duration-300">
                  <Image src={product.image} alt={product.title} fill className="object-contain group-hover:scale-105 transition-transform duration-700" unoptimized />
                </div>
                <div className="mt-4">
                  <span className="text-xs tracking-[0.06em] uppercase text-[#5C6470]">{product.subtitle}</span>
                  <h3 className="text-base md:text-lg font-bold text-[#2d2a28] group-hover:text-[#C05010] transition-colors mt-1">{product.title}</h3>
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
              <Link href={`/performance?tag=${encodeURIComponent(item.tag)}&cat=hvac`} key={item.name} className={`group relative block aspect-[4/3] overflow-hidden transition-all duration-700 ${industryInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${index * 80}ms` }}>
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
                { number: "-40°C", label: "드라이룸 이슬점", desc: "2차전지 극저습 환경 구현 기술" },
                { number: "Class 1", label: "클린룸 청정도", desc: "반도체 FAB급 초정밀 청정 환경" },
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
          <h2 className="text-2xl md:text-3xl font-bold text-[#2d2a28] mb-4">공조시스템에 대해 더 알고 싶으신가요?</h2>
          <p className="text-sm md:text-base text-[#5C6470] mb-8 max-w-xl mx-auto leading-relaxed">현장 환경에 최적화된 정밀 공조 솔루션을 제안해드립니다.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/support?type=catalog" className="inline-flex items-center gap-3 text-sm tracking-[0.04em] border border-[#D4DAE2] px-8 py-4 text-[#5C6470] hover:border-[#C05010] hover:text-[#C05010] transition-all duration-300">카탈로그 신청 <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1" /></svg></Link>
            <Link href="/support" className="inline-flex items-center gap-3 text-sm tracking-[0.04em] bg-[#C05010] text-white px-8 py-4 hover:bg-[#2d2a28] transition-all duration-300">기술 상담 신청 <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1" /></svg></Link>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
