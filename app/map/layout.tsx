import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Coverage — Anakin",
  description:
    "Anakin's web scraping infrastructure spans every major market. See our global coverage map.",
  openGraph: {
    title: "Global Coverage — Anakin",
    description:
      "Anakin's web scraping infrastructure spans every major market worldwide.",
    url: "https://anakin.io/map",
    siteName: "Anakin",
    type: "website",
  },
};

export default function MapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
