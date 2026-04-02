"use client";

import { useEffect, useRef, useState } from "react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

const DWELL = 0.20;
const TRANS = 0.20;

function getActiveService(p: number): number {
  if (p < DWELL + TRANS / 2) return 0;
  if (p < DWELL + TRANS + DWELL + TRANS / 2) return 1;
  return 2;
}

function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

export default function ServiceSection() {
  const t = useTranslations("home.service");
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const services = [
    {
      id: 1,
      title: t("environment.title"),
      subtitle: "Environment",
      description: t("environment.description"),
      tags: ["RTO", "RCO", "CTO", "TO"],
      image: `${S3}/images/service-environment.png`,
    },
    {
      id: 2,
      title: t("combustion.title"),
      subtitle: "Combustion",
      description: t("combustion.description"),
      tags: ["NKGH", "NK-IDGH", "NK-MDGH", "Paint Dryer"],
      image: `${S3}/images/service-combustion.png`,
    },
    {
      id: 3,
      title: t("burner.title"),
      subtitle: "Burner",
      description: t("burner.description"),
      tags: ["NBP Series", "Low-NOx", "Metal Fiber", "Uniform Combustion"],
      image: `${S3}/images/metal-burner2.png`,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      const raw = Math.max(0, Math.min(1, -rect.top / scrollable));
      setScrollProgress(raw);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeService = getActiveService(scrollProgress);

  const img2Raw = Math.max(0, Math.min(1, (scrollProgress - DWELL) / TRANS));
  const img2Progress = easeInOut(img2Raw);

  const img3Raw = Math.max(0, Math.min(1, (scrollProgress - DWELL - TRANS - DWELL) / TRANS));
  const img3Progress = easeInOut(img3Raw);

  const getTextStyle = (i: number) => {
    const isActive = activeService === i;
    const isPast = i < activeService;
    return {
      opacity: isActive ? 1 : 0,
      transform: isActive ? "translateY(0)" : isPast ? "translateY(-32px)" : "translateY(32px)",
      transition: "opacity 0.6s ease, transform 0.6s ease",
      pointerEvents: isActive ? "auto" as const : "none" as const,
    };
  };

  return (
    <section id="service" ref={sectionRef} style={{ height: "500vh" }} className="relative">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Section Header */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none">
          <span className="section-label block mb-1">Service</span>
          <h2 className="text-xl md:text-2xl font-bold tracking-[0.06em] text-[#2d2a28]">
            {t("label")}
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid h-full" style={{ gridTemplateColumns: "42% 58%" }}>

          {/* Left: Blind Image */}
          <div className="relative overflow-hidden py-16 px-8">
            <div className="relative h-full overflow-hidden rounded-sm">
              <div className="absolute inset-0">
                <Image src={services[0].image} alt={services[0].title} fill className="object-cover" priority />
              </div>
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 0 ${(1 - img2Progress) * 100}% 0)` }}
              >
                <Image src={services[1].image} alt={services[1].title} fill className="object-cover" />
              </div>
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 0 ${(1 - img3Progress) * 100}% 0)` }}
              >
                <Image src={services[2].image} alt={services[2].title} fill className="object-cover" />
              </div>
            </div>

            <div className="absolute bottom-20 left-12 flex flex-col gap-2 z-10">
              {services.map((_, i) => (
                <div
                  key={i}
                  className="transition-all duration-500"
                  style={{
                    height: 4,
                    width: activeService === i ? 28 : 4,
                    borderRadius: 2,
                    backgroundColor: activeService === i ? "#C05010" : "#C8D0DA",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right: Text */}
          <div className="relative flex items-center bg-[#F5F7F8]">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="absolute inset-0 flex flex-col justify-center items-center px-8"
                style={getTextStyle(index)}
              >
              <div className="w-full max-w-lg">
                <span className="text-[94px] md:text-[114px] font-light text-[#DCE2E8] leading-none block mb-2">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-xs tracking-[0.25em] uppercase text-[#C05010] block mb-3">
                  {service.subtitle}
                </span>
                <h3 className="text-2xl md:text-3xl tracking-[0.08em] font-bold text-[#2d2a28] mb-6">
                  {service.title}
                </h3>
                <p className="text-sm text-[#5C6470] leading-relaxed mb-6 max-w-md">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[13px] tracking-[0.04em] border border-[#D4DAE2] px-3 py-1 text-[#5C6470]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href="/business" className="btn-link group">
                  <span className="w-8 h-8 flex items-center justify-center border border-[#2d2a28]/30 rounded-full group-hover:bg-[#C05010] group-hover:text-[#F5F7F8] transition-all">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1 7L7 1M7 1H2M7 1V6" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  </span>
                  <span>{t("viewBusiness")}</span>
                  <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="transition-transform group-hover:translate-x-1">
                    <path d="M0 4H15M15 4L11 1M15 4L11 7" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </Link>
              </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden h-full overflow-y-auto">
          <div className="pt-32 pb-16 px-6 space-y-16">
            {services.map((service, index) => (
              <div key={service.id}>
                <div className="relative aspect-[4/3] overflow-hidden bg-[#DCE2E8] mb-6">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                </div>
                <span className="text-[13px] tracking-[0.04em] uppercase text-[#C05010] block mb-2">
                  {service.subtitle}
                </span>
                <h3 className="text-xl tracking-[0.04em] font-bold text-[#2d2a28] mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-[#5C6470] leading-relaxed mb-6">{service.description}</p>
                <Link href="/business" className="btn-link group">
                  <span className="w-8 h-8 flex items-center justify-center border border-[#2d2a28]/30 rounded-full group-hover:bg-[#C05010] group-hover:text-[#F5F7F8] transition-all">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1 7L7 1M7 1H2M7 1V6" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  </span>
                  <span>{t("viewBusiness")}</span>
                  <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="transition-transform group-hover:translate-x-1">
                    <path d="M0 4H15M15 4L11 1M15 4L11 7" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
