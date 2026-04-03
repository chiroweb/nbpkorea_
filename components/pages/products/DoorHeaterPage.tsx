"use client";
import ProductPlaceholderPage from "./ProductPlaceholderPage";
import { useTranslations } from "next-intl";
import FloatingCaseLink from "@/components/FloatingCaseLink";
import ApplicationTags from "@/components/ApplicationTags";

export default function DoorHeaterPage() {
  const t = useTranslations("products");
  return (
    <><ProductPlaceholderPage
      activeTab="hvac"
      activeProduct="door-heater"
      navLabel={t("nav.doorHeater")}
      breadcrumbCategory={t("breadcrumbs.hvac")}
      breadcrumbCategoryHref="/products?tab=hvac"
      subtitle="HVAC · Door Heater"
      titleKo="도어히터"
      titleEn="Door Heater"
      description={t("hvac.doorHeater.description")}
      image="https://nbpkoreare.s3.ap-northeast-2.amazonaws.com/images/hvac/door-heater.png"
      tags={["출입구", "에어커튼", "열손실 방지"]}
      ctaTitleKey="도어히터 도입을 검토 중이신가요?"
      ctaDescKey="현장 조건에 맞는 최적 사양을 제안해 드립니다."
    />
    <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-8 mb-8">
      <ApplicationTags category="hvac" tags={["출입구", "에어커튼"]} />
    </div>
    <FloatingCaseLink category="hvac" tag="도어히터" label="도어히터 적용 사례 보러가기" /></>
  );
}
