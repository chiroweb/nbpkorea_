"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const S3 = "https://nbpkoreare.s3.ap-northeast-2.amazonaws.com";

const galleryImages = [
  { src: `${S3}/images/%ED%99%98%EA%B2%BD%EC%82%AC%EC%97%85%EB%B6%80/Business%20Area/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EC%9A%A9%20RTO%20%EB%A0%8C%EB%8D%94%EB%A7%81-nowatermark.jpg`, alt: "환경설비 플랜트" },
  { src: `${S3}/images/metal%20burner1.png`, alt: "금속화이버 버너" },
  { src: `${S3}/assets/industry1.png`, alt: "조선소 현장" },
  { src: `${S3}/assets/industry2.png`, alt: "자동차 도장라인" },
  { src: `${S3}/images/intro2.jpg`, alt: "연구소 전경" },
  { src: `${S3}/assets/industry3.png`, alt: "화학공정 현장" },
  { src: `${S3}/images/into3.jpg`, alt: "글로벌 파트너 현장" },
];

export default function Footer() {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  const navItems = [
    { label: "제품/솔루션", href: "/products", image: "products" },
    { label: "회사소개", href: "/about", image: "about" },
    { label: "기술/R&D", href: "/technology", image: "technology" },
    { label: "고객센터", href: "/support", image: "support" },
    { label: "사업분야", href: "/business", image: "business" },
  ];

  const externalLinks = [
    { label: "문의하기", href: "/support" },
  ];

  const contactInfo = [
    { label: "TEL 031-434-6566~7", href: "tel:031-434-6566" },
    { label: "FAX 031-434-6568", href: "#" },
    { label: "nbpkorea@nbpkorea.co.kr", href: "mailto:nbpkorea@nbpkorea.co.kr" },
  ];

  return (
    <footer className="bg-[#F5F7F8] pt-32 pb-12">
      {/* Text Marquee Strip */}
      <div className="overflow-hidden mb-20 py-6 border-y border-[#D4DAE2]">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="flex-shrink-0 text-[clamp(2rem,5vw,4rem)] font-light tracking-[0.25em] text-[#C8D0DA] uppercase mr-16"
            >
              NBP KOREA IS ALWAYS NEXT TO YOU FOR BUSINESS
              <span className="mx-8 text-[#D4DAE2]">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-12 mb-20">
            {/* Navigation */}
            <div className="md:col-span-2 lg:col-span-2">
              <nav className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onMouseEnter={() => setHoveredImage(item.image)}
                    onMouseLeave={() => setHoveredImage(null)}
                    className="text-sm tracking-[0.15em] uppercase py-3 border-b border-[#C8D0DA] hover:border-[#C05010] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* External Links */}
              <div className="flex flex-wrap gap-4 mt-8">
                {externalLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase border border-[#2d2a28] px-4 py-2 hover:bg-[#C05010] hover:text-[#F5F7F8] transition-all"
                  >
                    {link.label}
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1"/>
                    </svg>
                  </Link>
                ))}
              </div>
            </div>

            {/* Access */}
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-[#888480] mb-4">
                Access
              </h4>
              <p className="text-sm leading-[2] mb-4">
                경기도 안산시 단원구<br />
                산단로 76 (성곡동)<br />
                사업자등록번호 119-13-28296
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase hover:opacity-60 transition-opacity"
              >
                오시는 길
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1"/>
                </svg>
              </Link>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-[#888480] mb-4">
                Contact
              </h4>
              <div className="flex flex-col gap-3">
                {contactInfo.map((info) => (
                  <Link
                    key={info.label}
                    href={info.href}
                    className="text-sm tracking-[0.05em] hover:opacity-60 transition-opacity"
                  >
                    {info.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#C8D0DA]">
            <Link href="/privacy" className="text-[10px] tracking-[0.15em] uppercase text-[#888480] hover:text-[#C05010] transition-colors mb-4 md:mb-0">
              Privacy Policy
            </Link>

            <p className="text-[10px] tracking-[0.15em] text-[#888480]">
              Copyright NBP KOREA. All Rights Reserved.
            </p>
          </div>

          {/* Back to Top */}
          <div className="flex justify-center mt-12">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex flex-col items-center gap-2 text-[10px] tracking-[0.15em] uppercase text-[#888480] hover:text-[#C05010] transition-colors group"
            >
              <div className="w-10 h-10 border border-[#C8D0DA] rounded-full flex items-center justify-center group-hover:border-[#C05010] group-hover:bg-[#C05010] group-hover:text-[#F5F7F8] transition-all">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="rotate-[-90deg]">
                  <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1"/>
                </svg>
              </div>
              Page Top
            </button>
          </div>
        </div>
      </div>

      {/* Hover Image Preview */}
      {hoveredImage && (
        <div className="fixed bottom-20 right-20 w-64 h-80 pointer-events-none z-50 hidden lg:block">
          <div className="placeholder-box w-full h-full animate-scale-in">
            {hoveredImage} preview
          </div>
        </div>
      )}
    </footer>
  );
}
