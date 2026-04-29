import Link from "next/link";
import BottomNav from "@/components/BottomNav";

export default function ArenaProject() {
  return (
    <div className="relative min-h-screen max-w-[390px] mx-auto bg-[#f9f9f9] pb-[100px]">
      {/* Cover */}
      <div
        className="w-full h-[300px] flex flex-col items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: "#121212" }}
      >
        <Link href="/projects" className="absolute top-4 left-4 text-white opacity-70">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </Link>
        <div className="absolute w-[244px] h-[244px] rounded-full opacity-10 bg-gray-400" />
        <span
          className="text-[55px] font-black tracking-wider"
          style={{ color: "white", letterSpacing: "0.1em" }}
        >
          ARENA
        </span>
        <p className="text-[12px] mt-2 opacity-60" style={{ color: "white" }}>
          2025.12.26 – 2026.01.16
        </p>
      </div>

      <main className="px-5 pt-6 space-y-6">
        {/* Tags */}
        <div className="flex gap-2">
          <span className="text-[8px] px-2 py-1 rounded-sm" style={{ backgroundColor: "#bfe4e0", color: "#325451" }}>
            신규 프로젝트
          </span>
          <span className="text-[8px] px-2 py-1 rounded-sm" style={{ backgroundColor: "#f4f1e2", color: "#5b5b4f" }}>
            모바일
          </span>
        </div>

        {/* Title */}
        <div>
          <h1 className="text-[28px] font-medium" style={{ color: "#000" }}>ARENA</h1>
          <p className="text-[13px] mt-2 leading-relaxed" style={{ color: "#666" }}>
            이스포츠 중계와 팬 경험을 연결하는 흐름 중심 신규 서비스 기획 프로젝트
          </p>
        </div>

        {/* Overview */}
        <section className="space-y-2">
          <h2 className="text-[16px] font-medium" style={{ color: "#2f3334" }}>Overview</h2>
          <p className="text-[13px] leading-relaxed" style={{ color: "#5e5f5f" }}>
            ARENA는 이스포츠 팬들이 중계를 보며 실시간으로 다른 팬들과 소통할 수 있는
            모바일 서비스입니다. 경기 흐름에 맞춘 반응형 UX와 팬 커뮤니티 경험을 중심으로
            설계되었습니다.
          </p>
        </section>

        {/* Role */}
        <section className="space-y-2">
          <h2 className="text-[16px] font-medium" style={{ color: "#2f3334" }}>My Role</h2>
          <ul className="text-[13px] space-y-1" style={{ color: "#5e5f5f" }}>
            <li>• 서비스 기획 및 플로우 설계</li>
            <li>• UX 리서치 및 사용자 인터뷰</li>
            <li>• Figma 기반 UI 디자인</li>
            <li>• 프로토타입 제작 및 사용성 테스트</li>
          </ul>
        </section>

        {/* Mockup placeholder */}
        <div
          className="w-full h-[200px] rounded-xl flex items-center justify-center"
          style={{ backgroundColor: "#1a1a1a" }}
        >
          <span className="text-white opacity-30 text-[14px]">UI Mockup</span>
        </div>

        {/* Problem */}
        <section className="space-y-2">
          <h2 className="text-[16px] font-medium" style={{ color: "#2f3334" }}>Problem</h2>
          <p className="text-[13px] leading-relaxed" style={{ color: "#5e5f5f" }}>
            기존 이스포츠 중계 플랫폼은 팬들이 경기 중 실시간으로 소통할 수 있는
            기능이 부족하고, 팬 경험이 분산되어 있는 문제가 있었습니다.
          </p>
        </section>

        {/* Solution */}
        <section className="space-y-2">
          <h2 className="text-[16px] font-medium" style={{ color: "#2f3334" }}>Solution</h2>
          <p className="text-[13px] leading-relaxed" style={{ color: "#5e5f5f" }}>
            경기 흐름에 맞춰 자동으로 활성화되는 반응 시스템과 팬 커뮤니티 공간을
            통합하여, 시청과 소통이 자연스럽게 이어지는 경험을 설계했습니다.
          </p>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
