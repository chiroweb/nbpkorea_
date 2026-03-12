"use client";

import SubpageLayout from "@/components/SubpageLayout";
import { useInView } from "@/hooks/useInView";
import Link from "next/link";
import Image from "next/image";

const S3 = "https://nbpkoreare.s3.ap-northeast-2.amazonaws.com";
const LOGO_BASE = `${S3}/images/%EC%A3%BC%EC%9A%94%EA%B1%B0%EB%9E%98%EC%B2%98`;

const clientLogos = [
  { name: "한화오션", file: "한화오션.png" },
  { name: "현대중공업", file: "현대중공업.png" },
  { name: "삼성중공업", file: "삼성중공업.png" },
  { name: "한국조선해양", file: "한국조선해양.png" },
  { name: "현대미포조선", file: "현대미포조선.jpg" },
  { name: "현대삼호중공업", file: "현대삼호중공업.jpg" },
  { name: "POSCO", file: "posco.png" },
  { name: "동국제강", file: "동국제강.png" },
  { name: "두산", file: "두산.png" },
  { name: "BMW", file: "bmw.png" },
  { name: "Mercedes-Benz", file: "benz.png" },
  { name: "Audi", file: "audi.png" },
  { name: "KIA", file: "kia.png" },
  { name: "Volvo", file: "volvo.png" },
  { name: "한진중공업", file: "한진중공업.jpg" },
  { name: "HJ중공업", file: "HJ중공업.png" },
  { name: "농협목우촌", file: "농협목우촌.png" },
  { name: "이디야커피", file: "이디야커피.jpg" },
  { name: "한국환경공단", file: "한국환경공단.png" },
  { name: "부산환경공단", file: "부산환경공단.png" },
  { name: "대전도시공사", file: "대전도시공사.png" },
  { name: "현대인프라코어", file: "현대인프라코어.png" },
  { name: "현대스틸산업", file: "현대스틸산업.png" },
  { name: "HSG성동조선", file: "HSG성동조선.png" },
  { name: "케이조선", file: "케이조선.png" },
  { name: "SK오션플랜트", file: "SK오션플랜트.png" },
  { name: "동부건설", file: "동부건설.png" },
  { name: "대보건설", file: "대보건설.png" },
  { name: "STX건설", file: "STX건설.png" },
  { name: "신성엔지니어링", file: "신성엔지니어링.png" },
  { name: "경인양행", file: "경인양행.png" },
  { name: "ECOSTAR", file: "ECOSTAR.png" },
];

const businessAreas = [
  {
    id: 1,
    title: "환경설비 사업부",
    subtitle: "Environment Division",
    image: `${S3}/images/%ED%99%98%EA%B2%BD%EC%82%AC%EC%97%85%EB%B6%80/Business%20Area/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EC%9A%A9%20RTO%20%EB%A0%8C%EB%8D%94%EB%A7%81-nowatermark.jpg`,
    description:
      "촉매연소산화장치(CTO), 축열식연소산화장치(RTO), 축열식촉매연소산화장치(RCO), 직접연소산화장치(TO), 직접연소탈취장치(DTO) 등 산업 현장에서 발생하는 휘발성유기화합물(VOCs) 및 악취를 처리하는 환경설비를 설계·제작·시공합니다.",
    tags: ["CTO", "RTO", "RCO", "TO", "DTO"],
  },
  {
    id: 2,
    title: "연소설비 사업부",
    subtitle: "Combustion Division",
    image: `${S3}/images/%EC%97%B0%EC%86%8C%EC%82%AC%EC%97%85%EB%B6%80/%EA%B7%B8%EB%A6%BC3.png`,
    description:
      "산업용 직접·간접 가스히터, 자체 개발 금속화이버 버너(NBP-MB), 하이브리드 제습기, 차량 도장 건조 시스템 등 다양한 산업 분야에 적용되는 고효율 연소장비를 설계·제작·공급합니다.",
    tags: ["가스히터", "금속버너", "제습기", "건조시스템"],
  },
];

function BusinessCard({ area, index }: { area: (typeof businessAreas)[0]; index: number }) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.2 });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-24 last:mb-0">
      <div
        className={`${isEven ? "md:order-1" : "md:order-2"} transition-all duration-1000 ${
          isInView
            ? "opacity-100 translate-x-0"
            : `opacity-0 ${isEven ? "-translate-x-10" : "translate-x-10"}`
        }`}
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#DCE2E8] group">
          <Image
            src={area.image}
            alt={area.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
      <div
        className={`${isEven ? "md:order-2" : "md:order-1"} transition-all duration-1000 delay-200 ${
          isInView
            ? "opacity-100 translate-x-0"
            : `opacity-0 ${isEven ? "translate-x-10" : "-translate-x-10"}`
        }`}
      >
        <span className="text-5xl font-light text-[#D4DAE2] block mb-4">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-[10px] tracking-[0.2em] uppercase text-[#888480] block mb-2">
          {area.subtitle}
        </span>
        <h3 className="text-xl md:text-2xl tracking-[0.08em] font-medium text-[#2d2a28] mb-4">
          {area.title}
        </h3>
        <p className="text-sm leading-[2] text-[#888480] mb-6">{area.description}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {area.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] tracking-[0.1em] border border-[#D4DAE2] px-3 py-1 text-[#888480]"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link href="/products" className="btn-link group">
          <span className="w-8 h-8 flex items-center justify-center border border-[#2d2a28]/30 rounded-full group-hover:bg-[#C05010] group-hover:text-white transition-all">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <path d="M1 7L7 1M7 1H2M7 1V6" stroke="currentColor" strokeWidth="1" />
            </svg>
          </span>
          <span>제품 보기</span>
          <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="transition-transform group-hover:translate-x-1">
            <path d="M0 4H15M15 4L11 1M15 4L11 7" stroke="currentColor" strokeWidth="1" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

function IndustryApplicationsSection() {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  const industries = [
    {
      icon: "⚓",
      title: "조선/해양",
      subtitle: "Shipbuilding",
      description: "선박 블록 건조, 도장 건조, 탱크 제습, 선박 부품 열처리 등 조선소 특수 환경에 최적화된 연소·환경 설비를 공급합니다.",
      clients: "한화오션, HD현대미포, 대우조선해양, 삼성중공업",
    },
    {
      icon: "🔧",
      title: "자동차",
      subtitle: "Automotive",
      description: "차체 도장 건조, 부품 열처리, 도장 부스 탈취, 공장 환기 등 자동차 생산 라인의 열·환경 솔루션을 제공합니다.",
      clients: "BMW, 아우디, 현대자동차, 기아자동차",
    },
    {
      icon: "⚙️",
      title: "중공업/화학",
      subtitle: "Heavy Industry",
      description: "플랜트 공정 가열, 화학 공정 열원 공급, 배가스 처리, 산업 설비 열처리 등 중화학 분야의 고온 솔루션을 담당합니다.",
      clients: "POSCO, LG화학, SK이노베이션, 두산에너빌리티",
    },
    {
      icon: "🌿",
      title: "환경/악취처리",
      subtitle: "Environmental",
      description: "반도체, 도장, 식품, 제약 등 다양한 산업 현장의 VOCs 및 악취를 처리하는 환경설비(RTO, CTO, RCO)를 공급합니다.",
      clients: "반도체 제조사, 식품가공업체, 제약사 등",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-[#2d2a28]">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#888480] block mb-4">
            Industry Applications
          </span>
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-light text-white">
            산업별 적용 분야
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className={`border border-[#888480]/30 p-8 transition-all duration-1000 hover:border-[#888480] ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-6">
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#888480] block mb-2">
                    {industry.subtitle}
                  </span>
                  <h3 className="text-lg tracking-[0.08em] font-medium text-white mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-sm leading-[2] text-[#888480] mb-4">
                    {industry.description}
                  </p>
                  <p className="text-[11px] text-[#888480]/70 tracking-[0.03em]">
                    주요 고객: {industry.clients}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-[#F2F4F7]">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="section-label block mb-4">Performance</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-light text-[#2d2a28]">
            사업 실적
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: "20년+", label: "업력", sub: "2006년 설립" },
            { value: "80+", label: "주요 고객사", sub: "국내외 산업 현장" },
            { value: "19건", label: "등록 특허", sub: "핵심 기술 특허" },
            { value: "2개국", label: "글로벌 파트너", sub: "미국 · 터키" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-1000 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <span className="text-4xl md:text-5xl font-light text-[#2d2a28] block mb-2">
                {stat.value}
              </span>
              <span className="text-sm tracking-[0.08em] text-[#2d2a28] block mb-1">
                {stat.label}
              </span>
              <span className="text-[11px] text-[#888480]">{stat.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="section-label block mb-4">Partners & Clients</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-light text-[#2d2a28]">
            주요 고객사
          </h2>
        </div>
        <div
          className={`overflow-hidden transition-all duration-1000 delay-300 ${
            isInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex gap-8 animate-scroll mb-4">
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 border border-[#D4DAE2] px-6 py-4 bg-[#F2F4F7] flex items-center justify-center w-36 h-20"
              >
                <Image
                  src={`${LOGO_BASE}/${encodeURIComponent(logo.file)}`}
                  alt={logo.name}
                  width={120}
                  height={60}
                  className="object-contain max-h-12"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function BusinessPage() {
  return (
    <SubpageLayout
      title="BUSINESS AREAS"
      subtitle="환경설비와 연소설비, 두 축으로 산업 현장의 가치를 높입니다"
      breadcrumb={[{ label: "사업분야", href: "/business" }]}
    >
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {businessAreas.map((area, index) => (
            <BusinessCard key={area.id} area={area} index={index} />
          ))}
        </div>
      </section>
      <IndustryApplicationsSection />
      <StatsSection />
      <PartnersSection />
    </SubpageLayout>
  );
}
