"use client";
import ProductPlaceholderPage from "./ProductPlaceholderPage";
import { useTranslations } from "next-intl";
import FloatingCaseLink from "@/components/FloatingCaseLink";
import ApplicationTags from "@/components/ApplicationTags";

export default function DryRoomPage() {
  const t = useTranslations("products");
  return (
    <><ProductPlaceholderPage
      activeTab="hvac"
      activeProduct="dry-room"
      navLabel={t("nav.dryRoom")}
      breadcrumbCategory={t("breadcrumbs.hvac")}
      breadcrumbCategoryHref="/products?tab=hvac"
      subtitle="HVAC · Dry Room"
      titleKo="드라이룸 공조기"
      titleEn="Dry Room AHU"
      description={t("hvac.dryRoom.description")}
      image="https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com/images/hvac/dry-room-main.jpg"
      tags={["2차전지", "저녹스", "초저습"]}
      ctaTitleKey="드라이룸 공조기 도입을 검토 중이신가요?"
      ctaDescKey="현장 조건에 맞는 최적 사양을 제안해 드립니다."
    />
    <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-8 mb-8">
      <ApplicationTags category="hvac" tags={["2차전지", "저녹스"]} />
    </div>
    <FloatingCaseLink category="hvac" tag="드라이룸" label="드라이룸 공조기 적용 사례 보러가기" /></>
  );
}
