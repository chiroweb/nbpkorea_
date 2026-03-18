"use client";

import { useInView } from "@/hooks/useInView";
import Link from "next/link";
import Image from "next/image";

export default function CompanySection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="company" className="py-32 px-6 md:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div
            className={`transition-all duration-1000 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#DCE2E8]">
              <Image
                src="https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com/images/building.jpg"
                alt="NBPKOREA 본사"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <span className="section-label block mb-4">Company</span>
            <h2 className="section-title mb-8">NBPKOREA</h2>
            <p className="text-sm leading-[2] text-[#888480] mb-12">
              NBPKOREA는 2006년 경기도 안산에서 설립된 산업용 연소장비 및 환경설비 전문 기업입니다.
              금속화이버 버너를 비롯한 독자 기술과 19건의 등록 특허, 미국·터키의 글로벌 파트너십을 기반으로
              조선, 자동차, 중공업, 화학 등 다양한 산업 현장의 80여 주요 기업에 신뢰할 수 있는 솔루션을 공급합니다.
            </p>

            <Link
              href="/about"
              className="btn-link group"
            >
              <span className="w-8 h-8 flex items-center justify-center border border-[#2d2a28]/30 rounded-full group-hover:bg-[#C05010] group-hover:text-[#F5F7F8] transition-all">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1 7L7 1M7 1H2M7 1V6" stroke="currentColor" strokeWidth="1"/>
                </svg>
              </span>
              <span>회사소개 보기</span>
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
