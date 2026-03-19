"use client";

import SubpageLayout from "@/components/SubpageLayout";
import { useInView } from "@/hooks/useInView";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";
const LOGO_BASE = `${S3}/images/%EC%A3%BC%EC%9A%94%EA%B1%B0%EB%9E%98%EC%B2%98`;

function CeoSection() {
  const t = useTranslations("about.ceo");
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className={`transition-all duration-1000 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#DCE2E8]">
              <Image src={`${S3}/images/CEO.jpeg`} alt="NBPKOREA CEO" fill className="object-cover object-top" />
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-300 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <span className="section-label block mb-4">{t("label")}</span>
            <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-bold text-[#2d2a28] mb-2">{t("title")}</h2>
            <div className="w-12 h-px bg-[#C05010] mb-8" />
            <p className="text-sm leading-[2.2] text-[#888480] mb-6">{t("p1")}</p>
            <p className="text-sm leading-[2.2] text-[#888480] mb-6">
              {t("p2Start")}<strong className="text-[#2d2a28] font-medium">{t("p2Trust")}</strong>{t("p2End")}
            </p>
            <p className="text-sm leading-[2.2] text-[#888480] mb-6">
              {t("p3Start")}<strong className="text-[#2d2a28] font-medium">{t("p3Challenge")}</strong>{t("p3End")}
            </p>
            <p className="text-sm leading-[2.2] text-[#888480] mb-8">
              {t("p4Start")}<strong className="text-[#2d2a28] font-medium">{t("p4Passion")}</strong>{t("p4End")}
            </p>
            <p className="text-base tracking-[0.1em] text-[#2d2a28]">
              {t("signature")} <span className="font-medium">{t("ceoName")}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImpactNumbersSection() {
  const t = useTranslations("about.stats");
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const stats = [
    { value: "20+", label: t("years"), sub: t("yearsSub") },
    { value: "19", label: t("patents"), sub: t("patentsSub") },
    { value: "80+", label: t("clients"), sub: t("clientsSub") },
    { value: "8", label: t("awards"), sub: t("awardsSub") },
  ];

  return (
    <section ref={ref} className="py-20 px-6 md:px-12 bg-[#2d2a28]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <p className="text-4xl md:text-5xl font-light text-white tracking-[0.05em] mb-2">{stat.value}</p>
              <p className="text-sm tracking-[0.15em] uppercase text-[#C8D0DA] mb-1">{stat.label}</p>
              <p className="text-xs text-[#888480]">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisionSection() {
  const t = useTranslations("about.vision");
  const { ref, isInView } = useInView({ threshold: 0.15 });

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-[#F2F4F7]">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="section-label block mb-4">Vision & Mission</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-bold text-[#2d2a28]">{t("title")}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: t("vision"), subtitle: "Vision", text: t("visionText") },
            { title: t("mission"), subtitle: "Mission", text: t("missionText") },
            { title: t("coreValue"), subtitle: "Core Value", text: t("coreValueText") },
          ].map((item, index) => (
            <div
              key={item.title}
              className={`text-center p-8 md:p-12 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex justify-center mb-6">
                <div className="relative w-10 h-10 opacity-20">
                  <Image src={`${S3}/images/dragon-logo.png`} alt="NBPKOREA" fill className="object-contain" />
                </div>
              </div>
              <span className="text-[13px] tracking-[0.2em] uppercase text-[#888480] block mb-2">{item.subtitle}</span>
              <h3 className="text-xl tracking-[0.1em] font-bold text-[#2d2a28] mb-4">{item.title}</h3>
              <p className="text-sm leading-[2] text-[#888480]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HistorySection() {
  const t = useTranslations("about.history");
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const timelineItems = [
    { year: "2022", events: [t("events.2022")] },
    { year: "2021", events: [t("events.2021")] },
    { year: "2020", events: [t("events.2020")] },
    { year: "2019", events: [t("events.2019a"), t("events.2019b")] },
    { year: "2018", events: [t("events.2018")] },
    { year: "2017", events: [t("events.2017")] },
    { year: "2016", events: [t("events.2016")] },
    { year: "2015", events: [t("events.2015")] },
    { year: "2014", events: [t("events.2014a"), t("events.2014b")] },
    { year: "2013", events: [t("events.2013")] },
    { year: "2012", events: [t("events.2012")] },
    { year: "2011", events: [t("events.2011")] },
    { year: "2010", events: [t("events.2010")] },
    { year: "2009", events: [t("events.2009")] },
    { year: "2008", events: [t("events.2008")] },
    { year: "2007", events: [t("events.2007")] },
    { year: "2006", events: [t("events.2006")] },
  ];

  return (
    <section ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className={`mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="section-label block mb-4">History</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-bold text-[#2d2a28]">{t("title")}</h2>
        </div>
      </div>

      <div className="relative overflow-hidden group">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-white to-transparent" />
        <div
          className={`flex gap-0 ${isInView ? "animate-scroll" : ""}`}
          style={{ animationDuration: "50s", animationPlayState: "running" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.animationPlayState = "running"; }}
        >
          {[...timelineItems, ...timelineItems].map((item, index) => (
            <div key={index} className="flex-shrink-0 w-56 border-r border-[#D4DAE2] px-8 py-8">
              <span className="text-4xl font-light text-[#DCE2E8] tracking-[0.05em] block mb-4">{item.year}</span>
              <div className="w-6 h-px bg-[#C05010] mb-4" />
              {item.events.map((event) => (
                <p key={event} className="text-sm text-[#888480] leading-[1.9] tracking-[0.02em]">{event}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompanyInfoSection() {
  const t = useTranslations("about.companyInfo");
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-[#F2F4F7]">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="section-label block mb-4">Company Overview</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-bold text-[#2d2a28]">{t("title")}</h2>
        </div>
        <div className={`grid md:grid-cols-2 gap-0 border border-[#D4DAE2] transition-all duration-1000 delay-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {[
            { label: t("companyName"), value: t("companyNameValue") },
            { label: t("founded"), value: t("foundedValue") },
            { label: t("ceo"), value: t("ceoValue") },
            { label: t("business"), value: t("businessValue") },
            { label: t("bizReg"), value: t("bizRegValue") },
            { label: t("address"), value: t("addressValue") },
          ].map((item) => (
            <div key={item.label} className="flex border-b border-r border-[#D4DAE2] last:border-b-0">
              <div className="w-36 md:w-44 flex-shrink-0 bg-[#f5f5f5] px-6 py-5 text-xs tracking-[0.1em] text-[#888480] uppercase">{item.label}</div>
              <div className="px-6 py-5 text-sm text-[#2d2a28] tracking-[0.03em]">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PatentsSection() {
  const t = useTranslations("about.patents");
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const patents = t.raw("list") as string[];

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="section-label block mb-4">Patents</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-bold text-[#2d2a28]">{t("title")}</h2>
          <p className="text-sm text-[#888480] mt-4">{t("subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {patents.map((patent, index) => (
            <div
              key={patent}
              className={`border border-[#D4DAE2] p-6 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <span className="text-[13px] tracking-[0.2em] uppercase text-[#888480] block mb-2">
                Patent {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-sm text-[#2d2a28] tracking-[0.03em] leading-[1.8]">{patent}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientsMarqueeSection() {
  const t = useTranslations("about.clients");
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const clientLogos = [
    { name: "한화오션", file: "한화오션.png" }, { name: "현대중공업", file: "현대중공업.png" },
    { name: "삼성중공업", file: "삼성중공업.png" }, { name: "한국조선해양", file: "한국조선해양.png" },
    { name: "현대미포조선", file: "현대미포조선.jpg" }, { name: "현대삼호중공업", file: "현대삼호중공업.jpg" },
    { name: "POSCO", file: "posco.png" }, { name: "동국제강", file: "동국제강.png" },
    { name: "두산", file: "두산.png" }, { name: "BMW", file: "bmw.png" },
    { name: "Mercedes-Benz", file: "benz.png" }, { name: "Audi", file: "audi.png" },
    { name: "KIA", file: "kia.png" }, { name: "Volvo", file: "volvo.png" },
    { name: "한진중공업", file: "한진중공업.jpg" }, { name: "HJ중공업", file: "HJ중공업.png" },
    { name: "농협목우촌", file: "농협목우촌.png" }, { name: "이디야커피", file: "이디야커피.jpg" },
    { name: "한국환경공단", file: "한국환경공단.png" }, { name: "부산환경공단", file: "부산환경공단.png" },
    { name: "대전도시공사", file: "대전도시공사.png" }, { name: "현대인프라코어", file: "현대인프라코어.png" },
    { name: "현대스틸산업", file: "현대스틸산업.png" }, { name: "HSG성동조선", file: "HSG성동조선.png" },
    { name: "케이조선", file: "케이조선.png" }, { name: "SK오션플랜트", file: "SK오션플랜트.png" },
    { name: "동부건설", file: "동부건설.png" }, { name: "대보건설", file: "대보건설.png" },
    { name: "STX건설", file: "STX건설.png" }, { name: "신성엔지니어링", file: "신성엔지니어링.png" },
    { name: "경인양행", file: "경인양행.png" }, { name: "ECOSTAR", file: "ECOSTAR.png" },
  ];

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-[#F2F4F7]">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="section-label block mb-4">Clients</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-bold text-[#2d2a28]">{t("title")}</h2>
          <p className="text-sm text-[#888480] mt-4">{t("subtitle")}</p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex gap-8 animate-scroll">
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 border border-[#D4DAE2] px-6 py-4 bg-white flex items-center justify-center w-36 h-20">
                <Image src={`${LOGO_BASE}/${encodeURIComponent(logo.file)}`} alt={logo.name} width={120} height={60} className="object-contain max-h-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DirectionsSection() {
  const t = useTranslations("about.directions");
  const { ref, isInView } = useInView({ threshold: 0.15 });

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="section-label block mb-4">Directions</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-bold text-[#2d2a28]">{t("title")}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className={`transition-all duration-1000 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="aspect-[4/3] w-full overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=%EA%B2%BD%EA%B8%B0%EB%8F%84+%EC%95%88%EC%82%B0%EC%8B%9C+%EB%8B%A8%EC%9B%90%EA%B5%AC+%EC%97%A0%ED%8B%B0%EB%B8%8C%EC%9D%B4%EB%A1%9C+8%EA%B8%B8+22&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t("mapTitle")}
              />
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-300 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="space-y-8">
              <div>
                <p className="text-[13px] tracking-[0.2em] uppercase text-[#888480] mb-2">{t("address")}</p>
                <p className="text-sm text-[#2d2a28] leading-[2]">{t("addressValue")}</p>
              </div>
              <div>
                <p className="text-[13px] tracking-[0.2em] uppercase text-[#888480] mb-2">{t("phoneFax")}</p>
                <p className="text-sm text-[#2d2a28] leading-[2]">TEL 031-434-6566~7<br />FAX 031-434-6568</p>
              </div>
              <div>
                <p className="text-[13px] tracking-[0.2em] uppercase text-[#888480] mb-2">{t("email")}</p>
                <p className="text-sm text-[#2d2a28]">NBPKOREA@NBPKOREA.co.kr</p>
              </div>
              <div>
                <p className="text-[13px] tracking-[0.2em] uppercase text-[#888480] mb-2">{t("hours")}</p>
                <p className="text-sm text-[#2d2a28] leading-[2]">
                  {t("hoursValue")}<br />
                  <span className="text-[#888480]">{t("holiday")}</span>
                </p>
              </div>
              <div>
                <p className="text-[13px] tracking-[0.2em] uppercase text-[#888480] mb-3">{t("transit")}</p>
                <div className="space-y-2">
                  <p className="text-sm text-[#888480] leading-[1.8]">
                    <span className="text-[#2d2a28] font-medium">{t("subway")}</span> — {t("subwayValue")}
                  </p>
                  <p className="text-sm text-[#888480] leading-[1.8]">
                    <span className="text-[#2d2a28] font-medium">{t("bus")}</span> — {t("busValue")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CISection() {
  const t = useTranslations("about.ci");
  const { ref, isInView } = useInView({ threshold: 0.15 });
  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-white min-h-[40vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className={`mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="section-label block mb-4">CI</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-bold text-[#2d2a28]">{t("title")}</h2>
        </div>
        <div className={`border border-dashed border-[#D4DAE2] flex items-center justify-center py-24 transition-all duration-1000 delay-300 ${isInView ? "opacity-100" : "opacity-0"}`}>
          <p className="placeholder-box text-[#C8D0DA] tracking-[0.2em] text-sm uppercase">{t("comingSoon")}</p>
        </div>
      </div>
    </section>
  );
}

const TABS = [
  { id: "ceo" as const },
  { id: "ci" as const },
  { id: "history" as const },
  { id: "network" as const },
  { id: "patents" as const },
  { id: "directions" as const },
];

type TabId = (typeof TABS)[number]["id"];

export default function AboutPage() {
  const t = useTranslations("about");
  const [activeTab, setActiveTab] = useState<TabId>("ceo");
  const [headerVisible, setHeaderVisible] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const measureHeader = () => {
      const header = document.querySelector("header");
      if (header) setHeaderHeight(header.offsetHeight);
    };
    measureHeader();
    window.addEventListener("resize", measureHeader);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY.current) {
        setHeaderVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setHeaderVisible(false);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", measureHeader);
    };
  }, []);

  return (
    <SubpageLayout
      title={t("title")}
      subtitle={t("subtitle")}
      breadcrumb={[
        { label: t("breadcrumb"), href: "/about" },
        { label: t(`tabs.${activeTab}`), href: "/about" },
      ]}
    >
      {/* Tab Navigation */}
      <div
        className="sticky z-30 bg-white border-b border-[#D4DAE2] transition-[top] duration-300"
        style={{ top: headerVisible ? headerHeight : 0 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex overflow-x-auto scrollbar-hide">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-6 py-3.5 text-sm tracking-[0.12em] border-b-2 transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-[#C05010] text-[#2d2a28] font-medium"
                    : "border-transparent text-[#888480] hover:text-[#2d2a28]"
                }`}
              >
                {t(`tabs.${tab.id}`)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {activeTab === "ceo" && <><CeoSection /><ImpactNumbersSection /><CompanyInfoSection /></>}
      {activeTab === "ci" && <><CISection /><ImpactNumbersSection /><VisionSection /></>}
      {activeTab === "history" && <><HistorySection /><ImpactNumbersSection /></>}
      {activeTab === "network" && <><ClientsMarqueeSection /><ImpactNumbersSection /></>}
      {activeTab === "patents" && <><PatentsSection /><ImpactNumbersSection /></>}
      {activeTab === "directions" && <><DirectionsSection /><ImpactNumbersSection /></>}
    </SubpageLayout>
  );
}
