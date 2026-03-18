"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="맨 위로 이동"
      className={`fixed bottom-10 right-10 z-50 w-[100px] h-[100px] transition-all duration-500 group ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {/* 회전하는 텍스트 링 */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full animate-spin-slow"
      >
        <defs>
          <path
            id="textCircle"
            d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
          />
        </defs>
        <text
          fill="#2d2a28"
          fontSize="10.5"
          letterSpacing="3.2"
          fontFamily="Roboto, sans-serif"
          fontWeight="500"
        >
          <textPath href="#textCircle">NBPKOREA · NBPKOREA · </textPath>
        </text>
      </svg>

      {/* 중앙 위 화살표 */}
      <div className="absolute inset-[22px] rounded-full flex items-center justify-center group-hover:opacity-60 transition-all duration-300">
        <svg
          width="22"
          height="22"
          viewBox="0 0 14 14"
          fill="none"
          className="text-[#2d2a28] transition-colors duration-300"
        >
          <path
            d="M7 11V3M3 7L7 3L11 7"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </button>
  );
}
