"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const S3 = "https://nbpkoreare.s3.ap-northeast-2.amazonaws.com";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { label: "환경설비 현장", src: `${S3}/assets/industry1.png` },
    { label: "연소설비 현장", src: `${S3}/assets/industry2.png` },
    { label: "중공업 현장", src: `${S3}/assets/industry3.png` },
    { label: "환경처리 현장", src: `${S3}/assets/industry4.png` },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.label}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f3f3ec]/30 via-transparent to-[#f3f3ec]/60" />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.2em] mb-6">
          TRUST IN FIRE
        </h1>
        <p className="text-sm md:text-base tracking-[0.15em] text-[#888480] max-w-xl mx-auto">
          산업용 연소장비와 환경설비의 기술 파트너, NBP KOREA
        </p>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index
                ? "bg-[#C05010] w-8"
                : "bg-[#C05010]/30"
            }`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-[10px] tracking-[0.2em] uppercase text-[#888480]">
          Scroll Down
        </span>
        <div className="scroll-indicator">
          <svg width="20" height="30" viewBox="0 0 20 30" fill="none" className="opacity-60">
            <rect x="1" y="1" width="18" height="28" rx="9" stroke="#2d2a28" strokeWidth="1"/>
            <circle cx="10" cy="10" r="3" fill="#2d2a28"/>
          </svg>
        </div>
      </div>

      {/* Side Text */}
      <div className="absolute left-6 bottom-1/4 hidden lg:block">
        <div className="flex items-center gap-4 -rotate-90 origin-left">
          <div className="w-16 h-px bg-[#2d2a28]/30" />
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#888480]">
            NBP KOREA Since 2006
          </span>
        </div>
      </div>

      {/* Contact Quick Info */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-end gap-2">
        <span className="text-[10px] tracking-[0.15em] text-[#888480]/80">031-434-6566~7</span>
        <div className="w-8 h-px bg-[#2d2a28]/20" />
        <span className="text-[10px] tracking-[0.1em] text-[#888480]/60">Ansan, Korea</span>
      </div>
    </section>
  );
}
