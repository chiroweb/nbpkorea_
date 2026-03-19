"use client";

import SubpageLayout from "@/components/SubpageLayout";
import ProductNav from "@/components/ProductNav";
import { useInView } from "@/hooks/useInView";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

const specs = [
  { model: "NK-NDGH-6000",  airflow: "6,000",  length: "4,040", width: "3,340", height: "3,710", season: "4계절" },
  { model: "NK-NDGH-12000", airflow: "12,000", length: "4,800", width: "3,340", height: "3,710", season: "4계절" },
  { model: "NK-NDGH-50000", airflow: "50,000", length: "5,710", width: "4,440", height: "3,900", season: "4계절" },
];

const features = [
  "가스히터를 장착하여 4계절 복합형으로 운전 가능",
  "핫가스 코일을 운용하여 냉각코일 출구온도를 보향함으로 에너지 절감",
  "냉동싸이클을 이용하여 구조가 간단함",
  "설비비와 운전비가 저렴함",
  "제습 외에 냉각도 가능하여 출구공기온도를 임의로 제어할 수 있음",
  "유지보수가 용이함",
  "냉각코일 + 가스히터 복합 방식으로 연중 안정적 운전",
  "루버·댐퍼·엘리미네이터 일체형 패키지 구성",
  "선박 블록 탱크, 도장 공정 전처리 등 고습 환경 특화",
  "출구 공기 노점온도 이하 냉각으로 수분 완전 제거",
  "실외기(방열) 탑재 — 독립형 패키지 운전",
  "MIDCO International(미국) 기술 협력 파트너십",
];

const systemFlow = [
  "AIR (고습도)",
  "루버",
  "댐퍼",
  "냉각코일 (냉각제습)",
  "엘리미네이터",
  "가스히터 (동계 가온용)",
  "송풍기",
  "Room (저습도)",
];

const applications = [
  "선박 블록 용접 작업",
  "선박 블록 도장 작업",
  "클린룸",
  "제철·제강 공장",
  "저장창고·냉동창고",
  "도장 공정 전처리",
  "반도체·디스플레이",
  "식품 저장·가공",
  "의약품 제조",
  "정밀기기 보관",
  "건축 내부 마감",
  "기타 고습 환경",
];

export default function DehumidifierPage() {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: specRef, isInView: specInView } = useInView({ threshold: 0.1 });
  const { ref: appRef, isInView: appInView } = useInView({ threshold: 0.1 });

  return (
    <SubpageLayout
      title="NK-NDGH Series"
      subtitle="하이브리드 제습기 — Hybrid Dehumidifier System"
      breadcrumb={[
        { label: "제품/솔루션", href: "/products" },
        { label: "연소설비", href: "/products?tab=combustion" },
        { label: "하이브리드 제습기", href: "/products/combustion/dehumidifier" },
      ]}
    >
      <ProductNav activeTab="combustion" activeProduct="dehumidifier" />

      {/* Hero */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div
            ref={heroRef}
            className={`transition-all duration-1000 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <span className="text-[13px] tracking-[0.2em] uppercase text-[#C05010] block mb-3">
              Combustion · Hybrid Dehumidifier
            </span>
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.08em] text-[#2d2a28] mb-6">
              하이브리드 제습기<br />(NK-NDGH Series)
            </h2>
            <p className="text-sm text-[#8B95A1] leading-[2] mb-6">
              NK-NDGH 시리즈는 냉동 제습과 가스 가열을 하나의 패키지로 통합한 하이브리드 제습 시스템입니다. 습기에 의한 불쾌감 또는 제품 품질의 생산성 저하를 막기 위해 공급공기를 그 노점온도 이하로 냉각시켜 공기 중의 수분을 제거하는 방식으로, 고습 환경에서의 작업 품질과 안전을 동시에 확보합니다.
            </p>
            <p className="text-sm text-[#8B95A1] leading-[2] mb-8">
              가스히터를 장착하여 동절기에는 가열 기능을 추가해 4계절 복합형으로 운전할 수 있으며, 핫가스 코일을 활용하여 냉각코일 출구온도를 보향함으로써 에너지를 절감합니다. 선박 블록 용접·도장 작업장, 클린룸, 제철·저장창고 등 고습 환경 전반에 적용됩니다.
            </p>
            <div className="flex flex-wrap gap-3">
              {["냉동 제습 + 가스 가열", "4계절 복합 운전", "6,000~50,000 m³/h", "에너지 절감"].map((tag) => (
                <span key={tag} className="text-[14px] tracking-[0.1em] border border-[#D4DAE2] px-3 py-1 text-[#8B95A1]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-300 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="relative aspect-[4/3] overflow-hidden bg-[#DCE2E8]">
              <Image
                src={`${S3}/images/humidremover.jpg`}
                alt="NK-NDGH 하이브리드 제습기"
                fill className="object-cover" priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 시스템 구성도 */}
      <section className="px-6 md:px-12 py-12 bg-[#F2F4F7] border-y border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.2em] uppercase text-[#8B95A1] mb-6">Dehumidifier System Flow</p>
          <div className="flex flex-wrap items-center gap-2">
            {systemFlow.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <div className={`px-3 py-2 text-[14px] tracking-[0.05em] text-center ${
                  step === "냉각코일 (냉각제습)" || step === "가스히터 (동계 가온용)"
                    ? "bg-[#C05010] text-white"
                    : step === "AIR (고습도)" || step === "Room (저습도)"
                    ? "bg-[#2d2a28] text-white"
                    : "bg-white border border-[#D4DAE2] text-[#8B95A1]"
                }`}>
                  {step}
                </div>
                {i < systemFlow.length - 1 && (
                  <span className="text-[#C8D0DA]">→</span>
                )}
              </div>
            ))}
          </div>
          <p className="text-[14px] text-[#8B95A1] mt-4">실외기(방열) 탑재 — 냉각+가온 4계절 복합 운전</p>
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

      {/* 스펙 테이블 */}
      <section ref={specRef} className="px-6 md:px-12 py-16 bg-[#F2F4F7] border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.2em] uppercase text-[#8B95A1] mb-2">제품 제원</p>
          <p className="text-xs text-[#8B95A1] mb-8 tracking-[0.05em]">행을 클릭하여 원하는 모델을 선택하세요</p>
          <div className={`overflow-x-auto transition-all duration-1000 ${specInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <table className="w-full text-xs border-collapse min-w-[560px]">
              <thead>
                <tr className="border-b-2 border-[#2d2a28]">
                  {["MODEL", "처리풍량 (m³/h)", "길이 (mm)", "폭 (mm)", "높이 (mm)", "운전방식"].map((h) => (
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
                      selectedModel === row.model ? "bg-[#C05010]/10 border-l-2 border-[#C05010]" : "hover:bg-white"
                    }`}
                  >
                    <td className={`py-3.5 px-4 font-medium tracking-[0.05em] ${selectedModel === row.model ? "text-[#C05010]" : "text-[#2d2a28]"}`}>{row.model}</td>
                    <td className="py-3.5 px-4 text-[#8B95A1]">{row.airflow}</td>
                    <td className="py-3.5 px-4 text-[#8B95A1]">{row.length}</td>
                    <td className="py-3.5 px-4 text-[#8B95A1]">{row.width}</td>
                    <td className="py-3.5 px-4 text-[#8B95A1]">{row.height}</td>
                    <td className="py-3.5 px-4 text-[#8B95A1]">{row.season}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[13px] text-[#8B95A1] mt-4">※ 본 제원은 표준 사양 기준이며, 현장 조건에 따라 변경될 수 있습니다.</p>
        </div>
      </section>

      {/* 적용 분야 */}
      <section ref={appRef} className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.2em] uppercase text-[#8B95A1] mb-8">적용 분야</p>
          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 transition-all duration-1000 ${appInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {applications.map((app) => (
              <div key={app} className="border border-[#D4DAE2] px-3 py-3 text-[14px] text-[#8B95A1] text-center leading-snug hover:border-[#C05010] hover:text-[#C05010] transition-colors">
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
            <h3 className="text-lg tracking-[0.08em] font-light text-[#2d2a28] mb-2">NK-NDGH 도입을 검토 중이신가요?</h3>
            <p className="text-sm text-[#8B95A1]">현장 풍량·습도 조건에 맞는 최적 모델을 제안해 드립니다.</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/products?tab=combustion" className="btn-link group text-[#8B95A1] text-xs tracking-[0.15em] uppercase">
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
