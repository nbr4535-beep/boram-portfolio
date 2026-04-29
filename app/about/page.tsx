import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

export default function About() {
  return (
    <div className="relative min-h-screen max-w-[390px] mx-auto bg-[#f9f9f9] pb-[100px]">
      <Header />

      <main className="px-5 pt-6 space-y-8">
        {/* Section 1 */}
        <section className="space-y-3">
          <h1
            className="text-[26px] font-extrabold leading-tight"
            style={{ color: "#2f3334", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            경험이 쌓여
            <br />
            지금의 저를 만들었습니다
          </h1>
          <p className="text-[13px] leading-relaxed" style={{ color: "#5e5f5f" }}>
            저는 사람을 오래 경험해 온 사람입니다.
            호주에서 비즈니스를 전공하며 서비스와 조직을 구조적으로 바라보는 시각을 배웠고,
            한국에서의 경력을 포함한 다양한 현장 경험을 통해 사람과 서비스 사이의 접점을
            이해하는 감각을 쌓아왔습니다.
          </p>
        </section>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-200" />

        {/* Section 2 */}
        <section className="space-y-3">
          <h2
            className="text-[22px] font-bold leading-tight"
            style={{ color: "#2f3334" }}
          >
            11년의 현장 경험,
            <br />
            그리고 UX로의 전환
          </h2>
          <p className="text-[13px] leading-relaxed" style={{ color: "#5e5f5f" }}>
            저는 단순히 요리를 하던 사람이 아닙니다.
          </p>
          <ul className="text-[13px] space-y-1" style={{ color: "#5e5f5f" }}>
            <li>• 매장 운영 관리</li>
            <li>• 직원 채용 및 교육</li>
            <li>• 매출 및 운영 보고</li>
            <li>• 고객 VOC 대응 및 프로세스 개선</li>
            <li>• 스케줄 및 원가 관리</li>
          </ul>
          <p className="text-[13px] leading-relaxed" style={{ color: "#5e5f5f" }}>
            이 경험들이 UX 디자인으로의 전환에 자연스러운 다리가 되었습니다.
          </p>
        </section>

        {/* Quote */}
        <div className="py-4 border-l-4 pl-4" style={{ borderColor: "#ffabaa" }}>
          <p className="text-[14px] italic leading-relaxed" style={{ color: "#2f3334" }}>
            "저는 화면을 디자인하는 사람보다는<br />이해를 설계하는 사람이고 싶습니다."
          </p>
        </div>

        {/* Section 3 */}
        <section className="space-y-3">
          <p className="text-[13px] leading-relaxed" style={{ color: "#5e5f5f" }}>
            부트캠프에서 총 3회, 부트캠프 내 스터디에서 1회의 프로젝트를 진행하며
            기능을 추가하는 사람이 아니라 맥락을 정리하는 사람이 되었습니다.
            숨고, 오늘의집, AZIT, ARENA 프로젝트를 통해 실제 사용자 문제를 정의하고
            구조적으로 해결하는 경험을 쌓았습니다.
          </p>
        </section>

        {/* Goals */}
        <section className="space-y-3">
          <h2 className="text-[20px] font-medium" style={{ color: "#2f3334" }}>앞으로의 목표</h2>
          <p className="text-[13px] leading-relaxed" style={{ color: "#5e5f5f" }}>
            저는 문제를 정확히 정의하는 디자이너로 성장하고 싶습니다.
            또한 실제 프로덕트 환경에서 개발자와 협업하며 기획 의도가 구현 과정에서
            어떻게 구체화되는지 직접 경험하고 싶습니다.
          </p>
        </section>

        {/* Toolkit */}
        <section className="space-y-3">
          <h2 className="text-[22px] font-normal" style={{ color: "#000" }}>Toolkit</h2>
          <div className="flex flex-wrap gap-2">
            {["Figma", "Notion", "Slack", "Midjourney", "ChatGPT"].map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 rounded-lg text-[12px] font-medium"
                style={{ backgroundColor: "#fff", color: "#2f3334", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="space-y-3 pb-4">
          <h2 className="text-[22px] font-normal" style={{ color: "#000" }}>Contact</h2>
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
