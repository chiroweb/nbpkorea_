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
    title: "Oven Burner",
    heroTags: ["Oven/Drying Specialized", "Uniform Heat Source", "Low-to-Mid Temp Process", "Process-Matched Control"],
    applications: ["Food Processing", "Plastics Forming", "Paint Drying", "Printing & Coating", "Textile Tenter Dryer", "Industrial Dry Oven"],
    processFlow: ["Fuel Supply", "Burner Ignition", "Hot Air Formation in Oven", "Process Material Heating", "Uniform Temperature Maintenance"],
    processHighlight: ["Hot Air Formation in Oven", "Process Material Heating"],
    processEnd: "Uniform Temperature Maintenance",
    features: [
      "Burner configuration suited for food, plastics, painting, printing, and textile drying processes",
      "Design considering oven internal temperature uniformity and thermal response characteristics",
      "Suited for stable heat supply in low-to-mid temperature heat treatment processes",
      "Various burner methods including Atmospheric, Power Gas, and Dual Fuel can be reviewed",
      "Capacity selection and placement optimization based on oven volume and airflow conditions",
      "System design integrating temperature controllers, interlocks, and process line controls",
      "Heat source configuration contributing to drying time reduction and process quality stabilization",
      "End-to-end support: design, fabrication, installation, commissioning, and maintenance",
    ],
    capabilityCards: [
      { title: "Process Heating", value: "Drying & Curing", description: "Heat source conditions are configured for drying, curing, and heat treatment processes." },
      { title: "Temperature Control", value: "Uniform Heating", description: "Burner and airflow conditions are proposed to reduce oven internal temperature deviation." },
      { title: "Burner Options", value: "Multiple Burner Types", description: "Burner types can be selected to match process characteristics." },
      { title: "System Matching", value: "Oven-Specific Design", description: "Custom design is provided to match oven size, residence time, and target temperature." },
    ],
    bodyText: "For oven burners, overall process temperature uniformity and residence time management matter more than raw heating power. NBPKOREA proposes heat source configurations based on oven size, product characteristics, drying time, and target temperature.",
    appImages: [
      { src: `${S3}/images/burner/oven-burner-app-1.jpg`, alt: "Oven Burner Application Example 1" },
      { src: `${S3}/images/burner/oven-burner-app-2.jpg`, alt: "Oven Burner Application Example 2" },
    ],
    imgAlt: "Oven Burner",
    floatingLabel: "View Oven Burner Case Studies",
  },
  ko: {
    title: "오븐 버너",
    heroTags: ["오븐/건조 특화", "균일 열원", "중저온 공정", "공정 맞춤 제어"],
    applications: ["식품 가공", "플라스틱 성형", "도장 건조", "프린팅·코팅", "섬유 텐터 드라이어", "산업용 드라이 오븐"],
    processFlow: ["연료 공급", "버너 점화", "오븐 내 열풍 형성", "공정물 가열", "균일 온도 유지"],
    processHighlight: ["오븐 내 열풍 형성", "공정물 가열"],
    processEnd: "균일 온도 유지",
    features: [
      "식품, 플라스틱, 도장, 인쇄, 섬유 건조 공정에 적합한 버너 구성",
      "오븐 내부 온도 균일성과 열응답 특성을 고려한 설계 가능",
      "저온~중온 열처리 공정용 안정적인 열원 공급에 적합",
      "Atmospheric, Power Gas, Dual Fuel 등 다양한 버너 방식 검토 가능",
      "오븐 용적과 송풍 조건에 따른 용량 선정 및 배치 최적화",
      "온도 제어기, 인터록, 공정 라인 제어와 연계한 시스템 설계 가능",
      "건조 시간 단축과 공정 품질 안정화에 기여하는 열원 구성 가능",
      "설계·제작·설치·시운전·유지관리까지 통합 대응",
    ],
    capabilityCards: [
      { title: "Process Heating", value: "Drying & Curing", description: "건조, 경화, 열처리 공정에 맞는 열원 조건을 구성합니다." },
      { title: "Temperature Control", value: "Uniform Heating", description: "오븐 내부 열편차를 줄이는 방향으로 버너와 풍량 조건을 제안합니다." },
      { title: "Burner Options", value: "Multiple Burner Types", description: "공정 특성에 맞는 버너 타입을 선택할 수 있습니다." },
      { title: "System Matching", value: "Oven-Specific Design", description: "오븐 크기, 체류 시간, 목표 온도에 맞춘 맞춤 설계를 제공합니다." },
    ],
    bodyText: "오븐 버너는 단순 화력보다 공정 전체의 온도 균일성과 체류 시간 관리가 더 중요합니다. 엔비피코리아는 오븐 크기, 제품 특성, 건조 시간, 목표 온도를 기준으로 열원 구성을 제안합니다.",
    appImages: [
      { src: `${S3}/images/burner/oven-burner-app-1.jpg`, alt: "오븐 버너 적용 예시 1" },
      { src: `${S3}/images/burner/oven-burner-app-2.jpg`, alt: "오븐 버너 적용 예시 2" },
    ],
    imgAlt: "오븐 버너",
    floatingLabel: "오븐 버너 적용 사례 보러가기",
  },
};

export default function OvenBurnerPage() {
  const t = useTranslations("products");
  const locale = useLocale() as "en" | "ko";
  const c = content[locale] ?? content.ko;
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: appRef, isInView: appInView } = useInView({ threshold: 0.1 });
  const { ref: featureRef, isInView: featureInView } = useInView({ threshold: 0.1 });
  const { ref: capabilityRef, isInView: capabilityInView } = useInView({ threshold: 0.1 });

  return (
    <SubpageLayout
      title={t("nav.ovenBurner")}
      subtitle="Industrial Burner · Oven Burner"
      breadcrumb={[
        { label: t("breadcrumb"), href: "/products" },
        { label: t("breadcrumbs.burner"), href: "/products?tab=burner" },
        { label: t("nav.ovenBurner"), href: "/products/burner/oven-burner" },
      ]}
    >
      <FloatingCaseLink category="burner" tag={locale === "en" ? "Oven Burner" : "오븐 버너"} label={c.floatingLabel} />
      <ProductNav activeTab="burner" activeProduct="oven-burner" />

      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div ref={heroRef} className={`transition-all duration-1000 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <span className="text-[13px] tracking-[0.04em] uppercase text-[#C05010] block mb-3">Industrial Burner · Oven Burner</span>
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.08em] text-[#2d2a28] mb-6">{c.title}</h2>
            <p className="text-sm text-[#5C6470] leading-relaxed mb-6">{t("burner.ovenBurner.description")}</p>
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
              <Image src={`${S3}/images/burner/oven-burner-main.jpg`} alt={c.imgAlt} fill className="object-cover" priority unoptimized />
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
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-6">Oven Burner Flow</p>
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

      {/* 적용 예시 */}
      <section className="px-6 md:px-12 py-16 border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-8">{t("common.applicationExamples")}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {c.appImages.map((img) => (
              <div key={img.alt} className="relative aspect-[4/3] overflow-hidden bg-[#F8F9FB] border border-[#D4DAE2]">
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" unoptimized />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-16 border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg tracking-[0.08em] font-light text-[#2d2a28] mb-2">{t("burner.ovenBurner.ctaTitle")}</h3>
            <p className="text-sm text-[#5C6470]">{t("burner.ovenBurner.ctaDesc")}</p>
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
