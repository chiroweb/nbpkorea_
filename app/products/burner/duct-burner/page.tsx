"use client";

import SubpageLayout from "@/components/SubpageLayout";
import ProductNav from "@/components/ProductNav";
import { useInView } from "@/hooks/useInView";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const S3 = "https://nbpkoreare.s3.ap-northeast-2.amazonaws.com";

const specs = [
  { model: "NBP-SMB-10", size: "0.5FT (10cm)", capacity: "40,000",  pressure: "35", turndown: "30단계", fuel: "Natural/Propane/Butane" },
  { model: "NBP-SMB-15", size: "0.75FT (15cm)", capacity: "60,000",  pressure: "35", turndown: "30단계", fuel: "Natural/Propane/Butane" },
  { model: "NBP-SMB-20", size: "1FT (20cm)", capacity: "80,000",  pressure: "35", turndown: "30단계", fuel: "Natural/Propane/Butane" },
  { model: "NBP-SMB-25", size: "1.25FT (25cm)", capacity: "100,000", pressure: "35", turndown: "30단계", fuel: "Natural/Propane/Butane" },
  { model: "NBP-SMB-30", size: "1.5FT (30cm)", capacity: "120,000", pressure: "35", turndown: "30단계", fuel: "Natural/Propane/Butane" },
  { model: "NBP-SMB-50", size: "2FT (50cm)", capacity: "200,000", pressure: "35", turndown: "30단계", fuel: "Natural/Propane/Butane" },
  { model: "NBP-MB-30",  size: "1FT (30cm)", capacity: "187,500",  pressure: "35", turndown: "30단계", fuel: "Natural/Propane/Butane" },
  { model: "NBP-MB-50",  size: "1.5FT (50cm)", capacity: "312,500",  pressure: "35", turndown: "30단계", fuel: "Natural/Propane/Butane" },
  { model: "NBP-MB-100", size: "3FT (100cm)", capacity: "625,000",  pressure: "35", turndown: "30단계", fuel: "Natural/Propane/Butane" },
  { model: "NBP-MB-200", size: "5FT (200cm)", capacity: "1,250,000", pressure: "50", turndown: "30단계", fuel: "Natural/Propane/Butane" },
];

const sizeGallery = [
  { label: "0.5FT", image: `${S3}/images/burner/0.5FT.png` },
  { label: "1FT",   image: `${S3}/images/burner/1FT.png` },
  { label: "1.5FT", image: `${S3}/images/burner/1.5FT.png` },
  { label: "3FT",   image: `${S3}/images/burner/3FT-T.png` },
  { label: "5FT",   image: `${S3}/images/burner/5FT-T.png` },
  { label: "100만 Kcal/h", image: `${S3}/images/burner/100man.png` },
  { label: "150만 Kcal/h", image: `${S3}/images/burner/150man.png` },
];

const features = [
  "NO₂ 및 CO 배출 최소화 — ANSI Z83.4 / Z83.18 기준 적합",
  "2단 연소(Two-Stage) 방식으로 최대 연소 시에도 NOₓ 배출 최소화",
  "폭 30cm 기준 통과압력 35mmAq일 때 187,500 Kcal/h 고출력 실현",
  "50mmAQ 조건에서 250,000 Kcal/h 이상 연소 가능 (대형 모델)",
  "HMA-2 방식 — 차압 0.05″~1.4″ W.C. 광범위 운전",
  "공기 속도 800~4,000 ft/min 대응 — 다양한 덕트 설계에 유연 적용",
  "2단 연소 시스템으로 화염 안정성 극대화, 화염 길이 25cm 이하 유지",
  "노즐 교체 없이 Natural / Propane / Butane 가스 모두 사용 가능",
  "내열 금속섬유 연소면 — 복사 열전달로 에너지 효율 30% 이상 향상",
  "0.5FT(10cm)~5FT(200cm) 다양한 라인업으로 덕트 크기에 맞춤 선택",
  "화염 제어 30단계 — 타 메이커 버너 대비 정밀 온도 제어",
  "MIDCO International(미국) 기술 협력 — 글로벌 검증된 연소 시스템",
];

const applications = [
  "덕트 가열 시스템",
  "환경설비(RTO/CTO) 보조 버너",
  "도장 부스 열풍 공급",
  "농수산물 건조 라인",
  "목재·합판 건조",
  "섬유·피혁 건조",
  "식품 가공 건조",
  "인쇄·코팅 라인",
  "제약 건조 공정",
  "반도체 클린룸 보조 열원",
  "조선소 블록 가열",
  "기타 산업용 덕트 가열",
];

export default function DuctBurnerPage() {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: specRef, isInView: specInView } = useInView({ threshold: 0.1 });
  const { ref: galleryRef, isInView: galleryInView } = useInView({ threshold: 0.1 });
  const { ref: appRef, isInView: appInView } = useInView({ threshold: 0.1 });

  return (
    <SubpageLayout
      title="덕트버너"
      subtitle="Duct Burner — 금속화이버 표면연소 방식 덕트 가열 시스템"
      breadcrumb={[
        { label: "제품/솔루션", href: "/products" },
        { label: "산업용 버너", href: "/products?tab=burner" },
        { label: "덕트버너", href: "/products/burner/duct-burner" },
      ]}
    >
      <ProductNav activeTab="burner" activeProduct="duct-burner" />

      {/* Hero */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div
            ref={heroRef}
            className={`transition-all duration-1000 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <span className="text-[13px] tracking-[0.2em] uppercase text-[#C05010] block mb-3">
              Industrial Burner · Duct Burner
            </span>
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.08em] text-[#2d2a28] mb-6">
              덕트버너<br />(Duct Burner)
            </h2>
            <p className="text-sm text-[#8B95A1] leading-[2] mb-6">
              NBP KOREA 덕트버너는 내열 금속섬유(Metal Fiber)로 제작된 연소면에서 적외선 복사열을 발생시키는 표면연소 방식의 산업용 덕트 가열 버너입니다. MIDCO International(미국)과의 기술 협력을 바탕으로, ANSI Z83.4 / Z83.18 기준을 충족하는 NOₓ·CO 저배출 설계를 실현합니다.
            </p>
            <p className="text-sm text-[#8B95A1] leading-[2] mb-8">
              소형(NBP-SMB, 0.5FT~2FT)부터 대형(NBP-MB, 1FT~5FT)까지 10개 모델 라인업을 갖추고 있으며, 2단 연소 방식과 30단계 정밀 턴다운 제어로 덕트 내 온도를 안정적으로 관리합니다. 노즐 교체 없이 Natural Gas / Propane / Butane 가스를 모두 사용할 수 있습니다.
            </p>
            <div className="flex flex-wrap gap-3">
              {["2단 연소 방식", "30단계 화염 제어", "NOₓ 저배출", "0.5FT~5FT 라인업"].map((tag) => (
                <span key={tag} className="text-[14px] tracking-[0.1em] border border-[#D4DAE2] px-3 py-1 text-[#8B95A1]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-300 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="relative aspect-[4/3] overflow-hidden bg-[#DCE2E8]">
              <Image
                src={`${S3}/images/burner/1FT.png`}
                alt="덕트버너 — 금속화이버 표면연소 버너"
                fill className="object-cover object-center" priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 연소 원리 */}
      <section className="px-6 md:px-12 py-12 bg-[#F2F4F7] border-y border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.2em] uppercase text-[#8B95A1] mb-6">연소 원리 — Two-Stage Surface Combustion</p>
          <div className="flex flex-wrap items-center gap-3">
            {[
              { label: "가스 공급\nNatural/LPG", bg: "#DCE2E8", text: "#2d2a28" },
              { label: "→", isArrow: true },
              { label: "1차 연소\n(저NOₓ 예혼합)", bg: "#C05010", text: "#fff" },
              { label: "→", isArrow: true },
              { label: "2차 연소\n(완전 연소)", bg: "#E8A060", text: "#fff" },
              { label: "→", isArrow: true },
              { label: "금속섬유면\n적외선 복사열", bg: "#2d2a28", text: "#fff" },
              { label: "→", isArrow: true },
              { label: "덕트 내\n균일 가열", bg: "#4A5568", text: "#fff" },
            ].map((step, i) =>
              step.isArrow ? (
                <span key={i} className="text-xl text-[#C8D0DA]">→</span>
              ) : (
                <div key={i} className="px-4 py-3 text-xs tracking-[0.08em] text-center whitespace-pre-line"
                  style={{ backgroundColor: step.bg, color: step.text }}>
                  {step.label}
                </div>
              )
            )}
          </div>
          <p className="text-[14px] text-[#8B95A1] mt-4">화염 길이 25cm 이하 유지 / 30단계 정밀 턴다운 제어 / 차압 0.05″~1.4″ W.C. 광범위 운전</p>
        </div>
      </section>

      {/* 특징 */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.2em] uppercase text-[#8B95A1] mb-8">제품 특징</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-4 border border-[#D4DAE2]">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C05010] flex-shrink-0" />
                <span className="text-xs text-[#8B95A1] leading-[1.8]">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 사이즈별 갤러리 */}
      <section ref={galleryRef} className="px-6 md:px-12 py-16 bg-[#F2F4F7] border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.2em] uppercase text-[#8B95A1] mb-2">사이즈별 라인업</p>
          <p className="text-xs text-[#8B95A1] mb-8 tracking-[0.05em]">소형 0.5FT부터 대형 5FT(150만 Kcal/h)까지 현장 덕트 크기에 맞춘 맞춤 선택</p>
          <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 transition-all duration-1000 ${galleryInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {sizeGallery.map((item) => (
              <div key={item.label} className="bg-white border border-[#D4DAE2] overflow-hidden">
                <div className="relative aspect-square bg-[#F8F9FB]">
                  <Image
                    src={item.image}
                    alt={`덕트버너 ${item.label}`}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="px-3 py-2 border-t border-[#E8ECF0]">
                  <span className="text-[14px] tracking-[0.08em] text-[#2d2a28] font-medium">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 스펙 테이블 */}
      <section ref={specRef} className="px-6 md:px-12 py-16 border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.2em] uppercase text-[#8B95A1] mb-2">제품 제원</p>
          <p className="text-xs text-[#8B95A1] mb-8 tracking-[0.05em]">행을 클릭하여 원하는 모델을 선택하세요</p>
          <div className={`overflow-x-auto transition-all duration-1000 ${specInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <table className="w-full text-xs border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b-2 border-[#2d2a28]">
                  {["MODEL", "사이즈", "연소 용량 (Kcal/h)", "통과압력 (mmAq)", "턴다운", "연료"].map((h) => (
                    <th key={h} className="py-3 px-4 text-left text-[13px] tracking-[0.12em] uppercase text-[#2d2a28] font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {specs.map((row) => (
                  <tr
                    key={row.model}
                    onClick={() => setSelectedModel(selectedModel === row.model ? null : row.model)}
                    className={`cursor-pointer border-b border-[#D4DAE2] transition-colors duration-300 ${
                      selectedModel === row.model ? "bg-[#C05010]/10 border-l-2 border-[#C05010]" : "hover:bg-[#F8F9FB]"
                    }`}
                  >
                    <td className={`py-3.5 px-4 font-medium tracking-[0.05em] ${selectedModel === row.model ? "text-[#C05010]" : "text-[#2d2a28]"}`}>{row.model}</td>
                    <td className="py-3.5 px-4 text-[#8B95A1]">{row.size}</td>
                    <td className="py-3.5 px-4 text-[#8B95A1]">{row.capacity}</td>
                    <td className="py-3.5 px-4 text-[#8B95A1]">{row.pressure}</td>
                    <td className="py-3.5 px-4 text-[#8B95A1]">{row.turndown}</td>
                    <td className="py-3.5 px-4 text-[#8B95A1]">{row.fuel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[13px] text-[#8B95A1] mt-4">※ 본 제원은 표준 사양 기준이며, 현장 조건에 따라 변경될 수 있습니다.</p>
        </div>
      </section>

      {/* 적용 분야 */}
      <section ref={appRef} className="px-6 md:px-12 py-16 bg-[#F2F4F7] border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.2em] uppercase text-[#8B95A1] mb-8">적용 분야</p>
          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 transition-all duration-1000 ${appInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {applications.map((app) => (
              <div key={app} className="border border-[#D4DAE2] px-3 py-3 text-[14px] text-[#8B95A1] text-center leading-snug hover:border-[#C05010] hover:text-[#C05010] transition-colors bg-white">
                {app}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 기술 파트너십 */}
      <section className="px-6 md:px-12 py-12 bg-white border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.2em] uppercase text-[#8B95A1] mb-6">기술 파트너십</p>
          <div className="flex flex-wrap gap-4">
            {["MIDCO International (미국) 기술 제휴", "ANSI Z83.4 / Z83.18 기준 적합", "19건 등록 특허", "글로벌 연소 기술 현지 적용"].map((item) => (
              <div key={item} className="border border-[#D4DAE2] px-4 py-2.5 text-xs text-[#8B95A1] tracking-[0.05em]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-16 border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg tracking-[0.08em] font-light text-[#2d2a28] mb-2">덕트버너 도입을 검토 중이신가요?</h3>
            <p className="text-sm text-[#8B95A1]">덕트 크기·통과압력·연료 조건에 맞는 최적 모델을 제안해 드립니다.</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/products?tab=burner" className="btn-link group text-[#8B95A1] text-xs tracking-[0.15em] uppercase">
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="rotate-180"><path d="M0 4H15M15 4L11 1M15 4L11 7" stroke="currentColor" strokeWidth="1"/></svg>
              목록으로
            </Link>
            <Link href="/support" className="text-xs tracking-[0.15em] uppercase border border-[#2d2a28] px-6 py-3 hover:bg-[#C05010] hover:border-[#C05010] hover:text-white transition-all duration-300">
              문의하기
            </Link>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
