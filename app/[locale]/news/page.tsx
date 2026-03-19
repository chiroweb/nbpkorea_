"use client";

import { useEffect, useState } from "react";
import SubpageLayout from "@/components/SubpageLayout";
import { useInView } from "@/hooks/useInView";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { News } from "@/lib/types";
import { useTranslations } from "next-intl";

function PostCard({ post, index }: { post: News; index: number }) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <Link href={`/news/${post.slug}`} className="group block">
        <div className="relative aspect-[16/10] overflow-hidden bg-[#DCE2E8] mb-5">
          <Image
            src={post.image_url}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#2d2a28]/0 group-hover:bg-[#2d2a28]/10 transition-all duration-500" />
          <span className="absolute top-4 left-4 text-[13px] tracking-[0.15em] uppercase bg-[#F5F7F8]/90 text-[#C05010] px-3 py-1">
            {post.category}
          </span>
        </div>
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[14px] tracking-[0.1em] text-[#8B95A1]">{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-[#C8D0DA]" />
            <span className="text-[14px] tracking-[0.1em] text-[#8B95A1]">읽기 {post.read_time}</span>
          </div>
          <h3 className="text-base tracking-[0.05em] text-[#2d2a28] font-bold mb-2 leading-snug group-hover:text-[#C05010] transition-colors duration-300">
            {post.title}
          </h3>
          <p className="text-sm text-[#8B95A1] leading-[1.8] line-clamp-2">{post.excerpt}</p>
          <div className="flex items-center gap-2 mt-4 text-[14px] tracking-[0.15em] uppercase text-[#2d2a28]/50 group-hover:text-[#C05010] transition-colors duration-300">
            <span>Read More</span>
            <svg width="14" height="6" viewBox="0 0 14 6" fill="none" className="transition-transform group-hover:translate-x-1">
              <path d="M0 3H13M13 3L10 1M13 3L10 5" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function NewsPage() {
  const t = useTranslations("news");
  const [posts, setPosts] = useState<News[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  const categories = [
    { key: "all", label: t("categories.all") },
    { key: "tech", label: t("categories.tech"), filter: "기술 인사이트" },
    { key: "product", label: t("categories.product"), filter: "제품 소식" },
    { key: "company", label: t("categories.company"), filter: "회사 소식" },
    { key: "partnership", label: t("categories.partnership"), filter: "파트너십" },
  ];

  useEffect(() => {
    fetch("/api/news")
      .then((r) => r.json())
      .then((data) => {
        setPosts(Array.isArray(data) ? data : []);
        setLoading(false);
      });
  }, []);

  const activeCat = categories.find((c) => c.key === activeCategory);
  const filtered = activeCategory === "all" ? posts : posts.filter((p) => p.category === activeCat?.filter);

  return (
    <SubpageLayout
      title={t("title")}
      subtitle={t("subtitle")}
      breadcrumb={[{ label: t("breadcrumb"), href: "/news" }]}
    >
      {/* Category Filter */}
      <section className="px-6 md:px-12 pt-12 pb-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`text-[14px] tracking-[0.15em] uppercase px-4 py-2 border transition-all duration-300 ${
                  cat.key === activeCategory
                    ? "border-[#2d2a28] bg-[#2d2a28] text-[#F5F7F8]"
                    : "border-[#D4DAE2] text-[#8B95A1] hover:border-[#C05010] hover:text-[#C05010]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <p className="text-sm text-[#8B95A1]">{t("loading")}</p>
          ) : filtered.length === 0 ? (
            <p className="text-sm text-[#8B95A1]">{t("empty")}</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {filtered.map((post, index) => (
                <PostCard key={post.id} post={post} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Divider marquee */}
      <div className="overflow-hidden py-8 border-y border-[#D4DAE2] mb-0">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="flex-shrink-0 text-[clamp(1.5rem,3vw,2.5rem)] font-light tracking-[0.3em] text-[#D4DAE2] uppercase mr-12">
              NBPKOREA IS BEST OPTION FOR YOUR BUISSNESS
              <span className="mx-6 text-[#DCE2E8]">✦</span>
            </span>
          ))}
        </div>
      </div>
    </SubpageLayout>
  );
}
