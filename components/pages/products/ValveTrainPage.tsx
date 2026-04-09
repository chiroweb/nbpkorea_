"use client";

import FloatingCaseLink from "@/components/FloatingCaseLink";
import ProductNav from "@/components/ProductNav";
import SubpageLayout from "@/components/SubpageLayout";
import { useInView } from "@/hooks/useInView";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

const content = {
  en: {
    title: "Valve Train / Parts",
    heroTags: ["Gas Control System", "Safety Shut-off", "Precision Instrumentation", "Site-Specific Assembly"],
    applications: ["Industrial Burners", "Gas Heaters", "Ovens & Dryers", "Combustion Control Panels", "New Equipment Construction", "Existing Equipment Parts Replacement"],
    processFlow: ["Gas Inlet", "Filter / Regulator", "Safety Shut-off", "Flow Control", "Burner Supply"],
    processHighlight: ["Safety Shut-off", "Flow Control"],
    processEnd: "Burner Supply",
    features: [
      "Core components for safe and precise gas supply control of industrial burners",
      "Configurable combination of gas valves, regulators, safety shut-off devices, igniters, and flame detectors",
      "Valve train design matched to site fuel type and pressure conditions",
      "Parts supply available for both new equipment and existing equipment repair/replacement",
      "Contributes to gas system stability and operational interlock reliability improvement",
      "Configuration review available based on MIDCO, ECOSTAR partner genuine parts",
      "Modular assembly reflecting site equipment specifications and piping conditions",
      "End-to-end support: design, procurement, assembly, and field application",
    ],
    capabilityCards: [
      { title: "Gas Safety", value: "Shut-off & Regulation", description: "Safety shut-off and pressure control of gas supply systems are considered together." },
      { title: "Component Scope", value: "Valve Train Assembly", description: "Integrated configuration including valves, regulators, sensors, and igniters is possible." },
      { title: "Retrofit Support", value: "Replacement & Upgrade", description: "Replacement and upgrade of aging parts in existing equipment is also supported." },
      { title: "Field Matching", value: "Site-Specific Combination", description: "Combinations are proposed to match gas type, pressure, and equipment specifications." },
    ],
    bodyText: "The valve train is the core that determines the safety and control quality of a combustion system. NBPKOREA provides site-customized gas control configurations based on fuel conditions, equipment specifications, piping pressure, and operational interlock conditions.",
    imgAlt: "Valve Train",
    floatingLabel: "View Valve Train Case Studies",
  },
  ko: {
    title: "밸브트레인 / 부품류",
    heroTags: ["가스 제어 시스템", "안전 차단", "정밀 계장", "현장 맞춤 조합"],
    applications: ["산업용 버너", "가스히터", "오븐 및 건조기", "연소 제어반", "신규 설비 구축", "기존 설비 부품 교체"],
    processFlow: ["가스 유입", "필터 / 레귤레이터", "안전 차단", "유량 제어", "버너 공급"],
    processHighlight: ["안전 차단", "유량 제어"],
    processEnd: "버너 공급",
    features: [
      "산업용 버너의 가스 공급을 안전하고 정밀하게 제어하는 핵심 구성품",
      "가스 밸브, 레귤레이터, 안전차단장치, 점화부, 화염 감지부 조합 가능",
      "현장 연료 종류와 압력 조건에 맞춘 밸브트레인 설계 가능",
      "신규 장비 구성뿐 아니라 기존 설비 보수·교체용 부품 공급 가능",
      "가스 계통 안정성과 운전 인터록 신뢰성 향상에 기여",
      "MIDCO, ECOSTAR 등 파트너 정품 부품 기반 구성 검토 가능",
      "현장 장비 규격과 배관 조건을 반영한 모듈화 조합 가능",
      "설계, 조달, 조립, 현장 적용까지 일괄 대응",
    ],
    capabilityCards: [
      { title: "Gas Safety", value: "Shut-off & Regulation", description: "가스 공급 계통의 안전 차단과 압력 제어를 함께 고려합니다." },
      { title: "Component Scope", value: "Valve Train Assembly", description: "밸브, 레귤레이터, 센서, 점화부를 포함한 일체 구성이 가능합니다." },
      { title: "Retrofit Support", value: "Replacement & Upgrade", description: "기존 설비의 노후 부품 교체와 업그레이드에도 대응합니다." },
      { title: "Field Matching", value: "Site-Specific Combination", description: "가스 종류, 압력, 장비 규격에 맞춘 조합을 제안합니다." },
    ],
    bodyText: "밸브트레인은 연소 시스템의 안전과 제어 품질을 좌우하는 핵심입니다. 엔비피코리아는 연료 조건, 장비 규격, 배관 압력, 운전 인터록 조건을 기준으로 현장 맞춤형 가스 제어 구성을 제공합니다.",
    imgAlt: "밸브트레인",
    floatingLabel: "벨브트레인 적용 사례 보러가기",
  },
};

export default function ValveTrainPage() {
  const t = useTranslations("products");
  const locale = useLocale() as "en" | "ko";
  const c = content[locale] ?? content.ko;
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: appRef, isInView: appInView } = useInView({ threshold: 0.1 });
  const { ref: featureRef, isInView: featureInView } = useInView({ threshold: 0.1 });
  const { ref: capabilityRef, isInView: capabilityInView } = useInView({ threshold: 0.1 });

  return (
    <SubpageLayout
      title={t("nav.valveTrain")}
      subtitle="Industrial Burner · Valve Train & Parts"
      breadcrumb={[
        { label: t("breadcrumb"), href: "/products" },
        { label: t("breadcrumbs.burner"), href: "/products?tab=burner" },
        { label: t("nav.valveTrain"), href: "/products/burner/valve-train" },
      ]}
    >
      <FloatingCaseLink category="burner" tag={locale === "en" ? "Valve Train" : "벨브트레인"} label={c.floatingLabel} />
      <ProductNav activeTab="burner" activeProduct="valve-train" />

      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div ref={heroRef} className={`transition-all duration-1000 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <span className="text-[13px] tracking-[0.04em] uppercase text-[#C05010] block mb-3">Industrial Burner · Valve Train & Parts</span>
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.08em] text-[#2d2a28] mb-6">{c.title}</h2>
            <p className="text-sm text-[#5C6470] leading-relaxed mb-6">{t("burner.valveTrain.description")}</p>
            <p className="text-sm text-[#5C6470] leading-relaxed mb-8">
              {c.bodyText}
            </p>
            <div className="flex flex-wrap gap-3">
              {c.heroTags.map((tag) => (
                <span key={tag} className="text-[14px] tracking-[0.04em] border border-[#D4DAE2] px-3 py-1 text-[#5C6470]">{tag}</span>
              ))}
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-300 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="relative aspect-[4/3] overflow-hidden bg-white border border-[#C05010]/30">
              <Image src={`${S3}/images/burner/valve-train-main.jpg`} alt={c.imgAlt} fill className="object-cover" priority  unoptimized />
            </div>
          </div>
        </div>
      </section>

      <section ref={appRef} className="px-6 md:px-12 py-12 border-t border-[#D4DAE2] bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-6">{t("common.applications")}</p>
          <div className={`grid grid-cols-2 md:grid-cols-3 gap-3 transition-all duration-1000 ${appInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {c.applications.map((item) => (
              <div key={item} className="border border-[#D4DAE2] bg-white px-4 py-3 text-sm text-[#3D4450]">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-12 bg-[#FAFAFA] border-y border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-6">Valve Train Control Flow</p>
          <div className="flex flex-wrap items-center gap-2">
            {c.processFlow.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <div className={`px-3 py-2 text-[14px] tracking-[0.05em] text-center ${c.processHighlight.includes(step) ? "bg-[#C05010] text-white" : step === c.processEnd ? "bg-[#2d2a28] text-white" : "bg-white border border-[#D4DAE2] text-[#5C6470]"}`}>{step}</div>
                {index < c.processFlow.length - 1 && <span className="text-[#C8D0DA]">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={featureRef} className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-8">{t("common.features")}</p>
          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-1000 ${featureInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {c.features.map((feature, index) => (
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
            {c.capabilityCards.map((card) => (
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
            <h3 className="text-lg tracking-[0.08em] font-light text-[#2d2a28] mb-2">{t("burner.valveTrain.ctaTitle")}</h3>
            <p className="text-sm text-[#5C6470]">{t("burner.valveTrain.ctaDesc")}</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/products?tab=burner" className="btn-link group text-[#5C6470] text-xs tracking-[0.06em] uppercase">
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="rotate-180"><path d="M0 4H15M15 4L11 1M15 4L11 7" stroke="currentColor" strokeWidth="1"/></svg>
              {t("common.backToList")}
            </Link>
            <Link href="/support?type=catalog" className="text-xs tracking-[0.06em] uppercase border border-[#D4DAE2] px-6 py-3 text-[#5C6470] hover:border-[#C05010] hover:text-[#C05010] transition-all duration-300">{t("common.catalog")}</Link>
            <Link href="/support" className="text-xs tracking-[0.06em] uppercase bg-[#C05010] text-white px-6 py-3 hover:bg-[#2d2a28] transition-all duration-300">{t("common.contact")}</Link>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
