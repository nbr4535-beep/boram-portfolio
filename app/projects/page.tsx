import Link from "next/link";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

const projects = [
  {
    href: "/projects/arena",
    coverBg: "#121212",
    coverLabel: "ARENA",
    coverStyle: { color: "white", fontSize: "42px", fontWeight: 900, letterSpacing: "0.1em" },
    tags: [
      { label: "신규 프로젝트", bg: "#bfe4e0", color: "#325451" },
      { label: "모바일", bg: "#f4f1e2", color: "#5b5b4f" },
    ],
    title: "ARENA",
    description: "이스포츠 중계와 팬 경험을 연결하는 흐름 중심 신규 서비스 기획 프로젝트",
  },
  {
    href: "/projects/onulijip",
    coverBg: "#1a1a2e",
    coverLabel: "오늘의 집",
    coverStyle: { color: "white", fontSize: "28px", fontWeight: 800 },
    tags: [
      { label: "개선 프로젝트", bg: "#e0c7c7", color: "#914a4b" },
      { label: "모바일", bg: "#f4f1e2", color: "#5b5b4f" },
    ],
    title: "오늘의 집",
    description: "사용자 탐색 목적 기반으로 IA를 재설계한 리디자인 프로젝트",
  },
  {
    href: "/projects/azit",
    coverBg: "#fff0f0",
    coverLabel: "AZIT",
    coverStyle: { color: "#333", fontSize: "42px", fontWeight: 900 },
    tags: [
      { label: "신규 프로젝트", bg: "#bfe4e0", color: "#325451" },
      { label: "모바일", bg: "#f4f1e2", color: "#5b5b4f" },
    ],
    title: "AZIT",
    description: "맥락 기반 플러그인 구조로 공·사 대화를 분리한 메신저 UX 설계 프로젝트",
  },
  {
    href: "/projects/sumgo",
    coverBg: "#f0f4ff",
    coverLabel: "숨고",
    coverStyle: { color: "#333", fontSize: "42px", fontWeight: 800 },
    tags: [
      { label: "개선 프로젝트", bg: "#e0c7c7", color: "#914a4b" },
      { label: "모바일", bg: "#f4f1e2", color: "#5b5b4f" },
    ],
    title: "숨고",
    description: "선택 피로 감소를 목표로 한 UX 구조 개선 프로젝트",
  },
];

export default function Projects() {
  return (
    <div className="relative min-h-screen max-w-[390px] mx-auto bg-[#f9f9f9] pb-[100px]">
      <Header />

      <main className="px-5 pt-6">
        {/* Section heading */}
        <div className="mb-6">
          <p className="text-[12px] mb-1" style={{ color: "#9c4549" }}>2025 - 2026</p>
          <div className="relative">
            <h1 className="text-[32px] font-medium" style={{ color: "#2f3334" }}>
              Selected Works
            </h1>
            <div className="absolute bottom-0 left-0 w-12 h-1 rounded" style={{ backgroundColor: "#ffabaa" }} />
          </div>
        </div>

        {/* Project cards */}
        <div className="space-y-5">
          {projects.map((project) => (
            <Link key={project.href} href={project.href} className="block rounded-lg overflow-hidden shadow-sm">
              <div
                className="w-full h-[267px] flex items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: project.coverBg }}
              >
                <span style={project.coverStyle as React.CSSProperties}>
                  {project.coverLabel}
                </span>
                <div
                  className="absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <div className="bg-white px-5 py-4">
                <div className="flex gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[8px] px-2 py-1 rounded-sm"
                      style={{ backgroundColor: tag.bg, color: tag.color }}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
                <p className="text-[22px] font-medium" style={{ color: "#000" }}>{project.title}</p>
                <p className="text-[12px] mt-1" style={{ color: "#666" }}>{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
