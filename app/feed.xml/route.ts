const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.nbpkorea.co.kr";

interface NewsItem {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image_url?: string;
}

export async function GET() {
  let posts: NewsItem[] = [];
  try {
    const res = await fetch(`${BASE_URL}/api/news`, { next: { revalidate: 3600 } });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data)) posts = data;
    }
  } catch {
    // empty feed
  }

  const items = posts
    .map(
      (post) => `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${BASE_URL}/news/${post.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/news/${post.slug}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <category>${post.category}</category>
      <pubDate>${new Date(post.date.replace(/\./g, "-")).toUTCString()}</pubDate>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>NBPKOREA(엔비피코리아) - NBP NEWS</title>
    <link>${BASE_URL}</link>
    <description>엔비피코리아의 최신 뉴스, 기술 인사이트, 제품 소식</description>
    <language>ko</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
