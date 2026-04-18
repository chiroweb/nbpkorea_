"use client";

import { useState, useRef } from "react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslations } from "next-intl";

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/nbpkorea_official/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@NBPKOREA_Official",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.5 15.5V8.5l6.5 3.5-6.5 3.5Z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/nbpkorea",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.3l-.5 3.5h-2.8v8.4A12 12 0 0 0 24 12Z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/821012345678",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.5 14.4c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6 0-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5 0-.2 0-.3 0-.5-.1-.2-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.3-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4 0-.1-.2-.2-.5-.3ZM12 21.8a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.8 9.8 0 0 1 15.1-12.5A9.8 9.8 0 0 1 12 21.8ZM12 0a12 12 0 0 0-10.2 18.1L0 24l6-1.6A12 12 0 1 0 12 0Z" />
      </svg>
    ),
  },
];

export default function Header() {
  const t = useTranslations("common.nav");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();

  const navData = [
    {
      key: "about",
      label: t("about"),
      href: "/about",
      children: [
        { label: t("aboutCompany"), href: "/about?tab=about" },
        { label: t("partnershipCert"), href: "/about?tab=partnership" },
        { label: t("directions"), href: "/about?tab=directions" },
      ],
    },
    {
      key: "business",
      label: t("business"),
      href: "/business",
      children: [
        { label: t("environment"), href: "/business/environment" },
        { label: t("hvac"), href: "/business/hvac" },
        { label: t("combustion"), href: "/business/combustion" },
        { label: t("burner"), href: "/business/burner" },
      ],
    },
    {
      key: "products",
      label: t("products"),
      href: "/products",
      groups: [
        {
          label: t("environment"),
          href: "/products/environment",
          items: [
            { label: "NK-RTO", href: "/products/environment/nk-rto" },
            { label: "NK-RCO", href: "/products/environment/nk-rco" },
            { label: "NK-CTO", href: "/products/environment/nk-cto" },
            { label: "NK-TO", href: "/products/environment/nk-to" },
          ],
        },
        {
          label: t("hvac"),
          href: "/products/hvac",
          items: [
            { label: t("cleanroomAhu"), href: "/products/hvac/cleanroom" },
            { label: t("dryRoomAhu"), href: "/products/hvac/dry-room" },
            { label: t("directAhu"), href: "/products/hvac/direct-ahu" },
            { label: t("doorHeater"), href: "/products/hvac/door-heater" },
            { label: t("dehumidifier"), href: "/products/hvac/dehumidifier" },
          ],
        },
        {
          label: t("combustion"),
          href: "/products/combustion",
          items: [
            { label: t("directGasHeater"), href: "/products/combustion/nkgh" },
            { label: t("indirectGasHeater"), href: "/products/combustion/nk-idgh" },
          ],
        },
        {
          label: t("burner"),
          href: "/products/burner",
          items: [
            { label: t("ductBurner"), href: "/products/burner/duct-burner" },
            { label: t("packageBurner"), href: "/products/burner/fpb-burner" },
            { label: t("furnaceBurner"), href: "/products/burner/furnace-burner" },
            { label: t("lowNoxBurner"), href: "/products/burner/low-nox-burner" },
            { label: t("ovenBurner"), href: "/products/burner/oven-burner" },
            { label: t("ceramicBurner"), href: "/products/burner/metal-fiber-burner" },
            { label: t("metalFiberBurner"), href: "/products/burner/metal-fiber-burner" },
            { label: t("valveTrain"), href: "/products/burner/valve-train" },
          ],
        },
      ],
    },
    {
      key: "performance",
      label: t("performance"),
      href: "/performance",
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
      label: t("support"),
      href: "/support",
      children: [],
    },
  ];

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
        className="fixed top-0 left-0 right-0 z-40"
      >
        {/* Orange top accent line */}
        <div className="h-[3px] bg-[#C05010] w-full" />

        {/* Main bar */}
        <div className="bg-[#2d2a28] border-b border-white/10">
          <div className="flex items-center justify-between px-6 md:px-12 py-0.5">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="https://nbpkoreare.s3.ap-northeast-2.amazonaws.com/images/logo-nbpkorea.png"
                alt="NBPKOREA"
                width={150}
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
                        : "text-white/90 hover:text-white"
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

            {/* Right: Social + Language + Contact */}
            <div className="hidden lg:flex items-center gap-5">
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="text-white/50 hover:text-[#C05010] transition-colors duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
              <span className="w-px h-4 bg-white/20" />
              <div className="text-white">
                <LanguageSwitcher />
              </div>
              <Link
                href="/support"
                className="flex items-center gap-2 text-[12px] tracking-[0.15em] uppercase border border-[#C05010] text-white px-4 py-2 hover:bg-[#C05010] transition-all duration-200"
              >
                {t("consultation")}
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </Link>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label={t("menuAriaLabel")}
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
            megaOpen ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ background: "#fff", boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}
        >
          <div className="px-12 py-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-7 gap-5">

              {/* About */}
              <div>
                <Link
                  href="/about"
                  className="block text-[15px] tracking-[0.04em] text-[#C05010] font-bold mb-5 pb-2.5 border-b-2 border-[#C05010] hover:border-b-[3px] transition-all duration-200"
                >
                  {t("about")}
                </Link>
                <ul className="space-y-2">
                  {navData[0].children!.map((child) => (
                    <li key={child.label}>
                      <Link
                        href={child.href}
                        onClick={() => setMegaOpen(false)}
                        className="text-[13px] tracking-[0.04em] text-[#555] hover:text-[#C05010] hover:bg-[#FDF8F6] transition-all duration-150 block py-1.5 px-2 -mx-2 rounded-sm"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Business */}
              <div>
                <Link
                  href="/business"
                  className="block text-[15px] tracking-[0.04em] text-[#C05010] font-bold mb-5 pb-2.5 border-b-2 border-[#C05010] hover:border-b-[3px] transition-all duration-200"
                >
                  {t("business")}
                </Link>
                <ul className="space-y-2">
                  {navData[1].children!.map((child) => (
                    <li key={child.label}>
                      <Link
                        href={child.href}
                        onClick={() => setMegaOpen(false)}
                        className="text-[13px] tracking-[0.04em] text-[#555] hover:text-[#C05010] hover:bg-[#FDF8F6] transition-all duration-150 block py-1.5 px-2 -mx-2 rounded-sm"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Products — 4-column span */}
              <div className="col-span-4">
                <Link
                  href="/products"
                  className="block text-[15px] tracking-[0.04em] text-[#C05010] font-bold mb-5 pb-2.5 border-b-2 border-[#C05010] hover:border-b-[3px] transition-all duration-200"
                >
                  {t("products")}
                </Link>
                <div className="grid grid-cols-4 gap-6">
                  {navData[2].groups!.map((group) => (
                    <div key={group.label}>
                      <span
                        className="text-[14px] tracking-[0.04em] text-[#2d2a28] font-semibold block mb-3 hover:text-[#C05010] transition-colors duration-150 cursor-default"
                      >
                        {group.label}
                      </span>
                      <ul className="space-y-2">
                        {group.items.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              onClick={() => setMegaOpen(false)}
                              className="text-[13px] tracking-[0.03em] text-[#555] hover:text-[#C05010] hover:bg-[#FDF8F6] transition-all duration-150 block py-1.5 pl-3 border-l border-[#E8ECF0] hover:border-[#C05010]"
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

              {/* Performance · NEWS · Support */}
              <div>
                <div className="space-y-6">
                  {[
                    { label: t("performance"), href: "/performance" },
                    { label: "NBP NEWS", href: "/news" },
                    { label: t("support"), href: "/support" },
                  ].map((item) => (
                    <div key={item.label}>
                      <Link
                        href={item.href}
                        onClick={() => setMegaOpen(false)}
                        className="block text-[15px] tracking-[0.04em] text-[#C05010] font-bold mb-5 pb-2.5 border-b-2 border-[#C05010] hover:border-b-[3px] transition-all duration-200"
                      >
                        {item.label}
                      </Link>
                    </div>
                  ))}
                  {/* Family Site - hover dropdown */}
                  <div className="relative group/family">
                    <p className="text-[13px] tracking-[0.2em] uppercase text-[#C05010] font-semibold pb-3 border-b-2 border-[#C05010] cursor-pointer">Family Site</p>
                    <div className="overflow-hidden max-h-0 group-hover/family:max-h-40 transition-all duration-300 ease-in-out">
                      <div className="pt-3 space-y-2">
                        {[
                          { label: "MIDCO International", href: "https://midcointernational.com/" },
                          { label: "ECOSTAR", href: "https://www.ecostar.com.tr" },
                          { label: "CombHEX", href: "https://www.combhex.com/" },
                        ].map((site) => (
                          <a
                            key={site.label}
                            href={site.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMegaOpen(false)}
                            className="flex items-center gap-2 text-[13px] tracking-[0.06em] text-[#555] hover:text-[#C05010] hover:bg-[#FDF8F6] transition-all duration-150 py-1 px-2 -mx-2 rounded-sm"
                          >
                            {site.label}
                            <svg width="8" height="8" viewBox="0 0 12 12" fill="none"><path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1"/></svg>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
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
              <div className="flex items-center gap-4">
                <div className="text-white">
                  <LanguageSwitcher />
                </div>
                <span className="w-px h-4 bg-white/20" />
                <div className="flex items-center gap-3">
                  {SOCIAL_LINKS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="text-white/50 hover:text-[#C05010] transition-colors duration-200"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
              <Link
                href="/support"
                onClick={() => setIsMenuOpen(false)}
                className="text-[12px] tracking-[0.15em] uppercase border border-[#C05010] text-white px-4 py-2 hover:bg-[#C05010] transition-all duration-200"
              >
                {t("consultation")}
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
