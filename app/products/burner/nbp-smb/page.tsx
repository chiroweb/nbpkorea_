"use client";

import SubpageLayout from "@/components/SubpageLayout";
import ProductNav from "@/components/ProductNav";
import { useInView } from "@/hooks/useInView";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const S3 = "https://nbpkoreare.s3.ap-northeast-2.amazonaws.com";

const specs = [
  { model: "NBP-SMB-10", width: "10", capacity: "40,000",  pressure: "35", turndown: "30단계", fuel: "Natural/Propane/Butane" },
  { model: "NBP-SMB-15", width: "15", capacity: "60,000",  pressure: "35", turndown: "30단계", fuel: "Natural/Propane/Butane" },
  { model: "NBP-SMB-20", width: "20", capacity: "80,000",  pressure: "35", turndown: "30단계", fuel: "Natural/Propane/Butane" },
  { model: "NBP-SMB-25", width: "25", capacity: "100,000", pressure: "35", turndown: "30단계", fuel: "Natural/Propane/Butane" },
  { model: "NBP-SMB-30", width: "30", capacity: "120,000", pressure: "35", turndown: "30단계", fuel: "Natural/Propane/Butane" },
  { model: "NBP-SMB-50", width: "50", capacity: "200,000", pressure: "35", turndown: "30단계", fuel: "Natural/Propane/Butane" },
];

const features = [
  "컴팩트 설계 — 협소 공간 및 소형 장비에 최적화",
  "6가지 용량(폭 10~50cm) 라인업으로 다양한 소형 설비에 맞춤 적용",
  "NO₂ 및 CO 저배출 — ANSI Z83.4 / Z83.18 기준 충족",
  "2단 연소(Two-Stage) 방식으로 소형에서도 NOₓ 최소 배출",
  "30단계 정밀 화염 제어 — 소형 장비 온도 정밀 관리",
  "노즐 교체 없이 Natural / Propane / Butane 가스 모두 사용 가능",
  "내열 금속섬유 연소면 — 복사열로 에너지 효율 극대화",
  "경쟁사 대비 경량·컴팩트 설계로 설치 및 교체 용이",
  "화염 길이 25cm 이하 — 협소 덕트 내 안전 운전",
  "독립형 패키지 구성 — 기존 설비 후속 설치 가능",
  "MIDCO International(미국) 기술 협력 기반 설계",
  "현장 조건 맞춤형 제작·시공·A/S 원스톱 서비스",
];

const applications = [
  "소형 건조 오븐",
  "소형 도장 부스",
  "식품 소형 건조기",
  "라인 히터 보조",
  "소형 클린룸 열원",
  "농수산물 건조",
  "의류·피혁 건조",
  "인쇄 건조 라인",
  "소형 열처리 설비",
  "특수 소형 장비",
  "연구소 실험 장비",
  "기타 소형 가열 설비",
];

export default function NbpSmbPage() {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: specRef, isInView: specInView } = useInView({ threshold: 0.1 });
  const { ref: appRef, isInView: appInView } = useInView({ threshold: 0.1 });

  return (
    <SubpageLayout
      title="NBP-SMB Series"
      subtitle="소형 금속화이버 버너 — Small Metal Fiber Burner"
      breadcrumb={[
        { label: "제품/솔루션", href: "/products" },
        { label: "산업용 버너", href: "/products?tab=burner" },
        { label: "NBP-SMB Series", href: "/products/burner/nbp-smb" },
      ]}
    >
      <ProductNav activeTab="burner" activeProduct="nbp-smb" />

      {/* Hero */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div
            ref={heroRef}
            className={`transition-all duration-1000 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#C05010] block mb-3">
              Industrial Burner · Small Metal Fiber Burner
            </span>
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.08em] text-[#2d2a28] mb-6">
              소형 금속화이버 버너<br />(NBP-SMB Series)
            </h2>
            <p className="text-sm text-[#8B95A1] leading-[2] mb-6">
              NBP-SMB 시리즈는 소형 장비 및 협소 공간에 최적화된 컴팩트형 금속화이버 버너입니다. 폭 10cm~50cm까지 6가지 용량 라인업을 갖추어, 대형 NBP-MB로는 설치가 어려운 소형 건조기·오븐·특수 장비에 맞춤 적용이 가능합니다.
            </p>
            <p className="text-sm text-[#8B95A1] leading-[2] mb-8">
              MIDCO International(미국) 기술을 기반으로, ANSI Z83.4 / Z83.18 기준을 충족하는 NOₓ·CO 저배출 설계를 소형 버너에도 그대로 구현합니다. 노즐 교체 없이 Natural Gas · Propane · Butane 가스를 모두 사용할 수 있어 현장 대응이 유연합니다.
            </p>
            <div className="flex flex-wrap gap-3">
              {["컴팩트 소형 설계", "6가지 용량 라인업", "30단계 화염 제어", "복합 연료 대응"].map((tag) => (
                <span key={tag} className="text-[11px] tracking-[0.1em] border border-[#D4DAE2] px-3 py-1 text-[#8B95A1]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-300 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="relative aspect-[4/3] overflow-hidden bg-[#DCE2E8]">
              <Image
                src={`${S3}/images/smallmetalburner.png`}
                alt="NBP-SMB 소형 금속화이버 버너"
                fill className="object-cover" priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 연소 원리 */}
      <section className="px-6 md:px-12 py-12 bg-[#F2F4F7] border-y border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#8B95A1] mb-6">연소 원리 — Compact Two-Stage Combustion</p>
          <div className="flex flex-wrap items-center gap-3">
            {[
              { label: "가스 공급\nNatural/LPG", bg: "#DCE2E8", text: "#2d2a28" },
              { label: "→", isArrow: true },
              { label: "예혼합\n(저NOₓ 설계)", bg: "#C05010", text: "#fff" },
              { label: "→", isArrow: true },
              { label: "금속섬유면\n표면 연소", bg: "#E8A060", text: "#fff" },
              { label: "→", isArrow: true },
              { label: "복사열 공급\n(정밀 제어)", bg: "#2d2a28", text: "#fff" },
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
          <p className="text-[11px] text-[#8B95A1] mt-4">화염 길이 25cm 이하 / 30단계 턴다운 제어 — 소형 장비에도 정밀 온도 관리 가능</p>
        </div>
      </section>

      {/* 특징 */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#8B95A1] mb-8">제품 특징</p>
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

      {/* 스펙 테이블 */}
      <section ref={specRef} className="px-6 md:px-12 py-16 bg-[#F2F4F7] border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#8B95A1] mb-2">제품 제원</p>
          <p className="text-xs text-[#8B95A1] mb-8 tracking-[0.05em]">행을 클릭하여 원하는 모델을 선택하세요</p>
          <div className={`overflow-x-auto transition-all duration-1000 ${specInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <table className="w-full text-xs border-collapse min-w-[580px]">
              <thead>
                <tr className="border-b-2 border-[#2d2a28]">
                  {["MODEL", "폭 (cm)", "연소 용량 (Kcal/h)", "통과압력 (mmAq)", "턴다운", "연료"].map((h) => (
                    <th key={h} className="py-3 px-4 text-left text-[10px] tracking-[0.12em] uppercase text-[#2d2a28] font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {specs.map((row) => (
                  <tr
                    key={row.model}
                    onClick={() => setSelectedModel(selectedModel === row.model ? null : row.model)}
                    className={`cursor-pointer border-b border-[#D4DAE2] transition-colors duration-300 ${
                      selectedModel === row.model ? "bg-[#C05010]/10 border-l-2 border-[#C05010]" : "hover:bg-white"
                    }`}
                  >
                    <td className={`py-3.5 px-4 font-medium tracking-[0.05em] ${selectedModel === row.model ? "text-[#C05010]" : "text-[#2d2a28]"}`}>{row.model}</td>
                    <td className="py-3.5 px-4 text-[#8B95A1]">{row.width}</td>
                    <td className="py-3.5 px-4 text-[#8B95A1]">{row.capacity}</td>
                    <td className="py-3.5 px-4 text-[#8B95A1]">{row.pressure}</td>
                    <td className="py-3.5 px-4 text-[#8B95A1]">{row.turndown}</td>
                    <td className="py-3.5 px-4 text-[#8B95A1]">{row.fuel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[10px] text-[#8B95A1] mt-4">※ 본 제원은 표준 사양 기준이며, 현장 조건에 따라 변경될 수 있습니다.</p>
        </div>
      </section>

      {/* 적용 분야 */}
      <section ref={appRef} className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#8B95A1] mb-8">적용 분야</p>
          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 transition-all duration-1000 ${appInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {applications.map((app) => (
              <div key={app} className="border border-[#D4DAE2] px-3 py-3 text-[11px] text-[#8B95A1] text-center leading-snug hover:border-[#C05010] hover:text-[#C05010] transition-colors bg-white">
                {app}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-16 border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg tracking-[0.08em] font-light text-[#2d2a28] mb-2">NBP-SMB 버너 도입을 검토 중이신가요?</h3>
            <p className="text-sm text-[#8B95A1]">소형 장비 규격에 맞는 최적 모델을 제안해 드립니다.</p>
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
