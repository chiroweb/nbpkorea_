"use client";
import SubpageLayout from "@/components/SubpageLayout";
import ProductNav from "@/components/ProductNav";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import FloatingCaseLink from "@/components/FloatingCaseLink";
import ApplicationTags from "@/components/ApplicationTags";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

const fpbProducts = [
  {
    id: "gas-burners",
    name: "Gas Burners",
    nameKo: "가스 버너",
    image: `${S3}/images/burner/fpb/gas-burners-40199-6233087.jpg`,
  },
  {
    id: "gas-burners-low-nox",
    name: "Gas Burners Low NOx",
    nameKo: "가스 버너 (Low NOx)",
    image: `${S3}/images/burner/fpb/gas-burners-low-nox-40199-6408963.jpg`,
  },
  {
    id: "dual-fuel-burners",
    name: "Dual Fuel Burners",
    nameKo: "이중연료 버너",
    image: `${S3}/images/burner/fpb/dual-fuel-burners-40199-6408931.jpg`,
  },
  {
    id: "dual-fuel-burners-low-nox",
    name: "Dual Fuel Burners Low NOx",
    nameKo: "이중연료 버너 (Low NOx)",
    image: `${S3}/images/burner/fpb/dual-fuel-burners-low-nox-40199-6454911.jpg`,
  },
  {
    id: "fuel-oil-burners",
    name: "Fuel Oil Burners",
    nameKo: "경유 버너",
    image: `${S3}/images/burner/fpb/fuel-oil-burners-40199-6442147.jpg`,
  },
  {
    id: "light-fuel-oil-burners",
    name: "Light Fuel Oil Burners",
    nameKo: "경질유 버너",
    image: `${S3}/images/burner/fpb/light-fuel-oil-burners-40199-6443263.jpg`,
  },
  {
    id: "multi-fuel-burners",
    name: "Multi Fuel Burners",
    nameKo: "다중연료 버너",
    image: `${S3}/images/burner/fpb/multi-fuel-burners-40199-6443461.jpg`,
  },
  {
    id: "natural-gas-burners-oxygen",
    name: "Natural Gas Burners (Oxygen)",
    nameKo: "천연가스 버너 (산소)",
    image: `${S3}/images/burner/fpb/natural-gas-burners-oxygen-40199-6454243.jpg`,
  },
  {
    id: "air-heating-burners",
    name: "Air Heating Burners",
    nameKo: "공기가열 버너",
    image: `${S3}/images/burner/fpb/air-heating-burners-40199-6454995.jpg`,
  },
  {
    id: "process-burner",
    name: "Process Burner",
    nameKo: "프로세스 버너",
    image: `${S3}/images/burner/fpb/Process-Burner-2.jpeg`,
  },
  {
    id: "duoblock-burners",
    name: "Duoblock Burners (Rotary Cup)",
    nameKo: "듀오블록 버너 (로터리컵)",
    image: `${S3}/images/burner/fpb/duoblock-burners-rotary-cup-40199-6453781.jpg`,
  },
  {
    id: "close-coupled-burners",
    name: "Close-Coupled Burners (Rotary Cup)",
    nameKo: "클로즈커플드 버너 (로터리컵)",
    image: `${S3}/images/burner/fpb/close-coupled-burners-rotary-cup-40199-6421815.jpg`,
  },
  {
    id: "mobile-hot-air-generators",
    name: "Mobile Hot Air Generators",
    nameKo: "이동식 열풍발생기",
    image: `${S3}/images/burner/fpb/mobile-hot-air-generators-fuel-oil-40199-6455619.jpg`,
  },
];

export default function FpbBurnerPage() {
  const t = useTranslations("products");
  return (
    <>
      <SubpageLayout
        title={t("nav.fpbBurner")}
        subtitle="Industrial Burner · FPB"
        breadcrumb={[
          { label: t("breadcrumb"), href: "/products" },
          { label: t("breadcrumbs.burner"), href: "/products?tab=burner" },
          { label: t("nav.fpbBurner"), href: "#" },
        ]}
      >
        <ProductNav activeTab="burner" activeProduct="fpb-burner" />

        {/* Hero */}
        <section className="px-6 md:px-12 py-16">
          <div className="max-w-7xl mx-auto">
            <span className="text-[13px] tracking-[0.04em] uppercase text-[#C05010] block mb-3">
              Industrial Burner · FPB
            </span>
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.08em] text-[#2d2a28] mb-4">
              FPB 버너<br />
              <span className="text-lg text-[#5C6470]">(FPB Burner)</span>
            </h2>
            <p className="text-sm text-[#5C6470] leading-relaxed mb-12 max-w-2xl">
              {t("burner.fpbBurner.description")}
            </p>

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {fpbProducts.map((product) => (
                <div
                  key={product.id}
                  className="group border border-[#D4DAE2] bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative aspect-square overflow-hidden bg-[#FAFAFA]">
                    <img
                      src={product.image}
                      alt={product.nameKo}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-[#2d2a28] tracking-[0.05em] mb-1">
                      {product.nameKo}
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
              카탈로그 신청
            </Link>
            <Link href="/support" className="text-xs tracking-[0.06em] uppercase bg-[#C05010] text-white px-6 py-3 hover:bg-[#2d2a28] transition-all duration-300">
                {t("common.contact")}
              </Link>
            </div>
          </div>
        </section>
      </SubpageLayout>

      <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-8 mb-8">
        <ApplicationTags category="burner" tags={["FPB"]} />
      </div>
      <FloatingCaseLink category="burner" tag="FPB 버너" label="FPB 버너 적용 사례 보러가기" />
    </>
  );
}
