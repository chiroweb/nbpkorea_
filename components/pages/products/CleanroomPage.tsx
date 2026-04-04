"use client";

import FloatingCaseLink from "@/components/FloatingCaseLink";
import ProductNav from "@/components/ProductNav";
import SubpageLayout from "@/components/SubpageLayout";
import { useInView } from "@/hooks/useInView";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

const heroTags = ["HEPA/ULPA 필터링", "Class 1~100,000", "양압 관리", "정밀 온습도 제어"];

const applications = [
  "반도체 FAB",
  "디스플레이 생산라인",
  "제약 GMP 시설",
  "바이오 클린존",
  "정밀 전자부품 생산",
  "연구·시험 클린룸",
];

const processFlow = [
  "외기 / 환기 공기",
  "예열 · 냉각 코일",
  "프리필터 단계",
  "HEPA / ULPA 여과",
  "온습도 정밀 제어",
  "양압 공급",
];

const features = [
  "반도체·디스플레이·제약 공정에 맞춘 초청정 공조 설계",
  "HEPA/ULPA 필터 시스템으로 공기 중 입자 농도 저감",
  "온도·습도·차압을 통합 제어해 공정 안정성 확보",
  "실간 압력 밸런스 설계로 오염원 역류를 최소화",
  "직화식 가열 기술 기반으로 빠른 응답성과 에너지 절감 대응",
  "BMS/PLC 연동을 고려한 운전 인터록 및 모니터링 구성 가능",
  "현장 레이아웃에 맞춘 풍량·정압·필터단 구성 커스터마이징",
  "설계·제작·시공·TAB·사후관리까지 일괄 대응",
];

const capabilityCards = [
  {
    title: "청정도 대응",
    value: "Class 1~100,000",
    description: "요구 청정도에 맞춰 필터 등급, 풍량, 실압 조건을 조합합니다.",
  },
  {
    title: "압력 제어",
    value: "Positive Pressure",
    description: "클린존과 일반 구역 간 차압을 유지해 외부 오염 유입을 억제합니다.",
  },
  {
    title: "필터링",
    value: "HEPA / ULPA",
    description: "공정 특성에 따라 프리필터부터 최종 필터 단계까지 구성합니다.",
  },
  {
    title: "운전 제어",
    value: "Temp · RH · DP",
    description: "온도, 습도, 차압을 함께 관리해 생산 품질 편차를 줄입니다.",
  },
];

export default function CleanroomPage() {
  const t = useTranslations("products");
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: appRef, isInView: appInView } = useInView({ threshold: 0.1 });
  const { ref: featureRef, isInView: featureInView } = useInView({ threshold: 0.1 });
  const { ref: capabilityRef, isInView: capabilityInView } = useInView({ threshold: 0.1 });

  return (
    <SubpageLayout
      title="클린룸 공조기"
      subtitle={`${t("hvac.cleanroom.subtitle")} — Cleanroom AHU`}
      breadcrumb={[
        { label: t("breadcrumb"), href: "/products" },
        { label: t("breadcrumbs.hvac"), href: "/products?tab=hvac" },
        { label: t("nav.cleanroom"), href: "/products/hvac/cleanroom" },
      ]}
    >
      <FloatingCaseLink category="hvac" tag="클린룸" label="클린룸 적용 사례 보러가기" />
      <ProductNav activeTab="hvac" activeProduct="cleanroom" />

      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div
            ref={heroRef}
            className={`transition-all duration-1000 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <span className="text-[13px] tracking-[0.04em] uppercase text-[#C05010] block mb-3">
              HVAC · Cleanroom AHU
            </span>
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.08em] text-[#2d2a28] mb-6">
              클린룸 공조기
            </h2>
            <p className="text-sm text-[#5C6470] leading-relaxed mb-6">
              {t("hvac.cleanroom.description")}
            </p>
            <p className="text-sm text-[#5C6470] leading-relaxed mb-8">
              NBPKOREA 클린룸 공조기는 공정실 내부의 청정도, 온도, 습도, 차압을 하나의 시스템으로 관리하도록 설계됩니다.
              반도체 FAB, 디스플레이 라인, 제약 GMP 시설처럼 미세 입자와 외기 유입 통제가 중요한 현장에서 안정적인 생산 환경을 구현합니다.
            </p>
            <div className="flex flex-wrap gap-3">
              {heroTags.map((tag) => (
                <span key={tag} className="text-[14px] tracking-[0.04em] border border-[#D4DAE2] px-3 py-1 text-[#5C6470]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-300 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="relative aspect-[4/3] overflow-hidden bg-white border border-[#C05010]/30">
              <Image
                src={`${S3}/images/hvac/cleanroom.jpg`}
                alt="클린룸 공조기"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section ref={appRef} className="px-6 md:px-12 py-12 border-t border-[#D4DAE2] bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-6">{t("common.applications")}</p>
          <div className={`grid grid-cols-2 md:grid-cols-3 gap-3 transition-all duration-1000 ${appInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {applications.map((item) => (
              <div key={item} className="border border-[#D4DAE2] bg-white px-4 py-3 text-sm text-[#3D4450]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-12 bg-[#FAFAFA] border-y border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-6">Cleanroom Control Flow</p>
          <div className="flex flex-wrap items-center gap-2">
            {processFlow.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <div
                  className={`px-3 py-2 text-[14px] tracking-[0.05em] text-center ${
                    step === "HEPA / ULPA 여과" || step === "온습도 정밀 제어"
                      ? "bg-[#C05010] text-white"
                      : step === "양압 공급"
                        ? "bg-[#2d2a28] text-white"
                        : "bg-white border border-[#D4DAE2] text-[#5C6470]"
                  }`}
                >
                  {step}
                </div>
                {index < processFlow.length - 1 && <span className="text-[#C8D0DA]">→</span>}
              </div>
            ))}
          </div>
          <p className="text-[14px] text-[#5C6470] mt-4">
            필터링, 열원 제어, 차압 관리, 환기량 제어를 공정 요구조건에 맞춰 통합 설계합니다.
          </p>
        </div>
      </section>

      <section ref={featureRef} className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-8">{t("common.features")}</p>
          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-1000 ${featureInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-4 border border-[#D4DAE2]">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C05010] flex-shrink-0" />
                <span className="text-sm text-[#3D4450] leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={capabilityRef} className="px-6 md:px-12 py-16 bg-[#FAFAFA] border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-8">Key Capabilities</p>
          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-1000 ${capabilityInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {capabilityCards.map((card) => (
              <div key={card.title} className="border border-[#D4DAE2] bg-white p-5">
                <p className="text-[12px] tracking-[0.08em] uppercase text-[#5C6470] mb-3">{card.title}</p>
                <p className="text-xl font-light text-[#2d2a28] mb-3">{card.value}</p>
                <p className="text-sm leading-relaxed text-[#5C6470]">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-16 border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg tracking-[0.08em] font-light text-[#2d2a28] mb-2">클린룸 공조기 도입을 검토 중이신가요?</h3>
            <p className="text-sm text-[#5C6470]">청정도 기준, 풍량, 차압, 필터 등급에 맞춘 사양을 제안해 드립니다.</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/products?tab=hvac" className="btn-link group text-[#5C6470] text-xs tracking-[0.06em] uppercase">
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="rotate-180"><path d="M0 4H15M15 4L11 1M15 4L11 7" stroke="currentColor" strokeWidth="1"/></svg>
              {t("common.backToList")}
            </Link>
            <Link href="/support?type=catalog" className="text-xs tracking-[0.06em] uppercase border border-[#D4DAE2] px-6 py-3 text-[#5C6470] hover:border-[#C05010] hover:text-[#C05010] transition-all duration-300">
              카탈로그 신청
            </Link>
            <Link href="/support" className="text-xs tracking-[0.06em] uppercase bg-[#C05010] text-white px-6 py-3 hover:bg-[#2d2a28] transition-all duration-300">
              {t("common.contact")}
            </Link>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
