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
    { icon: "△", title: t("inquiryTypes.quote.title"), subtitle: "Quote Request", description: t("inquiryTypes.quote.description"), contact: "NBPKOREA@NBPKOREA.co.kr" },
    { icon: "□", title: t("inquiryTypes.other.title"), subtitle: "Other Inquiries", description: t("inquiryTypes.other.description"), contact: "NBPKOREA@NBPKOREA.co.kr" },
  ];

  return (
    <section ref={ref} className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="section-label block mb-4">Inquiry Types</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-bold text-[#2d2a28]">{t("inquiryTypes.title")}</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {types.map((type, index) => (
            <div
              key={type.title}
              className={`border border-[#D4DAE2] p-8 transition-all duration-1000 hover:border-[#C05010] group ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <span className="text-2xl text-[#C8D0DA] block mb-4">{type.icon}</span>
              <span className="text-[13px] tracking-[0.2em] uppercase text-[#888480] block mb-2">{type.subtitle}</span>
              <h3 className="text-base font-bold text-[#2d2a28] mb-3">{type.title}</h3>
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
  const t = useTranslations("support.faq");
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = t.raw("items") as { question: string; answer: string }[];

  return (
    <section ref={ref} className="py-20 px-6 md:px-12 bg-[#F2F4F7]">
      <div className="max-w-3xl mx-auto">
        <div className={`mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="section-label block mb-4">FAQ</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-bold text-[#2d2a28]">{t("title")}</h2>
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
  const t = useTranslations("support.as");
  const { ref, isInView } = useInView({ threshold: 0.15 });
  const steps = t.raw("steps") as { num: string; title: string; desc: string }[];

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="section-label block mb-4">A/S Procedure</span>
          <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-bold text-[#2d2a28]">{t("title")}</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-12">
          {steps.map((step, index) => (
            <div
              key={step.num}
              className={`relative border border-[#D4DAE2] p-8 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 w-px h-4 bg-[#D4DAE2] translate-x-px -translate-y-1/2" />
              )}
              <span className="text-3xl font-light text-[#D4DAE2] block mb-4">{step.num}</span>
              <h3 className="text-base font-bold text-[#2d2a28] mb-2">{step.title}</h3>
              <p className="text-xs leading-[1.8] text-[#888480]">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className={`border border-[#D4DAE2] p-8 bg-[#F2F4F7] transition-all duration-1000 delay-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="text-[13px] tracking-[0.2em] uppercase text-[#888480] mb-2">Warranty Policy</p>
          <p className="text-sm leading-[2] text-[#2d2a28]">{t("warranty")}</p>
        </div>
      </div>
    </section>
  );
}

function ContactFormSection() {
  const t = useTranslations("support");
  const { ref, isInView } = useInView({ threshold: 0.15 });

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-[#F2F4F7]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <div className={`transition-all duration-1000 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <span className="section-label block mb-4">Contact</span>
            <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-bold text-[#2d2a28] mb-8">{t("form.title")}</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[13px] tracking-[0.15em] uppercase text-[#888480] block mb-2">{t("form.name")}</label>
                  <input type="text" className="w-full border-b border-[#D4DAE2] bg-transparent py-3 text-sm text-[#2d2a28] outline-none focus:border-[#2d2a28] transition-colors" placeholder={t("form.namePlaceholder")} />
                </div>
                <div>
                  <label className="text-[13px] tracking-[0.15em] uppercase text-[#888480] block mb-2">{t("form.company")}</label>
                  <input type="text" className="w-full border-b border-[#D4DAE2] bg-transparent py-3 text-sm text-[#2d2a28] outline-none focus:border-[#2d2a28] transition-colors" placeholder={t("form.companyPlaceholder")} />
                </div>
              </div>
              <div>
                <label className="text-[13px] tracking-[0.15em] uppercase text-[#888480] block mb-2">{t("form.email")}</label>
                <input type="email" className="w-full border-b border-[#D4DAE2] bg-transparent py-3 text-sm text-[#2d2a28] outline-none focus:border-[#2d2a28] transition-colors" placeholder="example@company.com" />
              </div>
              <div>
                <label className="text-[13px] tracking-[0.15em] uppercase text-[#888480] block mb-2">{t("form.inquiryType")}</label>
                <select className="w-full border-b border-[#D4DAE2] bg-transparent py-3 text-sm text-[#888480] outline-none focus:border-[#2d2a28] transition-colors appearance-none cursor-pointer">
                  <option value="">{t("form.selectType")}</option>
                  <option value="product">{t("form.productOption")}</option>
                  <option value="as">{t("form.asOption")}</option>
                  <option value="quote">{t("form.quoteOption")}</option>
                  <option value="other">{t("form.otherOption")}</option>
                </select>
              </div>
              <div>
                <label className="text-[13px] tracking-[0.15em] uppercase text-[#888480] block mb-2">{t("form.message")}</label>
                <textarea rows={5} className="w-full border border-[#D4DAE2] bg-transparent p-4 text-sm text-[#2d2a28] outline-none focus:border-[#2d2a28] transition-colors resize-none" placeholder={t("form.messagePlaceholder")} />
              </div>
              <button type="submit" className="inline-flex items-center gap-3 text-xs tracking-[0.15em] uppercase border border-[#2d2a28] px-8 py-4 hover:bg-[#C05010] hover:text-white transition-all">
                {t("form.submit")}
                <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                  <path d="M0 4H15M15 4L11 1M15 4L11 7" stroke="currentColor" strokeWidth="1" />
                </svg>
              </button>
            </form>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <span className="section-label block mb-4">Information</span>
            <h2 className="text-2xl md:text-3xl tracking-[0.1em] font-bold text-[#2d2a28] mb-8">{t("info.title")}</h2>
            <div className="space-y-6 mb-10">
              {[
                { label: t("info.phone"), value: "031-434-6566~7", sub: t("info.phoneHours") },
                { label: t("info.fax"), value: "031-434-6568", sub: "" },
                { label: t("info.email"), value: "NBPKOREA@NBPKOREA.co.kr", sub: t("info.emailReply") },
              ].map((info) => (
                <div key={info.label} className="border-b border-[#D4DAE2] pb-4">
                  <span className="text-[13px] tracking-[0.15em] uppercase text-[#888480] block mb-1">{info.label}</span>
                  <span className="text-base tracking-[0.05em] text-[#2d2a28] block">{info.value}</span>
                  {info.sub && <span className="text-[14px] text-[#888480]">{info.sub}</span>}
                </div>
              ))}
              <div className="border-b border-[#D4DAE2] pb-4">
                <span className="text-[13px] tracking-[0.15em] uppercase text-[#888480] block mb-1">{t("info.bizReg")}</span>
                <span className="text-sm tracking-[0.05em] text-[#2d2a28]">119-13-28296</span>
              </div>
            </div>
            <div className="aspect-[16/9] w-full overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=%EA%B2%BD%EA%B8%B0%EB%8F%84+%EC%95%88%EC%82%B0%EC%8B%9C+%EB%8B%A8%EC%9B%90%EA%B5%AC+%EC%97%A0%ED%8B%B0%EB%B8%8C%EC%9D%B4%EB%A1%9C+8%EA%B8%B8+22&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t("info.mapTitle")}
              />
            </div>
            <p className="text-sm text-[#888480] mt-4 leading-[2]">{t("info.addressValue")}</p>
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
      <InquiryTypesSection />
      <FAQSection />
      <ASProcedureSection />
      <ContactFormSection />
    </SubpageLayout>
  );
}
