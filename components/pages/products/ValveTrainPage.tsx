"use client";
import ProductPlaceholderPage from "./ProductPlaceholderPage";
import { useTranslations } from "next-intl";
import FloatingCaseLink from "@/components/FloatingCaseLink";
import ApplicationTags from "@/components/ApplicationTags";

export default function ValveTrainPage() {
  const t = useTranslations("products");
  return (
    <><ProductPlaceholderPage
      activeTab="burner"
      activeProduct="valve-train"
      navLabel={t("nav.valveTrain")}
      breadcrumbCategory={t("breadcrumbs.burner")}
      breadcrumbCategoryHref="/products?tab=burner"
      subtitle="Industrial Burner · Valve Train & Parts"
      titleKo="밸브트레인/부품류"
      titleEn="Valve Train & Parts"
      description={t("burner.valveTrain.description")}
      image="https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com/images/burner/valve-train-main.jpg"
      tags={["밸브트레인", "가스제어", "부품류"]}
      ctaTitleKey={t("burner.valveTrain.ctaTitle")}
      ctaDescKey={t("burner.valveTrain.ctaDesc")}
    />
    <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-8 mb-8">
      <ApplicationTags category="burner" tags={["벨브트레인", "가스제어"]} />
    </div>
    <FloatingCaseLink category="burner" tag="벨브트레인" label="벨브트레인 적용 사례 보러가기" /></>
  );
}
