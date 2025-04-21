import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Metadata } from "next";
import { IconMail } from "@tabler/icons-react";
import { useEffect, useState } from "react";

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

export default function ContactPage() {
  const [emailAddress, setEmailAddress] = useState("");
  
  useEffect(() => {
    const username = "everett";
    const domain = "southwick";
    const tld = "dev";
    setEmailAddress(`${username}@${domain}.${tld}`);
  }, []);
  
  return (
    <Container>
      <span className="text-4xl">✉️</span>
      <Heading className="font-black mb-2">Get in Touch</Heading>
      <Paragraph className="mb-6 max-w-xl">
        Thank you for your interest in connecting. Please use the form below to send me a message,
        or reach out directly via{" "}
        {emailAddress ? (
          <a 
            href={`mailto:${emailAddress}`}
            className="font-medium text-blue-600 hover:underline hover:text-blue-800 transition-colors"
          >
            email
          </a>
        ) : (
          <a href="#" className="font-medium text-blue-600 hover:underline hover:text-blue-800 transition-colors">email</a>
        )}
        .
      </Paragraph>
      <Contact />
    </Container>
  );
}
