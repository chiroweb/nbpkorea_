"use client";

import { useState, useEffect, useRef } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CompanySection from "@/components/CompanySection";
import NewsSection from "@/components/NewsSection";
import ServiceSection from "@/components/ServiceSection";
import HistorySection from "@/components/HistorySection";
import RecruitSection from "@/components/RecruitSection";
import IRSection from "@/components/IRSection";
import Footer from "@/components/Footer";
import PopupModal from "@/components/PopupModal";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      const progress = Math.min(window.scrollY / 400, 1);
      const radius = progress * 36;
      const shadowBlur = progress * 80;
      const shadowOpacity = progress * 0.22;
      contentRef.current.style.borderRadius = `${radius}px ${radius}px 0 0`;
      contentRef.current.style.boxShadow =
        progress > 0.02
          ? `0 -${shadowBlur * 0.4}px ${shadowBlur}px rgba(0,0,0,${shadowOpacity})`
          : "none";
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <PopupModal />

      <div
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Header />
        <main>
          <div className="sticky top-0 z-0 h-screen">
            <HeroSection shouldPlay={!isLoading} />
          </div>
          <div ref={contentRef} className="relative z-10 bg-[#F5F7F8]">
            <CompanySection />
            <ServiceSection />
            <HistorySection />
            <RecruitSection />
            <NewsSection />
            <IRSection />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
