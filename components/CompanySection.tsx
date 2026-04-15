"use client";

import { useInView } from "@/hooks/useInView";
import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

function getImage(locale: string) {
  return {
    src: `${S3}/images/company/company-main.png`,
    alt: locale === "en" ? "NBPKOREA Main" : "NBPKOREA 메인",
  };
}

export default function CompanySection() {
  const t = useTranslations("home.company");
  const locale = useLocale();
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const image = getImage(locale);

  return (
    <section id="company" className="py-32 overflow-hidden" ref={ref}>
      <div className="grid md:grid-cols-2 items-center">
        {/* Image */}
        <div
          className={`transition-all duration-1000 ${
            isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="relative aspect-[8/5] w-full overflow-hidden bg-[#DCE2E8]">
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Content */}
        <div
          className={`px-6 md:px-12 transition-all duration-1000 delay-300 ${
            isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <span className="section-label block mb-6">Company</span>
          <h2 className="font-bold tracking-[0.02em] text-[#2d2a28] mb-8 leading-none text-4xl md:text-5xl lg:text-6xl">NBPKOREA</h2>
          <p className="text-sm md:text-base leading-relaxed text-[#5C6470] mb-12">
            {t("description")}
          </p>

          <Link
            href="/about"
            className="btn-link group"
          >
            <span className="w-8 h-8 flex items-center justify-center border border-[#2d2a28]/30 rounded-full group-hover:bg-[#C05010] group-hover:text-[#F5F7F8] transition-all">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path d="M1 7L7 1M7 1H2M7 1V6" stroke="currentColor" strokeWidth="1"/>
              </svg>
            </span>
            <span>{t("link")}</span>
            <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="transition-transform group-hover:translate-x-1">
              <path d="M0 4H15M15 4L11 1M15 4L11 7" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
