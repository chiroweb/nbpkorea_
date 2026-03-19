"use client";

import SubpageLayout from "@/components/SubpageLayout";
import { useInView } from "@/hooks/useInView";
import Image from "next/image";
import { useTranslations } from "next-intl";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

function CoreTechSection() {
  const t = useTranslations("technology");

  const technologies = [
    {
      title: t("coreTech.metalBurner.title"),
      subtitle: "Metal Fiber Burner",
      image: `${S3}/images/metal%20burner1.png`,
      description: t("coreTech.metalBurner.description"),
      features: t.raw("coreTech.metalBurner.features") as string[],
    },
    {
      title: t("coreTech.compactHeater.title"),
      subtitle: "Compact Metal Heater",
      image: `${S3}/images/smallmetalburner.png`,
      description: t("coreTech.compactHeater.description"),
      features: t.raw("coreTech.compactHeater.features") as string[],
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="section-label block mb-4">Core Technology</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-bold text-[#2d2a28]">
            {t("coreTech.title")}
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
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#DCE2E8]">
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
        <span className="text-5xl font-light text-[#D4DAE2] block mb-4">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-[13px] tracking-[0.2em] uppercase text-[#888480] block mb-2">
          {tech.subtitle}
        </span>
        <h3 className="text-xl md:text-2xl tracking-[0.08em] font-bold text-[#2d2a28] mb-4">
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
  const t = useTranslations("technology");

  const partners = [
    {
      name: "MIDCO International",
      country: "USA",
      since: "2007",
      description: t("globalPartners.midcoDesc"),
    },
    {
      name: "ECOSTAR",
      country: "Turkey",
      since: "2013",
      description: t("globalPartners.ecostarDesc"),
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-[#F2F4F7]">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="section-label block mb-4">Global Partners</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-bold text-[#2d2a28]">
            {t("globalPartners.title")}
          </h2>
          <p className="text-sm text-[#888480] mt-4 max-w-xl mx-auto leading-[2]">
            {t("globalPartners.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className={`border border-[#D4DAE2] bg-white p-10 transition-all duration-1000 hover:border-[#C05010] ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-[13px] tracking-[0.2em] uppercase text-[#888480] mb-2">
                    {partner.country}
                  </p>
                  <h3 className="text-xl tracking-[0.05em] font-bold text-[#2d2a28]">
                    {partner.name}
                  </h3>
                </div>
                <div className="text-right">
                  <p className="text-[13px] tracking-[0.15em] uppercase text-[#888480] mb-1">{t("globalPartners.partnershipSince")}</p>
                  <p className="text-2xl font-light text-[#C8D0DA]">{partner.since}</p>
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
  const t = useTranslations("technology");

  const awards = t.raw("awards.items") as { year: string; title: string }[];
  const certifications = t.raw("certifications.list") as { name: string; desc: string }[];

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Awards */}
          <div
            className={`transition-all duration-1000 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <span className="section-label block mb-4">Awards</span>
            <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-bold text-[#2d2a28] mb-8">
              {t("awards.title")}
            </h2>
            <div className="space-y-3">
              {awards.map((award, index) => (
                <div
                  key={`${award.year}-${award.title}`}
                  className={`flex items-center gap-6 py-4 border-b border-[#D4DAE2] transition-all duration-700 ${
                    isInView
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-6"
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <span className="text-sm font-light text-[#C8D0DA] w-12 flex-shrink-0">
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

          {/* Certifications */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <span className="section-label block mb-4">Certifications</span>
            <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-bold text-[#2d2a28] mb-8">
              {t("certifications.title")}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className={`border border-[#D4DAE2] p-6 text-center transition-all duration-700 ${
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
              className={`mt-4 border border-[#D4DAE2] overflow-hidden transition-all duration-700 delay-700 ${
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
  const t = useTranslations("technology");

  const rooms = t.raw("rdCenter.rooms") as string[];

  const roomImages = [
    `${S3}/images/intro2.jpg`,
    `${S3}/images/into3.jpg`,
    `${S3}/images/intro4.JPG`,
    `${S3}/images/building.jpg`,
    `${S3}/images/metal%20burner1.png`,
    `${S3}/images/smallmetalburner.png`,
    `${S3}/assets/industry1.png`,
    `${S3}/assets/industry2.png`,
  ];

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-[#F2F4F7]">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="section-label block mb-4">R&D Center</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-bold text-[#2d2a28]">
            {t("rdCenter.title")}
          </h2>
          <p className="text-sm text-[#888480] mt-4 max-w-xl mx-auto leading-[2]">
            {t("rdCenter.subtitle")}
          </p>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-1000 delay-300 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {rooms.map((label, index) => (
            <div
              key={label}
              className={`relative aspect-square overflow-hidden bg-[#DCE2E8] group cursor-pointer ${
                index < 2 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <Image
                src={roomImages[index]}
                alt={label}
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
  const t = useTranslations("technology");
  return (
    <SubpageLayout
      title={t("title")}
      subtitle={t("subtitle")}
      breadcrumb={[{ label: t("breadcrumb"), href: "/technology" }]}
    >
      <CoreTechSection />
      <GlobalPartnersSection />
      <AwardsCertificationsSection />
      <RDCenterSection />
    </SubpageLayout>
  );
}
