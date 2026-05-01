// portfolio-section.tsx
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function PortfolioSection() {
  const projects = [
    {
      title: "Kraken2D – Custom 2D Arcade Engine",
      description:
        "Built a custom C++ game engine from scratch with fixed-timestep physics, procedural audio generation, and impulse-based collision resolution. Re-architected from ECS to a flat header-per-game design after profiling, reducing engine core by 62%. Ships a fully playable browser demo — Cosmic Dash — with zero external audio assets.",
      tag: "C++17, SDL3, CMake, Fixed-Timestep Physics, Procedural Audio",
      image: "/Kraken2D.png",
      link: "https://shreyasdhekane.github.io/Kraken2D/",
    },
    {
      title: "Pulsar – Real-Time API Monitoring Dashboard",
      description:
        "Built and deployed a full-stack API monitoring platform with JWT authentication, real-time WebSocket updates via SignalR, and a live world map visualizing global ping activity. Features p50/p95/p99 latency charts, anomaly detection anchored to a 24-hour rolling baseline, and Claude AI-generated health summaries.",
      tag: "Angular 17, TypeScript, C#, .NET 10, ASP.NET Core, SignalR, PostgreSQL",
      image: "/Pulsar.png",
      link: "https://pulsar-bay.vercel.app",
    },
    {
      title: "TrackAdmit – Graduate Application Tracker",
      description:
        "Built and maintained a scalable full-stack application tracker using Next.js, Convex, and Clerk, supporting 30+ global users and processing 120+ applications across 150+ colleges. Reduced page load time by 20% and increased task completion efficiency by 35%.",
      tag: "Next.js, Tailwind CSS, Convex, Clerk",
      image: "/TrackAdmit.png",
      link: "https://trackadmit.vercel.app",
    },
  ];

  return (
    <section
      id="portfolio-section"
      className="container mx-auto px-4 py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Take a look at my <br />
            <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">
              featured projects
            </span>
          </h2>
        </div>

        <div className="space-y-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-2 bg-white border-[3px] border-black rounded-32px overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="p-6 md:p-12 flex flex-col justify-center bg-white">
                <span className="inline-block bg-black text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 w-fit">
                  {project.tag}
                </span>

                <h3 className="text-xl md:text-[28px] font-bold mb-4 leading-tight md:leading-40px text-[#0B0B0B]">
                  {project.title}
                </h3>

                <p className="text-base md:text-[18px] text-[#393939] mb-8 leading-relaxed md:leading-30px font-medium">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-semibold text-[#0B0B0B] hover:gap-3 transition-all text-sm md:text-base w-fit"
                >
                  View Site
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="relative w-full min-h-[250px] md:min-h-[500px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="https://github.com/shreyasdhekane?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 md:px-8 py-4 md:py-5 rounded-[12px] font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-sm md:text-base"
          >
            Browse all projects
          </a>
        </div>
      </div>
    </section>
  );
}
