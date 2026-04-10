import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Akxshv — Engineered Clarity",
  description:
    "A premium mechanical keyboard built for precision. Experience layered engineering through our interactive scroll experience.",
};

import TopBar from "@/components/TopBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-full" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
          <TopBar />
          {children}
      </body>
    </html>
  );
}
