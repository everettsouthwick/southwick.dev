import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Everett</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a Senior Software Engineer that loves{" "}
        <Highlight>building solutions</Highlight> and cloud applications that help people
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        With <Highlight>over a decade of experience</Highlight>, I specialize in both backend 
        cloud-native architectures, API design, and distributed systems as well as frontend development 
        using React, Next.js, and Tailwind CSS. My full-stack expertise creates cohesive 
        applications that combine robust backends with intuitive user interfaces.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products limit={4} />
      <TechStack />
    </Container>
  );
}
