"use client";
import SubpageLayout from "@/components/SubpageLayout";
import ProductNav from "@/components/ProductNav";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import FloatingCaseLink from "@/components/FloatingCaseLink";
import ApplicationTags from "@/components/ApplicationTags";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

const subProducts = [
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
];

export default function MetalFiberBurnerPage() {
  const t = useTranslations("products");
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
            <div>
              <span className="text-[13px] tracking-[0.04em] uppercase text-[#C05010] block mb-3">
                Industrial Burner · Metal Fiber / Ceramic
              </span>
              <h2 className="text-2xl md:text-3xl font-light tracking-[0.08em] text-[#2d2a28] mb-4">
                메탈버너<br />
                <span className="text-lg text-[#5C6470]">(Metal Fiber Burner)</span>
              </h2>
              <p className="text-sm text-[#5C6470] leading-relaxed mb-8">
                {t("burner.metalFiberBurner.description")}
              </p>
              <div className="flex flex-wrap gap-3">
                {["세라믹 버너", "메탈섬유 버너", "적외선 복사열", "저NOx", "고효율"].map((tag) => (
                  <span key={tag} className="text-[14px] tracking-[0.04em] border border-[#D4DAE2] px-3 py-1 text-[#5C6470]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="relative aspect-[4/3] overflow-hidden bg-white border border-[#C05010]/30">
                <img
                  src={`${S3}/images/burner/metal-fiber-burner-thumb.png`}
                  alt="메탈버너"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sub Products */}
        <section className="px-6 md:px-12 py-16 bg-[#F9FAFB] border-y border-[#D4DAE2]">
          <div className="max-w-7xl mx-auto">
            <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-8">제품 라인업</p>
            <div className="grid md:grid-cols-2 gap-8">
              {subProducts.map((product) => (
                <div
                  key={product.id}
                  className="group border border-[#D4DAE2] bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#FAFAFA]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
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

        {/* 적용 예시 */}
        <section className="px-6 md:px-12 py-16 border-t border-[#D4DAE2]">
          <div className="max-w-7xl mx-auto">
            <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-8">적용 예시</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { src: `${S3}/images/burner/metal-fiber-app-1.png`, alt: "메탈버너 적용 예시 1" },
                { src: `${S3}/images/burner/metal-fiber-app-2.png`, alt: "메탈버너 적용 예시 2" },
              ].map((img) => (
                <div key={img.alt} className="relative aspect-[4/3] overflow-hidden bg-[#F8F9FB] border border-[#D4DAE2]">
                  <img src={img.src} alt={img.alt} className="object-cover w-full h-full" />
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
        <ApplicationTags category="burner" tags={["메탈버너", "세라믹 버너", "적외선", "저NOx"]} />
      </div>
      <FloatingCaseLink category="burner" tag="메탈버너" label="메탈버너 적용 사례 보러가기" />
    </>
  );
}
