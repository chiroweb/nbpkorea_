import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// GET /api/admin/performances — all including unpublished
export async function GET() {
  const { data, error } = await supabase
    .from("performances")
    .select("*")
    .order("sort_order", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
