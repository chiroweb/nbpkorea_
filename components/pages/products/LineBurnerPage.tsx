"use client";

import SubpageLayout from "@/components/SubpageLayout";
import ProductNav from "@/components/ProductNav";
import { useInView } from "@/hooks/useInView";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";
import FloatingCaseLink from "@/components/FloatingCaseLink";


const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

const features = [
  "NO₂ 및 CO 배출 최소화 — ANSI Z83.4 / Z83.18 기준 적합",
  "2단 연소(Two-Stage) 방식으로 최대 연소 시에도 NOₓ 배출 최소화",
  "원통형 구조로 연속 공정 라인에 균일한 직선 가열 실현",
  "화염 안정성 극대화 — 2단 연소로 화염 길이 25cm 이하 유지",
  "노즐 교체 없이 Natural / Propane / Butane 가스 모두 사용 가능",
  "내열 금속섬유 연소면 — 복사 열전달로 에너지 효율 30% 이상 향상",
  "30단계 정밀 화염 제어 — 공정 라인 온도 균일성 확보",
  "차압 범위 0.05″~1.4″ W.C. 광범위 운전 지원",
  "경쟁사 대비 경량·컴팩트 설계로 라인 설치 및 유지보수 용이",
  "연속 건조·코팅 공정에 최적화된 직선 열원 설계",
  "MIDCO International(미국) 기술 협력 — 글로벌 검증된 연소 시스템",
  "현장 맞춤형 길이·용량 제작·시공·A/S 원스톱 서비스",
];

const applications = [
  "섬유 건조·가열 라인",
  "인쇄·코팅 건조 라인",
  "목재·합판 연속 건조",
  "식품 가공 건조 라인",
  "도장 건조 컨베이어",
  "농수산물 건조 터널",
  "제약 건조 공정",
  "플라스틱 성형 가열",
  "유리·세라믹 소결",
  "금속 열처리 라인",
  "탄소섬유 제조 공정",
  "기타 연속 가열 공정",
];

export default function LineBurnerPage() {
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: appRef, isInView: appInView } = useInView({ threshold: 0.1 });
  const t = useTranslations("products");

  return (
    <SubpageLayout
      title={t("nav.lineBurner")}
      subtitle={`Line Burner — ${t("burner.lineBurner.subtitle")}`}
      breadcrumb={[
        { label: t("breadcrumb"), href: "/products" },
        { label: t("breadcrumbs.burner"), href: "/products?tab=burner" },
        { label: t("nav.lineBurner"), href: "/products/burner/line-burner" },
      ]}
    >
      <FloatingCaseLink category="burner" tag="라인버너" label="라인버너 적용 사례 보러가기" />
      <ProductNav activeTab="burner" activeProduct="line-burner" />

      {/* Hero */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div
            ref={heroRef}
            className={`transition-all duration-1000 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <span className="text-[13px] tracking-[0.2em] uppercase text-[#C05010] block mb-3">
              Industrial Burner · Line Burner
            </span>
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.08em] text-[#2d2a28] mb-6">
              라인버너<br />(Line Burner)
            </h2>
            <p className="text-sm text-[#8B95A1] leading-[2] mb-6">
              NBPKOREA 라인버너는 연속 공정 라인에서 직선 방향으로 균일한 열원을 공급하도록 설계된 원통형 구조의 산업용 버너입니다. 섬유·인쇄·코팅·식품 건조 등 컨베이어 기반의 연속 생산 공정에 최적화되어 있습니다.
            </p>
            <p className="text-sm text-[#8B95A1] leading-[2] mb-8">
              MIDCO International(미국) 기술을 기반으로, 2단 연소 방식으로 최대 출력 시에도 NOₓ 배출을 최소화하며 화염 안정성을 유지합니다. 30단계 정밀 턴다운 제어로 공정 온도를 균일하게 관리할 수 있으며, 노즐 교체 없이 Natural Gas / Propane / Butane 가스를 모두 사용할 수 있습니다.
            </p>
            <div className="flex flex-wrap gap-3">
              {["원통형 구조", "직선 가열", "연속 공정", "NOₓ 저배출"].map((tag) => (
                <span key={tag} className="text-[14px] tracking-[0.1em] border border-[#D4DAE2] px-3 py-1 text-[#8B95A1]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-300 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="relative aspect-[4/3] overflow-hidden bg-[#DCE2E8]">
              <Image
                src={`${S3}/images/burner/line-burner-t.png`}
                alt="라인버너"
                fill className="object-contain p-4" priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 적용 분야 */}
      <section ref={appRef} className="px-6 md:px-12 py-12 border-t border-[#D4DAE2] bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.2em] uppercase text-[#8B95A1] mb-6">{t("common.applications")}</p>
          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 transition-all duration-1000 ${appInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {applications.map((app) => (
              <Link key={app} href={`/performance?tag=${encodeURIComponent(app)}&cat=burner`} className="text-[14px] tracking-[0.04em] border border-[#D4DAE2] px-3 py-2 text-[#888480] hover:border-[#C05010] hover:text-[#C05010] hover:bg-[#C05010]/5 transition-all duration-200">
                
                {app}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 연소 원리 */}
      <section className="px-6 md:px-12 py-12 bg-[#F2F4F7] border-y border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.2em] uppercase text-[#8B95A1] mb-6">연소 방식 — Continuous Line Heating</p>
          <div className="flex flex-wrap items-center gap-3">
            {[
              { label: "가스 공급\nNatural/LPG", bg: "#DCE2E8", text: "#2d2a28" },
              { label: "→", isArrow: true },
              { label: "2단 연소\n(저NOₓ)", bg: "#C05010", text: "#fff" },
              { label: "→", isArrow: true },
              { label: "원통형\n연소면", bg: "#E8A060", text: "#fff" },
              { label: "→", isArrow: true },
              { label: "직선 열원\n균일 복사", bg: "#2d2a28", text: "#fff" },
              { label: "→", isArrow: true },
              { label: "공정 라인\n연속 가열", bg: "#4A5568", text: "#fff" },
            ].map((step, i) =>
              step.isArrow ? (
                <span key={i} className="text-xl text-[#C8D0DA]">→</span>
              ) : (
                <div key={i} className="px-4 py-3 text-xs tracking-[0.08em] text-center whitespace-pre-line"
                  style={{ backgroundColor: step.bg, color: step.text }}>
                  {step.label}
                </div>
              )
            )}
          </div>
          <p className="text-[14px] text-[#8B95A1] mt-4">30단계 화염 제어 / 화염 길이 25cm 이하 / 컨베이어 연속 공정 최적화</p>
        </div>
      </section>

      {/* 특징 */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.2em] uppercase text-[#8B95A1] mb-8">{t("common.features")}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-4 border border-[#D4DAE2]">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C05010] flex-shrink-0" />
                <span className="text-xs text-[#8B95A1] leading-[1.8]">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 스펙 안내 */}
      <section className="px-6 md:px-12 py-16 bg-[#F2F4F7] border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[13px] tracking-[0.2em] uppercase text-[#8B95A1] mb-6">{t("common.specifications")}</p>
          <div className="border border-[#D4DAE2] bg-white p-6">
            <p className="text-sm text-[#8B95A1] leading-[2]">
              라인버너는 현장 공정 라인의 길이·폭·요구 온도·연료 조건에 따라 맞춤 설계·제작됩니다.<br />
              표준 사양이 아닌 <span className="text-[#2d2a28] font-medium">주문 제작 방식</span>으로 공급되므로, 구체적인 용량 및 치수는 엔지니어 상담을 통해 확정합니다.
            </p>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "연료", value: "Natural / Propane / Butane" },
                { label: "제어 방식", value: "30단계 화염 제어" },
                { label: "배출 기준", value: "ANSI Z83.4 / Z83.18" },
                { label: "설치 방식", value: "현장 맞춤 설계" },
              ].map((item) => (
                <div key={item.label} className="border border-[#E8ECF0] p-3">
                  <span className="text-[13px] tracking-[0.12em] uppercase text-[#C8D0DA] block mb-1">{item.label}</span>
                  <span className="text-xs text-[#2d2a28]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-[13px] text-[#8B95A1] mt-4">※ 현장 공정 조건에 따라 길이·용량·제어 방식을 맞춤 설계합니다.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-16 border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg tracking-[0.08em] font-light text-[#2d2a28] mb-2">{t("burner.lineBurner.ctaTitle")}</h3>
            <p className="text-sm text-[#8B95A1]">{t("burner.lineBurner.ctaDesc")}</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/products?tab=burner" className="btn-link group text-[#8B95A1] text-xs tracking-[0.15em] uppercase">
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="rotate-180"><path d="M0 4H15M15 4L11 1M15 4L11 7" stroke="currentColor" strokeWidth="1"/></svg>
              {t("common.backToList")}
            </Link>
            <Link href="/support" className="text-xs tracking-[0.15em] uppercase border border-[#2d2a28] px-6 py-3 hover:bg-[#C05010] hover:border-[#C05010] hover:text-white transition-all duration-300">
              {t("common.contact")}
            </Link>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
