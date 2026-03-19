"use client";

import { useInView } from "@/hooks/useInView";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function CompanySection() {
  const t = useTranslations("home.company");
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="company" className="py-32 overflow-hidden" ref={ref}>
      <div className="grid md:grid-cols-2 items-center">
          {/* Image — bleeds to left edge, right mask (aspect-ratio clip) preserved */}
          <div
            className={`transition-all duration-1000 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#DCE2E8]">
              <Image
                src="https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com/images/building.jpg"
                alt="NBPKOREA HQ"
                fill
                className="object-cover"
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
            <h2 className="font-bold tracking-[0.1em] text-[#2d2a28] mb-8 leading-none" style={{ fontSize: "clamp(62.4px, 7.5vw, 93.6px)" }}>NBPKOREA</h2>
            <p className="text-sm leading-[2] text-[#888480] mb-12">
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
