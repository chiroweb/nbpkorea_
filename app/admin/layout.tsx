"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ADMIN_PATH } from "@/lib/admin-path";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/login", { method: "DELETE" });
    router.push(`${ADMIN_PATH}/login`);
  }

  const navItems = [
    { label: "대시보드", href: ADMIN_PATH },
    { label: "공지사항 관리", href: `${ADMIN_PATH}/news` },
    { label: "사업실적 관리", href: `${ADMIN_PATH}/performances` },
    { label: "팝업 관리", href: `${ADMIN_PATH}/popups` },
  ];

  return (
    <div className="min-h-screen flex bg-[#F5F7F8]">
      {/* Sidebar */}
      <aside className="w-56 bg-white border-r border-[#D4DAE2] flex flex-col flex-shrink-0">
        <div className="px-6 py-6 border-b border-[#D4DAE2]">
          <Link href={ADMIN_PATH}>
            <span className="text-xl font-light tracking-[0.25em] text-[#2d2a28] uppercase">NBP</span>
            <span className="block text-[10px] tracking-[0.3em] text-[#8B95A1] mt-0.5 uppercase">Admin</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1">
          {navItems.map((item) => {
            const isActive =
              item.href === ADMIN_PATH
                ? pathname === "/admin"
                : pathname.startsWith(item.href.replace(ADMIN_PATH, "/admin"));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2.5 text-[13px] tracking-[0.05em] rounded transition-colors duration-200 ${
                  isActive
                    ? "bg-[#C05010] text-white"
                    : "text-[#2d2a28] hover:bg-[#F5F7F8]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="px-4 py-4 border-t border-[#D4DAE2]">
          <button
            onClick={handleLogout}
            className="w-full text-left px-3 py-2.5 text-[13px] tracking-[0.05em] text-[#8B95A1] hover:text-[#C05010] transition-colors duration-200"
          >
            로그아웃
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-14 bg-white border-b border-[#D4DAE2] flex items-center justify-between px-8">
          <span className="text-sm tracking-[0.15em] text-[#8B95A1] uppercase">NBPKOREA Admin</span>
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-1.5 text-[12px] tracking-[0.1em] text-[#8B95A1] hover:text-[#C05010] transition-colors"
          >
            <span>홈페이지 이동</span>
            <span>↗</span>
          </Link>
        </header>

        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
