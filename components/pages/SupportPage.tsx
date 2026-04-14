"use client";

import SubpageLayout from "@/components/SubpageLayout";
import { useInView } from "@/hooks/useInView";
import { useState } from "react";
import { useTranslations } from "next-intl";

function InquiryTypesSection() {
  const t = useTranslations("support");
  const { ref, isInView } = useInView({ threshold: 0.15 });

  const types = [
    { icon: "◇", title: t("inquiryTypes.product.title"), subtitle: "Product Consultation", description: t("inquiryTypes.product.description"), contact: "031-434-6566~7" },
    { icon: "○", title: t("inquiryTypes.maintenance.title"), subtitle: "Maintenance & A/S", description: t("inquiryTypes.maintenance.description"), contact: "031-434-6566~7" },
    { icon: "△", title: t("inquiryTypes.quote.title"), subtitle: "Quote Request", description: t("inquiryTypes.quote.description"), contact: "nbpkorea@nbpkorea.co.kr" },
    { icon: "□", title: t("inquiryTypes.other.title"), subtitle: "Other Inquiries", description: t("inquiryTypes.other.description"), contact: "nbpkorea@nbpkorea.co.kr" },
  ];

  return (
    <section ref={ref} className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="section-label block mb-4">Inquiry Types</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.04em] font-bold text-[#2d2a28]">{t("inquiryTypes.title")}</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {types.map((type, index) => (
            <div
              key={type.title}
              className={`border border-[#D4DAE2] p-8 transition-all duration-1000 hover:border-[#C05010] group ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <span className="text-2xl text-[#C8D0DA] block mb-4">{type.icon}</span>
              <span className="text-[13px] tracking-[0.04em] uppercase text-[#5C6470] block mb-2">{type.subtitle}</span>
              <h3 className="text-base font-bold text-[#2d2a28] mb-3">{type.title}</h3>
              <p className="text-xs leading-[1.9] text-[#5C6470] mb-4">{type.description}</p>
              <p className="text-xs text-[#2d2a28] tracking-[0.05em]">{type.contact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const t = useTranslations("support.faq");
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = t.raw("items") as { question: string; answer: string }[];

  return (
    <section ref={ref} className="py-20 px-6 md:px-12 bg-[#FAFAFA]">
      <div className="max-w-3xl mx-auto">
        <div className={`mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="section-label block mb-4">FAQ</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.04em] font-bold text-[#2d2a28]">{t("title")}</h2>
        </div>
        <div className="border-t border-[#D4DAE2]">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`border-b border-[#D4DAE2] transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between py-6 text-left group">
                <span className="flex items-center gap-4">
                  <span className="text-xs text-[#C8D0DA] font-light">Q{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-sm tracking-[0.03em] text-[#2d2a28] group-hover:opacity-70 transition-opacity">{faq.question}</span>
                </span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-45" : ""}`}>
                  <path d="M7 1V13M1 7H13" stroke="#2d2a28" strokeWidth="1" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-48 pb-6" : "max-h-0"}`}>
                <p className="text-sm md:text-base leading-relaxed text-[#5C6470] pl-10">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ASProcedureSection() {
  const t = useTranslations("support.as");
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const steps = t.raw("steps") as { num: string; title: string; desc: string }[];

  const stepIcons = [
    /* 접수 — 전화 */
    <svg key="phone" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
    /* 진단 — 돋보기 */
    <svg key="search" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>,
    /* 수리 — 렌치 */
    <svg key="wrench" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>,
    /* 사후관리 — 체크 */
    <svg key="check" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>,
  ];

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="section-label block mb-4">A/S Procedure</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.04em] font-bold text-[#2d2a28]">{t("title")}</h2>
        </div>

        {/* 타임라인 */}
        <div className="relative mb-16">
          {/* 연결선 — 데스크탑 가로 */}
          <div className="hidden md:block absolute top-[40px] left-[60px] right-[60px] h-px bg-[#E8ECF0]" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-0">
            {steps.map((step, index) => (
              <div
                key={step.num}
                className={`relative flex flex-col items-center text-center transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* 아이콘 원형 */}
                <div className={`relative z-10 w-20 h-20 rounded-full flex items-center justify-center mb-5 transition-all duration-700 ${
                  isInView ? "scale-100" : "scale-0"
                } bg-white border-2 border-[#C05010]/20 text-[#C05010]`}
                  style={{ transitionDelay: `${index * 200 + 100}ms` }}
                >
                  {stepIcons[index]}
                </div>

                {/* 화살표 — 스텝 사이 (모바일: 세로, 데스크탑: 가로) */}
                {index < steps.length - 1 && (
                  <>
                    {/* 데스크탑 화살표 */}
                    <div className={`hidden md:block absolute top-[40px] -right-3 z-20 transition-all duration-500 ${isInView ? "opacity-100" : "opacity-0"}`}
                      style={{ transitionDelay: `${index * 200 + 300}ms` }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L14 7M19 12L14 17" stroke="#C05010" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    {/* 모바일 화살표 */}
                    <div className={`md:hidden my-2 transition-all duration-500 ${isInView ? "opacity-100" : "opacity-0"}`}
                      style={{ transitionDelay: `${index * 200 + 300}ms` }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5V19M12 19L7 14M12 19L17 14" stroke="#C05010" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </>
                )}

                {/* 스텝 번호 */}
                <span className="text-[11px] tracking-[0.15em] uppercase text-[#C05010] font-semibold mb-2">Step {step.num}</span>
                {/* 제목 */}
                <h3 className="text-lg font-bold text-[#2d2a28] mb-2">{step.title}</h3>
                {/* 설명 */}
                <p className="text-sm text-[#5C6470] leading-relaxed max-w-[180px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 보증 정책 */}
        <div className={`border-l-[3px] border-l-[#C05010] bg-[#FAFAFA] px-8 py-6 transition-all duration-1000 delay-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="text-[13px] tracking-[0.04em] uppercase text-[#C05010] font-semibold mb-2">Warranty Policy</p>
          <p className="text-sm leading-relaxed text-[#2d2a28]">{t("warranty")}</p>
        </div>
      </div>
    </section>
  );
}

function ContactFormSection() {
  const t = useTranslations("support");
  const { ref, isInView } = useInView({ threshold: 0.15 });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          company: formData.get("company"),
          email: formData.get("email"),
          type: formData.get("type"),
          message: formData.get("message"),
        }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <div className={`transition-all duration-1000 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <span className="section-label block mb-4">Contact</span>
            <h2 className="text-2xl md:text-3xl tracking-[0.04em] font-bold text-[#2d2a28] mb-8">{t("form.title")}</h2>

            {status === "success" ? (
              <div className="border border-[#C05010]/30 bg-[#C05010]/5 p-8 text-center">
                <p className="text-lg font-bold text-[#2d2a28] mb-2">{t("form.successTitle")}</p>
                <p className="text-sm text-[#5C6470]">{t("form.successDesc")}</p>
                <button onClick={() => setStatus("idle")} className="mt-6 text-xs tracking-[0.06em] uppercase text-[#C05010] border border-[#C05010] px-6 py-3 hover:bg-[#C05010] hover:text-white transition-all">
                  {t("form.submitAnother")}
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[13px] tracking-[0.06em] uppercase text-[#5C6470] block mb-2">{t("form.name")}</label>
                    <input name="name" type="text" required className="w-full border-b border-[#D4DAE2] bg-transparent py-3 text-sm text-[#2d2a28] outline-none focus:border-[#2d2a28] transition-colors" placeholder={t("form.namePlaceholder")} />
                  </div>
                  <div>
                    <label className="text-[13px] tracking-[0.06em] uppercase text-[#5C6470] block mb-2">{t("form.company")}</label>
                    <input name="company" type="text" className="w-full border-b border-[#D4DAE2] bg-transparent py-3 text-sm text-[#2d2a28] outline-none focus:border-[#2d2a28] transition-colors" placeholder={t("form.companyPlaceholder")} />
                  </div>
                </div>
                <div>
                  <label className="text-[13px] tracking-[0.06em] uppercase text-[#5C6470] block mb-2">{t("form.email")}</label>
                  <input name="email" type="email" required className="w-full border-b border-[#D4DAE2] bg-transparent py-3 text-sm text-[#2d2a28] outline-none focus:border-[#2d2a28] transition-colors" placeholder="example@company.com" />
                </div>
                <div>
                  <label className="text-[13px] tracking-[0.06em] uppercase text-[#5C6470] block mb-2">{t("form.inquiryType")}</label>
                  <select name="type" className="w-full border-b border-[#D4DAE2] bg-transparent py-3 text-sm text-[#5C6470] outline-none focus:border-[#2d2a28] transition-colors appearance-none cursor-pointer">
                    <option value="">{t("form.selectType")}</option>
                    <option value="product">{t("form.productOption")}</option>
                    <option value="as">{t("form.asOption")}</option>
                    <option value="quote">{t("form.quoteOption")}</option>
                    <option value="other">{t("form.otherOption")}</option>
                  </select>
                </div>
                <div>
                  <label className="text-[13px] tracking-[0.06em] uppercase text-[#5C6470] block mb-2">{t("form.message")}</label>
                  <textarea name="message" rows={5} required className="w-full border border-[#D4DAE2] bg-transparent p-4 text-sm text-[#2d2a28] outline-none focus:border-[#2d2a28] transition-colors resize-none" placeholder={t("form.messagePlaceholder")} />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-500">{t("form.errorMsg")}</p>
                )}

                <button type="submit" disabled={status === "sending"} className="inline-flex items-center gap-3 text-xs tracking-[0.06em] uppercase border border-[#2d2a28] px-8 py-4 hover:bg-[#C05010] hover:text-white transition-all disabled:opacity-50">
                  {status === "sending" ? t("form.sending") : t("form.submit")}
                  <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                    <path d="M0 4H15M15 4L11 1M15 4L11 7" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </button>
              </form>
            )}
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <span className="section-label block mb-4">Information</span>
            <h2 className="text-2xl md:text-3xl tracking-[0.04em] font-bold text-[#2d2a28] mb-8">{t("info.title")}</h2>
            <div className="space-y-6 mb-10">
              {[
                { label: t("info.phone"), value: "031-434-6566~7", sub: t("info.phoneHours") },
                { label: t("info.fax"), value: "031-434-6568", sub: "" },
                { label: t("info.email"), value: "nbpkorea@nbpkorea.co.kr", sub: t("info.emailReply") },
                { label: t("info.website"), value: "www.nbpkorea.co.kr", sub: "" },
              ].map((info) => (
                <div key={info.label} className="border-b border-[#D4DAE2] pb-4">
                  <span className="text-[13px] tracking-[0.06em] uppercase text-[#5C6470] block mb-1">{info.label}</span>
                  <span className="text-base tracking-[0.05em] text-[#2d2a28] block">{info.value}</span>
                  {info.sub && <span className="text-[14px] text-[#5C6470]">{info.sub}</span>}
                </div>
              ))}
              <div className="border-b border-[#D4DAE2] pb-4">
                <span className="text-[13px] tracking-[0.06em] uppercase text-[#5C6470] block mb-1">{t("info.bizReg")}</span>
                <span className="text-sm tracking-[0.05em] text-[#2d2a28]">119-13-28296</span>
              </div>
            </div>
            <div className="aspect-[16/9] w-full overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=37.300667,126.7493384&t=&z=17&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t("info.mapTitle")}
              />
            </div>
            <p className="text-sm text-[#5C6470] mt-4 leading-relaxed">{t("info.addressValue")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SupportPage() {
  const t = useTranslations("support");
  return (
    <SubpageLayout
      title={t("title")}
      subtitle={t("subtitle")}
      breadcrumb={[{ label: t("breadcrumb"), href: "/support" }]}
    >
      <ContactFormSection />
      <ASProcedureSection />
      <FAQSection />
    </SubpageLayout>
  );
}
