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


export const metadata = {
  title: "Ahmed Ghounami | Full Stack Developer Portfolio",
  description:
    "Portfolio of Ahmed Ghounami — full stack developer specializing in React, Next.js, Node.js,React Native, and modern web applications.",
  keywords: [
    "Ahmed Ghounami",
    "full stack developer",
    "React developer",
    "Next.js",
    "Node.js",
    "web developer portfolio",
    "mobile app developer",
  ],
  openGraph: {
    title: "Ahmed Ghounami | Full Stack Developer",
    description:
      "Explore my projects and experience as a full stack developer building modern web applications.",
    url: "https://ahmedghounami.vercel.app/",
    type: "website",
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
