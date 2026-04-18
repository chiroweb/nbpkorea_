import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated, UNAUTHORIZED } from "@/lib/auth";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

const BUCKET = "uploads";
const MAX_BYTES = 10 * 1024 * 1024;
const ALLOWED_PREFIX = "image/";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    if (!isAuthenticated(request)) return UNAUTHORIZED;

    let formData: FormData;
    try {
      formData = await request.formData();
    } catch (err) {
      console.error("[upload] formData parse failed:", err);
      return NextResponse.json({ error: "요청 본문을 읽을 수 없습니다." }, { status: 400 });
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

    let admin;
    try {
      admin = getSupabaseAdmin();
    } catch (err) {
      console.error("[upload] supabase admin init failed:", err);
      return NextResponse.json(
        { error: "서버 설정 오류: SUPABASE_SERVICE_ROLE_KEY 환경변수를 확인하세요." },
        { status: 500 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const { error: uploadErr } = await admin.storage.from(BUCKET).upload(path, buffer, {
      contentType: file.type,
      cacheControl: "31536000",
      upsert: false,
    });

    if (uploadErr) {
      console.error("[upload] supabase upload failed:", uploadErr);
      return NextResponse.json(
        { error: `업로드 실패: ${uploadErr.message}. 'uploads' 버킷이 존재하고 public 으로 설정돼 있는지 확인하세요.` },
        { status: 500 }
      );
    }

    const { data: pub } = admin.storage.from(BUCKET).getPublicUrl(path);
    return NextResponse.json({ url: pub.publicUrl, path });
  } catch (err) {
    console.error("[upload] unexpected error:", err);
    const message = err instanceof Error ? err.message : "알 수 없는 오류";
    return NextResponse.json({ error: `서버 오류: ${message}` }, { status: 500 });
  }
}
