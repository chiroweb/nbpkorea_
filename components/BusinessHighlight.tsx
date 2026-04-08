"use client";

import { useInView } from "@/hooks/useInView";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

export default function BusinessHighlight() {
  const { ref, isInView } = useInView({ threshold: 0.15 });
  const t = useTranslations("home.businessHighlight");

  const mainBusiness = {
    title: t("mainTitle"),
    subtitle: "Combustion Systems & Industrial Burners",
    description: t("mainDesc"),
    image: `${S3}/images/combustion-main.jpeg`,
    href: "/business/combustion",
  };

  const subBusinesses = [
    {
      title: t("environment.title"),
      subtitle: "Environmental Systems",
      keywords: t("environment.keywords"),
      description: t("environment.desc"),
      image: `${S3}/images/combustion-site-hd.jpg`,
      href: "/business/environment",
    },
    {
      title: t("hvac.title"),
      subtitle: "HVAC Systems",
      keywords: t("hvac.keywords"),
      description: t("hvac.desc"),
      image: `${S3}/images/hvac/hvac-main.png`,
      href: "/business/hvac",
    },
    {
      title: t("burner.title"),
      subtitle: "Industrial Burners",
      keywords: t("burner.keywords"),
      description: t("burner.desc"),
      image: `${S3}/images/burner/duct-burner-hero.jpg`,
      href: "/business/burner",
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`mb-12 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="section-label block mb-4">Business</span>
          <h2 className="section-title">{t("sectionTitle")}</h2>
        </div>

        {/* Main Business */}
        <Link
          href={mainBusiness.href}
          className={`group block mb-6 transition-all duration-1000 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="relative w-full aspect-[21/9] md:aspect-[21/8] overflow-hidden bg-[#1a1a1a]">
            <Image
              src={mainBusiness.image}
              alt={mainBusiness.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-90"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/80 via-[#1a1a1a]/40 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 lg:p-14">
              <span className="text-xs tracking-[0.1em] uppercase text-[#C05010] mb-2">
                {mainBusiness.subtitle}
              </span>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 tracking-normal">
                {mainBusiness.title}
              </h3>
              <p className="text-sm md:text-base text-white/70 max-w-xl leading-relaxed hidden md:block">
                {mainBusiness.description}
              </p>
              <div className="flex items-center gap-3 mt-4">
                <span className="text-sm tracking-[0.06em] uppercase text-white/60 group-hover:text-[#C05010] transition-colors">
                  {t("learnMore")}
                </span>
                <svg
                  width="16"
                  height="8"
                  viewBox="0 0 16 8"
                  fill="none"
                  className="text-white/40 group-hover:text-[#C05010] transition-all group-hover:translate-x-1"
                >
                  <path
                    d="M0 4H15M15 4L11 1M15 4L11 7"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
              </div>
            </div>
          </div>
        </Link>

        {/* Sub Businesses — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {subBusinesses.map((biz, index) => (
            <Link
              key={biz.href}
              href={biz.href}
              className={`group block transition-all duration-1000 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${400 + index * 150}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#1a1a1a]">
                <Image
                  src={biz.image}
                  alt={biz.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-[#1a1a1a]/20 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                  <span className="text-xs tracking-[0.08em] uppercase text-[#C05010] mb-1">
                    {biz.subtitle}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1 tracking-normal">
                    {biz.title}
                  </h3>
                  <p className="text-xs md:text-sm text-white/50">
                    {biz.keywords}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View all link */}
        <div
          className={`mt-10 flex justify-center transition-all duration-1000 delay-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Link
            href="/business"
            className="inline-flex items-center gap-3 text-sm tracking-[0.06em] uppercase border border-[#2d2a28] px-8 py-4 hover:bg-[#C05010] hover:border-[#C05010] hover:text-white transition-all duration-300"
          >
            {t("viewAll")}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M1 11L11 1M11 1H3M11 1V9"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
