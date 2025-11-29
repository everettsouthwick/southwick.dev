import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { LayoutWrapper } from "@/components/LayoutWrapper";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Everett Southwick - Senior Software Engineer",
  description:
    "Experienced Senior Software Engineer based in Tampa, FL. Specializing in modern web development, cloud architecture, and scalable solutions. View my portfolio of projects and technical expertise.",
  keywords: "software engineer, senior developer, DevOps, Tampa FL, web development, cloud architecture, full-stack developer",
  authors: [{ name: "Everett Southwick" }],
  openGraph: {
    title: "Everett Southwick - Senior Software Engineer",
    description: "Experienced Senior Software Engineer based in Tampa, FL. View my portfolio and technical expertise.",
    url: "https://southwick.dev",
    siteName: "Everett Southwick Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Everett Southwick - Senior Software Engineer",
    description: "Senior Software Engineer based in Tampa, FL.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-gray-100"
        )}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
