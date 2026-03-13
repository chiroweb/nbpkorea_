"use client";

import { useInView } from "@/hooks/useInView";
import Link from "next/link";
import Image from "next/image";

export default function NewsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const newsItems = [
    { id: 1, category: "기술 인사이트", date: "2025.12.10", title: "RTO 시스템, 조선소 도장 공정 악취 처리의 해법", image: "https://nbpkoreare.s3.ap-northeast-2.amazonaws.com/images/service-environment.png", href: "/news/rto-case-study-shipbuilding", objectPosition: "center center" },
    { id: 2, category: "제품 소식", date: "2025.11.20", title: "NBP-MB 금속화이버 버너, NOx 저감 30% 달성 검증", image: "https://nbpkoreare.s3.ap-northeast-2.amazonaws.com/images/service-burner.png", href: "/news/metal-fiber-burner-nox-reduction", objectPosition: "center center" },
    { id: 3, category: "회사 소식", date: "2025.10.05", title: "ISO 9001 · ISO 14001 통합 인증 갱신 완료", image: "https://nbpkoreare.s3.ap-northeast-2.amazonaws.com/images/service-combustion.png", href: "/news/nbpkorea-iso-certification", objectPosition: "center center" },
  ];

  return (
    <section id="news" className="py-32 px-6 md:px-12 bg-[#F5F7F8]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end md:justify-between mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div>
            <span className="section-label block mb-4">News</span>
            <h2 className="section-title">LATEST NEWS</h2>
          </div>

          <Link href="/news" className="btn-link group mt-6 md:mt-0">
            <span className="w-8 h-8 flex items-center justify-center border border-[#2d2a28]/30 rounded-full group-hover:bg-[#C05010] group-hover:text-[#F5F7F8] transition-all">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path d="M1 7L7 1M7 1H2M7 1V6" stroke="currentColor" strokeWidth="1"/>
              </svg>
            </span>
            <span>View All News</span>
            <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="transition-transform group-hover:translate-x-1">
              <path d="M0 4H15M15 4L11 1M15 4L11 7" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <Link
              key={item.id}
              href={item.href}
              className={`group transition-all duration-1000 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] mb-6 overflow-hidden bg-[#DCE2E8]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ objectPosition: item.objectPosition }}
                />
              </div>

              {/* Content */}
              <div className="flex items-center gap-4 mb-3">
                <span className="text-[10px] tracking-[0.15em] uppercase px-3 py-1 border border-[#C8D0DA]">
                  {item.category}
                </span>
                <span className="text-xs text-[#888480]">{item.date}</span>
              </div>

              <h3 className="text-base tracking-[0.05em] group-hover:opacity-60 transition-opacity">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
