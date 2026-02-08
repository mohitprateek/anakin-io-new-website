import type { Metadata } from "next";
import { Inter, JetBrains_Mono, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anakin — Scrape the Unscrapable",
  description:
    "The web scraping API battle-tested on the hardest websites for the world's largest enterprises. 99.5% accuracy. Sub-second speed. Three lines of code.",
  openGraph: {
    title: "Anakin — Scrape the Unscrapable",
    description:
      "Enterprise-grade web scraping API. 99.5% accuracy. Sub-second speed. Backed by Y Combinator.",
    url: "https://anakin.io",
    siteName: "Anakin",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anakin — Scrape the Unscrapable",
    description:
      "Enterprise-grade web scraping API. 99.5% accuracy. Sub-second speed. Backed by Y Combinator.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${dmSerif.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
