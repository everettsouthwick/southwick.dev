import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects | Everett Southwick",
  description:
    "Browse Everett Southwick's portfolio of web applications, software projects, and technical solutions. A collection of work demonstrating expertise in modern development technologies and problem-solving approaches.",
  keywords: "software projects, web applications, technical solutions, portfolio, Tampa FL, modern development, full-stack projects, software architecture",
  authors: [{ name: "Everett Southwick" }],
  openGraph: {
    title: "Projects | Everett Southwick",
    description: "Browse Everett Southwick's portfolio of web applications, software projects, and technical solutions.",
    url: "https://southwick.dev/projects",
    siteName: "Everett Southwick Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Everett Southwick",
    description: "Browse Everett Southwick's portfolio of software projects and technical solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">⚡</span>
      <Heading className="font-black mb-10">
        {" "}
        What I&apos;ve been working on
      </Heading>

      <Products />
    </Container>
  );
}
