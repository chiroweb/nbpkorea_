"use client";

import { useInView } from "@/hooks/useInView";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function RecruitSection() {
  const t = useTranslations("home.partners");
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const partners = [
    { title: "MIDCO International", type: t("midcoType"), since: "2007", href: "https://www.midco-intl.com" },
    { title: "ECOSTAR", type: t("ecostarType"), since: "2013", href: "https://www.ecostar.com.tr" },
    { title: "CombHEX", type: t("combhexType"), since: "2018", href: "https://www.combhex.com/" },
    { title: "한화오션", type: t("hanwhaType") },
    { title: "현대중공업", type: t("hdType") },
    { title: "더 금영", type: t("bmwType") },
    { title: "LG엔솔", type: t("lgType") },
    { title: "POSCO", type: t("poscoType") },
  ];

  const globalPartners = [
    { title: "MIDCO International", subtitle: t("midcoType"), since: "2007", logo: "https://nbpkoreare.s3.ap-northeast-2.amazonaws.com/images/midco.jpeg", href: "https://www.midco-intl.com" },
    { title: "ECOSTAR", subtitle: t("ecostarType"), since: "2013", logo: "https://nbpkoreare.s3.ap-northeast-2.amazonaws.com/images/ecostar.png", href: "https://www.ecostar.com.tr" },
    { title: "CombHEX", subtitle: t("combhexType"), since: "2018", logo: "https://nbpkoreare.s3.ap-northeast-2.amazonaws.com/images/combhex.jpeg", href: "https://www.combhex.com/" },
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
              {partners.map((partner) => {
                const content = (
                  <>
                    <div>
                      <span className="block text-sm tracking-[0.05em] text-[#2d2a28]">{partner.title}</span>
                      <span className="text-xs text-[#888480]">{partner.type}</span>
                    </div>
                    {partner.since && (
                      <span className="text-xs text-[#C8D0DA] tracking-[0.1em]">Since {partner.since}</span>
                    )}
                  </>
                );
                return partner.href ? (
                  <a key={partner.title} href={partner.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-2 border-b border-[#C8D0DA] hover:text-[#C05010] transition-colors">
                    {content}
                  </a>
                ) : (
                  <div key={partner.title} className="flex items-center justify-between py-2 border-b border-[#C8D0DA]">
                    {content}
                  </div>
                );
              })}
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

          {/* Global Partner Stack */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="grid gap-3">
              {globalPartners.map((partner) => (
                <a key={partner.title} href={partner.href} target="_blank" rel="noopener noreferrer" className="border border-[#C8D0DA] bg-white px-4 py-3 hover:border-[#C05010] transition-colors block">
                  {partner.logo ? (
                    <div className="mb-2 flex h-10 items-center">
                      <Image
                        src={partner.logo}
                        alt={`${partner.title} logo`}
                        width={183}
                        height={65}
                        className="h-auto max-h-9 w-auto object-contain"
                      />
                    </div>
                  ) : (
                    <p className="mb-2 text-lg font-semibold tracking-[0.04em] text-[#2d2a28]">{partner.title}</p>
                  )}
                  <p className="text-[13px] tracking-[0.16em] uppercase text-[#888480]">{partner.subtitle}</p>
                  <p className="mt-1 text-[13px] tracking-[0.14em] uppercase text-[#C8D0DA]">Since {partner.since}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
