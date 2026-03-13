"use client";

import SubpageLayout from "@/components/SubpageLayout";
import { useInView } from "@/hooks/useInView";
import Link from "next/link";
import Image from "next/image";

const S3 = "https://nbpkoreare.s3.ap-northeast-2.amazonaws.com";

const posts = [
  {
    slug: "rto-case-study-shipbuilding",
    category: "기술 인사이트",
    date: "2025.12.10",
    title: "RTO 시스템, 조선소 도장 공정 악취 처리의 해법",
    excerpt:
      "한화오션·HD현대미포 등 국내 주요 조선소에 납품된 RTO(축열식연소산화설비)의 적용 사례와 에너지 회수 효율을 분석합니다.",
    image: `${S3}/images/service-environment.png`,
    readTime: "5분",
  },
  {
    slug: "metal-fiber-burner-nox-reduction",
    category: "제품 소식",
    date: "2025.11.20",
    title: "NBP-MB 금속화이버 버너, NOx 저감 30% 달성 검증",
    excerpt:
      "자체 개발 금속화이버 버너 NBP-MB 시리즈의 연소 시험 결과를 공개합니다. 기존 버너 대비 NOx 30% 이상 저감, 에너지 효율 30% 향상이 현장에서 검증됐습니다.",
    image: `${S3}/images/service-burner.png`,
    readTime: "4분",
  },
  {
    slug: "nbpkorea-iso-certification",
    category: "회사 소식",
    date: "2025.10.05",
    title: "ISO 9001 · ISO 14001 통합 인증 갱신 완료",
    excerpt:
      "NBP KOREA는 품질경영시스템(ISO 9001)과 환경경영시스템(ISO 14001) 인증을 성공적으로 갱신했습니다. 글로벌 기준에 부합하는 품질과 환경 경영 체계를 지속 유지합니다.",
    image: `${S3}/images/service-combustion.png`,
    readTime: "3분",
  },
  {
    slug: "cto-semiconductor-application",
    category: "기술 인사이트",
    date: "2025.09.14",
    title: "반도체 공정 VOCs 처리, CTO의 역할과 선택 기준",
    excerpt:
      "반도체·디스플레이 제조 공정에서 발생하는 VOCs 및 악취 물질 처리를 위한 촉매연소산화설비(CTO)의 원리, 설계 포인트, 실제 적용 사례를 정리합니다.",
    image: `${S3}/images/service-environment.png`,
    readTime: "6분",
  },
  {
    slug: "midco-partnership-20years",
    category: "파트너십",
    date: "2025.08.22",
    title: "MIDCO International과 기술 제휴 18주년",
    excerpt:
      "2007년부터 이어온 미국 MIDCO International과의 기술 파트너십을 조명합니다. 글로벌 연소 기술을 국내 산업 현장에 최적화하는 협력의 성과를 되돌아봅니다.",
    image: `${S3}/images/hero1.png`,
    readTime: "4분",
  },
  {
    slug: "hybrid-dehumidifier-paint-booth",
    category: "제품 소식",
    date: "2025.07.30",
    title: "하이브리드 제습기, 자동차 도장 부스 적용 확대",
    excerpt:
      "BMW·아우디·기아 협력사 도장 라인에 적용된 NBP KOREA 하이브리드 제습기의 성능과 에너지 절감 효과를 소개합니다.",
    image: `${S3}/images/service-combustion.png`,
    readTime: "5분",
  },
];

const categories = ["전체", "기술 인사이트", "제품 소식", "회사 소식", "파트너십"];

function PostCard({ post, index }: { post: typeof posts[0]; index: number }) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
    <Link
      href={`/news/${post.slug}`}
      className="group block"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#DCE2E8] mb-5">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#2d2a28]/0 group-hover:bg-[#2d2a28]/10 transition-all duration-500" />
        <span className="absolute top-4 left-4 text-[10px] tracking-[0.15em] uppercase bg-[#F5F7F8]/90 text-[#C05010] px-3 py-1">
          {post.category}
        </span>
      </div>
      <div>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[11px] tracking-[0.1em] text-[#8B95A1]">{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-[#C8D0DA]" />
          <span className="text-[11px] tracking-[0.1em] text-[#8B95A1]">읽기 {post.readTime}</span>
        </div>
        <h3 className="text-base tracking-[0.05em] text-[#2d2a28] font-medium mb-2 leading-snug group-hover:text-[#C05010] transition-colors duration-300">
          {post.title}
        </h3>
        <p className="text-sm text-[#8B95A1] leading-[1.8] line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center gap-2 mt-4 text-[11px] tracking-[0.15em] uppercase text-[#2d2a28]/50 group-hover:text-[#C05010] transition-colors duration-300">
          <span>Read More</span>
          <svg width="14" height="6" viewBox="0 0 14 6" fill="none" className="transition-transform group-hover:translate-x-1">
            <path d="M0 3H13M13 3L10 1M13 3L10 5" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>
      </div>
    </Link>
    </div>
  );
}

export default function NewsPage() {
  return (
    <SubpageLayout
      title="NBP / NEWS"
      subtitle="NBP KOREA의 기술 인사이트, 제품 소식, 파트너십 업데이트를 전합니다"
      breadcrumb={[{ label: "NBP/NEWS", href: "/news" }]}
    >
      {/* Category Filter */}
      <section className="px-6 md:px-12 pt-12 pb-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`text-[11px] tracking-[0.15em] uppercase px-4 py-2 border transition-all duration-300 ${
                  cat === "전체"
                    ? "border-[#2d2a28] bg-[#2d2a28] text-[#F5F7F8]"
                    : "border-[#D4DAE2] text-[#8B95A1] hover:border-[#C05010] hover:text-[#C05010]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {posts.map((post, index) => (
              <PostCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider marquee */}
      <div className="overflow-hidden py-8 border-y border-[#D4DAE2] mb-0">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="flex-shrink-0 text-[clamp(1.5rem,3vw,2.5rem)] font-light tracking-[0.3em] text-[#D4DAE2] uppercase mr-12">
              NBP KOREA IS ALWAYS NEXT TO YOU FOR BUSINESS
              <span className="mx-6 text-[#DCE2E8]">✦</span>
            </span>
          ))}
        </div>
      </div>
    </SubpageLayout>
  );
}
