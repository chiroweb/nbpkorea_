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
      "CTO, RTO, RCO, TO, DTO 등 VOCs 및 악취 처리를 위한 산업용 환경설비. 설계부터 시공, 유지보수까지 원스톱 서비스를 제공합니다.",
    image: `${S3}/images/service-environment.png`,
  },
  {
    id: 2,
    title: "연소설비",
    subtitle: "Combustion",
    description:
      "산업용 직접·간접 가스히터, 하이브리드 제습기, 차량 도장 건조 시스템 등 고효율 연소장비를 설계·제작·공급합니다.",
    image: `${S3}/images/service-combustion.png`,
  },
  {
    id: 3,
    title: "산업용 버너",
    subtitle: "Burner",
    description:
      "자체 개발 금속화이버 버너(NBP-MB). 적외선 복사열 활용, NOx 대폭 저감, 에너지 효율 30% 이상 향상의 혁신 기술입니다.",
    image: `${S3}/images/service-burner.png`,
  },
];

export default function ServiceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / scrollable));
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeService =
    scrollProgress < 0.33 ? 0 : scrollProgress < 0.66 ? 1 : 2;

  // 블라인드 진행도: 각 이미지가 덮이는 타이밍
  // 이미지 2: 0.2 ~ 0.4 구간에서 위→아래 reveal
  const img2Progress = Math.max(0, Math.min(1, (scrollProgress - 0.2) / 0.2));
  // 이미지 3: 0.5 ~ 0.7 구간에서 위→아래 reveal
  const img3Progress = Math.max(0, Math.min(1, (scrollProgress - 0.5) / 0.2));

  // 크레딧 텍스트 translateY: 0~100% 스크롤에서 0→-200vh 범위
  const textTranslate = scrollProgress * 200;

  return (
    <section id="service" ref={sectionRef} style={{ height: "300vh" }} className="relative">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Section Header */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none">
          <span className="section-label block mb-2">Service</span>
          <h2 className="text-2xl md:text-3xl font-light tracking-[0.15em] text-[#2d2a28]">
            사업 분야
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-2 h-full">
          {/* Left: Image blind stack */}
          <div className="relative overflow-hidden">
            {/* Image 1 — 항상 아래에 깔림 */}
            <div className="absolute inset-0">
              <Image
                src={services[0].image}
                alt={services[0].title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Image 2 — 블라인드 내리며 덮음 */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: `inset(0 0 ${100 - img2Progress * 100}% 0)`,
              }}
            >
              <Image
                src={services[1].image}
                alt={services[1].title}
                fill
                className="object-cover"
              />
            </div>

            {/* Image 3 — 블라인드 내리며 덮음 */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: `inset(0 0 ${100 - img3Progress * 100}% 0)`,
              }}
            >
              <Image
                src={services[2].image}
                alt={services[2].title}
                fill
                className="object-cover"
              />
            </div>

            {/* 좌측 오버레이 */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#F5F7F8]/10" />
          </div>

          {/* Right: Credits text */}
          <div className="relative flex items-center overflow-hidden bg-[#F5F7F8]">
            <div
              className="absolute w-full px-12 md:px-16"
              style={{
                transform: `translateY(${-textTranslate}vh)`,
                top: "100vh",
              }}
            >
              {services.map((service, index) => {
                const isActive = activeService === index;
                return (
                  <div
                    key={service.id}
                    className="mb-32 transition-opacity duration-700"
                    style={{ opacity: isActive ? 1 : 0.12 }}
                  >
                    <span className="text-[80px] font-light text-[#C8D0DA] leading-none block mb-4">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs tracking-[0.2em] uppercase text-[#C05010] block mb-3">
                      {service.subtitle}
                    </span>
                    <h3 className="text-3xl md:text-4xl tracking-[0.1em] font-light text-[#2d2a28] mb-6">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#8B95A1] leading-[2] mb-8 max-w-sm">
                      {service.description}
                    </p>
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
                );
              })}
            </div>

            {/* Progress indicator */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
              {services.map((_, index) => (
                <div
                  key={index}
                  className="transition-all duration-500"
                  style={{
                    width: activeService === index ? 32 : 4,
                    height: 4,
                    borderRadius: 2,
                    backgroundColor:
                      activeService === index ? "#C05010" : "#C8D0DA",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout — 단순 세로 카드 (스크롤 고정 없음) */}
        <div className="md:hidden h-full overflow-y-auto">
          <div className="pt-32 pb-16 px-6 space-y-16">
            {services.map((service, index) => (
              <div key={service.id}>
                <div className="relative aspect-[4/3] overflow-hidden bg-[#DCE2E8] mb-6">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                </div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#C05010] block mb-2">
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
