import { NextRequest, NextResponse } from "next/server";

const SESSION_COOKIE = "admin_session";

export async function POST(request: NextRequest) {
  const { password } = await request.json();
  const adminPassword = process.env.ADMIN_PASSWORD ?? "admin1234";

  if (password !== adminPassword) {
    return NextResponse.json({ error: "비밀번호가 올바르지 않습니다." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, `nbp_${adminPassword}`, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24, // 24h
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production", // HTTPS only in production
  });
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.delete(SESSION_COOKIE);
  return response;
}
