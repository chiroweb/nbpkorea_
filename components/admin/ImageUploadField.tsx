"use client";

import { useRef, useState } from "react";

interface Props {
  value: string;
  onChange: (url: string) => void;
  folder?: string;
  /** 미리보기 회전 각도 (선택) */
  rotation?: number;
  onRotate?: () => void;
  onRemove?: () => void;
  label?: string;
  /** 미리보기 크기 — `w-32 h-32` 등 Tailwind 클래스 */
  previewClassName?: string;
}

export default function ImageUploadField({
  value,
  onChange,
  folder,
  rotation = 0,
  onRotate,
  onRemove,
  label,
  previewClassName = "w-32 h-32",
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  async function handleFile(file: File) {
    setUploading(true);
    setError("");
    try {
      const fd = new FormData();
      fd.append("file", file);
      if (folder) fd.append("folder", folder);
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        credentials: "include",
        body: fd,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "업로드 실패");
      onChange(data.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "업로드 실패");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  const inputClass =
    "w-full border border-[#D4DAE2] px-3 py-2 text-sm text-[#2d2a28] focus:outline-none focus:border-[#C05010] transition-colors bg-white";

  return (
    <div className="border border-[#D4DAE2] bg-[#FAFBFC] p-3 space-y-3">
      {label && (
        <p className="text-[10px] tracking-[0.15em] uppercase text-[#5C6470]">{label}</p>
      )}

      {/* URL 입력 */}
      <div>
        <p className="text-[10px] tracking-[0.12em] uppercase text-[#8B95A1] mb-1">URL 입력</p>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={inputClass}
          placeholder="https://example.com/image.jpg"
        />
      </div>

      {/* 파일 업로드 */}
      <div>
        <p className="text-[10px] tracking-[0.12em] uppercase text-[#8B95A1] mb-1">파일 업로드</p>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) handleFile(f);
          }}
          disabled={uploading}
          className="block w-full text-xs text-[#5C6470] file:mr-3 file:py-1.5 file:px-3 file:border file:border-[#D4DAE2] file:bg-white file:text-xs file:tracking-[0.1em] file:uppercase file:text-[#5C6470] hover:file:border-[#C05010] hover:file:text-[#C05010] file:transition-colors file:cursor-pointer disabled:opacity-50"
        />
        {uploading && <p className="text-[11px] text-[#C05010] mt-1">업로드 중...</p>}
        {error && <p className="text-[11px] text-red-500 mt-1">{error}</p>}
      </div>

      {/* 미리보기 + 액션 */}
      {value.trim() && (
        <div className="flex items-start gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={value}
            alt="미리보기"
            className={`${previewClassName} object-cover border border-[#D4DAE2] bg-white`}
            style={{ transform: `rotate(${rotation}deg)`, imageOrientation: "from-image" }}
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
          <div className="flex flex-col gap-1">
            {onRotate && (
              <button
                type="button"
                onClick={onRotate}
                className="text-xs text-[#5C6470] hover:text-[#C05010] px-2 py-1.5 border border-[#D4DAE2] hover:border-[#C05010] transition-colors"
                title="90° 회전"
              >
                ↻ 회전
              </button>
            )}
            {onRemove && (
              <button
                type="button"
                onClick={onRemove}
                className="text-xs text-red-400 hover:text-red-600 px-2 py-1.5 border border-red-200 hover:border-red-400 transition-colors"
              >
                삭제
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
