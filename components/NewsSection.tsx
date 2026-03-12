"use client";

import { useInView } from "@/hooks/useInView";
import Link from "next/link";
import Image from "next/image";

export default function NewsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const newsItems = [
    { id: 1, category: "수상", date: "2021. 11. 15", title: "산업통상자원부 장관 표창 수상", image: "https://nbpkoreare.s3.ap-northeast-2.amazonaws.com/images/reward-1/%EB%B6%80%EC%B4%9D%EB%A6%AC%EA%B2%B8%EA%B5%90%EC%9C%A1%EB%B6%80%EC%9E%A5%EA%B4%80%EC%83%81_%ED%91%9C%EC%B0%BD%EC%9E%A5(2021).png" },
    { id: 2, category: "인증", date: "2022. 03. 10", title: "기업부설연구소 KOITA 인증 취득", image: "https://nbpkoreare.s3.ap-northeast-2.amazonaws.com/images/intro2.jpg" },
    { id: 3, category: "신제품", date: "2023. 06. 20", title: "차세대 금속화이버 버너 NBP-MB 시리즈 출시", image: "https://nbpkoreare.s3.ap-northeast-2.amazonaws.com/images/metal%20burner1.png" },
  ];

  return (
    <section id="news" className="py-32 px-6 md:px-12 bg-[#f3f3ec]" ref={ref}>
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

          <Link href="#" className="btn-link group mt-6 md:mt-0">
            <span className="w-8 h-8 flex items-center justify-center border border-[#2d2a28]/30 rounded-full group-hover:bg-[#2d2a28] group-hover:text-[#f3f3ec] transition-all">
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
              href="#"
              className={`group transition-all duration-1000 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] mb-6 overflow-hidden bg-[#e8e8e0]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex items-center gap-4 mb-3">
                <span className="text-[10px] tracking-[0.15em] uppercase px-3 py-1 border border-[#d4d4cc]">
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
