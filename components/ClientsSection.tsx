"use client";

import { useInView } from "@/hooks/useInView";
import Image from "next/image";
import { useTranslations } from "next-intl";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";
const LOGO_BASE = `${S3}/images/%EC%A3%BC%EC%9A%94%EA%B1%B0%EB%9E%98%EC%B2%98`;

const clientLogos = [
  { name: "한화오션", file: "한화오션.png" }, { name: "현대중공업", file: "현대중공업.png" },
  { name: "삼성중공업", file: "삼성중공업.png" }, { name: "한국조선해양", file: "한국조선해양.png" },
  { name: "현대미포조선", file: "현대미포조선.jpg" }, { name: "현대삼호중공업", file: "현대삼호중공업.jpg" },
  { name: "POSCO", file: "posco.png" }, { name: "동국제강", file: "동국제강.png" },
  { name: "두산", file: "두산.png" }, { name: "BMW", file: "bmw.png" },
  { name: "Mercedes-Benz", file: "benz.png" }, { name: "Audi", file: "audi.png" },
  { name: "KIA", file: "kia.png" }, { name: "Volvo", file: "volvo.png" },
  { name: "한진중공업", file: "한진중공업.jpg" }, { name: "HJ중공업", file: "HJ중공업.png" },
  { name: "농협목우촌", file: "농협목우촌.png" }, { name: "이디야커피", file: "이디야커피.jpg" },
  { name: "한국환경공단", file: "한국환경공단.jpeg" }, { name: "부산환경공단", file: "부산환경공단.jpeg" },
  { name: "대전도시공사", file: "대전도시공사.png" }, { name: "현대인프라코어", file: "현대인프라코어.png" },
  { name: "현대스틸산업", file: "현대스틸산업.png" }, { name: "HSG성동조선", file: "HSG성동조선.png" },
  { name: "케이조선", file: "케이조선.png" }, { name: "SK오션플랜트", file: "SK오션플랜트.png" },
  { name: "동부건설", file: "동부건설.png" }, { name: "대보건설", file: "대보건설.png" },
  { name: "STX건설", file: "STX건설.png" }, { name: "신성엔지니어링", file: "신성엔지니어링.png" },
  { name: "경인양행", file: "경인양행.png" }, { name: "ECOSTAR", file: "ECOSTAR.png" },
];

// Split into 3 rows
const row1 = clientLogos.slice(0, 11);
const row2 = clientLogos.slice(11, 21);
const row3 = clientLogos.slice(21);

function LogoItem({ logo }: { logo: { name: string; file: string } }) {
  return (
    <div className="flex-shrink-0 border border-[#D4DAE2] px-3 py-2 md:px-6 md:py-4 bg-white flex items-center justify-center w-24 h-14 md:w-36 md:h-20">
      <Image src={`${LOGO_BASE}/${encodeURIComponent(logo.file)}`} alt={logo.name} width={120} height={60} className="object-contain max-h-8 md:max-h-12" />
    </div>
  );
}

export default function ClientsSection() {
  const t = useTranslations("about.clients");
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="clients" className="py-32 px-6 md:px-12 bg-[#FAFAFA]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="section-label block mb-4">Clients</span>
          <h2 className="section-title mb-4">{t("title")}</h2>
          <p className="text-sm text-[#5C6470]">{t("subtitle")}</p>
        </div>
        <div className="flex flex-col gap-4 overflow-hidden">
          {/* Row 1: right-to-left */}
          <div className="relative overflow-hidden">
            <div className="flex gap-3 md:gap-8 animate-scroll">
              {[...row1, ...row1].map((logo, i) => <LogoItem key={`r1-${i}`} logo={logo} />)}
            </div>
          </div>
          {/* Row 2: left-to-right */}
          <div className="relative overflow-hidden">
            <div className="flex gap-3 md:gap-8 animate-scroll-reverse">
              {[...row2, ...row2].map((logo, i) => <LogoItem key={`r2-${i}`} logo={logo} />)}
            </div>
          </div>
          {/* Row 3: right-to-left */}
          <div className="relative overflow-hidden">
            <div className="flex gap-3 md:gap-8 animate-scroll">
              {[...row3, ...row3].map((logo, i) => <LogoItem key={`r3-${i}`} logo={logo} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
