import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SW Software LLC | Company Information & Support",
  description:
    "Official company information and support contact details for SW Software LLC.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function StandaloneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          "antialiased bg-gray-100 min-h-screen"
        )}
      >
        <div className="bg-white min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}

