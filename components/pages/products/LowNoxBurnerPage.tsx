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
    title: "Next-Generation Low NOx Burner",
    heroTags: ["EN 676:2020 Class 3", "1:6 Modulation", "Hinged Head", "Integrated Leak Detection"],
    applications: ["Automotive Paint Booths", "Industrial Ovens", "Drying Equipment", "Hot Air Supply Equipment", "Emission-Regulated Sites", "Precision Heat Treatment Process"],
    processFlow: ["Gas Supply", "Electronic Proportional Modulation", "Adjustable Combustion Head", "Low-NOx Flame Formation", "Process Heat Supply"],
    processHighlight: ["Electronic Proportional Modulation", "Low-NOx Flame Formation"],
    processEnd: "Process Heat Supply",
    features: [
      "European Certified Low-Emission Design — EN 676:2020 and EN 303 compliant, NOx Class 3",
      "Precision Combustion Control — Electronic modulation (1:6) for stable firing rate and energy efficiency",
      "High Efficiency & Low Noise — Centrifugal fan structure delivers high airflow efficiency, low noise and low power",
      "Easy Maintenance — Hinged design allows nozzle inspection and replacement without detaching the burner",
      "Reinforced Safety & Control — Gas leak detection, ionization flame sensing, and fault code display",
      "Precise Air-Fuel Ratio Control — Servomotor-based airflow regulation with stainless-steel turbulator",
      "Expandability & Instrumentation — CO/O₂ trim system integration, test ports, and measurement features",
      "Durability & Protection — Aluminum body construction with IP44 electrical protection rating",
    ],
    capabilityCards: [
      { title: "Emission Control", value: "Low NOx / Low CO", description: "Low-emission combustion configurations are proposed for processes requiring emission regulation compliance." },
      { title: "Ignition", value: "Direct Spark Ignition", description: "Direct ignition configuration without a pilot burner can be reviewed." },
      { title: "Combustion", value: "Premix System", description: "Flame quality is stabilized through full premix combustion of fuel and air." },
      { title: "Application Fit", value: "Regulation-Sensitive Sites", description: "Optimized for regulation-sensitive sites such as painting, ovens, and drying equipment." },
    ],
    designPoints: [
      { title: "Emission Standards", description: "Combustion method is reviewed based on site-required NOx/CO targets and presence of exhaust aftertreatment." },
      { title: "Excess Air Ratio", description: "Appropriate excess air conditions are adjusted to balance low emissions and flame stability." },
      { title: "Ignition Method", description: "Safety is designed including pilot presence, direct ignition, and flame monitoring method." },
      { title: "Load Response", description: "Turndown range is reviewed to maintain emission performance at both maximum and partial loads." },
    ],
    specGuide: [
      { label: "Combustion Method", value: "Premix / Low NOx" },
      { label: "Target Process", value: "Painting / Drying / Oven / Hot Air" },
      { label: "Primary Purpose", value: "Emission Reduction / Regulation Compliance" },
      { label: "Control Scope", value: "Ignition / Proportional Control / Interlock" },
    ],
    specNote: "A Low NOx burner requires balancing emission standards compliance and flame stability rather than simple output. Burner head and control logic are custom-designed by reviewing exhaust conditions, site regulations, target temperature, and equipment volume.",
    bodyText: "The ECOSTAR (Turkey) next-generation Low NOx gas burner is engineered for industrial sites that must simultaneously meet emission regulations and combustion efficiency. NBPKOREA leverages the ECOSTAR genuine lineup to review site exhaust conditions, target heat output, and operating environment, then proposes the optimal Low NOx burner configuration.",
    appImages: [
      { src: `${S3}/images/burner/fpb/gas-burners-low-nox-40199-6408963.jpg`, alt: "Low NOx Burner Application Example 1" },
      { src: `${S3}/images/burner/fpb/dual-fuel-burners-low-nox-40199-6454911.jpg`, alt: "Low NOx Burner Application Example 2" },
      { src: `${S3}/images/burner/fpb/air-heating-burners-40199-6454995.jpg`, alt: "Low NOx Burner Application Example 3" },
    ],
    imgAlt: "Low NOx Burner",
    floatingLabel: "View Low NOx Burner Case Studies",
    featureLeadTitle: "Key Features of the Low NOx Gas Burner",
  },
  ko: {
    title: "차세대 저 NOx 버너",
    heroTags: ["EN 676:2020 3등급", "1:6 변조 비율", "경첩식 헤드", "가스 누출 감지 통합"],
    applications: ["자동차 도장 부스", "산업용 오븐", "건조 설비", "열풍 공급 설비", "배출 규제 대응 현장", "정밀 열처리 공정"],
    processFlow: ["가스 공급", "전자 비례 변조", "조절식 연소 헤드", "저NOx 화염 형성", "공정 열원 공급"],
    processHighlight: ["전자 비례 변조", "저NOx 화염 형성"],
    processEnd: "공정 열원 공급",
    features: [
      "유럽 인증 기반 저배출 설계 — EN 676:2020 및 EN 303 기준 적용, NOx Class 3 충족",
      "정밀한 연소 제어 시스템 — 전자식 모듈레이션(1:6)으로 안정적인 화력 제어 및 에너지 효율 향상",
      "고효율·저소음 운전 — 원심형 팬 구조 적용으로 높은 송풍 효율, 저소음·저전력 실현",
      "간편한 유지보수 구조 — 힌지 타입 설계로 버너 분리 없이 노즐 점검 및 교체 가능",
      "안전 및 제어 기능 강화 — 가스 누설 감지, 이온화 방식 화염 감지, 오류 코드 표시 기능 적용",
      "정밀 공기비 제어 — 서보모터 기반 공기량 조절 및 스테인리스 터뷸레이터 적용",
      "확장 및 계측 기능 지원 — CO/O₂ 트림 시스템 연동 가능, 테스트 포트 및 계측 기능 제공",
      "내구성 및 보호 등급 — 알루미늄 바디 / IP44 전기 보호 등급",
    ],
    capabilityCards: [
      { title: "Emission Control", value: "Low NOx / Low CO", description: "배출 규제 대응이 필요한 공정에 맞춰 저배출 연소 구성을 제안합니다." },
      { title: "Ignition", value: "Direct Spark Ignition", description: "파일럿 버너 없이 직접 점화 구성을 검토할 수 있습니다." },
      { title: "Combustion", value: "Premix System", description: "연료와 공기의 완전 예혼합 기반 연소로 화염 품질을 안정화합니다." },
      { title: "Application Fit", value: "Regulation-Sensitive Sites", description: "도장, 오븐, 건조 설비 등 규제 민감 현장에 최적화합니다." },
    ],
    designPoints: [
      { title: "배출 기준", description: "현장 요구 NOx/CO 목표치와 배기 후처리 유무를 기준으로 연소 방식을 검토합니다." },
      { title: "과잉공기율", description: "저배출과 화염 안정성의 균형을 위해 적정 과잉공기 조건을 조정합니다." },
      { title: "점화 방식", description: "파일럿 유무, 직접 점화, 화염감시 방식까지 포함해 안정성을 설계합니다." },
      { title: "부하 대응", description: "최대 부하와 부분 부하 모두에서 배출 성능이 유지되도록 턴다운 범위를 검토합니다." },
    ],
    specGuide: [
      { label: "연소 방식", value: "Premix / Low NOx" },
      { label: "적용 공정", value: "도장·건조·오븐·열풍" },
      { label: "주요 목적", value: "배출 저감 / 규제 대응" },
      { label: "제어 범위", value: "점화·비례제어·인터록" },
    ],
    specNote: "저녹스 버너는 단순 출력보다 배출 기준 대응과 화염 안정성의 균형이 중요합니다. 배기 조건, 현장 규제, 목표 온도, 장비 체적을 검토해 버너 헤드와 제어 로직을 맞춤 설계합니다.",
    bodyText: "ECOSTAR(Turkey) 차세대 저 NOx 가스 버너는 배출 규제와 연소 효율을 동시에 만족시켜야 하는 산업 현장에 최적화된 솔루션입니다. 엔비피코리아는 ECOSTAR 정품 라인업을 기반으로 현장 배기 조건, 목표 열량, 운전 환경을 종합 검토해 최적의 저 NOx 버너 구성을 제안합니다.",
    appImages: [
      { src: `${S3}/images/burner/fpb/gas-burners-low-nox-40199-6408963.jpg`, alt: "저녹스 버너 적용 예시 1" },
      { src: `${S3}/images/burner/fpb/dual-fuel-burners-low-nox-40199-6454911.jpg`, alt: "저녹스 버너 적용 예시 2" },
      { src: `${S3}/images/burner/fpb/air-heating-burners-40199-6454995.jpg`, alt: "저녹스 버너 적용 예시 3" },
    ],
    imgAlt: "저녹스 버너",
    floatingLabel: "저녹스 버너 적용 사례 보러가기",
    featureLeadTitle: "Low NOx 가스 버너 주요 특징",
  },
};

export default function LowNoxBurnerPage() {
  const t = useTranslations("products");
  const locale = useLocale() as "en" | "ko";
  const c = content[locale] ?? content.ko;
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: appRef, isInView: appInView } = useInView({ threshold: 0.1 });
  const { ref: featureRef, isInView: featureInView } = useInView({ threshold: 0.1 });
  const { ref: capabilityRef, isInView: capabilityInView } = useInView({ threshold: 0.1 });

  return (
    <SubpageLayout
      title={t("nav.lowNoxBurner")}
      subtitle="Industrial Burner · Low NOx Burner"
      breadcrumb={[
        { label: t("breadcrumb"), href: "/products" },
        { label: t("breadcrumbs.burner"), href: "/products?tab=burner" },
        { label: t("nav.lowNoxBurner"), href: "/products/burner/low-nox-burner" },
      ]}
    >
      <FloatingCaseLink category="burner" tag={locale === "en" ? "Low NOx Burner" : "저녹스 버너"} label={c.floatingLabel} />
      <ProductNav activeTab="burner" activeProduct="low-nox-burner" />

      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div ref={heroRef} className={`transition-all duration-1000 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <span className="text-[13px] tracking-[0.04em] uppercase text-[#C05010] block mb-3">Industrial Burner · Low NOx Burner</span>
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.08em] text-[#2d2a28] mb-6">{c.title}</h2>
            <p className="text-sm text-[#5C6470] leading-relaxed mb-6">{t("burner.lowNoxBurner.description")}</p>
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
              <Image src="/images/burner/low-nox-burner-main.png" alt={c.imgAlt} fill className="object-contain p-4" priority  unoptimized />
            </div>
          </div>
        </div>

        {/* 주요 특징 인라인 요약 */}
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
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-6">Low NOx Combustion Flow</p>
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
                <Image src={img.src} alt={img.alt} fill className="object-cover"  unoptimized />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-16 border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg tracking-[0.08em] font-light text-[#2d2a28] mb-2">{t("burner.lowNoxBurner.ctaTitle")}</h3>
            <p className="text-sm text-[#5C6470]">{t("burner.lowNoxBurner.ctaDesc")}</p>
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
