import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const futuraPT = localFont({
  src: [
    { path: "../../public/fonts/FuturaPTLight.otf",  weight: "300", style: "normal" },
    { path: "../../public/fonts/FuturaPTBook.otf",   weight: "400", style: "normal" },
    { path: "../../public/fonts/FuturaPTMedium.otf", weight: "500", style: "normal" },
    { path: "../../public/fonts/FuturaPTDemi.otf",   weight: "600", style: "normal" },
    { path: "../../public/fonts/FuturaPTBold.otf",   weight: "700", style: "normal" },
    { path: "../../public/fonts/FuturaPTHeavy.otf",  weight: "800", style: "normal" },
  ],
  variable: "--font-futura",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Steelton Village — Lotus Company",
  description: "Steelton Village Phase 1 — Investment Presentation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={futuraPT.variable}>
      <body>{children}</body>
    </html>
  );
}
