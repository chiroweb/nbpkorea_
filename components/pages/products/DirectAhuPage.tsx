"use client";
import ProductPlaceholderPage from "./ProductPlaceholderPage";
import { useTranslations } from "next-intl";
import FloatingCaseLink from "@/components/FloatingCaseLink";
import ApplicationTags from "@/components/ApplicationTags";

export default function DirectAhuPage() {
  const t = useTranslations("products");
  return (
    <><ProductPlaceholderPage
      activeTab="hvac"
      activeProduct="direct-ahu"
      navLabel={t("nav.directAhu")}
      breadcrumbCategory={t("breadcrumbs.hvac")}
      breadcrumbCategoryHref="/products?tab=hvac"
      subtitle="HVAC · Direct-Fired AHU"
      titleKo="직화식 공조기"
      titleEn="Direct-Fired Air Handling Unit"
      description={t("hvac.directAhu.description")}
      image="https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com/images/hvac/direct-ahu-thumb.jpg"
      tags={["직화식", "고효율", "공조"]}
      ctaTitleKey="직화식 공조기 도입을 검토 중이신가요?"
      ctaDescKey="현장 조건에 맞는 최적 사양을 제안해 드립니다."
    />
    <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-8 mb-8">
      <ApplicationTags category="hvac" tags={["직화식", "공조"]} />
    </div>
    <FloatingCaseLink category="hvac" tag="직화식 공조기" label="직화식 공조기 적용 사례 보러가기" /></>
  );
}
