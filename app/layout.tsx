import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diya Solanki",
  description:
    "Software engineer building dev tools, language servers, and creative-coding infrastructure.",
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