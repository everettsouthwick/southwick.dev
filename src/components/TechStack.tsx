import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";
import StackIcon from "tech-stack-icons";


interface TechStackItem {
  title: string;
  icon?: string; // Name for the StackIcon component
  src?: string; // Optional path to image for custom icons
  className?: string;
}

export const TechStack = () => {
  const stack: TechStackItem[] = [
    // Frameworks & Platforms
    {
      title: "Node.js",
      icon: "nodejs",
      className: "h-10 w-10",
    },
    {
      title: "Spring Boot",
      icon: "spring",
      className: "h-10 w-10",
    },
    {
      title: "React",
      icon: "reactjs",
      className: "h-10 w-10",
    },
    {
      title: "Next.js",
      icon: "nextjs2",
      className: "h-10 w-10",
    },
    
    // Programming Languages
    {
      title: "C#",
      icon: "csharp",
      className: "h-10 w-10",
    },
    {
      title: "TypeScript",
      icon: "typescript",
      className: "h-10 w-10",
    },
    {
      title: "JavaScript",
      icon: "js",
      className: "h-10 w-10",
    },
    {
      title: "Python",
      icon: "python",
      className: "h-10 w-10",
    },
    {
      title: "Java",
      icon: "java",
      className: "h-10 w-10",
    },
    {
      title: "HTML5",
      icon: "html5",
      className: "h-10 w-10",
    },
    {
      title: "CSS3",
      icon: "css3",
      className: "h-10 w-10",
    },
    {
      title: "Sass",
      icon: "sass",
      className: "h-10 w-10",
    },
    {
      title: "PowerShell",
      icon: "powershell",
      className: "h-10 w-10",
    },
    {
      title: "Bash",
      icon: "bash",
      className: "h-10 w-10",
    },
    
    // Databases
    {
      title: "Supabase",
      icon: "supabase",
      className: "h-10 w-10",
    },
    {
      title: "PostgreSQL",
      icon: "postgresql",
      className: "h-10 w-10",
    },
    {
      title: "MongoDB",
      icon: "mongodb",
      className: "h-10 w-10",
    },
    {
      title: "MySQL",
      icon: "mysql",
      className: "h-10 w-10",
    },
    {
      title: "MariaDB",
      icon: "mariadb",
      className: "h-10 w-10",
    },
    {
      title: "Redis",
      icon: "redis",
      className: "h-10 w-10",
    },
    
    // Cloud Platforms
    {
      title: "Azure",
      icon: "azure",
      className: "h-10 w-10",
    },
    {
      title: "AWS",
      icon: "aws",
      className: "h-10 w-10",
    },
    {
      title: "Google Cloud",
      icon: "gcloud",
      className: "h-10 w-10",
    },
    {
      title: "Netlify",
      icon: "netlify2",
      className: "h-10 w-10",
    },
    {
      title: "Cloudflare",
      icon: "cloudflare",
      className: "h-10 w-10",
    },
    
    // DevOps & Tools
    {
      title: "Docker",
      icon: "docker",
      className: "h-10 w-10",
    },
    {
      title: "Kubernetes",
      icon: "kubernetes",
      className: "h-10 w-10",
    },
    {
      title: "Git",
      icon: "git",
      className: "h-10 w-10",
    },
    {
      title: "Postman",
      icon: "postman",
      className: "h-10 w-10",
    },
    {
      title: "Swagger",
      icon: "swagger",
      className: "h-10 w-10",
    },
    {
      title: "Jest",
      icon: "jest",
      className: "h-10 w-10",
    },
    {
      title: "Cypress",
      icon: "cypress",
      className: "h-10 w-10",
    },
    
    // Operating Systems
    {
      title: "Linux",
      icon: "linux",
      className: "h-10 w-10",
    },
    {
      title: "Ubuntu",
      icon: "ubuntu",
      className: "h-10 w-10",
    },
    {
      title: "Android",
      icon: "android",
      className: "h-10 w-10",
    },
    
    // UI Libraries & Frameworks
    {
      title: "Material-UI",
      icon: "materialui",
      className: "h-10 w-10",
    },
    {
      title: "TailwindCSS",
      icon: "tailwindcss",
      className: "h-10 w-10",
    },
    {
      title: "jQuery",
      icon: "jquery",
      className: "h-10 w-10",
    },
    
    // AI & Other Technologies
    {
      title: "OpenAI",
      icon: "openai",
      className: "h-10 w-10",
    },
  ];
  
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          item.src ? (
            <img
              src={item.src}
              key={item.src}
              width={200}
              height={200}
              alt={item.title}
              className={twMerge("object-contain mr-4 mb-4", item.className)}
            />
          ) : (
            <div key={item.title} className={twMerge("mr-4 mb-4", item.className)}>
              <StackIcon name={item.icon || item.title} />
            </div>
          )
        ))}
      </div>
    </div>
  );
};
