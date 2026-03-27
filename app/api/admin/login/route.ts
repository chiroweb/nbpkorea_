import { NextRequest, NextResponse } from "next/server";

const SESSION_COOKIE = "admin_session";
// 세션 토큰은 비밀번호와 무관한 고정값
const SESSION_TOKEN = "nbp_admin_authenticated";

function getValidPasswords(): string[] {
  return [
    process.env.ADMIN_PASSWORD,
    process.env.ADMIN_PASSWORD_2,
  ].filter((p): p is string => typeof p === "string" && p.trim().length > 0)
    .map((p) => p.trim());
}

export async function POST(request: NextRequest) {
  const { password } = await request.json();
  const validPasswords = getValidPasswords();

  // 환경변수가 없으면 기본값 허용
  const isValid =
    validPasswords.length === 0
      ? password === "admin1234"
      : validPasswords.includes(password.trim());

  if (!isValid) {
    return NextResponse.json({ error: "비밀번호가 올바르지 않습니다." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, SESSION_TOKEN, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24, // 24h
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.delete(SESSION_COOKIE);
  return response;
}
