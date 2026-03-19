"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/navigation";
import { useInView } from "@/hooks/useInView";

interface SubpageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  breadcrumb: { label: string; href: string }[];
}

export default function SubpageLayout({
  children,
  title,
  subtitle,
  breadcrumb,
}: SubpageLayoutProps) {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <>
      <Header />
      {/* Page Hero Banner */}
      <section
        ref={ref}
        className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav
            className={`flex items-center gap-2 mb-8 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Link
              href="/"
              className="text-[13px] tracking-[0.15em] uppercase text-[#888480] hover:text-[#C05010] transition-colors"
            >
              Home
            </Link>
            {breadcrumb.map((item, index) => (
              <span key={item.label} className="flex items-center gap-2">
                <span className="text-[#C8D0DA]">/</span>
                {index === breadcrumb.length - 1 ? (
                  <span className="text-[13px] tracking-[0.15em] uppercase text-[#C05010]">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-[13px] tracking-[0.15em] uppercase text-[#888480] hover:text-[#C05010] transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>

          {/* Title */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.15em] text-[#2d2a28] mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-sm md:text-base tracking-[0.1em] text-[#888480] max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>

          {/* Decorative Line */}
          <div
            className={`mt-12 h-px bg-[#D4DAE2] transition-all duration-1000 delay-500 ${
              isInView ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            } origin-left`}
          />
        </div>
      </section>

      {/* Page Content */}
      <main className="bg-white">{children}</main>

      <Footer />
    </>
  );
}
