import type { Metadata } from "next"
import PortfolioClient from "../components/PortfolioClient"


export const metadata: Metadata = {
  metadataBase: new URL("https://ahmedghounami.vercel.app"),
  title: {
    default: "Ahmed Ghounami — Full-Stack Developer",
    template: "%s | Ahmed Ghounami",
  },
  description:
    "Portfolio of Ahmed Ghounami — full-stack developer specializing in React, Next.js, Node.js, React Native, and modern web applications.",
  applicationName: "Ahmed Ghounami Portfolio",
  category: "technology",
  authors: [{ name: "Ahmed Ghounami", url: "https://ahmedghounami.vercel.app" }],
  creator: "Ahmed Ghounami",
  publisher: "Ahmed Ghounami",
  keywords: [
    "Ahmed Ghounami",
    "Full-stack developer",
    "React developer",
    "Next.js",
    "Node.js",
    "React Native",
    "Web developer portfolio",
    "Mobile app developer",
    "Frontend",
    "Backend",
    "TypeScript",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://ahmedghounami.vercel.app/",
    siteName: "Ahmed Ghounami Portfolio",
    title: "Ahmed Ghounami — Full-Stack Developer",
    description:
      "Explore projects and experience building modern web and mobile applications with React, Next.js, Node.js, and React Native.",
    locale: "en_US",
    images: [
      {
        url: "/https://cdn.intra.42.fr/users/7ec5d8829b0f0d9e26713b331df85178/aghounam.JPG",
        width: 1200,
        height: 630,
        alt: "Ahmed Ghounami — Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Ghounami — Full-Stack Developer",
    description:
      "Projects, skills, and experience in React, Next.js, Node.js, and React Native.",
    images: ["/https://cdn.intra.42.fr/users/7ec5d8829b0f0d9e26713b331df85178/aghounam.JPG"],
    
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#0b1220",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
  },
  
  other: {
    "github:url": "https://github.com/ahmedghounami",
    "linkedin:url": "https://www.linkedin.com/in/ahmed-ghounami-a675b1294/",
  },
}




export default function Page() {
  // Server component by default — nice and minimal
  return <PortfolioClient />
}
