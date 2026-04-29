import Link from "next/link";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  return (
    <div className="relative min-h-screen max-w-[390px] mx-auto bg-[#f9f9f9] pb-[100px]">
      <Header />

      <main className="px-5 pt-8 space-y-10">
        {/* Intro */}
        <section className="space-y-4">
          <div className="space-y-3">
            <h1
              className="text-[32px] font-extrabold leading-tight"
              style={{
                color: "#2f3334",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              이해되는 경험을 만드는
              <br />
              UXUI 디자이너,
              <br />
              나보람 입니다.
            </h1>
            <p className="text-[12px] leading-relaxed" style={{ color: "#5e5f5f" }}>
              저는 Figma를 기반으로 한 UX/UI 디자인 역량을 갖춘 디자이너입니다.
              이전 CS 경험을 바탕으로 서비스와 사용자를 사업적 관점에서 구조적으로
              바라보는 사고를 길렀으며, 실제 사용자의 불편과 니즈를 UX 개선으로
              연결하는 데 강점을 가지고 있습니다.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-12 h-[1px]" style={{ backgroundColor: "#ffabaa" }} />
            <Link href="/about" className="text-[12px]" style={{ color: "#5e5f5f" }}>
              Go to ABOUT
            </Link>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="space-y-4">
          <h2 className="text-[22px] font-normal" style={{ color: "#000" }}>
            Featured Projects
          </h2>

          {/* ARENA card */}
          <Link href="/projects/arena" className="block rounded-lg overflow-hidden shadow-sm">
            <div
              className="w-full h-[267px] flex items-center justify-center relative overflow-hidden"
              style={{ backgroundColor: "#121212" }}
            >
              <div className="absolute w-[244px] h-[244px] rounded-full opacity-10 bg-gray-400" />
              <span
                className="text-[55px] font-black tracking-wider"
                style={{ color: "white", letterSpacing: "0.1em" }}
              >
                ARENA
              </span>
              <div
                className="absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center border border-gray-700"
                style={{ backgroundColor: "#121212" }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <div className="bg-white px-5 py-4">
              <div className="flex gap-2 mb-3">
                <span className="text-[8px] px-2 py-1 rounded-sm" style={{ backgroundColor: "#bfe4e0", color: "#325451" }}>
                  신규 프로젝트
                </span>
                <span className="text-[8px] px-2 py-1 rounded-sm" style={{ backgroundColor: "#f4f1e2", color: "#5b5b4f" }}>
                  모바일
                </span>
              </div>
              <p className="text-[22px] font-medium" style={{ color: "#000" }}>ARENA</p>
              <p className="text-[12px] mt-1" style={{ color: "#666" }}>
                이스포츠 중계와 팬 경험을 연결하는 흐름 중심 신규 서비스 기획 프로젝트
              </p>
            </div>
          </Link>

          <Link
            href="/projects"
            className="flex items-center gap-3 px-5 py-3 rounded-full text-[12px] font-medium w-fit"
            style={{ backgroundColor: "#914a4b", color: "#fff7f6" }}
          >
            View all projects
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#fff7f6" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </Link>
        </section>

        {/* Toolkit */}
        <section className="space-y-4">
          <h2 className="text-[22px] font-normal" style={{ color: "#000" }}>
            Toolkit
          </h2>
          <div
            className="flex items-center gap-3 px-4 py-4 rounded-xl"
            style={{ backgroundColor: "#a1a1aa" }}
          >
            {/* Figma */}
            <div className="w-11 h-11 bg-white rounded-lg flex items-center justify-center shadow-sm">
              <svg width="20" height="24" viewBox="0 0 38 57" fill="none">
                <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19H19v9.5Z" fill="#1ABCFE" />
                <path d="M9.5 47.5A9.5 9.5 0 0 1 19 38v9.5H9.5Z" fill="#0ACF83" />
                <path d="M9.5 9.5H19V19H9.5A9.5 9.5 0 1 1 9.5 9.5Z" fill="#FF7262" />
                <path d="M9.5 28.5H19A9.5 9.5 0 1 1 9.5 19v9.5Z" fill="#F24E1E" />
                <path d="M28.5 28.5A9.5 9.5 0 1 1 19 19h9.5v9.5Z" fill="#A259FF" />
              </svg>
            </div>
            {/* Notion */}
            <div className="w-11 h-11 bg-white rounded-lg flex items-center justify-center shadow-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="black">
                <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.887l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
              </svg>
            </div>
            {/* Slack */}
            <div className="w-11 h-11 bg-white rounded-lg flex items-center justify-center shadow-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M8.5 5.5C8.5 4.395 9.395 3.5 10.5 3.5C11.605 3.5 12.5 4.395 12.5 5.5V10.5H8.5V5.5Z" fill="#E01E5A" />
                <path d="M5.5 15.5C4.395 15.5 3.5 14.605 3.5 13.5C3.5 12.395 4.395 11.5 5.5 11.5H10.5V15.5H5.5Z" fill="#36C5F0" />
                <path d="M18.5 8.5C19.605 8.5 20.5 9.395 20.5 10.5C20.5 11.605 19.605 12.5 18.5 12.5H13.5V8.5H18.5Z" fill="#2EB67D" />
                <path d="M15.5 18.5C15.5 19.605 14.605 20.5 13.5 20.5C12.395 20.5 11.5 19.605 11.5 18.5V13.5H15.5V18.5Z" fill="#ECB22E" />
                <path d="M5.5 8.5H8.5V11.5H5.5C4.395 11.5 3.5 10.605 3.5 9.5C3.5 8.395 4.395 7.5 5.5 7.5Z" fill="#E01E5A" fillOpacity="0.5" />
                <path d="M13.5 3.5H15.5V8.5H13.5V3.5Z" fill="#ECB22E" fillOpacity="0.5" />
              </svg>
            </div>
            {/* Midjourney */}
            <div className="w-11 h-9 bg-white rounded-lg flex items-center justify-center shadow-sm px-1">
              <span className="text-[9px] font-bold text-black leading-none text-center">Mid<br/>journey</span>
            </div>
            {/* ChatGPT */}
            <div className="w-11 h-11 bg-white rounded-lg flex items-center justify-center shadow-sm">
              <svg width="20" height="20" viewBox="0 0 41 41" fill="none">
                <path d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835 9.964 9.964 0 0 0-6.215-2.972 10.079 10.079 0 0 0-10.204 6.992 9.967 9.967 0 0 0-6.697 4.833 10.079 10.079 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 6.215 2.973 10.079 10.079 0 0 0 10.205-6.993 9.967 9.967 0 0 0 6.697-4.834 10.079 10.079 0 0 0-1.241-11.816z" fill="#10A37F" />
                <path d="M25.5 10a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15zm-9 4v7h2v-7h-2zm0 0" fill="white" fillOpacity="0.5" />
              </svg>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="space-y-4">
          <h2 className="text-[22px] font-normal" style={{ color: "#000" }}>
            Contact
          </h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                <svg width="16" height="13" viewBox="0 0 24 20" fill="none">
                  <path d="M2 4C2 2.9 2.9 2 4 2H20C21.1 2 22 2.9 22 4V16C22 17.1 21.1 18 20 18H4C2.9 18 2 17.1 2 16V4Z" stroke="#325451" strokeWidth="1.5" />
                  <path d="M2 4L12 11L22 4" stroke="#325451" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-[18px]" style={{ color: "#000" }}>nbr4535@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="#325451" />
                </svg>
              </div>
              <span className="text-[18px]" style={{ color: "#000" }}>010-9019-4535</span>
            </div>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
