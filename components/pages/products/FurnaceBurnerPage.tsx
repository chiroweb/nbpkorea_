"use client";
import ProductPlaceholderPage from "./ProductPlaceholderPage";
import { useTranslations } from "next-intl";
import FloatingCaseLink from "@/components/FloatingCaseLink";
import ApplicationTags from "@/components/ApplicationTags";

export default function FurnaceBurnerPage() {
  const t = useTranslations("products");
  return (
    <><ProductPlaceholderPage
      activeTab="burner"
      activeProduct="furnace-burner"
      navLabel={t("nav.furnaceBurner")}
      breadcrumbCategory={t("breadcrumbs.burner")}
      breadcrumbCategoryHref="/products?tab=burner"
      subtitle="Industrial Burner · Furnace"
      titleKo="로용 버너"
      titleEn="Furnace Burner"
      description={t("burner.furnaceBurner.description")}
      tags={["로용", "산업용", "고온"]}
      image="https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com/images/burner/furnace-burner-main.jpg"
      ctaTitleKey={t("burner.furnaceBurner.ctaTitle")}
      ctaDescKey={t("burner.furnaceBurner.ctaDesc")}
    />
    <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-8 mb-8">
      <ApplicationTags category="burner" tags={["로용 버너"]} />
    </div>
    <FloatingCaseLink category="burner" tag="로용 버너" label="로용 버너 적용 사례 보러가기" /></>
  );
}
