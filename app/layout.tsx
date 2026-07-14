import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazir",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "نگین جواهر | جواهرات دست‌ساز",
  description:
    "نگین جواهر؛ آتلیه‌ی جواهرات دست‌ساز. هر قطعه با دست طراحی و تراش می‌خورد تا نگینی از یک لحظه‌ی ماندگار باشد. مشاهده گالری و رزرو مشاوره اختصاصی.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className="font-body bg-ink text-porcelain antialiased">
        {children}
      </body>
    </html>
  );
}
