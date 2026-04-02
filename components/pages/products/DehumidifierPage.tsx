"use client";

import SubpageLayout from "@/components/SubpageLayout";
import ProductNav from "@/components/ProductNav";
import { useInView } from "@/hooks/useInView";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import FloatingCaseLink from "@/components/FloatingCaseLink";


const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

const specs = [
  { model: "NK-MDGH-8500",  airflow: "8,500",  coolingCap: "84,000",  heatingCap: "200,000",  fanMotor: "15",   length: "4,550", width: "2,350", height: "3,500", weight: "5", fuel: "LNG/LPG/Ethylene" },
  { model: "NK-MDGH-12000", airflow: "12,000", coolingCap: "140,000", heatingCap: "400,000",  fanMotor: "18.5", length: "4,650", width: "3,200", height: "3,550", weight: "7", fuel: "LNG/LPG/Ethylene" },
  { model: "NK-MDGH-15000", airflow: "15,000", coolingCap: "168,000", heatingCap: "400,000",  fanMotor: "22",   length: "4,750", width: "3,250", height: "3,550", weight: "9", fuel: "LNG/LPG/Ethylene" },
  { model: "NK-MDGH-30000", airflow: "30,000", coolingCap: "336,000", heatingCap: "1,000,000", fanMotor: "45",   length: "7,860", width: "3,500", height: "3,850", weight: "11", fuel: "LNG/LPG/Ethylene" },
];

const features = [
  "냉각제습기와 직화식 가스히터를 병행하여 설비 투자 비용 및 에너지 절약, 운전비용 절감",
  "직화방식으로 연료비 30% 절감 및 완전연소 친환경 설비",
  "온도 상승 시간 획기적 단축 / 생산성 향상 / 정밀한 온도제어",
  "A/S 비용 절감 및 수리 보전 간편",
  "검증된 Midco Gas Burner 사용으로 안전성 확보",
  "가스히터를 장착하여 4계절 복합형으로 운전 가능",
  "핫가스 코일 운용으로 냉각코일 출구온도 보향 — 에너지 절감",
  "냉동싸이클(Screw Type 압축기)을 이용한 간단한 구조",
  "제습 외에 냉각도 가능하여 출구공기온도를 임의로 제어 가능",
  "루버·댐퍼·엘리미네이터 일체형 패키지 구성",
  "선박 블록 공장/선거, 도장 작업, 클린룸, 저장창고 등 고습 환경 특화",
  "D.D.C 디지털 제어 시스템 적용",
];

const systemFlow = [
  "AIR (고습도)",
  "루버",
  "댐퍼",
  "냉각코일 (냉각제습)",
  "엘리미네이터",
  "가스히터 (동계 가온용)",
  "송풍기",
  "Room (저습도)",
];

const applications = [
  "선박 블록 용접 작업",
  "선박 블록 도장 작업",
  "클린룸",
  "제철·제강 공장",
  "저장창고·냉동창고",
  "도장 공정 전처리",
  "반도체·디스플레이",
  "식품 저장·가공",
  "의약품 제조",
  "정밀기기 보관",
  "건축 내부 마감",
  "기타 고습 환경",
];

export default function DehumidifierPage() {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: specRef, isInView: specInView } = useInView({ threshold: 0.1 });
  const { ref: appRef, isInView: appInView } = useInView({ threshold: 0.1 });
  const t = useTranslations("products");

  return (
    <SubpageLayout
      title="복합식 제습기"
      subtitle={`${t("combustion.dehumidifier.subtitle")} — Gas Heater Hybrid Dehumidifier`}
      breadcrumb={[
        { label: t("breadcrumb"), href: "/products" },
        { label: t("breadcrumbs.combustion"), href: "/products?tab=combustion" },
        { label: t("nav.dehumidifier"), href: "/products/combustion/dehumidifier" },
      ]}
    >
      <FloatingCaseLink category="combustion" tag="복합식 제습기" label="복합식 제습기 적용 사례 보러가기" />
      <ProductNav activeTab="combustion" activeProduct="dehumidifier" />

      {/* Hero */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div
            ref={heroRef}
            className={`transition-all duration-1000 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <span className="text-[13px] tracking-[0.04em] uppercase text-[#C05010] block mb-3">
              Combustion · Combined Dehumidifier
            </span>
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.08em] text-[#2d2a28] mb-6">
              복합식 제습기
            </h2>
            <p className="text-sm text-[#5C6470] leading-relaxed mb-6">
              냉각제습기와 직화식 가스히터를 병행하여 설비 투자 비용 및 에너지 절약, 운전비용 절감 효과를 실현한 복합식 제습 시스템입니다. 습기에 의한 불쾌감 또는 제품 품질의 생산성 저하를 막기 위해 공급공기를 그 노점온도 이하로 냉각시켜 공기 중의 수분을 제거하는 방식입니다.
            </p>
            <p className="text-sm text-[#5C6470] leading-relaxed mb-8">
              직화방식으로 연료비 30% 절감 및 완전연소 친환경 설비이며, 4계절 복합형으로 운전이 가능합니다. 검증된 Midco Gas Burner를 사용하여 안전성을 확보했으며, 선박 블록 공장, 도장 작업장, 클린룸, 저장창고 등 고습 환경 전반에 적용됩니다.
            </p>
            <div className="flex flex-wrap gap-3">
              {["냉각제습 + 직화식 가스히터", "4계절 복합 운전", "8,500~30,000 m³/h", "연료비 30% 절감"].map((tag) => (
                <span key={tag} className="text-[14px] tracking-[0.04em] border border-[#D4DAE2] px-3 py-1 text-[#5C6470]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-300 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="relative aspect-[4/3] overflow-hidden bg-white border border-[#C05010]/30">
              <Image
                src={`${S3}/images/humidremover.jpg`}
                alt="NK-MDGH 복합식 제습기"
                fill className="object-cover" priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 적용 분야 */}
      <section ref={appRef} className="px-6 md:px-12 py-12 border-t border-[#D4DAE2] bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-6">{t("common.applications")}</p>
          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 transition-all duration-1000 ${appInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {applications.map((app) => (
              <Link key={app} href={`/performance?tag=${encodeURIComponent(app)}&cat=combustion`} className="text-[14px] tracking-[0.04em] border border-[#D4DAE2] px-3 py-2 text-[#5C6470] hover:border-[#C05010] hover:text-[#C05010] hover:bg-[#C05010]/5 transition-all duration-200">
                
                {app}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 시스템 구성도 */}
      <section className="px-6 md:px-12 py-12 bg-[#FAFAFA] border-y border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-6">Dehumidifier System Flow</p>
          <div className="flex flex-wrap items-center gap-2">
            {systemFlow.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <div className={`px-3 py-2 text-[14px] tracking-[0.05em] text-center ${
                  step === "냉각코일 (냉각제습)" || step === "가스히터 (동계 가온용)"
                    ? "bg-[#C05010] text-white"
                    : step === "AIR (고습도)" || step === "Room (저습도)"
                    ? "bg-[#2d2a28] text-white"
                    : "bg-white border border-[#D4DAE2] text-[#5C6470]"
                }`}>
                  {step}
                </div>
                {i < systemFlow.length - 1 && (
                  <span className="text-[#C8D0DA]">→</span>
                )}
              </div>
            ))}
          </div>
          <p className="text-[14px] text-[#5C6470] mt-4">실외기(방열) 탑재 — 냉각+가온 4계절 복합 운전</p>
        </div>
      </section>

      {/* 특징 */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-8">{t("common.features")}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-4 border border-[#D4DAE2]">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C05010] flex-shrink-0" />
                <span className="text-sm text-[#3D4450] leading-relaxed">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 스펙 테이블 */}
      <section ref={specRef} className="px-6 md:px-12 py-16 bg-[#FAFAFA] border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] mb-2">{t("common.specifications")}</p>
          <p className="text-xs text-[#5C6470] mb-8 tracking-[0.05em]">{t("common.selectModel")}</p>
          <div className={`overflow-x-auto transition-all duration-1000 ${specInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <table className="w-full text-sm border-collapse min-w-[900px]">
              <thead>
                <tr className="border-b-2 border-[#2d2a28]">
                  {["MODEL", "처리풍량 (m³/h)", "냉각용량 (Kcal/h)", "가온용량 (Kcal/h)", "팬모터 (kW)", "길이 (mm)", "폭 (mm)", "높이 (mm)", "중량 (ton)"].map((h) => (
                    <th key={h} className="py-3 px-3 text-left text-[12px] tracking-[0.08em] uppercase text-[#2d2a28] font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {specs.map((row) => (
                  <tr
                    key={row.model}
                    onClick={() => setSelectedModel(selectedModel === row.model ? null : row.model)}
                    className={`cursor-pointer border-b border-[#D4DAE2] transition-colors duration-300 ${
                      selectedModel === row.model ? "bg-[#C05010]/10 border-l-2 border-[#C05010]" : "hover:bg-white"
                    }`}
                  >
                    <td className={`py-3.5 px-3 font-medium tracking-[0.05em] ${selectedModel === row.model ? "text-[#C05010]" : "text-[#2d2a28]"}`}>{row.model}</td>
                    <td className="py-3.5 px-3 text-[#5C6470]">{row.airflow}</td>
                    <td className="py-3.5 px-3 text-[#5C6470]">{row.coolingCap}</td>
                    <td className="py-3.5 px-3 text-[#5C6470]">{row.heatingCap}</td>
                    <td className="py-3.5 px-3 text-[#5C6470]">{row.fanMotor}</td>
                    <td className="py-3.5 px-3 text-[#5C6470]">{row.length}</td>
                    <td className="py-3.5 px-3 text-[#5C6470]">{row.width}</td>
                    <td className="py-3.5 px-3 text-[#5C6470]">{row.height}</td>
                    <td className="py-3.5 px-3 text-[#5C6470]">{row.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[13px] text-[#5C6470] mt-4">※ {t("common.specNote")}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-16 border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg tracking-[0.08em] font-light text-[#2d2a28] mb-2">{t("combustion.dehumidifier.ctaTitle")}</h3>
            <p className="text-sm text-[#5C6470]">{t("combustion.dehumidifier.ctaDesc")}</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/products?tab=combustion" className="btn-link group text-[#5C6470] text-xs tracking-[0.06em] uppercase">
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="rotate-180"><path d="M0 4H15M15 4L11 1M15 4L11 7" stroke="currentColor" strokeWidth="1"/></svg>
              {t("common.backToList")}
            </Link>
            <Link href="/support?type=catalog" className="text-xs tracking-[0.06em] uppercase border border-[#D4DAE2] px-6 py-3 text-[#5C6470] hover:border-[#C05010] hover:text-[#C05010] transition-all duration-300">
              카탈로그 신청
            </Link>
            <Link href="/support" className="text-xs tracking-[0.06em] uppercase bg-[#C05010] text-white px-6 py-3 hover:bg-[#2d2a28] transition-all duration-300">
              {t("common.contact")}
            </Link>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
