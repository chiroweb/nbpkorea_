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
    title: "Combined Dehumidifier",
    heroTags: ["Cooling Dehumidification + Gas Heating", "All-Season Operation", "High-Humidity Environment", "Integrated Package"],
    applications: [
      "Ship Block Factory",
      "Paint Workshop",
      "Cleanroom Supplementary Dehumidification",
      "Storage Warehouse",
      "High-Humidity Production Process",
      "Temp/RH Controlled Zone",
    ],
    processFlow: [
      "Humid Air Intake",
      "Cooling Dehumidification",
      "Reheat",
      "Airflow Adjustment",
      "Low-Humidity Air Supply",
    ],
    processHighlight: ["Cooling Dehumidification", "Reheat"],
    processEnd: "Low-Humidity Air Supply",
    features: [
      "Combined HVAC system integrating cooling dehumidification and gas heating",
      "Dehumidification and reheat integrated package for all-season operation",
      "Contributes to workability, product quality, and equipment stability in high-humidity environments",
      "Applicable to diverse sites: shipbuilding, paint, warehouse, and cleanroom applications",
      "Direct-fired heat source for responsive reheat and energy efficiency",
      "Custom equipment configuration based on target humidity and airflow requirements",
      "Integrated design of louver, damper, cooling section, heating section, and blower",
      "End-to-end support: design, fabrication, installation, commissioning, and after-service",
    ],
    capabilityCards: [
      { title: "Dehumidification", value: "Cooling + Reheat", description: "Supplies air at the required temperature and humidity conditions through dehumidification followed by reheat." },
      { title: "Seasonal Operation", value: "All-Season Use", description: "Combined operation configurations are reviewed to respond to seasonal outdoor air changes." },
      { title: "Package Design", value: "Integrated Unit", description: "Multiple HVAC elements can be designed within a single integrated system." },
      { title: "Field Tuning", value: "Custom Airflow & RH", description: "Individual specifications proposed to match site target humidity and airflow conditions." },
    ],
    coreModules: [
      { title: "Cooling Coil", description: "Primary dehumidification stage that condenses moisture from the air, handling high-humidity outdoor air." },
      { title: "Reheat Section", description: "Re-adjusts supply air temperature after dehumidification to match site usage conditions." },
      { title: "Filter / Blower Section", description: "Manages air cleanliness and airflow volume together to maintain stable supply conditions." },
      { title: "Damper / Control Section", description: "Adjusts outdoor, return, and recirculation air ratios to respond to seasonal operating conditions." },
    ],
    operationModes: [
      { title: "Summer Dehumidification", description: "Combines cooling dehumidification and reheat to maintain target humidity against hot and humid outdoor air." },
      { title: "Winter Correction", description: "Operates to maintain required supply temperature while preventing overcooling in low-temperature outdoor conditions." },
      { title: "Intermittent Operation", description: "Partial operation for condensation prevention and preservation environment during equipment idle periods can be reviewed." },
      { title: "Quality Maintenance", description: "Continuous dehumidification and supply air conditions are adjusted to match target RH for each warehouse, paint, or production process." },
    ],
    specGuide: [
      { label: "Dehumidification Method", value: "Cooling + Reheat" },
      { label: "Application Space", value: "Paint · Warehouse · Supplementary HVAC" },
      { label: "Control Items", value: "RH / Temp / Airflow" },
      { label: "Operation Mode", value: "All-Season Combined Operation" },
    ],
    bodyText: "Where simple dehumidification alone is insufficient, cooling, dehumidification, reheat, and air supply must be considered together. The NBPKOREA Combined Dehumidifier is configured as a package solution integrating HVAC and heat source to maintain workability and quality in high-humidity environments.",
    flowNote: "Operates dehumidification and reheat together to simultaneously achieve the required humidity and supply air conditions.",
    specNote: "The combined dehumidifier operates cooling, dehumidification, reheat, and air supply as a single package rather than separate systems. Airflow capacity and reheat conditions are designed by reviewing seasonal outdoor air changes and site target RH together.",
    ctaTitle: "Considering a Combined Dehumidifier?",
    ctaDesc: "We will propose specifications reflecting your target humidity, airflow capacity, and heating conditions.",
    floatingLabel: "View Dehumidifier Case Studies",
    imgAlt: "Combined Dehumidifier",
  },
  ko: {
    title: "복합식 제습기",
    heroTags: ["냉각제습 + 가스가열", "4계절 복합 운전", "고습 환경 대응", "통합 패키지"],
    applications: [
      "선박 블록 공장",
      "도장 작업장",
      "클린룸 보조 제습",
      "저장창고",
      "고습 생산공정",
      "온습도 관리 필요 구역",
    ],
    processFlow: [
      "고습 공기 유입",
      "냉각 제습",
      "재가열",
      "풍량 조절",
      "저습 공기 공급",
    ],
    processHighlight: ["냉각 제습", "재가열"],
    processEnd: "저습 공기 공급",
    features: [
      "냉각 제습과 가스 가열을 결합한 복합형 공조 시스템",
      "4계절 운전을 고려한 제습·재가열 통합 패키지 구성 가능",
      "고습 환경에서 작업성, 제품 품질, 설비 안정성 확보에 기여",
      "선박·도장·창고·클린룸 등 다양한 현장에 적용 가능",
      "직화식 열원을 활용해 재가열 응답성과 에너지 효율 대응 가능",
      "처리 풍량과 목표 습도에 따른 맞춤형 장비 구성 가능",
      "루버, 댐퍼, 냉각부, 가열부, 송풍부 일체형 설계 가능",
      "설계·제작·설치·시운전·A/S까지 일괄 대응",
    ],
    capabilityCards: [
      { title: "Dehumidification", value: "Cooling + Reheat", description: "제습 후 재가열을 통해 필요한 온습도 상태로 공기를 공급합니다." },
      { title: "Seasonal Operation", value: "All-Season Use", description: "계절별 외기 변화에 대응할 수 있도록 복합 운전 구성을 검토합니다." },
      { title: "Package Design", value: "Integrated Unit", description: "여러 공조 요소를 하나의 시스템 안에서 통합 설계할 수 있습니다." },
      { title: "Field Tuning", value: "Custom Airflow & RH", description: "현장 목표 습도와 처리 풍량 조건에 맞춘 개별 사양을 제안합니다." },
    ],
    coreModules: [
      { title: "냉각 코일", description: "공기 중 수분을 응축시키는 1차 제습 단계로 고습 외기에 대응합니다." },
      { title: "재가열부", description: "제습 후 공급 공기의 온도를 다시 보정해 현장 사용 조건에 맞춥니다." },
      { title: "필터·송풍부", description: "공기 청정도와 처리 풍량을 함께 관리해 안정적인 공급 상태를 유지합니다." },
      { title: "댐퍼·제어부", description: "외기, 환기, 순환풍 비율을 조정해 계절별 운전 조건에 대응합니다." },
    ],
    operationModes: [
      { title: "여름철 제습", description: "고온다습 외기에 대해 냉각 제습과 재가열을 결합해 목표 습도를 유지합니다." },
      { title: "겨울철 보정", description: "저온 외기 조건에서도 과냉을 방지하며 필요한 공급 온도를 유지하도록 운전합니다." },
      { title: "간헐 운전", description: "장비 비가동 시간대 결로 방지와 보존 환경 유지를 위한 부분 운전을 검토할 수 있습니다." },
      { title: "품질 유지", description: "창고, 도장, 생산공정별 목표 RH에 맞춰 연속 제습과 공급 공기 조건을 조정합니다." },
    ],
    specGuide: [
      { label: "제습 방식", value: "Cooling + Reheat" },
      { label: "적용 공간", value: "도장·창고·보조 공조" },
      { label: "제어 항목", value: "RH / Temp / Airflow" },
      { label: "운전 형태", value: "사계절 복합 운전" },
    ],
    bodyText: "단순 제습만으로는 부족한 현장에서는 냉각, 제습, 재가열, 송풍이 함께 고려되어야 합니다. 엔비피코리아 복합식 제습기는 고습 환경의 작업성과 품질 유지를 위해 공조와 열원을 통합한 패키지형 솔루션으로 구성됩니다.",
    flowNote: "제습과 재가열을 함께 운전해 필요한 습도와 공급 공기 조건을 동시에 맞추는 구조입니다.",
    specNote: "복합식 제습기는 냉각, 제습, 재가열, 송풍을 분리하지 않고 하나의 패키지로 운영하는 장비입니다. 계절별 외기 변화와 현장 목표 RH를 함께 검토해 처리 풍량과 재가열 조건을 설계합니다.",
    ctaTitle: "복합식 제습기 도입을 검토 중이신가요?",
    ctaDesc: "목표 습도, 처리 풍량, 가열 조건을 반영한 사양을 제안해 드립니다.",
    floatingLabel: "제습기 적용 사례 보러가기",
    imgAlt: "복합식 제습기",
  },
};

export default function HvacDehumidifierPage() {
  const t = useTranslations("products");
  const locale = useLocale() as "en" | "ko";
  const c = content[locale] ?? content.ko;
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: appRef, isInView: appInView } = useInView({ threshold: 0.1 });
  const { ref: featureRef, isInView: featureInView } = useInView({ threshold: 0.1 });
  const { ref: capabilityRef, isInView: capabilityInView } = useInView({ threshold: 0.1 });

  return (
    <SubpageLayout
      title={c.title}
      subtitle={`${t("hvac.dehumidifier.subtitle")} — Combined Dehumidifier`}
      breadcrumb={[
        { label: t("breadcrumb"), href: "/products" },
        { label: t("breadcrumbs.hvac"), href: "/products?tab=hvac" },
        { label: t("nav.dehumidifier"), href: "/products/hvac/dehumidifier" },
      ]}
    >
      <FloatingCaseLink category="hvac" tag="복합식 제습기" label={c.floatingLabel} />
      <ProductNav activeTab="hvac" activeProduct="dehumidifier" />

      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div ref={heroRef} className={`transition-all duration-1000 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <span className="text-[13px] tracking-[0.04em] uppercase text-[#C05010] block mb-3">HVAC · Combined Dehumidifier</span>
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.08em] text-[#2d2a28] mb-6">{c.title}</h2>
            <p className="text-sm text-[#5C6470] leading-relaxed mb-6">{t("hvac.dehumidifier.description")}</p>
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
              <Image src={`${S3}/images/humidremover.jpg`} alt={c.imgAlt} fill className="object-cover" priority  unoptimized />
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
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-6">Combined Dehumidification Flow</p>
          <div className="flex flex-wrap items-center gap-2">
            {c.processFlow.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <div className={`px-3 py-2 text-[14px] tracking-[0.05em] text-center ${
                  c.processHighlight.includes(step)
                    ? "bg-[#C05010] text-white"
                    : step === c.processEnd
                      ? "bg-[#2d2a28] text-white"
                      : "bg-white border border-[#D4DAE2] text-[#5C6470]"
                }`}>{step}</div>
                {index < c.processFlow.length - 1 && <span className="text-[#C8D0DA]">→</span>}
              </div>
            ))}
          </div>
          <p className="text-[14px] text-[#5C6470] mt-4">{c.flowNote}</p>
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
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-8">{t("common.coreModules")}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {c.coreModules.map((item) => (
              <div key={item.title} className="border border-[#D4DAE2] bg-white p-5">
                <p className="text-sm tracking-[0.06em] text-[#2d2a28] mb-3">{item.title}</p>
                <p className="text-sm leading-relaxed text-[#5C6470]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-16 bg-[#FAFAFA] border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-8">{t("common.operationPoints")}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {c.operationModes.map((item) => (
              <div key={item.title} className="border border-[#D4DAE2] bg-white p-5">
                <p className="text-sm tracking-[0.06em] text-[#2d2a28] mb-3">{item.title}</p>
                <p className="text-sm leading-relaxed text-[#5C6470]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-16 border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-6">{t("common.specifications")}</p>
          <div className="border border-[#D4DAE2] bg-white p-6">
            <p className="text-sm text-[#5C6470] leading-relaxed">
              {c.specNote}
            </p>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {c.specGuide.map((item) => (
                <div key={item.label} className="border border-[#E8ECF0] p-3">
                  <span className="text-[13px] tracking-[0.12em] uppercase text-[#C8D0DA] block mb-1">{item.label}</span>
                  <span className="text-xs text-[#2d2a28]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-16 border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg tracking-[0.08em] font-light text-[#2d2a28] mb-2">{c.ctaTitle}</h3>
            <p className="text-sm text-[#5C6470]">{c.ctaDesc}</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/products?tab=hvac" className="btn-link group text-[#5C6470] text-xs tracking-[0.06em] uppercase">
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="rotate-180"><path d="M0 4H15M15 4L11 1M15 4L11 7" stroke="currentColor" strokeWidth="1"/></svg>
              {t("common.backToList")}
            </Link>
            <Link href="/support?type=catalog" className="text-xs tracking-[0.06em] uppercase border border-[#D4DAE2] px-6 py-3 text-[#5C6470] hover:border-[#C05010] hover:text-[#C05010] transition-all duration-300">
              {t("common.catalog")}
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
