/**
 * 관리자 파일 업로드 기능 진단
 * Run: npx dotenv-cli -e .env.local -- npx tsx scripts/diagnose-upload.ts
 */
import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log("=== Environment ===");
console.log("NEXT_PUBLIC_SUPABASE_URL:", url ? "✓ set" : "✗ MISSING");
console.log("SUPABASE_SERVICE_ROLE_KEY:", serviceKey ? `✓ set (${serviceKey.length} chars)` : "✗ MISSING");
console.log("NEXT_PUBLIC_SUPABASE_ANON_KEY:", anonKey ? "✓ set" : "✗ MISSING");

if (!url || !serviceKey) {
  console.error("Missing required env vars");
  process.exit(1);
}

const admin = createClient(url, serviceKey, { auth: { persistSession: false } });

async function main() {
  console.log("\n=== Storage buckets ===");
  const { data: buckets, error: bErr } = await admin.storage.listBuckets();
  if (bErr) {
    console.error("listBuckets failed:", bErr);
    return;
  }
  console.log(buckets?.map((b) => `- ${b.name} (public=${b.public})`).join("\n") ?? "(none)");

  const hasUploads = buckets?.find((b) => b.name === "uploads");
  if (!hasUploads) {
    console.log("\n✗ 'uploads' bucket missing. Creating it...");
    const { error } = await admin.storage.createBucket("uploads", { public: true });
    if (error) console.error("create failed:", error);
    else console.log("✓ created uploads bucket (public)");
  } else if (!hasUploads.public) {
    console.log("\n✗ 'uploads' bucket exists but is NOT public. Updating...");
    const { error } = await admin.storage.updateBucket("uploads", { public: true });
    if (error) console.error("update failed:", error);
    else console.log("✓ set uploads bucket to public");
  } else {
    console.log("\n✓ 'uploads' bucket exists and is public");
  }

  console.log("\n=== Test upload (tiny PNG) ===");
  const tinyPng = Buffer.from(
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII=",
    "base64"
  );
  const path = `misc/diagnose-${Date.now()}.png`;
  const { error: upErr } = await admin.storage.from("uploads").upload(path, tinyPng, {
    contentType: "image/png",
    upsert: false,
  });
  if (upErr) {
    console.error("✗ upload failed:", upErr);
    return;
  }
  const { data: pub } = admin.storage.from("uploads").getPublicUrl(path);
  console.log("✓ upload OK →", pub.publicUrl);

  // fetch it back to verify public access
  const res = await fetch(pub.publicUrl);
  console.log(res.ok ? `✓ public URL reachable (HTTP ${res.status})` : `✗ public URL HTTP ${res.status}`);

  // cleanup
  await admin.storage.from("uploads").remove([path]);
}

main();
