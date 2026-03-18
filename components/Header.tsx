"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);

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

  const navItems = [
    { label: "회사소개", href: "/about" },
    { label: "사업분야", href: "/business" },
    { label: "제품/솔루션", href: "/products" },
    { label: "기술/R&D", href: "/technology" },
    { label: "NBP/NEWS", href: "/news" },
    { label: "고객센터", href: "/support" },
  ];

  const externalLinks = [
    { label: "문의하기", href: "/support" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 header-steel transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="flex items-center justify-between px-6 md:px-12 py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com/images/loogo(2).png"
              alt="NBPKOREA"
              width={140}
              height={56}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm tracking-[0.12em] uppercase hover:opacity-60 transition-opacity"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* External Links */}
          <div className="hidden lg:flex items-center gap-6">
            {externalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase border border-[#2d2a28] px-4 py-2 hover:bg-[#C05010] hover:text-[#F5F7F8] transition-all"
              >
                {link.label}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-60">
                  <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1"/>
                </svg>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
          >
            <span className={`w-6 h-px bg-[#2d2a28] transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-px bg-[#2d2a28] transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-px bg-[#2d2a28] transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <nav className="flex flex-col gap-4 px-6 py-6 border-t border-[#C8D0DA]">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm tracking-[0.15em] uppercase"
              >
                {item.label}
              </Link>
            ))}
            <div className="h-px bg-[#C8D0DA] my-2" />
            {externalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-2 text-sm tracking-[0.15em] uppercase"
              >
                {link.label}
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1"/>
                </svg>
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
