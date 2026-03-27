import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { isAuthenticated, UNAUTHORIZED } from "@/lib/auth";

// GET /api/popups — 활성 팝업만 공개
export async function GET() {
  const now = new Date().toISOString();
  const { data, error } = await supabase
    .from("popups")
    .select("*")
    .eq("is_active", true)
    .lte("start_date", now)
    .gte("end_date", now)
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

// POST /api/popups — 인증 필수
export async function POST(request: NextRequest) {
  if (!isAuthenticated(request)) return UNAUTHORIZED;

  const body = await request.json();
  const { data, error } = await supabase.from("popups").insert([body]).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data, { status: 201 });
}
