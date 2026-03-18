"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ADMIN_PATH } from "@/lib/admin-path";

function SitePreview() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
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
          <span className="ml-3 text-[11px] tracking-[0.1em] text-[#8B95A1]">nbpkorea.com</span>
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
            href="/"
            target="_blank"
            className="text-[11px] tracking-[0.1em] text-[#8B95A1] hover:text-[#C05010] transition-colors"
            title="새 탭에서 열기"
          >
            ↗
          </Link>
        </div>
      </div>

      {/* Scaled iframe */}
      <div
        className="relative overflow-hidden bg-[#F5F7F8]"
        style={{ height: "420px" }}
      >
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
          ref={iframeRef}
          src="/"
          onLoad={() => setLoading(false)}
          className="absolute top-0 left-0 origin-top-left"
          style={{
            width: "1280px",
            height: "900px",
            transform: "scale(0.6)",
            border: "none",
            pointerEvents: "none",
          }}
          title="홈페이지 미리보기"
        />
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const [stats, setStats] = useState({ news: 0, popups: 0 });

  useEffect(() => {
    async function load() {
      const [n, p] = await Promise.all([
        fetch("/api/admin/news").then((r) => r.json()),
        fetch("/api/popups").then((r) => r.json()),
      ]);
      setStats({
        news: Array.isArray(n) ? n.length : 0,
        popups: Array.isArray(p) ? p.length : 0,
      });
    }
    load();
  }, []);

  const cards = [
    { label: "게시된 공지사항", value: stats.news, href: `${ADMIN_PATH}/news`, action: "관리하기" },
    { label: "활성 팝업", value: stats.popups, href: `${ADMIN_PATH}/popups`, action: "관리하기" },
  ];

  return (
    <div className="flex gap-8">
      {/* 왼쪽: 통계 + 빠른 메뉴 */}
      <div className="flex-shrink-0 w-56">
        <h1 className="text-xl font-light tracking-[0.1em] text-[#2d2a28] mb-8">대시보드</h1>

        <div className="flex flex-col gap-4 mb-8">
          {cards.map((card) => (
            <div key={card.label} className="bg-white border border-[#D4DAE2] p-5">
              <p className="text-[10px] tracking-[0.1em] text-[#8B95A1] uppercase mb-1">{card.label}</p>
              <p className="text-4xl font-light text-[#2d2a28] mb-3">{card.value}</p>
              <Link
                href={card.href}
                className="text-[11px] tracking-[0.15em] uppercase text-[#C05010] hover:underline"
              >
                {card.action} →
              </Link>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <Link
            href={`${ADMIN_PATH}/news/new`}
            className="bg-[#C05010] text-white text-[11px] tracking-[0.15em] uppercase px-4 py-2.5 hover:bg-[#a04010] transition-colors text-center"
          >
            + 공지사항 작성
          </Link>
          <Link
            href={`${ADMIN_PATH}/popups/new`}
            className="bg-[#2d2a28] text-white text-[11px] tracking-[0.15em] uppercase px-4 py-2.5 hover:bg-[#1a1815] transition-colors text-center"
          >
            + 팝업 등록
          </Link>
        </div>
      </div>

      {/* 오른쪽: 홈페이지 미리보기 */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm tracking-[0.15em] text-[#8B95A1] uppercase">홈페이지 미리보기</h2>
          <span className="text-[11px] text-[#C8D0DA]">↺ 새로고침 가능</span>
        </div>
        <SitePreview />
      </div>
    </div>
  );
}
