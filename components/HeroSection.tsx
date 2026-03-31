"use client";

import { useEffect, useState, useRef } from "react";
import { useTranslations } from "next-intl";

const S3 = "https://nbpkoreare.s3.ap-northeast-2.amazonaws.com";

const slides = [
  { label: "NBPKOREA Industrial Site 1", src: `${S3}/videos/hero1.mp4`, duration: 7000 },
  { label: "NBPKOREA Environmental Systems", src: `${S3}/videos/hero3.mp4`, duration: 8000 },
  { label: "NBPKOREA Industrial Site 5", src: `${S3}/videos/hero5.mp4`, duration: 7000 },
  { label: "NBPKOREA Industrial Site 2", src: `${S3}/videos/hero2.mp4`, duration: 7000 },
];

interface HeroSectionProps {
  shouldPlay?: boolean;
}

export default function HeroSection({ shouldPlay = false }: HeroSectionProps) {
  const t = useTranslations("home.hero");
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const currentSlideRef = useRef(0);

  function scheduleNext(index: number) {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      const next = (index + 1) % slides.length;
      currentSlideRef.current = next;
      setCurrentSlide(next);
      scheduleNext(next);
    }, slides[index].duration);
  }

  useEffect(() => {
    if (!shouldPlay) return;

    const video = videoRefs.current[0];
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }

    scheduleNext(0);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldPlay]);

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

      {/* Hero Content — Desktop */}
      <div className="relative z-10 px-8 md:px-16 pb-36 max-w-3xl hidden md:block">
        <p className="text-xs tracking-[0.3em] uppercase text-white/60 mb-4">
          {t("since")}
        </p>
        <h1 className="text-5xl lg:text-6xl font-bold tracking-[0.1em] text-white mb-4 leading-tight">
          {t("title")}
          <br />
          <span className="text-[#C05010]">{t("titleHighlight")}</span> {t("titleSuffix")}
        </h1>
        <p className="text-base tracking-[0.1em] text-white/70 max-w-lg leading-relaxed">
          {t("subtitle")}
        </p>
      </div>

      {/* Hero Content — Mobile */}
      <div className="md:hidden absolute inset-0 z-10 flex flex-col justify-between px-6 pt-24 pb-16">
        {/* Top: since + title, right-aligned */}
        <div className="text-right">
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/60 mb-3">
            {t("since")}
          </p>
          <p className="text-[22px] font-bold tracking-[0.1em] text-white leading-tight">
            {t("title")}
          </p>
          <p className="text-[22px] font-bold tracking-[0.1em] leading-tight">
            <span className="text-[#C05010]">{t("titleHighlight")}</span>{" "}
            <span className="text-white">{t("titleSuffix")}</span>
          </p>
        </div>

        {/* Bottom: subtitle */}
        <p className="text-xs tracking-[0.06em] text-white/70 leading-relaxed">
          {t("subtitle")}
        </p>
      </div>

      {/* Slide Indicators — desktop only */}
      <div className="absolute bottom-16 left-8 md:left-16 gap-3 z-10 hidden md:flex">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (timerRef.current) clearTimeout(timerRef.current);
              currentSlideRef.current = index;
              setCurrentSlide(index);
              scheduleNext(index);
            }}
            className={`h-px transition-all duration-500 ${
              currentSlide === index ? "bg-white w-10" : "bg-white/40 w-4"
            }`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex-col items-center gap-3 z-10 hidden md:flex">
        <span className="text-[13px] tracking-[0.2em] uppercase text-white/50 -rotate-90 mb-4">
          {t("scroll")}
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
