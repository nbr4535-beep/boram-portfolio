import Link from "next/link";
import BottomNav from "@/components/BottomNav";

export default function AzitProject() {
  return (
    <div className="relative min-h-screen max-w-[390px] mx-auto bg-[#f9f9f9] pb-[100px]">
      <div
        className="w-full h-[300px] flex flex-col items-center justify-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #fce4ec, #f8bbd0, #e91e63)" }}
      >
        <Link href="/projects" className="absolute top-4 left-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#333" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </Link>
        <span className="text-[55px] font-black" style={{ color: "#fff" }}>AZIT</span>
      </div>

      <main className="px-5 pt-6 space-y-6">
        <div className="flex gap-2">
          <span className="text-[8px] px-2 py-1 rounded-sm" style={{ backgroundColor: "#bfe4e0", color: "#325451" }}>
            신규 프로젝트
          </span>
          <span className="text-[8px] px-2 py-1 rounded-sm" style={{ backgroundColor: "#f4f1e2", color: "#5b5b4f" }}>
            모바일
          </span>
        </div>

        <div>
          <h1 className="text-[28px] font-medium" style={{ color: "#000" }}>AZIT</h1>
          <p className="text-[13px] mt-2 leading-relaxed" style={{ color: "#666" }}>
            맥락 기반 플러그인 구조로 공·사 대화를 분리한 메신저 UX 설계 프로젝트
          </p>
        </div>

        <section className="space-y-2">
          <h2 className="text-[16px] font-medium" style={{ color: "#2f3334" }}>Overview</h2>
          <p className="text-[13px] leading-relaxed" style={{ color: "#5e5f5f" }}>
            업무 대화와 개인 대화가 뒤섞이는 문제를 해결하기 위해, 대화 맥락을 인식하여
            공용 플러그인과 개인 플러그인을 분리하는 새로운 메신저 UX 구조를 설계했습니다.
          </p>
        </section>

        <div
          className="w-full h-[200px] rounded-xl flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #fce4ec, #e91e63)" }}
        >
          <span className="opacity-30 text-[14px]" style={{ color: "#333" }}>UI Mockup</span>
        </div>

        <section className="space-y-2">
          <h2 className="text-[16px] font-medium" style={{ color: "#2f3334" }}>Problem</h2>
          <p className="text-[13px] leading-relaxed" style={{ color: "#5e5f5f" }}>
            기존 메신저 앱에서는 공용 업무 채팅과 개인 채팅이 같은 공간에서 이루어져
            맥락이 혼재되고, 정보 탐색이 어려운 문제가 있었습니다.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-[16px] font-medium" style={{ color: "#2f3334" }}>Solution</h2>
          <p className="text-[13px] leading-relaxed" style={{ color: "#5e5f5f" }}>
            대화 맥락을 공/사로 분리하는 플러그인 시스템을 도입하여 사용자가
            상황에 맞는 도구를 직관적으로 선택할 수 있도록 설계했습니다.
          </p>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
