import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { isAuthenticated, UNAUTHORIZED } from "@/lib/auth";

// GET — 관리자용 단건 조회 (비공개 포함)
export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!isAuthenticated(request)) return UNAUTHORIZED;

  const { id } = await params;
  const { data, error } = await supabase.from("news").select("*").eq("id", id).single();
  if (error || !data) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(data);
}

// PUT — 인증 필수
export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!isAuthenticated(request)) return UNAUTHORIZED;

  const { id } = await params;
  const body = await request.json();
  const { data, error } = await supabase.from("news").update(body).eq("id", id).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

// DELETE — 인증 필수
export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!isAuthenticated(request)) return UNAUTHORIZED;

  const { id } = await params;
  const { error } = await supabase.from("news").delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
