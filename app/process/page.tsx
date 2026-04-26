import type { Metadata } from "next";
import Link from "next/link";
import ProcessSteps from "@/components/ProcessSteps";

export const metadata: Metadata = {
  title: "컨설팅 프로세스",
  description: "바이브코딩의 체계적인 컨설팅 프로세스를 확인하세요.",
};

export default function ProcessPage() {
  return (
    <main className="flex-1 bg-[#F8FAFC] py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-[#0F172A] mb-4">컨설팅 프로세스</h1>
          <p className="text-[#334155] text-lg leading-relaxed">
            바이브코딩은 체계적인 5단계 프로세스로 고객의 성공을 돕습니다.
            <br />
            각 단계마다 투명한 소통과 전문적인 지원을 제공합니다.
          </p>
        </div>

        <ProcessSteps />

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-block rounded-xl bg-[#6366F1] px-10 py-4 text-base font-semibold text-white hover:bg-[#4F46E5] active:scale-95 transition-all shadow-lg shadow-[#6366F1]/30"
          >
            지금 바로 문의하기
          </Link>
        </div>
      </div>
    </main>
  );
}
