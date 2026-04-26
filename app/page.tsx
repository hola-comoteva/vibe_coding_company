import type { Metadata } from "next";
import Link from "next/link";
import { Target, Users, Lightbulb, TrendingUp } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";

export const metadata: Metadata = {
  title: "바이브코딩 컨설팅",
  description: "AI 시대의 새로운 개발 방식, 바이브코딩 컨설팅으로 비즈니스를 성장시키세요.",
};

const values = [
  {
    icon: Target,
    title: "목표 중심",
    description: "고객의 비즈니스 목표에 집중합니다. 명확한 방향성과 실행 가능한 계획으로 원하는 결과를 만들어냅니다.",
  },
  {
    icon: Users,
    title: "협력적 파트너십",
    description: "단순한 서비스 제공자가 아닌 진정한 파트너로서 함께 성장합니다.",
  },
  {
    icon: Lightbulb,
    title: "혁신적 사고",
    description: "최신 AI 기술과 바이브코딩 방법론으로 창의적인 솔루션을 제시합니다.",
  },
  {
    icon: TrendingUp,
    title: "지속적 성장",
    description: "단기 성과에 머물지 않고 지속 가능한 성장 기반을 함께 구축합니다.",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <HeroSlider />

      {/* 회사 소개 */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6">
            혁신적인 솔루션으로 비즈니스를 성장시킵니다
          </h2>
          <p className="text-lg text-[#334155] leading-relaxed mb-4">
            바이브코딩 컨설팅은 AI와 최신 개발 방법론을 활용해 고객의 아이디어를 빠르고 정확하게
            현실로 만들어드립니다.
          </p>
          <p className="text-lg text-[#334155] leading-relaxed">
            기획부터 실행, 그리고 지속적인 개선까지 — 모든 단계에서 전문적인 파트너가 되어드리겠습니다.
          </p>
        </div>
      </section>

      {/* 핵심 가치 */}
      <section className="bg-[#F8FAFC] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] text-center mb-12">
            핵심 가치
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white border border-[#E2E8F0] rounded-xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-full bg-[#6366F1]/10 flex items-center justify-center">
                  <Icon size={24} className="text-[#6366F1]" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A]">{title}</h3>
                <p className="text-sm text-[#334155] leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
            지금 바로 시작하세요
          </h2>
          <p className="text-lg text-[#334155] mb-10">
            첫 상담은 무료입니다. 바이브코딩 전문가와 함께 새로운 가능성을 열어보세요.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-xl bg-[#6366F1] px-10 py-4 text-base font-semibold text-white hover:bg-[#4F46E5] active:scale-95 transition-all shadow-lg shadow-[#6366F1]/30"
          >
            컨설팅 문의하기
          </Link>
        </div>
      </section>
    </main>
  );
}
