"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ADMIN_PATH } from "@/lib/admin-path";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push(ADMIN_PATH);
    } else {
      const data = await res.json();
      setError(data.error ?? "로그인 실패");
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#F5F7F8] flex items-center justify-center">
      <div className="bg-white p-10 w-full max-w-sm shadow-sm border border-[#D4DAE2]">
        {/* Logo */}
        <div className="mb-8 text-center">
          <span className="text-2xl font-light tracking-[0.3em] text-[#2d2a28] uppercase">NBP</span>
          <span className="block text-xs tracking-[0.3em] text-[#8B95A1] mt-1 uppercase">Admin</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs tracking-[0.15em] text-[#8B95A1] uppercase mb-2">
              비밀번호
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-[#D4DAE2] px-4 py-3 text-sm text-[#2d2a28] focus:outline-none focus:border-[#C05010] transition-colors"
              placeholder="관리자 비밀번호 입력"
              required
            />
          </div>

          {error && (
            <p className="text-xs text-red-500 tracking-wide">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#2d2a28] text-[#F5F7F8] text-xs tracking-[0.2em] uppercase py-3 hover:bg-[#C05010] transition-colors duration-300 disabled:opacity-50"
          >
            {loading ? "로그인 중..." : "로그인"}
          </button>
        </form>
      </div>
    </div>
  );
}
