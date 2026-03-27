"use client";

import SubpageLayout from "@/components/SubpageLayout";
import ClientsSection from "@/components/ClientsSection";
import { useInView } from "@/hooks/useInView";
import { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";
const LOGO_BASE = `${S3}/images/%EC%A3%BC%EC%9A%94%EA%B1%B0%EB%9E%98%EC%B2%98`;

function Highlight({ text, keywords }: { text: string; keywords: string[] }) {
  const regex = new RegExp(`(${keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        keywords.includes(part) ? (
          <span key={i} className="text-[#C05010] font-medium">{part}</span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

const CEO_HIGHLIGHTS_P1 = [
  "엔비피코리아", "20여년", "친환경 에너지 솔루션",
  "SMART 직접연소산화시스템", "클린룸", "드라이룸",
  "에너지전문기업", "기획, 설계, 생산, 시공, TAB 사후관리",
];
const CEO_HIGHLIGHTS_P2 = [
  "엔비피코리아", "환경, 에너지 전문 기업",
  "첨단 에너지 절감형 친환경제품",
];
const CEO_HIGHLIGHTS_P3 = [
  "엔비피코리아", "세계 최고의 품질과 서비스",
  "인간과 자연이 공존하는 세상", "글로벌 리더 기업",
];

function CeoSection() {
  const t = useTranslations("about.ceo");
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="section-label block mb-4">{t("label")}</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-bold text-[#2d2a28] mb-2">{t("title")}</h2>
          <div className="w-12 h-px bg-[#C05010] mb-10" />
          <p className="text-sm leading-[2.2] text-[#888480] mb-6"><Highlight text={t("p1")} keywords={CEO_HIGHLIGHTS_P1} /></p>
          <p className="text-sm leading-[2.2] text-[#888480] mb-6"><Highlight text={t("p2")} keywords={CEO_HIGHLIGHTS_P2} /></p>
          <p className="text-sm leading-[2.2] text-[#888480] mb-10"><Highlight text={t("p3")} keywords={CEO_HIGHLIGHTS_P3} /></p>
          <p className="text-base tracking-[0.1em] text-[#2d2a28] text-right">
            {t("signature")} <span className="font-medium">{t("ceoName")}</span>
          </p>
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
    { value: "38", label: t("patents"), sub: t("patentsSub") },
    { value: "1,723+", label: t("customerProjects"), sub: t("customerProjectsSub") },
    { value: "80+", label: t("clients"), sub: t("clientsSub") },
    { value: "8", label: t("awards"), sub: t("awardsSub") },
  ];

  return (
    <section ref={ref} className="py-20 px-6 md:px-12 bg-[#2d2a28]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const timelineItems = [
    { year: "2006", events: [t("events.2006")] },
    { year: "2007", events: [t("events.2007")] },
    { year: "2008", events: [t("events.2008")] },
    { year: "2009", events: [t("events.2009")] },
    { year: "2010", events: [t("events.2010")] },
    { year: "2011", events: [t("events.2011")] },
    { year: "2012", events: [t("events.2012")] },
    { year: "2013", events: [t("events.2013")] },
    { year: "2014", events: [t("events.2014a"), t("events.2014b")] },
    { year: "2015", events: [t("events.2015")] },
    { year: "2016", events: [t("events.2016")] },
    { year: "2017", events: [t("events.2017")] },
    { year: "2018", events: [t("events.2018")] },
    { year: "2019", events: [t("events.2019a"), t("events.2019b")] },
    { year: "2020", events: [t("events.2020")] },
    { year: "2021", events: [t("events.2021")] },
    { year: "2022", events: [t("events.2022")] },
    { year: "2023", events: [t("events.2023")] },
    { year: "2025", events: [t("events.2025a"), t("events.2025b")] },
  ];

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 448;
    scrollRef.current.scrollBy({ left: direction === "right" ? amount : -amount, behavior: "smooth" });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className={`mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="section-label block mb-4">History</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-bold text-[#2d2a28]">{t("title")}</h2>
        </div>
      </div>

      <div className="relative flex items-stretch">
        {/* Left arrow button */}
        <button
          onClick={() => scroll("left")}
          className="flex-shrink-0 w-10 bg-[#F2F4F7] hover:bg-[#E8ECF0] transition-colors flex items-center justify-center z-10 border-r border-[#D4DAE2]"
          aria-label="이전"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M8 1L3 6L8 11" stroke="#888480" strokeWidth="1.2" />
          </svg>
        </button>

        {/* Timeline */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="flex gap-0 overflow-x-auto flex-1 select-none"
          style={{ scrollbarWidth: "none", cursor: "grab" }}
        >
          {timelineItems.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-56 border-r border-[#D4DAE2] px-8 py-8">
              <span className="text-4xl font-light text-[#DCE2E8] tracking-[0.05em] block mb-4">{item.year}</span>
              <div className="w-6 h-px bg-[#C05010] mb-4" />
              {item.events.map((event) => (
                <p key={event} className="text-sm text-[#888480] leading-[1.9] tracking-[0.02em]">{event}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Right arrow button */}
        <button
          onClick={() => scroll("right")}
          className="flex-shrink-0 w-10 bg-[#F2F4F7] hover:bg-[#E8ECF0] transition-colors flex items-center justify-center z-10 border-l border-[#D4DAE2]"
          aria-label="다음"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M4 1L9 6L4 11" stroke="#888480" strokeWidth="1.2" />
          </svg>
        </button>
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
        <div className={`mb-12 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="section-label block mb-4">Company Overview</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-bold text-[#2d2a28]">{t("title")}</h2>
        </div>
        <div className="grid lg:grid-cols-[3fr_2fr] gap-8 items-stretch">
          {/* Table */}
          <div className={`border border-[#D4DAE2] transition-all duration-1000 delay-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {[
              { label: t("companyName"), value: t("companyNameValue") },
              { label: t("founded"), value: t("foundedValue") },
              { label: t("employees"), value: t("employeesValue") },
              { label: t("capital"), value: t("capitalValue") },
              { label: t("ceo"), value: t("ceoValue") },
              { label: t("business"), value: t("businessValue") },
              { label: t("ip"), value: t("ipValue") },
              { label: t("alliances"), value: t("alliancesValue") },
              { label: t("certifications"), value: t("certificationsValue") },
              { label: t("factory"), value: t("factoryValue") },
              { label: t("bizReg"), value: t("bizRegValue") },
              { label: t("address"), value: t("addressValue") },
            ].map((item) => (
              <div key={item.label} className="flex border-b border-[#D4DAE2] last:border-b-0">
                <div className="w-24 md:w-32 flex-shrink-0 bg-[#f5f5f5] px-3 py-3 text-[11px] tracking-[0.1em] text-[#888480] uppercase">{item.label}</div>
                <div className="px-3 py-3 text-xs text-[#2d2a28] tracking-[0.03em]">{item.value}</div>
              </div>
            ))}
          </div>
          {/* Photo */}
          <div className={`relative overflow-hidden transition-all duration-1000 delay-500 hidden lg:block ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <Image src="https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com/images/about/hq-front.jpg" alt="NBPKOREA 본사" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FacilityGallerySection() {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  const facilities = [
    { title: "HQ Front View", subtitle: "Ansan MTV Headquarters", image: `/images/about/hq-front.jpg` },
    { title: "HQ & Factory Wing", subtitle: "Office and production complex", image: `${S3}/images/about/hq-side.jpg` },
    { title: "Factory Entrance", subtitle: "Owner-operated production base", image: `${S3}/images/about/factory-front.jpg` },
    { title: "Plant Platform", subtitle: "On-site engineering execution", image: `/images/about/plant-platform.jpg` },
  ];

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="section-label block mb-4">Facilities</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-bold text-[#2d2a28]">Headquarters & Production Base</h2>
          <p className="text-sm text-[#888480] mt-4 max-w-3xl leading-[2]">
            안산 MTV 본사와 자가 공장, 현장 엔지니어링 수행 이미지를 기반으로 NBPKOREA의 생산 인프라와 실행 역량을 보여줍니다.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {facilities.map((facility, index) => (
            <div
              key={facility.title}
              className={`transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F2F4F7]">
                <Image src={facility.image} alt={facility.title} fill className="object-cover" />
              </div>
              <div className="border border-t-0 border-[#D4DAE2] px-4 py-3">
                <p className="text-sm font-medium tracking-[0.04em] text-[#2d2a28]">{facility.title}</p>
                <p className="text-[12px] text-[#888480] mt-1">{facility.subtitle}</p>
              </div>
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
  const [expanded, setExpanded] = useState(false);
  const visiblePatents = expanded ? patents : patents.slice(0, 6);

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="section-label block mb-4">Patents</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-bold text-[#2d2a28]">{t("title")}</h2>
          <p className="text-sm text-[#888480] mt-4">{t("subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {visiblePatents.map((patent, index) => (
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
        {!expanded && patents.length > 6 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setExpanded(true)}
              className="flex items-center gap-2 text-sm tracking-[0.15em] uppercase border border-[#C05010] text-[#C05010] px-6 py-3 hover:bg-[#C05010] hover:text-white transition-all"
            >
              더보기
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function PartnersSection() {
  const t = useTranslations("home.partners");
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const partners = [
    { title: "MIDCO International", type: t("midcoType"), since: "2007", href: "https://www.midco-intl.com" },
    { title: "ECOSTAR", type: t("ecostarType"), since: "2013", href: "https://www.ecostar.com.tr" },
    { title: "CombHEX", type: t("combhexType"), since: "2018", href: "https://www.combhex.com/" },
    { title: "한화오션", type: t("hanwhaType") },
    { title: "현대중공업", type: t("hdType") },
    { title: "더 금영", type: t("bmwType") },
    { title: "LG엔솔", type: t("lgType") },
    { title: "POSCO", type: t("poscoType") },
  ];

  const globalPartners = [
    { title: "MIDCO International", subtitle: t("midcoType"), since: "2007", logo: `${S3}/images/midco.webp`, href: "https://www.midco-intl.com" },
    { title: "ECOSTAR", subtitle: t("ecostarType"), since: "2013", logo: `${S3}/images/ecostar.png`, href: "https://www.ecostar.com.tr" },
    { title: "CombHEX", subtitle: t("combhexType"), since: "2018", logo: `${S3}/images/combhex.jpeg`, href: "https://www.combhex.com/" },
  ];

  return (
    <section ref={ref} className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-12 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="section-label block mb-4">Partners</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-bold text-[#2d2a28]">TRUSTED BY</h2>
          <p className="text-sm text-[#888480] mt-4">{t("description")}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="border-t border-[#C8D0DA]">
            {partners.map((partner) => {
              const content = (
                <>
                  <div>
                    <span className="block text-sm tracking-[0.05em] text-[#2d2a28]">{partner.title}</span>
                    <span className="text-xs text-[#888480]">{partner.type}</span>
                  </div>
                  {partner.since && (
                    <span className="text-xs text-[#C8D0DA] tracking-[0.1em]">Since {partner.since}</span>
                  )}
                </>
              );
              return partner.href ? (
                <a key={partner.title} href={partner.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-2 border-b border-[#C8D0DA] hover:text-[#C05010] transition-colors">
                  {content}
                </a>
              ) : (
                <div key={partner.title} className="flex items-center justify-between py-2 border-b border-[#C8D0DA]">
                  {content}
                </div>
              );
            })}
          </div>
          <div className="grid gap-3">
            {globalPartners.map((partner) => (
              <a key={partner.title} href={partner.href} target="_blank" rel="noopener noreferrer" className="border border-[#C8D0DA] bg-white px-4 py-3 hover:border-[#C05010] transition-colors block">
                <div className="mb-2 flex h-12 items-center">
                  <Image src={partner.logo} alt={`${partner.title} logo`} width={183} height={65} className="h-10 w-auto object-contain" />
                </div>
                <p className="text-[13px] tracking-[0.16em] uppercase text-[#888480]">{partner.subtitle}</p>
                <p className="mt-1 text-[13px] tracking-[0.14em] uppercase text-[#C8D0DA]">Since {partner.since}</p>
              </a>
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
                src="https://maps.google.com/maps?q=37.3009829,126.7491697&t=&z=17&ie=UTF8&iwloc=&output=embed"
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
                <p className="text-sm text-[#2d2a28]">nbpkorea@nbpkorea.co.kr</p>
              </div>
              <div>
                <p className="text-[13px] tracking-[0.2em] uppercase text-[#888480] mb-2">{t("website")}</p>
                <p className="text-sm text-[#2d2a28]">www.nbpkorea.co.kr</p>
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
        <div className={`flex items-center justify-center py-16 transition-all duration-1000 delay-300 ${isInView ? "opacity-100" : "opacity-0"}`}>
          <div className="relative w-full max-w-3xl">
            <Image
              src={`${S3}/images/nbpkorea-ci.jpg`}
              alt="NBPKOREA CI"
              width={900}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const TABS = [
  { id: "ceo" as const },
  { id: "overview" as const },
  { id: "ci" as const },
  { id: "history" as const },
  { id: "network" as const },
  { id: "patents" as const },
  { id: "directions" as const },
];

type TabId = (typeof TABS)[number]["id"];

function AboutPageInner() {
  const t = useTranslations("about");
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<TabId>("ceo");
  const [headerVisible, setHeaderVisible] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const lastScrollY = useRef(0);

  // Sync tab from URL query param
  useEffect(() => {
    const tab = searchParams.get("tab") as TabId;
    if (tab && TABS.some((t) => t.id === tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

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

      {activeTab === "ceo" && <><CeoSection /><ImpactNumbersSection /></>}
      {activeTab === "overview" && <><CompanyInfoSection /><FacilityGallerySection /><ImpactNumbersSection /></>}
      {activeTab === "ci" && <><CISection /><ImpactNumbersSection /><VisionSection /></>}
      {activeTab === "history" && <><HistorySection /><ImpactNumbersSection /></>}
      {activeTab === "network" && <><PartnersSection /><ClientsSection /><ImpactNumbersSection /></>}
      {activeTab === "patents" && <><PatentsSection /><ImpactNumbersSection /></>}
      {activeTab === "directions" && <><DirectionsSection /><ImpactNumbersSection /></>}
    </SubpageLayout>
  );
}

export default function AboutPage() {
  return (
    <Suspense>
      <AboutPageInner />
    </Suspense>
  );
}
