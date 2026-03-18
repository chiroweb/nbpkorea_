import { createClient, SupabaseClient } from "@supabase/supabase-js";

// 빌드 시점이 아닌 실제 요청 시점에 초기화 (build-time 오류 방지)
let _client: SupabaseClient | null = null;

function getClient(): SupabaseClient {
  if (!_client) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !key) throw new Error("Supabase 환경변수가 설정되지 않았습니다.");
    _client = createClient(url, key);
  }
  return _client;
}

export const supabase: SupabaseClient = new Proxy({} as SupabaseClient, {
  get(_, prop: string) {
    return (getClient() as unknown as Record<string, unknown>)[prop];
  },
});
