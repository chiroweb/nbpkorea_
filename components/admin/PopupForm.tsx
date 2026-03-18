"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Popup } from "@/lib/types";
import { ADMIN_PATH } from "@/lib/admin-path";

interface Props {
  initial?: Partial<Popup>;
  id?: string;
}

function toDatetimeLocal(iso: string) {
  return iso ? iso.slice(0, 16) : "";
}

export default function PopupForm({ initial, id }: Props) {
  const router = useRouter();
  const isEdit = !!id;

  const now = new Date();
  const nextWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

  const [form, setForm] = useState({
    title: initial?.title ?? "",
    image_url: initial?.image_url ?? "",
    link_url: initial?.link_url ?? "",
    start_date: toDatetimeLocal(initial?.start_date ?? now.toISOString()),
    end_date: toDatetimeLocal(initial?.end_date ?? nextWeek.toISOString()),
    is_active: initial?.is_active ?? true,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const payload = {
      ...form,
      start_date: new Date(form.start_date).toISOString(),
      end_date: new Date(form.end_date).toISOString(),
      link_url: form.link_url || null,
    };

    const res = isEdit
      ? await fetch(`/api/popups/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
      : await fetch("/api/popups", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

    if (res.ok) {
      router.push(`${ADMIN_PATH}/popups`);
      router.refresh();
    } else {
      const data = await res.json();
      setError(data.error ?? "저장 실패");
    }
    setLoading(false);
  }

  const inputClass =
    "w-full border border-[#D4DAE2] px-3 py-2.5 text-sm text-[#2d2a28] focus:outline-none focus:border-[#C05010] transition-colors";
  const labelClass = "block text-[11px] tracking-[0.15em] text-[#8B95A1] uppercase mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="max-w-lg space-y-6">
      {/* Title */}
      <div>
        <label className={labelClass}>관리용 이름</label>
        <input
          type="text"
          value={form.title}
          onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
          className={inputClass}
          required
        />
      </div>

      {/* Image URL */}
      <div>
        <label className={labelClass}>이미지 URL</label>
        <input
          type="url"
          value={form.image_url}
          onChange={(e) => setForm((f) => ({ ...f, image_url: e.target.value }))}
          className={inputClass}
          required
        />
        {form.image_url && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={form.image_url} alt="preview" className="mt-2 h-32 object-cover border border-[#D4DAE2]" />
        )}
      </div>

      {/* Link URL */}
      <div>
        <label className={labelClass}>클릭 시 이동 URL (선택)</label>
        <input
          type="url"
          value={form.link_url}
          onChange={(e) => setForm((f) => ({ ...f, link_url: e.target.value }))}
          className={inputClass}
          placeholder="https://..."
        />
      </div>

      {/* Date range */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>노출 시작일</label>
          <input
            type="datetime-local"
            value={form.start_date}
            onChange={(e) => setForm((f) => ({ ...f, start_date: e.target.value }))}
            className={inputClass}
            required
          />
        </div>
        <div>
          <label className={labelClass}>노출 종료일</label>
          <input
            type="datetime-local"
            value={form.end_date}
            onChange={(e) => setForm((f) => ({ ...f, end_date: e.target.value }))}
            className={inputClass}
            required
          />
        </div>
      </div>

      {/* Active */}
      <div>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={form.is_active}
            onChange={(e) => setForm((f) => ({ ...f, is_active: e.target.checked }))}
            className="w-4 h-4 accent-[#C05010]"
          />
          <span className="text-sm text-[#2d2a28]">활성화</span>
        </label>
      </div>

      {error && <p className="text-xs text-red-500">{error}</p>}

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={loading}
          className="bg-[#C05010] text-white text-xs tracking-[0.15em] uppercase px-6 py-3 hover:bg-[#a04010] transition-colors disabled:opacity-50"
        >
          {loading ? "저장 중..." : isEdit ? "수정 저장" : "등록하기"}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="border border-[#D4DAE2] text-xs tracking-[0.15em] uppercase px-6 py-3 hover:border-[#C05010] transition-colors"
        >
          취소
        </button>
      </div>
    </form>
  );
}
