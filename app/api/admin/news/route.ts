import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// GET /api/admin/news — all news including unpublished (admin only, protected by middleware)
export async function GET() {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .order("date", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
