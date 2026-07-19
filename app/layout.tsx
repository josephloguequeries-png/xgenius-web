import type { Metadata } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.xgenieapp.com"),
  title: "xGenie | Football Market Intelligence",
  description:
    "Football market intelligence built to assess probability, price and risk across the markets.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "xGenie | Football Market Intelligence",
    description:
      "Football market intelligence built to assess probability, price and risk across the markets.",
    url: "https://www.xgenieapp.com",
    siteName: "xGenie",
    images: ["/opengraph-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "xGenie | Football Market Intelligence",
    description:
      "Football market intelligence built to assess probability, price and risk across the markets.",
    images: ["/twitter-image.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${plexSans.variable} ${plexMono.variable}`}>{children}</body>
    </html>
  );
}
