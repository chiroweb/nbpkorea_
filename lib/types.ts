export interface Popup {
  id: string;
  title: string;
  image_url: string;
  link_url: string | null;
  is_active: boolean;
  start_date: string;
  end_date: string;
  created_at: string;
}

export type ContentBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export interface PerformanceSpec {
  label: string;
  value: string;
}

export interface Performance {
  id: string;
  category: string;          // environment | hvac | combustion | burner
  tags?: string[];            // 적용분야 태그 (e.g. "RCO", "조선", "반도체")
  title: string;
  number: number;            // No. 210 등
  images: string[];           // 최대 3장
  specs: PerformanceSpec[];   // 스펙 key-value
  before_text: string;        // 비포
  after_text: string;         // 애프터
  is_published: boolean;
  sort_order: number;
  created_at: string;
}

export interface News {
  id: string;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image_url: string;
  read_time: string;
  content: ContentBlock[];
  is_published: boolean;
  date: string;
  created_at: string;
}
