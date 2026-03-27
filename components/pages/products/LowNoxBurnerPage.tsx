"use client";
import ProductPlaceholderPage from "./ProductPlaceholderPage";
import { useTranslations } from "next-intl";
import FloatingCaseLink from "@/components/FloatingCaseLink";
import ApplicationTags from "@/components/ApplicationTags";

export default function LowNoxBurnerPage() {
  const t = useTranslations("products");
  return (
    <><ProductPlaceholderPage
      activeTab="burner"
      activeProduct="low-nox-burner"
      navLabel={t("nav.lowNoxBurner")}
      breadcrumbCategory={t("breadcrumbs.burner")}
      breadcrumbCategoryHref="/products?tab=burner"
      subtitle="Industrial Burner · Low NOx"
      titleKo="저녹스 버너"
      titleEn="Low NOx Burner"
      description={t("burner.lowNoxBurner.description")}
      tags={["Low NOx", "저배출", "친환경"]}
      image="https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com/images/burner/fpb/gas-burners-low-nox-40199-6408963.jpg"
      ctaTitleKey={t("burner.lowNoxBurner.ctaTitle")}
      ctaDescKey={t("burner.lowNoxBurner.ctaDesc")}
    />
    <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-8 mb-8">
      <ApplicationTags category="burner" tags={["저녹스 버너"]} />
    </div>
    <FloatingCaseLink category="burner" tag="저녹스 버너" label="저녹스 버너 적용 사례 보러가기" /></>
  );
}
