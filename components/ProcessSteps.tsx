import { MessageSquare, Search, Lightbulb, Users, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "초기 상담",
    description:
      "고객의 비즈니스 목표와 현황을 파악하는 첫 번째 단계입니다. 편안한 분위기에서 자유롭게 이야기 나눕니다.",
  },
  {
    icon: Search,
    number: "02",
    title: "니즈 분석",
    description:
      "상담 내용을 바탕으로 핵심 과제와 우선순위를 분석합니다. 데이터 기반으로 문제를 명확히 정의합니다.",
  },
  {
    icon: Lightbulb,
    number: "03",
    title: "솔루션 제안",
    description:
      "분석 결과를 토대로 맞춤형 솔루션을 제안합니다. 실현 가능성과 효과를 함께 검토합니다.",
  },
  {
    icon: Users,
    number: "04",
    title: "실행 지원",
    description:
      "제안된 솔루션을 실제로 구현할 수 있도록 밀착 지원합니다. 단계별 가이드와 피드백을 제공합니다.",
  },
  {
    icon: CheckCircle,
    number: "05",
    title: "성과 검토",
    description:
      "결과물을 함께 검토하고 개선점을 도출합니다. 지속적인 성장을 위한 다음 단계를 함께 설계합니다.",
  },
];

export default function ProcessSteps() {
  return (
    <section aria-label="컨설팅 프로세스 단계">
      <div className="relative">
        {steps.map((step, i) => {
          const Icon = step.icon;
          const isLast = i === steps.length - 1;
          return (
            <div key={step.number} className="relative flex gap-6 md:gap-8">
              {/* Timeline line + icon */}
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#6366F1]/10 border-2 border-[#6366F1] flex items-center justify-center">
                  <Icon size={22} className="text-[#6366F1]" />
                </div>
                {!isLast && (
                  <div className="flex-1 w-0.5 bg-[#E2E8F0] my-2" style={{ minHeight: "2rem" }} />
                )}
              </div>

              {/* Content card */}
              <div className={`flex-1 pb-10 ${isLast ? "" : ""}`}>
                <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-[#6366F1] tracking-widest">{step.number}</span>
                    <h3 className="text-lg font-bold text-[#0F172A]">{step.title}</h3>
                  </div>
                  <p className="text-[#334155] text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
