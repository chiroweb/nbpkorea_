"use client";

import Link from "next/link";
import { useState } from "react";

interface SitePreviewProps {
  src?: string;
  label?: string;
}

export default function SitePreview({ src = "/", label = "nbpkorea.com" }: SitePreviewProps) {
  const [loading, setLoading] = useState(true);
  const [key, setKey] = useState(0);

  function refresh() {
    setLoading(true);
    setKey((k) => k + 1);
  }

  return (
    <div className="bg-white border border-[#D4DAE2]">
      {/* Preview header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#D4DAE2] bg-[#F5F7F8]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          <span className="ml-3 text-[11px] tracking-[0.1em] text-[#8B95A1]">{label}</span>
        </div>
        <div className="flex items-center gap-3">
          {loading && (
            <span className="text-[10px] text-[#8B95A1] tracking-wide">로딩 중...</span>
          )}
          <button
            onClick={refresh}
            className="text-[11px] tracking-[0.1em] text-[#8B95A1] hover:text-[#C05010] transition-colors"
            title="새로고침"
          >
            ↺
          </button>
          <Link
            href={src}
            target="_blank"
            className="text-[11px] tracking-[0.1em] text-[#8B95A1] hover:text-[#C05010] transition-colors"
            title="새 탭에서 열기"
          >
            ↗
          </Link>
        </div>
      </div>

      {/* Scaled iframe */}
      <div className="relative overflow-hidden bg-[#F5F7F8]" style={{ height: "420px" }}>
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-[#F5F7F8]">
            <div className="flex flex-col items-center gap-3">
              <div className="w-5 h-5 border border-[#C05010] border-t-transparent rounded-full animate-spin" />
              <span className="text-[11px] tracking-[0.15em] text-[#8B95A1]">LOADING</span>
            </div>
          </div>
        )}
        <iframe
          key={key}
          src={src}
          onLoad={() => setLoading(false)}
          className="absolute top-0 left-0 origin-top-left"
          style={{
            width: "1280px",
            height: "900px",
            transform: "scale(0.6)",
            border: "none",
            pointerEvents: "none",
          }}
          title="미리보기"
        />
      </div>
    </div>
  );
}
