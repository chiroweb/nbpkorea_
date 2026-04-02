"use client";

import { useEffect, useState } from "react";
import SubpageLayout from "@/components/SubpageLayout";
import { useInView } from "@/hooks/useInView";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { News } from "@/lib/types";
import { useTranslations } from "next-intl";

const ITEMS_PER_PAGE = 8;

function PostRow({ post, index }: { post: News; index: number }) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${(index % ITEMS_PER_PAGE) * 60}ms` }}
    >
      <Link
        href={`/news/${post.slug}`}
        className="group flex gap-5 py-5 border-b border-[#D4DAE2] hover:bg-[#F9FAFB] transition-colors duration-200 -mx-3 px-3"
      >
        {/* Thumbnail */}
        <div className="relative w-28 h-20 md:w-36 md:h-24 flex-shrink-0 overflow-hidden bg-[#E8ECF0]">
          {post.image_url ? (
            <Image
              src={post.image_url}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[#C8D0DA] text-xs">
              NBP
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-1.5">
            <span className="text-[12px] tracking-[0.06em] uppercase text-[#C05010]">
              {post.category}
            </span>
            <span className="text-[12px] text-[#C8D0DA]">|</span>
            <span className="text-[12px] tracking-[0.08em] text-[#5C6470]">{post.date}</span>
          </div>
          <h3 className="text-sm md:text-base tracking-[0.03em] text-[#2d2a28] font-medium leading-snug group-hover:text-[#C05010] transition-colors duration-300 truncate">
            {post.title}
          </h3>
          <p className="text-xs text-[#5C6470] leading-[1.8] mt-1 line-clamp-1 hidden md:block">
            {post.excerpt}
          </p>
        </div>

        {/* Arrow */}
        <div className="flex-shrink-0 flex items-center pr-2">
          <svg width="14" height="6" viewBox="0 0 14 6" fill="none" className="text-[#C8D0DA] group-hover:text-[#C05010] transition-all group-hover:translate-x-1">
            <path d="M0 3H13M13 3L10 1M13 3L10 5" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
      </Link>
    </div>
  );
}

export default function NewsPage() {
  const t = useTranslations("news");
  const [posts, setPosts] = useState<News[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const categories = [
    { key: "all", label: t("categories.all") },
    { key: "tech", label: t("categories.tech"), filter: "기술 인사이트" },
    { key: "product", label: t("categories.product"), filter: "제품 소식" },
    { key: "company", label: t("categories.company"), filter: "회사 소식" },
    { key: "partnership", label: t("categories.partnership"), filter: "파트너십" },
    { key: "press", label: t("categories.press"), filter: "언론 보도" },
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

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paged = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handleCategoryChange = (key: string) => {
    setActiveCategory(key);
    setCurrentPage(1);
  };

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
                onClick={() => handleCategoryChange(cat.key)}
                className={`text-[14px] tracking-[0.06em] uppercase px-4 py-2 border transition-all duration-300 ${
                  cat.key === activeCategory
                    ? "border-[#2d2a28] bg-[#2d2a28] text-[#F5F7F8]"
                    : "border-[#D4DAE2] text-[#5C6470] hover:border-[#C05010] hover:text-[#C05010]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts List */}
      <section className="px-6 md:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <p className="text-sm text-[#5C6470]">{t("loading")}</p>
          ) : filtered.length === 0 ? (
            <p className="text-sm text-[#5C6470]">{t("empty")}</p>
          ) : (
            <>
              <div className="border-t border-[#2d2a28]">
                {paged.map((post, index) => (
                  <PostRow key={post.id} post={post} index={index} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="w-9 h-9 flex items-center justify-center border border-[#D4DAE2] text-[#5C6470] hover:border-[#C05010] hover:text-[#C05010] transition-colors disabled:opacity-30 disabled:pointer-events-none"
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M7 1L3 5L7 9" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-9 h-9 flex items-center justify-center text-xs tracking-[0.04em] border transition-colors ${
                        page === currentPage
                          ? "border-[#2d2a28] bg-[#2d2a28] text-white"
                          : "border-[#D4DAE2] text-[#5C6470] hover:border-[#C05010] hover:text-[#C05010]"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="w-9 h-9 flex items-center justify-center border border-[#D4DAE2] text-[#5C6470] hover:border-[#C05010] hover:text-[#C05010] transition-colors disabled:opacity-30 disabled:pointer-events-none"
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M3 1L7 5L3 9" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </SubpageLayout>
  );
}
