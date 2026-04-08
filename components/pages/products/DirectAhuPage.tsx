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
    title: "Direct-Fired AHU",
    heroTags: ["Direct-Fired Heating", "High-Efficiency Heat Transfer", "Rapid Temperature Rise", "PLC Modulating Control"],
    applications: [
      "Automotive Paint Line",
      "Shipbuilding Block Workshop",
      "Logistics Center / Warehouse",
      "Large Manufacturing Process Room",
      "Drying / Heating Process Zone",
      "Rapid Heat-Up Required Sites",
    ],
    processFlow: [
      "Outdoor / Return Air",
      "Burner Combustion",
      "Direct Heat Transfer",
      "Airflow / Temp Control",
      "Process / Indoor Supply",
    ],
    processHighlight: ["Burner Combustion", "Direct Heat Transfer"],
    processEnd: "Process / Indoor Supply",
    features: [
      "Delivers combustion heat directly without heat exchanger loss, ideal for rapid temperature rise",
      "Suitable for industrial sites requiring high-volume air handling and fast thermal response",
      "PLC modulating control enables precise target temperature regulation",
      "Applicable to large-space HVAC systems in automotive, shipbuilding, and logistics facilities",
      "Airflow and heating capacity customized to equipment scale and site conditions",
      "Gas-fired heat source offers improved operating efficiency compared to electric heaters",
      "Package-type HVAC configuration integrating ductwork, filters, and blower section",
      "End-to-end support: design, fabrication, installation, commissioning, and maintenance",
    ],
    capabilityCards: [
      { title: "Heating Response", value: "Rapid Temperature Rise", description: "Effective at reducing initial heat-up time for large spaces and process lines." },
      { title: "Thermal Efficiency", value: "Direct Heat Transfer", description: "Direct-fired method reduces heat exchange losses for high-efficiency operation." },
      { title: "System Control", value: "PLC Modulating", description: "Airflow and temperature can be continuously adjusted in response to load changes." },
      { title: "Field Engineering", value: "Custom AHU Design", description: "Custom design proposed based on heating capacity, airflow, installation space, and process conditions." },
    ],
    coreModules: [
      { title: "Burner Section", description: "Integrates the direct-fired combustion unit and safety devices for rapid heat-up and stable heat supply." },
      { title: "Damper / Mixing Section", description: "Adjusts the mixing ratio of outdoor and return air to achieve the required supply air conditions." },
      { title: "Blower Section", description: "Fan capacity and duct integration are designed to match the required airflow and static pressure." },
      { title: "Automatic Control", description: "PLC, temperature controller, and interlocks work together to control combustion and airflow." },
    ],
    designPoints: [
      { title: "Ventilation Conditions", description: "Heating capacity and airflow are calculated reflecting outdoor air ratio, exhaust linkage, and indoor pressure conditions." },
      { title: "Heat-Up Speed", description: "Burner capacity is reviewed based on the time required to reach target temperature and load variability." },
      { title: "Safety Design", description: "System is configured with combustion safety devices, gas interlocks, and high-temperature protection logic." },
      { title: "Installation Space", description: "Casing and maintenance access are reviewed according to outdoor, rooftop, or indoor installation conditions." },
    ],
    specGuide: [
      { label: "Heating Method", value: "Direct-Fired Heating" },
      { label: "Application Space", value: "Paint · Shipbuilding · Large Space" },
      { label: "Control Items", value: "Temp / Airflow / Gas Control" },
      { label: "Configuration", value: "Custom Package Build" },
    ],
    bodyText: "Direct-fired AHUs are particularly advantageous where large volumes of air need to be heated rapidly. NBPKOREA designs custom AHUs reflecting site-specific temperature, airflow, installation space, and control requirements — from automotive paint lines to shipbuilding and logistics facilities.",
    flowNote: "Combines direct-fired heating and blower control to rapidly establish the required temperature conditions.",
    specNote: "While direct-fired AHUs excel at rapid heat-up and high-volume air handling, ventilation rates and combustion safety conditions must also be carefully considered. Heating capacity and control configuration are custom-designed based on the purpose — whether process ventilation, heating, or drying.",
    ctaTitle: "Considering a Direct-Fired AHU?",
    ctaDesc: "We will propose optimal specifications matched to your heating capacity, airflow, control method, and installation environment.",
    floatingLabel: "View Direct-Fired AHU Case Studies",
    imgAlt: "Direct-Fired AHU",
  },
  ko: {
    title: "직화식 공조기",
    heroTags: ["직화 가열", "고효율 열전달", "빠른 승온", "PLC 비례제어"],
    applications: [
      "자동차 도장 라인",
      "조선 블록 작업장",
      "물류센터·창고",
      "대형 제조 공정실",
      "건조·가열 공정 구역",
      "급속 승온 필요 현장",
    ],
    processFlow: [
      "외기 / 환기 공기",
      "버너 연소",
      "직접 열전달",
      "풍량 · 온도 제어",
      "공정 / 실내 공급",
    ],
    processHighlight: ["버너 연소", "직접 열전달"],
    processEnd: "공정 / 실내 공급",
    features: [
      "열교환 손실 없이 연소열을 직접 전달해 빠른 승온에 유리",
      "대풍량 처리와 고속 응답이 필요한 산업 현장에 적합",
      "PLC 비례제어 기반으로 목표 온도 정밀 제어 가능",
      "자동차·조선·물류 등 대공간 공조 시스템에 적용 가능",
      "설비 규모와 현장 조건에 맞춘 풍량·열량 커스터마이징 대응",
      "가스 열원 기반으로 전기히터 대비 운영 효율 개선 검토 가능",
      "덕트, 필터, 송풍부와 연계한 패키지형 공조 구성 가능",
      "설계·제작·설치·시운전·유지관리까지 통합 대응",
    ],
    capabilityCards: [
      { title: "Heating Response", value: "Rapid Temperature Rise", description: "대공간이나 공정 라인의 초기 승온 시간을 줄이는 데 유리합니다." },
      { title: "Thermal Efficiency", value: "Direct Heat Transfer", description: "열교환 손실을 줄이는 직화 방식으로 고효율 운전을 구성합니다." },
      { title: "System Control", value: "PLC Modulating", description: "부하 변화에 따라 풍량과 온도를 연속적으로 조정할 수 있습니다." },
      { title: "Field Engineering", value: "Custom AHU Design", description: "열량, 풍량, 설치 공간, 공정 조건에 맞춘 맞춤 설계를 제안합니다." },
    ],
    coreModules: [
      { title: "버너 섹션", description: "직화 연소부와 안전장치를 통합해 고속 승온과 안정적인 열공급을 구성합니다." },
      { title: "댐퍼·혼합부", description: "외기와 환기 공기의 혼합 비율을 조정해 필요한 공급 공기 조건을 맞춥니다." },
      { title: "송풍부", description: "처리 풍량과 정압 조건에 맞춰 팬 용량과 덕트 연계를 설계합니다." },
      { title: "자동제어", description: "PLC, 온도 제어기, 인터록을 통해 연소와 풍량을 함께 제어합니다." },
    ],
    designPoints: [
      { title: "환기량 조건", description: "외기 비율, 배기 연동, 실내 압력 조건을 반영해 열량과 풍량을 산정합니다." },
      { title: "승온 속도", description: "목표 온도까지 필요한 시간과 부하 변동성을 기준으로 버너 용량을 검토합니다." },
      { title: "안전 설계", description: "연소 안전장치, 가스 인터록, 고온 보호 로직을 포함해 시스템을 구성합니다." },
      { title: "설치 공간", description: "옥외형, 옥상형, 실내형 등 현장 설치 조건에 따라 케이싱과 정비 동선을 검토합니다." },
    ],
    specGuide: [
      { label: "가열 방식", value: "Direct-Fired Heating" },
      { label: "적용 공간", value: "도장·조선·대공간 공조" },
      { label: "제어 항목", value: "Temp / Airflow / Gas Control" },
      { label: "구성 방식", value: "패키지형 맞춤 제작" },
    ],
    bodyText: "직화식 공조기는 대풍량 공기를 빠르게 승온시켜야 하는 현장에서 특히 유리합니다. 엔비피코리아는 현장 요구 온도, 풍량, 설치 공간, 자동제어 조건을 반영해 자동차 도장 라인부터 조선·물류 현장까지 맞춤형 AHU를 설계합니다.",
    flowNote: "직화 가열과 송풍 제어를 결합해 필요한 온도 조건을 빠르게 형성하도록 구성합니다.",
    specNote: "직화식 공조기는 빠른 승온과 대풍량 처리가 강점인 반면, 환기량과 연소 안전 조건을 함께 고려해야 하는 장비입니다. 공정용 환기, 난방, 건조 목적에 따라 열량과 제어 구성을 맞춤 설계합니다.",
    ctaTitle: "직화식 공조기 도입을 검토 중이신가요?",
    ctaDesc: "열량, 풍량, 제어 방식, 설치 환경에 맞춘 최적 사양을 제안해 드립니다.",
    floatingLabel: "직화식 공조기 적용 사례 보러가기",
    imgAlt: "직화식 공조기",
  },
};

export default function DirectAhuPage() {
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
      subtitle={`${t("hvac.directAhu.subtitle")} — Direct-Fired Air Handling Unit`}
      breadcrumb={[
        { label: t("breadcrumb"), href: "/products" },
        { label: t("breadcrumbs.hvac"), href: "/products?tab=hvac" },
        { label: t("nav.directAhu"), href: "/products/hvac/direct-ahu" },
      ]}
    >
      <FloatingCaseLink category="hvac" tag={locale === "en" ? "Direct-Fired AHU" : "직화식 공조기"} label={c.floatingLabel} />
      <ProductNav activeTab="hvac" activeProduct="direct-ahu" />

      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div ref={heroRef} className={`transition-all duration-1000 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <span className="text-[13px] tracking-[0.04em] uppercase text-[#C05010] block mb-3">
              HVAC · Direct-Fired AHU
            </span>
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.08em] text-[#2d2a28] mb-6">
              {c.title}
            </h2>
            <p className="text-sm text-[#5C6470] leading-relaxed mb-6">
              {t("hvac.directAhu.description")}
            </p>
            <p className="text-sm text-[#5C6470] leading-relaxed mb-8">
              {c.bodyText}
            </p>
            <div className="flex flex-wrap gap-3">
              {c.heroTags.map((tag) => (
                <span key={tag} className="text-[14px] tracking-[0.04em] border border-[#D4DAE2] px-3 py-1 text-[#5C6470]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-300 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="relative aspect-[4/3] overflow-hidden bg-white border border-[#C05010]/30">
              <Image src={`${S3}/images/hvac/hvac-thumbnail.png`} alt={c.imgAlt} fill className="object-cover" priority unoptimized />
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
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-6">Direct-Fired AHU Flow</p>
          <div className="flex flex-wrap items-center gap-2">
            {c.processFlow.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <div className={`px-3 py-2 text-[14px] tracking-[0.05em] text-center ${
                  c.processHighlight.includes(step)
                    ? "bg-[#C05010] text-white"
                    : step === c.processEnd
                      ? "bg-[#2d2a28] text-white"
                      : "bg-white border border-[#D4DAE2] text-[#5C6470]"
                }`}>
                  {step}
                </div>
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
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-8">{t("common.designPoints")}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {c.designPoints.map((item) => (
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
