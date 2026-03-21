"use client";

import SubpageLayout from "@/components/SubpageLayout";
import { useInView } from "@/hooks/useInView";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";
const LOGO_BASE = `${S3}/images/%EC%A3%BC%EC%9A%94%EA%B1%B0%EB%9E%98%EC%B2%98`;

const clientLogos = [
  { name: "한화오션", file: "한화오션.png" },
  { name: "현대중공업", file: "현대중공업.png" },
  { name: "삼성중공업", file: "삼성중공업.png" },
  { name: "한국조선해양", file: "한국조선해양.png" },
  { name: "현대미포조선", file: "현대미포조선.jpg" },
  { name: "현대삼호중공업", file: "현대삼호중공업.jpg" },
  { name: "POSCO", file: "posco.png" },
  { name: "동국제강", file: "동국제강.png" },
  { name: "두산", file: "두산.png" },
  { name: "BMW", file: "bmw.png" },
  { name: "Mercedes-Benz", file: "benz.png" },
  { name: "Audi", file: "audi.png" },
  { name: "KIA", file: "kia.png" },
  { name: "Volvo", file: "volvo.png" },
  { name: "한진중공업", file: "한진중공업.jpg" },
  { name: "HJ중공업", file: "HJ중공업.png" },
  { name: "농협목우촌", file: "농협목우촌.png" },
  { name: "이디야커피", file: "이디야커피.jpg" },
  { name: "한국환경공단", file: "한국환경공단.png" },
  { name: "부산환경공단", file: "부산환경공단.png" },
  { name: "대전도시공사", file: "대전도시공사.png" },
  { name: "현대인프라코어", file: "현대인프라코어.png" },
  { name: "현대스틸산업", file: "현대스틸산업.png" },
  { name: "HSG성동조선", file: "HSG성동조선.png" },
  { name: "케이조선", file: "케이조선.png" },
  { name: "SK오션플랜트", file: "SK오션플랜트.png" },
  { name: "동부건설", file: "동부건설.png" },
  { name: "대보건설", file: "대보건설.png" },
  { name: "STX건설", file: "STX건설.png" },
  { name: "신성엔지니어링", file: "신성엔지니어링.png" },
  { name: "경인양행", file: "경인양행.png" },
  { name: "ECOSTAR", file: "ECOSTAR.png" },
];

function BusinessCard({
  area,
  index,
}: {
  area: { id: number; title: string; subtitle: string; image: string; description: string; tags: string[] };
  index: number;
}) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.2 });
  const t = useTranslations("business");
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-24 last:mb-0">
      <div
        className={`${isEven ? "md:order-1" : "md:order-2"} transition-all duration-1000 ${
          isInView
            ? "opacity-100 translate-x-0"
            : `opacity-0 ${isEven ? "-translate-x-10" : "translate-x-10"}`
        }`}
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#DCE2E8] group">
          <Image
            src={area.image}
            alt={area.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
      <div
        className={`${isEven ? "md:order-2" : "md:order-1"} transition-all duration-1000 delay-200 ${
          isInView
            ? "opacity-100 translate-x-0"
            : `opacity-0 ${isEven ? "translate-x-10" : "-translate-x-10"}`
        }`}
      >
        <span className="text-5xl font-light text-[#D4DAE2] block mb-4">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-[13px] tracking-[0.2em] uppercase text-[#888480] block mb-2">
          {area.subtitle}
        </span>
        <h3 className="text-xl md:text-2xl tracking-[0.08em] font-bold text-[#2d2a28] mb-4">
          {area.title}
        </h3>
        <p className="text-sm leading-[2] text-[#888480] mb-6">{area.description}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {area.tags.map((tag) => (
            <span
              key={tag}
              className="text-[13px] tracking-[0.1em] border border-[#D4DAE2] px-3 py-1 text-[#888480]"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link href="/products" className="btn-link group">
          <span className="w-8 h-8 flex items-center justify-center border border-[#2d2a28]/30 rounded-full group-hover:bg-[#C05010] group-hover:text-white transition-all">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <path d="M1 7L7 1M7 1H2M7 1V6" stroke="currentColor" strokeWidth="1" />
            </svg>
          </span>
          <span>{t("viewProducts")}</span>
          <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="transition-transform group-hover:translate-x-1">
            <path d="M0 4H15M15 4L11 1M15 4L11 7" stroke="currentColor" strokeWidth="1" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

function IndustryApplicationsSection() {
  const { ref, isInView } = useInView({ threshold: 0.15 });
  const t = useTranslations("business");

  const industries = [
    {
      icon: "⚓",
      title: t("industries.shipbuilding.title"),
      subtitle: "Shipbuilding",
      description: t("industries.shipbuilding.description"),
      clients: t("industries.shipbuilding.clients"),
    },
    {
      icon: "🔧",
      title: t("industries.automotive.title"),
      subtitle: "Automotive",
      description: t("industries.automotive.description"),
      clients: t("industries.automotive.clients"),
    },
    {
      icon: "⚙️",
      title: t("industries.heavyIndustry.title"),
      subtitle: "Heavy Industry",
      description: t("industries.heavyIndustry.description"),
      clients: t("industries.heavyIndustry.clients"),
    },
    {
      icon: "🌿",
      title: t("industries.environmental.title"),
      subtitle: "Environmental",
      description: t("industries.environmental.description"),
      clients: t("industries.environmental.clients"),
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-[#2d2a28]">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-[13px] tracking-[0.2em] uppercase text-[#888480] block mb-4">
            Industry Applications
          </span>
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-bold text-white">
            {t("industries.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className={`border border-[#888480]/30 p-8 transition-all duration-1000 hover:border-[#888480] ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-6">
                <div>
                  <span className="text-[13px] tracking-[0.2em] uppercase text-[#888480] block mb-2">
                    {industry.subtitle}
                  </span>
                  <h3 className="text-lg tracking-[0.08em] font-bold text-white mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-sm leading-[2] text-[#888480] mb-4">
                    {industry.description}
                  </p>
                  <p className="text-[14px] text-[#888480]/70 tracking-[0.03em]">
                    {t("industries.mainClients")}: {industry.clients}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const t = useTranslations("business");

  const stats = [
    { value: "20년+", label: t("stats.years"), sub: t("stats.yearsSub") },
    { value: "80+", label: t("stats.clients"), sub: t("stats.clientsSub") },
    { value: "19건", label: t("stats.patents"), sub: t("stats.patentsSub") },
    { value: "2개국", label: t("stats.partners"), sub: t("stats.partnersSub") },
  ];

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-[#F2F4F7]">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="section-label block mb-4">Performance</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-bold text-[#2d2a28]">
            {t("stats.title")}
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-1000 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <span className="text-4xl md:text-5xl font-light text-[#2d2a28] block mb-2">
                {stat.value}
              </span>
              <span className="text-sm tracking-[0.08em] text-[#2d2a28] block mb-1">
                {stat.label}
              </span>
              <span className="text-[14px] text-[#888480]">{stat.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const t = useTranslations("business");

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="section-label block mb-4">Partners & Clients</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-bold text-[#2d2a28]">
            {t("clientsTitle")}
          </h2>
        </div>
        <div
          className={`overflow-hidden transition-all duration-1000 delay-300 ${
            isInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex gap-8 animate-scroll mb-4">
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 border border-[#D4DAE2] px-6 py-4 bg-[#F2F4F7] flex items-center justify-center w-36 h-20"
              >
                <Image
                  src={`${LOGO_BASE}/${encodeURIComponent(logo.file)}`}
                  alt={logo.name}
                  width={120}
                  height={60}
                  className="object-contain max-h-12"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function BusinessPage() {
  const t = useTranslations("business");

  const businessAreas = [
    {
      id: 1,
      title: t("environment.title"),
      subtitle: "Environment Division",
      image: `${S3}/images/%ED%99%98%EA%B2%BD%EC%82%AC%EC%97%85%EB%B6%80/Business%20Area/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EC%9A%A9%20RTO%20%EB%A0%8C%EB%8D%94%EB%A7%81-nowatermark.jpg`,
      description: t("environment.description"),
      tags: ["CTO", "RTO", "RCO", "TO", "DTO"],
    },
    {
      id: 2,
      title: t("combustion.title"),
      subtitle: "Combustion Division",
      image: `${S3}/images/business-combustion-main.jpg`,
      description: t("combustion.description"),
      tags: ["가스히터", "금속버너", "제습기", "건조시스템"],
    },
    {
      id: 3,
      title: t("burner.title"),
      subtitle: "Burner Division",
      image: `${S3}/images/business-burner-main.jpg`,
      description: t("burner.description"),
      tags: ["NBP-MB", "NBP-SMB", "Low-NOx", "균등연소"],
    },
  ];

  return (
    <SubpageLayout
      title={t("title")}
      subtitle={t("subtitle")}
      breadcrumb={[{ label: t("breadcrumb"), href: "/business" }]}
    >
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {businessAreas.map((area, index) => (
            <BusinessCard key={area.id} area={area} index={index} />
          ))}
        </div>
      </section>
      <IndustryApplicationsSection />
      <StatsSection />
      <PartnersSection />
    </SubpageLayout>
  );
}
