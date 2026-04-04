"use client";

import FloatingCaseLink from "@/components/FloatingCaseLink";
import ProductNav from "@/components/ProductNav";
import SubpageLayout from "@/components/SubpageLayout";
import { useInView } from "@/hooks/useInView";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

const heroTags = ["냉각제습 + 가스가열", "4계절 복합 운전", "고습 환경 대응", "통합 패키지"];

const applications = [
  "선박 블록 공장",
  "도장 작업장",
  "클린룸 보조 제습",
  "저장창고",
  "고습 생산공정",
  "온습도 관리 필요 구역",
];

const processFlow = [
  "고습 공기 유입",
  "냉각 제습",
  "재가열",
  "풍량 조절",
  "저습 공기 공급",
];

const features = [
  "냉각 제습과 가스 가열을 결합한 복합형 공조 시스템",
  "4계절 운전을 고려한 제습·재가열 통합 패키지 구성 가능",
  "고습 환경에서 작업성, 제품 품질, 설비 안정성 확보에 기여",
  "선박·도장·창고·클린룸 등 다양한 현장에 적용 가능",
  "직화식 열원을 활용해 재가열 응답성과 에너지 효율 대응 가능",
  "처리 풍량과 목표 습도에 따른 맞춤형 장비 구성 가능",
  "루버, 댐퍼, 냉각부, 가열부, 송풍부 일체형 설계 가능",
  "설계·제작·설치·시운전·A/S까지 일괄 대응",
];

const capabilityCards = [
  {
    title: "Dehumidification",
    value: "Cooling + Reheat",
    description: "제습 후 재가열을 통해 필요한 온습도 상태로 공기를 공급합니다.",
  },
  {
    title: "Seasonal Operation",
    value: "All-Season Use",
    description: "계절별 외기 변화에 대응할 수 있도록 복합 운전 구성을 검토합니다.",
  },
  {
    title: "Package Design",
    value: "Integrated Unit",
    description: "여러 공조 요소를 하나의 시스템 안에서 통합 설계할 수 있습니다.",
  },
  {
    title: "Field Tuning",
    value: "Custom Airflow & RH",
    description: "현장 목표 습도와 처리 풍량 조건에 맞춘 개별 사양을 제안합니다.",
  },
];

export default function HvacDehumidifierPage() {
  const t = useTranslations("products");
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: appRef, isInView: appInView } = useInView({ threshold: 0.1 });
  const { ref: featureRef, isInView: featureInView } = useInView({ threshold: 0.1 });
  const { ref: capabilityRef, isInView: capabilityInView } = useInView({ threshold: 0.1 });

  return (
    <SubpageLayout
      title="복합식 제습기"
      subtitle={`${t("hvac.dehumidifier.subtitle")} — Combined Dehumidifier`}
      breadcrumb={[
        { label: t("breadcrumb"), href: "/products" },
        { label: t("breadcrumbs.hvac"), href: "/products?tab=hvac" },
        { label: t("nav.dehumidifier"), href: "/products/hvac/dehumidifier" },
      ]}
    >
      <FloatingCaseLink category="hvac" tag="제습기" label="제습기 적용 사례 보러가기" />
      <ProductNav activeTab="hvac" activeProduct="dehumidifier" />

      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div ref={heroRef} className={`transition-all duration-1000 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <span className="text-[13px] tracking-[0.04em] uppercase text-[#C05010] block mb-3">HVAC · Combined Dehumidifier</span>
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.08em] text-[#2d2a28] mb-6">복합식 제습기</h2>
            <p className="text-sm text-[#5C6470] leading-relaxed mb-6">{t("hvac.dehumidifier.description")}</p>
            <p className="text-sm text-[#5C6470] leading-relaxed mb-8">
              단순 제습만으로는 부족한 현장에서는 냉각, 제습, 재가열, 송풍이 함께 고려되어야 합니다.
              엔비피코리아 복합식 제습기는 고습 환경의 작업성과 품질 유지를 위해 공조와 열원을 통합한 패키지형 솔루션으로 구성됩니다.
            </p>
            <div className="flex flex-wrap gap-3">
              {heroTags.map((tag) => (
                <span key={tag} className="text-[14px] tracking-[0.04em] border border-[#D4DAE2] px-3 py-1 text-[#5C6470]">{tag}</span>
              ))}
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-300 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="relative aspect-[4/3] overflow-hidden bg-white border border-[#C05010]/30">
              <Image src={`${S3}/images/humidremover.jpg`} alt="복합식 제습기" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      <section ref={appRef} className="px-6 md:px-12 py-12 border-t border-[#D4DAE2] bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-6">{t("common.applications")}</p>
          <div className={`grid grid-cols-2 md:grid-cols-3 gap-3 transition-all duration-1000 ${appInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {applications.map((item) => (
              <div key={item} className="border border-[#D4DAE2] bg-white px-4 py-3 text-sm text-[#3D4450]">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-12 bg-[#FAFAFA] border-y border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-6">Combined Dehumidification Flow</p>
          <div className="flex flex-wrap items-center gap-2">
            {processFlow.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <div className={`px-3 py-2 text-[14px] tracking-[0.05em] text-center ${step === "냉각 제습" || step === "재가열" ? "bg-[#C05010] text-white" : step === "저습 공기 공급" ? "bg-[#2d2a28] text-white" : "bg-white border border-[#D4DAE2] text-[#5C6470]"}`}>{step}</div>
                {index < processFlow.length - 1 && <span className="text-[#C8D0DA]">→</span>}
              </div>
            ))}
          </div>
          <p className="text-[14px] text-[#5C6470] mt-4">제습과 재가열을 함께 운전해 필요한 습도와 공급 공기 조건을 동시에 맞추는 구조입니다.</p>
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
            <h3 className="text-lg tracking-[0.08em] font-light text-[#2d2a28] mb-2">복합식 제습기 도입을 검토 중이신가요?</h3>
            <p className="text-sm text-[#5C6470]">목표 습도, 처리 풍량, 가열 조건을 반영한 사양을 제안해 드립니다.</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/products?tab=hvac" className="btn-link group text-[#5C6470] text-xs tracking-[0.06em] uppercase">
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="rotate-180"><path d="M0 4H15M15 4L11 1M15 4L11 7" stroke="currentColor" strokeWidth="1"/></svg>
              {t("common.backToList")}
            </Link>
            <Link href="/support?type=catalog" className="text-xs tracking-[0.06em] uppercase border border-[#D4DAE2] px-6 py-3 text-[#5C6470] hover:border-[#C05010] hover:text-[#C05010] transition-all duration-300">카탈로그 신청</Link>
            <Link href="/support" className="text-xs tracking-[0.06em] uppercase bg-[#C05010] text-white px-6 py-3 hover:bg-[#2d2a28] transition-all duration-300">{t("common.contact")}</Link>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
