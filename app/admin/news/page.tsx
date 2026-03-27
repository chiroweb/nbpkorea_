"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { News } from "@/lib/types";
import { ADMIN_PATH } from "@/lib/admin-path";
import SitePreview from "@/components/admin/SitePreview";

export default function AdminNewsPage() {
  const [items, setItems] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    // Admin sees all news including unpublished
    const res = await fetch("/api/admin/news");
    const data = await res.json();
    setItems(Array.isArray(data) ? data : []);
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function handleDelete(id: string, title: string) {
    if (!confirm(`"${title}" 을(를) 삭제하시겠습니까?`)) return;
    await fetch(`/api/news/${id}`, { method: "DELETE" });
    load();
  }

  return (
    <div className="flex gap-8">
      {/* 왼쪽: 목록 */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-xl font-light tracking-[0.1em] text-[#2d2a28]">공지사항 관리</h1>
          <Link
            href={`${ADMIN_PATH}/news/new`}
            className="bg-[#C05010] text-white text-xs tracking-[0.15em] uppercase px-5 py-2.5 hover:bg-[#a04010] transition-colors"
          >
            + 새 글 작성
          </Link>
        </div>

        {loading ? (
          <p className="text-sm text-[#8B95A1]">로딩 중...</p>
        ) : items.length === 0 ? (
          <p className="text-sm text-[#8B95A1]">등록된 공지사항이 없습니다.</p>
        ) : (
          <div className="bg-white border border-[#D4DAE2] overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#D4DAE2] bg-[#F5F7F8]">
                  <th className="text-left px-5 py-3 text-[11px] tracking-[0.15em] text-[#8B95A1] uppercase font-normal">제목</th>
                  <th className="text-left px-5 py-3 text-[11px] tracking-[0.15em] text-[#8B95A1] uppercase font-normal">카테고리</th>
                  <th className="text-left px-5 py-3 text-[11px] tracking-[0.15em] text-[#8B95A1] uppercase font-normal">날짜</th>
                  <th className="text-left px-5 py-3 text-[11px] tracking-[0.15em] text-[#8B95A1] uppercase font-normal">상태</th>
                  <th className="px-5 py-3" />
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="border-b border-[#D4DAE2] last:border-0 hover:bg-[#F5F7F8] transition-colors">
                    <td className="px-5 py-4 text-[#2d2a28] max-w-xs truncate">{item.title}</td>
                    <td className="px-5 py-4 text-[#8B95A1] text-xs">{item.category}</td>
                    <td className="px-5 py-4 text-[#8B95A1] text-xs whitespace-nowrap">{item.date}</td>
                    <td className="px-5 py-4">
                      <span
                        className={`text-[11px] tracking-[0.1em] px-2 py-0.5 uppercase ${
                          item.is_published
                            ? "bg-green-50 text-green-600"
                            : "bg-[#F5F7F8] text-[#8B95A1]"
                        }`}
                      >
                        {item.is_published ? "게시" : "비공개"}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3 justify-end">
                        <Link
                          href={`${ADMIN_PATH}/news/${item.id}/edit`}
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

      {/* 오른쪽: 공지사항 페이지 미리보기 */}
      <div className="flex-shrink-0 w-[520px]">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm tracking-[0.15em] text-[#8B95A1] uppercase">공지사항 페이지 미리보기</h2>
        </div>
        <SitePreview src="/news" label="nbpkorea.com/news" />
      </div>
    </div>
  );
}
