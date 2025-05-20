import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { getAllBlogs } from "../../../lib/getAllBlogs";
import { Blogs } from "@/components/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Everett Southwick",
  description:
    "Explore Everett Southwick's technical articles and insights on software development, DevOps, and modern web technologies. Sharing knowledge and experiences from the perspective of a senior software engineer.",
  keywords: "software engineering blog, technical articles, web development, DevOps, Tampa FL, coding tutorials, software architecture",
  authors: [{ name: "Everett Southwick" }],
  openGraph: {
    title: "Blog | Everett Southwick",
    description: "Technical articles and insights on software development and modern web technologies by Everett Southwick.",
    url: "https://southwick.dev/blog",
    siteName: "Everett Southwick Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Everett Southwick",
    description: "Technical articles and insights by senior software engineer Everett Southwick.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function Blog() {
  const blogs = await getAllBlogs();
  const data = blogs.map(({ component, ...meta }) => meta);

  return (
    <Container>
      <span className="text-4xl">📝</span>
      <Heading className="font-black pb-4">I write about technology</Heading>
      <Paragraph className="pb-10">
        Ever since <Highlight> I was a kid</Highlight>, I&apos;ve been
        fascinated by technology.
      </Paragraph>
      <Blogs blogs={data} />
    </Container>
  );
}
