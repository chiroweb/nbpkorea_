"use client";

import { useState, useEffect, useRef } from "react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const navData = [
  {
    key: "about",
    label: "회사소개",
    href: "/about",
    children: [
      { label: "CEO 인사말", href: "/about" },
      { label: "CI", href: "/about" },
      { label: "연혁", href: "/about" },
      { label: "네트워크", href: "/about" },
      { label: "특허현황", href: "/about" },
      { label: "찾아오시는 길", href: "/about" },
    ],
  },
  {
    key: "business",
    label: "사업분야",
    href: "/business",
    children: [
      { label: "환경설비 사업부", href: "/business" },
      { label: "연소설비 사업부", href: "/business" },
      { label: "산업용 버너 사업부", href: "/business" },
    ],
  },
  {
    key: "products",
    label: "제품/솔루션",
    href: "/products",
    groups: [
      {
        label: "환경설비",
        href: "/products/environment",
        items: [
          { label: "NK-CTO", href: "/products/environment/nk-cto" },
          { label: "NK-RTO", href: "/products/environment/nk-rto" },
          { label: "NK-RCO", href: "/products/environment/nk-rco" },
          { label: "NK-TO", href: "/products/environment/nk-to" },
        ],
      },
      {
        label: "연소설비",
        href: "/products/combustion",
        items: [
          { label: "NKGH", href: "/products/combustion/nkgh" },
          { label: "NK-IDGH", href: "/products/combustion/nk-idgh" },
          { label: "제습기", href: "/products/combustion/dehumidifier" },
          { label: "도장건조기", href: "/products/combustion/paint-dryer" },
        ],
      },
      {
        label: "버너",
        href: "/products/burner",
        items: [
          { label: "덕트버너", href: "/products/burner/duct-burner" },
          { label: "라인버너", href: "/products/burner/line-burner" },
          { label: "포터블버너", href: "/products/burner/portable-burner" },
        ],
      },
    ],
  },
  {
    key: "technology",
    label: "기술/R&D",
    href: "/technology",
    children: [],
  },
  {
    key: "news",
    label: "NBP NEWS",
    href: "/news",
    children: [],
  },
  {
    key: "support",
    label: "고객센터",
    href: "/support",
    children: [],
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);   // mobile
  const [megaOpen, setMegaOpen] = useState(false);       // desktop mega
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsVisible(false);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavEnter = (key: string) => {
    clearTimeout(closeTimer.current);
    setActiveKey(key);
    setMegaOpen(true);
  };

  const handleNavLeave = () => {
    closeTimer.current = setTimeout(() => {
      setMegaOpen(false);
      setActiveKey(null);
    }, 120);
  };

  const handleMegaEnter = () => {
    clearTimeout(closeTimer.current);
  };

  const handleMegaLeave = () => {
    closeTimer.current = setTimeout(() => {
      setMegaOpen(false);
      setActiveKey(null);
    }, 120);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Orange top accent line */}
        <div className="h-[3px] bg-[#C05010] w-full" />

        {/* Main bar */}
        <div className="bg-[#2d2a28] border-b border-white/10">
          <div className="flex items-center justify-between px-6 md:px-12 py-0.5">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com/images/loogo(2).png"
                alt="NBPKOREA"
                width={130}
                height={52}
                className="object-contain brightness-0 invert"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0">
              {navData.map((item) => (
                <div
                  key={item.key}
                  onMouseEnter={() => handleNavEnter(item.key)}
                  onMouseLeave={handleNavLeave}
                  className="relative"
                >
                  <Link
                    href={item.href}
                    className={`relative block px-5 py-3.5 text-[15px] tracking-[0.14em] uppercase transition-colors duration-200 ${
                      activeKey === item.key
                        ? "text-[#C05010]"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {/* active indicator */}
                    <span
                      className={`absolute bottom-0 left-5 right-5 h-[2px] bg-[#C05010] transition-all duration-200 ${
                        activeKey === item.key ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </Link>
                </div>
              ))}
            </nav>

            {/* Right: Language + Contact */}
            <div className="hidden lg:flex items-center gap-5">
              <div className="text-white">
                <LanguageSwitcher />
              </div>
              <Link
                href="/support"
                className="flex items-center gap-2 text-[12px] tracking-[0.15em] uppercase border border-[#C05010] text-[#C05010] px-4 py-2 hover:bg-[#C05010] hover:text-white transition-all duration-200"
              >
                문의하기
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </Link>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="메뉴"
            >
              <span className={`w-6 h-px bg-white transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-6 h-px bg-white transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`w-6 h-px bg-white transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* ── Mega Menu ── */}
        <div
          onMouseEnter={handleMegaEnter}
          onMouseLeave={handleMegaLeave}
          className={`hidden lg:block overflow-hidden transition-all duration-300 ease-in-out ${
            megaOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ background: "#fff", boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}
        >
          <div className="px-12 py-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-6 gap-6">

              {/* 회사소개 */}
              <div>
                <Link
                  href="/about"
                  className="block text-[11px] tracking-[0.2em] uppercase text-[#C05010] font-semibold mb-3 pb-3 border-b-2 border-[#C05010]"
                >
                  회사소개
                </Link>
                <ul className="space-y-2">
                  {navData[0].children!.map((child) => (
                    <li key={child.label}>
                      <Link
                        href={child.href}
                        onClick={() => setMegaOpen(false)}
                        className="text-[13px] tracking-[0.04em] text-[#666] hover:text-[#C05010] transition-colors duration-150 block py-0.5"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 사업분야 */}
              <div>
                <Link
                  href="/business"
                  className="block text-[11px] tracking-[0.2em] uppercase text-[#C05010] font-semibold mb-3 pb-3 border-b-2 border-[#C05010]"
                >
                  사업분야
                </Link>
                <ul className="space-y-2">
                  {navData[1].children!.map((child) => (
                    <li key={child.label}>
                      <Link
                        href={child.href}
                        onClick={() => setMegaOpen(false)}
                        className="text-[13px] tracking-[0.04em] text-[#666] hover:text-[#C05010] transition-colors duration-150 block py-0.5"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 제품/솔루션 — 3컬럼 span */}
              <div className="col-span-3">
                <Link
                  href="/products"
                  className="block text-[11px] tracking-[0.2em] uppercase text-[#C05010] font-semibold mb-3 pb-3 border-b-2 border-[#C05010]"
                >
                  제품/솔루션
                </Link>
                <div className="grid grid-cols-3 gap-6">
                  {navData[2].groups!.map((group) => (
                    <div key={group.label}>
                      <Link
                        href={group.href}
                        onClick={() => setMegaOpen(false)}
                        className="text-[12px] tracking-[0.1em] text-[#2d2a28] font-medium block mb-2 hover:text-[#C05010] transition-colors"
                      >
                        {group.label}
                      </Link>
                      <ul className="space-y-1.5">
                        {group.items.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              onClick={() => setMegaOpen(false)}
                              className="text-[13px] tracking-[0.03em] text-[#888] hover:text-[#C05010] transition-colors duration-150 block py-0.5 pl-3 border-l border-[#E8ECF0] hover:border-[#C05010]"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* 기술/R&D · NEWS · 고객센터 */}
              <div>
                <div className="space-y-6">
                  {[
                    { label: "기술/R&D", href: "/technology" },
                    { label: "NBP NEWS", href: "/news" },
                    { label: "고객센터", href: "/support" },
                  ].map((item) => (
                    <div key={item.label}>
                      <Link
                        href={item.href}
                        onClick={() => setMegaOpen(false)}
                        className="block text-[11px] tracking-[0.2em] uppercase text-[#C05010] font-semibold mb-3 pb-3 border-b-2 border-[#C05010]"
                      >
                        {item.label}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 bg-[#2d2a28] ${
            isMenuOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col px-6 py-6 border-t border-white/10">
            {navData.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-[13px] tracking-[0.15em] uppercase text-white/80 hover:text-[#C05010] py-3 border-b border-white/10 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-6 flex items-center justify-between">
              <div className="text-white">
                <LanguageSwitcher />
              </div>
              <Link
                href="/support"
                onClick={() => setIsMenuOpen(false)}
                className="text-[12px] tracking-[0.15em] uppercase border border-[#C05010] text-[#C05010] px-4 py-2"
              >
                문의하기
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
