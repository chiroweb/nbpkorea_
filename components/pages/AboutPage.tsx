"use client";

import SubpageLayout from "@/components/SubpageLayout";
import ClientsSection from "@/components/ClientsSection";
import { Link } from "@/i18n/navigation";
import { useInView } from "@/hooks/useInView";
import { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";
const LOGO_BASE = `${S3}/images/%EC%A3%BC%EC%9A%94%EA%B1%B0%EB%9E%98%EC%B2%98`;

function Highlight({ text, keywords }: { text: string; keywords: string[] }) {
  const regex = new RegExp(`(${keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        keywords.includes(part) ? (
          <span key={i} className="text-[#C05010] font-medium underline decoration-[#C05010]/30 underline-offset-4">{part}</span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

const CEO_HIGHLIGHTS = {
  en: {
    p1: ["eco-friendly energy solutions", "planning, design, manufacturing, construction, and after-service"],
    p2: ["advanced energy-saving eco-friendly products"],
    p3: ["humans and nature coexist", "global leader"],
  },
  ko: {
    p1: ["친환경 에너지 솔루션", "기획, 설계, 생산, 시공, TAB 사후관리"],
    p2: ["첨단 에너지 절감형 친환경제품"],
    p3: ["인간과 자연이 공존하는 세상", "글로벌 리더 기업"],
  },
};

function CeoSection() {
  const t = useTranslations("about.ceo");
  const locale = useLocale() as "en" | "ko";
  const hl = CEO_HIGHLIGHTS[locale] ?? CEO_HIGHLIGHTS.ko;
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="grid md:grid-cols-[1fr,280px] gap-12 md:gap-20">

            {/* 왼쪽: 인사말 본문 */}
            <div>
              <span className="section-label block mb-4">{t("label")}</span>
              <h2 className="text-2xl md:text-3xl tracking-[0.04em] font-bold text-[#2d2a28] mb-2">{t("title")}</h2>
              <div className="w-12 h-[2px] bg-[#C05010] mb-10" />
              <p className="text-sm leading-[2.2] text-[#2d2a28] mb-6"><Highlight text={t("p1")} keywords={hl.p1} /></p>
              <p className="text-sm leading-[2.2] text-[#2d2a28] mb-6"><Highlight text={t("p2")} keywords={hl.p2} /></p>
              <p className="text-sm leading-[2.2] text-[#2d2a28]"><Highlight text={t("p3")} keywords={hl.p3} /></p>
            </div>

            {/* 오른쪽: 서명 */}
            <div className="flex flex-col justify-end items-end text-right">
              <div className="w-full border-t border-[#C05010]/30 pt-6">
                <span className="text-[11px] tracking-[0.15em] uppercase text-[#5C6470] block mb-3">{t("signature")}</span>
                <span className="text-2xl font-bold text-[#2d2a28] tracking-[0.04em] block mb-1">{t("ceoName")}</span>
                <span className="text-xs tracking-[0.1em] uppercase text-[#C05010]">NBPKOREA</span>
              </div>
            </div>

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
              <p className="text-4xl md:text-5xl font-light text-[#C05010] tracking-[0.05em] mb-2">{stat.value}</p>
              <p className="text-sm tracking-[0.06em] uppercase text-[#C8D0DA] mb-1">{stat.label}</p>
              <p className="text-xs text-[#5C6470]">{stat.sub}</p>
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
    <section ref={ref} className="py-24 px-6 md:px-12 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="section-label block mb-4">Vision & Mission</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.04em] font-bold text-[#2d2a28]">{t("title")}</h2>
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
              <span className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] block mb-2">{item.subtitle}</span>
              <h3 className="text-xl tracking-[0.04em] font-bold text-[#2d2a28] mb-4">{item.title}</h3>
              <p className="text-sm md:text-base leading-relaxed text-[#5C6470]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTASection() {
  const locale = useLocale();
  const { ref, isInView } = useInView({ threshold: 0.15 });

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-[#2d2a28]">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="section-label block mb-4 text-[#C8C3BD]">Contact</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{locale === "en" ? "Partner with NBPKOREA" : "NBPKOREA와 함께하세요"}</h2>
          <p className="text-sm md:text-base text-[#C8C3BD] max-w-xl mx-auto leading-relaxed">
            {locale === "en" ? "We welcome all inquiries — technical meetings, site visits, and quote consultations." : "기술 미팅, 현장 방문, 견적 상담 등 어떤 문의든 환영합니다."}
          </p>
        </div>
        <div className={`grid md:grid-cols-3 gap-4 md:gap-6 transition-all duration-1000 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Link
            href="/support"
            className="group border border-white/10 p-8 hover:border-[#C05010]/60 hover:bg-white/5 transition-all duration-300"
          >
            <span className="text-xs tracking-[0.08em] uppercase text-[#C05010] block mb-3">Technical Meeting</span>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#C05010] transition-colors">{locale === "en" ? "Request a Technical Meeting" : "기술 미팅 요청"}</h3>
            <p className="text-sm text-[#C8C3BD] leading-relaxed">{locale === "en" ? "Our engineers will propose the optimal solution for your site conditions." : "현장 조건에 맞는 최적의 솔루션을 기술진이 직접 제안해드립니다."}</p>
          </Link>
          <Link
            href="/support"
            className="group border border-white/10 p-8 hover:border-[#C05010]/60 hover:bg-white/5 transition-all duration-300"
          >
            <span className="text-xs tracking-[0.08em] uppercase text-[#C05010] block mb-3">Site Visit</span>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#C05010] transition-colors">{locale === "en" ? "Schedule a Site Visit" : "현장 방문 상담"}</h3>
            <p className="text-sm text-[#C8C3BD] leading-relaxed">{locale === "en" ? "Book a tour of our Ansan HQ and factory, or schedule an on-site consultation." : "안산 본사 및 공장 견학, 또는 고객 현장 방문 상담을 예약하세요."}</p>
          </Link>
          <Link
            href="/support?type=catalog"
            className="group border border-white/10 p-8 hover:border-[#C05010]/60 hover:bg-white/5 transition-all duration-300"
          >
            <span className="text-xs tracking-[0.08em] uppercase text-[#C05010] block mb-3">Catalog</span>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#C05010] transition-colors">{locale === "en" ? "Request a Catalog" : "카탈로그 신청"}</h3>
            <p className="text-sm text-[#C8C3BD] leading-relaxed">{locale === "en" ? "Request detailed product catalogs and our team will send them to you." : "제품별 상세 카탈로그를 신청하시면 담당자가 발송해드립니다."}</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

function HistorySection() {
  const t = useTranslations("about.history");
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isHovering = useRef(false);
  const wheelAccum = useRef(0);

  const timelineItems = [
    { year: "2006", events: [t("events.2006a"), t("events.2006b")] },
    { year: "2007", events: [t("events.2007")] },
    { year: "2008", events: [t("events.2008")] },
    { year: "2009", events: [t("events.2009a"), t("events.2009b")] },
    { year: "2010", events: [t("events.2010a"), t("events.2010b")] },
    { year: "2011", events: [t("events.2011")] },
    { year: "2013", events: [t("events.2013a"), t("events.2013b"), t("events.2013c")] },
    { year: "2014", events: [t("events.2014a"), t("events.2014b"), t("events.2014c")] },
    { year: "2015", events: [t("events.2015a"), t("events.2015b")] },
    { year: "2016", events: [t("events.2016")] },
    { year: "2018", events: [t("events.2018")] },
    { year: "2019", events: [t("events.2019a"), t("events.2019b"), t("events.2019c"), t("events.2019d")] },
    { year: "2020", events: [t("events.2020a"), t("events.2020b")] },
    { year: "2021", events: [t("events.2021a"), t("events.2021b"), t("events.2021c"), t("events.2021d")] },
    { year: "2022", events: [t("events.2022a"), t("events.2022b"), t("events.2022c"), t("events.2022d")] },
    { year: "2023", events: [t("events.2023")] },
    { year: "2025", events: [t("events.2025a")] },
  ];

  // 섹션 내 wheel 이벤트 → 타임라인 인덱스 제어
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const THRESHOLD = 60; // 누적 delta 임계값

    const handleWheel = (e: WheelEvent) => {
      if (!isHovering.current) return;

      // 첫 아이템에서 위로 스크롤 or 마지막에서 아래로 → 통과시킴
      const atStart = activeIndex === 0 && e.deltaY < 0;
      const atEnd = activeIndex === timelineItems.length - 1 && e.deltaY > 0;
      if (atStart || atEnd) {
        wheelAccum.current = 0;
        return;
      }

      e.preventDefault();
      wheelAccum.current += e.deltaY;

      if (wheelAccum.current > THRESHOLD) {
        setActiveIndex((prev) => Math.min(timelineItems.length - 1, prev + 1));
        wheelAccum.current = 0;
      } else if (wheelAccum.current < -THRESHOLD) {
        setActiveIndex((prev) => Math.max(0, prev - 1));
        wheelAccum.current = 0;
      }
    };

    section.addEventListener("wheel", handleWheel, { passive: false });
    return () => section.removeEventListener("wheel", handleWheel);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  // 자동 재생: 마우스가 없을 때 1.5초마다 다음으로
  useEffect(() => {
    if (isHovering.current) return;

    const timer = setInterval(() => {
      if (isHovering.current) return;
      setActiveIndex((prev) => {
        if (prev >= timelineItems.length - 1) return 0; // 끝까지 가면 처음으로
        return prev + 1;
      });
    }, 1500);

    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  return (
    <div
      ref={sectionRef}
      onMouseEnter={() => { isHovering.current = true; }}
      onMouseLeave={() => { isHovering.current = false; wheelAccum.current = 0; }}
      className="relative bg-[#2d2a28] h-[45vh] flex items-center overflow-hidden"
    >
        <div className="w-full px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* 왼쪽: 연도 + 타임라인 네비 */}
            <div>
              <span className="section-label block mb-6 text-[#C8C3BD]">History</span>

              {/* 연도 룰렛 — 3개 표시, 가운데 활성, 부드러운 슬라이드 */}
              <div className="relative h-[120px] mb-4 overflow-hidden">
                <div
                  className="absolute left-0 w-full transition-transform duration-500 ease-out"
                  style={{ transform: `translateY(${-activeIndex * 40 + 40}px)` }}
                >
                  {timelineItems.map((item, i) => (
                    <div
                      key={item.year}
                      className="h-[40px] flex items-center transition-all duration-500"
                    >
                      <span
                        className={`font-bold transition-all duration-500 ${
                          i === activeIndex
                            ? "text-4xl md:text-5xl text-[#C05010]"
                            : Math.abs(i - activeIndex) === 1
                              ? "text-2xl md:text-3xl text-white/20"
                              : "text-xl text-white/5"
                        }`}
                      >
                        {item.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 타임라인 도트 네비 */}
              <div className="flex items-center gap-1.5">
                {timelineItems.map((item, i) => (
                  <button
                    key={item.year}
                    className={`transition-all duration-300 rounded-full ${
                      i === activeIndex
                        ? "w-6 h-2 bg-[#C05010]"
                        : i <= activeIndex
                          ? "w-2 h-2 bg-[#C05010]/40"
                          : "w-2 h-2 bg-white/15"
                    }`}
                    aria-label={item.year}
                  />
                ))}
              </div>

              {/* 진행률 */}
              <div className="mt-6 flex items-center gap-4">
                <span className="text-xs text-[#C8C3BD]">2006</span>
                <div className="flex-1 h-px bg-white/10 relative">
                  <div
                    className="absolute left-0 top-0 h-full bg-[#C05010] transition-all duration-300"
                    style={{ width: `${(activeIndex / (timelineItems.length - 1)) * 100}%` }}
                  />
                </div>
                <span className="text-xs text-[#C8C3BD]">2025</span>
              </div>
            </div>

            {/* 오른쪽: 이벤트 내용 — 큰 텍스트 */}
            <div className="relative min-h-[160px] flex items-center">
              {timelineItems.map((item, i) => (
                <div
                  key={item.year}
                  className={`absolute inset-0 flex items-center transition-all duration-500 ${
                    i === activeIndex
                      ? "opacity-100 translate-y-0"
                      : i < activeIndex
                        ? "opacity-0 -translate-y-10"
                        : "opacity-0 translate-y-10"
                  }`}
                >
                  <div className="border-l-[3px] border-[#C05010] pl-8">
                    {item.events.map((event) => (
                      <p
                        key={event}
                        className="text-base md:text-lg lg:text-xl text-white font-light leading-snug mb-3 last:mb-0"
                      >
                        {event}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* 스크롤 안내 + 진행 카운터 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-sm text-white/80 font-medium">
            <span className="text-[#C05010]">{activeIndex + 1}</span>
            <span className="text-white/30 mx-1">/</span>
            <span className="text-white/30">{timelineItems.length}</span>
          </span>
          <span className="text-xs text-white/20 tracking-[0.1em] uppercase">Scroll here</span>
        </div>
    </div>
  );
}

function CompanyInfoSection() {
  const t = useTranslations("about.companyInfo");
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-[#FAFAFA]">
      <div className="mx-auto max-w-screen-2xl">
        <div className={`mb-12 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="section-label block mb-4">Company Overview</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.04em] font-bold text-[#2d2a28]">{t("title")}</h2>
        </div>
        <div className="grid gap-8 items-start xl:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
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
                <div className="w-24 md:w-32 flex-shrink-0 bg-[#f5f5f5] px-3 py-3 text-xs tracking-[0.04em] text-[#5C6470] uppercase">{item.label}</div>
                <div className="px-3 py-3 text-xs text-[#2d2a28] tracking-[0.03em]">{item.value}</div>
              </div>
            ))}
          </div>
          {/* Photo */}
          <div className={`relative hidden aspect-[16/9] w-full overflow-hidden bg-[#DCE2E8] transition-all duration-1000 delay-500 xl:block ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <Image src={`${S3}/images/company/company-main-new.png`} alt="NBPKOREA Headquarters" fill className="object-cover object-center" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FacilityGallerySection() {
  const locale = useLocale();
  const { ref, isInView } = useInView({ threshold: 0.15 });

  const facilities = locale === "en" ? [
    { title: "HQ Overview", subtitle: "Ansan MTV Headquarters", image: `${S3}/images/about/hq-front.jpg` },
    { title: "HQ & Factory", subtitle: "Office & Production Facility", image: `${S3}/images/about/hq-side.jpg` },
    { title: "Owner-Operated Factory", subtitle: "In-house Manufacturing", image: `${S3}/images/about/factory-front.jpg` },
    { title: "Field Plant", subtitle: "On-site Engineering", image: `${S3}/images/about/plant-platform.jpg` },
  ] : [
    { title: "본사 전경", subtitle: "안산 MTV 본사", image: `${S3}/images/about/hq-front.jpg` },
    { title: "본사 · 공장동", subtitle: "사무동 및 생산 시설", image: `${S3}/images/about/hq-side.jpg` },
    { title: "자가 공장", subtitle: "자체 생산 기반", image: `${S3}/images/about/factory-front.jpg` },
    { title: "현장 플랜트", subtitle: "현장 엔지니어링 수행", image: `${S3}/images/about/plant-platform.jpg` },
  ];

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="section-label block mb-4">Facilities</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.04em] font-bold text-[#2d2a28]">{locale === "en" ? "HQ & Production Facilities" : "본사 · 생산시설"}</h2>
          <p className="text-sm text-[#5C6470] mt-4 max-w-3xl leading-relaxed">
            {locale === "en" ? "End-to-end design, manufacturing, and installation from our Ansan MTV headquarters and owner-operated factory." : "안산 MTV 본사와 자가 공장을 기반으로 설계·생산·시공을 일괄 수행합니다."}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {facilities.map((facility, index) => (
            <div
              key={facility.title}
              className={`transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="relative aspect-[8/5] overflow-hidden bg-[#FAFAFA]">
                <Image src={facility.image} alt={facility.title} fill className="object-cover" />
              </div>
              <div className="border border-t-0 border-[#D4DAE2] px-4 py-3">
                <p className="text-sm font-medium tracking-[0.04em] text-[#2d2a28]">{facility.title}</p>
                <p className="text-[12px] text-[#5C6470] mt-1">{facility.subtitle}</p>
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
  const locale = useLocale();
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const patents = t.raw("list") as string[];
  const [expanded, setExpanded] = useState(false);
  const visiblePatents = expanded ? patents : patents.slice(0, 6);

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="section-label block mb-4">Patents</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.04em] font-bold text-[#2d2a28]">{t("title")}</h2>
          <p className="text-sm text-[#5C6470] mt-4">{t("subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {visiblePatents.map((patent, index) => (
            <div
              key={patent}
              className={`border border-[#D4DAE2] p-6 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <span className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] block mb-2">
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
              className="flex items-center gap-2 text-sm tracking-[0.06em] uppercase border border-[#C05010] text-[#C05010] px-6 py-3 hover:bg-[#C05010] hover:text-white transition-all"
            >
              {locale === "en" ? "Show More" : "더보기"}
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

  const globalPartners = [
    { title: "MIDCO International", subtitle: t("midcoType"), since: "1974", logo: `${S3}/images/midco.webp`, href: "https://midcointernational.com/" },
    { title: "ECOSTAR", subtitle: t("ecostarType"), since: "1959", logo: `${S3}/images/ecostar.png`, href: "https://www.ecostar.com.tr" },
    { title: "CombHEX", subtitle: t("combhexType"), since: "1979", logo: `${S3}/images/combhex.jpeg`, href: "https://www.combhex.com/" },
  ];


  return (
    <>
    <section ref={ref} className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="section-label block mb-4">Global Partners</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.04em] font-bold text-[#2d2a28] mb-4">TRUSTED BY</h2>
          <p className="text-sm text-[#5C6470]">{t("description")}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {globalPartners.map((partner, index) => (
            <a
              key={partner.title}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group border border-[#D4DAE2] bg-white p-8 hover:border-[#C05010] transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center h-16 mb-6">
                <Image src={partner.logo} alt={partner.title} width={200} height={70} className="h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="border-t border-[#E8ECF0] pt-4">
                <h3 className="text-base font-bold text-[#2d2a28] mb-1 group-hover:text-[#C05010] transition-colors">{partner.title}</h3>
                <p className="text-[13px] text-[#5C6470] mb-2">{partner.subtitle}</p>
                <span className="text-xs tracking-[0.1em] uppercase text-[#C8D0DA]">Since {partner.since}</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
    <ClientsSection />
    </>
  );
}

function CertificationsSection() {
  const t = useTranslations("technology.certifications");
  const at = useTranslations("technology.awards");
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const certs = t.raw("list") as { name: string; desc: string }[];
  const awards = at.raw("items") as { year: string; title: string }[];

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div className={`transition-all duration-1000 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <span className="section-label block mb-4">Certifications</span>
            <h2 className="text-2xl md:text-3xl tracking-[0.04em] font-bold text-[#2d2a28] mb-8">{t("title")}</h2>
            <div className="grid grid-cols-2 gap-4">
              {certs.map((cert, i) => (
                <div
                  key={cert.name}
                  className={`border border-[#D4DAE2] bg-white p-6 text-center transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <span className="text-xl font-bold text-[#C05010] block mb-2">{cert.name}</span>
                  <span className="text-xs text-[#5C6470]">{cert.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-200 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <span className="section-label block mb-4">Awards</span>
            <h2 className="text-2xl md:text-3xl tracking-[0.04em] font-bold text-[#2d2a28] mb-8">{at("title")}</h2>
            <div className="relative">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#D4DAE2]" />
              {awards.map((award, i) => (
                <div
                  key={`${award.year}-${i}`}
                  className={`flex items-start gap-6 mb-6 last:mb-0 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-[15px] h-[15px] rounded-full border-2 border-[#C05010] bg-white flex-shrink-0 mt-0.5 z-10" />
                  <div>
                    <span className="text-xs tracking-[0.1em] uppercase text-[#C05010] font-semibold block mb-1">{award.year}</span>
                    <span className="text-sm text-[#2d2a28]">{award.title}</span>
                  </div>
                </div>
              ))}
            </div>
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
          <h2 className="text-2xl md:text-3xl tracking-[0.04em] font-bold text-[#2d2a28]">{t("title")}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className={`transition-all duration-1000 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="aspect-[4/3] w-full overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=37.3009829,126.7491697&t=m&z=17&ie=UTF8&iwloc=&output=embed"
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
                <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-2">{t("address")}</p>
                <p className="text-sm text-[#2d2a28] leading-relaxed">{t("addressValue")}</p>
              </div>
              <div>
                <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-2">{t("phoneFax")}</p>
                <p className="text-sm text-[#2d2a28] leading-relaxed">TEL 031-434-6566~7<br />FAX 031-434-6568</p>
              </div>
              <div>
                <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-2">{t("email")}</p>
                <p className="text-sm text-[#2d2a28]">nbpkorea@nbpkorea.co.kr</p>
              </div>
              <div>
                <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-2">{t("website")}</p>
                <p className="text-sm text-[#2d2a28]">www.nbpkorea.co.kr</p>
              </div>
              <div>
                <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-2">{t("hours")}</p>
                <p className="text-sm text-[#2d2a28] leading-relaxed">
                  {t("hoursValue")}<br />
                  <span className="text-[#5C6470]">{t("holiday")}</span>
                </p>
              </div>
              <div>
                <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-3">{t("transit")}</p>
                <div className="space-y-2">
                  <p className="text-sm text-[#5C6470] leading-[1.8]">
                    <span className="text-[#2d2a28] font-medium">{t("subway")}</span> — {t("subwayValue")}
                  </p>
                  <p className="text-sm text-[#5C6470] leading-[1.8]">
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
          <h2 className="text-2xl md:text-3xl tracking-[0.04em] font-bold text-[#2d2a28]">{t("title")}</h2>
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
  { id: "about" as const },
  { id: "partnership" as const },
  { id: "directions" as const },
];

type TabId = (typeof TABS)[number]["id"];

/* 기존 탭 → 새 탭 호환 매핑 */
const TAB_COMPAT: Record<string, TabId> = {
  ceo: "about",
  overview: "about",
  ci: "about",
  history: "about",
  network: "partnership",
  patents: "partnership",
};

function AboutPageInner() {
  const t = useTranslations("about");
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<TabId>("about");
  const [headerVisible, setHeaderVisible] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const lastScrollY = useRef(0);

  // Sync tab from URL query param (기존 URL 호환 포함)
  useEffect(() => {
    const rawTab = searchParams.get("tab") ?? "";
    const mapped = TAB_COMPAT[rawTab] ?? rawTab;
    if (TABS.some((t) => t.id === mapped)) {
      setActiveTab(mapped as TabId);
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
                    : "border-transparent text-[#5C6470] hover:text-[#2d2a28]"
                }`}
              >
                {t(`tabs.${tab.id}`)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {activeTab === "about" && (
        <>
          <CeoSection />
          <HistorySection />
          <CompanyInfoSection />
          <ImpactNumbersSection />
          <FacilityGallerySection />
          <CISection />
          <ContactCTASection />
        </>
      )}
      {activeTab === "partnership" && (
        <>
          <PartnersSection />
          <CertificationsSection />
          <PatentsSection />
          <ImpactNumbersSection />
        </>
      )}
      {activeTab === "directions" && <DirectionsSection />}
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
