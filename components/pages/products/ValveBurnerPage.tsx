"use client";

import FloatingCaseLink from "@/components/FloatingCaseLink";
import ProductNav from "@/components/ProductNav";
import SubpageLayout from "@/components/SubpageLayout";
import { useInView } from "@/hooks/useInView";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

const heroTags = ["가스 제어", "정밀 유량 조절", "안정적 화염", "버너 일체 설계"];
const applications = ["가스 버너 시스템", "산업용 오븐", "열풍기", "공정 가열 설비", "연소 제어 필요 현장", "버너 개조 프로젝트"];
const processFlow = ["가스 공급", "밸브 제어", "연료 유량 조절", "버너 연소", "공정 열원 공급"];
const features = [
  "가스 유량과 압력을 정밀 제어하는 버너 구성에 적합",
  "버너 본체와 제어 밸브 구성을 함께 검토하는 시스템 설계 가능",
  "공정 조건에 따라 화염 안정성과 출력 제어 성능을 조율 가능",
  "산업용 오븐, 열풍기, 공정 가열 설비 등 다양한 장비에 적용 가능",
  "제어 방식과 안전 인터록 구성을 반영한 현장 맞춤 설계 가능",
  "기존 설비 개조 또는 신규 설비 구성 모두 대응 가능",
  "가스 계통 조건과 장비 크기에 맞춘 구성품 선정 가능",
  "설계·제작·설치·시운전·유지관리까지 통합 대응",
];
const capabilityCards = [
  { title: "Gas Control", value: "Valve-Based Regulation", description: "유량과 압력 조건을 기준으로 연소 제어 구성을 최적화합니다." },
  { title: "Combustion Stability", value: "Stable Flame Support", description: "버너 출력 변화에도 안정적 운전을 유지하도록 설계합니다." },
  { title: "Retrofit", value: "New / Existing Systems", description: "신규 설비와 기존 설비 개조 모두 고려할 수 있습니다." },
  { title: "Integration", value: "Burner + Valve Assembly", description: "버너와 제어부를 분리하지 않고 통합적으로 검토합니다." },
];
const valveTrainItems = [
  { title: "차단 밸브", description: "안전 차단을 위한 이중 차단 또는 인터록 연계 구성을 검토합니다." },
  { title: "레귤레이터", description: "입구 압력 변동이 큰 현장에서도 안정적인 연소 압력을 유지하도록 설계합니다." },
  { title: "비례 제어", description: "온도 제어기, PLC와 연동해 출력에 따라 가스 유량을 정밀 조절합니다." },
  { title: "압력 감시", description: "저압·고압 스위치와 인터록으로 이상 상태를 신속히 감지합니다." },
];
const specGuide = [
  { label: "적용 연료", value: "NG / LPG / 도시가스" },
  { label: "제어 대상", value: "유량·압력·점화·인터록" },
  { label: "적용 설비", value: "오븐·열풍기·공정 버너" },
  { label: "구성 방식", value: "신규 / 기존 개조 대응" },
];

export default function ValveBurnerPage() {
  const t = useTranslations("products");
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: appRef, isInView: appInView } = useInView({ threshold: 0.1 });
  const { ref: featureRef, isInView: featureInView } = useInView({ threshold: 0.1 });
  const { ref: capabilityRef, isInView: capabilityInView } = useInView({ threshold: 0.1 });

  return (
    <SubpageLayout
      title={t("nav.valveBurner")}
      subtitle="Industrial Burner · Valve Burner"
      breadcrumb={[
        { label: t("breadcrumb"), href: "/products" },
        { label: t("breadcrumbs.burner"), href: "/products?tab=burner" },
        { label: t("nav.valveBurner"), href: "/products/burner/valve-burner" },
      ]}
    >
      <FloatingCaseLink category="burner" tag="밸브버너" label="밸브버너 적용 사례 보러가기" />
      <ProductNav activeTab="burner" activeProduct="valve-burner" />

      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div ref={heroRef} className={`transition-all duration-1000 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <span className="text-[13px] tracking-[0.04em] uppercase text-[#C05010] block mb-3">Industrial Burner · Valve Burner</span>
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.08em] text-[#2d2a28] mb-6">밸브버너</h2>
            <p className="text-sm text-[#5C6470] leading-relaxed mb-6">{t("burner.valveBurner.description")}</p>
            <p className="text-sm text-[#5C6470] leading-relaxed mb-8">
              밸브버너는 버너 본체보다 가스 제어 품질이 더 중요할 때가 많습니다. 엔비피코리아는 유량 제어,
              압력 조건, 안전 인터록을 함께 검토해 안정적인 연소 시스템을 구성합니다.
            </p>
            <div className="flex flex-wrap gap-3">
              {heroTags.map((tag) => (
                <span key={tag} className="text-[14px] tracking-[0.04em] border border-[#D4DAE2] px-3 py-1 text-[#5C6470]">{tag}</span>
              ))}
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-300 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="relative aspect-[4/3] overflow-hidden bg-white border border-[#C05010]/30">
              <Image src={`${S3}/images/burner/valve-burner.jpg`} alt="밸브버너" fill className="object-contain" priority />
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
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-6">Valve Burner Control Flow</p>
          <div className="flex flex-wrap items-center gap-2">
            {processFlow.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <div className={`px-3 py-2 text-[14px] tracking-[0.05em] text-center ${step === "밸브 제어" || step === "연료 유량 조절" ? "bg-[#C05010] text-white" : step === "공정 열원 공급" ? "bg-[#2d2a28] text-white" : "bg-white border border-[#D4DAE2] text-[#5C6470]"}`}>{step}</div>
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
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-8">주요 구성 요소</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {valveTrainItems.map((item) => (
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
              밸브버너는 버너 헤드보다 가스 트레인 설계가 운전 안정성에 더 큰 영향을 주는 경우가 많습니다.
              현장 압력 범위와 제어 정밀도 요구를 검토해 적합한 밸브 트레인과 제어 구성을 제안합니다.
            </p>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {specGuide.map((item) => (
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
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-8">적용 예시</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: `${S3}/images/burner/valve-burner.jpg`, alt: "밸브버너 적용 예시 1" },
              { src: `${S3}/images/burner/fpb/gas-burners-40199-6233087.jpg`, alt: "밸브버너 적용 예시 2" },
              { src: `${S3}/images/burner/fpb/gas-burners-low-nox-40199-6408963.jpg`, alt: "밸브버너 적용 예시 3" },
            ].map((img) => (
              <div key={img.alt} className="relative aspect-[4/3] overflow-hidden bg-[#F8F9FB] border border-[#D4DAE2]">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-16 border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg tracking-[0.08em] font-light text-[#2d2a28] mb-2">{t("burner.valveBurner.ctaTitle")}</h3>
            <p className="text-sm text-[#5C6470]">{t("burner.valveBurner.ctaDesc")}</p>
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
