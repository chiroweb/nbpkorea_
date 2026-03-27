/**
 * Seed script: inserts the 6 hardcoded news articles into Supabase.
 * Run with: npx tsx scripts/seed-news.ts
 */
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

const news = [
  {
    slug: "rto-case-study-shipbuilding",
    category: "기술 인사이트",
    date: "2025.12.10",
    title: "RTO 시스템, 조선소 도장 공정 악취 처리의 해법",
    excerpt: "한화오션·HD현대미포 등 국내 주요 조선소에 납품된 RTO(축열식연소산화설비)의 적용 사례와 에너지 회수 효율을 분석합니다.",
    image_url: `${S3}/images/service-environment.png`,
    read_time: "5분",
    is_published: true,
    content: [
      { type: "h2", text: "조선소 도장 공정과 VOCs 문제" },
      { type: "p", text: "선박 블록 도장 과정에서 발생하는 휘발성유기화합물(VOCs)과 복합 악취는 작업자 건강과 주변 환경에 직접적인 영향을 미칩니다. 국내 조선업 특성상 대형 밀폐 공간에서의 도장 작업이 많아 고농도 VOCs 처리 장치가 필수적입니다." },
      { type: "h2", text: "NBPKOREA의 RTO 적용 사례" },
      { type: "p", text: "NBPKOREA는 한화오션, HD현대미포조선 등 국내 주요 조선소의 도장 블록 작업장에 축열식연소산화장치(RTO)를 공급했습니다. 당사 RTO는 축열재를 이용해 연소열을 회수, 자체 연료 소비를 최소화하면서 VOCs 처리 효율 99% 이상을 실현합니다." },
      { type: "h3", text: "주요 성능 지표" },
      { type: "ul", items: ["VOCs 처리 효율: 99% 이상", "열 회수 효율: 95% 이상", "연료 절감: 기존 TO 대비 60~70%", "적용 풍량: 10,000~400,000 CMM"] },
      { type: "h2", text: "에너지 절감 효과" },
      { type: "p", text: "RTO의 핵심 경쟁력은 열 회수입니다. 연소 시 발생한 고온 가스를 축열재(세라믹 허니콤)에 저장하고, 다음 처리 사이클의 예열에 활용함으로써 추가 연료 투입 없이도 안정적인 연소 온도를 유지할 수 있습니다." },
      { type: "p", text: "실제 납품 현장에서는 기존 직접 연소 방식 대비 연간 수억 원의 연료비 절감이 확인됐으며, 설비 투자비 회수 기간은 평균 2~3년 수준으로 집계됐습니다." },
      { type: "h2", text: "문의 및 상담" },
      { type: "p", text: "VOCs 처리 설비 도입을 검토 중이라면 NBPKOREA 기술팀에 문의하세요. 현장 조건에 맞는 최적 사양을 제안해 드립니다." },
    ],
  },
  {
    slug: "metal-fiber-burner-nox-reduction",
    category: "제품 소식",
    date: "2025.11.20",
    title: "NBP-MB 메탈버너, NOx 저감 30% 달성 검증",
    excerpt: "자체 개발 메탈버너 NBP-MB 시리즈의 연소 시험 결과를 공개합니다. 기존 버너 대비 NOx 30% 이상 저감, 에너지 효율 30% 향상이 현장에서 검증됐습니다.",
    image_url: `${S3}/images/service-burner.png`,
    read_time: "4분",
    is_published: true,
    content: [
      { type: "h2", text: "메탈버너란" },
      { type: "p", text: "메탈버너는 금속 섬유로 제작된 다공성 매체에서 연소가 이루어지는 방식으로, 균등한 화염 분포와 낮은 연소 온도를 동시에 실현합니다. 이 특성 덕분에 고온에서 생성되는 질소산화물(NOx) 발생을 원천적으로 억제할 수 있습니다." },
      { type: "h2", text: "NBP-MB 시험 결과 요약" },
      { type: "ul", items: ["NOx 배출 저감: 기존 버너 대비 30% 이상", "에너지 효율 향상: 30% 이상", "적외선 복사열 활용으로 피가열체 직접 가열", "균등 연소로 제품 품질 편차 최소화"] },
      { type: "h2", text: "적용 가능 분야" },
      { type: "p", text: "NBP-MB는 산업용 건조로, 열처리로, 도장 건조 시스템, 식품 가공 설비 등 다양한 산업에 적용할 수 있으며, 소형 버너(NBP-SMB)는 컴팩트한 공간에도 설치가 용이합니다." },
    ],
  },
  {
    slug: "NBPKOREA-iso-certification",
    category: "회사 소식",
    date: "2025.10.05",
    title: "ISO 9001 · ISO 14001 통합 인증 갱신 완료",
    excerpt: "NBPKOREA는 품질경영시스템(ISO 9001)과 환경경영시스템(ISO 14001) 인증을 성공적으로 갱신했습니다. 글로벌 기준에 부합하는 품질과 환경 경영 체계를 지속 유지합니다.",
    image_url: `${S3}/images/service-combustion.png`,
    read_time: "3분",
    is_published: true,
    content: [
      { type: "h2", text: "인증 갱신 개요" },
      { type: "p", text: "NBPKOREA는 2025년 10월 ISO 9001(품질경영) 및 ISO 14001(환경경영) 통합 인증을 성공적으로 갱신했습니다." },
    ],
  },
  {
    slug: "cto-semiconductor-application",
    category: "기술 인사이트",
    date: "2025.09.14",
    title: "반도체 공정 VOCs 처리, CTO의 역할과 선택 기준",
    excerpt: "반도체·디스플레이 제조 공정에서 발생하는 VOCs 및 악취 물질 처리를 위한 촉매연소산화설비(CTO)의 원리, 설계 포인트, 실제 적용 사례를 정리합니다.",
    image_url: `${S3}/images/service-environment.png`,
    read_time: "6분",
    is_published: true,
    content: [
      { type: "h2", text: "CTO란 무엇인가" },
      { type: "p", text: "촉매연소산화설비(CTO)는 촉매를 활용해 저온에서도 VOCs를 효율적으로 산화 분해하는 장치입니다. 반도체·디스플레이 공정에서 특히 효과적입니다." },
    ],
  },
  {
    slug: "midco-partnership-20years",
    category: "파트너십",
    date: "2025.08.22",
    title: "MIDCO International과 기술 제휴 18주년",
    excerpt: "2007년부터 이어온 미국 MIDCO International과의 기술 파트너십을 조명합니다. 글로벌 연소 기술을 국내 산업 현장에 최적화하는 협력의 성과를 되돌아봅니다.",
    image_url: `${S3}/images/hero1.png`,
    read_time: "4분",
    is_published: true,
    content: [
      { type: "h2", text: "MIDCO International 파트너십" },
      { type: "p", text: "NBPKOREA는 2007년부터 미국 MIDCO International과 기술 파트너십을 맺어 글로벌 연소 기술을 국내에 소개해 왔습니다." },
    ],
  },
  {
    slug: "hybrid-dehumidifier-paint-booth",
    category: "제품 소식",
    date: "2025.07.30",
    title: "하이브리드 제습기, 자동차 도장 부스 적용 확대",
    excerpt: "BMW·아우디·기아 협력사 도장 라인에 적용된 NBPKOREA 하이브리드 제습기의 성능과 에너지 절감 효과를 소개합니다.",
    image_url: `${S3}/images/service-combustion.png`,
    read_time: "5분",
    is_published: true,
    content: [
      { type: "h2", text: "하이브리드 제습기 개요" },
      { type: "p", text: "NBPKOREA 하이브리드 제습기는 BMW, 아우디, 기아 협력사 도장 라인에 납품되어 에너지 절감과 품질 향상을 동시에 실현했습니다." },
    ],
  },
];

async function main() {
  console.log("Seeding news...");
  const { data, error } = await supabase.from("news").upsert(news, { onConflict: "slug" }).select();
  if (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
  console.log(`Inserted/updated ${data?.length} news articles.`);
}

main();
