"use client";

import SubpageLayout from "@/components/SubpageLayout";
import ProductNav from "@/components/ProductNav";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

interface ProductPlaceholderPageProps {
  activeTab: "environment" | "hvac" | "combustion" | "burner";
  activeProduct: string;
  navLabel: string;
  breadcrumbCategory: string;
  breadcrumbCategoryHref: string;
  subtitle: string;
  titleKo: string;
  titleEn: string;
  description: string;
  tags: string[];
  image?: string;
  ctaTitleKey: string;
  ctaDescKey: string;
}

export default function ProductPlaceholderPage({
  activeTab,
  activeProduct,
  navLabel,
  breadcrumbCategory,
  breadcrumbCategoryHref,
  subtitle,
  titleKo,
  titleEn,
  description,
  tags,
  image,
  ctaTitleKey,
  ctaDescKey,
}: ProductPlaceholderPageProps) {
  const t = useTranslations("products");

  return (
    <SubpageLayout
      title={navLabel}
      subtitle={`${titleEn} — ${subtitle}`}
      breadcrumb={[
        { label: t("breadcrumb"), href: "/products" },
        { label: breadcrumbCategory, href: breadcrumbCategoryHref },
        { label: navLabel, href: "#" },
      ]}
    >
      <ProductNav activeTab={activeTab} activeProduct={activeProduct} />

      {/* Hero */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[13px] tracking-[0.2em] uppercase text-[#C05010] block mb-3">
              {subtitle}
            </span>
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.08em] text-[#2d2a28] mb-6">
              {titleKo}<br />
              <span className="text-lg text-[#8B95A1]">({titleEn})</span>
            </h2>
            <p className="text-sm text-[#8B95A1] leading-[2] mb-8">
              {description}
            </p>
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span key={tag} className="text-[14px] tracking-[0.1em] border border-[#D4DAE2] px-3 py-1 text-[#8B95A1]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="relative aspect-[4/3] overflow-hidden bg-[#F2F4F7] flex items-center justify-center border border-[#D4DAE2]">
              {image ? (
                <img src={image} alt={titleKo} className="object-contain w-full h-full" />
              ) : (
                <div className="text-center">
                  <p className="text-sm text-[#C8D0DA] tracking-[0.1em]">제품 이미지 준비 중</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 맞춤형 솔루션 안내 */}
      <section className="px-6 md:px-12 py-16 bg-[#F2F4F7] border-y border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[13px] tracking-[0.2em] uppercase text-[#C05010] mb-4">Customized Solution</p>
          <p className="text-base text-[#2d2a28] font-medium mb-2">현장 조건에 맞는 맞춤형 솔루션으로 제공됩니다.</p>
          <p className="text-sm text-[#8B95A1]">문의 주시면 상세한 상담과 견적을 제공해 드리겠습니다.</p>
          <div className="mt-6">
            <Link href="/support" className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase border border-[#C05010] text-[#C05010] px-6 py-3 hover:bg-[#C05010] hover:text-white transition-all duration-300">
              상담 문의하기
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg tracking-[0.08em] font-light text-[#2d2a28] mb-2">{ctaTitleKey}</h3>
            <p className="text-sm text-[#8B95A1]">{ctaDescKey}</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href={`/products?tab=${activeTab}`} className="btn-link group text-[#8B95A1] text-xs tracking-[0.15em] uppercase">
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="rotate-180"><path d="M0 4H15M15 4L11 1M15 4L11 7" stroke="currentColor" strokeWidth="1"/></svg>
              {t("common.backToList")}
            </Link>
            <Link href="/support" className="text-xs tracking-[0.15em] uppercase border border-[#2d2a28] px-6 py-3 hover:bg-[#C05010] hover:border-[#C05010] hover:text-white transition-all duration-300">
              {t("common.contact")}
            </Link>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
