import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WomenX Innovators",
  description: "Community of women innovators, founders, mentors, and investors.",
  openGraph: {
    title: "WomenX Innovators",
    description: "Community of women innovators, founders, mentors, and investors.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WomenX Innovators",
    description: "Community of women innovators, founders, mentors, and investors.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        {children}
      </body>
    </html>
  );
}
