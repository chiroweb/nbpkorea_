"use client";

import SubpageLayout from "@/components/SubpageLayout";
import ProductNav from "@/components/ProductNav";
import { useInView } from "@/hooks/useInView";
import Link from "next/link";
import Image from "next/image";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

const features = [
  "이동형 패키지 설계 — 현장 투입·철수 신속 대응",
  "독립 운전 가능 — 별도 공장 설비 없이 현장 가스 공급만으로 운전",
  "NO₂ 및 CO 배출 최소화 — ANSI Z83.4 / Z83.18 기준 적합",
  "2단 연소(Two-Stage) 방식으로 최대 연소 시에도 NOₓ 배출 최소화",
  "노즐 교체 없이 Natural / Propane / Butane 가스 모두 사용 가능",
  "30단계 정밀 화염 제어 — 현장 온도 조건 대응",
  "조선소 블록 내부 등 협소 현장에도 투입 가능한 컴팩트 구성",
  "화염 안정성 — 2단 연소 시스템으로 화염 길이 25cm 이하 유지",
  "PLC 또는 수동 제어 방식 선택 가능",
  "과열 방지·불꽃 감지 안전 장치 기본 탑재",
  "MIDCO International(미국) 기술 협력 — 글로벌 검증된 연소 시스템",
  "현장 맞춤형 제작·시공·A/S 원스톱 서비스",
];

const applications = [
  "조선소 블록 내부 가열",
  "건설 현장 콘크리트 양생",
  "임시 난방 설비",
  "선박 탱크 내부 건조",
  "현장 도장 전처리",
  "제철소 임시 가열",
  "터널 공사 현장",
  "농업용 하우스 난방",
  "이동식 건조기",
  "특수 현장 열원",
  "재난 복구 현장",
  "기타 이동형 가열 필요 현장",
];

export default function PortableBurnerPage() {
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: appRef, isInView: appInView } = useInView({ threshold: 0.1 });

  return (
    <SubpageLayout
      title="이동버너"
      subtitle="Portable Burner — 이동형 현장 투입 산업용 버너"
      breadcrumb={[
        { label: "제품/솔루션", href: "/products" },
        { label: "산업용 버너", href: "/products?tab=burner" },
        { label: "이동버너", href: "/products/burner/portable-burner" },
      ]}
    >
      <ProductNav activeTab="burner" activeProduct="portable-burner" />

      {/* Hero */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div
            ref={heroRef}
            className={`transition-all duration-1000 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <span className="text-[13px] tracking-[0.2em] uppercase text-[#C05010] block mb-3">
              Industrial Burner · Portable Burner
            </span>
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.08em] text-[#2d2a28] mb-6">
              이동버너<br />(Portable Burner)
            </h2>
            <p className="text-sm text-[#8B95A1] leading-[2] mb-6">
              NBPKOREA 이동버너는 고정 설비 없이 현장에 직접 투입하여 즉시 운전할 수 있는 이동형 산업용 버너입니다. 조선소 블록 내부 가열, 건설 현장 콘크리트 양생, 선박 탱크 건조 등 일시적·이동성이 필요한 현장에 최적화되어 있습니다.
            </p>
            <p className="text-sm text-[#8B95A1] leading-[2] mb-8">
              MIDCO International(미국) 기술 기반의 2단 연소 방식으로 NOₓ·CO 배출을 최소화하며, 노즐 교체 없이 Natural Gas / Propane / Butane 가스를 모두 사용할 수 있습니다. 독립 운전 구성으로 현장 가스 공급만으로 즉시 가동됩니다.
            </p>
            <div className="flex flex-wrap gap-3">
              {["이동형", "현장 즉시 투입", "독립 운전", "복합 연료 대응"].map((tag) => (
                <span key={tag} className="text-[14px] tracking-[0.1em] border border-[#D4DAE2] px-3 py-1 text-[#8B95A1]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-300 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#DCE2E8]">
                <Image
                  src={`${S3}/images/burner/portable-40man.png`}
                  alt="이동버너 패키지"
                  fill className="object-cover" priority
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden bg-[#1a1a1a]">
                <Image
                  src={`${S3}/images/burner/field-photo.jpg`}
                  alt="이동버너 현장 가동"
                  fill className="object-cover opacity-90" priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 특성 */}
      <section className="px-6 md:px-12 py-12 bg-[#F2F4F7] border-y border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.2em] uppercase text-[#8B95A1] mb-6">이동버너 핵심 특성</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "→", label: "현장 즉시 투입", desc: "별도 공장 설비 불필요 — 현장 가스 연결 즉시 가동" },
              { icon: "◎", label: "독립 운전", desc: "내장 제어반 탑재 — 단독 패키지로 완전 독립 운전 가능" },
              { icon: "▲", label: "다연료 대응", desc: "노즐 교체 없이 LNG / LPG / Butane 가스 모두 사용" },
              { icon: "●", label: "안전 시스템", desc: "과열 방지·불꽃 감지 자동 차단 안전 장치 기본 탑재" },
            ].map((item) => (
              <div key={item.label} className="bg-white border border-[#D4DAE2] p-4">
                <span className="text-[#C05010] text-lg mb-2 block">{item.icon}</span>
                <span className="text-xs font-medium text-[#2d2a28] block mb-1">{item.label}</span>
                <span className="text-[14px] text-[#8B95A1] leading-[1.7]">{item.desc}</span>
              </div>
            ))}
          </div>
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

      {/* 스펙 안내 */}
      <section className="px-6 md:px-12 py-16 bg-[#F2F4F7] border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.2em] uppercase text-[#8B95A1] mb-6">제품 제원</p>
          <div className="border border-[#D4DAE2] bg-white p-6">
            <p className="text-sm text-[#8B95A1] leading-[2]">
              이동버너는 현장 투입 목적·공간 조건·요구 열량에 따라 맞춤 설계·제작됩니다.<br />
              <span className="text-[#2d2a28] font-medium">주문 제작 방식</span>으로 공급되므로, 구체적인 용량 및 치수는 엔지니어 상담을 통해 확정합니다.
            </p>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "연료", value: "Natural / Propane / Butane" },
                { label: "제어 방식", value: "PLC 또는 수동" },
                { label: "배출 기준", value: "ANSI Z83.4 / Z83.18" },
                { label: "운전 방식", value: "독립형 패키지" },
              ].map((item) => (
                <div key={item.label} className="border border-[#E8ECF0] p-3">
                  <span className="text-[13px] tracking-[0.12em] uppercase text-[#C8D0DA] block mb-1">{item.label}</span>
                  <span className="text-xs text-[#2d2a28]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-[13px] text-[#8B95A1] mt-4">※ 현장 조건 및 요구 사양에 따라 맞춤 설계합니다. 사전 현장 조사 후 최적 사양을 제안해 드립니다.</p>
        </div>
      </section>

      {/* 적용 분야 */}
      <section ref={appRef} className="px-6 md:px-12 py-16">
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

      {/* CTA */}
      <section className="px-6 md:px-12 py-16 border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg tracking-[0.08em] font-light text-[#2d2a28] mb-2">이동버너 도입을 검토 중이신가요?</h3>
            <p className="text-sm text-[#8B95A1]">현장 조건·요구 열량·연료 조건에 맞는 최적 사양을 제안해 드립니다.</p>
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
