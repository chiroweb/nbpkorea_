"use client";

import { Link } from "@/i18n/navigation";

interface FloatingCaseLinkProps {
  tag: string;
  label: string;
  category?: string;
}

export default function FloatingCaseLink({ tag, label, category }: FloatingCaseLinkProps) {
  const catParam = category ? `&cat=${category}` : "";
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30">
      <Link
        href={`/performance?tag=${encodeURIComponent(tag)}${catParam}`}
        className="flex items-center gap-3 px-6 py-3 bg-[#C05010] text-white text-[13px] tracking-[0.04em] shadow-lg border-2 border-transparent hover:border-white hover:shadow-xl transition-all duration-300"
      >
        <span>{label}</span>
        <svg width="14" height="6" viewBox="0 0 14 6" fill="none" className="ml-1">
          <path d="M0 3H13M13 3L10 1M13 3L10 5" stroke="currentColor" strokeWidth="1" />
        </svg>
      </Link>
    </div>
  );
}
