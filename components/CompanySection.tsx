"use client";

import { useState, useEffect, useCallback } from "react";
import { useInView } from "@/hooks/useInView";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";
const images = [
  {
    src: `${S3}/images/company/building-1.jpg`,
    alt: "NBPKOREA 신사옥 전경",
  },
  {
    src: `${S3}/images/company/building-2.jpg`,
    alt: "NBPKOREA 신사옥",
  },
  {
    src: `${S3}/images/company/building-3.jpg`,
    alt: "NBPKOREA 사옥",
  },
];

export default function CompanySection() {
  const t = useTranslations("home.company");
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3300);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="company" className="py-32 overflow-hidden" ref={ref}>
      <div className="grid md:grid-cols-2 items-center">
        {/* Image */}
        <div
          className={`transition-all duration-1000 ${
            isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          {/* Main image */}
          <div className="relative aspect-[8/5] w-full overflow-hidden bg-[#DCE2E8]">
            {images.map((img, idx) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
                  idx === current ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 mt-2 px-0">
            {images.map((img, idx) => (
              <button
                key={img.src}
                onClick={() => goTo(idx)}
                className={`relative flex-1 aspect-[16/9] overflow-hidden bg-[#DCE2E8] transition-all duration-300 ${
                  idx === current
                    ? "ring-2 ring-[#C05010] opacity-100"
                    : "opacity-50 hover:opacity-80"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div
          className={`px-6 md:px-12 transition-all duration-1000 delay-300 ${
            isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <span className="section-label block mb-6">Company</span>
          <h2 className="font-bold tracking-[0.02em] text-[#2d2a28] mb-8 leading-none text-4xl md:text-5xl lg:text-6xl">NBPKOREA</h2>
          <p className="text-sm md:text-base leading-relaxed text-[#5C6470] mb-12">
            {t("description")}
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
            <span>{t("link")}</span>
            <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="transition-transform group-hover:translate-x-1">
              <path d="M0 4H15M15 4L11 1M15 4L11 7" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
