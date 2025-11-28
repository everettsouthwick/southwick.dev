import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Highlight } from "@/components/Highlight";
import { SupportContact } from "@/components/SupportContact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SW Software LLC | Company Information & Support",
  description:
    "Official company information and support contact details for SW Software LLC.",
  openGraph: {
    title: "SW Software LLC | Company Information & Support",
    description:
      "Learn more about SW Software LLC and how to contact us for product and app support.",
    url: "https://southwick.dev/sw-software",
    siteName: "SW Software LLC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SW Software LLC | Company Information & Support",
    description:
      "Official company information and support contact details for SW Software LLC.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SwSoftwarePage() {
  return (
    <Container>
      <span className="text-4xl">🏢</span>
      <Heading className="font-black mb-4">SW Software LLC</Heading>

      <Paragraph className="max-w-2xl mb-4">
        <Highlight>SW Software LLC</Highlight> is a software development company
        focused on building high-quality web applications, cloud-native backends,
        and developer tooling.
      </Paragraph>

      <Heading as="h2" className="font-black text-lg mt-10 mb-3">
        Company Information
      </Heading>
      <Paragraph className="max-w-2xl mb-2">
        Legal name: <Highlight>SW Software LLC</Highlight>
      </Paragraph>
      <Paragraph className="max-w-2xl mb-2">
        Business focus: Software engineering, consulting, and product development.
      </Paragraph>

      <Heading as="h2" className="font-black text-lg mt-10 mb-3">
        Support & Contact
      </Heading>
      <Paragraph className="max-w-2xl mb-2">
        For questions about apps, products, or services provided by SW Software LLC,
        please use the support form below. Your message will be sent directly to
        the SW Software support inbox.
      </Paragraph>
      <div className="mt-6 max-w-2xl">
        <SupportContact />
      </div>
    </Container>
  );
}

