"use client";

import FloatingCaseLink from "@/components/FloatingCaseLink";
import ProductNav from "@/components/ProductNav";
import SubpageLayout from "@/components/SubpageLayout";
import { useInView } from "@/hooks/useInView";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

const heroTags = ["고온 산업로", "Gas + Oil 대응", "고부하 연소", "산업로 맞춤 설계"];
const applications = [
  "철강 가열로",
  "용해로",
  "유리 용해로",
  "로터리 킬른",
  "열처리로",
  "세라믹 소성로",
];
const processFlow = ["연료 공급", "버너 혼합", "고온 화염 형성", "로내 열전달", "공정 온도 유지"];
const features = [
  "철강·유리·세라믹 등 고온 공정용 산업로에 적합한 버너 구성",
  "Gas 단독 또는 Gas + Oil 이중연료 조건 검토 가능",
  "로 형상과 목표 온도 프로파일에 맞춘 화염 특성 설계 가능",
  "고부하 운전 조건에서도 안정적 화염 유지에 초점",
  "산업로 크기와 열수지에 맞춘 용량 선정 및 버너 배치 대응",
  "예열 공기, 배기 조건, 제어 방식과 연계한 시스템 설계 가능",
  "MIDCO, ECOSTAR 파트너십 기반 버너 옵션 검토 가능",
  "설계·제작·시운전·사후관리까지 통합 대응",
];
const capabilityCards = [
  { title: "Temperature Range", value: "High-Temperature Duty", description: "고온 열처리 및 용해 공정에 맞는 연소 조건을 구성합니다." },
  { title: "Fuel Options", value: "Gas / Dual Fuel", description: "현장 연료 사양과 운전 조건에 맞춰 연료 구성을 검토합니다." },
  { title: "Flame Design", value: "Process-Matched Flame", description: "로 길이, 버너 위치, 열부하에 맞는 화염 패턴을 제안합니다." },
  { title: "Field Engineering", value: "Furnace-Custom Layout", description: "산업로 구조와 생산 공정에 맞춘 맞춤 설계를 제공합니다." },
];

export default function FurnaceBurnerPage() {
  const t = useTranslations("products");
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: appRef, isInView: appInView } = useInView({ threshold: 0.1 });
  const { ref: featureRef, isInView: featureInView } = useInView({ threshold: 0.1 });
  const { ref: capabilityRef, isInView: capabilityInView } = useInView({ threshold: 0.1 });

  return (
    <SubpageLayout
      title={t("nav.furnaceBurner")}
      subtitle="Industrial Burner · Furnace Burner"
      breadcrumb={[
        { label: t("breadcrumb"), href: "/products" },
        { label: t("breadcrumbs.burner"), href: "/products?tab=burner" },
        { label: t("nav.furnaceBurner"), href: "/products/burner/furnace-burner" },
      ]}
    >
      <FloatingCaseLink category="burner" tag="로용 버너" label="로용 버너 적용 사례 보러가기" />
      <ProductNav activeTab="burner" activeProduct="furnace-burner" />

      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div ref={heroRef} className={`transition-all duration-1000 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <span className="text-[13px] tracking-[0.04em] uppercase text-[#C05010] block mb-3">Industrial Burner · Furnace Burner</span>
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.08em] text-[#2d2a28] mb-6">로용 버너</h2>
            <p className="text-sm text-[#5C6470] leading-relaxed mb-6">{t("burner.furnaceBurner.description")}</p>
            <p className="text-sm text-[#5C6470] leading-relaxed mb-8">
              로용 버너는 산업로 내부 열분포와 공정 온도 안정성이 핵심입니다. 엔비피코리아는 로 체적, 목표 온도,
              예열 공기 조건, 연료 사양을 함께 검토해 고온 공정에 맞는 버너 시스템을 제안합니다.
            </p>
            <div className="flex flex-wrap gap-3">
              {heroTags.map((tag) => (
                <span key={tag} className="text-[14px] tracking-[0.04em] border border-[#D4DAE2] px-3 py-1 text-[#5C6470]">{tag}</span>
              ))}
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-300 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="relative aspect-[4/3] overflow-hidden bg-white border border-[#C05010]/30">
              <Image src={`${S3}/images/burner/furnace-burner-main.jpg`} alt="로용 버너" fill className="object-cover" priority />
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
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-6">Furnace Burner Flow</p>
          <div className="flex flex-wrap items-center gap-2">
            {processFlow.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <div className={`px-3 py-2 text-[14px] tracking-[0.05em] text-center ${step === "고온 화염 형성" || step === "로내 열전달" ? "bg-[#C05010] text-white" : step === "공정 온도 유지" ? "bg-[#2d2a28] text-white" : "bg-white border border-[#D4DAE2] text-[#5C6470]"}`}>{step}</div>
                {index < processFlow.length - 1 && <span className="text-[#C8D0DA]">→</span>}
              </div>
            ))}
          </div>
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
            <h3 className="text-lg tracking-[0.08em] font-light text-[#2d2a28] mb-2">{t("burner.furnaceBurner.ctaTitle")}</h3>
            <p className="text-sm text-[#5C6470]">{t("burner.furnaceBurner.ctaDesc")}</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/products?tab=burner" className="btn-link group text-[#5C6470] text-xs tracking-[0.06em] uppercase">
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
