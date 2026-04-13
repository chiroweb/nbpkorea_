"use client";

import SubpageLayout from "@/components/SubpageLayout";
import { useInView } from "@/hooks/useInView";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

const products = [
  { title: "덕트버너", subtitle: "Duct Burner", desc: "메탈파이버 표면연소 방식의 NOx 저배출 산업용 덕트 가열 버너. 0.5FT~6FT 라인업.", image: `${S3}/images/burner/duct-burner-hero.jpg`, href: "/products/burner/duct-burner", badge: "주력 제품" },
  { title: "MPG 버너", subtitle: "MPG Burner", desc: "강제 예혼합 방식으로 완전 연소를 실현하는 고효율 산업용 버너.", image: `${S3}/images/burner/fpb/gas-burners-40199-6233087.jpg`, href: "/products/burner/fpb-burner" },
  { title: "저녹스 버너", subtitle: "Low-NOx Burner", desc: "NOx 배출을 극한까지 저감하는 환경 친화형 버너.", image: `${S3}/images/burner/fpb/gas-burners-low-nox-40199-6408963.jpg`, href: "/products/burner/low-nox-burner" },
  { title: "메탈파이버 버너", subtitle: "Metal Fiber Burner", desc: "적외선 복사열 기반 표면연소. 에너지 효율 극대화, NOx 대폭 저감.", image: `${S3}/images/burner/ceramic-burner.jpg`, href: "/products/burner/metal-fiber-burner" },
  { title: "로용 버너", subtitle: "Furnace Burner", desc: "산업용 열처리로·소각로·보일러 등 고온 연소가 요구되는 설비에 적용.", image: `${S3}/images/burner/furnace-burner-main.jpg`, href: "/products/burner/furnace-burner" },
  { title: "오븐 버너", subtitle: "Oven Burner", desc: "식품·도장·열처리 오븐에 최적화된 균일 가열 버너.", image: `${S3}/images/burner/oven-burner-main.jpg`, href: "/products/burner/oven-burner" },
];

const coreValues = [
  { title: "NOx 저배출 연소 기술", desc: "2단 연소 방식과 메탈파이버 표면연소 기술로 ANSI Z83.4 / Z83.18 기준을 충족하는 NOx·CO 저배출을 실현합니다." },
  { title: "0.5FT~6FT 풀 라인업", desc: "소형부터 대형까지 현장 덕트 크기와 열량 요구에 맞춘 맞춤 선택이 가능한 NBP 시리즈 라인업을 갖추고 있습니다." },
  { title: "MIDCO 글로벌 기술 제휴", desc: "미국 MIDCO International과의 기술 협력으로 글로벌 검증된 연소 시스템을 국내 산업 현장에 최적화합니다." },
];

const industries = [
  { name: "도장 건조", desc: "자동차·조선 도장 부스 열풍 공급", clients: "BMW, Mercedes-Benz, 현대중공업", image: `${S3}/assets/industry2.png`, tag: "도장" },
  { name: "산업용 건조", desc: "농수산물, 목재, 섬유, 인쇄 건조 라인", clients: "다수 산업 현장", image: `${S3}/assets/industry1.png`, tag: "건조" },
  { name: "열처리/소각", desc: "산업용 열처리로, 소각로, 보일러", clients: "POSCO, 동국제강", image: `${S3}/assets/industry3.png`, tag: "열처리" },
  { name: "식품 가공", desc: "식품 건조, 로스팅, 오븐 가열", clients: "농협목우촌, 이디야커피", image: `/images/industry-food.png`, tag: "식품" },
  { name: "에너지/플랜트", desc: "발전소, 석유화학 플랜트 열원", clients: "에너지 주요 기업", image: `/images/industry-energy-plant.png`, tag: "에너지" },
  { name: "반도체/클린룸", desc: "클린룸 보조 열원, 공정 가열", clients: "반도체 주요 제조사", image: `/images/industry-semiconductor.png`, tag: "반도체" },
];

const techFeatures = [
  "2단 연소(Two-Stage) 방식 — NOx·CO 배출 최소화",
  "30단계 정밀 턴다운 제어 — 업계 최고 수준",
  "내열 메탈파이버 연소면 — 적외선 복사 열전달",
  "화염 길이 25cm 이하 유지 — 안전한 덕트 내 연소",
  "LNG / LPG 다연료 대응 — 노즐 교체 불필요",
  "ANSI Z83.4 / Z83.18 국제 기준 적합",
];

const partners = [
  { name: "MIDCO International", country: "미국", desc: "산업용 버너·연소 시스템 전문 제조사. 50년 이상의 연소 기술 노하우.", since: "2007", logo: `${S3}/images/midco.webp`, href: "https://midcointernational.com/" },
  { name: "ECOSTAR", country: "터키", desc: "산업용 환경시스템 전문 기업. 유럽·중동 시장 기술 파트너.", since: "2013", logo: `${S3}/images/ecostar.png`, href: "https://www.ecostar.com.tr" },
];

export default function BurnerBusinessPage() {
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: aboutRef, isInView: aboutInView } = useInView({ threshold: 0.1 });
  const { ref: statsRef, isInView: statsInView } = useInView({ threshold: 0.1 });
  const { ref: productRef, isInView: productInView } = useInView({ threshold: 0.1 });
  const { ref: industryRef, isInView: industryInView } = useInView({ threshold: 0.1 });
  const { ref: techRef, isInView: techInView } = useInView({ threshold: 0.1 });
  const { ref: partnerRef, isInView: partnerInView } = useInView({ threshold: 0.1 });

  return (
    <SubpageLayout
      title="산업용 버너 사업부"
      subtitle="Industrial Burners Division"
      breadcrumb={[
        { label: "사업분야", href: "/business" },
        { label: "산업용 버너", href: "/business/burner" },
      ]}
    >
      {/* 1. 히어로 */}
      <section ref={heroRef} className="relative overflow-hidden">
        <div className="relative aspect-[21/9] md:aspect-[21/7] w-full bg-[#1a1a1a]">
          <Image src={`${S3}/images/burner/duct-burner-hero.jpg`} alt="NBPKOREA 산업용 버너" fill className="object-cover opacity-60" priority  unoptimized />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/90 via-[#1a1a1a]/50 to-transparent" />
          <div className={`absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-4xl transition-all duration-1000 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-xs tracking-[0.1em] uppercase text-[#C05010] mb-3">Industrial Burners</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-snug">연소 기술의 핵심, 산업용 버너</h2>
            <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-2xl">독자 개발 메탈버너와 MIDCO 기술 제휴를 바탕으로, NOx 저배출·고효율 산업용 버너 라인업을 제공합니다.</p>
          </div>
        </div>
      </section>

      {/* 2. 이 사업부가 하는 일 */}
      <section ref={aboutRef} className="py-20 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`max-w-3xl mb-16 transition-all duration-1000 ${aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <p className="text-lg md:text-xl lg:text-2xl text-[#2d2a28] leading-relaxed font-light">
              NBPKOREA 산업용 버너 사업부는 <strong className="font-bold">덕트버너, MPG 버너, 메탈파이버, 로용 버너</strong> 등
              다양한 산업용 버너를 독자 개발·생산합니다. <strong className="font-bold">미국 MIDCO International</strong>과의
              기술 제휴로 글로벌 수준의 <strong className="font-bold">NOx 저배출·고효율 연소 기술</strong>을 국내에 적용합니다.
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
              { number: "17건+", label: "등록 특허", sub: "연소 기술 독자 특허" },
              { number: "30단계", label: "화염 제어", sub: "업계 최고 턴다운" },
              { number: "6종", label: "버너 라인업", sub: "덕트·패키지·메탈·로용·오븐·저녹스" },
              { number: "2007~", label: "MIDCO 제휴", sub: "미국 기술 파트너십" },
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
            <p className="text-sm md:text-base text-[#5C6470] max-w-2xl leading-relaxed">소형 덕트버너부터 대형 로용 버너까지, 현장 요구에 맞는 버너 솔루션을 제공합니다.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
            {products.map((product, index) => (
              <Link href={product.href} key={product.title} className={`group block transition-all duration-700 ${productInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="relative aspect-[4/3] overflow-hidden bg-[#FAFAFA] border border-[#D4DAE2] group-hover:border-[#C05010]/50 transition-colors duration-300">
                  <Image src={product.image} alt={product.title} fill className="object-contain group-hover:scale-105 transition-transform duration-700"  unoptimized />
                  {product.badge && <span className="absolute top-3 left-3 bg-[#C05010] text-white text-xs px-3 py-1 tracking-[0.04em]">{product.badge}</span>}
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
              <Link href={`/performance?tag=${encodeURIComponent(item.tag)}&cat=burner`} key={item.name} className={`group relative block aspect-[4/3] overflow-hidden transition-all duration-700 ${industryInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${index * 80}ms` }}>
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

      {/* 7. 글로벌 파트너십 */}
      <section ref={partnerRef} className="py-20 md:py-24 px-6 md:px-12 bg-[#F5F7F8]">
        <div className="max-w-7xl mx-auto">
          <div className={`mb-14 transition-all duration-1000 ${partnerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <span className="section-label block mb-4">Partnership</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2d2a28] mb-4">글로벌 기술 파트너십</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {partners.map((partner, index) => (
              <a key={partner.name} href={partner.href} target="_blank" rel="noopener noreferrer" className={`group border border-[#D4DAE2] bg-white hover:border-[#C05010]/30 transition-all duration-700 ${partnerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${index * 150}ms` }}>
                <div className="relative h-32 md:h-40 bg-[#F8F9FB] flex items-center justify-center p-8 border-b border-[#D4DAE2]">
                  <Image src={partner.logo} alt={partner.name} width={200} height={80} className="object-contain max-h-16 md:max-h-20 group-hover:scale-105 transition-transform duration-500"  unoptimized />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs tracking-[0.06em] uppercase text-[#C05010] border border-[#C05010]/30 px-2 py-0.5">{partner.country}</span>
                    <span className="text-xs text-[#5C6470]">Since {partner.since}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-[#2d2a28] mb-3 group-hover:text-[#C05010] transition-colors">{partner.name}</h3>
                  <p className="text-sm md:text-base text-[#5C6470] leading-relaxed">{partner.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="py-20 md:py-24 px-6 md:px-12 bg-white border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2d2a28] mb-4">산업용 버너에 대해 더 알고 싶으신가요?</h2>
          <p className="text-sm md:text-base text-[#5C6470] mb-8 max-w-xl mx-auto leading-relaxed">현장 조건에 최적화된 버너 솔루션을 제안해드립니다.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/support?type=catalog" className="inline-flex items-center gap-3 text-sm tracking-[0.04em] border border-[#D4DAE2] px-8 py-4 text-[#5C6470] hover:border-[#C05010] hover:text-[#C05010] transition-all duration-300">카탈로그 신청 <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1" /></svg></Link>
            <Link href="/support" className="inline-flex items-center gap-3 text-sm tracking-[0.04em] bg-[#C05010] text-white px-8 py-4 hover:bg-[#2d2a28] transition-all duration-300">기술 상담 신청 <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1" /></svg></Link>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
