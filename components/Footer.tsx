"use client";

import { Link } from "@/i18n/navigation";
import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/nbpkorea_official/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.5 15.5V8.5l6.5 3.5-6.5 3.5Z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/nbpkorea",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.3l-.5 3.5h-2.8v8.4A12 12 0 0 0 24 12Z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/821012345678",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.5 14.4c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6 0-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5 0-.2 0-.3 0-.5-.1-.2-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.3-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4 0-.1-.2-.2-.5-.3ZM12 21.8a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.8 9.8 0 0 1 15.1-12.5A9.8 9.8 0 0 1 12 21.8ZM12 0a12 12 0 0 0-10.2 18.1L0 24l6-1.6A12 12 0 1 0 12 0Z" />
      </svg>
    ),
  },
];

const galleryImages = [
  { src: `${S3}/images/%ED%99%98%EA%B2%BD%EC%82%AC%EC%97%85%EB%B6%80/Business%20Area/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EC%9A%A9%20RTO%20%EB%A0%8C%EB%8D%94%EB%A7%81-nowatermark.jpg`, alt: "Environmental Plant" },
  { src: `${S3}/images/metal-burner2.png`, alt: "Metal Fiber Burner" },
  { src: `${S3}/assets/industry1.png`, alt: "Shipyard" },
  { src: `${S3}/assets/industry2.png`, alt: "Automotive Paint Line" },
  { src: `${S3}/images/intro2.jpg`, alt: "Research Center" },
  { src: `${S3}/assets/industry3.png`, alt: "Chemical Plant" },
  { src: `${S3}/images/into3.jpg`, alt: "Global Partner Site" },
];

const FAMILY_SITES = [
  { label: "MIDCO International", href: "https://midcointernational.com/" },
  { label: "ECOSTAR", href: "https://www.ecostar.com.tr" },
  { label: "CombHEX", href: "https://www.combhex.com/" },
];

function FamilySiteDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-2 text-xs tracking-[0.06em] uppercase border px-4 py-2 transition-all ${
          open
            ? "bg-[#C05010] text-[#F5F7F8] border-[#C05010]"
            : "border-[#C05010] text-[#C05010] hover:bg-[#C05010] hover:text-[#F5F7F8]"
        }`}
      >
        Family Site
        <svg
          width="10" height="10" viewBox="0 0 10 10" fill="none"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {open && (
        <div className="absolute bottom-full left-0 mb-2 min-w-[180px] bg-white border border-[#D4DAE2] shadow-md z-20">
          {FAMILY_SITES.map((site) => (
            <a
              key={site.label}
              href={site.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between px-4 py-3 text-xs tracking-[0.04em] uppercase text-[#2d2a28] hover:bg-[#C05010] hover:text-white transition-colors border-b border-[#F0F0F0] last:border-b-0"
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
  );
}

export default function Footer() {
  const t = useTranslations("common.footer");
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  const navItems = [
    { label: t("about"), href: "/about", image: `${S3}/images/company/building-1.jpg` },
    { label: t("businessNav"), href: "/business", image: `${S3}/images/combustion-site-hd.jpg` },
    { label: t("products"), href: "/products", image: `${S3}/images/burner/duct-burner-hero.jpg` },
    { label: "사업실적", href: "/performance", image: `${S3}/images/intro2.jpg` },
    { label: "NBP NEWS", href: "/news", image: `${S3}/images/into3.jpg` },
    { label: t("supportNav"), href: "/support", image: `${S3}/images/hvac/hvac-main.png` },
  ];

  const contactInfo = [
    { label: "TEL 031-434-6566~7", href: "tel:031-434-6566" },
    { label: "FAX 031-434-6568", href: "#" },
    { label: "nbpkorea@nbpkorea.co.kr", href: "mailto:nbpkorea@nbpkorea.co.kr" },
  ];

  return (
    <footer className="bg-[#F5F7F8] pt-32 pb-12">
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
                    className="text-sm tracking-[0.06em] uppercase py-3 border-b border-[#C8D0DA] hover:border-[#C05010] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* External Links */}
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href="/support"
                  className="flex items-center gap-2 text-xs tracking-[0.06em] uppercase border border-[#2d2a28] px-4 py-2 hover:bg-[#C05010] hover:text-[#F5F7F8] transition-all"
                >
                  {t("contactUs")}
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1"/>
                  </svg>
                </Link>

                <FamilySiteDropdown />
              </div>
            </div>

            {/* Access */}
            <div>
              <h4 className="text-xs tracking-[0.04em] uppercase text-[#5C6470] mb-4">
                {t("access")}
              </h4>
              <p className="text-sm leading-relaxed mb-4 whitespace-pre-line">
                {t("address")}
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs tracking-[0.06em] uppercase hover:opacity-60 transition-opacity"
              >
                {t("directions")}
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1"/>
                </svg>
              </Link>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs tracking-[0.04em] uppercase text-[#5C6470] mb-4">
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

              {/* Social Icons */}
              <div className="flex items-center gap-4 mt-6">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="text-[#5C6470] hover:text-[#C05010] transition-colors duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#C8D0DA]">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
              <Link href="/privacy" className="text-[13px] tracking-[0.06em] uppercase text-[#5C6470] hover:text-[#C05010] transition-colors">
                {t("privacy")}
              </Link>
              <a
                href="https://chiroweb.co.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13px] tracking-[0.06em] uppercase text-[#5C6470] hover:text-[#C05010] transition-colors"
              >
                <span>Made by Chiroweb</span>
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1"/>
                </svg>
              </a>
            </div>

            <p className="text-[13px] tracking-[0.06em] text-[#5C6470]">
              {t("copyright")}
            </p>
          </div>

        </div>
      </div>

      {/* Hover Image Preview */}
      {hoveredImage && (
        <div className="fixed bottom-20 right-20 w-56 h-36 pointer-events-none z-50 hidden lg:block">
          <div className="relative w-full h-full border border-[#C05010]/30 shadow-lg overflow-hidden">
            <Image src={hoveredImage} alt="preview" fill className="object-cover" />
          </div>
        </div>
      )}
    </footer>
  );
}
