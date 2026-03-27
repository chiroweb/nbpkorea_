"use client";
import ProductPlaceholderPage from "./ProductPlaceholderPage";
import { useTranslations } from "next-intl";
import FloatingCaseLink from "@/components/FloatingCaseLink";
import ApplicationTags from "@/components/ApplicationTags";

export default function OvenBurnerPage() {
  const t = useTranslations("products");
  return (
    <><ProductPlaceholderPage
      activeTab="burner"
      activeProduct="oven-burner"
      navLabel={t("nav.ovenBurner")}
      breadcrumbCategory={t("breadcrumbs.burner")}
      breadcrumbCategoryHref="/products?tab=burner"
      subtitle="Industrial Burner · Oven"
      titleKo="오븐 버너"
      titleEn="Oven Burner"
      description={t("burner.ovenBurner.description")}
      tags={["오븐", "열처리", "산업용"]}
      image="https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com/images/burner/oven-burner-main.jpg"
      ctaTitleKey={t("burner.ovenBurner.ctaTitle")}
      ctaDescKey={t("burner.ovenBurner.ctaDesc")}
    />
    <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-8 mb-8">
      <ApplicationTags category="burner" tags={["오븐 버너"]} />
    </div>
    <FloatingCaseLink category="burner" tag="오븐 버너" label="오븐 버너 적용 사례 보러가기" /></>
  );
}
