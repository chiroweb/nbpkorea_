"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { News } from "@/lib/types";

export default function NewsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [newsItems, setNewsItems] = useState<News[]>([]);

  useEffect(() => {
    fetch("/api/news")
      .then((r) => r.json())
      .then((data: News[]) => {
        if (Array.isArray(data)) setNewsItems(data.slice(0, 3));
      })
      .catch(() => {});
  }, []);

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
                <path d="M1 7L7 1M7 1H2M7 1V6" stroke="currentColor" strokeWidth="1" />
              </svg>
            </span>
            <span>View All News</span>
            <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="transition-transform group-hover:translate-x-1">
              <path d="M0 4H15M15 4L11 1M15 4L11 7" stroke="currentColor" strokeWidth="1" />
            </svg>
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <Link
              key={item.id}
              href={`/news/${item.slug}`}
              className={`group transition-all duration-1000 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] mb-6 overflow-hidden bg-[#DCE2E8]">
                <Image
                  src={item.image_url}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex items-center gap-4 mb-3">
                <span className="text-[13px] tracking-[0.15em] uppercase px-3 py-1 border border-[#C8D0DA]">
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
