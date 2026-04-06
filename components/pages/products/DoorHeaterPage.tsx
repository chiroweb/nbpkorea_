"use client";

import FloatingCaseLink from "@/components/FloatingCaseLink";
import ProductNav from "@/components/ProductNav";
import SubpageLayout from "@/components/SubpageLayout";
import { useInView } from "@/hooks/useInView";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

const heroTags = ["출입구 열손실 저감", "에어커튼형", "직화식 열원", "간편 설치"];

const applications = [
  "공장 출입구",
  "물류센터 셔터 구간",
  "냉동·냉장창고 전실",
  "상하차장 출입구",
  "작업장 외기 차단 구역",
  "빈번한 개폐 구간",
];

const processFlow = [
  "외기 유입",
  "도어히터 가열",
  "에어커튼 형성",
  "실내 온도 유지",
];

const features = [
  "출입구 개방 시 유입되는 외기와 찬바람을 차단하는 데 효과적",
  "공장·물류센터·냉동창고 출입구의 실내 온도 유지에 적합",
  "직화식 열원 적용으로 전기 에어커튼 대비 높은 열출력 대응 가능",
  "보일러나 별도 배관 없이 비교적 간단한 설치 구성이 가능",
  "개구부 크기와 운영 조건에 맞춘 풍량·열량 설계 가능",
  "출입 빈도가 높은 현장의 체감 온도와 작업 환경 개선에 기여",
  "유지관리 접근성을 고려한 구조로 현장 대응성 확보",
  "설계, 제작, 설치, 시운전까지 통합 제공",
];

const capabilityCards = [
  {
    title: "Entrance Protection",
    value: "Air Barrier",
    description: "도어 개방 구간에 열풍 커튼을 형성해 외기 침입을 줄입니다.",
  },
  {
    title: "Heating Output",
    value: "High Thermal Response",
    description: "짧은 시간 안에 출입구 구간의 체감 온도를 끌어올리는 데 유리합니다.",
  },
  {
    title: "Installation",
    value: "Simple Field Setup",
    description: "별도 열원 설비 공사 부담을 줄이는 방향으로 구성이 가능합니다.",
  },
  {
    title: "Custom Design",
    value: "Opening-Based Sizing",
    description: "개구부 폭과 높이, 개폐 빈도에 따라 맞춤 사양을 제안합니다.",
  },
];
const coreModules = [
  { title: "가열부", description: "직화식 열원 또는 고온 열풍부를 통해 출입구 구간의 열풍 장벽을 형성합니다." },
  { title: "송풍 노즐", description: "개구부 형상에 맞춰 토출 방향과 풍속을 조정해 외기 침입을 줄입니다." },
  { title: "제어부", description: "도어 개폐 신호, 온도 조건, 수동·자동 운전을 연계해 필요 시점에 운전합니다." },
  { title: "설치 프레임", description: "출입구 상부나 측면 구조에 맞춰 현장 설치와 정비가 용이한 형태로 제작합니다." },
];
const designPoints = [
  { title: "개구부 크기", description: "출입구 폭과 높이에 따라 풍량, 토출 속도, 장비 길이를 산정합니다." },
  { title: "개폐 빈도", description: "문 열림 시간과 통행 패턴을 반영해 연속 운전 또는 간헐 운전 방식을 검토합니다." },
  { title: "온도차", description: "실내외 온도차와 계절 조건에 따라 필요한 가열 용량을 조정합니다." },
  { title: "작업 환경", description: "소음, 체감풍, 작업 동선까지 고려해 설치 위치와 토출 방향을 설계합니다." },
];
const specGuide = [
  { label: "적용 구간", value: "공장·창고·냉장전실 출입구" },
  { label: "주요 목적", value: "열손실 저감 / 외기 차단" },
  { label: "제어 항목", value: "도어 연동 / Temp / Fan" },
  { label: "설계 기준", value: "개구부 크기 / 개폐 빈도" },
];

export default function DoorHeaterPage() {
  const t = useTranslations("products");
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: appRef, isInView: appInView } = useInView({ threshold: 0.1 });
  const { ref: featureRef, isInView: featureInView } = useInView({ threshold: 0.1 });
  const { ref: capabilityRef, isInView: capabilityInView } = useInView({ threshold: 0.1 });

  return (
    <SubpageLayout
      title="도어히터"
      subtitle={`${t("hvac.doorHeater.subtitle")} — Door Heater`}
      breadcrumb={[
        { label: t("breadcrumb"), href: "/products" },
        { label: t("breadcrumbs.hvac"), href: "/products?tab=hvac" },
        { label: t("nav.doorHeater"), href: "/products/hvac/door-heater" },
      ]}
    >
      <FloatingCaseLink category="hvac" tag="도어히터" label="도어히터 적용 사례 보러가기" />
      <ProductNav activeTab="hvac" activeProduct="door-heater" />

      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div ref={heroRef} className={`transition-all duration-1000 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <span className="text-[13px] tracking-[0.04em] uppercase text-[#C05010] block mb-3">HVAC · Door Heater</span>
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.08em] text-[#2d2a28] mb-6">도어히터</h2>
            <p className="text-sm text-[#5C6470] leading-relaxed mb-6">{t("hvac.doorHeater.description")}</p>
            <p className="text-sm text-[#5C6470] leading-relaxed mb-8">
              출입구는 난방 손실과 외기 유입이 가장 크게 발생하는 지점입니다.
              엔비피코리아 도어히터는 출입구 형상과 개폐 빈도에 맞춰 열풍 장벽을 형성하도록 설계돼 작업 환경 안정성과 에너지 손실 저감에 기여합니다.
            </p>
            <div className="flex flex-wrap gap-3">
              {heroTags.map((tag) => (
                <span key={tag} className="text-[14px] tracking-[0.04em] border border-[#D4DAE2] px-3 py-1 text-[#5C6470]">{tag}</span>
              ))}
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-300 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="relative aspect-[4/3] overflow-hidden bg-white border border-[#C05010]/30">
              <Image src={`${S3}/images/hvac/door-heater-new.jpg`} alt="도어히터" fill className="object-cover scale-[1.15]" priority />
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
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-6">Door Heater Operation Flow</p>
          <div className="flex flex-wrap items-center gap-2">
            {processFlow.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <div className={`px-3 py-2 text-[14px] tracking-[0.05em] text-center ${step === "도어히터 가열" || step === "에어커튼 형성" ? "bg-[#C05010] text-white" : step === "실내 온도 유지" ? "bg-[#2d2a28] text-white" : "bg-white border border-[#D4DAE2] text-[#5C6470]"}`}>{step}</div>
                {index < processFlow.length - 1 && <span className="text-[#C8D0DA]">→</span>}
              </div>
            ))}
          </div>
          <p className="text-[14px] text-[#5C6470] mt-4">개구부를 통과하는 외기 흐름을 열풍으로 끊어 실내 환경 변동을 줄이는 방식입니다.</p>
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
            {coreModules.map((item) => (
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
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-8">선정 기준</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {designPoints.map((item) => (
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
              도어히터는 개구부 조건에 따라 성능 차이가 크게 나타나는 장비입니다.
              출입구 크기, 개폐 빈도, 실내외 온도차, 작업 동선을 기준으로 풍량과 열량을 최적화해 제안합니다.
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
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg tracking-[0.08em] font-light text-[#2d2a28] mb-2">도어히터 도입을 검토 중이신가요?</h3>
            <p className="text-sm text-[#5C6470]">출입구 크기, 개폐 빈도, 실내 온도 조건에 맞춘 사양을 제안해 드립니다.</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/products?tab=hvac" className="btn-link group text-[#5C6470] text-xs tracking-[0.06em] uppercase">
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
