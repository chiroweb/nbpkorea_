"use client";

import SubpageLayout from "@/components/SubpageLayout";
import { useInView } from "@/hooks/useInView";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const S3 = "https://nbpkoreare.s3.ap-northeast-2.amazonaws.com";

const specs = [
  { model: "NKTO-050", airflow: 50, heatInput: "450,000", length: "4,060", width: "1,100", height: "1,500" },
  { model: "NKTO-075", airflow: 75, heatInput: "700,000", length: "4,060", width: "1,100", height: "1,500" },
  { model: "NKTO-100", airflow: 100, heatInput: "900,000", length: "4,340", width: "1,100", height: "1,500" },
  { model: "NKTO-150", airflow: 150, heatInput: "1,250,000", length: "7,200", width: "1,500", height: "1,500" },
  { model: "NKTO-200", airflow: 200, heatInput: "1,800,000", length: "7,200", width: "2,000", height: "1,500" },
  { model: "NKTO-300", airflow: 300, heatInput: "3,000,000", length: "7,200", width: "3,000", height: "1,500" },
];

const applications = [
  "페인트 및 도장공장", "식품 가공 공장", "석유 화학 공장",
  "상·하수, 분뇨 처리장", "인쇄, 잉크, 필름 공장", "플라스틱 제조 공장",
  "합성 수지 공장", "합판 및 가구 공장", "음식물, 폐기물 처리장",
  "접착제 및 테이프 공장", "벽지 및 건자재 공장", "기타 악취 발생 사업장",
];

const features = [
  "완벽한 발연 없이 소지 처리 효율 (99%)",
  "최대 95% 이상 높은 열 회수율",
  "간편 컴팩트 구성 설치공간 및 비용 최소화",
  "소규모 4개 구성 설계를 통한 제어의 간편 관리",
  "ICT 기반 터치 패널 기술 채용 (터치 스크린)",
  "소프트 전환 흐름을 바탕으로 가스비가 가능",
  "MIDCO U.S.A & ECOSTAR TURKEY",
  "촉적 그 단계 위의 기수량을 바탕으로 여러 가능",
  "현장 설치 여건에 따라 다양한 레이아웃 가능",
  "기술력을 및 디자인보의 특화 제품",
  "고농도 악취 및 VOCs 직접 산화 처리",
  "2차 오염물질이 발생하지 않는 친환경 설비",
];

export default function NkToPage() {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: specRef, isInView: specInView } = useInView({ threshold: 0.1 });
  const { ref: appRef, isInView: appInView } = useInView({ threshold: 0.1 });

  return (
    <SubpageLayout
      title="NK-TO"
      subtitle="직접연소탈취장치 — Thermal Oxidizer"
      breadcrumb={[
        { label: "제품/솔루션", href: "/products" },
        { label: "환경설비", href: "/products" },
        { label: "NK-TO", href: "/products/environment/nk-to" },
      ]}
    >
      {/* Hero */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div
            ref={heroRef}
            className={`transition-all duration-1000 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#C05010] block mb-3">
              Environment · Thermal Oxidizer
            </span>
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.08em] text-[#2d2a28] mb-6">
              직접연소탈취장치<br />(TO)
            </h2>
            <p className="text-sm text-[#8B95A1] leading-[2] mb-6">
              TO는 혼합연기가스 및 유기용제가스(VOCs), 벤젠, 아황, 이산망이 등을 연소실로 투입하여 악취물질을 고온의 화염과 직접 접촉시켜 분해·환원시키는 방법으로 시스템입니다. 발화점(700~900°C) 이상의 고온에서 체류시간 0.7을 1~1.5초 제유하며 처리하는 것이 가장 높은 처리효율을 얻는 3가지 조건인 고온(Temperature), 체류시간(Time), 혼합(Turbulence)의 3T 조건 모두 충족하여 처리가 가능합니다.
            </p>
            <p className="text-sm text-[#8B95A1] leading-[2] mb-8">
              최대 99% 이상의 처리효율을 가지는 기술로써 회수열을 사용하기 위해 Pre-heat용 열교환기를 적용하여 회수율을 높이며 컴팩트한 구조로 설치 비용 및 공간을 절약할 수 있습니다.
            </p>
            <div className="flex flex-wrap gap-3">
              {["처리효율 99%+", "연소온도 700~900°C", "컴팩트 설계", "고농도 VOCs"].map((tag) => (
                <span key={tag} className="text-[11px] tracking-[0.1em] border border-[#D4DAE2] px-3 py-1 text-[#8B95A1]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div
            className={`transition-all duration-1000 delay-300 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-[#DCE2E8]">
              <Image
                src={`${S3}/images/%ED%99%98%EA%B2%BD%EC%82%AC%EC%97%85%EB%B6%80/Business%20Area/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EC%9A%A9%20DTO%20%EB%A0%8C%EB%8D%94%EB%A7%81-nowatermark.jpg`}
                alt="NK-TO 직접연소탈취장치"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Flow Chart */}
      <section className="px-6 md:px-12 py-12 bg-[#F2F4F7] border-y border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#8B95A1] mb-6">Flow Chart</p>
          <div className="flex flex-wrap items-center gap-3">
            {[
              { label: "VOCs + O₂", bg: "#DCE2E8", text: "#2d2a28" },
              { label: "→", isArrow: true },
              { label: "고온산화\n700~900°C", bg: "#C05010", text: "#fff" },
              { label: "→", isArrow: true },
              { label: "CO₂ + H₂O", bg: "#E8A060", text: "#fff" },
              { label: "+", isArrow: true },
              { label: "Heat of Reaction", bg: "#C05010", text: "#fff" },
            ].map((step, i) => (
              step.isArrow ? (
                <span key={i} className="text-xl text-[#C8D0DA]">→</span>
              ) : (
                <div
                  key={i}
                  className="px-4 py-3 text-xs tracking-[0.08em] text-center whitespace-pre-line"
                  style={{ backgroundColor: step.bg, color: step.text }}
                >
                  {step.label}
                </div>
              )
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-[11px] text-[#8B95A1]">
            <span className="border border-[#D4DAE2] px-3 py-1">High Efficiency Burner (고효율 버너)</span>
            <span>→</span>
            <span className="border border-[#D4DAE2] px-3 py-1">Combustion Chamber (연소실)</span>
            <span>→</span>
            <span className="border border-[#D4DAE2] px-3 py-1">Heat Exchanger (열교환기)</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#8B95A1] mb-8">제품 특징</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-4 border border-[#D4DAE2]">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C05010] flex-shrink-0" />
                <span className="text-xs text-[#8B95A1] leading-[1.8] tracking-[0.02em]">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spec Table */}
      <section ref={specRef} className="px-6 md:px-12 py-16 bg-[#F2F4F7] border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#8B95A1] mb-2">제품 제원</p>
          <p className="text-xs text-[#8B95A1] mb-8 tracking-[0.05em]">행을 클릭하여 원하는 모델을 선택하세요</p>
          <div className={`overflow-x-auto transition-all duration-1000 ${specInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <table className="w-full text-xs border-collapse min-w-[560px]">
              <thead>
                <tr className="border-b-2 border-[#2d2a28]">
                  <th className="text-left py-3 px-4 text-[10px] tracking-[0.15em] uppercase text-[#2d2a28] font-medium">MODEL</th>
                  <th className="text-center py-3 px-4 text-[10px] tracking-[0.15em] uppercase text-[#2d2a28] font-medium">처리풍량<br />(Nm³/min)</th>
                  <th className="text-center py-3 px-4 text-[10px] tracking-[0.15em] uppercase text-[#2d2a28] font-medium">발열량<br />(Kcal/hr)</th>
                  <th className="text-center py-3 px-4 text-[10px] tracking-[0.15em] uppercase text-[#2d2a28] font-medium">길이<br />(mm)</th>
                  <th className="text-center py-3 px-4 text-[10px] tracking-[0.15em] uppercase text-[#2d2a28] font-medium">폭<br />(mm)</th>
                  <th className="text-center py-3 px-4 text-[10px] tracking-[0.15em] uppercase text-[#2d2a28] font-medium">높이<br />(mm)</th>
                </tr>
              </thead>
              <tbody>
                {specs.map((row) => (
                  <tr
                    key={row.model}
                    onClick={() => setSelectedModel(selectedModel === row.model ? null : row.model)}
                    className={`cursor-pointer border-b border-[#D4DAE2] transition-colors duration-300 ${
                      selectedModel === row.model
                        ? "bg-[#C05010]/10 border-l-2 border-[#C05010]"
                        : "hover:bg-white"
                    }`}
                  >
                    <td className={`py-3.5 px-4 font-medium tracking-[0.05em] ${selectedModel === row.model ? "text-[#C05010]" : "text-[#2d2a28]"}`}>
                      {row.model}
                    </td>
                    <td className="py-3.5 px-4 text-center text-[#8B95A1]">{row.airflow}</td>
                    <td className="py-3.5 px-4 text-center text-[#8B95A1]">{row.heatInput}</td>
                    <td className="py-3.5 px-4 text-center text-[#8B95A1]">{row.length}</td>
                    <td className="py-3.5 px-4 text-center text-[#8B95A1]">{row.width}</td>
                    <td className="py-3.5 px-4 text-center text-[#8B95A1]">{row.height}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[10px] text-[#8B95A1] mt-4 tracking-[0.03em]">
            ※ 본 제원은 시운전 표준용량 제원 수치이며, 기능 향상을 위하여 예고 없이 일부 변경될 수 있습니다.
          </p>
        </div>
      </section>

      {/* Applications */}
      <section ref={appRef} className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#8B95A1] mb-8">적용 분야</p>
          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 transition-all duration-1000 ${appInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {applications.map((app) => (
              <div key={app} className="border border-[#D4DAE2] px-3 py-3 text-[11px] text-[#8B95A1] text-center tracking-[0.03em] leading-snug hover:border-[#C05010] hover:text-[#C05010] transition-colors">
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
            <h3 className="text-lg tracking-[0.08em] font-light text-[#2d2a28] mb-2">NK-TO 도입을 검토 중이신가요?</h3>
            <p className="text-sm text-[#8B95A1]">현장 조건에 맞는 최적 사양을 제안해 드립니다.</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/products" className="btn-link group text-[#8B95A1] text-xs tracking-[0.15em] uppercase">
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="rotate-180">
                <path d="M0 4H15M15 4L11 1M15 4L11 7" stroke="currentColor" strokeWidth="1"/>
              </svg>
              목록으로
            </Link>
            <Link
              href="/support"
              className="text-xs tracking-[0.15em] uppercase border border-[#2d2a28] px-6 py-3 hover:bg-[#C05010] hover:border-[#C05010] hover:text-white transition-all duration-300"
            >
              문의하기
            </Link>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
