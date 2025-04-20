import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact | Everett Southwick",
  description:
    "Get in touch with Everett Southwick, Principal Software and DevOps Engineer based in Tampa, FL. Reach out for project inquiries, consulting services, or collaboration opportunities.",
  keywords: "contact Everett Southwick, software engineer contact, Tampa FL developer, project inquiries, consulting services, collaboration opportunities",
  authors: [{ name: "Everett Southwick" }],
  openGraph: {
    title: "Contact | Everett Southwick",
    description: "Get in touch with Everett Southwick, Principal Software and DevOps Engineer based in Tampa, FL.",
    url: "https://southwick.dev/contact",
    siteName: "Everett Southwick Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Everett Southwick",
    description: "Get in touch with Everett Southwick, Principal Software Engineer based in Tampa, FL.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">✉️</span>
      <Heading className="font-black mb-2">Contact Me</Heading>
      <Paragraph className="mb-10 max-w-xl">
        Reach out to me over email or fill up this contact form. I will get back
        to you ASAP - I promise.{" "}
      </Paragraph>
      <Contact />
    </Container>
  );
}
