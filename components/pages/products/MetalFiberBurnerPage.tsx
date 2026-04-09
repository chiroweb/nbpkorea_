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

const content = {
  en: {
    heroTags: ["Surface Combustion", "Infrared Radiant Heat", "Premix Combustion", "Uniform Heating", "Low NOx Ready"],
    applications: [
      "Powder Coating Oven",
      "Food Processing Line",
      "Conveyor Drying Furnace",
      "Film & Sheet Heating",
      "Textile Drying Process",
      "Precision Surface Heating Equipment",
    ],
    processFlow: ["Gas-Air Premix", "Porous Combustion Surface Passage", "Surface Combustion Formation", "Infrared Radiant Heat Transfer", "Uniform Process Heating"],
    processHighlight: ["Surface Combustion Formation", "Infrared Radiant Heat Transfer"],
    processEnd: "Uniform Process Heating",
    features: [
      "Uniform heat distribution achieved through surface combustion using metal fiber or ceramic combustion surfaces.",
      "Thin flame formation near the combustion surface reduces direct flame impingement and stabilizes product surface quality.",
      "High radiant heat ratio secured through premix combustion improves drying and heating response speed.",
      "Fast heat-up and cool-down characteristics provide excellent process adaptability during line startup and condition changes.",
      "Metal fiber type is advantageous for complex shapes and compact design, while ceramic type excels in high-temperature radiant stability.",
      "Suited for minimizing temperature deviation and improving productivity in continuous processes such as powder coating, food, film, and textiles.",
      "Low NOx combustion conditions can be reviewed, securing applicability for equipment requiring emission regulation compliance.",
      "Burner arrangement and control configuration can be custom-designed based on equipment size, residence time, and target heat flux.",
    ],
    capabilityCards: [
      { title: "Heating Mode", value: "Surface Combustion IR", description: "Infrared radiant heat from surface combustion uniformly heats product surfaces and process spaces." },
      { title: "Thermal Response", value: "Fast Heat-Up / Cool-Down", description: "Fast thermal response is advantageous for production line condition changes and intermittent operation." },
      { title: "Process Quality", value: "Uniform Heat Profile", description: "Reduces localized overheating and mitigates temperature deviation, contributing to drying and appearance quality stabilization." },
      { title: "Burner Selection", value: "Metal Fiber / Ceramic", description: "Metal fiber and ceramic types can be selectively applied based on process temperature, installation space, and heat resistance conditions." },
    ],
    subProducts: [
      {
        id: "ceramic-burner",
        name: "Ceramic Burner",
        nameEn: "Ceramic Burner",
        image: `${S3}/images/burner/ceramic-burner.jpg`,
        description: "A surface combustion burner utilizing heat-resistant ceramic material as the combustion surface. Maximizes infrared radiant heat for excellent energy efficiency and uniform heat distribution.",
      },
      {
        id: "metal-fiber-burner-knit",
        name: "Metal Fiber Knit Burner",
        nameEn: "Metal Fiber Knit Burner",
        image: `${S3}/images/burner/metal-fiber-burner.png`,
        description: "A next-generation surface combustion burner made from heat-resistant metal fiber woven in a knit pattern. Can be fabricated in various shapes with high efficiency and compact structure.",
      },
    ],
    heroTitle: "Metal Fiber Burner",
    heroTitleSub: "(Metal Fiber Burner)",
    imgAlt: "Metal Fiber Burner",
    appImages: [
      { src: `${S3}/images/burner/metal-fiber-app-1.png`, alt: "Metal Fiber Burner Application Example 1" },
      { src: `${S3}/images/burner/metal-fiber-app-2.png`, alt: "Metal Fiber Burner Application Example 2" },
    ],
    floatingLabel: "View Metal Fiber Burner Case Studies",
    appTagLabels: ["Metal Fiber Burner", "Ceramic Burner", "Infrared", "Low NOx"],
  },
  ko: {
    heroTags: ["표면연소", "적외선 복사열", "예혼합 연소", "균일 가열", "저NOx 대응"],
    applications: [
      "분체도장 오븐",
      "식품 가공 라인",
      "컨베이어 건조로",
      "필름·시트 가열",
      "섬유 건조 공정",
      "정밀 표면가열 설비",
    ],
    processFlow: ["가스·공기 예혼합", "다공성 연소면 통과", "표면연소 형성", "적외선 복사열 전달", "균일 공정 가열"],
    processHighlight: ["표면연소 형성", "적외선 복사열 전달"],
    processEnd: "균일 공정 가열",
    features: [
      "메탈파이버 또는 세라믹 연소면을 이용한 표면연소 방식으로 균일한 열분포를 구현합니다.",
      "화염이 연소면 근처에 얇게 형성되어 직접 화염 충돌을 줄이고 제품 표면 품질 안정화에 유리합니다.",
      "예혼합 연소 기반으로 높은 복사열 비율을 확보해 건조 및 가열 응답 속도를 높일 수 있습니다.",
      "빠른 승온·냉각 특성으로 라인 스타트업과 조건 변경 시 공정 대응성이 우수합니다.",
      "메탈파이버 타입은 복잡한 형상 대응과 컴팩트 설계에 유리하고, 세라믹 타입은 고온 복사 안정성에 강점이 있습니다.",
      "분체도장, 식품, 필름, 섬유 등 연속 공정에서 열편차 최소화와 생산성 향상에 적합합니다.",
      "저NOx 지향 연소 조건 검토가 가능해 배출 규제 대응이 필요한 설비에도 적용성을 확보할 수 있습니다.",
      "설비 크기, 체류 시간, 목표 열유속에 따라 버너 배열과 제어 구성을 맞춤 설계할 수 있습니다.",
    ],
    capabilityCards: [
      { title: "Heating Mode", value: "Surface Combustion IR", description: "표면연소로 형성된 적외선 복사열이 제품 표면과 공정 공간을 균일하게 가열합니다." },
      { title: "Thermal Response", value: "Fast Heat-Up / Cool-Down", description: "열응답이 빨라 생산 라인 조건 변경과 간헐 운전에 유리합니다." },
      { title: "Process Quality", value: "Uniform Heat Profile", description: "국부 과열을 줄이고 열편차를 완화해 건조 품질과 외관 품질 안정화에 기여합니다." },
      { title: "Burner Selection", value: "Metal Fiber / Ceramic", description: "공정 온도, 설치 공간, 내열 조건에 맞춰 메탈파이버와 세라믹 타입을 구분 적용할 수 있습니다." },
    ],
    subProducts: [
      {
        id: "ceramic-burner",
        name: "세라믹 버너",
        nameEn: "Ceramic Burner",
        image: `${S3}/images/burner/ceramic-burner.jpg`,
        description: "내열 세라믹 소재를 연소면으로 활용한 표면연소 버너. 적외선 복사열을 극대화하여 에너지 효율이 뛰어나며 균일한 열분포를 실현합니다.",
      },
      {
        id: "metal-fiber-burner-knit",
        name: "메탈섬유 버너",
        nameEn: "Metal Fiber Knit Burner",
        image: `${S3}/images/burner/metal-fiber-burner.png`,
        description: "내열 메탈파이버를 니트상으로 짜서 만든 신개념의 표면 연소 버너. 다양한 형태로 가공이 가능하며 높은 효율 및 컴팩트한 구조가 특징입니다.",
      },
    ],
    heroTitle: "메탈버너",
    heroTitleSub: "(Metal Fiber Burner)",
    imgAlt: "메탈버너",
    appImages: [
      { src: `${S3}/images/burner/metal-fiber-app-1.png`, alt: "메탈버너 적용 예시 1" },
      { src: `${S3}/images/burner/metal-fiber-app-2.png`, alt: "메탈버너 적용 예시 2" },
    ],
    floatingLabel: "메탈버너 적용 사례 보러가기",
    appTagLabels: ["메탈버너", "세라믹 버너", "적외선", "저NOx"],
  },
};

export default function MetalFiberBurnerPage() {
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
        title={t("nav.metalFiberBurner")}
        subtitle="Industrial Burner · Metal Fiber / Ceramic"
        breadcrumb={[
          { label: t("breadcrumb"), href: "/products" },
          { label: t("breadcrumbs.burner"), href: "/products?tab=burner" },
          { label: t("nav.metalFiberBurner"), href: "#" },
        ]}
      >
        <ProductNav activeTab="burner" activeProduct="metal-fiber-burner" />

        {/* Hero */}
        <section className="px-6 md:px-12 py-16">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div
              ref={heroRef}
              className={`transition-all duration-1000 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <span className="text-[13px] tracking-[0.04em] uppercase text-[#C05010] block mb-3">
                Industrial Burner · Metal Fiber / Ceramic
              </span>
              <h2 className="text-2xl md:text-3xl font-light tracking-[0.08em] text-[#2d2a28] mb-4">
                {c.heroTitle}<br />
                <span className="text-lg text-[#5C6470]">{c.heroTitleSub}</span>
              </h2>
              <p className="text-sm text-[#5C6470] leading-relaxed mb-8">
                {t("burner.metalFiberBurner.description")}
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
                  src={`${S3}/images/burner/metal-fiber-burner-thumb.png`}
                  alt={c.imgAlt}
                  fill
                  className="object-cover"
                  priority
                 unoptimized />
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
            <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-6">Surface Combustion Flow</p>
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

        {/* Sub Products */}
        <section className="px-6 md:px-12 py-16 bg-[#F9FAFB] border-y border-[#D4DAE2]">
          <div className="max-w-7xl mx-auto">
            <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-8">{t("common.productLineup")}</p>
            <div className="grid md:grid-cols-2 gap-8">
              {c.subProducts.map((product) => (
                <div
                  key={product.id}
                  className="group border border-[#D4DAE2] bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#FAFAFA]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                     unoptimized />
                  </div>
                  <div className="p-6">
                    <h3 className="text-base font-medium text-[#2d2a28] tracking-[0.05em] mb-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#C05010] tracking-[0.08em] mb-3">
                      {product.nameEn}
                    </p>
                    <p className="text-sm text-[#5C6470] leading-[1.8]">
                      {product.description}
                    </p>
                  </div>
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
            <div className="grid md:grid-cols-2 gap-6">
              {c.appImages.map((img) => (
                <div key={img.alt} className="relative aspect-[4/3] overflow-hidden bg-[#F8F9FB] border border-[#D4DAE2]">
                  <Image src={img.src} alt={img.alt} fill className="object-cover"  unoptimized />
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
                {t("burner.metalFiberBurner.ctaTitle")}
              </h3>
              <p className="text-sm text-[#5C6470]">
                {t("burner.metalFiberBurner.ctaDesc")}
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
        <ApplicationTags category="burner" tags={c.appTagLabels} />
      </div>
      <FloatingCaseLink category="burner" tag={locale === "en" ? "Metal Fiber Burner" : "메탈버너"} label={c.floatingLabel} />
    </>
  );
}
