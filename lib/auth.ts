import { NextRequest, NextResponse } from "next/server";

const SESSION_COOKIE = "admin_session";
const SESSION_TOKEN = "nbp_admin_authenticated";

export function isAuthenticated(request: NextRequest): boolean {
  const session = request.cookies.get(SESSION_COOKIE)?.value;
  return session === SESSION_TOKEN;
}

export const UNAUTHORIZED = NextResponse.json(
  { error: "Unauthorized" },
  { status: 401 }
);
