import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "컨설팅 문의",
  description: "바이브코딩 컨설팅 서비스 문의를 남겨주세요.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 bg-[#F8FAFC] py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-[#0F172A] mb-4">컨설팅 문의</h1>
          <p className="text-[#334155] text-lg leading-relaxed">
            궁금하신 점이나 컨설팅 의뢰 내용을 남겨주세요.
            <br />
            빠른 시일 내에 전문 컨설턴트가 연락드리겠습니다.
          </p>
        </div>
        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-8">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
