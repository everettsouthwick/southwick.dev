export const products = [
  {
    href: "https://www.jekasoftware.com/watchtower",
    title: "Watchtower",
    description:
      "Advanced access control SaaS designed for modern gated communities, providing HOAs and CDDs with seamless security management and resident empowerment.",
    thumbnail: "/images/watchtower-1.webp",
    images: ["/images/watchtower-1.webp", "/images/watchtower-2.webp"],
    stack: [".NET", "Node.js", "React", "C#", "TypeScript", "Azure", "Docker", "iOS", "Android",],
    slug: "watchtower",
    content: (
      <div>
        <p>
          Watchtower is a comprehensive security solution specifically designed for HOAs and CDDs, enabling residential access control while empowering residents to manage guest lists for both staffed and unstaffed gated communities.
        </p>
        <p>
          The platform integrates cutting-edge technologies including license plate recognition, mobile credentials, and barcode scanning to create a seamless security experience. Key features include visitor management with digital pre-registration and QR codes, remote access control via a secure mobile app, automated access scheduling, real-time entry logging, and AI-powered license plate recognition.
        </p>
        <p>
          Built with TypeScript and React for the frontend, the application leverages Azure Functions and Service Bus for reliable backend processing. The cloud-based management system allows community administrators to access security controls and analytics from anywhere, while the SendGrid and Twilio notifications ensure residents stay informed about access events in real-time.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://www.getseren.com/",
    title: "Seren",
    description:
      "AI-powered knowledge management platform that transforms documents into intelligent, searchable resources using Retrieval-Augmented Generation (RAG) technology.",
    thumbnail: "/images/seren-1.webp",
    images: ["/images/seren-1.webp", "/images/seren-2.webp"],
    stack: ["Node.js", "Next.js", "TypeScript", "Azure", "Docker", "Kubernetes", "OpenAI"],
    slug: "seren",
    content: (
      <div>
        <p>
          Seren is a productivity-boosting platform that leverages Retrieval-Augmented Generation (RAG) AI to transform documents into intelligent, searchable resources. The platform synthesizes all your documents into an easy-to-use tool that finds important information faster and more accurately than traditional search methods.
        </p>
        <p>
          With a strong focus on security, Seren ensures your data remains private and hidden from external AI models. Your prompts, outputs, and data are not shared with other customers or used to train or retrain AI models, maintaining strict privacy and compliance standards.
        </p>
        <p>
          Setting up Seren is remarkably simple - users can create an account, connect their data by uploading documents or connecting favorite apps, integrate the assistant into their website, and immediately start searching with AI-powered retrieval. The platform requires no coding experience and can be deployed in minutes, making advanced AI technology accessible to businesses of all sizes.
        </p>
      </div>
    ),
  },
  {
    href: "https://www.goglobalentry.com",
    title: "Go Global Entry",
    description:
      "A modern web application that allows users to fetch and secure Global Entry appointments through an intuitive front-end interface.",
    thumbnail: "/images/go-global-entry-1.webp",
    images: ["/images/go-global-entry-1.webp"],
    stack: [".NET", "Node.js", "Next.js", "React", "C#", "TypeScript", "Azure", "Docker"],
    slug: "go-global-entry",
    content: (
      <div>
        <p>
          Go Global Entry is a sophisticated web platform designed to help travelers secure earlier Global Entry appointments through a modern, user-friendly interface. The service continuously monitors the Trusted Traveler Program for new appointment openings, making the often frustrating process of finding available slots seamless and efficient.
        </p>
        <p>
          The application features an intuitive dashboard with location filtering, real-time appointment availability, and instant notifications when earlier slots become available. Users can easily manage their appointment preferences and receive alerts when opportunities matching their criteria appear.
        </p>
        <p>
          Built with a robust tech stack including .NET, Node.js, Next.js, C#, and React, Go Global Entry delivers a responsive and reliable experience. The platform is hosted on Azure with containerized deployment through Docker, ensuring scalability and consistent performance for users seeking to expedite their Global Entry enrollment process.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://github.com/everettsouthwick/amazon-auto-reload",
    title: "Amazon Auto Reload",
    description:
      "Automates reloading Amazon gift card balances to maximize card rewards.",
    thumbnail: "/images/amazon-auto-reload-1.webp",
    images: ["/images/amazon-auto-reload-1.webp"],
    stack: ["Node.js", "TypeScript", "Docker", "Selenium"],
    slug: "amazon-auto-reload",
    content: (
      <div>
        <p>
          Amazon Auto Reload is a Node.js application that automates the process of reloading Amazon gift card balances with configurable amounts and transactions. This tool is perfect for maximizing credit/debit card rewards or preventing account closure due to inactivity.
        </p>
        <p>
          Built with TypeScript and Selenium WebDriver, it supports both Chrome and Firefox browsers with a visible interface for transparency. The application is highly configurable and includes Docker support for containerized execution.
        </p>
        <p>
          Key features include browser visibility for monitoring operations, extensive configuration options, and cross-browser compatibility. The project is open-source and welcomes contributions for planned enhancements like automated testing, code refactoring, and scheduling capabilities.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://github.com/everettsouthwick/Eraserr",
    title: "Eraserr",
    description:
      "Keeps Plex servers clean by automatically deleting unwatched or stale media using Radarr, Sonarr, and Overseerr.",
    thumbnail: "/images/eraserr-1.webp",
    images: ["/images/eraserr-1.webp"],
    stack: ["Python", "Docker"],
    slug: "eraserr",
    content: (
      <div>
        <p>
          Eraserr is a Python application designed to help keep your Plex servers clean by automatically deleting unwatched or stale media. It leverages the functionality of Radarr, Sonarr, and Overseerr to identify and remove content that&apos;s no longer needed, helping you maintain an organized media library.
        </p>
        <p>
          Built with Python 3.7+ and available as a Docker container, Eraserr offers a flexible solution for media server maintenance. The application is highly configurable through a JSON configuration file, allowing users to customize deletion criteria and integration settings with various media management tools.
        </p>
        <p>
          The project features comprehensive documentation for both standard Python execution and containerized deployment options. Whether you&apos;re running it directly on your server or as part of a larger Docker-based media stack, Eraserr provides a reliable solution for automating the cleanup of your Plex media collection.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://github.com/everettsouthwick/vxThreads",
    title: "vxThreads",
    description:
      "A utility tool that enables seamless embedding of threads.net links on Discord and Telegram by simply prepending the URL with vx.",
    thumbnail: "/images/vxthreads-1.webp",
    images: ["/images/vxthreads-1.webp"],
    stack: ["TypeScript", "Azure", "Cloudflare Workers", "Docker"],
    slug: "vxthreads",
    content: (
      <div>
        <p>
          vxThreads is a user-friendly utility tool that enables seamless embedding of threads.net links just by simply prepending the URL with vx, like vxthreads.net. Inspired by similar projects like FixTweet and InstaFix, vxThreads aims to provide a more accessible and efficient way of sharing and embedding threads from threads.net.
        </p>
        <p>
          The tool allows users to easily embed Threads text posts, images, and videos on platforms like Discord and Telegram. With its lightweight design focused on performance, vxThreads makes sharing content from Threads simple and efficient - just prepend vx to any threads.net URL (e.g., vxthreads.net) to get an embed of a Threads post.
        </p>
        <p>
          Built with TypeScript, the project features a clean, maintainable codebase with continuous integration for quality assurance. vxThreads represents a practical solution for enhancing the cross-platform sharing experience of Threads content across popular messaging platforms.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://github.com/everettsouthwick/embetter",
    title: "Embetter",
    description:
      "Replaces social media links with embed-friendly alternatives on Discord for platforms like Instagram, Threads, TikTok, Twitter, and premium editorials.",
    thumbnail: "/images/embetter-1.webp",
    images: ["/images/embetter-1.webp"],
    stack: ["Node.js", "TypeScript", "Azure", "Docker", "Discord.js"],
    slug: "embetter",
    content: (
      <div>
        <p>
          Embetter is a Discord bot that enhances the sharing experience by automatically replacing social media links with embed-friendly alternatives. It works with popular platforms like Instagram, Threads, TikTok, Twitter, as well as premium editorial content from sources like The Atlantic, Bloomberg, The New York Times, Rolling Stone, The Wall Street Journal, and The Washington Post.
        </p>
        <p>
          The bot seamlessly integrates with Discord servers, monitoring messages for supported links and replacing them with alternatives that provide rich embeds. This allows users to preview content directly within Discord without having to leave the platform, creating a more cohesive and engaging conversation experience.
        </p>
        <p>
          Built with TypeScript and Discord.js, Embetter represents a practical solution for improving how media is shared and consumed within Discord communities. By eliminating the friction of non-embedding links, it helps maintain conversation flow and enhances the overall user experience.
        </p>{" "}
      </div>
    ),
  },
];
