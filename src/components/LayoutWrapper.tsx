"use client";

import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStandaloneRoute = pathname?.startsWith("/sw-software");

  useEffect(() => {
    if (isStandaloneRoute) {
      document.body.classList.remove("flex", "h-screen", "overflow-hidden");
      if (!document.body.classList.contains("min-h-screen")) {
        document.body.classList.add("min-h-screen");
      }
    } else {
      document.body.classList.add("flex", "h-screen", "overflow-hidden");
      document.body.classList.remove("min-h-screen");
    }
  }, [isStandaloneRoute]);

  if (isStandaloneRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <Sidebar />
      <div className="lg:pl-2 lg:pt-2 bg-gray-100 flex-1 overflow-y-auto">
        <div className="flex-1 bg-white min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 overflow-y-auto">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}

