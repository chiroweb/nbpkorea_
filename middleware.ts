import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const SESSION_COOKIE = "admin_session";
const SESSION_TOKEN = "nbp_admin_authenticated";
const ADMIN_SLUG = process.env.NEXT_PUBLIC_ADMIN_PATH || "admin";

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ── 1. 직접 /admin 접근 차단
  if (ADMIN_SLUG !== "admin" && pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // ── 2. Admin API 보호 (로그인 엔드포인트는 제외)
  if (pathname.startsWith("/api/admin") && pathname !== "/api/admin/login") {
    const session = request.cookies.get(SESSION_COOKIE)?.value;
    if (session !== SESSION_TOKEN) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.next();
  }

  // ── 3. 커스텀 어드민 경로 보호
  const adminPrefix = `/${ADMIN_SLUG}`;
  const loginPath = `/${ADMIN_SLUG}/login`;

  if (pathname.startsWith(adminPrefix) && !pathname.startsWith(loginPath)) {
    const session = request.cookies.get(SESSION_COOKIE)?.value;
    if (session !== SESSION_TOKEN) {
      return NextResponse.redirect(new URL(loginPath, request.url));
    }
    return NextResponse.next();
  }

  // ── 4. Admin/API 경로는 next-intl 건너뜀
  if (
    pathname.startsWith("/admin") ||
    pathname.startsWith("/api") ||
    (ADMIN_SLUG !== "admin" && pathname.startsWith(`/${ADMIN_SLUG}`))
  ) {
    return NextResponse.next();
  }

  // ── 5. 그 외: next-intl locale 처리
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|fonts|favicon.ico|images|robots\\.txt|sitemap\\.xml|manifest\\.json|naver.*\\.html|.*\\.png$|.*\\.jpg$|.*\\.svg$|.*\\.mp4$).*)",
  ],
};
