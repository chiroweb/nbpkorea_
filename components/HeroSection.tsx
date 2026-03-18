"use client";

import { useEffect, useState, useRef } from "react";

const S3 = "https://nbpkoreare.s3.ap-northeast-2.amazonaws.com";

const slides = [
  { label: "NBPKOREA 산업 현장 1", src: `${S3}/videos/hero1.mp4` },
  { label: "NBPKOREA 산업 현장 2", src: `${S3}/videos/hero2.mp4` },
  { label: "NBPKOREA 환경설비",    src: `${S3}/videos/hero3.mp4` },
];

interface HeroSectionProps {
  shouldPlay?: boolean;
}

export default function HeroSection({ shouldPlay = false }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // 로딩 완료 시 첫 영상 시작 + 슬라이드 타이머 시작
  useEffect(() => {
    if (!shouldPlay) return;

    const video = videoRefs.current[0];
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [shouldPlay]);

  // 슬라이드 전환 시 해당 비디오를 처음부터 재생
  useEffect(() => {
    if (!shouldPlay || currentSlide === 0) return;
    const video = videoRefs.current[currentSlide];
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  }, [currentSlide, shouldPlay]);

  return (
    <section className="relative h-screen flex items-end justify-start overflow-hidden">
      {/* Background Video Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <video
              ref={(el) => { videoRefs.current[index] = el; }}
              src={slide.src}
              muted
              playsInline
              loop
              className="w-full h-full object-cover"
              aria-label={slide.label}
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
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.1em] text-white mb-4 leading-tight">
          NBPKOREA
          <br />
          <span className="text-[#C05010]">최고의</span> 연소 솔루션
        </h1>
        <p className="text-sm md:text-base tracking-[0.1em] text-white/70 max-w-lg leading-relaxed">
          산업용 연소장비와 환경설비의 기술 파트너, NBPKOREA
        </p>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-16 left-8 md:left-16 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-px transition-all duration-500 ${
              currentSlide === index ? "bg-white w-10" : "bg-white/40 w-4"
            }`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <span className="text-[13px] tracking-[0.2em] uppercase text-white/50 -rotate-90 mb-4">
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
        <span className="text-base tracking-[0.15em] text-white/50">031-434-6566~7</span>
        <div className="w-8 h-px bg-white/20" />
        <span className="text-base tracking-[0.1em] text-white/40">Ansan, Korea</span>
      </div>
    </section>
  );
}
