"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ADMIN_PATH } from "@/lib/admin-path";
import SitePreview from "@/components/admin/SitePreview";

export default function AdminDashboard() {
  const [stats, setStats] = useState({ news: 0, popups: 0, performances: 0 });

  useEffect(() => {
    async function load() {
      const [n, p, perf] = await Promise.all([
        fetch("/api/admin/news").then((r) => r.json()),
        fetch("/api/popups").then((r) => r.json()),
        fetch("/api/admin/performances").then((r) => r.json()),
      ]);
      setStats({
        news: Array.isArray(n) ? n.length : 0,
        popups: Array.isArray(p) ? p.length : 0,
        performances: Array.isArray(perf) ? perf.length : 0,
      });
    }
    load();
  }, []);

  const cards = [
    { label: "게시된 공지사항", value: stats.news, href: `${ADMIN_PATH}/news`, action: "관리하기" },
    { label: "사업실적", value: stats.performances, href: `${ADMIN_PATH}/performances`, action: "관리하기" },
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
            href={`${ADMIN_PATH}/performances/new`}
            className="bg-[#2d2a28] text-white text-[11px] tracking-[0.15em] uppercase px-4 py-2.5 hover:bg-[#1a1815] transition-colors text-center"
          >
            + 사업실적 등록
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
        <SitePreview src="/" label="nbpkorea.com — 홈" />
      </div>
    </div>
  );
}
