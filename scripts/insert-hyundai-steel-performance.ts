/**
 * 현대스틸 간접식 가스히터 100만 납품실적 추가
 * Run: npx dotenv -e .env.local -- npx tsx scripts/insert-hyundai-steel-performance.ts
 */
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const S3 = "https://nbpkoreare.s3.ap-northeast-2.amazonaws.com";

async function main() {
  const { data: existing } = await supabase
    .from("performances")
    .select("number")
    .eq("category", "combustion")
    .order("number", { ascending: false })
    .limit(1);

  const nextNumber = (existing?.[0]?.number ?? 0) + 1;

  const row = {
    category: "combustion",
    title: "현대스틸",
    number: nextNumber,
    tags: ["간접식 가스히터"],
    specs: [
      { label: "제품", value: "간접식 가스히터" },
      { label: "용량", value: "1,000,000 Kcal/h" },
      { label: "내용", value: "납품 및 설치공사" },
    ],
    images: [
      `${S3}/images/performances/hyundai-steel-idgh-1.png`,
      `${S3}/images/performances/hyundai-steel-idgh-2.png`,
    ],
    is_published: true,
    sort_order: 0,
  };

  const { data, error } = await supabase.from("performances").insert([row]).select();
  if (error) {
    console.error("Insert failed:", error);
    process.exit(1);
  }
  console.log("Inserted:", data);
}

main();
