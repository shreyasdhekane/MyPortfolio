"use client";

import { Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCallback } from "react";

export function Navigation() {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  return (
    <div className="container mx-auto px-4 pt-8 pb-4">
      <nav className="flex items-center justify-between bg-white border-4 border-black rounded-xl px-5 py-3 max-w-2xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center shrink-0">
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </div>

        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          <button
            onClick={() => scrollToSection("hero-section")}
            className="text-[18px] font-bold leading-20px hover:opacity-70 transition-opacity"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about-section")}
            className="text-[18px] font-bold leading-20px hover:opacity-70 transition-opacity"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("portfolio-section")}
            className="text-[18px] font-bold leading-20px hover:opacity-70 transition-opacity"
          >
            Portfolio
          </button>
        </div>

        <Button
          asChild
          className="bg-black text-white hover:bg-black/90 rounded-sm px-5 h-12 min-w-48px shrink-0"
        >
          <a
            href="https://www.linkedin.com/messaging/compose/?recipient=shreyasdhekane"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="hidden sm:inline-block mr-2">Contact</span>
            <Mail className="w-10 h-10" strokeWidth={2.5} />
          </a>
        </Button>
      </nav>
    </div>
  );
}
