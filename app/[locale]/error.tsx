"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-[13px] tracking-[0.3em] uppercase text-[#C05010] mb-4">
          Error
        </p>
        <h1 className="text-5xl font-bold tracking-[0.15em] text-[#2d2a28] mb-6">
          오류 발생
        </h1>
        <p className="text-sm text-[#8B95A1] leading-[2] mb-8">
          페이지를 불러오는 중 문제가 발생했습니다.
          <br />
          잠시 후 다시 시도해 주세요.
        </p>
        <button
          onClick={reset}
          className="text-xs tracking-[0.15em] uppercase border border-[#2d2a28] px-6 py-3 hover:bg-[#C05010] hover:border-[#C05010] hover:text-white transition-all duration-300"
        >
          다시 시도
        </button>
      </div>
    </div>
  );
}
