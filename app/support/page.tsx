"use client";

import SubpageLayout from "@/components/SubpageLayout";
import { useInView } from "@/hooks/useInView";
import { useState } from "react";
import Link from "next/link";

function InquiryTypesSection() {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  const types = [
    {
      icon: "◇",
      title: "제품 상담",
      subtitle: "Product Consultation",
      description: "환경설비, 연소설비, 산업용 버너에 대한 제품 상담 및 사양 문의",
      contact: "031-434-6566~7",
    },
    {
      icon: "○",
      title: "유지보수 / A/S",
      subtitle: "Maintenance & A/S",
      description: "납품 제품의 유지보수, 부품 교체, 긴급 출동 등 사후 서비스 문의",
      contact: "031-434-6566~7",
    },
    {
      icon: "△",
      title: "견적 요청",
      subtitle: "Quote Request",
      description: "현장 조건에 맞는 맞춤 설비 설계 및 견적서 발행 요청",
      contact: "nbpkorea@nbpkorea.co.kr",
    },
    {
      icon: "□",
      title: "기타 문의",
      subtitle: "Other Inquiries",
      description: "파트너십, 기술 자료 요청, 채용 관련 등 기타 문의 사항",
      contact: "nbpkorea@nbpkorea.co.kr",
    },
  ];

  return (
    <section ref={ref} className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div
          className={`mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="section-label block mb-4">Inquiry Types</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-light text-[#2d2a28]">
            문의 유형
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {types.map((type, index) => (
            <div
              key={type.title}
              className={`border border-[#D4DAE2] p-8 transition-all duration-1000 hover:border-[#C05010] group ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <span className="text-2xl text-[#C8D0DA] block mb-4">{type.icon}</span>
              <span className="text-[13px] tracking-[0.2em] uppercase text-[#888480] block mb-2">
                {type.subtitle}
              </span>
              <h3 className="text-base font-medium text-[#2d2a28] mb-3">{type.title}</h3>
              <p className="text-xs leading-[1.9] text-[#888480] mb-4">{type.description}</p>
              <p className="text-xs text-[#2d2a28] tracking-[0.05em]">{type.contact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "견적 의뢰 절차는 어떻게 되나요?",
      answer:
        "홈페이지 문의 양식 또는 전화(031-434-6566~7)로 견적 의뢰 후, 담당 엔지니어가 현장 조건을 파악하여 맞춤 설계 및 견적서를 제출해 드립니다. 현장 조건에 따라 일정은 달라질 수 있습니다.",
    },
    {
      question: "A/S는 어떻게 신청하나요?",
      answer:
        "유선(031-434-6566~7) 또는 홈페이지 온라인 문의를 통해 접수하시면 담당 엔지니어가 연락드립니다. 산업용 장비(단품 제외)의 경우 보증기간은 시운전 완료일을 기점으로 1년입니다.",
    },
    {
      question: "제품 기술 자료나 카탈로그를 받을 수 있나요?",
      answer:
        "회사 내 모든 자료는 대표 승인 후 제공 가능합니다. 문의 양식을 통해 요청해 주시면 검토 후 안내드리겠습니다.",
    },
    {
      question: "방문 상담이 가능한가요?",
      answer:
        "견적 상담에 있어 필요시 담당자와 일정을 협의한 후 방문 상담을 진행할 수 있습니다. 전화 또는 홈페이지 문의를 통해 연락 주시면 안내드리겠습니다.",
    },
  ];

  return (
    <section ref={ref} className="py-20 px-6 md:px-12 bg-[#F2F4F7]">
      <div className="max-w-3xl mx-auto">
        <div
          className={`mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="section-label block mb-4">FAQ</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-light text-[#2d2a28]">
            자주 묻는 질문
          </h2>
        </div>
        <div className="border-t border-[#D4DAE2]">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`border-b border-[#D4DAE2] transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="flex items-center gap-4">
                  <span className="text-xs text-[#C8D0DA] font-light">
                    Q{String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm tracking-[0.03em] text-[#2d2a28] group-hover:opacity-70 transition-opacity">
                    {faq.question}
                  </span>
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  <path d="M7 1V13M1 7H13" stroke="#2d2a28" strokeWidth="1" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-48 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-sm leading-[2] text-[#888480] pl-10">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ASProcedureSection() {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  const steps = [
    { num: "01", title: "접수", desc: "전화 또는 이메일로 A/S 접수" },
    { num: "02", title: "진단", desc: "원격 또는 현장 방문 진단" },
    { num: "03", title: "현장수리", desc: "전문 엔지니어 파견 수리" },
    { num: "04", title: "사후관리", desc: "수리 완료 후 모니터링" },
  ];

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          className={`mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="section-label block mb-4">A/S Procedure</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-light text-[#2d2a28]">
            A/S 처리 절차
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-12">
          {steps.map((step, index) => (
            <div
              key={step.num}
              className={`relative border border-[#D4DAE2] p-8 transition-all duration-1000 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* 연결선 */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 w-px h-4 bg-[#D4DAE2] translate-x-px -translate-y-1/2" />
              )}
              <span className="text-3xl font-light text-[#D4DAE2] block mb-4">{step.num}</span>
              <h3 className="text-base font-medium text-[#2d2a28] mb-2">{step.title}</h3>
              <p className="text-xs leading-[1.8] text-[#888480]">{step.desc}</p>
            </div>
          ))}
        </div>

        <div
          className={`border border-[#D4DAE2] p-8 bg-[#F2F4F7] transition-all duration-1000 delay-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-[13px] tracking-[0.2em] uppercase text-[#888480] mb-2">Warranty Policy</p>
          <p className="text-sm leading-[2] text-[#2d2a28]">
            산업용 장비(단품 제외)의 보증기간은 <strong>시운전 완료일로부터 1년</strong>입니다 (소모품 제외).
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactFormSection() {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-[#F2F4F7]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <div
            className={`transition-all duration-1000 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <span className="section-label block mb-4">Contact</span>
            <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-light text-[#2d2a28] mb-8">
              문의하기
            </h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[13px] tracking-[0.15em] uppercase text-[#888480] block mb-2">
                    이름
                  </label>
                  <input
                    type="text"
                    className="w-full border-b border-[#D4DAE2] bg-transparent py-3 text-sm text-[#2d2a28] outline-none focus:border-[#2d2a28] transition-colors"
                    placeholder="홍길동"
                  />
                </div>
                <div>
                  <label className="text-[13px] tracking-[0.15em] uppercase text-[#888480] block mb-2">
                    회사명
                  </label>
                  <input
                    type="text"
                    className="w-full border-b border-[#D4DAE2] bg-transparent py-3 text-sm text-[#2d2a28] outline-none focus:border-[#2d2a28] transition-colors"
                    placeholder="주식회사 OOO"
                  />
                </div>
              </div>
              <div>
                <label className="text-[13px] tracking-[0.15em] uppercase text-[#888480] block mb-2">
                  이메일
                </label>
                <input
                  type="email"
                  className="w-full border-b border-[#D4DAE2] bg-transparent py-3 text-sm text-[#2d2a28] outline-none focus:border-[#2d2a28] transition-colors"
                  placeholder="example@company.com"
                />
              </div>
              <div>
                <label className="text-[13px] tracking-[0.15em] uppercase text-[#888480] block mb-2">
                  문의 유형
                </label>
                <select className="w-full border-b border-[#D4DAE2] bg-transparent py-3 text-sm text-[#888480] outline-none focus:border-[#2d2a28] transition-colors appearance-none cursor-pointer">
                  <option value="">선택해주세요</option>
                  <option value="product">제품 상담</option>
                  <option value="as">유지보수 / A/S</option>
                  <option value="quote">견적 요청</option>
                  <option value="other">기타 문의</option>
                </select>
              </div>
              <div>
                <label className="text-[13px] tracking-[0.15em] uppercase text-[#888480] block mb-2">
                  문의 내용
                </label>
                <textarea
                  rows={5}
                  className="w-full border border-[#D4DAE2] bg-transparent p-4 text-sm text-[#2d2a28] outline-none focus:border-[#2d2a28] transition-colors resize-none"
                  placeholder="문의하실 내용을 입력해 주세요."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-3 text-xs tracking-[0.15em] uppercase border border-[#2d2a28] px-8 py-4 hover:bg-[#C05010] hover:text-white transition-all"
              >
                문의 보내기
                <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                  <path d="M0 4H15M15 4L11 1M15 4L11 7" stroke="currentColor" strokeWidth="1" />
                </svg>
              </button>
            </form>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <span className="section-label block mb-4">Information</span>
            <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-light text-[#2d2a28] mb-8">
              연락처 안내
            </h2>
            <div className="space-y-6 mb-10">
              {[
                { label: "대표전화", value: "031-434-6566~7", sub: "평일 09:00 - 18:00" },
                { label: "팩스", value: "031-434-6568", sub: "" },
                { label: "이메일", value: "nbpkorea@nbpkorea.co.kr", sub: "영업일 기준 24시간 이내 회신" },
              ].map((info) => (
                <div key={info.label} className="border-b border-[#D4DAE2] pb-4">
                  <span className="text-[13px] tracking-[0.15em] uppercase text-[#888480] block mb-1">
                    {info.label}
                  </span>
                  <span className="text-base tracking-[0.05em] text-[#2d2a28] block">
                    {info.value}
                  </span>
                  {info.sub && (
                    <span className="text-[14px] text-[#888480]">{info.sub}</span>
                  )}
                </div>
              ))}
              <div className="border-b border-[#D4DAE2] pb-4">
                <span className="text-[13px] tracking-[0.15em] uppercase text-[#888480] block mb-1">
                  사업자등록번호
                </span>
                <span className="text-sm tracking-[0.05em] text-[#2d2a28]">119-13-28296</span>
              </div>
            </div>
            <div className="aspect-[16/9] w-full overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=%EA%B2%BD%EA%B8%B0%EB%8F%84+%EC%95%88%EC%82%B0%EC%8B%9C+%EB%8B%A8%EC%9B%90%EA%B5%AC+%EC%97%A0%ED%8B%B0%EB%B8%8C%EC%9D%B4%EB%A1%9C+8%EA%B8%B8+22&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NBP KOREA 본사 위치"
              />
            </div>
            <p className="text-sm text-[#888480] mt-4 leading-[2]">
              경기도 안산시 단원구 엠티브이로 8길 22
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SupportPage() {
  return (
    <SubpageLayout
      title="CUSTOMER SUPPORT"
      subtitle="고객의 성공적인 생산 환경을 위해 최선의 기술 지원을 제공합니다"
      breadcrumb={[{ label: "고객센터", href: "/support" }]}
    >
      <InquiryTypesSection />
      <FAQSection />
      <ASProcedureSection />
      <ContactFormSection />
    </SubpageLayout>
  );
}
