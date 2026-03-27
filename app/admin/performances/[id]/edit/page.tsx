"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import PerformanceForm from "@/components/admin/PerformanceForm";
import { Performance } from "@/lib/types";

export default function EditPerformancePage() {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<Performance | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/performances/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setItem(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-sm text-[#8B95A1]">로딩 중...</p>;
  if (!item) return <p className="text-sm text-red-500">항목을 찾을 수 없습니다.</p>;

  return (
    <div>
      <h1 className="text-xl font-light tracking-[0.1em] text-[#2d2a28] mb-8">사업실적 수정</h1>
      <PerformanceForm initial={item} id={id} />
    </div>
  );
}
