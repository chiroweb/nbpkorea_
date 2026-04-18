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
    title: "Furnace Burner",
    heroTags: ["High-Temperature Furnace", "Gas + Oil Ready", "High-Load Combustion", "Furnace-Custom Design"],
    applications: [
      "Steel Reheating Furnace",
      "Melting Furnace",
      "Glass Melting Furnace",
      "Rotary Kiln",
      "Heat Treatment Furnace",
      "Ceramic Sintering Furnace",
    ],
    processFlow: ["Fuel Supply", "Burner Mixing", "High-Temp Flame Formation", "In-Furnace Heat Transfer", "Process Temperature Maintenance"],
    processHighlight: ["High-Temp Flame Formation", "In-Furnace Heat Transfer"],
    processEnd: "Process Temperature Maintenance",
    features: [
      "Burner configuration suited for high-temperature industrial furnaces including steel, glass, and ceramics",
      "Gas-only or gas + oil dual fuel conditions can be reviewed",
      "Flame characteristics can be designed to match furnace geometry and target temperature profile",
      "Focus on stable flame maintenance even under high-load operating conditions",
      "Capacity selection and burner placement matched to furnace size and heat balance",
      "System design integrating preheated air, exhaust conditions, and control methods",
      "Burner options reviewed based on MIDCO and ECOSTAR partnerships",
      "End-to-end support: design, fabrication, commissioning, and aftercare",
    ],
    capabilityCards: [
      { title: "Temperature Range", value: "High-Temperature Duty", description: "Combustion conditions are configured for high-temperature heat treatment and melting processes." },
      { title: "Fuel Options", value: "Gas / Dual Fuel", description: "Fuel configuration is reviewed to match site fuel specifications and operating conditions." },
      { title: "Flame Design", value: "Process-Matched Flame", description: "Flame patterns are proposed to match furnace length, burner position, and heat load." },
      { title: "Field Engineering", value: "Furnace-Custom Layout", description: "Custom design is provided to match industrial furnace structure and production process." },
    ],
    engineeringPoints: [
      { title: "Flame Length", description: "Flame characteristics such as straight, diffusion, and swirl types are reviewed to match heating targets and furnace length." },
      { title: "Heat Load Distribution", description: "Burner quantity and position are adjusted based on in-furnace heat balance and product placement." },
      { title: "Preheated Air", description: "When air preheating conditions exist, burner head material and control range are reviewed together." },
      { title: "Fuel Configuration", description: "Ignition method and valve train are designed according to gas-only or dual fuel configuration." },
    ],
    specGuide: [
      { label: "Fuel Type", value: "NG / LPG / Oil / Dual Fuel" },
      { label: "Key Processes", value: "Heat Treatment / Melting / Sintering / Heating" },
      { label: "Design Criteria", value: "Heat Load / Furnace Geometry / Preheated Air" },
      { label: "Control Scope", value: "Ignition / Proportional Control / Safety Interlock" },
    ],
    specNote: "Furnace burner design varies significantly depending on furnace temperature conditions, target production volume, furnace length, and exhaust conditions. After reviewing site specifications, we propose burner type, fuel method, control logic, and installation layout as a custom solution.",
    bodyText: "For furnace burners, internal heat distribution and process temperature stability within the industrial furnace are critical. NBPKOREA reviews furnace volume, target temperature, preheated air conditions, and fuel specifications together to propose burner systems suited for high-temperature processes.",
    appImages: [
      { src: `${S3}/images/burner/cases/furnace-burner-case-1.jpg`, alt: "Furnace Burner Application Example 1" },
      { src: `${S3}/images/burner/furnace-burner-main.jpg`, alt: "Furnace Burner Application Example 2" },
      { src: `${S3}/images/burner/fpb/Process-Burner-2.jpeg`, alt: "Furnace Burner Application Example 3" },
      { src: `${S3}/images/burner/fpb/dual-fuel-burners-40199-6408931.jpg`, alt: "Furnace Burner Application Example 4" },
    ],
    imgAlt: "Furnace Burner",
    floatingLabel: "View Furnace Burner Case Studies",
  },
  ko: {
    title: "로용 버너",
    heroTags: ["고온 산업로", "Gas + Oil 대응", "고부하 연소", "산업로 맞춤 설계"],
    applications: [
      "철강 가열로",
      "용해로",
      "유리 용해로",
      "로터리 킬른",
      "열처리로",
      "세라믹 소성로",
    ],
    processFlow: ["연료 공급", "버너 혼합", "고온 화염 형성", "로내 열전달", "공정 온도 유지"],
    processHighlight: ["고온 화염 형성", "로내 열전달"],
    processEnd: "공정 온도 유지",
    features: [
      "철강·유리·세라믹 등 고온 공정용 산업로에 적합한 버너 구성",
      "Gas 단독 또는 Gas + Oil 이중연료 조건 검토 가능",
      "로 형상과 목표 온도 프로파일에 맞춘 화염 특성 설계 가능",
      "고부하 운전 조건에서도 안정적 화염 유지에 초점",
      "산업로 크기와 열수지에 맞춘 용량 선정 및 버너 배치 대응",
      "예열 공기, 배기 조건, 제어 방식과 연계한 시스템 설계 가능",
      "MIDCO, ECOSTAR 파트너십 기반 버너 옵션 검토 가능",
      "설계·제작·시운전·사후관리까지 통합 대응",
    ],
    capabilityCards: [
      { title: "Temperature Range", value: "High-Temperature Duty", description: "고온 열처리 및 용해 공정에 맞는 연소 조건을 구성합니다." },
      { title: "Fuel Options", value: "Gas / Dual Fuel", description: "현장 연료 사양과 운전 조건에 맞춰 연료 구성을 검토합니다." },
      { title: "Flame Design", value: "Process-Matched Flame", description: "로 길이, 버너 위치, 열부하에 맞는 화염 패턴을 제안합니다." },
      { title: "Field Engineering", value: "Furnace-Custom Layout", description: "산업로 구조와 생산 공정에 맞춘 맞춤 설계를 제공합니다." },
    ],
    engineeringPoints: [
      { title: "화염 길이", description: "가열 대상과 로 길이에 맞춰 직진형, 확산형, 와류형 등 화염 특성을 검토합니다." },
      { title: "열부하 분배", description: "로내 열수지와 제품 배치를 기준으로 버너 수량과 위치를 조정합니다." },
      { title: "예열 공기", description: "공기 예열 조건이 있을 경우 버너 헤드 재질과 제어 범위를 함께 검토합니다." },
      { title: "연료 구성", description: "Gas 단독 또는 Dual Fuel 구성에 따라 점화 방식과 밸브 트레인을 설계합니다." },
    ],
    specGuide: [
      { label: "적용 연료", value: "NG / LPG / Oil / Dual Fuel" },
      { label: "주요 공정", value: "열처리·용해·소성·가열" },
      { label: "설계 기준", value: "열부하 / 로 형상 / 예열공기" },
      { label: "제어 범위", value: "점화·비례제어·안전인터록" },
    ],
    specNote: "로용 버너는 산업로 온도 조건, 목표 생산량, 로 길이, 배기 조건에 따라 설계가 크게 달라집니다. 현장 사양 검토 후 버너 타입, 연료 방식, 제어 로직, 설치 레이아웃을 맞춤 제안합니다.",
    bodyText: "로용 버너는 산업로 내부 열분포와 공정 온도 안정성이 핵심입니다. 엔비피코리아는 로 체적, 목표 온도, 예열 공기 조건, 연료 사양을 함께 검토해 고온 공정에 맞는 버너 시스템을 제안합니다.",
    appImages: [
      { src: `${S3}/images/burner/cases/furnace-burner-case-1.jpg`, alt: "로용 버너 적용 예시 1" },
      { src: `${S3}/images/burner/furnace-burner-main.jpg`, alt: "로용 버너 적용 예시 2" },
      { src: `${S3}/images/burner/fpb/Process-Burner-2.jpeg`, alt: "로용 버너 적용 예시 3" },
      { src: `${S3}/images/burner/fpb/dual-fuel-burners-40199-6408931.jpg`, alt: "로용 버너 적용 예시 4" },
    ],
    imgAlt: "로용 버너",
    floatingLabel: "로용 버너 적용 사례 보러가기",
  },
};

export default function FurnaceBurnerPage() {
  const t = useTranslations("products");
  const locale = useLocale() as "en" | "ko";
  const c = content[locale] ?? content.ko;
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
      <FloatingCaseLink category="burner" tag={locale === "en" ? "Furnace Burner" : "로용 버너"} label={c.floatingLabel} />
      <ProductNav activeTab="burner" activeProduct="furnace-burner" />

      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div ref={heroRef} className={`transition-all duration-1000 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <span className="text-[13px] tracking-[0.04em] uppercase text-[#C05010] block mb-3">Industrial Burner · Furnace Burner</span>
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.08em] text-[#2d2a28] mb-6">{c.title}</h2>
            <p className="text-sm text-[#5C6470] leading-relaxed mb-6">{t("burner.furnaceBurner.description")}</p>
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
              <Image src={`${S3}/images/burner/furnace-burner-main.jpg`} alt={c.imgAlt} fill className="object-cover" priority unoptimized />
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
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-6">Furnace Burner Flow</p>
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
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-8">{t("common.designPoints")}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {c.engineeringPoints.map((item) => (
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
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-8">{t("common.applicationExamples")}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {c.appImages.map((img) => (
              <div key={img.alt} className="relative aspect-[4/3] overflow-hidden bg-[#F8F9FB] border border-[#D4DAE2]">
                <Image src={img.src} alt={img.alt} fill className="object-cover" unoptimized />
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
            <Link href="/support?type=catalog" className="text-xs tracking-[0.06em] uppercase border border-[#D4DAE2] px-6 py-3 text-[#5C6470] hover:border-[#C05010] hover:text-[#C05010] transition-all duration-300">{t("common.catalog")}</Link>
            <Link href="/support" className="text-xs tracking-[0.06em] uppercase bg-[#C05010] text-white px-6 py-3 hover:bg-[#2d2a28] transition-all duration-300">{t("common.contact")}</Link>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
