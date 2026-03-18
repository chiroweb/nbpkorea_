"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const S3 = "https://nbpkoreare.s3.ap-northeast-2.amazonaws.com";

const services = [
  {
    id: 1,
    title: "환경설비",
    subtitle: "Environment",
    description:
      "촉매연소산화장치(CTO)는 촉매를 이용해 배기가스 내 악취물질을 저온 연소·무해화하며 NOx 생성을 최소화합니다. 축열식 연소산화장치(RTO)는 연소열을 축열재로 회수하여 폐열을 생산 공정 열원으로 재활용하는 에너지 절감형 시스템이며, 축열촉매(RCO)·직접연소(TO)·직접탈취(DTO) 설비까지 반도체·도장·화학·식품 등 14개 이상 산업 분야의 VOCs 및 복합악취를 설계·제작·시공부터 유지보수까지 원스톱으로 처리합니다.",
    tags: ["CTO", "RTO", "RCO", "TO", "DTO"],
    image: `${S3}/images/service-environment.png`,
  },
  {
    id: 2,
    title: "연소설비",
    subtitle: "Combustion",
    description:
      "전 세계에서 NBPKOREA에서만 구현하는 연소식 고효율 환경설비. 직화식 가스히터(NKGH 시리즈, 25,000~1,000,000 kcal/h)·간접식 가스히터(NK-IDGH 시리즈)·복합식 제습기·차량 도장 건조기까지 자동차 도장 부스, 선박 블록 작업장, 물류 창고, 식품·화학 공장 등 광범위한 산업 현장에 컴팩트하게 최적화된 연소 솔루션을 제공합니다.",
    tags: ["직화식 가스히터", "간접식 가스히터", "복합제습기", "도장건조기"],
    image: `${S3}/images/service-combustion.png`,
  },
  {
    id: 3,
    title: "산업용 버너",
    subtitle: "Burner",
    description:
      "NBPKOREA 독자 개발 금속화이버 버너(NBP-MB·NBP-SMB)는 균등 연소와 적외선 복사열을 통해 에너지 효율을 극대화하고 NOx 배출을 대폭 저감합니다. 소형 메탈 버너는 컴팩트 설계로 설치 공간을 절약하며 간편한 유지보수를 실현합니다. 산업용 보일러·소각로·건조로·열매체 보일러·발전소·석유화학 플랜트 등 고온 연소가 요구되는 모든 설비에 적용 가능합니다.",
    tags: ["NBP-MB", "NBP-SMB", "저NOx", "균등연소"],
    image: `${S3}/images/service-burner.png`,
  },
];

// 스크롤 구간 정의
// 0.00 ~ 0.20 : 서비스 1 머무름
// 0.20 ~ 0.40 : 1→2 전환
// 0.40 ~ 0.60 : 서비스 2 머무름
// 0.60 ~ 0.80 : 2→3 전환
// 0.80 ~ 1.00 : 서비스 3 머무름
const DWELL = 0.20;
const TRANS = 0.20;

function getActiveService(p: number): number {
  if (p < DWELL + TRANS / 2) return 0;
  if (p < DWELL + TRANS + DWELL + TRANS / 2) return 1;
  return 2;
}

function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

export default function ServiceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      const raw = Math.max(0, Math.min(1, -rect.top / scrollable));
      setScrollProgress(raw);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeService = getActiveService(scrollProgress);

  // 블라인드: 1→2 전환 (0.20 ~ 0.40)
  const img2Raw = Math.max(0, Math.min(1, (scrollProgress - DWELL) / TRANS));
  const img2Progress = easeInOut(img2Raw);

  // 블라인드: 2→3 전환 (0.60 ~ 0.80)
  const img3Raw = Math.max(0, Math.min(1, (scrollProgress - DWELL - TRANS - DWELL) / TRANS));
  const img3Progress = easeInOut(img3Raw);

  // 텍스트 블록: 각 서비스마다 active 여부에 따라 fade + slide
  const getTextStyle = (i: number) => {
    const isActive = activeService === i;
    const isPast = i < activeService;
    return {
      opacity: isActive ? 1 : 0,
      transform: isActive ? "translateY(0)" : isPast ? "translateY(-32px)" : "translateY(32px)",
      transition: "opacity 0.6s ease, transform 0.6s ease",
      pointerEvents: isActive ? "auto" as const : "none" as const,
    };
  };

  return (
    <section id="service" ref={sectionRef} style={{ height: "500vh" }} className="relative">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Section Header */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none">
          <span className="section-label block mb-1">Service</span>
          <h2 className="text-xl md:text-2xl font-light tracking-[0.15em] text-[#2d2a28]">
            사업 분야
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid h-full" style={{ gridTemplateColumns: "42% 58%" }}>

          {/* ── 왼쪽: 블라인드 이미지 ── */}
          <div className="relative overflow-hidden py-16 px-8">
            <div className="relative h-full overflow-hidden rounded-sm">
              {/* 이미지 1 — 항상 밑에 */}
              <div className="absolute inset-0">
                <Image src={services[0].image} alt={services[0].title} fill className="object-cover" priority />
              </div>

              {/* 이미지 2 — 위→아래 블라인드 */}
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 0 ${(1 - img2Progress) * 100}% 0)` }}
              >
                <Image src={services[1].image} alt={services[1].title} fill className="object-cover" />
              </div>

              {/* 이미지 3 — 위→아래 블라인드 */}
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 0 ${(1 - img3Progress) * 100}% 0)` }}
              >
                <Image src={services[2].image} alt={services[2].title} fill className="object-cover" />
              </div>
            </div>

            {/* 서비스 번호 인디케이터 (이미지 좌측 하단) */}
            <div className="absolute bottom-20 left-12 flex flex-col gap-2 z-10">
              {services.map((_, i) => (
                <div
                  key={i}
                  className="transition-all duration-500"
                  style={{
                    height: 4,
                    width: activeService === i ? 28 : 4,
                    borderRadius: 2,
                    backgroundColor: activeService === i ? "#C05010" : "#C8D0DA",
                  }}
                />
              ))}
            </div>
          </div>

          {/* ── 오른쪽: 텍스트 (fade in/out) ── */}
          <div className="relative flex items-center bg-[#F5F7F8]">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="absolute inset-0 flex flex-col justify-center items-center px-8"
                style={getTextStyle(index)}
              >
              <div className="w-full max-w-lg">
                <span className="text-[94px] md:text-[114px] font-light text-[#DCE2E8] leading-none block mb-2">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-xs tracking-[0.25em] uppercase text-[#C05010] block mb-3">
                  {service.subtitle}
                </span>
                <h3 className="text-2xl md:text-3xl tracking-[0.08em] font-light text-[#2d2a28] mb-6">
                  {service.title}
                </h3>
                <p className="text-sm text-[#8B95A1] leading-[2] mb-6 max-w-md">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[13px] tracking-[0.1em] border border-[#D4DAE2] px-3 py-1 text-[#8B95A1]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href="/business" className="btn-link group">
                  <span className="w-8 h-8 flex items-center justify-center border border-[#2d2a28]/30 rounded-full group-hover:bg-[#C05010] group-hover:text-[#F5F7F8] transition-all">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1 7L7 1M7 1H2M7 1V6" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  </span>
                  <span>사업분야 보기</span>
                  <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="transition-transform group-hover:translate-x-1">
                    <path d="M0 4H15M15 4L11 1M15 4L11 7" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </Link>
              </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden h-full overflow-y-auto">
          <div className="pt-32 pb-16 px-6 space-y-16">
            {services.map((service, index) => (
              <div key={service.id}>
                <div className="relative aspect-[4/3] overflow-hidden bg-[#DCE2E8] mb-6">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                </div>
                <span className="text-[13px] tracking-[0.2em] uppercase text-[#C05010] block mb-2">
                  {service.subtitle}
                </span>
                <h3 className="text-xl tracking-[0.1em] font-medium text-[#2d2a28] mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-[#8B95A1] leading-[2] mb-6">{service.description}</p>
                <Link href="/business" className="btn-link group">
                  <span className="w-8 h-8 flex items-center justify-center border border-[#2d2a28]/30 rounded-full group-hover:bg-[#C05010] group-hover:text-[#F5F7F8] transition-all">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1 7L7 1M7 1H2M7 1V6" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  </span>
                  <span>사업분야 보기</span>
                  <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="transition-transform group-hover:translate-x-1">
                    <path d="M0 4H15M15 4L11 1M15 4L11 7" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
