import { NextRequest, NextResponse } from "next/server";

const SESSION_COOKIE = "admin_session";

export function isAuthenticated(request: NextRequest): boolean {
  const secret = process.env.ADMIN_PASSWORD ?? "admin1234";
  const session = request.cookies.get(SESSION_COOKIE)?.value;
  return session === `nbp_${secret}`;
}

export const UNAUTHORIZED = NextResponse.json(
  { error: "Unauthorized" },
  { status: 401 }
);
