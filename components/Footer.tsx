"use client";

import { Link } from "@/i18n/navigation";
import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

const galleryImages = [
  { src: `${S3}/images/%ED%99%98%EA%B2%BD%EC%82%AC%EC%97%85%EB%B6%80/Business%20Area/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EC%9A%A9%20RTO%20%EB%A0%8C%EB%8D%94%EB%A7%81-nowatermark.jpg`, alt: "Environmental Plant" },
  { src: `${S3}/images/metal%20burner1.png`, alt: "Metal Fiber Burner" },
  { src: `${S3}/assets/industry1.png`, alt: "Shipyard" },
  { src: `${S3}/assets/industry2.png`, alt: "Automotive Paint Line" },
  { src: `${S3}/images/intro2.jpg`, alt: "Research Center" },
  { src: `${S3}/assets/industry3.png`, alt: "Chemical Plant" },
  { src: `${S3}/images/into3.jpg`, alt: "Global Partner Site" },
];

const FAMILY_SITES = [
  { label: "MIDCO International", href: "https://www.midco-intl.com" },
  { label: "ECOSTAR", href: "https://www.ecostar.com.tr" },
];

export default function Footer() {
  const t = useTranslations("common.footer");
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [familyOpen, setFamilyOpen] = useState(false);

  const navItems = [
    { label: t("products"), href: "/products", image: "products" },
    { label: t("about"), href: "/about", image: "about" },
    { label: t("technology"), href: "/technology", image: "technology" },
    { label: t("supportNav"), href: "/support", image: "support" },
    { label: t("businessNav"), href: "/business", image: "business" },
  ];

  const contactInfo = [
    { label: "TEL 031-434-6566~7", href: "tel:031-434-6566" },
    { label: "FAX 031-434-6568", href: "#" },
    { label: "NBPKOREA@NBPKOREA.co.kr", href: "mailto:NBPKOREA@NBPKOREA.co.kr" },
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
              NBPKOREA IS ALWAYS NEXT TO YOU FOR BUSINESS
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
                    key={item.href}
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
                <Link
                  href="/support"
                  className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase border border-[#2d2a28] px-4 py-2 hover:bg-[#C05010] hover:text-[#F5F7F8] transition-all"
                >
                  {t("contactUs")}
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1"/>
                  </svg>
                </Link>

                {/* Family Site Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setFamilyOpen((v) => !v)}
                    className={`flex items-center gap-2 text-xs tracking-[0.15em] uppercase border px-4 py-2 transition-all ${
                      familyOpen
                        ? "bg-[#C05010] text-[#F5F7F8] border-[#C05010]"
                        : "border-[#C05010] text-[#C05010] hover:bg-[#C05010] hover:text-[#F5F7F8]"
                    }`}
                  >
                    Family Site
                    <svg
                      width="10" height="10" viewBox="0 0 10 10" fill="none"
                      className={`transition-transform duration-200 ${familyOpen ? "rotate-180" : ""}`}
                    >
                      <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  {/* Upward dropdown */}
                  {familyOpen && (
                    <div className="absolute bottom-full left-0 mb-2 min-w-[180px] bg-white border border-[#D4DAE2] shadow-md z-20">
                      {FAMILY_SITES.map((site) => (
                        <a
                          key={site.label}
                          href={site.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setFamilyOpen(false)}
                          className="flex items-center justify-between px-4 py-3 text-xs tracking-[0.1em] uppercase text-[#2d2a28] hover:bg-[#C05010] hover:text-white transition-colors border-b border-[#F0F0F0] last:border-b-0"
                        >
                          {site.label}
                          <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                            <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1"/>
                          </svg>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Access */}
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-[#888480] mb-4">
                {t("access")}
              </h4>
              <p className="text-sm leading-[2] mb-4 whitespace-pre-line">
                {t("address")}
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase hover:opacity-60 transition-opacity"
              >
                {t("directions")}
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1"/>
                </svg>
              </Link>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-[#888480] mb-4">
                {t("contact")}
              </h4>
              <div className="flex flex-col gap-3">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="text-sm tracking-[0.05em] hover:opacity-60 transition-opacity"
                  >
                    {info.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#C8D0DA]">
            <Link href="/privacy" className="text-[13px] tracking-[0.15em] uppercase text-[#888480] hover:text-[#C05010] transition-colors mb-4 md:mb-0">
              {t("privacy")}
            </Link>

            <p className="text-[13px] tracking-[0.15em] text-[#888480]">
              {t("copyright")}
            </p>
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
