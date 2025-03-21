import type { Metadata } from "next";
import { Figtree } from "next/font/google";

import "./globals.css";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BarterNow - AI-Powered Trading Platform",
  description: "Trade anything for anything with instant matching. Join our thriving community to exchange items and save money. AI-powered trading platform.",
  keywords: "trading platform, item exchange, AI matching, community trading, bartering, item swap, marketplace, peer-to-peer trading",
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
    title: 'BarterNow - AI-Powered Trading Platform',
    description: 'Trade anything for anything with instant matching. Join our thriving community to exchange items and save money.',
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
    title: 'BarterNow - AI-Powered Trading Platform',
    description: 'Trade anything for anything with instant matching. Join our thriving community to exchange items and save money.',
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
