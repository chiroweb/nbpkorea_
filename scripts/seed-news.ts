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
const ENV_RTO = `${S3}/images/%ED%99%98%EA%B2%BD%EC%82%AC%EC%97%85%EB%B6%80/Business%20Area/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EC%9A%A9%20RTO%20%EB%A0%8C%EB%8D%94%EB%A7%81-nowatermark.jpg`;
const ENV_CTO = `${S3}/images/%ED%99%98%EA%B2%BD%EC%82%AC%EC%97%85%EB%B6%80/Environment%20Business%20Division/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EC%9A%A9%20CTO%20%EB%A0%8C%EB%8D%94%EB%A7%81-nowatermark.jpg`;

const news = [
  {
    slug: "rto-case-study-shipbuilding",
    category: "기술 인사이트",
    date: "2025.12.10",
    title: "RTO 시스템, 조선소 도장 공정 악취 처리의 해법",
    excerpt: "한화오션·HD현대미포 등 국내 주요 조선소에 납품된 RTO(축열식연소산화설비)의 적용 사례와 에너지 회수 효율을 분석합니다.",
    image_url: ENV_RTO,
    read_time: "5분",
    is_published: true,
    content: [
      { type: "h2", text: "조선소 도장 공정과 VOCs 문제" },
      { type: "p", text: "선박 블록 도장 과정에서는 에폭시, 우레탄, 아크릴 등 유기 용제 기반 도료를 대량 사용합니다. 이 과정에서 톨루엔, 자일렌, 에틸벤젠 등 휘발성유기화합물(VOCs)이 고농도로 발생하며, 복합 악취와 함께 작업자 건강과 주변 환경에 직접적인 영향을 미칩니다." },
      { type: "p", text: "국내 조선업 특성상 수십 미터 규모의 대형 밀폐 블록 내부에서 도장 작업이 이루어지기 때문에, 환기만으로는 VOCs 농도를 기준치 이하로 낮추기 어렵습니다. 환경부의 대기오염 배출 규제가 강화되면서 고효율 VOCs 처리 장치 도입이 사실상 필수가 됐습니다." },
      { type: "h2", text: "RTO의 작동 원리" },
      { type: "p", text: "축열식연소산화장치(RTO, Regenerative Thermal Oxidizer)는 VOCs 함유 배기가스를 800~950℃ 고온에서 산화 분해하는 장치입니다. 핵심은 세라믹 허니콤 축열재입니다. 연소 과정에서 발생한 고온 가스가 축열재를 통과하면서 열을 저장하고, 다음 사이클에서 유입 가스를 예열하는 데 이 열을 재사용합니다. 이 열교환 구조 덕분에 열 회수 효율 95% 이상을 달성하며, 추가 연료 없이도 안정적인 연소 온도를 유지할 수 있습니다." },
      { type: "h2", text: "NBPKOREA의 조선소 RTO 적용 사례" },
      { type: "p", text: "NBPKOREA는 한화오션, HD현대미포조선 등 국내 주요 조선소의 도장 블록 작업장에 RTO를 공급해 왔습니다. 당사 RTO는 풍량 10,000~400,000 CMM까지 대응 가능하며, 현장 레이아웃에 맞춘 맞춤형 설계를 제공합니다. VOCs 처리 효율 99% 이상, 열 회수 효율 95% 이상을 실현하며, 기존 TO(직접연소) 방식 대비 연료 소비를 60~70% 절감합니다." },
      { type: "h3", text: "주요 성능 지표" },
      { type: "ul", items: ["VOCs 처리 효율: 99% 이상", "열 회수 효율: 95% 이상", "연료 절감: 기존 TO 대비 60~70%", "적용 풍량: 10,000~400,000 CMM", "운전 온도: 800~950℃"] },
      { type: "h2", text: "에너지 절감 효과와 투자 회수" },
      { type: "p", text: "RTO의 핵심 경쟁력은 에너지 비용 절감입니다. 축열재가 연소열을 저장·재활용하므로 보조 연료 투입을 최소화할 수 있습니다. 실제 조선소 납품 현장에서는 기존 직접 연소 방식 대비 연간 수억 원의 연료비 절감이 확인됐으며, 설비 투자비 회수 기간은 평균 2~3년 수준으로 집계됐습니다." },
      { type: "p", text: "특히 조선소처럼 가동 시간이 길고 배기가스 풍량이 큰 현장에서는 RTO의 에너지 절감 효과가 극대화됩니다. 축열재 교체 주기는 통상 7~10년으로, 장기적인 유지보수 비용도 낮은 편입니다." },
      { type: "h2", text: "설비 선정 시 고려 사항" },
      { type: "p", text: "RTO 도입 시에는 처리 풍량, VOCs 농도, 설치 공간, 운전 패턴(연속/간헐) 등을 종합적으로 검토해야 합니다. NBPKOREA는 현장 실측 데이터를 기반으로 최적 사양을 제안하며, 설계·제작·시공·시운전·사후관리까지 일괄 수행합니다. VOCs 처리 설비 도입을 검토 중이라면 기술팀에 문의하시기 바랍니다." },
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
    image_url: `${S3}/images/about/hq-front.jpg`,
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
    image_url: ENV_CTO,
    read_time: "6분",
    is_published: true,
    content: [
      { type: "h2", text: "CTO란 무엇인가" },
      { type: "p", text: "촉매연소산화설비(CTO, Catalytic Thermal Oxidizer)는 촉매층을 통과시켜 VOCs를 저온(250~400℃)에서 산화 분해하는 대기오염 방지 장치입니다. 일반 열산화 방식(TO)이 800℃ 이상의 고온을 필요로 하는 것과 달리, CTO는 촉매 반응을 이용해 산화 온도를 대폭 낮춤으로써 연료 소비를 크게 줄일 수 있습니다." },
      { type: "p", text: "반도체·디스플레이 제조 공정에서는 포토레지스트 도포, 식각, 세정 등 여러 단계에서 아세톤, IPA(이소프로필알코올), NMP, PGMEA 등 다양한 유기 용제가 사용됩니다. 이 과정에서 발생하는 VOCs는 농도와 성분이 공정별로 크게 달라, 처리 장치 선정 시 세밀한 검토가 필요합니다." },
      { type: "h2", text: "CTO의 작동 원리와 구조" },
      { type: "p", text: "CTO는 예열 챔버, 촉매층, 열교환기로 구성됩니다. VOCs 함유 배기가스는 예열 챔버에서 반응 온도까지 승온된 후, 귀금속(Pt, Pd) 또는 금속산화물 촉매층을 통과하면서 CO₂와 수증기로 분해됩니다. 반응 후 발생한 열은 열교환기를 통해 유입 가스 예열에 재사용되며, 이를 통해 에너지 효율을 극대화합니다." },
      { type: "p", text: "촉매의 종류와 배합은 처리 대상 VOCs의 성분에 따라 달라집니다. 할로겐 계열 용제가 포함된 경우 내부식성 촉매를, 실리콘 계열 성분이 있는 경우 피독 방지 설계를 적용해야 합니다. NBPKOREA는 공정 배기 성분 분석을 기반으로 최적의 촉매 사양을 선정합니다." },
      { type: "h2", text: "반도체 공정 적용 시 CTO의 장점" },
      { type: "ul", items: ["저온 운전(250~400℃)으로 연료비 절감 — TO 대비 40~60% 감소", "소·중풍량(1,000~50,000 CMH) 처리에 최적화", "촉매 반응으로 NOx 2차 생성 억제", "컴팩트한 설치 면적 — 클린룸 유틸리티 공간에 적합", "빠른 스타트업 시간 — 간헐 운전 공정에 유리"] },
      { type: "h2", text: "CTO vs RTO, 어떤 기준으로 선택하나" },
      { type: "p", text: "CTO와 RTO는 모두 VOCs를 열산화 분해하는 장치이지만, 적용 조건이 다릅니다. CTO는 소·중풍량, 저농도 VOCs 처리에 경제적이며 설치 면적이 작습니다. 반면 RTO는 대풍량, 중·고농도 VOCs 처리에 강점이 있고 열 회수 효율이 높습니다. 반도체 팹(fab)처럼 공정별 배기 특성이 다양한 현장에서는 CTO와 RTO를 구역별로 병행 적용하는 하이브리드 설계도 검토할 수 있습니다." },
      { type: "h2", text: "NBPKOREA의 CTO 설계 역량" },
      { type: "p", text: "NBPKOREA는 반도체·디스플레이·2차전지 공정 등 정밀 산업 현장에 CTO를 공급해 온 경험을 보유하고 있습니다. 배기 성분 분석부터 촉매 선정, 열교환 설계, 제작, 시공, 시운전까지 전 과정을 자체 수행하며, 현장 조건에 맞는 맞춤형 사양을 제안합니다. 설비 도입을 검토 중이라면 기술팀에 문의하시기 바랍니다." },
    ],
  },
  {
    slug: "midco-partnership-20years",
    category: "파트너십",
    date: "2025.08.22",
    title: "MIDCO International과 기술 제휴 18주년",
    excerpt: "2007년부터 이어온 미국 MIDCO International과의 기술 파트너십을 조명합니다. 글로벌 연소 기술을 국내 산업 현장에 최적화하는 협력의 성과를 되돌아봅니다.",
    image_url: `${S3}/images/combustion-site-hd.jpg`,
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
    title: "복합식 제습기, 자동차 도장 부스 적용 확대",
    excerpt: "BMW·아우디·기아 협력사 도장 라인에 적용된 NBPKOREA 복합식 제습기의 성능과 에너지 절감 효과를 소개합니다.",
    image_url: `${S3}/images/hvac/dehumidifier-marine.jpg`,
    read_time: "5분",
    is_published: true,
    content: [
      { type: "h2", text: "복합식 제습기 개요" },
      { type: "p", text: "NBPKOREA 복합식 제습기는 BMW, 아우디, 기아 협력사 도장 라인에 납품되어 에너지 절감과 품질 향상을 동시에 실현했습니다." },
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
