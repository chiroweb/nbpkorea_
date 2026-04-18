"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Performance, PerformanceSpec } from "@/lib/types";
import { ADMIN_PATH } from "@/lib/admin-path";
import ImageUploadField from "./ImageUploadField";

const CATEGORIES = [
  { id: "environment", label: "환경설비" },
  { id: "hvac", label: "공조설비" },
  { id: "combustion", label: "연소설비" },
  { id: "burner", label: "산업용 버너" },
];

// 카테고리별 미리 정의된 태그 목록
const TAG_PRESETS: Record<string, string[]> = {
  environment: [
    "RTO", "RCO", "CTO", "TO",
    "도장", "식품", "화학", "환경", "철강", "축산", "자동차", "인쇄",
  ],
  hvac: [
    "클린룸 공조기", "드라이룸 공조기", "직화식 공조기", "도어히터", "복합식 제습기",
  ],
  combustion: [
    "NKGH", "NK-IDGH", "도장건조기",
  ],
  burner: [
    "덕트버너", "MPG 버너", "로용 버너", "저녹스 버너",
    "오븐 버너", "메탈버너", "포터블 버너", "밸브트레인",
  ],
};

interface Props {
  initial?: Partial<Performance>;
  id?: string;
}

export default function PerformanceForm({ initial, id }: Props) {
  const router = useRouter();
  const isEdit = !!id;

  const [form, setForm] = useState({
    category: initial?.category ?? "environment",
    title: initial?.title ?? "",
    number: initial?.number ?? 1,
    before_text: initial?.before_text ?? "",
    after_text: initial?.after_text ?? "",
    is_published: initial?.is_published ?? true,
    sort_order: initial?.sort_order ?? 0,
  });
  const [tags, setTags] = useState<string[]>(initial?.tags ?? []);
  const [images, setImages] = useState<string[]>(
    (initial?.images ?? ["", "", ""]).map((url) => url.replace(/#rotate=\d+/, ""))
  );
  const [specs, setSpecs] = useState<PerformanceSpec[]>(
    initial?.specs ?? [{ label: "", value: "" }]
  );
  // 기존 이미지 URL에서 회전값 파싱
  const [rotations, setRotations] = useState<Record<number, number>>(() => {
    const rots: Record<number, number> = {};
    (initial?.images ?? []).forEach((url, i) => {
      const match = url.match(/#rotate=(\d+)/);
      if (match) rots[i] = Number(match[1]);
    });
    return rots;
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [tagDropdownOpen, setTagDropdownOpen] = useState(false);

  function rotateImage(idx: number) {
    setRotations((prev) => ({ ...prev, [idx]: ((prev[idx] ?? 0) + 90) % 360 }));
  }

  const availableTags = TAG_PRESETS[form.category] ?? [];

  function toggleTag(tag: string) {
    setTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }

  function removeTag(tag: string) {
    setTags((prev) => prev.filter((t) => t !== tag));
  }

  function updateImage(idx: number, val: string) {
    setImages((prev) => prev.map((v, i) => (i === idx ? val : v)));
  }

  function updateSpec(idx: number, field: "label" | "value", val: string) {
    setSpecs((prev) => prev.map((s, i) => (i === idx ? { ...s, [field]: val } : s)));
  }

  function addSpec() {
    setSpecs((prev) => [...prev, { label: "", value: "" }]);
  }

  function removeSpec(idx: number) {
    setSpecs((prev) => prev.filter((_, i) => i !== idx));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    // 회전값이 있으면 URL 해시에 추가
    const processedImages = images
      .filter((u) => u.trim())
      .map((url, i) => {
        const rot = rotations[i] ?? 0;
        const cleanUrl = url.replace(/#rotate=\d+/, "");
        return rot > 0 ? `${cleanUrl}#rotate=${rot}` : cleanUrl;
      });

    const payload = {
      ...form,
      tags,
      images: processedImages,
      specs: specs.filter((s) => s.label.trim()),
    };

    const res = isEdit
      ? await fetch(`/api/performances/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
      : await fetch("/api/performances", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

    if (res.ok) {
      router.push(`${ADMIN_PATH}/performances`);
      router.refresh();
    } else {
      const data = await res.json();
      setError(data.error ?? "저장 실패");
    }
    setLoading(false);
  }

  const inputClass =
    "w-full border border-[#D4DAE2] px-4 py-2.5 text-sm text-[#2d2a28] focus:outline-none focus:border-[#C05010] transition-colors bg-white";
  const labelClass = "block text-[11px] tracking-[0.15em] uppercase text-[#5C6470] mb-2";

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
      {error && <p className="text-sm text-red-500">{error}</p>}

      {/* 카테고리 */}
      <div>
        <label className={labelClass}>사업분야</label>
        <select
          value={form.category}
          onChange={(e) => {
            setForm((f) => ({ ...f, category: e.target.value }));
            setTags([]); // 카테고리 변경 시 태그 초기화
          }}
          className={inputClass}
        >
          {CATEGORIES.map((c) => (
            <option key={c.id} value={c.id}>{c.label}</option>
          ))}
        </select>
      </div>

      {/* 적용분야 태그 */}
      <div>
        <label className={labelClass}>적용분야 태그</label>

        {/* 선택된 태그 표시 */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1.5 px-3 py-1 bg-[#C05010]/10 text-[#C05010] text-xs tracking-[0.06em] border border-[#C05010]/20"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="hover:text-red-600 transition-colors"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}

        {/* 태그 추가 드롭다운 */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setTagDropdownOpen(!tagDropdownOpen)}
            className="flex items-center gap-2 px-4 py-2 text-xs tracking-[0.1em] border border-[#D4DAE2] text-[#5C6470] hover:border-[#C05010] hover:text-[#C05010] transition-colors"
          >
            + 태그 추가
            <svg
              width="10" height="6" viewBox="0 0 10 6" fill="none"
              className={`transition-transform ${tagDropdownOpen ? "rotate-180" : ""}`}
            >
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1" />
            </svg>
          </button>

          {tagDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-[#D4DAE2] shadow-lg z-20 min-w-[320px] max-h-[280px] overflow-y-auto p-3">
              <p className="text-[10px] tracking-[0.15em] uppercase text-[#5C6470] mb-2">
                {CATEGORIES.find((c) => c.id === form.category)?.label} 관련 태그
              </p>
              <div className="flex flex-wrap gap-1.5">
                {availableTags.map((tag) => {
                  const selected = tags.includes(tag);
                  return (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleTag(tag)}
                      className={`px-2.5 py-1 text-xs tracking-[0.04em] border transition-colors ${
                        selected
                          ? "bg-[#C05010] border-[#C05010] text-white"
                          : "border-[#D4DAE2] text-[#5C6470] hover:border-[#C05010] hover:text-[#C05010]"
                      }`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
              <button
                type="button"
                onClick={() => setTagDropdownOpen(false)}
                className="mt-3 text-[11px] text-[#5C6470] hover:text-[#C05010] transition-colors"
              >
                닫기
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 제목 & 번호 */}
      <div className="grid grid-cols-[1fr_120px] gap-4">
        <div>
          <label className={labelClass}>프로젝트명</label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
            className={inputClass}
            placeholder="롯데엔지니어링플러스틱(주)안전사업장"
            required
          />
        </div>
        <div>
          <label className={labelClass}>No.</label>
          <input
            type="number"
            value={form.number}
            onChange={(e) => setForm((f) => ({ ...f, number: Number(e.target.value) }))}
            className={inputClass}
            required
          />
        </div>
      </div>

      {/* 정렬순서 */}
      <div>
        <label className={labelClass}>정렬순서 (높을수록 위에 표시)</label>
        <input
          type="number"
          value={form.sort_order}
          onChange={(e) => setForm((f) => ({ ...f, sort_order: Number(e.target.value) }))}
          className={inputClass}
        />
      </div>

      {/* 이미지 */}
      <div>
        <label className={labelClass}>이미지 (최대 5장 — URL 또는 파일 업로드)</label>
        <div className="space-y-3">
          {images.map((url, i) => (
            <ImageUploadField
              key={i}
              label={`이미지 ${i + 1}`}
              value={url}
              onChange={(v) => updateImage(i, v)}
              folder={`performances/${form.category}`}
              rotation={rotations[i] ?? 0}
              onRotate={() => rotateImage(i)}
              onRemove={() => {
                setImages((prev) => prev.filter((_, idx) => idx !== i));
                setRotations((prev) => {
                  const n: Record<number, number> = {};
                  Object.entries(prev).forEach(([k, v]) => {
                    const idx = Number(k);
                    if (idx < i) n[idx] = v;
                    else if (idx > i) n[idx - 1] = v;
                  });
                  return n;
                });
              }}
            />
          ))}
        </div>
        {images.length < 5 && (
          <button
            type="button"
            onClick={() => setImages((prev) => [...prev, ""])}
            className="mt-2 text-xs text-[#C05010] hover:underline"
          >
            + 이미지 추가
          </button>
        )}
      </div>

      {/* 스펙 */}
      <div>
        <label className={labelClass}>스펙 (항목 — 값)</label>
        <div className="space-y-2">
          {specs.map((spec, i) => (
            <div key={i} className="flex gap-2">
              <input
                type="text"
                value={spec.label}
                onChange={(e) => updateSpec(i, "label", e.target.value)}
                className={`${inputClass} flex-1`}
                placeholder="풍량"
              />
              <input
                type="text"
                value={spec.value}
                onChange={(e) => updateSpec(i, "value", e.target.value)}
                className={`${inputClass} flex-1`}
                placeholder="50,764㎥/hr"
              />
              <button
                type="button"
                onClick={() => removeSpec(i)}
                className="text-xs text-[#5C6470] hover:text-red-500 px-2"
              >
                x
              </button>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={addSpec}
          className="mt-2 text-xs text-[#C05010] hover:underline"
        >
          + 스펙 항목 추가
        </button>
      </div>

      {/* 비포/애프터 */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Before (도입 전)</label>
          <textarea
            value={form.before_text}
            onChange={(e) => setForm((f) => ({ ...f, before_text: e.target.value }))}
            className={`${inputClass} h-24 resize-none`}
            placeholder="기존 노후 설비로 처리효율 70% 미만..."
          />
        </div>
        <div>
          <label className={labelClass}>After (도입 후 성과)</label>
          <textarea
            value={form.after_text}
            onChange={(e) => setForm((f) => ({ ...f, after_text: e.target.value }))}
            className={`${inputClass} h-24 resize-none`}
            placeholder="처리효율 98.5% 달성, 에너지 30% 절감..."
          />
        </div>
      </div>

      {/* 게시 여부 */}
      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={form.is_published}
          onChange={(e) => setForm((f) => ({ ...f, is_published: e.target.checked }))}
          className="accent-[#C05010]"
        />
        <span className="text-sm text-[#2d2a28]">게시</span>
      </label>

      {/* 제출 */}
      <button
        type="submit"
        disabled={loading}
        className="bg-[#C05010] text-white text-xs tracking-[0.15em] uppercase px-8 py-3 hover:bg-[#a04010] transition-colors disabled:opacity-50"
      >
        {loading ? "저장 중..." : isEdit ? "수정 완료" : "등록"}
      </button>
    </form>
  );
}
