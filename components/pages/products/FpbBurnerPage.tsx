"use client";
import SubpageLayout from "@/components/SubpageLayout";
import ProductNav from "@/components/ProductNav";
import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import FloatingCaseLink from "@/components/FloatingCaseLink";
import ApplicationTags from "@/components/ApplicationTags";
import { useInView } from "@/hooks/useInView";
import Image from "next/image";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

const fpbProducts = [
  {
    id: "gas-burners",
    name: "Gas Burners",
    image: `${S3}/images/burner/fpb/gas-burners-40199-6233087.jpg`,
  },
  {
    id: "gas-burners-low-nox",
    name: "Gas Burners Low NOx",
    image: `${S3}/images/burner/fpb/gas-burners-low-nox-40199-6408963.jpg`,
  },
  {
    id: "dual-fuel-burners",
    name: "Dual Fuel Burners",
    image: `${S3}/images/burner/fpb/dual-fuel-burners-40199-6408931.jpg`,
  },
  {
    id: "dual-fuel-burners-low-nox",
    name: "Dual Fuel Burners Low NOx",
    image: `${S3}/images/burner/fpb/dual-fuel-burners-low-nox-40199-6454911.jpg`,
  },
  {
    id: "fuel-oil-burners",
    name: "Fuel Oil Burners",
    image: `${S3}/images/burner/fpb/fuel-oil-burners-40199-6442147.jpg`,
  },
  {
    id: "light-fuel-oil-burners",
    name: "Light Fuel Oil Burners",
    image: `${S3}/images/burner/fpb/light-fuel-oil-burners-40199-6443263.jpg`,
  },
  {
    id: "multi-fuel-burners",
    name: "Multi Fuel Burners",
    image: `${S3}/images/burner/fpb/multi-fuel-burners-40199-6443461.jpg`,
  },
  {
    id: "natural-gas-burners-oxygen",
    name: "Natural Gas Burners (Oxygen)",
    image: `${S3}/images/burner/fpb/natural-gas-burners-oxygen-40199-6454243.jpg`,
  },
  {
    id: "air-heating-burners",
    name: "Air Heating Burners",
    image: `${S3}/images/burner/fpb/air-heating-burners-40199-6454995.jpg`,
  },
  {
    id: "process-burner",
    name: "Process Burner",
    image: `${S3}/images/burner/fpb/Process-Burner-2.jpeg`,
  },
  {
    id: "duoblock-burners",
    name: "Duoblock Burners (Rotary Cup)",
    image: `${S3}/images/burner/fpb/duoblock-burners-rotary-cup-40199-6453781.jpg`,
  },
  {
    id: "close-coupled-burners",
    name: "Close-Coupled Burners (Rotary Cup)",
    image: `${S3}/images/burner/fpb/close-coupled-burners-rotary-cup-40199-6421815.jpg`,
  },
  {
    id: "mobile-hot-air-generators",
    name: "Mobile Hot Air Generators",
    image: `${S3}/images/burner/fpb/mobile-hot-air-generators-fuel-oil-40199-6455619.jpg`,
  },
];

const content = {
  en: {
    heroTags: ["Integrated Package", "Low NOx Ready", "Wide Turndown", "BMS Integration", "Easy Maintenance"],
    applications: [
      "Industrial Boilers",
      "Hot Water & Steam Equipment",
      "Process Heaters",
      "Direct-Fired Ovens",
      "Hot Air Supply Equipment",
      "Fuel Conversion Projects",
    ],
    processFlow: ["Fuel Skid Supply", "Combustion Air Fan Control", "Ignition & Flame Monitoring", "Stable Flame Formation", "Heat Source & Steam Production"],
    processHighlight: ["Ignition & Flame Monitoring", "Stable Flame Formation"],
    processEnd: "Heat Source & Steam Production",
    featureHighlights: [
      "Burner, fan, igniter, and control panel configured as a single package for improved installation and commissioning response.",
      "Various fuel conditions including gas, oil, and dual fuel can be reviewed to propose field-appropriate package configurations.",
      "Short and stable flame design reduces the risk of flame impingement inside boilers and heat source equipment.",
      "Wide turndown characteristics are reviewed to ensure control stability and fuel efficiency even at partial load.",
      "Easy integration with burner management systems including automatic flame monitoring, safety shut-off, and interlock logic.",
      "Integrated equipment configuration considering low-noise operation, compact layout, and maintenance accessibility enhances serviceability.",
      "High applicability to retrofit projects including equipment replacement, fuel conversion, and emission improvement.",
      "Components and control specifications can be custom-designed according to capacity, back pressure, fuel pressure, and site specifications.",
    ],
    capabilityCards: [
      { title: "System Format", value: "Integrated Package", description: "Main components are bundled as an integrated unit to reduce on-site installation and piping/wiring complexity." },
      { title: "Combustion Control", value: "Wide Turndown", description: "Stable flame maintenance and output control can be reviewed even for equipment with large load variations." },
      { title: "Fuel Flexibility", value: "Gas / Oil / Dual Fuel", description: "Fuel configuration can be flexibly selected according to site fuel infrastructure and operational purpose." },
      { title: "Operation Safety", value: "BMS Ready", description: "Easy integration with safety control systems including ignition, flame monitoring, shut-off valves, and interlocks." },
    ],
    heroTitle: "MPG Burner",
    heroTitleSub: "(MPG Burner)",
    heroDesc: "A MPG burner is not just a burner body — it is an industrial heat source solution that simplifies on-site installation and operation by integrating combustion air fan, igniter, control panel, and safety devices into a single system. NBPKOREA reviews site load, fuel conditions, and emission requirements to propose appropriate MPG burner configurations.",
    imgAlt: "MPG Burner",
    fpbProductNames: {
      "gas-burners": "Gas Burners",
      "gas-burners-low-nox": "Gas Burners (Low NOx)",
      "dual-fuel-burners": "Dual Fuel Burners",
      "dual-fuel-burners-low-nox": "Dual Fuel Burners (Low NOx)",
      "fuel-oil-burners": "Fuel Oil Burners",
      "light-fuel-oil-burners": "Light Fuel Oil Burners",
      "multi-fuel-burners": "Multi Fuel Burners",
      "natural-gas-burners-oxygen": "Natural Gas Burners (Oxygen)",
      "air-heating-burners": "Air Heating Burners",
      "process-burner": "Process Burner",
      "duoblock-burners": "Duoblock Burners (Rotary Cup)",
      "close-coupled-burners": "Close-Coupled Burners (Rotary Cup)",
      "mobile-hot-air-generators": "Mobile Hot Air Generators",
    } as Record<string, string>,
    floatingLabel: "View MPG Burner Case Studies",
    appTagLabel: "MPG Burner",
  },
  ko: {
    heroTags: ["패키지 일체형", "저NOx 대응", "높은 턴다운", "BMS 연동", "정비 용이성"],
    applications: [
      "산업용 보일러",
      "열수·스팀 설비",
      "공정 가열기",
      "직화 오븐",
      "열풍 공급 설비",
      "연료 전환 프로젝트",
    ],
    processFlow: ["연료 스키드 공급", "연소공기 팬 제어", "점화·화염 감시", "안정 화염 형성", "열원·스팀 생산"],
    processHighlight: ["점화·화염 감시", "안정 화염 형성"],
    processEnd: "열원·스팀 생산",
    featureHighlights: [
      "버너, 팬, 점화부, 제어반을 하나의 패키지로 구성해 설치와 시운전 대응성을 높입니다.",
      "가스, 오일, 듀얼퓨얼 등 다양한 연료 조건을 고려해 현장에 맞는 패키지 구성을 제안할 수 있습니다.",
      "짧고 안정적인 화염 설계가 가능해 보일러 및 열원 장비 내부의 화염 충돌 위험을 줄이는 데 유리합니다.",
      "높은 턴다운 특성 검토를 통해 부분부하 구간에서도 제어 안정성과 연료 효율을 확보할 수 있습니다.",
      "자동 화염감시, 안전 차단, 인터록 로직 등 버너 매니지먼트 시스템과의 연계가 용이합니다.",
      "저소음 운전, 컴팩트 배치, 정비 접근성을 고려한 일체형 설비 구성으로 유지관리 편의성을 높일 수 있습니다.",
      "기존 설비 교체, 연료 전환, 배출 개선 프로젝트 등 리트로핏 작업에도 적용성이 높습니다.",
      "용량, 배압, 연료 압력, 현장 규격에 따라 구성품과 제어 사양을 맞춤 설계할 수 있습니다.",
    ],
    capabilityCards: [
      { title: "System Format", value: "Integrated Package", description: "주요 구성품을 일체형으로 묶어 현장 설치와 배관·배선 복잡도를 줄이는 방향으로 설계합니다." },
      { title: "Combustion Control", value: "Wide Turndown", description: "부하 변동이 큰 설비에서도 안정적 화염 유지와 출력 제어를 검토할 수 있습니다." },
      { title: "Fuel Flexibility", value: "Gas / Oil / Dual Fuel", description: "현장 연료 인프라와 운전 목적에 따라 연료 구성을 유연하게 선택할 수 있습니다." },
      { title: "Operation Safety", value: "BMS Ready", description: "점화, 화염감시, 차단밸브, 인터록을 포함한 안전 제어 체계와의 통합이 용이합니다." },
    ],
    heroTitle: "MPG 버너",
    heroTitleSub: "(MPG Burner)",
    heroDesc: "MPG 버너는 단순 버너 본체가 아니라 연소공기 팬, 점화부, 제어반, 안전장치를 하나의 시스템으로 구성해 현장 설치와 운전을 단순화하는 산업용 열원 솔루션입니다. 엔비피코리아는 현장 부하와 연료 조건, 배출 요구 수준을 검토해 적합한 MPG 버너 구성을 제안합니다.",
    imgAlt: "MPG 버너",
    fpbProductNames: {
      "gas-burners": "가스 버너",
      "gas-burners-low-nox": "가스 버너 (Low NOx)",
      "dual-fuel-burners": "이중연료 버너",
      "dual-fuel-burners-low-nox": "이중연료 버너 (Low NOx)",
      "fuel-oil-burners": "경유 버너",
      "light-fuel-oil-burners": "경질유 버너",
      "multi-fuel-burners": "다중연료 버너",
      "natural-gas-burners-oxygen": "천연가스 버너 (산소)",
      "air-heating-burners": "공기가열 버너",
      "process-burner": "프로세스 버너",
      "duoblock-burners": "듀오블록 버너 (로터리컵)",
      "close-coupled-burners": "클로즈커플드 버너 (로터리컵)",
      "mobile-hot-air-generators": "이동식 열풍발생기",
    } as Record<string, string>,
    floatingLabel: "MPG 버너 적용 사례 보러가기",
    appTagLabel: "MPG 버너",
  },
};

export default function FpbBurnerPage() {
  const t = useTranslations("products");
  const locale = useLocale() as "en" | "ko";
  const c = content[locale] ?? content.ko;
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: appRef, isInView: appInView } = useInView({ threshold: 0.1 });
  const { ref: featureRef, isInView: featureInView } = useInView({ threshold: 0.1 });
  const { ref: capabilityRef, isInView: capabilityInView } = useInView({ threshold: 0.1 });
  return (
    <>
      <SubpageLayout
        title={t("nav.fpbBurner")}
        subtitle="Industrial MPG Burner"
        breadcrumb={[
          { label: t("breadcrumb"), href: "/products" },
          { label: t("breadcrumbs.burner"), href: "/products?tab=burner" },
          { label: t("nav.fpbBurner"), href: "#" },
        ]}
      >
        <ProductNav activeTab="burner" activeProduct="fpb-burner" />

        {/* Hero */}
        <section className="px-6 md:px-12 py-16">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div
              ref={heroRef}
              className={`transition-all duration-1000 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <span className="text-[13px] tracking-[0.04em] uppercase text-[#C05010] block mb-3">
                Industrial MPG Burner
              </span>
              <h2 className="text-2xl md:text-3xl font-light tracking-[0.08em] text-[#2d2a28] mb-6">
                {c.heroTitle}<br />
                <span className="text-lg text-[#5C6470]">{c.heroTitleSub}</span>
              </h2>
              <p className="text-sm text-[#5C6470] leading-relaxed mb-6 max-w-2xl">
                {t("burner.fpbBurner.description")}
              </p>
              <p className="text-sm text-[#5C6470] leading-relaxed mb-8 max-w-2xl">
                {c.heroDesc}
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
                <Image
                  src={`${S3}/images/burner/mpg-burner-main.jpg`}
                  alt={c.imgAlt}
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
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
            <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-6">MPG Burner System Flow</p>
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

        <section className="px-6 md:px-12 py-16">
          <div className="max-w-7xl mx-auto">
            <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-8">{t("common.productLineup")}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {fpbProducts.map((product) => (
                <div
                  key={product.id}
                  className="group border border-[#D4DAE2] bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative aspect-square overflow-hidden bg-[#FAFAFA]">
                    <Image
                      src={product.image}
                      alt={c.fpbProductNames[product.id] ?? product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-[#2d2a28] tracking-[0.05em] mb-1">
                      {c.fpbProductNames[product.id] ?? product.name}
                    </h3>
                    <p className="text-xs text-[#5C6470] tracking-[0.05em]">
                      {product.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section ref={featureRef} className="px-6 md:px-12 py-16 bg-[#FAFAFA] border-t border-[#D4DAE2]">
          <div className="max-w-7xl mx-auto">
            <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-8">{t("common.features")}</p>
            <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-1000 ${featureInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {c.featureHighlights.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 border border-[#D4DAE2] bg-white">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C05010] flex-shrink-0" />
                  <span className="text-sm text-[#3D4450] leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section ref={capabilityRef} className="px-6 md:px-12 py-16 border-t border-[#D4DAE2]">
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

        {/* CTA */}
        <section className="px-6 md:px-12 py-16 border-t border-[#D4DAE2]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg tracking-[0.08em] font-light text-[#2d2a28] mb-2">
                {t("burner.fpbBurner.ctaTitle")}
              </h3>
              <p className="text-sm text-[#5C6470]">
                {t("burner.fpbBurner.ctaDesc")}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/products?tab=burner" className="btn-link group text-[#5C6470] text-xs tracking-[0.06em] uppercase">
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

      <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-8 mb-8">
        <ApplicationTags category="burner" tags={[c.appTagLabel]} />
      </div>
      <FloatingCaseLink category="burner" tag={locale === "en" ? "MPG Burner" : "MPG 버너"} label={c.floatingLabel} />
    </>
  );
}
