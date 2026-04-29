"use client";
import { useState, useRef } from "react";
import Image from "next/image";

type ScreenId = "home" | "projects" | "arena" | "onulijip" | "azit" | "sumgo" | "about" | "archive";

// ── Archive 링크 데이터 ──
const ARCHIVE_ITEMS = [
  {
    title: "ARENA",
    sub: "이스포츠 팬 경험 신규 서비스 기획",
    tag: "신규 프로젝트",
    year: "2025-2026",
    link: "https://www.figma.com/proto/VQe8VMAATuo7FK3ZuJkQcx", // 피그마 링크로 교체
  },
  {
    title: "오늘의 집",
    sub: "IA 재설계 리디자인",
    tag: "개선 프로젝트",
    year: "2025",
    link: "#",
  },
  {
    title: "AZIT",
    sub: "메신저 UX 설계",
    tag: "신규 프로젝트",
    year: "2025",
    link: "#",
  },
  {
    title: "숨고",
    sub: "UX 구조 개선",
    tag: "개선 프로젝트",
    year: "2025",
    link: "#",
  },
];

// ── 각 화면의 스크롤 가능 콘텐츠 이미지 설정 ──
const SCREEN_CONTENTS: Record<ScreenId, ContentDef> = {
  home: {
    headerScreen: "home",
    sections: [
      { src: "/content/home_intro.png",    w: 350, h: 301, padX: 20 },
      { src: "/content/home_projects.png", w: 350, h: 542, padX: 20 },
      { src: "/content/home_toolkit.png",  w: 390, h: 343, padX: 0  },
    ],
    hotspots: [
      // "Go to ABOUT"
      { top: 289, left: 20, width: 110, height: 24, to: "about" },
      // ARENA 카드 (home_projects 이미지 기준 상단~430px)
      { top: 301 + 22, left: 0, width: 390, height: 408, to: "arena" },
      // View all projects 버튼
      { top: 301 + 462, left: 85, width: 210, height: 48, to: "projects" },
    ],
  },
  projects: {
    headerScreen: "projects",
    sections: [
      { src: "/content/projects_full.png", w: 414, h: 1957, padX: 0 },
    ],
    hotspots: [
      // ARENA 카드 (scale: 390/414)
      { top: Math.round(98 * 390/414),  left: 0, width: 390, height: Math.round(408 * 390/414), to: "arena"    },
      { top: Math.round(506 * 390/414), left: 0, width: 390, height: Math.round(565 * 390/414), to: "onulijip" },
      { top: Math.round(1071 * 390/414),left: 0, width: 390, height: Math.round(369 * 390/414), to: "azit"     },
      { top: Math.round(1440 * 390/414),left: 0, width: 390, height: Math.round(400 * 390/414), to: "sumgo"    },
    ],
  },
  arena: {
    headerScreen: "arena",
    sections: [
      { src: "/content/arena_full.png", w: 390, h: 9198, padX: 0 },
    ],
    hotspots: [],
    backTo: "projects",
  },
  onulijip: {
    headerScreen: "onulijip",
    sections: [
      { src: "/content/onulijip_full.png", w: 390, h: 6617, padX: 0 },
    ],
    hotspots: [],
    backTo: "projects",
  },
  azit: {
    headerScreen: "azit",
    sections: [
      { src: "/content/azit_full.png", w: 390, h: 5157, padX: 0 },
    ],
    hotspots: [],
    backTo: "projects",
  },
  sumgo: {
    headerScreen: "sumgo",
    sections: [
      { src: "/content/sumgo_full.png", w: 390, h: 3068, padX: 0 },
    ],
    hotspots: [],
    backTo: "projects",
  },
  about: {
    headerScreen: "about",
    sections: [
      { src: "/content/about_full.png", w: 390, h: 4057, padX: 0 },
    ],
    hotspots: [],
  },
  archive: {
    headerScreen: "home",
    sections: [],
    hotspots: [],
    isArchive: true,
  },
};

interface ContentSection {
  src: string;
  w: number;
  h: number;
  padX: number;
}
interface Hotspot {
  top: number;
  left: number;
  width: number;
  height: number;
  to: ScreenId;
}
interface ContentDef {
  headerScreen: string;
  sections: ContentSection[];
  hotspots: Hotspot[];
  backTo?: ScreenId;
  isArchive?: boolean;
}

// ── 탭 정의 ──
const TABS: { id: ScreenId; label: string; nav: ScreenId }[] = [
  { id: "home",    label: "Home",     nav: "home"    },
  { id: "about",   label: "About",    nav: "about"   },
  { id: "projects",label: "Projects", nav: "projects"},
  { id: "archive", label: "Archive",  nav: "archive" },
];

function HomeIcon({ active }: { active: boolean }) {
  const c = active ? "#88133b" : "#a1a1aa";
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M3 9.5L12 3L21 9.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V9.5Z" fill={c} />
    </svg>
  );
}
function AboutIcon({ active }: { active: boolean }) {
  const c = active ? "#88133b" : "#a1a1aa";
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" fill={c} />
      <path d="M4 20C4 16.69 7.58 14 12 14C16.42 14 20 16.69 20 20" stroke={c} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function ProjectsIcon({ active }: { active: boolean }) {
  const c = active ? "#88133b" : "#a1a1aa";
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="8" height="8" rx="1" fill={c} />
      <rect x="13" y="3" width="8" height="8" rx="1" fill={c} />
      <rect x="3" y="13" width="8" height="8" rx="1" fill={c} />
      <rect x="13" y="13" width="8" height="8" rx="1" fill={c} />
    </svg>
  );
}
function ArchiveIcon({ active }: { active: boolean }) {
  const c = active ? "#88133b" : "#a1a1aa";
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="3" width="20" height="5" rx="1" fill={c} />
      <path d="M3 10H21V20C21 20.55 20.55 21 20 21H4C3.45 21 3 20.55 3 20V10Z" fill={c} />
      <path d="M10 15H14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const NAV_TAB_ICONS = {
  home: HomeIcon,
  about: AboutIcon,
  projects: ProjectsIcon,
  archive: ArchiveIcon,
};

export default function PortfolioViewer() {
  const [current, setCurrent] = useState<ScreenId>("home");
  const [transitioning, setTransitioning] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const def = SCREEN_CONTENTS[current];
  const navTab: ScreenId =
    current === "home" ? "home"
    : current === "about" ? "about"
    : current === "archive" ? "archive"
    : "projects";

  function navigate(to: ScreenId) {
    if (to === current || transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(to);
      setTransitioning(false);
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
    }, 180);
  }

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{ background: "#111" }}
    >
      {/* ── 폰 프레임 ── */}
      <div
        className="relative overflow-hidden flex flex-col"
        style={{
          width: "min(390px, 95vw)",
          height: "min(844px, 95dvh)",
          borderRadius: "clamp(20px, 5vw, 40px)",
          background: "#fff",
          boxShadow: "0 0 0 1.5px #333, 0 0 0 3px #222, 0 40px 100px rgba(0,0,0,0.9)",
        }}
      >
        {/* ── 상태 바 ── */}
        <div
          className="flex-none flex items-center justify-center"
          style={{ height: 47, background: "#fff" }}
        >
          <div
            className="rounded-full"
            style={{ width: 80, height: 22, background: "#f1f1f1" }}
          />
        </div>

        {/* ── 헤더 ── */}
        <div
          className="flex-none flex items-center px-5"
          style={{ height: 52, background: "#fff", borderBottom: "1px solid #f0f0f0" }}
        >
          <span
            className="text-[20px] font-medium"
            style={{ color: "#9c4549", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Portfolio
          </span>
          {def.backTo && (
            <button
              onClick={() => navigate(def.backTo!)}
              className="ml-auto flex items-center gap-1 text-[12px]"
              style={{ color: "#9c4549" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#9c4549" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              목록
            </button>
          )}
        </div>

        {/* ── 스크롤 콘텐츠 영역 ── */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto"
          style={{
            overflowY: "auto",
            WebkitOverflowScrolling: "touch" as React.CSSProperties["WebkitOverflowScrolling"],
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            opacity: transitioning ? 0 : 1,
            transition: "opacity 0.18s ease",
            background: "#f9f9f9",
          }}
        >
          {def.isArchive ? (
            <ArchiveContent />
          ) : (
            <div className="relative" style={{ width: "100%" }}>
              {/* 이미지 섹션 스택 */}
              {def.sections.map((sec, i) => {
                const scale = 390 / sec.w;
                void scale;
                return (
                  <div
                    key={i}
                    style={{
                      paddingLeft: sec.padX,
                      paddingRight: sec.padX,
                      background: "#f9f9f9",
                      lineHeight: 0,
                    }}
                  >
                    <Image
                      src={sec.src}
                      alt=""
                      width={sec.w}
                      height={sec.h}
                      style={{ width: "100%", height: "auto", display: "block" }}
                      priority={i === 0}
                      sizes="390px"
                    />
                  </div>
                );
              })}

              {/* 클릭 핫스팟 오버레이 */}
              {def.hotspots.map((hs, i) => (
                <button
                  key={i}
                  onClick={() => navigate(hs.to)}
                  style={{
                    position: "absolute",
                    top: hs.top,
                    left: hs.left,
                    width: hs.width,
                    height: hs.height,
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    WebkitTapHighlightColor: "transparent",
                    outline: "none",
                    zIndex: 5,
                  }}
                  aria-label={`Go to ${hs.to}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* ── 하단 네비게이션 ── */}
        <div
          className="flex-none flex items-center justify-around px-4 pt-2 pb-4"
          style={{
            height: 84,
            background: "#fff",
            borderTop: "1px solid #f0f0f0",
          }}
        >
          {TABS.map((tab) => {
            const isActive = navTab === tab.id;
            const Icon = NAV_TAB_ICONS[tab.id as keyof typeof NAV_TAB_ICONS];
            return (
              <button
                key={tab.id}
                onClick={() => navigate(tab.nav)}
                className="flex flex-col items-center gap-1"
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  WebkitTapHighlightColor: "transparent",
                  padding: "4px 8px",
                }}
              >
                <Icon active={isActive} />
                <span
                  className="text-[8px]"
                  style={{ color: isActive ? "#88133b" : "#a1a1aa" }}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 스크롤 힌트 */}
      <p className="mt-4 text-[11px]" style={{ color: "#555" }}>
        폰 안에서 스크롤하거나 탭을 눌러 이동하세요
      </p>
    </div>
  );
}

// ── Archive 화면 (HTML) ──
function ArchiveContent() {
  return (
    <div className="px-5 pt-6 pb-10 space-y-4" style={{ background: "#f9f9f9" }}>
      <div>
        <p className="text-[12px] mb-1" style={{ color: "#9c4549" }}>2025 - 2026</p>
        <h1 className="text-[28px] font-medium" style={{ color: "#2f3334" }}>Archive</h1>
        <p className="text-[12px] mt-1" style={{ color: "#5e5f5f" }}>
          링크를 눌러 프로젝트를 확인하세요
        </p>
      </div>

      {ARCHIVE_ITEMS.map((item, i) => (
        <a
          key={i}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white rounded-xl px-4 py-4 shadow-sm active:scale-[0.98] transition-transform"
          style={{ textDecoration: "none" }}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="text-[9px] px-2 py-0.5 rounded-sm"
                  style={{
                    backgroundColor: item.tag === "신규 프로젝트" ? "#bfe4e0" : "#e0c7c7",
                    color: item.tag === "신규 프로젝트" ? "#325451" : "#914a4b",
                  }}
                >
                  {item.tag}
                </span>
                <span className="text-[10px]" style={{ color: "#9c4549" }}>
                  {item.year}
                </span>
              </div>
              <p className="text-[18px] font-medium" style={{ color: "#2f3334" }}>
                {item.title}
              </p>
              <p className="text-[12px] mt-0.5" style={{ color: "#5e5f5f" }}>
                {item.sub}
              </p>
            </div>
            <div
              className="flex-none w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#f9f9f9" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#9c4549" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </a>
      ))}

      <p className="text-[11px] text-center pt-2" style={{ color: "#a1a1aa" }}>
        링크는 ARCHIVE_ITEMS에서 수정할 수 있습니다
      </p>
    </div>
  );
}
