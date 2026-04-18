"use client";

import ProductPlaceholderPage from "./ProductPlaceholderPage";
import { useTranslations, useLocale } from "next-intl";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

export default function CeramicBurnerPage() {
  const t = useTranslations("products");
  const locale = useLocale() as "en" | "ko";

  return (
    <ProductPlaceholderPage
      activeTab="burner"
      activeProduct="ceramic-burner"
      navLabel={t("nav.ceramicBurner")}
      breadcrumbCategory={t("breadcrumbs.burner")}
      breadcrumbCategoryHref="/products?tab=burner"
      subtitle="Industrial Burner · Ceramic Burner"
      titleKo="세라믹 버너"
      titleEn="Ceramic Burner"
      description={
        locale === "en"
          ? "Surface combustion burner using heat-resistant ceramic material as the combustion surface. Maximizes infrared radiant heat for outstanding energy efficiency and uniform heat distribution."
          : "내열 세라믹 소재를 연소면으로 활용한 표면연소 버너. 적외선 복사열을 극대화하여 에너지 효율이 뛰어나며 균일한 열분포를 실현합니다."
      }
      tags={locale === "en" ? ["Ceramic", "Infrared", "Surface Combustion"] : ["세라믹", "적외선", "표면연소"]}
      image={`${S3}/images/burner/ceramic-burner.jpg`}
      ctaTitleKey={locale === "en" ? "Considering the Ceramic Burner?" : "세라믹 버너 도입을 검토 중이신가요?"}
      ctaDescKey={locale === "en" ? "We will propose the optimal specifications for your site conditions." : "현장 조건에 맞는 최적 사양을 제안해 드립니다."}
    />
  );
}
