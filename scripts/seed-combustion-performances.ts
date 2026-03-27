/**
 * 기존 홈페이지 연소사업부 납품실적 데이터 삽입
 * Run: npx dotenv -e .env.local -- npx tsx scripts/seed-combustion-performances.ts
 */
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const S3 = "https://nbpkoreare.s3.ap-northeast-2.amazonaws.com/images/performances/old-site";

const performances = [
  // ── 직화식 가스히터 (bs_idx=12) ──
  {
    category: "combustion",
    title: "하이에어공조(주)",
    tags: ["직화식 가스히터", "NKGH"],
    specs: [
      { label: "제품", value: "직화식 가스히터" },
      { label: "용량", value: "400,000 Kcal/h" },
      { label: "내용", value: "납품 및 설치공사" },
    ],
    images: [`${S3}/idx12_14491349411.jpg`],
  },
  {
    category: "combustion",
    title: "STX건설(주)",
    tags: ["직화식 가스히터", "NKGH", "건설"],
    specs: [
      { label: "제품", value: "직화식 가스히터" },
      { label: "용량", value: "1,000,000 Kcal/h" },
      { label: "내용", value: "납품 및 설치공사" },
    ],
    images: [`${S3}/idx12_14491350671.jpg`],
  },
  {
    category: "combustion",
    title: "STX조선해양(주)",
    tags: ["직화식 가스히터", "NKGH", "조선"],
    specs: [
      { label: "제품", value: "직화식 가스히터" },
      { label: "용량", value: "400,000 Kcal/h" },
      { label: "내용", value: "납품 및 설치공사" },
    ],
    images: [`${S3}/idx12_14491352891.jpg`],
  },
  {
    category: "combustion",
    title: "STX대련(주)",
    tags: ["직화식 가스히터", "NKGH", "조선", "해외"],
    specs: [
      { label: "제품", value: "직화식 가스히터" },
      { label: "용량", value: "1,000,000 Kcal/h" },
      { label: "내용", value: "납품 및 설치공사" },
    ],
    images: [`${S3}/idx12_14491353391.jpg`],
  },
  {
    category: "combustion",
    title: "현대미포조선(주) - 직화식 400,000",
    tags: ["직화식 가스히터", "NKGH", "조선"],
    specs: [
      { label: "제품", value: "직화식 가스히터" },
      { label: "용량", value: "400,000 Kcal/h" },
      { label: "내용", value: "납품 및 설치공사" },
    ],
    images: [`${S3}/idx12_14491353981.jpg`],
  },
  {
    category: "combustion",
    title: "현대미포조선(주) - 직화식 1,000,000",
    tags: ["직화식 가스히터", "NKGH", "조선"],
    specs: [
      { label: "제품", value: "직화식 가스히터" },
      { label: "용량", value: "1,000,000 Kcal/h" },
      { label: "내용", value: "납품 및 설치공사" },
    ],
    images: [`${S3}/idx12_14491354491.jpg`],
  },
  {
    category: "combustion",
    title: "대선조선(주)",
    tags: ["직화식 가스히터", "NKGH", "조선"],
    specs: [
      { label: "제품", value: "직화식 가스히터" },
      { label: "용량", value: "400,000 Kcal/h" },
      { label: "내용", value: "납품 및 설치공사" },
    ],
    images: [`${S3}/idx12_14491356421.jpg`],
  },
  {
    category: "combustion",
    title: "(주)유일",
    tags: ["직화식 가스히터", "NKGH"],
    specs: [
      { label: "제품", value: "직화식 가스히터" },
      { label: "용량", value: "1,000,000 Kcal/h" },
      { label: "내용", value: "납품 및 설치공사" },
    ],
    images: [`${S3}/idx12_14491358401.jpg`],
  },
  {
    category: "combustion",
    title: "동국제강(주)",
    tags: ["직화식 가스히터", "NKGH", "중공업"],
    specs: [
      { label: "제품", value: "직화식 가스히터" },
      { label: "용량", value: "400,000 Kcal/h" },
      { label: "내용", value: "납품 및 설치공사" },
    ],
    images: [`${S3}/idx12_14491358911.jpg`],
  },
  {
    category: "combustion",
    title: "대한조선(주) - 직화식",
    tags: ["직화식 가스히터", "NKGH", "조선"],
    specs: [
      { label: "제품", value: "직화식 가스히터" },
      { label: "용량", value: "1,000,000 Kcal/h" },
      { label: "내용", value: "납품 및 설치공사" },
    ],
    images: [`${S3}/idx12_14491359861.jpg`],
  },
  {
    category: "combustion",
    title: "성동조선해양(주) - 직화식",
    tags: ["직화식 가스히터", "NKGH", "조선"],
    specs: [
      { label: "제품", value: "직화식 가스히터" },
      { label: "용량", value: "400,000 Kcal/h" },
      { label: "내용", value: "납품 및 설치공사" },
    ],
    images: [`${S3}/idx12_14695149791.jpg`],
  },
  {
    category: "combustion",
    title: "대우조선해양",
    tags: ["직화식 가스히터", "NKGH", "조선"],
    specs: [
      { label: "제품", value: "직화식 가스히터" },
      { label: "용량", value: "1,000,000 Kcal/h" },
      { label: "내용", value: "납품 및 설치공사" },
    ],
    images: [],
  },

  // ── 간접식 가스히터 (bs_idx=13) ──
  {
    category: "combustion",
    title: "현대미포조선(주) - 간접식",
    tags: ["간접식 가스히터", "NK-IDGH", "조선"],
    specs: [
      { label: "제품", value: "간접식 가스히터" },
      { label: "용량", value: "400,000 Kcal/h" },
      { label: "내용", value: "납품 및 설치공사" },
    ],
    images: [`${S3}/idx13_14491340491.jpg`],
  },
  {
    category: "combustion",
    title: "현대스틸산업(주)",
    tags: ["간접식 가스히터", "NK-IDGH", "중공업"],
    specs: [
      { label: "제품", value: "간접식 가스히터" },
      { label: "용량", value: "800,000 Kcal/h" },
      { label: "내용", value: "납품 및 설치공사" },
    ],
    images: [`${S3}/idx13_14491344911.jpg`],
  },
  {
    category: "combustion",
    title: "인흥산업(주)",
    tags: ["간접식 가스히터", "NK-IDGH"],
    specs: [
      { label: "제품", value: "간접식 가스히터" },
      { label: "용량", value: "200,000 Kcal/h" },
      { label: "내용", value: "납품 및 설치공사" },
    ],
    images: [`${S3}/idx13_14492091881.jpg`],
  },
  {
    category: "combustion",
    title: "대한조선(주) - 간접식",
    tags: ["간접식 가스히터", "NK-IDGH", "조선"],
    specs: [
      { label: "제품", value: "간접식 가스히터" },
      { label: "용량", value: "400,000 Kcal/h" },
      { label: "내용", value: "납품 및 설치공사" },
    ],
    images: [`${S3}/idx13_14492096431.jpg`],
  },
  {
    category: "combustion",
    title: "성동조선해양(주) - 간접식",
    tags: ["간접식 가스히터", "NK-IDGH", "조선"],
    specs: [
      { label: "제품", value: "간접식 가스히터" },
      { label: "용량", value: "400,000 Kcal/h" },
      { label: "내용", value: "납품 및 설치공사" },
    ],
    images: [],
  },

  // ── 복합식 제습기 (bs_idx=14) ──
  {
    category: "combustion",
    title: "국제금속(주)",
    tags: ["복합식 제습기", "NK-MDGH"],
    specs: [
      { label: "제품", value: "가스히터 복합제습기" },
      { label: "용량", value: "250,000 Kcal/h" },
      { label: "내용", value: "납품 및 설치공사" },
    ],
    images: [`${S3}/idx14_14491901021.jpg`],
  },
  {
    category: "combustion",
    title: "경주도장(주)",
    tags: ["복합식 제습기", "NK-MDGH"],
    specs: [
      { label: "제품", value: "가스히터 복합제습기" },
      { label: "용량", value: "400,000 Kcal/h" },
      { label: "내용", value: "납품 및 설치공사" },
    ],
    images: [`${S3}/idx14_14491952361.jpg`],
  },
  {
    category: "combustion",
    title: "(주)대원쇼트 - 제습기",
    tags: ["복합식 제습기", "NK-MDGH"],
    specs: [
      { label: "제품", value: "가스히터 복합제습기" },
      { label: "용량", value: "400,000 Kcal/h" },
      { label: "내용", value: "납품 및 설치공사" },
    ],
    images: [`${S3}/idx14_14491953511.jpg`],
  },
  {
    category: "combustion",
    title: "하이에어공조(주) - 제습기",
    tags: ["복합식 제습기", "NK-MDGH"],
    specs: [
      { label: "제품", value: "가스히터 복합제습기" },
      { label: "용량", value: "400,000 Kcal/h" },
      { label: "내용", value: "납품 및 설치공사" },
    ],
    images: [`${S3}/idx14_14491954401.jpg`],
  },
  {
    category: "combustion",
    title: "현대삼호중공업(주)",
    tags: ["복합식 제습기", "NK-MDGH", "조선"],
    specs: [
      { label: "제품", value: "가스히터 복합제습기" },
      { label: "용량", value: "1,000,000 Kcal/h" },
      { label: "내용", value: "납품 및 설치공사" },
    ],
    images: [`${S3}/idx14_14492128991.jpg`],
  },
  {
    category: "combustion",
    title: "두산건설(주)",
    tags: ["복합식 제습기", "NK-MDGH", "건설"],
    specs: [
      { label: "제품", value: "가스히터 복합제습기" },
      { label: "용량", value: "1,000,000 Kcal/h" },
      { label: "내용", value: "납품 및 설치공사" },
    ],
    images: [],
  },
  {
    category: "combustion",
    title: "오리엔트마린(주)",
    tags: ["냉각식 제습기", "조선"],
    specs: [
      { label: "제품", value: "냉각식제습기" },
      { label: "용량", value: "168,000 Kcal/h" },
      { label: "내용", value: "납품 및 설치공사" },
    ],
    images: [],
  },

  // ── 각종 연소설비 (bs_idx=16) ──
  {
    category: "burner",
    title: "섬유 텐타 건조기",
    tags: ["연소설비", "건조기", "섬유"],
    specs: [
      { label: "제품", value: "섬유 텐타 건조기" },
      { label: "내용", value: "버너 시스템 납품 및 설치" },
    ],
    images: [`${S3}/idx16_14492198971.jpg`],
  },
  {
    category: "burner",
    title: "로터리 킬른 버너",
    tags: ["연소설비", "로용 버너", "킬른"],
    specs: [
      { label: "제품", value: "로터리 킬른" },
      { label: "내용", value: "버너 시스템 납품 및 설치" },
    ],
    images: [`${S3}/idx16_14492203061.jpg`],
  },
  {
    category: "burner",
    title: "벽돌 건조로 버너",
    tags: ["연소설비", "로용 버너", "건조로"],
    specs: [
      { label: "제품", value: "벽돌 건조로" },
      { label: "내용", value: "버너 시스템 납품 및 설치" },
    ],
    images: [`${S3}/idx16_14492203651.jpg`],
  },
  {
    category: "burner",
    title: "페인트 드라이 오븐 버너",
    tags: ["연소설비", "오븐 버너", "도장"],
    specs: [
      { label: "제품", value: "페인트 드라이 오븐" },
      { label: "내용", value: "버너 시스템 납품 및 설치" },
    ],
    images: [`${S3}/idx16_14492205261.jpg`],
  },
  {
    category: "burner",
    title: "직화식 공조설비 버너",
    tags: ["연소설비", "직화식 공조기", "공조"],
    specs: [
      { label: "제품", value: "직화식 공조설비" },
      { label: "내용", value: "버너 시스템 납품 및 설치" },
    ],
    images: [`${S3}/idx16_15323333771.jpg`],
  },

  // ── 덕트 플랜트 (bs_idx=17) ──
  {
    category: "burner",
    title: "(주)대원쇼트 - 덕트",
    tags: ["덕트", "플랜트"],
    specs: [
      { label: "제품", value: "덕트 설치공사" },
      { label: "내용", value: "납품 및 설치" },
    ],
    images: [`${S3}/idx17_14500590511.jpg`],
  },
  {
    category: "burner",
    title: "(주)성일HR - 덕트",
    tags: ["덕트", "플랜트"],
    specs: [
      { label: "제품", value: "덕트 설치공사" },
      { label: "내용", value: "납품 및 설치" },
    ],
    images: [`${S3}/idx17_14500590991.jpg`],
  },
  {
    category: "burner",
    title: "(주)세일기계 - 덕트",
    tags: ["덕트", "플랜트"],
    specs: [
      { label: "제품", value: "덕트 설치공사" },
      { label: "내용", value: "납품 및 설치" },
    ],
    images: [`${S3}/idx17_14500591391.jpg`],
  },
  {
    category: "combustion",
    title: "현대미포조선(주) - 덕트 1",
    tags: ["덕트", "조선"],
    specs: [
      { label: "제품", value: "덕트 설치공사" },
      { label: "내용", value: "납품 및 설치" },
    ],
    images: [`${S3}/idx17_14500591961.jpg`],
  },
  {
    category: "combustion",
    title: "현대미포조선(주) - 덕트 2",
    tags: ["덕트", "조선"],
    specs: [
      { label: "제품", value: "덕트 설치공사" },
      { label: "내용", value: "납품 및 설치" },
    ],
    images: [`${S3}/idx17_14500592541.jpg`],
  },
  {
    category: "burner",
    title: "티에이치중공업(주) - 덕트",
    tags: ["덕트", "중공업"],
    specs: [
      { label: "제품", value: "덕트 설치공사" },
      { label: "내용", value: "납품 및 설치" },
    ],
    images: [`${S3}/idx17_14500593351.jpg`],
  },
  {
    category: "burner",
    title: "에스엠이(주) - 덕트",
    tags: ["덕트", "플랜트"],
    specs: [
      { label: "제품", value: "덕트 설치공사" },
      { label: "내용", value: "납품 및 설치" },
    ],
    images: [`${S3}/idx17_14500593651.jpg`],
  },
  {
    category: "burner",
    title: "(주)유일 - 덕트",
    tags: ["덕트", "플랜트"],
    specs: [
      { label: "제품", value: "덕트 설치공사" },
      { label: "내용", value: "납품 및 설치" },
    ],
    images: [`${S3}/idx17_14500594031.jpg`],
  },
];

async function main() {
  let sortOrder = 100; // start after existing max (99)

  for (const perf of performances) {
    sortOrder++;
    const row = {
      ...perf,
      is_published: true,
      sort_order: sortOrder,
      before_text: "",
      after_text: "",
    };

    const { data, error } = await supabase
      .from("performances")
      .insert([row])
      .select("id, title")
      .single();

    if (error) {
      console.error(`❌ ${perf.title}: ${error.message}`);
    } else {
      console.log(`✅ ${data.title} (${data.id})`);
    }
  }

  console.log(`\nDone! Inserted ${performances.length} records.`);
}

main();
