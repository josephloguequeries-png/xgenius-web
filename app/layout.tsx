import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "xGenius | Football Betting Intelligence",
  description:
    "Model-led football betting intelligence with fair odds, EV signals, risk flags and transparent tracking.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
