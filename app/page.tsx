"use client";

import { useState } from "react";
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

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <div
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Header />
        <main>
          <HeroSection />
          <CompanySection />
          <NewsSection />
          <ServiceSection />
          <HistorySection />
          <RecruitSection />
          <IRSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
