// portfolio-section.tsx
import { ArrowRight } from "lucide-react";

export function PortfolioSection() {
  const projects = [
    {
      title: "TrackAdmin - Application Tracker",
      description:
        "Built and maintained a scalable full-stack application tracker using Next.js, Convex, and Clerk, supporting 30+ global users and processing 120+ applications across 150+ colleges. Reduced page load time by 20% and increased task completion efficiency by 35%.",
      tag: "Next.js / Full Stack",
      logo: "/images/studio-logo.svg",
      bgColor: "bg-[#6366F1]",
      illustration: "/images/studio-workspace.svg",
      link: "https://trackadmit.vercel.app",
    },
    {
      title: "Collaborix - Real-time Collaboration",
      description:
        "Engineered a scalable real-time multi-user collaboration system enabling seamless interaction with instant updates and conflict resolution. Implemented role-based authentication and improved team productivity by 15% through optimized synchronization.",
      tag: "Next.js / Real-time",
      logo: "/images/venture-logo.svg",
      bgColor: "bg-[#2F81F7]",
      illustration: "/images/venture-workspace.svg",
      link: "https://collabrix-one.vercel.app",
    },
    {
      title: "Customer Dashboard Modernization",
      description:
        "Developed a modern single-page application using Angular with component-based architecture. Refactored legacy UI patterns into reusable components and implemented Angular routing, services, and data binding for scalable navigation.",
      tag: "Angular / TypeScript",
      logo: "/images/venture-logo.svg",
      bgColor: "bg-[#FF6B7A]",
      illustration: "/images/venture-workspace.svg",
      link: "#",
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
                  className="flex items-center gap-2 font-semibold text-[#0B0B0B] hover:gap-3 transition-all text-sm md:text-base"
                >
                  View Site
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div
                className={`${project.bgColor} relative overflow-hidden min-h-250px md:min-h-500px`}
              >
                <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold opacity-50">
                  {project.title.split(" ")[0]}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-black text-white px-6 md:px-8 py-4 md:py-5 rounded-[12px] font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-sm md:text-base">
            <a
              href="https://github.com/shreyasdhekane?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              Browse all projects
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
