"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const environmentSubs = [
  { id: "nk-cto", label: "NK-CTO", href: "/products/environment/nk-cto" },
  { id: "nk-rto", label: "NK-RTO", href: "/products/environment/nk-rto" },
  { id: "nk-rco", label: "NK-RCO", href: "/products/environment/nk-rco" },
  { id: "nk-to", label: "NK-TO", href: "/products/environment/nk-to" },
];

interface ProductNavProps {
  /** 현재 활성 메인 탭 */
  activeTab: "environment" | "combustion" | "burner";
  /** 상세 페이지에서 현재 제품 slug (예: "nk-cto") */
  activeProduct?: string;
  /** 메인 제품 페이지에서 탭 전환 콜백 */
  onTabChange?: (tab: string) => void;
}

export default function ProductNav({ activeTab, activeProduct, onTabChange }: ProductNavProps) {
  const router = useRouter();

  const mainTabs = [
    { id: "environment", label: "환경설비" },
    { id: "combustion", label: "연소설비" },
    { id: "burner", label: "산업용 버너" },
  ];

  function handleMainTabClick(tabId: string) {
    if (onTabChange) {
      // 메인 페이지: 내부 state 변경
      onTabChange(tabId);
    } else {
      // 상세 페이지: 메인 페이지로 이동 (query param으로 탭 전달)
      router.push(`/products?tab=${tabId}`);
    }
  }

  return (
    <div className="border-b border-[#D4DAE2] bg-[#F5F7F8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* 메인 탭 */}
        <div className="flex gap-0 pt-6">
          {mainTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleMainTabClick(tab.id)}
              className={`px-6 md:px-8 py-3.5 text-xs tracking-[0.15em] uppercase border-b-2 transition-all duration-200 ${
                activeTab === tab.id
                  ? "border-[#C05010] text-[#C05010] font-medium"
                  : "border-transparent text-[#888480] hover:text-[#C05010]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 환경설비 하위 메뉴 */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            activeTab === "environment" ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex items-center gap-0 py-3 border-t border-[#E8ECF0]">
            <span className="text-[10px] tracking-[0.15em] uppercase text-[#C8D0DA] pr-4 mr-2 border-r border-[#E8ECF0]">
              Sub
            </span>
            {environmentSubs.map((sub, i) => (
              <Link
                key={sub.id}
                href={sub.href}
                className={`relative px-4 md:px-6 py-1.5 text-xs tracking-[0.12em] uppercase transition-colors duration-200 ${
                  activeProduct === sub.id
                    ? "text-[#C05010] font-medium"
                    : "text-[#888480] hover:text-[#C05010]"
                } ${i > 0 ? "border-l border-[#E8ECF0]" : ""}`}
              >
                {sub.label}
                {activeProduct === sub.id && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#C05010]" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
