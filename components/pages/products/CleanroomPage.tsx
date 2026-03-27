"use client";
import ProductPlaceholderPage from "./ProductPlaceholderPage";
import { useTranslations } from "next-intl";
import FloatingCaseLink from "@/components/FloatingCaseLink";
import ApplicationTags from "@/components/ApplicationTags";

export default function CleanroomPage() {
  const t = useTranslations("products");
  return (
    <><ProductPlaceholderPage
      activeTab="hvac"
      activeProduct="cleanroom"
      navLabel={t("nav.cleanroom")}
      breadcrumbCategory={t("breadcrumbs.hvac")}
      breadcrumbCategoryHref="/products?tab=hvac"
      subtitle="HVAC · Clean Room"
      titleKo="클린룸 공조 시스템"
      titleEn="Clean Room HVAC System"
      description={t("hvac.cleanroom.description")}
      image="https://nbpkoreare.s3.ap-northeast-2.amazonaws.com/images/hvac/cleanroom.jpg"
      tags={["반도체", "제약", "정밀제조", "청정환경"]}
      ctaTitleKey={t("hvac.cleanroom.subtitle") + " 도입을 검토 중이신가요?"}
      ctaDescKey="현장 조건에 맞는 최적 사양을 제안해 드립니다."
    />
    <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-8 mb-8">
      <ApplicationTags category="hvac" tags={["반도체", "제약", "정밀"]} />
    </div>
    <FloatingCaseLink category="hvac" tag="클린룸" label="클린룸 적용 사례 보러가기" /></>
  );
}
