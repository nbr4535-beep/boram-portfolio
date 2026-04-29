import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

export default function Archive() {
  return (
    <div className="relative min-h-screen max-w-[390px] mx-auto bg-[#f9f9f9] pb-[100px]">
      <Header />

      <main className="px-5 pt-6 space-y-6">
        <div>
          <h1 className="text-[28px] font-medium" style={{ color: "#2f3334" }}>Archive</h1>
          <p className="text-[13px] mt-1" style={{ color: "#5e5f5f" }}>
            스터디 및 기타 작업 기록
          </p>
        </div>

        <div className="space-y-3">
          {[
            { year: "2026", title: "UX 스터디 — 정보 구조 설계 워크숍", tag: "스터디" },
            { year: "2025", title: "모바일 앱 UI 키트 제작", tag: "개인 작업" },
            { year: "2025", title: "UX 리서치 방법론 정리 노트", tag: "스터디" },
            { year: "2025", title: "데이터 기반 UX 개선 사례 분석", tag: "리서치" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-lg px-4 py-3 shadow-sm flex items-center justify-between"
            >
              <div>
                <p className="text-[10px]" style={{ color: "#9c4549" }}>{item.year}</p>
                <p className="text-[14px] font-medium mt-0.5" style={{ color: "#2f3334" }}>{item.title}</p>
              </div>
              <span
                className="text-[8px] px-2 py-1 rounded-sm whitespace-nowrap"
                style={{ backgroundColor: "#f4f1e2", color: "#5b5b4f" }}
              >
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
