import Link from "next/link";
import BottomNav from "@/components/BottomNav";

export default function OnulijipProject() {
  return (
    <div className="relative min-h-screen max-w-[390px] mx-auto bg-[#f9f9f9] pb-[100px]">
      <div
        className="w-full h-[300px] flex flex-col items-center justify-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)" }}
      >
        <Link href="/projects" className="absolute top-4 left-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </Link>
        <span className="text-[10px] mb-2 opacity-60" style={{ color: "white" }}>오늘의 집</span>
        <span className="text-[32px] font-extrabold text-center leading-tight" style={{ color: "white" }}>
          데이터로 검증한
          <br />
          UXUI 개선
        </span>
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
          <h1 className="text-[28px] font-medium" style={{ color: "#000" }}>오늘의 집</h1>
          <p className="text-[13px] mt-2 leading-relaxed" style={{ color: "#666" }}>
            사용자 탐색 목적 기반으로 IA를 재설계한 리디자인 프로젝트
          </p>
        </div>

        <section className="space-y-2">
          <h2 className="text-[16px] font-medium" style={{ color: "#2f3334" }}>Overview</h2>
          <p className="text-[13px] leading-relaxed" style={{ color: "#5e5f5f" }}>
            오늘의집 앱의 정보 구조(IA)를 사용자 탐색 목적을 기반으로 재설계하여
            쇼핑과 인테리어 커뮤니티 기능의 혼재로 인한 탐색 혼란을 해소한 리디자인 프로젝트입니다.
          </p>
        </section>

        <div
          className="w-full h-[200px] rounded-xl flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #1a1a2e, #0f3460)" }}
        >
          <span className="text-white opacity-30 text-[14px]">UI Mockup</span>
        </div>

        <section className="space-y-2">
          <h2 className="text-[16px] font-medium" style={{ color: "#2f3334" }}>Problem</h2>
          <p className="text-[13px] leading-relaxed" style={{ color: "#5e5f5f" }}>
            쇼핑 목적과 인테리어 영감 탐색 목적의 사용자가 같은 네비게이션 구조를 공유하면서
            각자의 탐색 흐름이 방해받는 문제가 있었습니다.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-[16px] font-medium" style={{ color: "#2f3334" }}>Solution</h2>
          <p className="text-[13px] leading-relaxed" style={{ color: "#5e5f5f" }}>
            사용자 탐색 목적을 3가지로 분류하고 각 목적별 진입 경로를 명확히 분리하는
            새로운 IA 구조를 설계, 데이터 기반으로 개선 효과를 검증했습니다.
          </p>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
