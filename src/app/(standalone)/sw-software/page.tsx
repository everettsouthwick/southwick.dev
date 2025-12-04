import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Highlight } from "@/components/Highlight";
import { SupportContact } from "@/components/SupportContact";
import { AppSupportCard } from "@/components/AppSupportCard";
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
      <Paragraph className="max-w-2xl mb-3">
        <strong>Legal name:</strong> <Highlight>SW Software LLC</Highlight>
      </Paragraph>
      <Paragraph className="max-w-2xl mb-3">
        <strong>Business type:</strong> Limited Liability Company (LLC)
      </Paragraph>
      <Paragraph className="max-w-2xl mb-3">
        <strong>Business focus:</strong> Software engineering, consulting, and product development. We specialize in building high-quality mobile applications, web applications, cloud-native backends, and developer tooling.
      </Paragraph>
      <Paragraph className="max-w-2xl mb-3">
        <strong>Services:</strong> SW Software LLC develops and maintains consumer and business software applications, including iOS applications, web applications, and cloud-based services.
      </Paragraph>

      <Heading as="h2" className="font-black text-lg mt-10 mb-3">
        Our Applications
      </Heading>
      <Paragraph className="max-w-2xl mb-6">
        SW Software LLC develops and maintains consumer applications. Below are our primary applications available to users. For support, technical assistance, or inquiries about any of our applications, please visit the respective application website or contact us using the form below.
      </Paragraph>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <AppSupportCard
          name="Stepio"
          description="Transform your daily walks into exciting challenges. Track steps, climb leaderboards, and unlock achievements while staying healthy with friends."
          supportUrl="https://www.getstep.io"
          websiteUrl="https://www.getstep.io"
          primaryColor="#388e3c"
          secondaryColor="#2e7d32"
          accentColor="#1b5e20"
          icon="👟"
        />
        <AppSupportCard
          name="Go Global Entry"
          description="Secure earlier Global Entry appointments through our modern platform. Get instant notifications when earlier slots become available."
          supportUrl="https://www.goglobalentry.com"
          websiteUrl="https://www.goglobalentry.com"
          primaryColor="#0059B3"
          secondaryColor="#004a96"
          accentColor="#003d7a"
          icon="✈️"
        />
      </div>

      <Heading as="h2" className="font-black text-lg mt-10 mb-3">
        Support & Contact
      </Heading>
      <Paragraph className="max-w-2xl mb-2">
        For questions, technical support, or inquiries about apps, products, or services provided by SW Software LLC,
        please use the contact form below. Your message will be sent directly to
        the SW Software support team.
      </Paragraph>
      <Paragraph className="max-w-2xl mb-4 text-sm text-gray-600">
        For application-specific support, please visit the respective application website using the links provided above.
      </Paragraph>
      <div className="mt-6 max-w-2xl">
        <SupportContact />
      </div>
    </Container>
  );
}

