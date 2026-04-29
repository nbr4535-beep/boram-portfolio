import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "나보람 포트폴리오",
  description: "UX/UI 디자이너 나보람의 포트폴리오",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="h-full">
      <body className="min-h-full bg-[#f9f9f9]">{children}</body>
    </html>
  );
}
