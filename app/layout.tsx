import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";

import "./globals.css";

const fontSans = Inter_Tight({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bartr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.className} antialiased`}>{children}</body>
    </html>
  );
}
