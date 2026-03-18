import { NextRequest, NextResponse } from "next/server";

const SESSION_COOKIE = "admin_session";
const SESSION_SECRET = process.env.ADMIN_PASSWORD ?? "admin1234";
const ADMIN_SLUG = process.env.NEXT_PUBLIC_ADMIN_PATH || "admin";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ── 1. 직접 /admin 접근 차단 (커스텀 경로가 설정된 경우) ─────────────
  // 브라우저에서 /admin/* 을 직접 입력하면 홈으로 리다이렉트
  if (ADMIN_SLUG !== "admin" && pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // ── 2. Admin API 보호 ────────────────────────────────────────────────
  if (pathname.startsWith("/api/admin")) {
    const session = request.cookies.get(SESSION_COOKIE)?.value;
    if (!session || session !== `nbp_${SESSION_SECRET}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.next();
  }

  // ── 3. 커스텀 어드민 경로 보호 (/nbp6600/* 같은 경로) ────────────────
  const adminPrefix = `/${ADMIN_SLUG}`;
  const loginPath = `/${ADMIN_SLUG}/login`;

  if (pathname.startsWith(adminPrefix) && !pathname.startsWith(loginPath)) {
    const session = request.cookies.get(SESSION_COOKIE)?.value;

    if (!session || session !== `nbp_${SESSION_SECRET}`) {
      // 로그인 안 된 상태 → 무조건 로그인 페이지로 리다이렉트
      return NextResponse.redirect(new URL(loginPath, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  // 정적 파일 제외한 모든 경로에서 실행
  matcher: ["/((?!_next/static|_next/image|fonts|favicon.ico|images|.*\\.png$|.*\\.jpg$|.*\\.svg$|.*\\.mp4$).*)"],
};
