"use client";

import { useInView } from "@/hooks/useInView";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

export default function RecruitSection() {
  const t = useTranslations("home.partners");
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const partners = [
    { title: "MIDCO International", type: t("midcoType"), since: "2007" },
    { title: "ECOSTAR", type: t("ecostarType"), since: "2013" },
    { title: "한화오션", type: t("hanwhaType") },
    { title: "HD현대미포", type: t("hdType") },
    { title: "BMW", type: t("bmwType") },
    { title: "POSCO", type: t("poscoType") },
  ];

  return (
    <section id="partners" className="py-32 px-6 md:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <span className="section-label block mb-4">Partners</span>
            <h2 className="section-title mb-8">TRUSTED BY</h2>

            <p className="text-sm leading-[2] text-[#888480] mb-8">
              {t("description")}
            </p>

            <div className="border-t border-[#C8D0DA] mb-8">
              {partners.map((partner) => (
                <div
                  key={partner.title}
                  className="flex items-center justify-between py-4 border-b border-[#C8D0DA]"
                >
                  <div>
                    <span className="block text-sm tracking-[0.05em] text-[#2d2a28]">{partner.title}</span>
                    <span className="text-xs text-[#888480]">{partner.type}</span>
                  </div>
                  {partner.since && (
                    <span className="text-xs text-[#C8D0DA] tracking-[0.1em]">Since {partner.since}</span>
                  )}
                </div>
              ))}
            </div>

            <Link href="/business" className="btn-link group">
              <span className="w-8 h-8 flex items-center justify-center border border-[#2d2a28]/30 rounded-full group-hover:bg-[#C05010] group-hover:text-[#F5F7F8] transition-all">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1 7L7 1M7 1H2M7 1V6" stroke="currentColor" strokeWidth="1"/>
                </svg>
              </span>
              <span>{t("viewClients")}</span>
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M0 4H15M15 4L11 1M15 4L11 7" stroke="currentColor" strokeWidth="1"/>
              </svg>
            </Link>
          </div>

          {/* MIDCO Image */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#DCE2E8]">
              <Image src={`${S3}/images/intro4.JPG`} alt="MIDCO Partner Site" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
