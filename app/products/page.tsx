"use client";

import SubpageLayout from "@/components/SubpageLayout";
import { useInView } from "@/hooks/useInView";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const S3 = "https://nbpkoreare.s3.ap-northeast-2.amazonaws.com";

const tabs = [
  {
    id: "environment",
    label: "환경설비",
    sublabel: "Environment",
    products: [
      {
        title: "NK-CTO",
        subtitle: "촉매연소산화장치",
        image: `${S3}/images/%ED%99%98%EA%B2%BD%EC%82%AC%EC%97%85%EB%B6%80/Environment%20Business%20Division/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EC%9A%A9%20CTO%20%EB%A0%8C%EB%8D%94%EB%A7%81-nowatermark.jpg`,
        description: "촉매를 이용해 VOCs 및 악취를 저온(250~450°C)에서 산화 분해합니다. 처리 효율 95% 이상, 운영비 절감에 유리한 저에너지 소비형 환경설비입니다.",
        tags: ["반도체", "도장", "식품", "제약"],
      },
      {
        title: "NK-RTO",
        subtitle: "축열식열연소산화장치",
        image: `${S3}/images/%ED%99%98%EA%B2%BD%EC%82%AC%EC%97%85%EB%B6%80/Business%20Area/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EC%9A%A9%20RTO%20%EB%A0%8C%EB%8D%94%EB%A7%81-nowatermark.jpg`,
        description: "850°C 이상의 고온에서 VOCs를 산화 분해하며, 축열체를 통해 열을 95% 이상 회수합니다. 대풍량 처리에 적합한 고효율 환경설비입니다.",
        tags: ["조선", "자동차", "화학"],
      },
      {
        title: "NK-RCO",
        subtitle: "축열식촉매연소산화장치",
        image: `${S3}/images/%ED%99%98%EA%B2%BD%EC%82%AC%EC%97%85%EB%B6%80/Business%20Area/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EC%9A%A9%20RCO%20%EB%A0%8C%EB%8D%94%EB%A7%81-nowatermark.jpg`,
        description: "축열식과 촉매식의 장점을 결합한 하이브리드 시스템입니다. 중·소풍량의 고농도 VOCs 처리에 최적화되어 있습니다.",
        tags: ["중공업", "화학", "환경"],
      },
      {
        title: "NK-DTO",
        subtitle: "직접연소탈취장치",
        image: `${S3}/images/%ED%99%98%EA%B2%BD%EC%82%AC%EC%97%85%EB%B6%80/Business%20Area/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EC%9A%A9%20DTO%20%EB%A0%8C%EB%8D%94%EB%A7%81-nowatermark.jpg`,
        description: "700~900°C의 직접 연소 방식으로 고농도 악취와 VOCs를 직접 산화 처리합니다. 소규모 현장 및 간헐적 발생 공정에 적합합니다.",
        tags: ["음식물처리", "폐수처리", "소규모"],
      },
    ],
  },
  {
    id: "combustion",
    label: "연소설비",
    sublabel: "Combustion",
    products: [
      {
        title: "직접가열식 가스히터",
        subtitle: "Direct Gas Heater",
        image: `${S3}/images/%EC%97%B0%EC%86%8C/1p1.png`,
        description: "공장, 조선소, 창고 등 대공간을 빠르게 가열하는 직접 연소 방식의 산업용 가스히터입니다. 100k~250k Kcal/h의 다양한 용량으로 제공됩니다.",
        tags: ["조선", "제조공장", "대공간"],
      },
      {
        title: "간접가열식 가스히터",
        subtitle: "Indirect Gas Heater",
        image: `${S3}/images/%EA%B0%84%EC%A0%91%EC%8B%9D/2-100.png`,
        description: "열교환기를 통해 청정한 공기를 공급하는 간접 가열 방식입니다. 도장 부스, 식품 가공, 클린룸 등 청정 공기가 필요한 현장에 적합합니다.",
        tags: ["도장부스", "식품", "클린룸"],
      },
      {
        title: "하이브리드 제습기",
        subtitle: "Hybrid Dehumidifier",
        image: `${S3}/images/humidremover.jpg`,
        description: "가열과 제습을 동시에 처리하는 복합 시스템입니다. 선박 블록 탱크, 도장 공정 전처리 등 고습 환경의 공정에 최적화되어 있습니다.",
        tags: ["조선", "도장전처리"],
      },
      {
        title: "차량 도장 건조 시스템",
        subtitle: "Paint Dryer System",
        image: `${S3}/images/forcar.png`,
        description: "자동차 및 조선 도장 라인에 특화된 열풍 건조 시스템입니다. 균일한 온도 분포와 정밀 제어로 도장 품질을 향상시킵니다.",
        tags: ["자동차", "조선"],
      },
    ],
  },
  {
    id: "burner",
    label: "산업용 버너",
    sublabel: "Industrial Burner",
    products: [
      {
        title: "NBP-MB",
        subtitle: "금속화이버 표면연소 버너",
        image: `${S3}/images/metal%20burner1.png`,
        description: "NBP KOREA가 자체 개발한 고효율 금속화이버 버너입니다. 내열 금속섬유로 제작된 연소면에서 적외선 복사열을 발생시켜 에너지 효율을 30% 이상 향상시키고, NOx를 대폭 저감합니다.",
        tags: ["환경설비", "연소설비", "범용"],
        isMain: true,
      },
      {
        title: "NBP-SMB",
        subtitle: "소형 금속화이버 버너",
        image: `${S3}/images/smallmetalburner.png`,
        description: "소형 장비 및 협소 공간에 적합한 컴팩트형 금속화이버 버너입니다. 6가지 용량 변형 제품으로 다양한 소형 산업 장비에 맞춤 적용이 가능합니다.",
        tags: ["소형장비", "특수장비"],
      },
    ],
  },
];

function ProductCard({
  product,
  index,
}: {
  product: (typeof tabs)[0]["products"][0];
  index: number;
}) {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`group transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${(index % 3) * 150}ms` }}
    >
      <div className="relative aspect-[4/3] mb-6 overflow-hidden bg-[#e8e8e0]">
        {"image" in product && (
          <Image
            src={product.image as string}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        )}
      </div>

      <div>
        <span className="text-[10px] tracking-[0.2em] uppercase text-[#888480] block mb-1">
          {product.subtitle}
        </span>
        <h3 className="text-lg md:text-xl tracking-[0.08em] font-medium text-[#2d2a28] mb-3">
          {product.title}
          {"isMain" in product && product.isMain && (
            <span className="ml-2 text-[10px] tracking-[0.1em] border border-[#C05010] text-[#C05010] px-2 py-0.5 align-middle">
              주력
            </span>
          )}
        </h3>
        <p className="text-xs leading-[2] text-[#888480] mb-4">{product.description}</p>
        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] tracking-[0.08em] border border-[#e0e0e0] px-2 py-0.5 text-[#888480]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function IndustryTagsSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const tags = ["조선/해양", "자동차", "중공업", "화학/석유화학", "환경/악취처리", "반도체", "식품가공", "제약", "섬유", "에너지"];

  return (
    <section ref={ref} className="py-16 px-6 md:px-12 bg-[#fafafa] border-t border-[#e0e0e0]">
      <div className="max-w-7xl mx-auto">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#888480] mb-6">Industry Applications</p>
        <div
          className={`flex flex-wrap gap-3 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs tracking-[0.08em] border border-[#d4d4cc] px-4 py-2 text-[#888480] hover:border-[#2d2a28] hover:text-[#2d2a28] transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div
            className={`transition-all duration-1000 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <span className="section-label block mb-4">Why NBP KOREA</span>
            <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-light text-[#2d2a28] mb-6">
              20년 기술력으로
              <br />
              산업 현장에 최적화된 솔루션
            </h2>
            <p className="text-sm leading-[2] text-[#888480] mb-8">
              자체 R&D와 19건의 등록 특허, 미국·터키 글로벌 파트너십을 바탕으로
              환경설비부터 연소장비까지 설계·제작·시공·A/S의 원스톱 서비스를 제공합니다.
            </p>
            <div className="grid grid-cols-3 gap-8">
              {[
                { number: "19건", label: "등록 특허" },
                { number: "80+", label: "납품 실적" },
                { number: "A/S", label: "전국 서비스" },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="text-2xl md:text-3xl font-light text-[#2d2a28] block mb-1">
                    {stat.number}
                  </span>
                  <span className="text-[10px] tracking-[0.15em] uppercase text-[#888480]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`transition-all duration-1000 delay-300 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#e8e8e0]">
              <Image
                src={`${S3}/images/building.jpg`}
                alt="NBP KOREA 제품 개요"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("environment");

  const currentTab = tabs.find((t) => t.id === activeTab) ?? tabs[0];

  return (
    <SubpageLayout
      title="PRODUCTS & SOLUTIONS"
      subtitle="환경설비, 연소설비, 산업용 버너 — 산업 현장을 위한 최적의 솔루션"
      breadcrumb={[{ label: "제품/솔루션", href: "/products" }]}
    >
      {/* Tab Navigation */}
      <section className="py-16 px-6 md:px-12 border-b border-[#e0e0e0]">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 md:flex-none px-8 py-4 text-xs tracking-[0.15em] uppercase border transition-all ${
                  activeTab === tab.id
                    ? "bg-[#2d2a28] text-[#f3f3ec] border-[#2d2a28]"
                    : "border-[#e0e0e0] text-[#888480] hover:border-[#2d2a28] hover:text-[#2d2a28]"
                }`}
              >
                <span className="hidden md:inline">{tab.label}</span>
                <span className="md:hidden">{tab.sublabel}</span>
              </button>
            ))}
          </div>
          <div className="mt-6">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#888480]">
              {currentTab.sublabel}
            </span>
            <p className="text-sm text-[#2d2a28] mt-1 tracking-[0.05em]">
              {currentTab.label} — {currentTab.products.length}개 제품
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {currentTab.products.map((product, index) => (
              <ProductCard key={product.title} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Industry Tags */}
      <IndustryTagsSection />

      {/* Feature Section */}
      <FeatureSection />

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-light text-[#2d2a28] mb-4">
            맞춤 설비 솔루션이 필요하신가요?
          </h2>
          <p className="text-sm text-[#888480] tracking-[0.08em] mb-8">
            현장 조건에 맞는 최적의 환경·연소 설비를 제안해 드립니다. 전문 엔지니어와 상담하세요.
          </p>
          <Link
            href="/support"
            className="inline-flex items-center gap-3 text-xs tracking-[0.15em] uppercase border border-[#2d2a28] px-8 py-4 hover:bg-[#2d2a28] hover:text-white transition-all"
          >
            상담 문의하기
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1" />
            </svg>
          </Link>
        </div>
      </section>
    </SubpageLayout>
  );
}
