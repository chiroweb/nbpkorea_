"use client";

import { useInView } from "@/hooks/useInView";
import Link from "next/link";

export default function IRSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const inquiryTypes = [
    { title: "제품 상담", subtitle: "Product", desc: "환경설비·연소설비 제품 문의", href: "/support" },
    { title: "견적 요청", subtitle: "Quote", desc: "현장 맞춤 설비 설계 및 견적", href: "/support" },
    { title: "A/S 문의", subtitle: "After Service", desc: "유지보수·긴급 출동 요청", href: "/support" },
    { title: "방문 상담", subtitle: "Visit", desc: "안산 본사 방문 상담 예약", href: "/support" },
  ];

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-[#DCE2E8]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="section-label block mb-4">Contact</span>
          <h2 className="section-title">문의하기</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
          {/* 연락처 */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="border-t border-[#2d2a28]/20">
              {[
                { label: "대표전화", value: "031-434-6566~7", sub: "평일 09:00 - 18:00" },
                { label: "이메일", value: "nbpkorea@nbpkorea.co.kr", sub: "영업일 기준 24시간 이내 회신" },
                { label: "주소", value: "경기도 안산시 단원구 산단로 76", sub: "성곡동" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="py-6 border-b border-[#2d2a28]/20"
                >
                  <span className="text-[10px] tracking-[0.15em] uppercase text-[#888480] block mb-1">
                    {item.label}
                  </span>
                  <span className="text-base tracking-[0.05em] text-[#2d2a28] block">{item.value}</span>
                  {item.sub && <span className="text-xs text-[#888480]">{item.sub}</span>}
                </div>
              ))}
            </div>

            <Link href="/support" className="btn-link group mt-8">
              <span className="w-8 h-8 flex items-center justify-center border border-[#2d2a28]/30 rounded-full group-hover:bg-[#C05010] group-hover:text-[#F5F7F8] transition-all">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1 7L7 1M7 1H2M7 1V6" stroke="currentColor" strokeWidth="1"/>
                </svg>
              </span>
              <span>온라인 문의하기</span>
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M0 4H15M15 4L11 1M15 4L11 7" stroke="currentColor" strokeWidth="1"/>
              </svg>
            </Link>
          </div>

          {/* 문의 유형 */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              {inquiryTypes.map((type, index) => (
                <Link
                  key={type.title}
                  href={type.href}
                  className={`border border-[#2d2a28]/20 p-6 flex flex-col gap-4 hover:bg-[#C05010] hover:text-[#F5F7F8] transition-all group transition-all duration-700 ${
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${400 + index * 80}ms` }}
                >
                  <span className="text-[10px] tracking-[0.15em] uppercase text-[#888480] group-hover:text-[#C8D0DA]">
                    {type.subtitle}
                  </span>
                  <span className="text-sm tracking-[0.08em] font-medium">{type.title}</span>
                  <span className="text-[11px] text-[#888480] group-hover:text-[#C8D0DA] mt-auto">
                    {type.desc}
                  </span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-0 group-hover:opacity-100 transition-opacity self-end">
                    <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1"/>
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
