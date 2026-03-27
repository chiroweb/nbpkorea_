import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { isAuthenticated, UNAUTHORIZED } from "@/lib/auth";

// GET /api/performances — public (is_published=true)
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  let query = supabase
    .from("performances")
    .select("*")
    .eq("is_published", true)
    .order("sort_order", { ascending: false });

  if (category) {
    query = query.eq("category", category);
  }

  const { data, error } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

// POST /api/performances — auth required
export async function POST(request: NextRequest) {
  if (!isAuthenticated(request)) return UNAUTHORIZED;

  const body = await request.json();
  const { data, error } = await supabase.from("performances").insert([body]).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data, { status: 201 });
}
