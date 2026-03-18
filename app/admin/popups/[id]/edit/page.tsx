"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import PopupForm from "@/components/admin/PopupForm";
import { Popup } from "@/lib/types";

export default function EditPopupPage() {
  const { id } = useParams<{ id: string }>();
  const [popup, setPopup] = useState<Popup | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/popups/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setPopup(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-sm text-[#8B95A1]">로딩 중...</p>;
  if (!popup) return <p className="text-sm text-red-500">항목을 찾을 수 없습니다.</p>;

  return (
    <div>
      <h1 className="text-xl font-light tracking-[0.1em] text-[#2d2a28] mb-8">팝업 수정</h1>
      <PopupForm initial={popup} id={id} />
    </div>
  );
}
