"use client";

import FloatingCaseLink from "@/components/FloatingCaseLink";
import ProductNav from "@/components/ProductNav";
import SubpageLayout from "@/components/SubpageLayout";
import { useInView } from "@/hooks/useInView";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

const heroTags = ["노점온도 -40℃ 이하", "초저습 환경", "2차전지 공정 특화", "정밀 습도 제어"];

const applications = [
  "전극 제조 공정",
  "셀 조립 공정",
  "활물질·전해질 취급 구역",
  "2차전지 파일럿 라인",
  "배터리 부품 보관 구역",
  "초저습 공정실",
];

const processFlow = [
  "외기 도입",
  "예냉 / 예열",
  "제습 단계",
  "재가열 · 공조 보정",
  "노점 관리",
  "드라이룸 공급",
];

const features = [
  "2차전지 제조 공정에 필요한 극저습 환경 유지에 최적화",
  "노점온도 -40℃ 이하 운전을 고려한 공조·제습 설계",
  "수분 민감 공정의 품질 안정성과 수율 확보에 기여",
  "공정 부하 변화에 대응하는 정밀 온습도 제어 로직 적용 가능",
  "가스 연소 기반 열원 활용으로 빠른 응답성과 에너지 효율 대응",
  "제습기, 재가열부, 송풍부를 포함한 통합 패키지 구성 가능",
  "라인 증설 계획까지 고려한 풍량·노점·실압 커스터마이징",
  "설계·제작·설치·TAB·유지관리까지 일괄 대응",
];

const capabilityCards = [
  {
    title: "Humidity Control",
    value: "Ultra-Low Dew Point",
    description: "공정 목표 노점에 맞춰 제습량과 재가열 조건을 함께 설계합니다.",
  },
  {
    title: "Process Stability",
    value: "Moisture Risk Reduction",
    description: "수분 반응에 민감한 소재와 조립 공정의 변동성을 낮추는 데 집중합니다.",
  },
  {
    title: "System Design",
    value: "Integrated AHU + Dehumidification",
    description: "공조와 제습, 열원, 제어를 분리하지 않고 통합적으로 검토합니다.",
  },
  {
    title: "Field Response",
    value: "Custom Engineering",
    description: "라인 규모, 외기 조건, 공정 발열, 실압 조건에 맞춘 맞춤 사양을 제안합니다.",
  },
];

export default function DryRoomPage() {
  const t = useTranslations("products");
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: appRef, isInView: appInView } = useInView({ threshold: 0.1 });
  const { ref: featureRef, isInView: featureInView } = useInView({ threshold: 0.1 });
  const { ref: capabilityRef, isInView: capabilityInView } = useInView({ threshold: 0.1 });

  return (
    <SubpageLayout
      title="드라이룸 공조기"
      subtitle={`${t("hvac.dryRoom.subtitle")} — Dry Room AHU`}
      breadcrumb={[
        { label: t("breadcrumb"), href: "/products" },
        { label: t("breadcrumbs.hvac"), href: "/products?tab=hvac" },
        { label: t("nav.dryRoom"), href: "/products/hvac/dry-room" },
      ]}
    >
      <FloatingCaseLink category="hvac" tag="드라이룸" label="드라이룸 공조기 적용 사례 보러가기" />
      <ProductNav activeTab="hvac" activeProduct="dry-room" />

      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div
            ref={heroRef}
            className={`transition-all duration-1000 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <span className="text-[13px] tracking-[0.04em] uppercase text-[#C05010] block mb-3">
              HVAC · Dry Room AHU
            </span>
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.08em] text-[#2d2a28] mb-6">
              드라이룸 공조기
            </h2>
            <p className="text-sm text-[#5C6470] leading-relaxed mb-6">
              {t("hvac.dryRoom.description")}
            </p>
            <p className="text-sm text-[#5C6470] leading-relaxed mb-8">
              전극, 조립, 보관 공정 전반에서 수분 관리는 배터리 품질과 직결됩니다.
              엔비피코리아 드라이룸 공조기는 외기 조건과 공정 부하 변화에도 안정적인 극저습 상태를 유지하도록 제습, 재가열, 풍량 제어를 통합적으로 설계합니다.
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
                src={`${S3}/images/hvac/dry-room-main.jpg`}
                alt="드라이룸 공조기"
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
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-6">Dry Room Air Treatment Flow</p>
          <div className="flex flex-wrap items-center gap-2">
            {processFlow.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <div
                  className={`px-3 py-2 text-[14px] tracking-[0.05em] text-center ${
                    step === "제습 단계" || step === "노점 관리"
                      ? "bg-[#C05010] text-white"
                      : step === "드라이룸 공급"
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
            외기 상태와 공정 부하 변동을 고려해 제습, 재가열, 순환풍 제어를 함께 조정하는 구조를 기준으로 설계합니다.
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
            <h3 className="text-lg tracking-[0.08em] font-light text-[#2d2a28] mb-2">드라이룸 공조기 도입을 검토 중이신가요?</h3>
            <p className="text-sm text-[#5C6470]">목표 노점, 처리 풍량, 실압, 공정 조건에 맞는 사양을 제안해 드립니다.</p>
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
