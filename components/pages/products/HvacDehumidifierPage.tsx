"use client";
import ProductPlaceholderPage from "./ProductPlaceholderPage";
import { useTranslations } from "next-intl";
import FloatingCaseLink from "@/components/FloatingCaseLink";
import ApplicationTags from "@/components/ApplicationTags";

export default function HvacDehumidifierPage() {
  const t = useTranslations("products");
  return (
    <><ProductPlaceholderPage
      activeTab="hvac"
      activeProduct="dehumidifier"
      navLabel={t("nav.dehumidifier")}
      breadcrumbCategory={t("breadcrumbs.hvac")}
      breadcrumbCategoryHref="/products?tab=hvac"
      subtitle="HVAC · Dehumidifier"
      titleKo="제습기"
      titleEn="Dehumidifier"
      description={t("hvac.dehumidifier.description")}
      tags={["제습", "도장", "조선", "클린룸"]}
      ctaTitleKey="제습기 도입을 검토 중이신가요?"
      ctaDescKey="현장 조건에 맞는 최적 사양을 제안해 드립니다."
    />
    <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-8 mb-8">
      <ApplicationTags category="hvac" tags={["제습", "도장"]} />
    </div>
    <FloatingCaseLink category="hvac" tag="제습기" label="제습기 적용 사례 보러가기" /></>
  );
}
