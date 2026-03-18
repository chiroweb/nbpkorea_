"use client";

import SubpageLayout from "@/components/SubpageLayout";
import { useInView } from "@/hooks/useInView";
import Link from "next/link";
import Image from "next/image";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

// 실제 운영 시 CMS나 DB로 교체할 데이터
const posts: Record<string, {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  content: { type: "p" | "h2" | "h3" | "ul"; text?: string; items?: string[] }[];
}> = {
  "rto-case-study-shipbuilding": {
    category: "기술 인사이트",
    date: "2025.12.10",
    title: "RTO 시스템, 조선소 도장 공정 악취 처리의 해법",
    excerpt: "한화오션·HD현대미포 등 국내 주요 조선소에 납품된 RTO의 적용 사례와 에너지 회수 효율을 분석합니다.",
    image: `${S3}/images/service-environment.png`,
    readTime: "5분",
    content: [
      { type: "h2", text: "조선소 도장 공정과 VOCs 문제" },
      { type: "p", text: "선박 블록 도장 과정에서 발생하는 휘발성유기화합물(VOCs)과 복합 악취는 작업자 건강과 주변 환경에 직접적인 영향을 미칩니다. 국내 조선업 특성상 대형 밀폐 공간에서의 도장 작업이 많아 고농도 VOCs 처리 장치가 필수적입니다." },
      { type: "h2", text: "NBPKOREA의 RTO 적용 사례" },
      { type: "p", text: "NBPKOREA는 한화오션, HD현대미포조선 등 국내 주요 조선소의 도장 블록 작업장에 축열식연소산화장치(RTO)를 공급했습니다. 당사 RTO는 축열재를 이용해 연소열을 회수, 자체 연료 소비를 최소화하면서 VOCs 처리 효율 99% 이상을 실현합니다." },
      { type: "h3", text: "주요 성능 지표" },
      { type: "ul", items: [
        "VOCs 처리 효율: 99% 이상",
        "열 회수 효율: 95% 이상",
        "연료 절감: 기존 TO 대비 60~70%",
        "적용 풍량: 10,000~400,000 CMM",
      ]},
      { type: "h2", text: "에너지 절감 효과" },
      { type: "p", text: "RTO의 핵심 경쟁력은 열 회수입니다. 연소 시 발생한 고온 가스를 축열재(세라믹 허니콤)에 저장하고, 다음 처리 사이클의 예열에 활용함으로써 추가 연료 투입 없이도 안정적인 연소 온도를 유지할 수 있습니다." },
      { type: "p", text: "실제 납품 현장에서는 기존 직접 연소 방식 대비 연간 수억 원의 연료비 절감이 확인됐으며, 설비 투자비 회수 기간은 평균 2~3년 수준으로 집계됐습니다." },
      { type: "h2", text: "문의 및 상담" },
      { type: "p", text: "VOCs 처리 설비 도입을 검토 중이라면 NBPKOREA 기술팀에 문의하세요. 현장 조건에 맞는 최적 사양을 제안해 드립니다." },
    ],
  },
  "metal-fiber-burner-nox-reduction": {
    category: "제품 소식",
    date: "2025.11.20",
    title: "NBP-MB 금속화이버 버너, NOx 저감 30% 달성 검증",
    excerpt: "자체 개발 금속화이버 버너 NBP-MB 시리즈의 연소 시험 결과를 공개합니다.",
    image: `${S3}/images/service-burner.png`,
    readTime: "4분",
    content: [
      { type: "h2", text: "금속화이버 버너란" },
      { type: "p", text: "금속화이버 버너는 금속 섬유로 제작된 다공성 매체에서 연소가 이루어지는 방식으로, 균등한 화염 분포와 낮은 연소 온도를 동시에 실현합니다. 이 특성 덕분에 고온에서 생성되는 질소산화물(NOx) 발생을 원천적으로 억제할 수 있습니다." },
      { type: "h2", text: "NBP-MB 시험 결과 요약" },
      { type: "ul", items: [
        "NOx 배출 저감: 기존 버너 대비 30% 이상",
        "에너지 효율 향상: 30% 이상",
        "적외선 복사열 활용으로 피가열체 직접 가열",
        "균등 연소로 제품 품질 편차 최소화",
      ]},
      { type: "h2", text: "적용 가능 분야" },
      { type: "p", text: "NBP-MB는 산업용 건조로, 열처리로, 도장 건조 시스템, 식품 가공 설비 등 다양한 산업에 적용할 수 있으며, 소형 버너(NBP-SMB)는 컴팩트한 공간에도 설치가 용이합니다." },
    ],
  },
};

// 슬러그 외 페이지는 첫 번째 포스트 데이터로 fallback
function getPost(slug: string) {
  return posts[slug] ?? posts["rto-case-study-shipbuilding"];
}

export default function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = (params as unknown as { slug: string });
  const post = getPost(slug);
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <SubpageLayout
      title={post.category}
      breadcrumb={[
        { label: "NBP/NEWS", href: "/news" },
        { label: post.category, href: "/news" },
      ]}
    >
      <article className="px-6 md:px-12 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Meta */}
          <div
            ref={ref}
            className={`flex items-center gap-4 mb-8 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="text-[13px] tracking-[0.2em] uppercase text-[#C05010] border border-[#C05010]/30 px-3 py-1">
              {post.category}
            </span>
            <span className="text-[14px] tracking-[0.1em] text-[#8B95A1]">{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-[#C8D0DA]" />
            <span className="text-[14px] tracking-[0.1em] text-[#8B95A1]">읽기 {post.readTime}</span>
          </div>

          {/* Title */}
          <h1
            className={`text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.05em] text-[#2d2a28] mb-8 leading-snug transition-all duration-700 delay-100 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {post.title}
          </h1>

          {/* Excerpt */}
          <p
            className={`text-base text-[#8B95A1] leading-[2] mb-12 border-l-2 border-[#C05010] pl-6 transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {post.excerpt}
          </p>

          {/* Thumbnail */}
          <div
            className={`relative aspect-[16/9] overflow-hidden bg-[#DCE2E8] mb-16 transition-all duration-700 delay-300 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Image src={post.image} alt={post.title} fill className="object-cover" priority />
          </div>

          {/* Divider */}
          <div className="h-px bg-[#D4DAE2] mb-16" />

          {/* Body Content */}
          <div className="space-y-6">
            {post.content.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2 key={i} className="text-xl tracking-[0.08em] font-medium text-[#2d2a28] mt-12 mb-4 pt-8 border-t border-[#D4DAE2] first:border-t-0 first:pt-0 first:mt-0">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "h3") {
                return (
                  <h3 key={i} className="text-base tracking-[0.08em] font-medium text-[#2d2a28] mt-8 mb-3">
                    {block.text}
                  </h3>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={i} className="space-y-2">
                    {block.items?.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-[#8B95A1] leading-[1.8]">
                        <span className="mt-2 w-1 h-1 rounded-full bg-[#C05010] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-sm text-[#8B95A1] leading-[2]">
                  {block.text}
                </p>
              );
            })}
          </div>

          {/* Back & CTA */}
          <div className="mt-20 pt-12 border-t border-[#D4DAE2] flex items-center justify-between">
            <Link href="/news" className="btn-link group text-[#8B95A1]">
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="rotate-180 transition-transform group-hover:-translate-x-1">
                <path d="M0 4H15M15 4L11 1M15 4L11 7" stroke="currentColor" strokeWidth="1"/>
              </svg>
              <span className="text-xs tracking-[0.15em] uppercase">목록으로</span>
            </Link>
            <Link
              href="/support"
              className="text-xs tracking-[0.15em] uppercase border border-[#2d2a28] px-5 py-2.5 hover:bg-[#C05010] hover:border-[#C05010] hover:text-white transition-all duration-300"
            >
              문의하기
            </Link>
          </div>
        </div>
      </article>
    </SubpageLayout>
  );
}
