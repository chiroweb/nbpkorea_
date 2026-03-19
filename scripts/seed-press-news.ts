/**
 * 언론 보도 기사 21건 삽입 스크립트
 * Run: NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... npx tsx scripts/seed-press-news.ts
 * Or:  npx dotenv -e .env.local -- npx tsx scripts/seed-press-news.ts
 */
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";
const DEFAULT_IMG = `${S3}/images/service-environment.png`;

const pressArticles = [
  {
    slug: "press-nbpkorea-rto-rco-market-2021",
    category: "언론 보도",
    date: "2021.02.23",
    title: "㈜엔비피코리아, RTO와 RCO 시장 확대 박차",
    excerpt: "산업용 환경설비 전문제작업체 엔비피코리아가 축열식 연소산화장치(RTO)와 촉매 연소산화장치(RCO) 시장 확대에 집중하고 있다. 두 장치 모두 환경부가 지정한 효과적인 대기오염 방지기술이다.",
    image_url: DEFAULT_IMG,
    read_time: "3분",
    is_published: true,
    content: [
      { type: "p", text: "산업용 환경설비 전문제작업체 엔비피코리아(대표 최혁순)가 축열식 연소산화장치(RTO, Regenerative Thermal Oxidizer)와 촉매연소산화장치(RCO, Regenerative Catalytic Oxidizer) 시장 확대에 박차를 가하고 있다." },
      { type: "p", text: "RTO와 RCO는 환경부가 지정한 효과적인 대기오염 방지기술로, 산업 현장에서 발생하는 휘발성유기화합물(VOCs) 및 악취를 고온 연소 또는 촉매 반응을 통해 처리하는 장치다." },
      { type: "p", text: "엔비피코리아는 RTO·RCO 핵심 기술을 자체 보유하고 있으며, 조선소·도장 공장·화학 공장·식품 공장 등 다양한 산업 현장에 설비를 공급해 왔다." },
      { type: "p", text: "출처: 가스신문 (2021.02.23)" },
    ],
  },
  {
    slug: "press-nbpkorea-livestock-odor-rto-2021",
    category: "언론 보도",
    date: "2021.07.28",
    title: "엔비피코리아, RTO로 가축분뇨 악취 완벽 제거",
    excerpt: "산업용 대기오염방지시설 전문제작업체 엔비피코리아가 RTO(축열식연소산화장치)를 도계장과 가축분뇨 처리에 활용해 악취 제거 성과를 거두고 있다.",
    image_url: DEFAULT_IMG,
    read_time: "3분",
    is_published: true,
    content: [
      { type: "p", text: "산업용 대기오염방지시설 전문제작업체 엔비피코리아(대표 최혁순)가 RTO(Regenerative Thermal Oxidizer, 축열식연소산화장치)를 활용해 도계장·가축분뇨 처리시설의 악취를 완벽 제거하고 있다." },
      { type: "p", text: "가축분뇨 처리 과정에서는 암모니아, 황화수소, 메틸메르캅탄 등 강한 악취 성분이 다량 발생한다. 엔비피코리아의 RTO는 850℃ 이상의 고온에서 이들 성분을 완전 산화 분해해 무해한 CO₂와 수증기로 전환한다." },
      { type: "p", text: "출처: 가스신문 (2021.07.28)" },
    ],
  },
  {
    slug: "press-nbpkorea-ceo-education-award-2021",
    category: "언론 보도",
    date: "2021.02.15",
    title: "엔비피코리아 최혁순 대표, 교육부장관 표창장 수상",
    excerpt: "엔비피코리아의 최혁순 대표이사가 사회맞춤형 산학협력 선도전문대학(LINC+) 육성 발전에 기여한 공로로 교육부장관 표창장을 수상했다.",
    image_url: DEFAULT_IMG,
    read_time: "2분",
    is_published: true,
    content: [
      { type: "p", text: "엔비피코리아(대표 최혁순)의 최혁순 대표이사가 사회맞춤형 산학협력 선도전문대학(LINC+) 육성 발전에 기여한 공로로 교육부장관으로부터 표창장을 수상했다." },
      { type: "p", text: "최혁순 대표는 지역 산업체와 대학 간의 산학협력 활성화에 적극 참여하고, 청년 인재 양성에 기여한 점을 높이 인정받았다." },
      { type: "p", text: "출처: 가스신문 (2021.02.15)" },
    ],
  },
  {
    slug: "press-nbpkorea-strong-sme-2019",
    category: "언론 보도",
    date: "2019.07.29",
    title: "[강소기업] 엔비피코리아 — 직화식연소장치로 산업 미세먼지 저감",
    excerpt: "직화식연소장치(RTO)로 산업용 미세먼지 저감을 이루고 있는 엔비피코리아는 국내 커피로스팅 에프터버너 대표기업으로도 이름을 알리고 있다.",
    image_url: DEFAULT_IMG,
    read_time: "4분",
    is_published: true,
    content: [
      { type: "p", text: "직화식연소장치(RTO)로 산업용 미세먼지 저감에 앞장서는 엔비피코리아(대표 최혁순)가 강소기업으로 주목받고 있다." },
      { type: "p", text: "엔비피코리아는 커피 로스팅 과정에서 발생하는 연기와 악취를 제거하는 에프터버너(AfterBurner) 분야에서도 국내 대표 기업으로 자리매김했다. 국내 유명 커피 프랜차이즈와 대형 로스터리 카페 등에 에프터버너를 납품하고 있다." },
      { type: "p", text: "출처: 투데이에너지 (2019.07.29)" },
    ],
  },
  {
    slug: "press-nbpkorea-rto-seminar-2019",
    category: "언론 보도",
    date: "2019.06.24",
    title: "엔비피코리아, 직화식연소장치(RTO) 소개 세미나 호평",
    excerpt: "엔비피코리아가 경기과학기술대학교 세미나에서 직화식연소장치(RTO)를 소개해 호평을 받았다. 중소형 사업장에 적합한 컴팩트 설비로 산업용 대기오염 방지에 활용된다.",
    image_url: DEFAULT_IMG,
    read_time: "2분",
    is_published: true,
    content: [
      { type: "p", text: "엔비피코리아가 경기과학기술대학교에서 개최된 환경설비 세미나에서 자사의 직화식연소장치(RTO)를 소개해 참가자들로부터 호평을 받았다." },
      { type: "p", text: "엔비피코리아의 RTO는 중소형 사업장의 설치 공간과 예산에 맞게 컴팩트하게 설계된 것이 특징으로, 조선소·도장 공장·식품 공장 등 다양한 현장에 적용되어 있다." },
      { type: "p", text: "출처: 가스신문 (2019.06.24)" },
    ],
  },
  {
    slug: "press-nbpkorea-environment-specialist-2018",
    category: "언론 보도",
    date: "2018.11.21",
    title: "(주)엔비피코리아, 환경설비·방지시설 전문업체로 거듭난다",
    excerpt: "산업용 연소설비 전문제작업체인 엔비피코리아가 자체 사옥과 공장을 마련하며 환경설비·대기오염 방지시설 전문업체로 도약을 선언했다.",
    image_url: DEFAULT_IMG,
    read_time: "3분",
    is_published: true,
    content: [
      { type: "p", text: "산업용 연소설비 전문제작업체 엔비피코리아(대표 최혁순)가 경기도 안산시에 신규 공장을 구축하며 환경설비·대기오염 방지시설 전문업체로의 도약을 본격화하고 있다." },
      { type: "p", text: "새 공장 이전을 계기로 RTO, RCO, CTO 등 대기오염 방지시설 라인업을 확대하고, 환경부 인증 장치 중심의 사업 구조로 전환해 나간다는 방침이다." },
      { type: "p", text: "출처: 가스신문 (2018.11.21)" },
    ],
  },
  {
    slug: "press-nbpkorea-metal-fiber-burner-dev-2017",
    category: "언론 보도",
    date: "2017.03.01",
    title: "엔비피코리아, 고효율 메탈화이버버너 국내 최초 개발",
    excerpt: "엔비피코리아가 메탈화이버버너를 적용한 강제혼합식 가스버너를 국내 최초로 개발해 한국가스안전공사 설계단계검사 합격을 받았다.",
    image_url: `${S3}/images/service-burner.png`,
    read_time: "3분",
    is_published: true,
    content: [
      { type: "p", text: "엔비피코리아(대표 최혁순)가 메탈화이버버너를 적용한 강제혼합식 가스버너를 국내 최초로 개발해 한국가스안전공사로부터 설계단계검사 합격 판정을 받았다." },
      { type: "p", text: "메탈화이버버너는 금속 섬유로 제작된 다공성 연소면에서 연소가 이루어져 균일한 화염 분포와 낮은 NOx 배출을 동시에 실현한다. 기존 버너 대비 에너지 효율이 30% 이상 높다." },
      { type: "p", text: "출처: 가스신문 (2017.03.01)" },
    ],
  },
  {
    slug: "press-nbpkorea-fine-dust-2017",
    category: "언론 보도",
    date: "2017.02.16",
    title: "엔비피코리아, \"미세먼지, 우리 손에 달렸죠\"",
    excerpt: "친환경 연소 설비 전문업체 엔비피코리아의 최혁순 대표가 커피 로스팅 악취·연기 문제를 애프터버너로 해결하며 미세먼지 저감에 기여하고 있다.",
    image_url: DEFAULT_IMG,
    read_time: "3분",
    is_published: true,
    content: [
      { type: "p", text: "친환경 연소 설비 전문 업체 엔비피코리아의 최혁순 대표는 \"미세먼지 저감은 대기업만의 문제가 아니다\"라며 중소 사업장에서도 실천할 수 있는 해법을 제시하고 있다." },
      { type: "p", text: "엔비피코리아의 에프터버너는 커피 로스팅 과정에서 발생하는 연기와 악취를 LNG·LPG 화염으로 완전 연소시켜 배출한다. 기존 대비 미세먼지 90% 이상 저감 효과가 검증됐다." },
      { type: "p", text: "출처: 머니투데이 (2017.02.16)" },
    ],
  },
  {
    slug: "press-nbpkorea-multi-hwadeok-2017",
    category: "언론 보도",
    date: "2017.05.24",
    title: "엔비피코리아, 프리미엄 멀티 화덕 출시",
    excerpt: "엔비피코리아가 고효율 메탈화이버버너를 적용한 프리미엄 멀티 화덕을 개발·출시했다. 피자·바비큐·생선구이 등 다양한 조리가 가능하며 복사열이 우수하다.",
    image_url: `${S3}/images/service-burner.png`,
    read_time: "2분",
    is_published: true,
    content: [
      { type: "p", text: "엔비피코리아(대표 최혁순)가 고효율 메탈화이버버너를 적용한 프리미엄 멀티 화덕을 개발해 보급에 나섰다." },
      { type: "p", text: "이 화덕은 피자, 바비큐, 생선구이 등 다양한 요리를 빠르게 조리할 수 있으며, 메탈화이버버너 특유의 균일한 복사열로 음식을 고르게 익힐 수 있다." },
      { type: "p", text: "출처: 가스신문 (2017.05.24)" },
    ],
  },
  {
    slug: "press-nbpkorea-tech-innovation-award-2016",
    category: "언론 보도",
    date: "2016.12.27",
    title: "대명콘스텍·엔비피코리아·한그린테크·종이없는벽지, 기술혁신대상 수상",
    excerpt: "머니투데이 주최 2016 대한민국 기업대상에서 엔비피코리아가 기술혁신대상을 수상했다. 환경설비 기술 혁신으로 산업 발전에 기여한 공로를 인정받았다.",
    image_url: DEFAULT_IMG,
    read_time: "2분",
    is_published: true,
    content: [
      { type: "p", text: "머니투데이가 주최한 2016 대한민국 기업대상 시상식에서 엔비피코리아(대표 최혁순)가 기술혁신대상을 수상했다." },
      { type: "p", text: "엔비피코리아는 산업용 연소·환경설비 기술의 자체 개발과 특허 등록을 통해 국내 환경설비 산업 발전에 기여한 공로를 인정받았다." },
      { type: "p", text: "출처: 머니투데이 (2016.12.27)" },
    ],
  },
  {
    slug: "press-nbpkorea-coffee-expo-afterburner-2016",
    category: "언론 보도",
    date: "2016.01.20",
    title: "[서울커피엑스포] 로스팅 연기 제거하는 애프터버너, 엔비피코리아",
    excerpt: "2016 서울커피엑스포에 참가한 엔비피코리아가 커피 로스팅 시 발생하는 모든 연기를 제거하는 애프터버너를 선보여 주목받았다.",
    image_url: DEFAULT_IMG,
    read_time: "2분",
    is_published: true,
    content: [
      { type: "p", text: "2016 서울커피엑스포에 참가한 엔비피코리아(대표 최혁순)가 커피 로스팅 과정에서 발생하는 연기와 악취를 완전 제거하는 애프터버너를 선보여 참관객들의 큰 관심을 끌었다." },
      { type: "p", text: "엔비피코리아의 애프터버너는 LNG·LPG 화염으로 로스팅 배기가스를 800℃ 이상 고온에서 완전 연소시켜 연기와 냄새를 제거한다. 도심 카페·로스터리에 적합한 컴팩트 설계가 특징이다." },
      { type: "p", text: "출처: 에이빙(AVING) (2016.01)" },
    ],
  },
  {
    slug: "press-nbpkorea-metal-fiber-heater-patent-2015",
    category: "언론 보도",
    date: "2015.12.23",
    title: "엔비피코리아, 메탈화이버 가스히터 특허 등록",
    excerpt: "엔비피코리아가 메탈화이버 버너를 적용한 가스히터를 개발해 특허청으로부터 특허등록(제10-1576930호)을 받았다.",
    image_url: `${S3}/images/service-burner.png`,
    read_time: "2분",
    is_published: true,
    content: [
      { type: "p", text: "엔비피코리아(대표 최혁순)가 메탈화이버 버너를 적용한 가스히터를 개발해 특허청으로부터 특허등록(제10-1576930호)을 받았다." },
      { type: "p", text: "이 가스히터는 메탈화이버 버너의 복사열을 활용한 간접 가열 방식으로, 열효율이 기존 대류 방식 히터 대비 30% 이상 우수하다. 조선소·자동차 공장의 도장 공정 건조에 최적화된 제품이다." },
      { type: "p", text: "출처: 가스신문 (2015.12.23)" },
    ],
  },
  {
    slug: "press-nbpkorea-energy-saving-2014",
    category: "언론 보도",
    date: "2014.11.19",
    title: "에너지절감 앞장서는 (주)엔비피코리아",
    excerpt: "산업용 직화식 가스히터를 전문으로 제작·보급하는 엔비피코리아가 지난 5년간 219대의 고효율 히터를 조선소·자동차 공장에 공급하며 에너지 절감을 이끌고 있다.",
    image_url: DEFAULT_IMG,
    read_time: "3분",
    is_published: true,
    content: [
      { type: "p", text: "산업용 직화식 가스히터를 전문으로 제작·보급하는 엔비피코리아(대표 최혁순)가 에너지 절감 분야 대표 기업으로 부상하고 있다." },
      { type: "p", text: "창업 이후 5년간 219대의 고효율 직화식 가스히터를 국내 주요 조선소와 자동차 공장에 보급하며 산업 현장의 에너지 효율화에 기여해 왔다." },
      { type: "p", text: "출처: 가스신문 (2014.11.19)" },
    ],
  },
  {
    slug: "press-nbpkorea-afterburner-planning-2014",
    category: "언론 보도",
    date: "2014.08.01",
    title: "[기획] 연기·먼지·냄새 제거하는 '애프터버너' — LNG·LPG 완전연소로 깨끗하게",
    excerpt: "LNG·LPG로 연기와 냄새를 완전 연소시키는 애프터버너의 원리와 엔비피코리아의 적용 사례를 소개한다.",
    image_url: DEFAULT_IMG,
    read_time: "4분",
    is_published: true,
    content: [
      { type: "p", text: "애프터버너는 산업 공정에서 발생하는 연기, 분진, 악취를 LNG 또는 LPG 화염으로 2차 연소시켜 제거하는 장치다." },
      { type: "p", text: "엔비피코리아는 커피 로스팅, 식품 가공, 도장 공정 등 다양한 분야에 애프터버너를 공급하고 있으며, 소형·컴팩트 모델부터 대형 산업용까지 라인업을 갖추고 있다." },
      { type: "p", text: "출처: 기획 기사" },
    ],
  },
  {
    slug: "press-nbpkorea-ceo-interview-best-product",
    category: "언론 보도",
    date: "2018.06.01",
    title: "[인터뷰] 엔비피코리아 최혁순 대표이사 \"고객에게 신뢰받는 길은 최고의 제품 개발\"",
    excerpt: "최혁순 대표이사가 창업 철학과 기술 개발 방향에 대해 밝혔다. \"고객 현장의 문제를 해결하는 제품을 만드는 것이 우리의 사명\"이라고 강조했다.",
    image_url: DEFAULT_IMG,
    read_time: "4분",
    is_published: true,
    content: [
      { type: "p", text: "엔비피코리아(대표 최혁순) 최혁순 대표이사는 \"고객에게 신뢰받는 길은 오직 최고의 제품 개발뿐\"이라고 강조했다." },
      { type: "p", text: "최 대표는 2006년 창업 이래 산업용 연소설비와 환경설비 분야에서 꾸준히 자체 기술을 개발해 현재 19건의 특허를 보유하고 있다. \"현장의 문제를 가장 잘 아는 사람이 최고의 제품을 만들 수 있다\"는 철학으로 고객사 현장을 직접 방문해 맞춤 솔루션을 제공하고 있다." },
      { type: "p", text: "출처: 인터뷰 기사" },
    ],
  },
  {
    slug: "press-nbpkorea-founding-story-todayenergy",
    category: "언론 보도",
    date: "2013.05.01",
    title: "[창간특집] 엔비피코리아 — 산업 현장의 에너지와 환경을 함께 잡다",
    excerpt: "투데이에너지 창간특집 기획인터뷰에서 엔비피코리아의 창업 스토리와 주력 제품, 기술 개발 방향을 소개했다.",
    image_url: DEFAULT_IMG,
    read_time: "4분",
    is_published: true,
    content: [
      { type: "p", text: "투데이에너지 창간특집으로 소개된 엔비피코리아(대표 최혁순)는 2006년 경기도 안산에서 창업해 산업용 연소설비 전문기업으로 성장해 왔다." },
      { type: "p", text: "엔비피코리아는 미국 MIDCO International과의 기술 제휴를 통해 글로벌 수준의 연소 기술을 국내 산업 현장에 보급하고, 동시에 자체 금속화이버 버너 기술을 개발해 특허 포트폴리오를 쌓아 왔다." },
      { type: "p", text: "출처: 투데이에너지 (창간특집)" },
    ],
  },
  {
    slug: "press-nbpkorea-gas-collector-mou-city-gas",
    category: "언론 보도",
    date: "2019.03.01",
    title: "도시가스협회-엔비피코리아-거화산업, '가스집진기 보급확대 MOU' 체결",
    excerpt: "한국도시가스협회와 엔비피코리아, 거화산업이 가스집진기 보급 확대를 위한 업무협약(MOU)을 체결했다. 도심 사업장의 분진 저감에 기여할 것으로 기대된다.",
    image_url: DEFAULT_IMG,
    read_time: "2분",
    is_published: true,
    content: [
      { type: "p", text: "한국도시가스협회와 엔비피코리아(대표 최혁순), 거화산업이 가스집진기 보급 확대를 위한 업무협약(MOU)을 체결했다." },
      { type: "p", text: "이번 협약으로 도심 내 소규모 사업장의 분진 및 미세먼지 저감을 위한 가스집진기 도입이 활성화될 것으로 기대된다. 엔비피코리아는 자사 연소 기술을 집진 설비에 접목해 고효율 가스집진기를 공급할 예정이다." },
      { type: "p", text: "출처: 전기신문" },
    ],
  },
  {
    slug: "press-nbpkorea-gas-product-permit",
    category: "언론 보도",
    date: "2016.05.01",
    title: "엔비피코리아, 가스용품 제조업 허가 취득",
    excerpt: "엔비피코리아가 가스용품 제조업 허가를 취득하며 자체 브랜드 가스 기기 생산·판매의 법적 기반을 마련했다.",
    image_url: DEFAULT_IMG,
    read_time: "2분",
    is_published: true,
    content: [
      { type: "p", text: "엔비피코리아(대표 최혁순)가 가스용품 제조업 허가를 취득했다고 밝혔다." },
      { type: "p", text: "이번 허가 취득으로 엔비피코리아는 메탈화이버버너, 가스히터 등 자체 개발 가스 기기를 자사 브랜드로 생산·판매할 수 있는 법적 기반을 확보하게 됐다." },
      { type: "p", text: "출처: 가스신문" },
    ],
  },
  {
    slug: "press-nbpkorea-rto-direct-fire-fine-dust",
    category: "언론 보도",
    date: "2019.10.01",
    title: "엔비피코리아, 직화연소 산업용 미세먼지 잡아",
    excerpt: "엔비피코리아가 전시회 기획인터뷰에서 직화연소 방식의 RTO로 산업 현장 미세먼지와 VOCs를 효과적으로 처리하는 기술을 소개했다.",
    image_url: DEFAULT_IMG,
    read_time: "3분",
    is_published: true,
    content: [
      { type: "p", text: "엔비피코리아(대표 최혁순)는 전시회 기획인터뷰에서 직화식 연소 방식의 RTO(축열식연소산화장치)로 산업 현장의 미세먼지와 VOCs를 효과적으로 처리하는 기술을 소개했다." },
      { type: "p", text: "엔비피코리아의 RTO는 850~950℃ 고온에서 오염물질을 완전 연소시키며, 축열재를 이용해 연소열을 회수해 재활용함으로써 에너지 비용을 대폭 절감한다." },
      { type: "p", text: "출처: 투데이에너지" },
    ],
  },
  {
    slug: "press-nbpkorea-rto-incinerator-2015",
    category: "언론 보도",
    date: "2015.06.01",
    title: "엔비피코리아, 축열식 소각로 제작·보급",
    excerpt: "엔비피코리아가 산업 폐기물 처리용 축열식 소각로를 제작·보급해 환경설비 라인업을 확대했다.",
    image_url: DEFAULT_IMG,
    read_time: "2분",
    is_published: true,
    content: [
      { type: "p", text: "엔비피코리아(대표 최혁순)가 산업 폐기물 및 유해가스 처리에 적합한 축열식 소각로를 제작·보급하며 환경설비 라인업을 확대했다." },
      { type: "p", text: "축열식 소각로는 소각 과정에서 발생하는 열을 축열재에 저장·재활용하므로 연료 소비를 크게 줄일 수 있다. 엔비피코리아는 자체 연소 기술을 소각로에 적용해 처리 효율을 극대화했다." },
      { type: "p", text: "출처: 가스신문" },
    ],
  },
  {
    slug: "press-nbpkorea-gas-saving-multi-hwadeok-2017",
    category: "언론 보도",
    date: "2017.04.01",
    title: "엔비피코리아, 가스비 절감 친환경 멀티화덕 출시",
    excerpt: "엔비피코리아가 메탈화이버버너를 적용한 가스비 절감형 친환경 멀티화덕을 출시했다. 기존 화덕 대비 가스 소비량을 30% 이상 줄였다.",
    image_url: `${S3}/images/service-burner.png`,
    read_time: "2분",
    is_published: true,
    content: [
      { type: "p", text: "엔비피코리아(대표 최혁순)가 자사 메탈화이버버너를 적용한 가스비 절감형 친환경 멀티화덕을 출시했다." },
      { type: "p", text: "이 멀티화덕은 기존 일반 버너 화덕 대비 가스 소비량을 30% 이상 절감하면서도 더 빠른 가열 속도와 균일한 복사열을 제공한다. 피자 전문점, 레스토랑, 식품 제조업체 등을 주요 타깃으로 한다." },
      { type: "p", text: "출처: 머니투데이" },
    ],
  },
  {
    slug: "press-nbpkorea-michedust-direct-combustion-2019",
    category: "언론 보도",
    date: "2019.11.01",
    title: "엔비피코리아, 직화연소 산업용 미세먼지 잡아 — 전시회 기획인터뷰",
    excerpt: "엔비피코리아가 산업 전시회에서 직화연소 RTO 기술을 소개하며 산업 현장 미세먼지 저감의 실질적 해법을 제시했다.",
    image_url: DEFAULT_IMG,
    read_time: "3분",
    is_published: true,
    content: [
      { type: "p", text: "엔비피코리아(대표 최혁순)는 산업 전시회 기획인터뷰에서 직화연소 방식 RTO를 통한 산업 현장 미세먼지 저감 방안을 상세히 소개했다." },
      { type: "p", text: "최혁순 대표는 \"미세먼지의 상당 부분은 산업 공정에서 배출된다. 중소 사업장도 경제적으로 도입할 수 있는 컴팩트 RTO로 이 문제를 해결할 수 있다\"고 강조했다." },
      { type: "p", text: "출처: 투데이에너지 (전시회기획 기획인터뷰)" },
    ],
  },
];

async function main() {
  console.log(`Inserting ${pressArticles.length} press articles...`);
  const { data, error } = await supabase
    .from("news")
    .upsert(pressArticles, { onConflict: "slug" })
    .select();

  if (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
  console.log(`✓ Inserted/updated ${data?.length} press articles.`);
}

main();
