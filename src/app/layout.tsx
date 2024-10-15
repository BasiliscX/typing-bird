// src/app/Layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Typing Birds - An Interactive Typing Challenge Game",
  description:
    "Typing Birds is a fun and challenging typing game where players help a bird navigate obstacles by typing letters correctly. Created by Guillermo Navarro.",
  openGraph: {
    title: "Typing Birds - An Interactive Typing Challenge Game",
    description:
      "A fun and challenging typing game where you help a bird navigate obstacles by typing letters correctly.",
    images: [
      {
        url: "/images/typing-birds-preview.png",
        width: 1200,
        height: 630,
        alt: "Typing Birds Game Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Typing Birds - An Interactive Typing Challenge Game",
    description:
      "A fun and challenging typing game where you help a bird navigate obstacles by typing letters correctly.",
    images: ["/images/typing-birds-preview.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
