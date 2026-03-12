"use client";

import { useInView } from "@/hooks/useInView";
import Link from "next/link";
import Image from "next/image";

const S3 = "https://nbpkoreare.s3.ap-northeast-2.amazonaws.com";

export default function RecruitSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const partners = [
    { title: "MIDCO International", type: "USA / 기술제휴 파트너", since: "2007" },
    { title: "ECOSTAR", type: "Turkey / 기술 파트너", since: "2013" },
    { title: "한화오션", type: "조선/해양 분야" },
    { title: "HD현대미포", type: "조선/해양 분야" },
    { title: "BMW", type: "자동차 분야" },
    { title: "POSCO", type: "중공업/소재 분야" },
  ];

  return (
    <section id="partners" className="py-32 px-6 md:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image Grid */}
          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-1000 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative aspect-square overflow-hidden bg-[#e8e8e0]">
              <Image src={`${S3}/images/intro4.JPG`} alt="MIDCO 파트너 현장" fill className="object-cover" />
            </div>
            <div className="relative aspect-square mt-8 overflow-hidden bg-[#e8e8e0]">
              <Image src={`${S3}/images/into3.jpg`} alt="ECOSTAR 파트너 현장" fill className="object-cover" />
            </div>
            <div className="relative aspect-square -mt-8 overflow-hidden bg-[#e8e8e0]">
              <Image src={`${S3}/assets/industry1.png`} alt="조선 현장" fill className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden bg-[#e8e8e0]">
              <Image src={`${S3}/assets/industry2.png`} alt="자동차 현장" fill className="object-cover" />
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <span className="section-label block mb-4">Partners</span>
            <h2 className="section-title mb-8">TRUSTED BY</h2>

            <p className="text-sm leading-[2] text-[#888480] mb-8">
              국내외 80여 주요 기업이 NBP KOREA의 기술력을 신뢰합니다.
              글로벌 파트너십과 현장 검증된 기술로 산업 현장의 요구에 응답합니다.
            </p>

            <div className="border-t border-[#d4d4cc] mb-8">
              {partners.map((partner) => (
                <div
                  key={partner.title}
                  className="flex items-center justify-between py-4 border-b border-[#d4d4cc]"
                >
                  <div>
                    <span className="block text-sm tracking-[0.05em] text-[#2d2a28]">{partner.title}</span>
                    <span className="text-xs text-[#888480]">{partner.type}</span>
                  </div>
                  {partner.since && (
                    <span className="text-xs text-[#d4d4cc] tracking-[0.1em]">Since {partner.since}</span>
                  )}
                </div>
              ))}
            </div>

            <Link href="/business" className="btn-link group">
              <span className="w-8 h-8 flex items-center justify-center border border-[#2d2a28]/30 rounded-full group-hover:bg-[#2d2a28] group-hover:text-[#f3f3ec] transition-all">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1 7L7 1M7 1H2M7 1V6" stroke="currentColor" strokeWidth="1"/>
                </svg>
              </span>
              <span>주요 고객사 보기</span>
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
