"use client";

import { Link } from "@/i18n/navigation";
import { useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const environmentSubs = [
  { id: "nk-rto", label: "NK-RTO", href: "/products/environment/nk-rto" },
  { id: "nk-rco", label: "NK-RCO", href: "/products/environment/nk-rco" },
  { id: "nk-cto", label: "NK-CTO", href: "/products/environment/nk-cto" },
  { id: "nk-to", label: "NK-TO", href: "/products/environment/nk-to" },
];

interface ProductNavProps {
  /** 현재 활성 메인 탭 */
  activeTab: "environment" | "hvac" | "combustion" | "burner";
  /** 상세 페이지에서 현재 제품 slug (예: "nk-cto") */
  activeProduct?: string;
  /** 메인 제품 페이지에서 탭 전환 콜백 */
  onTabChange?: (tab: string) => void;
}

export default function ProductNav({ activeTab, activeProduct, onTabChange }: ProductNavProps) {
  const router = useRouter();
  const t = useTranslations("products");

  const mainTabs = [
    { id: "environment", label: t("categories.environment") },
    { id: "hvac", label: t("categories.hvac") },
    { id: "combustion", label: t("categories.combustion") },
    { id: "burner", label: t("categories.burner") },
  ];

  const hvacSubs = [
    { id: "cleanroom", label: t("nav.cleanroom"), href: "/products/hvac/cleanroom" },
    { id: "dry-room", label: t("nav.dryRoom"), href: "/products/hvac/dry-room" },
    { id: "direct-ahu", label: t("nav.directAhu"), href: "/products/hvac/direct-ahu" },
    { id: "door-heater", label: t("nav.doorHeater"), href: "/products/hvac/door-heater" },
    { id: "dehumidifier", label: t("nav.dehumidifier"), href: "/products/hvac/dehumidifier" },
  ];

  const combustionSubs = [
    { id: "nkgh", label: t("nav.directHeater"), href: "/products/combustion/nkgh" },
    { id: "nk-idgh", label: t("nav.indirectHeater"), href: "/products/combustion/nk-idgh" },
    { id: "paint-dryer", label: t("nav.paintDryer"), href: "/products/combustion/paint-dryer" },
  ];

  const burnerSubs = [
    { id: "duct-burner", label: t("nav.ductBurner"), href: "/products/burner/duct-burner" },
    { id: "fpb-burner", label: t("nav.fpbBurner"), href: "/products/burner/fpb-burner" },
    { id: "furnace-burner", label: t("nav.furnaceBurner"), href: "/products/burner/furnace-burner" },
    { id: "low-nox-burner", label: t("nav.lowNoxBurner"), href: "/products/burner/low-nox-burner" },
    { id: "oven-burner", label: t("nav.ovenBurner"), href: "/products/burner/oven-burner" },
    { id: "metal-fiber-burner", label: t("nav.metalFiberBurner"), href: "/products/burner/metal-fiber-burner" },
    { id: "ceramic-burner", label: t("nav.ceramicBurner"), href: "/products/burner/ceramic-burner" },
    { id: "portable-burner", label: t("nav.portableBurner"), href: "/products/burner/portable-burner" },
    { id: "valve-burner", label: t("nav.valveBurner"), href: "/products/burner/valve-burner" },
    { id: "valve-train", label: t("nav.valveTrain"), href: "/products/burner/valve-train" },
  ];

  function handleMainTabClick(tabId: string) {
    if (onTabChange) {
      onTabChange(tabId);
    } else {
      router.push(`/products?tab=${tabId}`);
    }
  }

  function renderSubMenu(subs: { id: string; label: string; href: string }[]) {
    return (
      <div className="flex items-center py-3 border-t border-[#E8ECF0] overflow-x-auto scrollbar-hide">
        <span className="text-[13px] tracking-[0.06em] uppercase text-[#C8D0DA] pr-4 mr-2 border-r border-[#E8ECF0] flex-shrink-0">
          Sub
        </span>
        {subs.map((sub, i) => (
          <Link
            key={sub.id}
            href={sub.href}
            className={`relative px-4 md:px-5 py-1.5 text-xs tracking-[0.08em] transition-colors duration-200 flex-shrink-0 whitespace-nowrap ${
              activeProduct === sub.id
                ? "text-[#C05010] font-medium"
                : "text-[#5C6470] hover:text-[#C05010]"
            } ${i > 0 ? "border-l border-[#E8ECF0]" : ""}`}
          >
            {sub.label}
            {activeProduct === sub.id && (
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#C05010]" />
            )}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="border-b border-[#D4DAE2] bg-[#F5F7F8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* 메인 탭 */}
        <div className="flex gap-0 pt-6 overflow-x-auto scrollbar-hide">
          {mainTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleMainTabClick(tab.id)}
              className={`px-6 md:px-8 py-3.5 text-xs tracking-[0.06em] uppercase border-b-2 transition-all duration-200 flex-shrink-0 whitespace-nowrap ${
                activeTab === tab.id
                  ? "border-[#C05010] text-[#C05010] font-medium"
                  : "border-transparent text-[#5C6470] hover:text-[#C05010]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 환경시스템 하위 메뉴 */}
        <div className={`overflow-hidden transition-all duration-300 ${activeTab === "environment" ? "max-h-20 opacity-100" : "max-h-0 opacity-0"}`}>
          {renderSubMenu(environmentSubs)}
        </div>

        {/* 공조시스템 하위 메뉴 */}
        <div className={`overflow-hidden transition-all duration-300 ${activeTab === "hvac" ? "max-h-20 opacity-100" : "max-h-0 opacity-0"}`}>
          {renderSubMenu(hvacSubs)}
        </div>

        {/* 연소시스템 하위 메뉴 */}
        <div className={`overflow-hidden transition-all duration-300 ${activeTab === "combustion" ? "max-h-20 opacity-100" : "max-h-0 opacity-0"}`}>
          {renderSubMenu(combustionSubs)}
        </div>

        {/* 산업용 버너 하위 메뉴 */}
        <div className={`overflow-hidden transition-all duration-300 ${activeTab === "burner" ? "max-h-20 opacity-100" : "max-h-0 opacity-0"}`}>
          {renderSubMenu(burnerSubs)}
        </div>
      </div>
    </div>
  );
}
