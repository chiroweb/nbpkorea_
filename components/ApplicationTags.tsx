"use client";

import { Link } from "@/i18n/navigation";

interface ApplicationTagsProps {
  tags: string[];
  label?: string;
  category?: string;
}

export default function ApplicationTags({ tags, label = "적용 분야", category }: ApplicationTagsProps) {
  const catParam = category ? `&cat=${category}` : "";
  return (
    <div className="mb-8">
      <p className="text-[11px] tracking-[0.2em] uppercase text-[#888480] mb-3">{label}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Link
            key={tag}
            href={`/performance?tag=${encodeURIComponent(tag)}${catParam}`}
            className="text-[14px] tracking-[0.04em] border border-[#D4DAE2] px-3 py-2 text-[#888480] hover:border-[#C05010] hover:text-[#C05010] hover:bg-[#C05010]/5 transition-all duration-200"
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
}
