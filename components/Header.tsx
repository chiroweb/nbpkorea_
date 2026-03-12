"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "제품/솔루션", href: "/products" },
    { label: "회사소개", href: "/about" },
    { label: "기술/R&D", href: "/technology" },
    { label: "고객센터", href: "/support" },
    { label: "사업분야", href: "/business" },
  ];

  const externalLinks = [
    { label: "문의하기", href: "/support" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#f3f3ec]/90 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 md:px-12 py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://nbpkoreare.s3.ap-northeast-2.amazonaws.com/images/loogo(2).png"
              alt="NBP KOREA"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-lg tracking-[0.2em] font-medium">NBP KOREA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs tracking-[0.15em] uppercase hover:opacity-60 transition-opacity"
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
                className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase border border-[#2d2a28] px-4 py-2 hover:bg-[#2d2a28] hover:text-[#f3f3ec] transition-all"
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
          <nav className="flex flex-col gap-4 px-6 py-6 border-t border-[#d4d4cc]">
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
            <div className="h-px bg-[#d4d4cc] my-2" />
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
