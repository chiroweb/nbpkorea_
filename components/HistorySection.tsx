"use client";

import { useInView } from "@/hooks/useInView";
import Link from "next/link";

export default function HistorySection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="history" className="py-32 px-6 md:px-12 bg-[#2d2a28] text-[#f3f3ec]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <span className="section-label block mb-4 text-[#a3a09b]">History</span>
            <h2 className="section-title mb-8">NBP KOREA의 발자취</h2>

            <div className="flex items-baseline gap-4 mb-12">
              <span className="text-5xl md:text-7xl font-light">(2006</span>
              <span className="text-xl text-[#888480]">—</span>
              <span className="text-5xl md:text-7xl font-light">현재)</span>
            </div>

            <p className="text-sm leading-[2] text-[#a3a09b] mb-12">
              2006년 경기도 안산에서 시작한 NBP KOREA는 산업용 연소장비와 환경설비 분야에서
              끊임없이 기술을 혁신하며 성장해 왔습니다. 신뢰와 도전, 열정의 가치를 지켜온 20년의 역사.
            </p>

            <Link href="/about" className="btn-link group text-[#f3f3ec]">
              <span className="w-8 h-8 flex items-center justify-center border border-[#f3f3ec]/30 rounded-full group-hover:bg-[#f3f3ec] group-hover:text-[#2d2a28] transition-all">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1 7L7 1M7 1H2M7 1V6" stroke="currentColor" strokeWidth="1"/>
                </svg>
              </span>
              <span>회사 연혁 보기</span>
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M0 4H15M15 4L11 1M15 4L11 7" stroke="currentColor" strokeWidth="1"/>
              </svg>
            </Link>
          </div>

          {/* Timeline Visual */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-[#888480]/30" />

              {/* Timeline Items */}
              {[
                { year: "2006", event: "NBP KOREA 설립 (안산시)" },
                { year: "2007", event: "MIDCO International 기술제휴" },
                { year: "2013", event: "ECOSTAR 파트너십 체결" },
                { year: "2022", event: "기업부설연구소 설립 (KOITA)" },
              ].map((item, index) => (
                <div key={item.year} className="flex items-center gap-8 mb-8 last:mb-0">
                  <div className="w-8 h-8 rounded-full border border-[#888480]/30 flex items-center justify-center bg-[#2d2a28] z-10">
                    <div className="w-2 h-2 rounded-full bg-[#f3f3ec]" />
                  </div>
                  <div>
                    <span className="text-sm text-[#888480] block mb-1">{item.year}</span>
                    <span className="text-base tracking-[0.1em]">{item.event}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
