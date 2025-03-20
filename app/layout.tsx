import type { Metadata } from "next";
import { Figtree } from "next/font/google";

import "./globals.css";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BarterNow - AI-Powered Food Trading Platform",
  description: "Transform your kitchen with instant food matching and trading. Join our thriving community to eliminate waste and boost savings. AI-powered food sharing platform.",
  keywords: "food trading, food sharing, AI food matching, community food exchange, reduce food waste, sustainable food, food bartering, food swap, food marketplace",
  authors: [{ name: "BarterNow Team" }],
  creator: "BarterNow",
  publisher: "BarterNow",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://barternow.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://barternow.app',
    siteName: 'BarterNow',
    title: 'BarterNow - AI-Powered Food Trading Platform',
    description: 'Transform your kitchen with instant food matching and trading. Join our thriving community to eliminate waste and boost savings.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BarterNow Platform Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BarterNow - AI-Powered Food Trading Platform',
    description: 'Transform your kitchen with instant food matching and trading. Join our thriving community to eliminate waste and boost savings.',
    images: ['/images/twitter-image.jpg'],
    creator: '@barternow',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.className} antialiased`}>{children}</body>
    </html>
  );
}
