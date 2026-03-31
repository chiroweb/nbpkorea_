"use client";
import ProductPlaceholderPage from "./ProductPlaceholderPage";
import { useTranslations } from "next-intl";
import FloatingCaseLink from "@/components/FloatingCaseLink";
import ApplicationTags from "@/components/ApplicationTags";

export default function ValveBurnerPage() {
  const t = useTranslations("products");
  return (
    <><ProductPlaceholderPage
      activeTab="burner"
      activeProduct="valve-burner"
      navLabel={t("nav.valveBurner")}
      breadcrumbCategory={t("breadcrumbs.burner")}
      breadcrumbCategoryHref="/products?tab=burner"
      subtitle="Industrial Burner · Valve"
      titleKo="밸브버너"
      titleEn="Valve Burner"
      description={t("burner.valveBurner.description")}
      image="https://nbpkoreare.s3.ap-northeast-2.amazonaws.com/images/burner/valve-burner.jpg"
      tags={["벨브", "버너"]}
      ctaTitleKey={t("burner.valveBurner.ctaTitle")}
      ctaDescKey={t("burner.valveBurner.ctaDesc")}
    />
    <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-8 mb-8">
      <ApplicationTags category="burner" tags={["밸브", "버너"]} />
    </div>
    <FloatingCaseLink category="burner" tag="밸브버너" label="밸브버너 적용 사례 보러가기" /></>
  );
}
