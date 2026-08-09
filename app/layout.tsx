import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter, JetBrains_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const display = Inter({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Khadija Bilal — AI/ML Engineer",
  description:
    "Khadija Bilal is an AI/ML Engineer building practical, production-ready ML systems and AI agents. ML Intern @ FlyRank.",
  openGraph: {
    title: "Khadija Bilal — AI/ML Engineer",
    description:
      "Building practical, production-ready ML systems and AI agents.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-bg text-ink font-body antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
