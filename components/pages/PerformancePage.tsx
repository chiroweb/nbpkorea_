"use client";

import SubpageLayout from "@/components/SubpageLayout";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Performance } from "@/lib/types";

const TAB_IDS = ["environment", "hvac", "combustion", "burner"] as const;

function parseImageUrl(url: string): { src: string; rotate: number } {
  const match = url.match(/#rotate=(\d+)/);
  return { src: url.replace(/#rotate=\d+/, ""), rotate: match ? Number(match[1]) : 0 };
}

function PerformanceCard({ item }: { item: Performance }) {
  const [activeImg, setActiveImg] = useState(0);
  const images = item.images?.length ? item.images : [];

  return (
    <div className="border border-[#D4DAE2] bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#D4DAE2] bg-[#F5F7F8]">
        <div className="flex items-center gap-3 min-w-0">
          <h3 className="text-sm md:text-base font-medium tracking-[0.04em] text-[#2d2a28]">
            {item.title}
          </h3>
          {item.tags && item.tags.length > 0 && (
            <div className="flex gap-1.5 flex-shrink-0">
              {item.tags.map((tag) => (
                <span key={tag} className="text-xs tracking-[0.08em] px-2 py-0.5 bg-[#C05010]/10 text-[#C05010] border border-[#C05010]/20">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <span className="text-[13px] tracking-[0.04em] text-[#5C6470] flex-shrink-0 ml-4">No. {item.number}</span>
      </div>

      <div className="grid md:grid-cols-[1fr_2fr] gap-0">
        {/* Left: Images */}
        <div className="p-4 border-r border-[#D4DAE2]">
          {images.length > 0 ? (
            <>
              <div className="relative aspect-[4/3] bg-[#FAFAFA] overflow-hidden mb-2">
                {(() => {
                  const { src, rotate } = parseImageUrl(images[activeImg] ?? images[0]);
                  return (
                    <Image
                      src={src}
                      alt={item.title}
                      fill
                      className="object-cover"
                      style={rotate ? { transform: `rotate(${rotate}deg)`, transformOrigin: "center" } : undefined}
                    />
                  );
                })()}
              </div>
              {images.length > 1 && (
                <div className="flex gap-1.5">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className={`relative w-12 h-9 overflow-hidden border transition-colors ${
                        activeImg === i ? "border-[#C05010]" : "border-[#D4DAE2]"
                      }`}
                    >
                      {(() => {
                        const { src, rotate } = parseImageUrl(img);
                        return <Image src={src} alt={`${item.title} ${i + 1}`} fill className="object-cover" style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined} />;
                      })()}
                    </button>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="aspect-[4/3] bg-[#FAFAFA] flex items-center justify-center">
              <span className="text-sm text-[#C8D0DA]">No Image</span>
            </div>
          )}
        </div>

        {/* Right: Specs + Before/After */}
        <div className="p-6">
          {item.specs && item.specs.length > 0 && (
            <div className="mb-6">
              <table className="w-full text-sm">
                <tbody>
                  {item.specs.map((spec, i) => (
                    <tr key={i} className="border-b border-[#E8ECF0] last:border-0">
                      <td className="py-2.5 pr-4 text-[#5C6470] text-[13px] tracking-[0.04em] whitespace-nowrap w-28">
                        {spec.label}
                      </td>
                      <td className="py-2.5 text-[#2d2a28] text-[13px] tracking-[0.02em]">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {(item.before_text || item.after_text) && (
            <div className="border-t border-[#D4DAE2] pt-5">
              <p className="text-xs tracking-[0.04em] uppercase text-[#5C6470] mb-3">
                Performance Result
              </p>
              <div className="grid grid-cols-2 gap-4">
                {item.before_text && (
                  <div className="bg-[#F5F7F8] p-4">
                    <span className="text-xs tracking-[0.04em] uppercase text-[#C8D0DA] block mb-2">Before</span>
                    <p className="text-[13px] leading-[1.8] text-[#5C6470] whitespace-pre-line">{item.before_text}</p>
                  </div>
                )}
                {item.after_text && (
                  <div className="bg-[#C05010]/5 border border-[#C05010]/15 p-4">
                    <span className="text-xs tracking-[0.04em] uppercase text-[#C05010] block mb-2">After</span>
                    <p className="text-[13px] leading-[1.8] text-[#2d2a28] whitespace-pre-line">{item.after_text}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function PerformancePageInner() {
  const t = useTranslations("performance");
  const locale = useLocale();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("environment");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [tagDropdownOpen, setTagDropdownOpen] = useState(false);
  const [items, setItems] = useState<Performance[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const [searchByTag, setSearchByTag] = useState(false);

  // URL query param으로 초기 태그/탭 설정
  useEffect(() => {
    const tagParam = searchParams.get("tag");
    const tabParam = searchParams.get("tab");
    const catParam = searchParams.get("cat");
    if (catParam && TAB_IDS.includes(catParam as typeof TAB_IDS[number])) {
      setActiveTab(catParam);
    } else if (tabParam && TAB_IDS.includes(tabParam as typeof TAB_IDS[number])) {
      setActiveTab(tabParam);
    }
    if (tagParam) {
      setActiveTag(tagParam);
      // cat이 함께 있으면 카테고리 내에서 검색 (폴백 가능), 없으면 전체 검색
      if (!catParam) {
        setSearchByTag(true);
      }
    }
  }, [searchParams]);

  // Fetch data — 태그 검색 시 전체 카테고리에서, 아니면 선택된 탭에서
  useEffect(() => {
    setLoading(true);
    const url = searchByTag
      ? "/api/performances"
      : `/api/performances?category=${activeTab}`;
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        const list: Performance[] = Array.isArray(data) ? data : [];
        setItems(list);
        const tags = Array.from(new Set(list.flatMap((item) => item.tags ?? [])));
        // RTO, RCO, CTO, TO 우선 순서, 나머지는 가나다순
        const priority = ["RTO", "RCO", "CTO", "TO"];
        const ordered = [
          ...priority.filter((p) => tags.includes(p)),
          ...tags.filter((t) => !priority.includes(t)).sort(),
        ];
        setAllTags(ordered);
        setLoading(false);
      });
  }, [activeTab, searchByTag]);

  // Filter by tag — 정확한 태그 매칭. 결과 없으면 무관한 항목을 보여주지 않고 안내만 노출
  const filtered = activeTag
    ? items.filter((item) => {
        if (!item.tags || item.tags.length === 0) return false;
        return item.tags.some((dbTag) => dbTag === activeTag);
      })
    : items;

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setActiveTag(null);
    setSearchByTag(false);
    setTagDropdownOpen(false);
  };

  const handleTagSelect = (tag: string | null) => {
    setActiveTag(tag);
    setTagDropdownOpen(false);
  };

  return (
    <SubpageLayout
      title={t("title")}
      subtitle={t("subtitle")}
      breadcrumb={[{ label: t("title"), href: "/performance" }]}
    >
      {/* Tabs */}
      <div className="border-b border-[#D4DAE2] bg-[#F5F7F8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex gap-0 pt-6">
            {TAB_IDS.map((id) => (
              <button
                key={id}
                onClick={() => handleTabChange(id)}
                className={`px-6 md:px-8 py-3.5 text-xs tracking-[0.06em] uppercase border-b-2 transition-all duration-200 ${
                  activeTab === id
                    ? "border-[#C05010] text-[#C05010] font-medium"
                    : "border-transparent text-[#5C6470] hover:text-[#C05010]"
                }`}
              >
                {t(`tabs.${id}`)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tag filter bar */}
      <div className="bg-white border-b border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
          <div className="flex items-center gap-4">
            <h2 className="text-lg md:text-xl tracking-[0.08em] font-bold text-[#2d2a28] flex-shrink-0">
              {t(`tabs.${activeTab}`)}
            </h2>

            {/* Tag dropdown */}
            <div className="relative">
              <button
                onClick={() => setTagDropdownOpen(!tagDropdownOpen)}
                className={`flex items-center gap-2 px-4 py-2 text-[13px] tracking-[0.08em] border transition-colors ${
                  activeTag
                    ? "border-[#C05010] text-[#C05010] bg-[#C05010]/5"
                    : "border-[#D4DAE2] text-[#5C6470] hover:border-[#C05010]"
                }`}
              >
                <span>{locale === "en" ? "Application" : "적용분야"}</span>
                {activeTag && (
                  <span className="font-medium">{activeTag}</span>
                )}
                <svg
                  width="10" height="6" viewBox="0 0 10 6" fill="none"
                  className={`transition-transform ${tagDropdownOpen ? "rotate-180" : ""}`}
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1" />
                </svg>
              </button>

              {tagDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-[#D4DAE2] shadow-lg z-20 min-w-[200px] max-h-[300px] overflow-y-auto">
                  <button
                    onClick={() => handleTagSelect(null)}
                    className={`w-full text-left px-4 py-2.5 text-[13px] tracking-[0.06em] transition-colors border-b border-[#E8ECF0] ${
                      !activeTag ? "text-[#C05010] bg-[#C05010]/5" : "text-[#5C6470] hover:bg-[#F5F7F8]"
                    }`}
                  >
                    {locale === "en" ? "View All" : "전체 보기"}
                  </button>
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => handleTagSelect(tag)}
                      className={`w-full text-left px-4 py-2.5 text-[13px] tracking-[0.06em] transition-colors border-b border-[#E8ECF0] last:border-0 ${
                        activeTag === tag ? "text-[#C05010] bg-[#C05010]/5" : "text-[#2d2a28] hover:bg-[#F5F7F8]"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                  {allTags.length === 0 && (
                    <p className="px-4 py-3 text-[13px] text-[#C8D0DA]">{locale === "en" ? "No tags registered" : "등록된 태그가 없습니다"}</p>
                  )}
                </div>
              )}
            </div>

            {/* Active tag clear */}
            {activeTag && (
              <button
                onClick={() => setActiveTag(null)}
                className="text-[12px] tracking-[0.04em] text-[#5C6470] hover:text-[#C05010] transition-colors flex items-center gap-1"
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 2L8 8M8 2L2 8" stroke="currentColor" strokeWidth="1" />
                </svg>
                {locale === "en" ? "Clear Filter" : "필터 해제"}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-12 px-6 md:px-12 bg-[#FAFAFA] min-h-[60vh]">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <p className="text-sm text-[#5C6470] text-center py-20">{locale === "en" ? "Loading..." : "로딩 중..."}</p>
          ) : filtered.length === 0 ? (
            <p className="text-sm text-[#5C6470] text-center py-20">
              {activeTag
                ? (locale === "en"
                    ? `Results for "${activeTag}" are being prepared.`
                    : `"${activeTag}" 관련 실적 업데이트 중입니다.`)
                : t("emptyDefault")}
            </p>
          ) : (
            <div className="space-y-6">
              {filtered.map((item) => (
                <PerformanceCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </SubpageLayout>
  );
}

export default function PerformancePage() {
  return (
    <Suspense>
      <PerformancePageInner />
    </Suspense>
  );
}
