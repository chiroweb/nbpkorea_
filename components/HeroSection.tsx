"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const S3 = "https://nbpkoreare.s3.ap-northeast-2.amazonaws.com";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { label: "NBP KOREA 산업 현장 1", src: `${S3}/images/hero1.png` },
    { label: "NBP KOREA 산업 현장 2", src: `${S3}/images/hero2.png` },
    { label: "NBP KOREA 환경설비", src: `${S3}/images/hero3.png` },
    { label: "NBP KOREA 연소설비", src: `${S3}/images/hero4.png` },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen flex items-end justify-start overflow-hidden">
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
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/70 via-[#1a1a1a]/20 to-transparent" />

      {/* Hero Content — 왼쪽 정렬 */}
      <div className="relative z-10 px-8 md:px-16 pb-36 max-w-3xl">
        <p className="text-xs tracking-[0.3em] uppercase text-white/60 mb-4">
          Since 2006 · Ansan, Korea
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.1em] text-white mb-4 leading-tight">
          NBPKOREA
          <br />
          <span className="text-[#C05010]">세계 1위</span> 연소 솔루션
        </h1>
        <p className="text-sm md:text-base tracking-[0.1em] text-white/70 max-w-lg leading-relaxed">
          산업용 연소장비와 환경설비의 기술 파트너, NBP KOREA
        </p>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-16 left-8 md:left-16 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-px transition-all duration-500 ${
              currentSlide === index
                ? "bg-white w-10"
                : "bg-white/40 w-4"
            }`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-12 right-8 md:right-16 flex flex-col items-center gap-3 z-10">
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/50 -rotate-90 mb-4">
          Scroll
        </span>
        <div className="scroll-indicator">
          <svg width="20" height="30" viewBox="0 0 20 30" fill="none" className="opacity-40">
            <rect x="1" y="1" width="18" height="28" rx="9" stroke="white" strokeWidth="1"/>
            <circle cx="10" cy="10" r="3" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Contact Quick Info */}
      <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-end gap-2 z-10">
        <span className="text-[10px] tracking-[0.15em] text-white/50">031-434-6566~7</span>
        <div className="w-8 h-px bg-white/20" />
        <span className="text-[10px] tracking-[0.1em] text-white/40">Ansan, Korea</span>
      </div>
    </section>
  );
}
