import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "바이브코딩 컨설팅",
    template: "%s - 바이브코딩",
  },
  description: "바이브코딩 컨설팅 서비스 소개 및 고객 문의 접수",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKR.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased bg-white text-[#334155]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
