"use client";

import ProductNav from "@/components/ProductNav";
import SubpageLayout from "@/components/SubpageLayout";
import { useInView } from "@/hooks/useInView";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

const content = {
  en: {
    title: "Ceramic Burner",
    heroTags: ["Surface Combustion", "Infrared Radiation", "Ultra-Low NOx", "Uniform Heating"],
    applications: [
      "Powder Coating Ovens",
      "Food Processing & Baking Lines",
      "Drying & Curing Equipment",
      "Glass / Ceramic Industry",
      "Textile Tenter Dryers",
      "Printing & Coating Lines",
    ],
    processFlow: ["Premix Gas Supply", "Ceramic Combustion Plate", "Surface Combustion", "Infrared Radiation", "Process Heating"],
    processHighlight: ["Ceramic Combustion Plate", "Infrared Radiation"],
    processEnd: "Process Heating",
    bodyText: "Unlike conventional flame-type burners, the ceramic burner anchors the flame on the surface of a heat-resistant ceramic plate so that combustion happens at the surface rather than as a free flame. This generates a high ratio of infrared radiant heat at low surface temperature (around 1000~1100°C), enabling clean, uniform heating of the target product. NBPKOREA reviews target temperature, residence time, and process geometry to design ceramic burner arrays optimized for each line.",
    features: [
      "Surface combustion design — flame fixed on the ceramic plate, eliminating direct flame impingement and product hot-spots",
      "High infrared radiant heat ratio (typically 50~70%) for fast, energy-efficient heating of the product surface",
      "Premixed combustion delivers Ultra-Low NOx and CO emissions, well below conventional gas burner levels",
      "Wide turndown range with quick start-up and shut-down — well suited to intermittent and batch lines",
      "Compact, low-profile geometry can be tiled into arrays to cover wide oven sections uniformly",
      "Low convective heat loss → less hot exhaust, reducing fan and exhaust treatment load",
      "Stable performance with both LNG and LPG; multiple plate sizes available for capacity tuning",
      "End-to-end support: heat-load review, burner array layout, control integration, commissioning, and maintenance",
    ],
    capabilityCards: [
      { title: "Heating Mode", value: "Surface Combustion IR", description: "Flame stays on the ceramic surface, transferring heat primarily through infrared radiation rather than convection." },
      { title: "Emissions", value: "Ultra-Low NOx / CO", description: "Premixed combustion at moderate surface temperature suppresses thermal NOx formation." },
      { title: "Thermal Response", value: "Fast Heat-Up / Cool-Down", description: "Low thermal mass at the combustion plate enables rapid temperature change for line conditions." },
      { title: "Layout", value: "Tileable Array", description: "Plates can be combined into arrays to match the oven width and the heat profile required by the process." },
    ],
    designPoints: [
      { title: "Target Temperature", description: "Ceramic burners are most effective in the low-to-mid temperature range (drying, curing, baking). Above that, hybrid configurations are reviewed." },
      { title: "Heat Distribution", description: "Plate count, spacing, and oven height are tuned to maintain uniform infrared flux across the product surface." },
      { title: "Emission Targets", description: "Excess-air ratio and modulation logic are selected to meet site NOx/CO limits while keeping flame stability." },
      { title: "Control Integration", description: "Modulation, ignition, flame monitoring, and interlocks are matched to the existing PLC / oven control architecture." },
    ],
    specGuide: [
      { label: "Combustion Method", value: "Premix / Surface Combustion" },
      { label: "Heat Transfer", value: "Infrared Radiation Dominant" },
      { label: "Surface Temperature", value: "Approx. 1000~1100°C" },
      { label: "Fuel", value: "LNG / LPG" },
    ],
    specNote: "Ceramic burners are sized by the radiant heat flux required at the product surface, not by raw firing rate alone. Burner plate quantity, layout, and control are designed against oven geometry, target temperature, residence time, and product characteristics.",
    appImages: [
      { src: `${S3}/images/burner/ceramic-burner.jpg`, alt: "Ceramic Burner Application Example 1" },
      { src: `${S3}/images/burner/cases/metal-fiber-case-1.jpg`, alt: "Ceramic Burner Application Example 2" },
      { src: `${S3}/images/burner/cases/metal-fiber-case-2.jpg`, alt: "Ceramic Burner Application Example 3" },
    ],
    imgAlt: "Ceramic Burner",
    floatingLabel: "View Ceramic Burner Case Studies",
    featureLeadTitle: "Key Features of the Ceramic Burner",
  },
  ko: {
    title: "세라믹 버너",
    heroTags: ["표면연소", "적외선 복사", "초저 NOx", "균일 가열"],
    applications: [
      "분체도장 오븐",
      "식품 가공·베이킹 라인",
      "건조·경화 설비",
      "유리·세라믹 산업",
      "섬유 텐터 드라이어",
      "인쇄·코팅 라인",
    ],
    processFlow: ["예혼합 가스 공급", "세라믹 연소판", "표면연소 형성", "적외선 복사 전달", "공정 가열"],
    processHighlight: ["세라믹 연소판", "적외선 복사 전달"],
    processEnd: "공정 가열",
    bodyText: "세라믹 버너는 일반적인 화염형 버너와 달리, 내열 세라믹판 표면에 화염을 고정시켜 표면연소(Surface Combustion) 방식으로 작동합니다. 약 1000~1100°C의 비교적 낮은 표면 온도에서도 높은 비율의 적외선 복사열을 발생시키므로 제품 표면을 청정하고 균일하게 가열할 수 있습니다. 엔비피코리아는 목표 온도, 체류 시간, 공정 형상을 검토해 라인별로 최적화된 세라믹 버너 배열을 설계합니다.",
    features: [
      "표면연소 방식 — 화염이 세라믹판 표면에 고정되어 직접 화염 충돌과 국부 과열을 방지",
      "적외선 복사열 비율이 높음(통상 50~70%)으로 제품 표면을 빠르고 에너지 효율적으로 가열",
      "예혼합 연소로 일반 가스 버너 대비 NOx·CO 배출이 매우 낮음 (Ultra-Low NOx)",
      "넓은 변조 범위와 빠른 기동·정지 — 간헐 운전·배치 공정에 적합",
      "컴팩트한 저상형 구조로 타일링 배열이 가능해 오븐 폭 전체에 균일 열원 구성 가능",
      "대류 열손실이 작아 배기열 부하와 후단 배기 처리 부담을 줄임",
      "LNG/LPG 모두 안정적으로 사용 가능하며 다양한 플레이트 크기로 용량 조정 가능",
      "열부하 검토·버너 배열 설계·제어 연동·시운전·유지관리까지 통합 대응",
    ],
    capabilityCards: [
      { title: "가열 방식", value: "표면연소 적외선", description: "화염이 세라믹 표면에 고정되어 대류보다 적외선 복사 위주로 열을 전달합니다." },
      { title: "배출 특성", value: "초저NOx / CO", description: "낮은 표면 온도와 예혼합 연소로 thermal NOx 생성을 억제합니다." },
      { title: "열 응답성", value: "빠른 승온·냉각", description: "연소판의 열용량이 작아 라인 조건 변경 시 온도 응답이 빠릅니다." },
      { title: "배치 방식", value: "타일링 배열", description: "오븐 폭과 공정 열프로파일에 맞춰 플레이트를 배열로 조합할 수 있습니다." },
    ],
    designPoints: [
      { title: "목표 온도", description: "건조·경화·베이킹 등 저온~중온 영역에서 가장 효율적이며, 이상 영역에서는 하이브리드 구성을 검토합니다." },
      { title: "열 분포", description: "플레이트 개수·간격·오븐 높이를 조정해 제품 표면의 적외선 플럭스를 균일하게 유지합니다." },
      { title: "배출 기준", description: "현장 NOx·CO 기준에 맞춰 과잉공기율과 변조 로직을 설계하여 화염 안정성을 확보합니다." },
      { title: "제어 연동", description: "변조·점화·화염 감시·인터록을 기존 PLC / 오븐 제어 시스템과 매칭합니다." },
    ],
    specGuide: [
      { label: "연소 방식", value: "예혼합 / 표면연소" },
      { label: "열전달", value: "적외선 복사 중심" },
      { label: "표면 온도", value: "약 1000~1100°C" },
      { label: "연료", value: "LNG / LPG" },
    ],
    specNote: "세라믹 버너는 단순 출력보다 제품 표면에서 요구되는 복사 열유속(IR flux)을 기준으로 설계합니다. 오븐 형상·목표 온도·체류 시간·제품 특성에 따라 플레이트 수량·배열·제어 로직을 맞춤 구성합니다.",
    appImages: [
      { src: `${S3}/images/burner/ceramic-burner.jpg`, alt: "세라믹 버너 적용 예시 1" },
      { src: `${S3}/images/burner/cases/metal-fiber-case-1.jpg`, alt: "세라믹 버너 적용 예시 2" },
      { src: `${S3}/images/burner/cases/metal-fiber-case-2.jpg`, alt: "세라믹 버너 적용 예시 3" },
    ],
    imgAlt: "세라믹 버너",
    floatingLabel: "세라믹 버너 적용 사례 보러가기",
    featureLeadTitle: "세라믹 버너 주요 특징",
  },
};

export default function CeramicBurnerPage() {
  const t = useTranslations("products");
  const locale = useLocale() as "en" | "ko";
  const c = content[locale] ?? content.ko;
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: appRef, isInView: appInView } = useInView({ threshold: 0.1 });
  const { ref: featureRef, isInView: featureInView } = useInView({ threshold: 0.1 });
  const { ref: capabilityRef, isInView: capabilityInView } = useInView({ threshold: 0.1 });

  return (
    <SubpageLayout
      title={t("nav.ceramicBurner")}
      subtitle="Industrial Burner · Ceramic Burner"
      breadcrumb={[
        { label: t("breadcrumb"), href: "/products" },
        { label: t("breadcrumbs.burner"), href: "/products?tab=burner" },
        { label: t("nav.ceramicBurner"), href: "/products/burner/ceramic-burner" },
      ]}
    >
      <ProductNav activeTab="burner" activeProduct="ceramic-burner" />

      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div ref={heroRef} className={`transition-all duration-1000 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <span className="text-[13px] tracking-[0.04em] uppercase text-[#C05010] block mb-3">Industrial Burner · Ceramic Burner</span>
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.08em] text-[#2d2a28] mb-6">{c.title}</h2>
            <p className="text-sm text-[#5C6470] leading-relaxed mb-8">{c.bodyText}</p>
            <div className="flex flex-wrap gap-3">
              {c.heroTags.map((tag) => (
                <span key={tag} className="text-[14px] tracking-[0.04em] border border-[#D4DAE2] px-3 py-1 text-[#5C6470]">{tag}</span>
              ))}
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-300 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="relative aspect-[4/3] overflow-hidden bg-white border border-[#C05010]/30">
              <Image src={`${S3}/images/burner/ceramic-burner.jpg`} alt={c.imgAlt} fill className="object-cover" priority unoptimized />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-14 border-t border-[#D4DAE2] pt-10">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#C05010] mb-6">{c.featureLeadTitle}</p>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3">
            {c.features.map((feature, index) => {
              const [head, tail] = feature.split(" — ");
              return (
                <li key={index} className="flex items-start gap-3 text-sm text-[#3D4450] leading-relaxed">
                  <span className="mt-2 w-1 h-1 rounded-full bg-[#C05010] flex-shrink-0" />
                  <span>
                    <span className="text-[#2d2a28] font-medium">{head}</span>
                    {tail && <span className="text-[#5C6470]"> — {tail}</span>}
                  </span>
                </li>
              );
            })}
          </ul>
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
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-6">{locale === "en" ? "Ceramic Combustion Flow" : "세라믹 연소 흐름"}</p>
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
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-8">{locale === "en" ? "Key Capabilities" : "주요 성능"}</p>
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
            {c.designPoints.map((item) => (
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
            <p className="text-sm text-[#5C6470] leading-relaxed">{c.specNote}</p>
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
            <h3 className="text-lg tracking-[0.08em] font-light text-[#2d2a28] mb-2">
              {locale === "en" ? "Considering the Ceramic Burner?" : "세라믹 버너 도입을 검토 중이신가요?"}
            </h3>
            <p className="text-sm text-[#5C6470]">
              {locale === "en" ? "We will propose the optimal specifications for your site conditions." : "현장 조건에 맞는 최적 사양을 제안해 드립니다."}
            </p>
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
