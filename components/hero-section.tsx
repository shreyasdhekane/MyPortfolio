// hero-section.tsx
import { Mail, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="hero-section"
      className="container mx-auto px-4 py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-[42px] leading-12.5 md:text-[72px] font-bold md:leading-21.25">
            I'm{" "}
            <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">
              Shreyas
            </span>
            , a passionate{" "}
            <span className="bg-[#2F81F7] sm:text-[48px] text-white px-3 py-1 inline-block">
              Software Developer
            </span>
          </h1>

          <p className="text-[#393939] text-[16px] md:text-[18px] font-medium leading-7 md:leading-7.5 max-w-xl">
            Master's student at Indiana University in Computer Science with
            expertise in modern JavaScript frameworks, cloud computing, and
            UI/UX design. Building scalable web applications with Next.js,
            React, and Angular.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-7 pt-4">
            <Button className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 md:py-22px md:px-62px text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-240px">
              <Mail className="w-5 h-5" />
              Get in touch
            </Button>
            <Button
              variant="outline"
              className="bg-white border-[3px] border-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-22px md:px-62px text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-240px"
            >
              <FolderOpen className="w-5 h-5" />
              View portfolio
            </Button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-square">
            {/* Scribble frame */}
            <svg
              className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] -z-10"
              viewBox="0 0 400 400"
            >
              <path
                d="M20,20 Q80,0 140,20 T260,20 T340,40 T380,120 T360,220 T380,300 T320,360 T220,380 T100,360 T20,280 T40,160 T20,20"
                fill="none"
                stroke="black"
                strokeWidth="4"
                strokeLinecap="round"
                className="opacity-50"
                strokeDasharray="8 8"
              />
            </svg>
            <div className="relative w-full h-full bg-[#FDB927] border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="relative w-full max-w-lg aspect-square border-4 border-black rounded-3xl overflow-hidden shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)]">
                <img
                  src="/Personal.png"
                  alt="Shreyas Dhekane"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
