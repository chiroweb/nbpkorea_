"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

export default function HistorySection() {
  const t = useTranslations("about.history");
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isHovering = useRef(false);
  const wheelAccum = useRef(0);

  const timelineItems = [
    { year: "2006", events: [t("events.2006")] },
    { year: "2007", events: [t("events.2007")] },
    { year: "2008", events: [t("events.2008")] },
    { year: "2009", events: [t("events.2009")] },
    { year: "2010", events: [t("events.2010")] },
    { year: "2011", events: [t("events.2011")] },
    { year: "2012", events: [t("events.2012")] },
    { year: "2013", events: [t("events.2013")] },
    { year: "2014", events: [t("events.2014a"), t("events.2014b")] },
    { year: "2015", events: [t("events.2015")] },
    { year: "2016", events: [t("events.2016")] },
    { year: "2017", events: [t("events.2017")] },
    { year: "2018", events: [t("events.2018")] },
    { year: "2019", events: [t("events.2019a"), t("events.2019b")] },
    { year: "2020", events: [t("events.2020")] },
    { year: "2021", events: [t("events.2021")] },
    { year: "2022", events: [t("events.2022")] },
    { year: "2023", events: [t("events.2023")] },
    { year: "2025", events: [t("events.2025a"), t("events.2025b")] },
  ];

  // 섹션 내 wheel 이벤트 → 타임라인 인덱스 제어
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const THRESHOLD = 60;

    const handleWheel = (e: WheelEvent) => {
      if (!isHovering.current) return;

      const atStart = activeIndex === 0 && e.deltaY < 0;
      const atEnd = activeIndex === timelineItems.length - 1 && e.deltaY > 0;
      if (atStart || atEnd) {
        wheelAccum.current = 0;
        return;
      }

      e.preventDefault();
      wheelAccum.current += e.deltaY;

      if (wheelAccum.current > THRESHOLD) {
        setActiveIndex((prev) => Math.min(timelineItems.length - 1, prev + 1));
        wheelAccum.current = 0;
      } else if (wheelAccum.current < -THRESHOLD) {
        setActiveIndex((prev) => Math.max(0, prev - 1));
        wheelAccum.current = 0;
      }
    };

    section.addEventListener("wheel", handleWheel, { passive: false });
    return () => section.removeEventListener("wheel", handleWheel);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  // 자동 재생: 마우스가 없을 때 1.5초마다 다음으로
  useEffect(() => {
    if (isHovering.current) return;

    const timer = setInterval(() => {
      if (isHovering.current) return;
      setActiveIndex((prev) => {
        if (prev >= timelineItems.length - 1) return 0;
        return prev + 1;
      });
    }, 1500);

    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  return (
    <div
      ref={sectionRef}
      onMouseEnter={() => { isHovering.current = true; }}
      onMouseLeave={() => { isHovering.current = false; wheelAccum.current = 0; }}
      className="relative bg-[#2d2a28] h-[45vh] flex items-center overflow-hidden"
    >
        <div className="w-full px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* 왼쪽: 연도 + 타임라인 네비 */}
            <div className="text-right">
              <span className="section-label block mb-6 text-[#C8C3BD]">History</span>

              {/* 연도 룰렛 */}
              <div className="relative h-[120px] mb-4 overflow-hidden">
                <div
                  className="absolute left-0 w-full transition-transform duration-500 ease-out"
                  style={{ transform: `translateY(${-activeIndex * 40 + 40}px)` }}
                >
                  {timelineItems.map((item, i) => (
                    <div
                      key={item.year}
                      className="h-[40px] flex items-center justify-end transition-all duration-500"
                    >
                      <span
                        className={`font-bold transition-all duration-500 ${
                          i === activeIndex
                            ? "text-4xl md:text-6xl text-[#C05010]"
                            : Math.abs(i - activeIndex) === 1
                              ? "text-2xl md:text-3xl text-white/20"
                              : "text-xl text-white/5"
                        }`}
                      >
                        {item.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 타임라인 도트 네비 */}
              <div className="flex items-center justify-end gap-1.5">
                {timelineItems.map((item, i) => (
                  <button
                    key={item.year}
                    className={`transition-all duration-300 rounded-full ${
                      i === activeIndex
                        ? "w-6 h-2 bg-[#C05010]"
                        : i <= activeIndex
                          ? "w-2 h-2 bg-[#C05010]/40"
                          : "w-2 h-2 bg-white/15"
                    }`}
                    aria-label={item.year}
                  />
                ))}
              </div>

              {/* 진행률 */}
              <div className="mt-6 flex items-center gap-4">
                <span className="text-xs text-[#C8C3BD]">2006</span>
                <div className="flex-1 h-px bg-white/10 relative">
                  <div
                    className="absolute left-0 top-0 h-full bg-[#C05010] transition-all duration-300"
                    style={{ width: `${(activeIndex / (timelineItems.length - 1)) * 100}%` }}
                  />
                </div>
                <span className="text-xs text-[#C8C3BD]">2025</span>
              </div>
            </div>

            {/* 오른쪽: 이벤트 내용 */}
            <div className="relative min-h-[160px] flex items-center">
              {timelineItems.map((item, i) => (
                <div
                  key={item.year}
                  className={`absolute inset-0 flex items-center transition-all duration-500 ${
                    i === activeIndex
                      ? "opacity-100 translate-y-0"
                      : i < activeIndex
                        ? "opacity-0 -translate-y-10"
                        : "opacity-0 translate-y-10"
                  }`}
                >
                  <div className="border-l-[3px] border-[#C05010] pl-8">
                    {item.events.map((event) => (
                      <p
                        key={event}
                        className="text-base md:text-lg lg:text-xl text-white font-light leading-snug mb-3 last:mb-0"
                      >
                        {event}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* 상단 안내 문구 */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white/25 text-[11px] tracking-[0.06em]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="animate-bounce">
            <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          이 영역 위에서 스크롤하면 연혁을 탐색할 수 있습니다
        </div>

        {/* 하단 진행 카운터 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-sm text-white/80 font-medium">
            <span className="text-[#C05010]">{activeIndex + 1}</span>
            <span className="text-white/30 mx-1">/</span>
            <span className="text-white/30">{timelineItems.length}</span>
          </span>
        </div>
    </div>
  );
}
