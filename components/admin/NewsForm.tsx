"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ContentEditor from "./ContentEditor";
import ImageUploadField from "./ImageUploadField";
import { ContentBlock, News } from "@/lib/types";
import { ADMIN_PATH } from "@/lib/admin-path";

const CATEGORIES = ["기술 인사이트", "제품 소식", "회사 소식", "파트너십", "언론 보도"];

interface Props {
  initial?: Partial<News>;
  id?: string;
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9가-힣\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export default function NewsForm({ initial, id }: Props) {
  const router = useRouter();
  const isEdit = !!id;

  const [form, setForm] = useState({
    title: initial?.title ?? "",
    slug: initial?.slug ?? "",
    category: initial?.category ?? CATEGORIES[0],
    date: initial?.date ?? new Date().toISOString().split("T")[0].replace(/-/g, "."),
    read_time: initial?.read_time ?? "5분",
    excerpt: initial?.excerpt ?? "",
    image_url: initial?.image_url ?? "",
    is_published: initial?.is_published ?? true,
  });
  const [content, setContent] = useState<ContentBlock[]>(initial?.content ?? []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleTitleChange(title: string) {
    setForm((f) => ({
      ...f,
      title,
      slug: isEdit ? f.slug : slugify(title),
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const payload = { ...form, content };

    const res = isEdit
      ? await fetch(`/api/news/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
      : await fetch("/api/news", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

    if (res.ok) {
      router.push(`${ADMIN_PATH}/news`);
      router.refresh();
    } else {
      const data = await res.json();
      setError(data.error ?? "저장 실패");
    }
    setLoading(false);
  }

  const inputClass =
    "w-full border border-[#D4DAE2] px-3 py-2.5 text-sm text-[#2d2a28] focus:outline-none focus:border-[#C05010] transition-colors";
  const labelClass = "block text-[11px] tracking-[0.15em] text-[#5C6470] uppercase mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
      {/* Title */}
      <div>
        <label className={labelClass}>제목</label>
        <input
          type="text"
          value={form.title}
          onChange={(e) => handleTitleChange(e.target.value)}
          className={inputClass}
          required
        />
      </div>

      {/* Slug */}
      <div>
        <label className={labelClass}>슬러그 (URL)</label>
        <input
          type="text"
          value={form.slug}
          onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
          className={inputClass}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Category */}
        <div>
          <label className={labelClass}>카테고리</label>
          <select
            value={form.category}
            onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
            className={inputClass}
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Date */}
        <div>
          <label className={labelClass}>날짜</label>
          <input
            type="text"
            value={form.date}
            onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
            className={inputClass}
            placeholder="2025.12.10"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Read time */}
        <div>
          <label className={labelClass}>읽기 시간</label>
          <input
            type="text"
            value={form.read_time}
            onChange={(e) => setForm((f) => ({ ...f, read_time: e.target.value }))}
            className={inputClass}
            placeholder="5분"
          />
        </div>

        {/* Published */}
        <div className="flex items-end pb-2.5">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={form.is_published}
              onChange={(e) => setForm((f) => ({ ...f, is_published: e.target.checked }))}
              className="w-4 h-4 accent-[#C05010]"
            />
            <span className="text-sm text-[#2d2a28]">게시</span>
          </label>
        </div>
      </div>

      {/* Excerpt */}
      <div>
        <label className={labelClass}>요약</label>
        <textarea
          value={form.excerpt}
          onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))}
          rows={3}
          className={inputClass + " resize-none"}
          required
        />
      </div>

      {/* Thumbnail image */}
      <div>
        <label className={labelClass}>썸네일 이미지 (URL 또는 파일 업로드)</label>
        <ImageUploadField
          value={form.image_url}
          onChange={(v) => setForm((f) => ({ ...f, image_url: v }))}
          folder="news"
          previewClassName="w-40 h-28"
          onRemove={() => setForm((f) => ({ ...f, image_url: "" }))}
        />
      </div>

      {/* Content editor */}
      <div>
        <label className={labelClass}>본문 콘텐츠</label>
        <ContentEditor blocks={content} onChange={setContent} />
      </div>

      {error && <p className="text-xs text-red-500">{error}</p>}

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={loading}
          className="bg-[#C05010] text-white text-xs tracking-[0.15em] uppercase px-6 py-3 hover:bg-[#a04010] transition-colors disabled:opacity-50"
        >
          {loading ? "저장 중..." : isEdit ? "수정 저장" : "게시하기"}
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
