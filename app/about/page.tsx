"use client";

import SubpageLayout from "@/components/SubpageLayout";
import { useInView } from "@/hooks/useInView";
import Image from "next/image";

const S3 = "https://nbpkoreare.s3.ap-northeast-2.amazonaws.com";
const LOGO_BASE = `${S3}/images/%EC%A3%BC%EC%9A%94%EA%B1%B0%EB%9E%98%EC%B2%98`;

function CeoSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div
            className={`transition-all duration-1000 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#e8e8e0]">
              <Image
                src={`${S3}/images/CEO.jpeg`}
                alt="NBP KOREA 대표이사 최혁순"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
          <div
            className={`transition-all duration-1000 delay-300 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <span className="section-label block mb-4">CEO Message</span>
            <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-light text-[#2d2a28] mb-2">
              대표이사 인사말
            </h2>
            <div className="w-12 h-px bg-[#C05010] mb-8" />
            <p className="text-sm leading-[2.2] text-[#888480] mb-6">
              안녕하십니까. NBP KOREA 대표이사 최혁순입니다.
            </p>
            <p className="text-sm leading-[2.2] text-[#888480] mb-6">
              NBP KOREA는 2006년 창립 이래, 산업용 연소장비와 환경설비 분야에서
              단 하나의 가치—<strong className="text-[#2d2a28] font-medium">신뢰</strong>—를
              중심으로 성장해 왔습니다. 현장의 요구를 가장 가까이에서 이해하고,
              기술로 응답하는 것이 저희의 사명입니다.
            </p>
            <p className="text-sm leading-[2.2] text-[#888480] mb-6">
              끊임없는 <strong className="text-[#2d2a28] font-medium">도전</strong>으로
              금속화이버 버너를 비롯한 독자적 핵심 기술을 개발하였고,
              미국 MIDCO International, 터키 ECOSTAR와의 글로벌 파트너십을 통해
              세계 수준의 기술력을 갖추었습니다.
            </p>
            <p className="text-sm leading-[2.2] text-[#888480] mb-8">
              앞으로도 <strong className="text-[#2d2a28] font-medium">열정</strong>을 다해
              고객 여러분의 산업 현장에 가장 적합한 솔루션을 제공하겠습니다.
              변함없는 신뢰와 성원을 부탁드립니다.
            </p>
            <p className="text-base tracking-[0.1em] text-[#2d2a28]">
              대표이사 <span className="font-medium">최혁순</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImpactNumbersSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const stats = [
    { value: "20년+", label: "업력", sub: "2006년 설립" },
    { value: "19건", label: "등록 특허", sub: "핵심 기술 특허" },
    { value: "80+", label: "주요 고객사", sub: "국내외 산업 현장" },
    { value: "8개", label: "수상 실적", sub: "정부·기관 표창" },
  ];

  return (
    <section ref={ref} className="py-20 px-6 md:px-12 bg-[#2d2a28]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-1000 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <p className="text-4xl md:text-5xl font-light text-white tracking-[0.05em] mb-2">
                {stat.value}
              </p>
              <p className="text-sm tracking-[0.15em] uppercase text-[#d4d4cc] mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-[#888480]">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisionSection() {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="section-label block mb-4">Vision & Mission</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-light text-[#2d2a28]">
            비전과 미션
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "◇",
              title: "비전",
              subtitle: "Vision",
              text: "산업용 연소 및 환경설비 분야의 글로벌 리더로서, 청정하고 효율적인 산업 환경을 만들어갑니다",
            },
            {
              icon: "○",
              title: "미션",
              subtitle: "Mission",
              text: "고객 맞춤형 기술 솔루션으로 산업 현장의 에너지 효율과 환경을 동시에 개선합니다",
            },
            {
              icon: "△",
              title: "핵심가치",
              subtitle: "Core Value",
              text: "신뢰(Trust), 도전(Challenge), 열정(Passion)을 바탕으로 고객과 함께 성장합니다",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className={`text-center p-8 md:p-12 transition-all duration-1000 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <span className="text-3xl text-[#d4d4cc] block mb-6">
                {item.icon}
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#888480] block mb-2">
                {item.subtitle}
              </span>
              <h3 className="text-xl tracking-[0.1em] font-medium text-[#2d2a28] mb-4">
                {item.title}
              </h3>
              <p className="text-sm leading-[2] text-[#888480]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HistorySection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const timelineItems = [
    { year: "2022", events: ["기업부설연구소 설립 (KOITA 인증)"] },
    { year: "2021", events: ["산업통상자원부 장관 표창"] },
    { year: "2020", events: ["ISO 14001 환경경영시스템 인증"] },
    { year: "2019", events: ["등록 특허 19건 달성", "수출 실적 확대"] },
    { year: "2018", events: ["금속화이버 버너 NBP-MB 시리즈 라인업 확대"] },
    { year: "2017", events: ["중소벤처기업부 장관 표창"] },
    { year: "2016", events: ["CE Mark 인증 취득"] },
    { year: "2015", events: ["KS Mark 인증 취득"] },
    { year: "2014", events: ["중소기업청장 표창", "MIDCO International 기술제휴 확대"] },
    { year: "2013", events: ["ECOSTAR (터키) 기술 파트너십 체결"] },
    { year: "2012", events: ["환경설비 사업부 확대 (RTO, RCO 라인)"] },
    { year: "2011", events: ["ISO 9001 품질경영시스템 인증"] },
    { year: "2010", events: ["산업용 가스히터 시장 진출"] },
    { year: "2009", events: ["경기도지사 표창 수상"] },
    { year: "2008", events: ["금속화이버 버너 첫 제품 출시"] },
    { year: "2007", events: ["MIDCO International (미국) 기술제휴 체결"] },
    { year: "2006", events: ["NBP KOREA 설립 (경기도 안산시)"] },
  ];

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          className={`mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="section-label block mb-4">History</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-light text-[#2d2a28]">
            연혁
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[#e0e0e0] md:-translate-x-px" />

          {timelineItems.map((item, index) => (
            <div
              key={item.year}
              className={`relative flex flex-col md:flex-row items-start mb-12 last:mb-0 transition-all duration-1000 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="md:w-1/2 md:pr-12 md:text-right">
                <span className="text-3xl md:text-4xl font-light text-[#d4d4cc] tracking-[0.05em]">
                  {item.year}
                </span>
              </div>

              <div className="absolute left-[-4px] md:left-1/2 md:-translate-x-1/2 top-3 w-[9px] h-[9px] rounded-full bg-[#C05010] z-10" />

              <div className="md:w-1/2 md:pl-12 pl-6 mt-1">
                {item.events.map((event) => (
                  <p
                    key={event}
                    className="text-sm text-[#888480] leading-[2] tracking-[0.03em]"
                  >
                    {event}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompanyInfoSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        <div
          className={`mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="section-label block mb-4">Company Overview</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-light text-[#2d2a28]">
            기업 개요
          </h2>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-0 border border-[#e0e0e0] transition-all duration-1000 delay-300 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            { label: "회사명", value: "주식회사 NBP KOREA" },
            { label: "설립일", value: "2006년" },
            { label: "대표이사", value: "최혁순" },
            { label: "사업분야", value: "환경설비 (CTO, RTO, RCO, TO, DTO) / 산업용 연소장비" },
            { label: "사업자등록번호", value: "119-13-28296" },
            { label: "소재지", value: "경기도 안산시 단원구 산단로 76 (성곡동)" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex border-b border-r border-[#e0e0e0] last:border-b-0"
            >
              <div className="w-36 md:w-44 flex-shrink-0 bg-[#f5f5f5] px-6 py-5 text-xs tracking-[0.1em] text-[#888480] uppercase">
                {item.label}
              </div>
              <div className="px-6 py-5 text-sm text-[#2d2a28] tracking-[0.03em]">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PatentsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const patents = [
    "금속화이버 버너 연소 구조체",
    "표면연소 버너 냉각 시스템",
    "소형 금속 히터 열교환 장치",
    "직접가열식 가스히터 구조",
    "간접가열식 가스히터 시스템",
    "RTO 축열체 배열 구조",
    "CTO 촉매 담체 구조",
    "RCO 하이브리드 산화 장치",
    "가스히터 자동 온도제어 회로",
    "산업용 탈취 연소 장치",
    "버너 NOx 저감 구조",
    "컴팩트 열처리 장치",
    "하이브리드 제습 건조 시스템",
    "도장 건조 열풍 공급 장치",
    "버너 안전 점화 제어 장치",
    "축열식 열교환 구조체",
    "금속섬유 연소면 제조 방법",
    "촉매연소 반응기 구조",
    "산업용 연소 제어 알고리즘",
  ];

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          className={`mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="section-label block mb-4">Patents</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-light text-[#2d2a28]">
            등록 특허
          </h2>
          <p className="text-sm text-[#888480] mt-4">19건의 독자 기술 특허를 보유하고 있습니다</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {patents.map((patent, index) => (
            <div
              key={patent}
              className={`border border-[#e0e0e0] p-6 transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#888480] block mb-2">
                Patent {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-sm text-[#2d2a28] tracking-[0.03em] leading-[1.8]">
                {patent}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientsMarqueeSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

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

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="section-label block mb-4">Clients</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-light text-[#2d2a28]">
            주요 고객사
          </h2>
          <p className="text-sm text-[#888480] mt-4">국내외 80여 기업이 NBP KOREA의 기술을 신뢰합니다</p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex gap-8 animate-scroll">
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 border border-[#e0e0e0] px-6 py-4 bg-white flex items-center justify-center w-36 h-20"
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

function DirectionsSection() {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          className={`mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="section-label block mb-4">Directions</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-light text-[#2d2a28]">
            오시는 길
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* 지도 */}
          <div
            className={`transition-all duration-1000 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="aspect-[4/3] w-full overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=%EA%B2%BD%EA%B8%B0%EB%8F%84+%EC%95%88%EC%82%B0%EC%8B%9C+%EB%8B%A8%EC%9B%90%EA%B5%AC+%EC%82%B0%EB%8B%A8%EB%A1%9C+76&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NBP KOREA 본사 위치"
              />
            </div>
          </div>

          {/* 연락처 */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="space-y-8">
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#888480] mb-2">Address</p>
                <p className="text-sm text-[#2d2a28] leading-[2]">
                  경기도 안산시 단원구 산단로 76 (성곡동)
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#888480] mb-2">Phone / Fax</p>
                <p className="text-sm text-[#2d2a28] leading-[2]">
                  TEL 031-434-6566~7<br />
                  FAX 031-434-6568
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#888480] mb-2">Email</p>
                <p className="text-sm text-[#2d2a28]">nbpkorea@nbpkorea.co.kr</p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#888480] mb-2">Business Hours</p>
                <p className="text-sm text-[#2d2a28] leading-[2]">
                  평일 09:00 — 18:00<br />
                  <span className="text-[#888480]">토·일·공휴일 휴무</span>
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#888480] mb-3">Transit</p>
                <div className="space-y-2">
                  <p className="text-sm text-[#888480] leading-[1.8]">
                    <span className="text-[#2d2a28] font-medium">지하철</span> — 수인·분당선 초지역 1번 출구 도보 15분
                  </p>
                  <p className="text-sm text-[#888480] leading-[1.8]">
                    <span className="text-[#2d2a28] font-medium">버스</span> — 안산 산단로 정류장 하차
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

export default function AboutPage() {
  return (
    <SubpageLayout
      title="ABOUT US"
      subtitle="신뢰와 도전, 열정으로 산업 현장의 가치를 높여갑니다"
      breadcrumb={[{ label: "회사소개", href: "/about" }]}
    >
      <CeoSection />
      <ImpactNumbersSection />
      <VisionSection />
      <HistorySection />
      <CompanyInfoSection />
      <PatentsSection />
      <ClientsMarqueeSection />
      <DirectionsSection />
    </SubpageLayout>
  );
}
