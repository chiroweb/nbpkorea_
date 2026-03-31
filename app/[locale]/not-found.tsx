import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-[13px] tracking-[0.3em] uppercase text-[#C05010] mb-4">
          404 — Page Not Found
        </p>
        <h1 className="text-5xl font-bold tracking-[0.15em] text-[#2d2a28] mb-6">
          404
        </h1>
        <p className="text-sm text-[#8B95A1] leading-[2] mb-8">
          요청하신 페이지를 찾을 수 없습니다.<br />
          주소를 다시 확인하시거나 아래 버튼을 눌러 메인으로 이동해 주세요.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/"
            className="text-xs tracking-[0.15em] uppercase border border-[#2d2a28] px-6 py-3 hover:bg-[#C05010] hover:border-[#C05010] hover:text-white transition-all duration-300"
          >
            메인으로 돌아가기
          </Link>
          <Link
            href="/support"
            className="text-xs tracking-[0.15em] uppercase text-[#8B95A1] hover:text-[#C05010] transition-colors"
          >
            문의하기
          </Link>
        </div>
      </div>
    </div>
  );
}
