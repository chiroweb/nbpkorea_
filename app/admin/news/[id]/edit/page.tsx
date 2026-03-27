"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import NewsForm from "@/components/admin/NewsForm";
import { News } from "@/lib/types";

export default function EditNewsPage() {
  const { id } = useParams<{ id: string }>();
  const [news, setNews] = useState<News | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/news/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setNews(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-sm text-[#8B95A1]">로딩 중...</p>;
  if (!news) return <p className="text-sm text-red-500">항목을 찾을 수 없습니다.</p>;

  return (
    <div>
      <h1 className="text-xl font-light tracking-[0.1em] text-[#2d2a28] mb-8">공지사항 수정</h1>
      <NewsForm initial={news} id={id} />
    </div>
  );
}
