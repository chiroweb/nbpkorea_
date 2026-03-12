"use client";

import { useInView } from "@/hooks/useInView";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const S3 = "https://nbpkoreare.s3.ap-northeast-2.amazonaws.com";

export default function ServiceSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [activeService, setActiveService] = useState(0);

  const services = [
    { id: 1, title: "환경설비", subtitle: "Environment", description: "CTO, RTO, RCO, TO, DTO 등 VOCs 및 악취 처리를 위한 산업용 환경설비. 설계부터 시공, 유지보수까지 원스톱 서비스를 제공합니다.", image: `${S3}/images/%ED%99%98%EA%B2%BD%EC%82%AC%EC%97%85%EB%B6%80/Environment%20Business%20Division/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EC%9A%A9%20CTO%20%EB%A0%8C%EB%8D%94%EB%A7%81-nowatermark.jpg` },
    { id: 2, title: "연소설비", subtitle: "Combustion", description: "산업용 직접·간접 가스히터, 하이브리드 제습기, 차량 도장 건조 시스템 등 고효율 연소장비를 설계·제작·공급합니다.", image: `${S3}/images/product-heater.png` },
    { id: 3, title: "산업용 버너", subtitle: "Burner", description: "자체 개발 금속화이버 버너(NBP-MB). 적외선 복사열 활용, NOx 대폭 저감, 에너지 효율 30% 이상 향상의 혁신 기술입니다.", image: `${S3}/images/metal%20burner1.png` },
  ];

  return (
    <section id="service" className="py-32 px-6 md:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="section-label block mb-4">Service</span>
          <h2 className="section-title">사업 분야</h2>
        </div>

        {/* Image Gallery */}
        <div
          className={`grid md:grid-cols-3 gap-4 mb-16 transition-all duration-1000 delay-300 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveService(index)}
              className={`relative aspect-[3/4] overflow-hidden transition-all duration-500 ${
                activeService === index
                  ? "ring-2 ring-[#2d2a28]"
                  : "opacity-60 hover:opacity-80"
              }`}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>

        {/* Service Details */}
        <div
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Service Thumbnail */}
          <div className="relative aspect-square overflow-hidden bg-[#e8e8e0]">
            <Image
              src={services[activeService].image}
              alt={services[activeService].title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl font-light text-[#d4d4cc]">
                {String(activeService + 1).padStart(2, "0")}
              </span>
              <h3 className="text-2xl tracking-[0.1em]">
                {services[activeService].title}
              </h3>
            </div>
            <p className="text-sm text-[#888480] leading-[2] mb-8">
              {services[activeService].description}. Add more details about your service here. Explain the benefits and features that make this service unique.
            </p>

            <Link href="/business" className="btn-link group">
              <span className="w-8 h-8 flex items-center justify-center border border-[#2d2a28]/30 rounded-full group-hover:bg-[#2d2a28] group-hover:text-[#f3f3ec] transition-all">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1 7L7 1M7 1H2M7 1V6" stroke="currentColor" strokeWidth="1"/>
                </svg>
              </span>
              <span>사업분야 보기</span>
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M0 4H15M15 4L11 1M15 4L11 7" stroke="currentColor" strokeWidth="1"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
