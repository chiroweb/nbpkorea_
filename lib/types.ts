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
