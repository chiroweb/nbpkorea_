"use client";

import SubpageLayout from "@/components/SubpageLayout";
import ProductNav from "@/components/ProductNav";
import { useInView } from "@/hooks/useInView";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import FloatingCaseLink from "@/components/FloatingCaseLink";


const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

const specs = [
  { model: "NKCTO-050", airflow: 50, heatInput: "400,000", power: 22, length: "3,400", width: "1,860", height: "2,130" },
  { model: "NKCTO-100", airflow: 100, heatInput: "550,000", power: 22, length: "3,400", width: "1,860", height: "2,130" },
  { model: "NKCTO-150", airflow: 150, heatInput: "550,000", power: 37, length: "3,400", width: "1,860", height: "2,130" },
  { model: "NKCTO-200", airflow: 200, heatInput: "870,000", power: 45, length: "4,000", width: "2,400", height: "2,130" },
  { model: "NKCTO-250", airflow: 250, heatInput: "870,000", power: 55, length: "4,000", width: "2,400", height: "2,130" },
  { model: "NKCTO-300", airflow: 300, heatInput: "870,000", power: 75, length: "4,500", width: "2,400", height: "2,130" },
  { model: "NKCTO-400", airflow: 400, heatInput: "1,200,000", power: 90, length: "4,700", width: "2,540", height: "2,130" },
];

const content = {
  en: {
    mechanismLabel: "Catalytic Oxidation\n250~450°C",
    floatingLabel: "View CTO Case Studies",
  },
  ko: {
    mechanismLabel: "촉매산화\n250~450°C",
    floatingLabel: "CTO 적용 사례 보러가기",
  },
};

export default function NkCtoPage() {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: specRef, isInView: specInView } = useInView({ threshold: 0.1 });
  const { ref: appRef, isInView: appInView } = useInView({ threshold: 0.1 });
  const t = useTranslations("products");
  const locale = useLocale() as "en" | "ko";
  const c = content[locale] ?? content.ko;

  const features = t.raw("environment.nkCto.features") as string[];
  const applications = t.raw("environment.nkCto.applications") as string[];
  const tags = t.raw("environment.nkCto.tags") as string[];

  return (
    <SubpageLayout
      title="NK-CTO"
      subtitle={`${t("environment.nkCto.subtitle")} — Catalytic Thermal Oxidizer`}
      breadcrumb={[
        { label: t("breadcrumb"), href: "/products" },
        { label: t("breadcrumbs.environment"), href: "/products" },
        { label: "NK-CTO", href: "/products/environment/nk-cto" },
      ]}
    >
      <FloatingCaseLink category="environment" tag="CTO" label={c.floatingLabel} />
      {/* 공통 제품 네비게이션 */}
      <ProductNav activeTab="environment" activeProduct="nk-cto" />

      {/* Hero */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div
            ref={heroRef}
            className={`transition-all duration-1000 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <span className="text-[13px] tracking-[0.04em] uppercase text-[#C05010] block mb-3">
              Environment · Catalytic Thermal Oxidizer
            </span>
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.08em] text-[#2d2a28] mb-6">
              {t("environment.nkCto.heroTitle")}
            </h2>
            <p className="text-sm text-[#5C6470] leading-relaxed mb-6">
              {t("environment.nkCto.heroDesc1")}
            </p>
            <p className="text-sm text-[#5C6470] leading-relaxed mb-8">
              {t("environment.nkCto.heroDesc2")}
            </p>
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span key={tag} className="text-[14px] tracking-[0.04em] border border-[#D4DAE2] px-3 py-1 text-[#5C6470]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div
            className={`transition-all duration-1000 delay-300 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-white border border-[#C05010]/30">
              <Image
                src={`${S3}/images/%ED%99%98%EA%B2%BD%EC%82%AC%EC%97%85%EB%B6%80/Environment%20Business%20Division/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EC%9A%A9%20CTO%20%EB%A0%8C%EB%8D%94%EB%A7%81-nowatermark.jpg`}
                alt="NK-CTO Catalytic Thermal Oxidizer"
                fill
                className="object-cover"
                priority
               unoptimized />
            </div>
          </div>
        </div>
      </section>

      {/* 적용 분야 — 히어로 바로 아래 */}
      <section ref={appRef} className="px-6 md:px-12 py-12 border-t border-[#D4DAE2] bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-6">{t("common.applications")}</p>
          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 transition-all duration-1000 ${appInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {applications.map((app) => (
              <Link key={app} href={`/performance?tag=${encodeURIComponent(app)}&cat=environment`} className="text-[14px] tracking-[0.04em] border border-[#D4DAE2] px-3 py-2 text-[#5C6470] hover:border-[#C05010] hover:text-[#C05010] hover:bg-[#C05010]/5 transition-all duration-200">

                {app}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mechanism */}
      <section className="px-6 md:px-12 py-12 bg-white border-y border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-6">Mechanism</p>
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            {[
              { label: "VOCs + O₂", bg: "#DCE2E8", text: "#2d2a28" },
              { label: "→", bg: "transparent", text: "#C8D0DA", isArrow: true },
              { label: c.mechanismLabel, bg: "#C05010", text: "#fff" },
              { label: "→", bg: "transparent", text: "#C8D0DA", isArrow: true },
              { label: "CO₂ + H₂O", bg: "#E8A060", text: "#fff" },
              { label: "+", bg: "transparent", text: "#C8D0DA", isArrow: true },
              { label: "Heat of Reaction", bg: "#C05010", text: "#fff" },
            ].map((step, i) => (
              step.isArrow ? (
                <span key={i} className="text-xl text-[#C8D0DA]">→</span>
              ) : (
                <div
                  key={i}
                  className="px-4 py-3 text-xs tracking-[0.08em] text-center whitespace-pre-line"
                  style={{ backgroundColor: step.bg, color: step.text, border: step.bg === "transparent" ? "none" : undefined }}
                >
                  {step.label}
                </div>
              )
            ))}
          </div>
          <p className="text-[14px] text-[#5C6470] mt-4 tracking-[0.05em]">{t("common.heatRecovery")} (Heat Recovery)</p>
          <div className="mt-10 flex justify-start">
            <div className="relative w-full max-w-4xl overflow-hidden border border-[#D4DAE2] bg-white">
              <Image
                src="https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com/images/cto.png"
                alt="NK-CTO mechanism diagram"
                width={816}
                height={600}
                className="h-auto w-full"
               unoptimized />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-8">{t("common.features")}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-4 border border-[#D4DAE2]">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C05010] flex-shrink-0" />
                <span className="text-sm text-[#3D4450] leading-relaxed tracking-[0.02em]">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spec Table */}
      <section ref={specRef} className="px-6 md:px-12 py-16 bg-[#FAFAFA] border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-2">{t("common.specifications")}</p>
          <p className="text-xs text-[#5C6470] mb-8 tracking-[0.05em]">{t("common.selectModel")}</p>
          <div
            className={`overflow-x-auto transition-all duration-1000 ${specInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b-2 border-[#2d2a28]">
                  <th className="text-left py-3 px-4 text-[13px] tracking-[0.06em] uppercase text-[#2d2a28] font-medium">MODEL</th>
                  <th className="text-center py-3 px-4 text-[13px] tracking-[0.06em] uppercase text-[#2d2a28] font-medium">Airflow<br />(Nm³/min)</th>
                  <th className="text-center py-3 px-4 text-[13px] tracking-[0.06em] uppercase text-[#2d2a28] font-medium">Heat Input<br />(Kcal/hr)</th>
                  <th className="text-center py-3 px-4 text-[13px] tracking-[0.06em] uppercase text-[#2d2a28] font-medium">Power<br />(kW)</th>
                  <th className="text-center py-3 px-4 text-[13px] tracking-[0.06em] uppercase text-[#2d2a28] font-medium">Length<br />(mm)</th>
                  <th className="text-center py-3 px-4 text-[13px] tracking-[0.06em] uppercase text-[#2d2a28] font-medium">Width<br />(mm)</th>
                  <th className="text-center py-3 px-4 text-[13px] tracking-[0.06em] uppercase text-[#2d2a28] font-medium">Height<br />(mm)</th>
                </tr>
              </thead>
              <tbody>
                {specs.map((row) => (
                  <tr
                    key={row.model}
                    onClick={() => setSelectedModel(selectedModel === row.model ? null : row.model)}
                    className={`cursor-pointer border-b border-[#D4DAE2] transition-colors duration-300 ${
                      selectedModel === row.model
                        ? "bg-[#C05010]/10 border-l-2 border-[#C05010]"
                        : "hover:bg-white"
                    }`}
                  >
                    <td className={`py-3.5 px-4 font-medium tracking-[0.05em] ${selectedModel === row.model ? "text-[#C05010]" : "text-[#2d2a28]"}`}>
                      {row.model}
                    </td>
                    <td className="py-3.5 px-4 text-center text-[#5C6470]">{row.airflow}</td>
                    <td className="py-3.5 px-4 text-center text-[#5C6470]">{row.heatInput}</td>
                    <td className="py-3.5 px-4 text-center text-[#5C6470]">{row.power}</td>
                    <td className="py-3.5 px-4 text-center text-[#5C6470]">{row.length}</td>
                    <td className="py-3.5 px-4 text-center text-[#5C6470]">{row.width}</td>
                    <td className="py-3.5 px-4 text-center text-[#5C6470]">{row.height}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[13px] text-[#5C6470] mt-4 tracking-[0.03em]">
            ※ {t("common.specNote")}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-16 border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg tracking-[0.08em] font-light text-[#2d2a28] mb-2">{t("environment.nkCto.ctaTitle")}</h3>
            <p className="text-sm text-[#5C6470]">{t("environment.nkCto.ctaDesc")}</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/products" className="btn-link group text-[#5C6470] text-xs tracking-[0.06em] uppercase">
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="rotate-180">
                <path d="M0 4H15M15 4L11 1M15 4L11 7" stroke="currentColor" strokeWidth="1"/>
              </svg>
              {t("common.backToList")}
            </Link>
            <Link
              href="/support"
              className="text-xs tracking-[0.06em] uppercase border border-[#2d2a28] px-6 py-3 hover:bg-[#C05010] hover:border-[#C05010] hover:text-white transition-all duration-300"
            >
              {t("common.contact")}
            </Link>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
