"use client";
import { useState } from "react";
import Image from "next/image";

type ScreenId = "home" | "projects" | "arena" | "onulijip" | "azit" | "sumgo" | "about";

interface Screen {
  id: ScreenId;
  src: string;
  label: string;
  nav: "home" | "projects" | "about";
  links: { x: number; y: number; w: number; h: number; to: ScreenId }[];
}

const SCREENS: Screen[] = [
  {
    id: "home",
    src: "/screens/home.png",
    label: "Home",
    nav: "home",
    links: [
      { x: 0, y: 87, w: 100, h: 4, to: "about" },        // Go to ABOUT
      { x: 0, y: 37, w: 100, h: 50, to: "arena" },        // ARENA card
      { x: 20, y: 88, w: 50, h: 7, to: "projects" },      // View all projects
      { x: 0, y: 94, w: 33, h: 6, to: "home" },           // Home tab
      { x: 33, y: 94, w: 34, h: 6, to: "about" },         // About tab
      { x: 67, y: 94, w: 33, h: 6, to: "projects" },      // Projects tab
    ],
  },
  {
    id: "projects",
    src: "/screens/projects.png",
    label: "Projects",
    nav: "projects",
    links: [
      { x: 0, y: 18, w: 100, h: 20, to: "arena" },
      { x: 0, y: 38, w: 100, h: 20, to: "onulijip" },
      { x: 0, y: 58, w: 100, h: 20, to: "azit" },
      { x: 0, y: 78, w: 100, h: 14, to: "sumgo" },
      { x: 0, y: 94, w: 33, h: 6, to: "home" },
      { x: 33, y: 94, w: 34, h: 6, to: "about" },
      { x: 67, y: 94, w: 33, h: 6, to: "projects" },
    ],
  },
  {
    id: "arena",
    src: "/screens/arena.png",
    label: "ARENA",
    nav: "projects",
    links: [
      { x: 0, y: 94, w: 33, h: 6, to: "home" },
      { x: 33, y: 94, w: 34, h: 6, to: "about" },
      { x: 67, y: 94, w: 33, h: 6, to: "projects" },
      { x: 0, y: 0, w: 20, h: 8, to: "projects" }, // back
    ],
  },
  {
    id: "onulijip",
    src: "/screens/onulijip.png",
    label: "오늘의 집",
    nav: "projects",
    links: [
      { x: 0, y: 94, w: 33, h: 6, to: "home" },
      { x: 33, y: 94, w: 34, h: 6, to: "about" },
      { x: 67, y: 94, w: 33, h: 6, to: "projects" },
      { x: 0, y: 0, w: 20, h: 8, to: "projects" },
    ],
  },
  {
    id: "azit",
    src: "/screens/azit.png",
    label: "AZIT",
    nav: "projects",
    links: [
      { x: 0, y: 94, w: 33, h: 6, to: "home" },
      { x: 33, y: 94, w: 34, h: 6, to: "about" },
      { x: 67, y: 94, w: 33, h: 6, to: "projects" },
      { x: 0, y: 0, w: 20, h: 8, to: "projects" },
    ],
  },
  {
    id: "sumgo",
    src: "/screens/sumgo.png",
    label: "숨고",
    nav: "projects",
    links: [
      { x: 0, y: 94, w: 33, h: 6, to: "home" },
      { x: 33, y: 94, w: 34, h: 6, to: "about" },
      { x: 67, y: 94, w: 33, h: 6, to: "projects" },
      { x: 0, y: 0, w: 20, h: 8, to: "projects" },
    ],
  },
  {
    id: "about",
    src: "/screens/about.png",
    label: "About",
    nav: "about",
    links: [
      { x: 0, y: 94, w: 33, h: 6, to: "home" },
      { x: 33, y: 94, w: 34, h: 6, to: "about" },
      { x: 67, y: 94, w: 33, h: 6, to: "projects" },
    ],
  },
];

export default function PortfolioViewer() {
  const [current, setCurrent] = useState<ScreenId>("home");
  const [transitioning, setTransitioning] = useState(false);

  const screen = SCREENS.find((s) => s.id === current)!;

  function navigate(to: ScreenId) {
    if (to === current || transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(to);
      setTransitioning(false);
    }, 200);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#111] px-4 py-6">
      {/* Phone frame */}
      <div
        className="relative overflow-hidden rounded-[40px] shadow-2xl"
        style={{
          width: "min(390px, 90vw)",
          aspectRatio: "390/844",
          background: "#000",
          boxShadow: "0 0 0 2px #333, 0 30px 80px rgba(0,0,0,0.8)",
        }}
      >
        {/* Screen image */}
        <div
          className="absolute inset-0 transition-opacity duration-200"
          style={{ opacity: transitioning ? 0 : 1 }}
        >
          <Image
            src={screen.src}
            alt={screen.label}
            fill
            style={{ objectFit: "cover" }}
            priority
            sizes="390px"
          />
        </div>

        {/* Clickable hotspot overlay */}
        {screen.links.map((link, i) => (
          <button
            key={i}
            onClick={() => navigate(link.to)}
            className="absolute"
            style={{
              left: `${link.x}%`,
              top: `${link.y}%`,
              width: `${link.w}%`,
              height: `${link.h}%`,
              cursor: link.to === current ? "default" : "pointer",
              background: "transparent",
              border: "none",
              outline: "none",
              WebkitTapHighlightColor: "transparent",
            }}
            aria-label={`Navigate to ${link.to}`}
          />
        ))}
      </div>

      {/* Screen label */}
      <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
        {screen.label}
      </p>

      {/* Dot navigation */}
      <div className="flex gap-2 mt-3">
        {(["home", "projects", "about"] as const).map((nav) => {
          const isActive = screen.nav === nav;
          return (
            <button
              key={nav}
              onClick={() => navigate(nav === "home" ? "home" : nav === "about" ? "about" : "projects")}
              className="rounded-full transition-all duration-200"
              style={{
                width: isActive ? "20px" : "6px",
                height: "6px",
                backgroundColor: isActive ? "#9c4549" : "#444",
              }}
              aria-label={nav}
            />
          );
        })}
      </div>
    </div>
  );
}
