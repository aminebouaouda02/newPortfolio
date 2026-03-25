import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amine Bouaouda | Portfolio",
  description:
    "Portfolio of Amine Bouaouda — M1 Big Data & IoT student at ENSAM Casablanca",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
