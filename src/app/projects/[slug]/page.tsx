import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { SingleProduct } from "@/components/Product";
import { Products } from "@/components/Products";
import { products } from "@/constants/products";
import { Product } from "@/types/products";
import { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const product = products.find((p) => p.slug === slug) as Product | undefined;
  
  if (product) {
    return {
      title: `${product.title} | Everett Southwick`,
      description: product.description,
      keywords: `${product.title}, software project, web application, Tampa FL, modern development`,
      authors: [{ name: "Everett Southwick" }],
      openGraph: {
        title: `${product.title} | Everett Southwick`,
        description: product.description,
        url: `https://southwick.dev/projects/${slug}`,
        siteName: "Everett Southwick Portfolio",
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: `${product.title} | Everett Southwick`,
        description: product.description,
      },
      robots: {
        index: true,
        follow: true,
      },
    };
  } else {
    return {
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
  }
}

export default function SingleProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    redirect("/projects");
  }
  return (
    <Container>
      <SingleProduct product={product} />
    </Container>
  );
}
