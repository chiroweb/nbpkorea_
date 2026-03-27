"use client";

import { useInView } from "@/hooks/useInView";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function HistorySection() {
  const t = useTranslations("home.history");
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });
  const [scrollProgress, setScrollProgress] = useState(0);

  const timelineItems = [
    { year: "2006", event: t("founded") },
    { year: "2007", event: t("midco") },
    { year: "2013", event: t("ecostar") },
    { year: "2022", event: t("rnd") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1,
        (viewportHeight - rect.top) / (rect.height + viewportHeight)
      ));
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return (
    <section id="history" className="py-32 px-6 md:px-12 bg-[#2d2a28] text-[#F5F7F8]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <span className="section-label block mb-4 text-[#a3a09b]">History</span>
            <h2 className="section-title mb-8">{t("label")}</h2>

            <div className="flex items-baseline gap-4 mb-12">
              <span className="text-3xl md:text-7xl font-light">{t("since")}</span>
              <span className="text-xl text-[#888480]">—</span>
              <span className="text-3xl md:text-7xl font-light">{t("present")}</span>
            </div>

            <p className="text-sm leading-[2] text-[#a3a09b] mb-12">
              {t("description")}
            </p>

            <Link href="/about" className="btn-link group text-[#F5F7F8]">
              <span className="w-8 h-8 flex items-center justify-center border border-[#F5F7F8]/30 rounded-full group-hover:bg-[#F5F7F8] group-hover:text-[#C05010] transition-all">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1 7L7 1M7 1H2M7 1V6" stroke="currentColor" strokeWidth="1"/>
                </svg>
              </span>
              <span>{t("viewHistory")}</span>
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M0 4H15M15 4L11 1M15 4L11 7" stroke="currentColor" strokeWidth="1"/>
              </svg>
            </Link>
          </div>

          {/* Timeline Visual */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              {/* Timeline Line (background) */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-[#888480]/30" />
              {/* Timeline Line (orange fill) */}
              <div
                className="absolute left-4 top-0 w-px bg-[#C05010]"
                style={{ height: `${scrollProgress * 100}%`, transition: "height 0.1s ease-out" }}
              />

              {/* Timeline Items */}
              {timelineItems.map((item, index) => {
                const itemThreshold = index / (timelineItems.length - 1);
                const isReached = scrollProgress >= itemThreshold * 0.8;

                return (
                  <div key={item.year} className="flex items-center gap-8 mb-8 last:mb-0">
                    <div
                      className={`w-8 h-8 rounded-full border flex items-center justify-center bg-[#2d2a28] z-10 transition-colors duration-500 ${
                        isReached ? "border-[#C05010]" : "border-[#888480]/30"
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full transition-colors duration-500 ${
                          isReached ? "bg-[#C05010]" : "bg-[#F5F7F8]"
                        }`}
                      />
                    </div>
                    <div>
                      <span className={`text-sm block mb-1 transition-colors duration-500 ${isReached ? "text-[#C05010]" : "text-[#888480]"}`}>{item.year}</span>
                      <span className="text-base tracking-[0.1em]">{item.event}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
