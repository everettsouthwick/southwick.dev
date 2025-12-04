import Link from "next/link";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";

interface AppSupportCardProps {
  name: string;
  description: string;
  supportUrl: string;
  websiteUrl: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  icon?: string;
}

export function AppSupportCard({
  name,
  description,
  supportUrl,
  websiteUrl,
  primaryColor,
  secondaryColor,
  accentColor,
  icon,
}: AppSupportCardProps) {
  return (
    <div
      className="rounded-2xl p-10 md:p-12 text-white transition-transform hover:scale-[1.02] shadow-xl min-h-[320px] flex flex-col"
      style={{
        background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
      }}
    >
      <div className="flex items-start justify-between mb-8">
        {icon && <span className="text-6xl md:text-7xl">{icon}</span>}
        <Link
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/90 hover:text-white text-sm md:text-base font-medium underline transition-colors"
        >
          Visit Website →
        </Link>
      </div>
      
      <Heading as="h3" className="text-3xl md:text-4xl font-black mb-5 text-white">
        {name}
      </Heading>
      
      <Paragraph className="text-white/90 mb-8 max-w-xl text-base md:text-lg flex-grow">
        {description}
      </Paragraph>
      
      <Link
        href={supportUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-4 rounded-lg font-semibold text-base md:text-lg transition-all hover:shadow-2xl hover:scale-105 w-fit"
        style={{
          backgroundColor: accentColor,
          color: "white",
        }}
      >
        Visit for Support
      </Link>
    </div>
  );
}

