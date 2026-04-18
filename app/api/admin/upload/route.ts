import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated, UNAUTHORIZED } from "@/lib/auth";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

const BUCKET = "uploads";
const MAX_BYTES = 10 * 1024 * 1024;
const ALLOWED_PREFIX = "image/";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  if (!isAuthenticated(request)) return UNAUTHORIZED;

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }

  const file = formData.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "파일이 없습니다." }, { status: 400 });
  }
  if (!file.type.startsWith(ALLOWED_PREFIX)) {
    return NextResponse.json({ error: "이미지 파일만 업로드 가능합니다." }, { status: 400 });
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: "파일 크기는 10MB 이하만 가능합니다." }, { status: 400 });
  }

  const folder = (formData.get("folder") as string | null)?.replace(/[^a-z0-9/_-]/gi, "") || "misc";
  const ext = (file.name.split(".").pop() || "bin").replace(/[^a-z0-9]/gi, "").toLowerCase();
  const path = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;

  const admin = getSupabaseAdmin();
  const buffer = Buffer.from(await file.arrayBuffer());

  const { error: uploadErr } = await admin.storage.from(BUCKET).upload(path, buffer, {
    contentType: file.type,
    cacheControl: "31536000",
    upsert: false,
  });

  if (uploadErr) {
    return NextResponse.json(
      { error: `업로드 실패: ${uploadErr.message}. 'uploads' 버킷이 존재하고 public 으로 설정돼 있는지 확인하세요.` },
      { status: 500 }
    );
  }

  const { data: pub } = admin.storage.from(BUCKET).getPublicUrl(path);
  return NextResponse.json({ url: pub.publicUrl, path });
}
