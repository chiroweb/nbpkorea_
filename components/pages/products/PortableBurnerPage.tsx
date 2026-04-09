"use client";

import SubpageLayout from "@/components/SubpageLayout";
import ProductNav from "@/components/ProductNav";
import { useInView } from "@/hooks/useInView";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import FloatingCaseLink from "@/components/FloatingCaseLink";


const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

const content = {
  en: {
    heroTitle: "Metal Burner",
    heroTitleSub: "(Metal Burner)",
    heroDesc1: "NBPKOREA Metal Burner is a portable industrial burner that can be directly deployed to job sites for immediate operation without fixed equipment. It is optimized for temporary and mobile heating needs such as shipyard block interior heating, construction site concrete curing, and ship tank drying.",
    heroDesc2: "Based on MIDCO International (USA) two-stage combustion technology, it minimizes NOx and CO emissions, and both LNG and LPG gas can be used without nozzle replacement. With independent operation configuration, it starts immediately with only site gas supply.",
    heroTags: ["Portable", "Immediate Field Deployment", "Independent Operation", "Multi-Fuel Ready"],
    imgAlt: "Metal Burner",
    features: [
      "Portable package design — rapid field deployment and withdrawal",
      "Independent operation — runs with only site gas supply, no factory equipment needed",
      "Minimized NO2 and CO emissions — compliant with ANSI Z83.4 / Z83.18",
      "Two-stage combustion method minimizes NOx even at maximum firing",
      "Both LNG and LPG usable without nozzle replacement",
      "30-step precision flame control — adapts to field temperature conditions",
      "Compact enough for confined spaces such as shipyard block interiors",
      "Flame stability — two-stage combustion maintains flame length under 25cm",
      "PLC or manual control mode selectable",
      "Overheat protection and flame detection safety devices included as standard",
      "MIDCO International (USA) technical partnership — globally proven combustion system",
      "Custom fabrication, installation, and after-service one-stop support",
    ],
    applications: [
      "Shipyard Block Interior Heating",
      "Construction Concrete Curing",
      "Temporary Heating Equipment",
      "Ship Tank Interior Drying",
      "Field Paint Pre-Treatment",
      "Steel Mill Temporary Heating",
      "Tunnel Construction Sites",
      "Agricultural Greenhouse Heating",
      "Portable Dryers",
      "Special Field Heat Sources",
      "Disaster Recovery Sites",
      "Other Portable Heating Needs",
    ],
    keyFeatures: [
      { icon: "→", label: "Immediate Field Deployment", desc: "No separate factory equipment needed — starts immediately with site gas connection" },
      { icon: "◎", label: "Independent Operation", desc: "Built-in control panel — fully independent operation as a standalone package" },
      { icon: "▲", label: "Multi-Fuel Ready", desc: "Both LNG and LPG usable without nozzle replacement" },
      { icon: "●", label: "Safety System", desc: "Overheat protection and flame detection auto-shutoff safety devices included" },
    ],
    specNote: "Metal Burners are custom-designed and fabricated based on field deployment purpose, space conditions, and required heat output.",
    specNoteHighlight: "Made-to-order",
    specNoteSuffix: " — specific capacity and dimensions are finalized through engineer consultation.",
    specGuide: [
      { label: "Fuel", value: "LNG / LPG" },
      { label: "Control", value: "PLC or Manual" },
      { label: "Emission Standard", value: "ANSI Z83.4 / Z83.18" },
      { label: "Operation Mode", value: "Standalone Package" },
    ],
    specDisclaimer: "※ Custom-designed according to site conditions and required specifications. Optimal specifications proposed after pre-site survey.",
    floatingLabel: "View Metal Burner Case Studies",
  },
  ko: {
    heroTitle: "메탈버너",
    heroTitleSub: "(Metal Burner)",
    heroDesc1: "엔비피코리아 메탈버너는 고정 설비 없이 현장에 직접 투입하여 즉시 운전할 수 있는 이동형 산업용 버너입니다. 조선소 블록 내부 가열, 건설 현장 콘크리트 양생, 선박 탱크 건조 등 일시적·이동성이 필요한 현장에 최적화되어 있습니다.",
    heroDesc2: "MIDCO International(미국) 기술 기반의 2단 연소 방식으로 NOx·CO 배출을 최소화하며, 노즐 교체 없이 LNG / LPG 가스를 모두 사용할 수 있습니다. 독립 운전 구성으로 현장 가스 공급만으로 즉시 가동됩니다.",
    heroTags: ["이동형", "현장 즉시 투입", "독립 운전", "복합 연료 대응"],
    imgAlt: "메탈버너",
    features: [
      "이동형 패키지 설계 — 현장 투입·철수 신속 대응",
      "독립 운전 가능 — 별도 공장 설비 없이 현장 가스 공급만으로 운전",
      "NO2 및 CO 배출 최소화 — ANSI Z83.4 / Z83.18 기준 적합",
      "2단 연소(Two-Stage) 방식으로 최대 연소 시에도 NOx 배출 최소화",
      "노즐 교체 없이 LNG / LPG 가스 모두 사용 가능",
      "30단계 정밀 화염 제어 — 현장 온도 조건 대응",
      "조선소 블록 내부 등 협소 현장에도 투입 가능한 컴팩트 구성",
      "화염 안정성 — 2단 연소 시스템으로 화염 길이 25cm 이하 유지",
      "PLC 또는 수동 제어 방식 선택 가능",
      "과열 방지·불꽃 감지 안전 장치 기본 탑재",
      "MIDCO International(미국) 기술 협력 — 글로벌 검증된 연소 시스템",
      "현장 맞춤형 제작·시공·A/S 원스톱 서비스",
    ],
    applications: [
      "조선소 블록 내부 가열",
      "건설 현장 콘크리트 양생",
      "임시 난방 설비",
      "선박 탱크 내부 건조",
      "현장 도장 전처리",
      "제철소 임시 가열",
      "터널 공사 현장",
      "농업용 하우스 난방",
      "이동식 건조기",
      "특수 현장 열원",
      "재난 복구 현장",
      "기타 이동형 가열 필요 현장",
    ],
    keyFeatures: [
      { icon: "→", label: "현장 즉시 투입", desc: "별도 공장 설비 불필요 — 현장 가스 연결 즉시 가동" },
      { icon: "◎", label: "독립 운전", desc: "내장 제어반 탑재 — 단독 패키지로 완전 독립 운전 가능" },
      { icon: "▲", label: "다연료 대응", desc: "노즐 교체 없이 LNG / LPG 가스 모두 사용" },
      { icon: "●", label: "안전 시스템", desc: "과열 방지·불꽃 감지 자동 차단 안전 장치 기본 탑재" },
    ],
    specNote: "메탈버너는 현장 투입 목적·공간 조건·요구 열량에 따라 맞춤 설계·제작됩니다.",
    specNoteHighlight: "주문 제작 방식",
    specNoteSuffix: "으로 공급되므로, 구체적인 용량 및 치수는 엔지니어 상담을 통해 확정합니다.",
    specGuide: [
      { label: "연료", value: "LNG / LPG" },
      { label: "제어 방식", value: "PLC 또는 수동" },
      { label: "배출 기준", value: "ANSI Z83.4 / Z83.18" },
      { label: "운전 방식", value: "독립형 패키지" },
    ],
    specDisclaimer: "※ 현장 조건 및 요구 사양에 따라 맞춤 설계합니다. 사전 현장 조사 후 최적 사양을 제안해 드립니다.",
    floatingLabel: "메탈버너 적용 사례 보러가기",
  },
};

export default function PortableBurnerPage() {
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: appRef, isInView: appInView } = useInView({ threshold: 0.1 });
  const t = useTranslations("products");
  const locale = useLocale() as "en" | "ko";
  const c = content[locale] ?? content.ko;

  return (
    <SubpageLayout
      title={t("nav.portableBurner")}
      subtitle={`Metal Burner — ${t("burner.portableBurner.subtitle")}`}
      breadcrumb={[
        { label: t("breadcrumb"), href: "/products" },
        { label: t("breadcrumbs.burner"), href: "/products?tab=burner" },
        { label: t("nav.portableBurner"), href: "/products/burner/portable-burner" },
      ]}
    >
      <FloatingCaseLink category="burner" tag={locale === "en" ? "Metal Burner" : "메탈버너"} label={c.floatingLabel} />
      <ProductNav activeTab="burner" activeProduct="portable-burner" />

      {/* Hero */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div
            ref={heroRef}
            className={`transition-all duration-1000 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <span className="text-[13px] tracking-[0.04em] uppercase text-[#C05010] block mb-3">
              Industrial Burner · Metal Burner
            </span>
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.08em] text-[#2d2a28] mb-6">
              {c.heroTitle}<br />{c.heroTitleSub}
            </h2>
            <p className="text-sm text-[#5C6470] leading-relaxed mb-6">
              {c.heroDesc1}
            </p>
            <p className="text-sm text-[#5C6470] leading-relaxed mb-8">
              {c.heroDesc2}
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
                src={`${S3}/images/burner/metal-burner2.png`}
                alt={c.imgAlt}
                fill className="object-contain p-4" priority
               unoptimized />
            </div>
          </div>
        </div>
      </section>

      {/* 적용 분야 */}
      <section ref={appRef} className="px-6 md:px-12 py-12 border-t border-[#D4DAE2] bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-6">{t("common.applications")}</p>
          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 transition-all duration-1000 ${appInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {c.applications.map((app) => (
              <Link key={app} href={`/performance?tag=${encodeURIComponent(app)}&cat=burner`} className="text-[14px] tracking-[0.04em] border border-[#D4DAE2] px-3 py-2 text-[#5C6470] hover:border-[#C05010] hover:text-[#C05010] hover:bg-[#C05010]/5 transition-all duration-200">

                {app}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 주요 특성 */}
      <section className="px-6 md:px-12 py-12 bg-[#FAFAFA] border-y border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-6">{t("common.keyFeatures")}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {c.keyFeatures.map((item) => (
              <div key={item.label} className="bg-white border border-[#D4DAE2] p-4">
                <span className="text-[#C05010] text-lg mb-2 block">{item.icon}</span>
                <span className="text-xs font-medium text-[#2d2a28] block mb-1">{item.label}</span>
                <span className="text-[14px] text-[#5C6470] leading-[1.7]">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 특징 */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-8">{t("common.features")}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-4 border border-[#D4DAE2]">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C05010] flex-shrink-0" />
                <span className="text-sm text-[#3D4450] leading-relaxed">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 스펙 안내 */}
      <section className="px-6 md:px-12 py-16 bg-[#FAFAFA] border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-6">{t("common.specifications")}</p>
          <div className="border border-[#D4DAE2] bg-white p-6">
            <p className="text-sm text-[#5C6470] leading-relaxed">
              {c.specNote}<br />
              <span className="text-[#2d2a28] font-medium">{c.specNoteHighlight}</span>{c.specNoteSuffix}
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
          <p className="text-[13px] text-[#5C6470] mt-4">{c.specDisclaimer}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-16 border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg tracking-[0.08em] font-light text-[#2d2a28] mb-2">{t("burner.portableBurner.ctaTitle")}</h3>
            <p className="text-sm text-[#5C6470]">{t("burner.portableBurner.ctaDesc")}</p>
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
  );
}
