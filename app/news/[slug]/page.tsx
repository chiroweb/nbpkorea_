"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import SubpageLayout from "@/components/SubpageLayout";
import { useInView } from "@/hooks/useInView";
import Link from "next/link";
import Image from "next/image";
import { News } from "@/lib/types";

export default function NewsDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<News | null>(null);
  const [loading, setLoading] = useState(true);
  const { ref, isInView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    fetch(`/api/news?slug=${encodeURIComponent(slug)}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        setPost(data);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <SubpageLayout title="로딩 중..." breadcrumb={[{ label: "NBP/NEWS", href: "/news" }]}>
        <div className="px-6 md:px-12 py-32 text-center text-[#8B95A1] text-sm">로딩 중...</div>
      </SubpageLayout>
    );
  }

  if (!post) {
    return (
      <SubpageLayout title="Not Found" breadcrumb={[{ label: "NBP/NEWS", href: "/news" }]}>
        <div className="px-6 md:px-12 py-32 text-center">
          <p className="text-[#8B95A1] text-sm mb-6">게시글을 찾을 수 없습니다.</p>
          <Link href="/news" className="text-xs tracking-[0.15em] uppercase text-[#C05010] hover:underline">
            목록으로 돌아가기
          </Link>
        </div>
      </SubpageLayout>
    );
  }

  return (
    <SubpageLayout
      title={post.category}
      breadcrumb={[
        { label: "NBP/NEWS", href: "/news" },
        { label: post.category, href: "/news" },
      ]}
    >
      <article className="px-6 md:px-12 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Meta */}
          <div
            ref={ref}
            className={`flex items-center gap-4 mb-8 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="text-[13px] tracking-[0.2em] uppercase text-[#C05010] border border-[#C05010]/30 px-3 py-1">
              {post.category}
            </span>
            <span className="text-[14px] tracking-[0.1em] text-[#8B95A1]">{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-[#C8D0DA]" />
            <span className="text-[14px] tracking-[0.1em] text-[#8B95A1]">읽기 {post.read_time}</span>
          </div>

          {/* Title */}
          <h1
            className={`text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.05em] text-[#2d2a28] mb-8 leading-snug transition-all duration-700 delay-100 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {post.title}
          </h1>

          {/* Excerpt */}
          <p
            className={`text-base text-[#8B95A1] leading-[2] mb-12 border-l-2 border-[#C05010] pl-6 transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {post.excerpt}
          </p>

          {/* Thumbnail */}
          {post.image_url && (
            <div
              className={`relative aspect-[16/9] overflow-hidden bg-[#DCE2E8] mb-16 transition-all duration-700 delay-300 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <Image src={post.image_url} alt={post.title} fill className="object-cover" priority />
            </div>
          )}

          {/* Divider */}
          <div className="h-px bg-[#D4DAE2] mb-16" />

          {/* Body Content */}
          <div className="space-y-6">
            {post.content.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2 key={i} className="text-xl tracking-[0.08em] font-medium text-[#2d2a28] mt-12 mb-4 pt-8 border-t border-[#D4DAE2] first:border-t-0 first:pt-0 first:mt-0">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "h3") {
                return (
                  <h3 key={i} className="text-base tracking-[0.08em] font-medium text-[#2d2a28] mt-8 mb-3">
                    {block.text}
                  </h3>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={i} className="space-y-2">
                    {block.items?.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-[#8B95A1] leading-[1.8]">
                        <span className="mt-2 w-1 h-1 rounded-full bg-[#C05010] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-sm text-[#8B95A1] leading-[2]">
                  {block.text}
                </p>
              );
            })}
          </div>

          {/* Back & CTA */}
          <div className="mt-20 pt-12 border-t border-[#D4DAE2] flex items-center justify-between">
            <Link href="/news" className="btn-link group text-[#8B95A1]">
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="rotate-180 transition-transform group-hover:-translate-x-1">
                <path d="M0 4H15M15 4L11 1M15 4L11 7" stroke="currentColor" strokeWidth="1" />
              </svg>
              <span className="text-xs tracking-[0.15em] uppercase">목록으로</span>
            </Link>
            <Link
              href="/support"
              className="text-xs tracking-[0.15em] uppercase border border-[#2d2a28] px-5 py-2.5 hover:bg-[#C05010] hover:border-[#C05010] hover:text-white transition-all duration-300"
            >
              문의하기
            </Link>
          </div>
        </div>
      </article>
    </SubpageLayout>
  );
}
