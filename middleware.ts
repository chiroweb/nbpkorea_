import { NextRequest, NextResponse } from "next/server";

const SESSION_COOKIE = "admin_session";
const SESSION_TOKEN = "nbp_admin_authenticated";
const ADMIN_SLUG = process.env.NEXT_PUBLIC_ADMIN_PATH || "admin";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ── 1. 직접 /admin 접근 차단
  if (ADMIN_SLUG !== "admin" && pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // ── 2. Admin API 보호
  if (pathname.startsWith("/api/admin")) {
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
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|fonts|favicon.ico|images|.*\\.png$|.*\\.jpg$|.*\\.svg$|.*\\.mp4$).*)"],
};
