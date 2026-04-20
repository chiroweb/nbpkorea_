/**
 * Deletes specific news articles by slug from Supabase.
 * Run with: npx tsx scripts/delete-news.ts
 */
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const slugsToDelete = [
  "NBPKOREA-iso-certification",
  "midco-partnership-20years",
  "hybrid-dehumidifier-paint-booth",
];

async function main() {
  console.log(`Deleting ${slugsToDelete.length} news articles...`);
  const { data, error } = await supabase
    .from("news")
    .delete()
    .in("slug", slugsToDelete)
    .select();
  if (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
  console.log(`Deleted ${data?.length ?? 0} articles:`);
  data?.forEach((row) => console.log(`  - ${row.slug}`));
}

main();
