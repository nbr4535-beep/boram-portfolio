"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    href: "/",
    label: "Home",
    icon: (active: boolean) => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 9.5L12 3L21 9.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V9.5Z"
          fill={active ? "#88133b" : "#a1a1aa"}
        />
      </svg>
    ),
  },
  {
    href: "/about",
    label: "About",
    icon: (active: boolean) => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" fill={active ? "#88133b" : "#a1a1aa"} />
        <path
          d="M4 20C4 16.69 7.58 14 12 14C16.42 14 20 16.69 20 20"
          stroke={active ? "#88133b" : "#a1a1aa"}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    href: "/projects",
    label: "Projects",
    icon: (active: boolean) => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="3"
          width="8"
          height="8"
          rx="1"
          fill={active ? "#88133b" : "#a1a1aa"}
        />
        <rect
          x="13"
          y="3"
          width="8"
          height="8"
          rx="1"
          fill={active ? "#88133b" : "#a1a1aa"}
        />
        <rect
          x="3"
          y="13"
          width="8"
          height="8"
          rx="1"
          fill={active ? "#88133b" : "#a1a1aa"}
        />
        <rect
          x="13"
          y="13"
          width="8"
          height="8"
          rx="1"
          fill={active ? "#88133b" : "#a1a1aa"}
        />
      </svg>
    ),
  },
  {
    href: "/archive",
    label: "Archive",
    icon: (active: boolean) => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="5" rx="1" fill={active ? "#88133b" : "#a1a1aa"} />
        <path
          d="M3 10H21V20C21 20.55 20.55 21 20 21H4C3.45 21 3 20.55 3 20V10Z"
          fill={active ? "#88133b" : "#a1a1aa"}
        />
        <path d="M10 15H14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] bg-white border-t border-gray-100 pb-safe">
      <div className="flex items-center justify-around py-3 px-4">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center gap-1"
            >
              {item.icon(isActive)}
              <span
                className="text-[8px] font-normal"
                style={{ color: isActive ? "#88133b" : "#a1a1aa" }}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
