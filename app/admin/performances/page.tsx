"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Performance } from "@/lib/types";
import { ADMIN_PATH } from "@/lib/admin-path";
import SitePreview from "@/components/admin/SitePreview";

const CATEGORY_LABELS: Record<string, string> = {
  environment: "환경설비",
  hvac: "공조설비",
  combustion: "연소설비",
  burner: "산업용 버너",
};

const CATEGORY_TABS: { id: string; label: string }[] = [
  { id: "all", label: "전체" },
  { id: "environment", label: "환경설비" },
  { id: "hvac", label: "공조설비" },
  { id: "combustion", label: "연소설비" },
  { id: "burner", label: "산업용 버너" },
];

export default function AdminPerformancesPage() {
  const [items, setItems] = useState<Performance[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: items.length };
    for (const it of items) map[it.category] = (map[it.category] ?? 0) + 1;
    return map;
  }, [items]);

  const filteredItems = useMemo(
    () => (activeCategory === "all" ? items : items.filter((it) => it.category === activeCategory)),
    [items, activeCategory]
  );

  async function load() {
    const res = await fetch("/api/admin/performances");
    const data = await res.json();
    setItems(Array.isArray(data) ? data : []);
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function handleDelete(id: string, title: string) {
    if (!confirm(`"${title}" 을(를) 삭제하시겠습니까?`)) return;
    const res = await fetch(`/api/performances/${id}`, { method: "DELETE", credentials: "include" });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      alert(data.error ?? "삭제 실패");
      return;
    }
    load();
  }

  return (
    <div className="flex gap-8">
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-xl font-light tracking-[0.1em] text-[#2d2a28]">사업실적 관리</h1>
          <Link
            href={`${ADMIN_PATH}/performances/new`}
            className="bg-[#C05010] text-white text-xs tracking-[0.15em] uppercase px-5 py-2.5 hover:bg-[#a04010] transition-colors"
          >
            + 실적 등록
          </Link>
        </div>

        {/* 카테고리 탭 */}
        <div className="flex flex-wrap gap-2 mb-5">
          {CATEGORY_TABS.map((tab) => {
            const active = activeCategory === tab.id;
            const count = counts[tab.id] ?? 0;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-1.5 text-xs tracking-[0.08em] border transition-colors ${
                  active
                    ? "bg-[#C05010] border-[#C05010] text-white"
                    : "border-[#D4DAE2] text-[#5C6470] hover:border-[#C05010] hover:text-[#C05010]"
                }`}
              >
                {tab.label}
                <span className={`ml-1.5 text-[10px] ${active ? "text-white/80" : "text-[#8B95A1]"}`}>{count}</span>
              </button>
            );
          })}
        </div>

        {loading ? (
          <p className="text-sm text-[#8B95A1]">로딩 중...</p>
        ) : items.length === 0 ? (
          <p className="text-sm text-[#8B95A1]">등록된 사업실적이 없습니다.</p>
        ) : filteredItems.length === 0 ? (
          <p className="text-sm text-[#8B95A1]">선택한 분야의 사업실적이 없습니다.</p>
        ) : (
          <div className="bg-white border border-[#D4DAE2] overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#D4DAE2] bg-[#F5F7F8]">
                  <th className="text-left px-5 py-3 text-[11px] tracking-[0.15em] text-[#8B95A1] uppercase font-normal">No.</th>
                  <th className="text-left px-5 py-3 text-[11px] tracking-[0.15em] text-[#8B95A1] uppercase font-normal">프로젝트명</th>
                  <th className="text-left px-5 py-3 text-[11px] tracking-[0.15em] text-[#8B95A1] uppercase font-normal">분야</th>
                  <th className="text-left px-5 py-3 text-[11px] tracking-[0.15em] text-[#8B95A1] uppercase font-normal">상태</th>
                  <th className="px-5 py-3" />
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item) => (
                  <tr key={item.id} className="border-b border-[#D4DAE2] last:border-0 hover:bg-[#F5F7F8] transition-colors">
                    <td className="px-5 py-4 text-[#8B95A1] text-xs">{item.number}</td>
                    <td className="px-5 py-4 text-[#2d2a28] max-w-xs truncate">{item.title}</td>
                    <td className="px-5 py-4 text-[#8B95A1] text-xs">{CATEGORY_LABELS[item.category] ?? item.category}</td>
                    <td className="px-5 py-4">
                      <span
                        className={`text-[11px] tracking-[0.1em] px-2 py-0.5 uppercase ${
                          item.is_published ? "bg-green-50 text-green-600" : "bg-[#F5F7F8] text-[#8B95A1]"
                        }`}
                      >
                        {item.is_published ? "게시" : "비공개"}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3 justify-end">
                        <Link
                          href={`${ADMIN_PATH}/performances/${item.id}/edit`}
                          className="text-xs text-[#2d2a28] hover:text-[#C05010] transition-colors"
                        >
                          수정
                        </Link>
                        <button
                          onClick={() => handleDelete(item.id, item.title)}
                          className="text-xs text-[#8B95A1] hover:text-red-500 transition-colors"
                        >
                          삭제
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="flex-shrink-0 w-[520px]">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm tracking-[0.15em] text-[#8B95A1] uppercase">사업실적 페이지 미리보기</h2>
        </div>
        <SitePreview src="/performance" label="nbpkorea.com/performance" />
      </div>
    </div>
  );
}
