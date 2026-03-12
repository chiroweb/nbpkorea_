"use client";

import SubpageLayout from "@/components/SubpageLayout";
import { useInView } from "@/hooks/useInView";
import Image from "next/image";

const S3 = "https://nbpkoreare.s3.ap-northeast-2.amazonaws.com";

function CoreTechSection() {
  const technologies = [
    {
      title: "고효율 금속화이버 버너",
      subtitle: "Metal Fiber Burner",
      image: `${S3}/images/metal%20burner1.png`,
      description: "자체 개발한 금속화이버 버너는 내열 금속섬유를 연소면으로 활용하여 적외선 복사열을 극대화합니다. 질소산화물(NOx) 대폭 저감, 에너지 효율 30% 이상 향상, 균일한 열분포, 소음 저감 설계, 우수한 내구성(수명 5년+), 컴팩트 설계, 다연료 대응(LNG/LPG), 자동 온도제어, 다중 안전장치를 특징으로 합니다.",
      features: [
        "적외선 복사열 활용",
        "NOx 대폭 저감",
        "에너지 효율 30%+ 향상",
        "균일한 열분포",
        "소음 저감 설계",
        "내구성 5년+",
        "컴팩트 설계",
        "LNG/LPG 대응",
        "자동 온도제어",
        "다중 안전장치",
      ],
    },
    {
      title: "컴팩트 금속히터",
      subtitle: "Compact Metal Heater",
      image: `${S3}/images/smallmetalburner.png`,
      description: "금속화이버 버너 기술을 적용한 고효율 산업용 가스히터입니다. 직접가열식(대공간 급속 가열), 간접가열식(청정 공기 가열이 필요한 환경), 하이브리드형(가열과 제습을 동시에) 3가지 유형으로 제공되어 다양한 산업 현장에 최적화된 솔루션을 제공합니다.",
      features: [
        "직접가열식 — 대공간 급속 가열",
        "간접가열식 — 청정 공기 유지",
        "하이브리드형 — 가열·제습 동시",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="section-label block mb-4">Core Technology</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-light text-[#2d2a28]">
            핵심 기술
          </h2>
        </div>

        {technologies.map((tech, index) => (
          <TechRow key={tech.title} tech={tech} index={index} isEven={index % 2 === 0} />
        ))}
      </div>
    </section>
  );
}

function TechRow({
  tech,
  index,
  isEven,
}: {
  tech: { title: string; subtitle: string; image: string; description: string; features: string[] };
  index: number;
  isEven: boolean;
}) {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-24 last:mb-0"
    >
      <div
        className={`${isEven ? "md:order-1" : "md:order-2"} transition-all duration-1000 ${
          isInView
            ? "opacity-100 translate-x-0"
            : `opacity-0 ${isEven ? "-translate-x-10" : "translate-x-10"}`
        }`}
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#e8e8e0]">
          <Image src={tech.image} alt={tech.title} fill className="object-cover" />
        </div>
      </div>
      <div
        className={`${isEven ? "md:order-2" : "md:order-1"} transition-all duration-1000 delay-200 ${
          isInView
            ? "opacity-100 translate-x-0"
            : `opacity-0 ${isEven ? "translate-x-10" : "-translate-x-10"}`
        }`}
      >
        <span className="text-5xl font-light text-[#e0e0e0] block mb-4">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-[10px] tracking-[0.2em] uppercase text-[#888480] block mb-2">
          {tech.subtitle}
        </span>
        <h3 className="text-xl md:text-2xl tracking-[0.08em] font-medium text-[#2d2a28] mb-4">
          {tech.title}
        </h3>
        <p className="text-sm leading-[2] text-[#888480] mb-6">{tech.description}</p>
        <div className="space-y-2">
          {tech.features.map((f) => (
            <div key={f} className="flex items-center gap-3">
              <div className="w-1 h-1 rounded-full bg-[#C05010] flex-shrink-0" />
              <span className="text-xs text-[#888480] tracking-[0.03em]">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GlobalPartnersSection() {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  const partners = [
    {
      name: "MIDCO International",
      country: "USA",
      since: "2007",
      description:
        "미국 시카고 소재의 산업용 버너 전문기업 MIDCO International과 2007년부터 기술 파트너십을 체결하여 글로벌 수준의 연소 기술을 도입하고, 공동 개발을 통해 제품 경쟁력을 강화하고 있습니다.",
    },
    {
      name: "ECOSTAR",
      country: "Turkey",
      since: "2013",
      description:
        "터키 소재의 산업용 연소설비 전문기업 ECOSTAR와 2013년 기술 파트너십을 체결하였습니다. 유럽 시장 기술 표준에 부합하는 설비를 공급하고, 상호 기술 교류를 통해 지속적으로 기술력을 높이고 있습니다.",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="section-label block mb-4">Global Partners</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-light text-[#2d2a28]">
            글로벌 기술 파트너
          </h2>
          <p className="text-sm text-[#888480] mt-4 max-w-xl mx-auto leading-[2]">
            1940년대부터 이어온 파트너사의 기술 유산과 NBP KOREA의 현장 경험이 만나
            최고의 솔루션을 만들어냅니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className={`border border-[#e0e0e0] bg-white p-10 transition-all duration-1000 hover:border-[#2d2a28] ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#888480] mb-2">
                    {partner.country}
                  </p>
                  <h3 className="text-xl tracking-[0.05em] font-medium text-[#2d2a28]">
                    {partner.name}
                  </h3>
                </div>
                <div className="text-right">
                  <p className="text-[10px] tracking-[0.15em] uppercase text-[#888480] mb-1">Partnership Since</p>
                  <p className="text-2xl font-light text-[#d4d4cc]">{partner.since}</p>
                </div>
              </div>
              <p className="text-sm leading-[2] text-[#888480]">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AwardsCertificationsSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const awards = [
    { year: "2021", title: "산업통상자원부 장관 표창" },
    { year: "2019", title: "산업통상자원부 장관 표창" },
    { year: "2017", title: "중소벤처기업부 장관 표창" },
    { year: "2014", title: "중소기업청장 표창" },
    { year: "2009", title: "경기도지사 표창" },
  ];

  const certifications = [
    { name: "ISO 9001", desc: "품질경영시스템" },
    { name: "ISO 14001", desc: "환경경영시스템" },
    { name: "CE Mark", desc: "유럽 안전 인증" },
    { name: "KS Mark", desc: "한국산업표준" },
  ];

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* 수상 */}
          <div
            className={`transition-all duration-1000 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <span className="section-label block mb-4">Awards</span>
            <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-light text-[#2d2a28] mb-8">
              수상 내역
            </h2>
            <div className="space-y-3">
              {awards.map((award, index) => (
                <div
                  key={award.title}
                  className={`flex items-center gap-6 py-4 border-b border-[#e0e0e0] transition-all duration-700 ${
                    isInView
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-6"
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <span className="text-sm font-light text-[#d4d4cc] w-12 flex-shrink-0">
                    {award.year}
                  </span>
                  <div className="w-1 h-1 rounded-full bg-[#888480] flex-shrink-0" />
                  <span className="text-sm tracking-[0.03em] text-[#2d2a28]">
                    {award.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 인증 */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <span className="section-label block mb-4">Certifications</span>
            <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-light text-[#2d2a28] mb-8">
              인증 현황
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className={`border border-[#e0e0e0] p-6 text-center transition-all duration-700 ${
                    isInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <p className="text-base font-medium text-[#2d2a28] mb-1">{cert.name}</p>
                  <p className="text-xs text-[#888480]">{cert.desc}</p>
                </div>
              ))}
            </div>
            <div
              className={`mt-4 border border-[#e0e0e0] overflow-hidden transition-all duration-700 delay-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src={`${S3}/images/reward-1/%EB%B6%80%EC%B4%9D%EB%A6%AC%EA%B2%B8%EA%B5%90%EC%9C%A1%EB%B6%80%EC%9E%A5%EA%B4%80%EC%83%81_%ED%91%9C%EC%B0%BD%EC%9E%A5(2021).png`}
                  alt="산업통상자원부 장관 표창장"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RDCenterSection() {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="section-label block mb-4">R&D Center</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-light text-[#2d2a28]">
            기업부설연구소
          </h2>
          <p className="text-sm text-[#888480] mt-4 max-w-xl mx-auto leading-[2]">
            KOITA(한국산업기술진흥협회) 인증 기업부설연구소 (2022년 설립) —
            전문 연구 인력과 최첨단 시험 시설을 바탕으로 독자 기술 개발을 이어갑니다
          </p>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-1000 delay-300 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            { label: "연구소 전경", src: `${S3}/images/intro2.jpg` },
            { label: "버너 시험실", src: `${S3}/images/into3.jpg` },
            { label: "환경설비 시험동", src: `${S3}/images/intro4.JPG` },
            { label: "열처리 테스트룸", src: `${S3}/images/building.jpg` },
            { label: "계측 분석실", src: `${S3}/images/metal%20burner1.png` },
            { label: "품질 검사실", src: `${S3}/images/smallmetalburner.png` },
            { label: "프로토타입 조립실", src: `${S3}/assets/industry1.png` },
            { label: "자료실", src: `${S3}/assets/industry2.png` },
          ].map((item, index) => (
            <div
              key={item.label}
              className={`relative aspect-square overflow-hidden bg-[#e8e8e0] group cursor-pointer ${
                index < 2 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function TechnologyPage() {
  return (
    <SubpageLayout
      title="TECHNOLOGY & R&D"
      subtitle="끊임없는 연구와 혁신으로 산업용 연소 및 환경설비 기술을 선도합니다"
      breadcrumb={[{ label: "기술/R&D", href: "/technology" }]}
    >
      <CoreTechSection />
      <GlobalPartnersSection />
      <AwardsCertificationsSection />
      <RDCenterSection />
    </SubpageLayout>
  );
}
