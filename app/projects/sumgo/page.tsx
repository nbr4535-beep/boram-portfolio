import Link from "next/link";
import BottomNav from "@/components/BottomNav";

export default function SumgoProject() {
  return (
    <div className="relative min-h-screen max-w-[390px] mx-auto bg-[#f9f9f9] pb-[100px]">
      <div
        className="w-full h-[300px] flex flex-col items-center justify-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #e8eaf6, #c5cae9, #3f51b5)" }}
      >
        <Link href="/projects" className="absolute top-4 left-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </Link>
        <span className="text-[55px] font-extrabold" style={{ color: "white" }}>숨고</span>
      </div>

      <main className="px-5 pt-6 space-y-6">
        <div className="flex gap-2">
          <span className="text-[8px] px-2 py-1 rounded-sm" style={{ backgroundColor: "#e0c7c7", color: "#914a4b" }}>
            개선 프로젝트
          </span>
          <span className="text-[8px] px-2 py-1 rounded-sm" style={{ backgroundColor: "#f4f1e2", color: "#5b5b4f" }}>
            모바일
          </span>
        </div>

        <div>
          <h1 className="text-[28px] font-medium" style={{ color: "#000" }}>숨고</h1>
          <p className="text-[13px] mt-2 leading-relaxed" style={{ color: "#666" }}>
            선택 피로 감소를 목표로 한 UX 구조 개선 프로젝트
          </p>
        </div>

        <section className="space-y-2">
          <h2 className="text-[16px] font-medium" style={{ color: "#2f3334" }}>Overview</h2>
          <p className="text-[13px] leading-relaxed" style={{ color: "#5e5f5f" }}>
            숨고 플랫폼에서 사용자가 적절한 전문가를 선택하는 과정에서 발생하는
            선택 피로를 줄이기 위한 UX 구조 개선 프로젝트입니다.
          </p>
        </section>

        <div
          className="w-full h-[200px] rounded-xl flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #e8eaf6, #3f51b5)" }}
        >
          <span className="text-white opacity-30 text-[14px]">UI Mockup</span>
        </div>

        <section className="space-y-2">
          <h2 className="text-[16px] font-medium" style={{ color: "#2f3334" }}>Problem</h2>
          <p className="text-[13px] leading-relaxed" style={{ color: "#5e5f5f" }}>
            전문가 목록에서 비슷해 보이는 옵션들이 너무 많아 사용자가 선택에 어려움을 겪고
            이탈하는 현상이 관찰되었습니다.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-[16px] font-medium" style={{ color: "#2f3334" }}>Solution</h2>
          <p className="text-[13px] leading-relaxed" style={{ color: "#5e5f5f" }}>
            사용자 의사결정 단계를 구조화하고, 핵심 판단 기준을 먼저 노출하는 방식으로
            정보 위계를 재설계하여 선택 피로를 줄였습니다.
          </p>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
