"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function About() {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  useEffect(() => {
    // Create array of all possible images
    const allImages = Array.from({ length: 13 }, (_, i) => `/images/everett-about-me-${i + 1}.webp`);
    
    // Randomly select 4 unique images
    const randomImages: string[] = [];
    const availableImages = [...allImages];
    
    while (randomImages.length < 4 && availableImages.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableImages.length);
      randomImages.push(availableImages[randomIndex]);
      availableImages.splice(randomIndex, 1);
    }
    
    setSelectedImages(randomImages);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {selectedImages.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <img
              src={image}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className="mt-4">
          Hey there, I&apos;m Everett Southwick &#8212; a dedicated software engineer, cloud architect, and problem solver.
        </Paragraph>
        <Paragraph className="mt-4">
          Programming is my passion, and using it to help people and positively impact their lives is what I&apos;ve always wanted to do. I love to travel, I have a dog named Mittens (named for his four little white paws), I&apos;m a fan of the KC Chiefs, provolone is my cheese of choice, and my favorite number is 24.
        </Paragraph>
        <Paragraph className="mt-4">
          I was immediately fascinated with computers and technology ever since I first used a computer at 6 years old &#8212; and that drove me to take all the development courses available to me throughout school and spend countless hours outside of school learning to program. By the time I was 11, I started learning HTML5 and CSS3 on my own. At 14, I learned Java, Visual Basic, JavaScript, jQuery, and SQL.
        </Paragraph>
        <Paragraph className="mt-4">
          At 16 years of age, realizing the power of technology and the profound impact it had on me growing up, I was inspired to co-found a charity. We provided immunocompromised children with computers, games, and a safe online environment for them to play and socialize with other kids. I managed the website, forums, and server administration while also helping draft our administrative policies, overseeing our team of over 100 volunteers, and participating on the board of directors to expand our charitable efforts.
        </Paragraph>
        <Paragraph className="mt-4">
          Following the completion of my final year of high school, I pursued Centriq Training to continue growing my programming skill set &#8212; adding knowledge in .NET, C#, and Angular JS, in addition to expanding my existing knowledge in HTML5, CSS3, JavaScript, jQuery, and SQL. From there, it was off into the business world.
        </Paragraph>
        <Paragraph className="mt-4">
          I started my career with .NET, C#, and JavaScript, focused on building responsive frontends and robust backend systems. I quickly became proficient in database design, server-side architecture, and creating RESTful services. This foundation allowed me to develop enterprise-level applications while gaining valuable experience in software architecture principles and design patterns.
        </Paragraph>
        <Paragraph className="mt-4">
          As my career progressed, I expanded my toolkit to include Node.js, Next.js, React, TypeScript, Python, and more, while continuing to deepen my knowledge of modern .NET frameworks. My cloud expertise spans both Azure and AWS platforms, where I design and implement scalable, resilient infrastructure. I&apos;ve embraced DevOps practices, implementing CI/CD pipelines and infrastructure as code with Terraform and Bicep to ensure reliable, maintainable applications. This comprehensive skill set allows me to deliver end-to-end solutions that make a meaningful difference.
        </Paragraph>
      </div>
    </div>
  );
}
