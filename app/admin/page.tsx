"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ADMIN_PATH } from "@/lib/admin-path";

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
    <div>
      <h1 className="text-xl font-light tracking-[0.1em] text-[#2d2a28] mb-8">대시보드</h1>

      <div className="grid grid-cols-2 gap-6 max-w-lg mb-10">
        {cards.map((card) => (
          <div key={card.label} className="bg-white border border-[#D4DAE2] p-6">
            <p className="text-xs tracking-[0.1em] text-[#8B95A1] uppercase mb-2">{card.label}</p>
            <p className="text-4xl font-light text-[#2d2a28] mb-4">{card.value}</p>
            <Link
              href={card.href}
              className="text-xs tracking-[0.15em] uppercase text-[#C05010] hover:underline"
            >
              {card.action} →
            </Link>
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <Link
          href={`${ADMIN_PATH}/news/new`}
          className="bg-[#C05010] text-white text-xs tracking-[0.15em] uppercase px-5 py-3 hover:bg-[#a04010] transition-colors"
        >
          + 공지사항 작성
        </Link>
        <Link
          href={`${ADMIN_PATH}/popups/new`}
          className="bg-[#2d2a28] text-white text-xs tracking-[0.15em] uppercase px-5 py-3 hover:bg-[#1a1815] transition-colors"
        >
          + 팝업 등록
        </Link>
        <Link
          href="/"
          target="_blank"
          className="border border-[#D4DAE2] text-xs tracking-[0.15em] uppercase px-5 py-3 hover:border-[#C05010] hover:text-[#C05010] transition-colors"
        >
          사이트 보기 ↗
        </Link>
      </div>
    </div>
  );
}
