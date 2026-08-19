import { ArrowUpRight, Github } from "lucide-react"

const projects = [
  {
    title: "Pulsar",
    category: "API Monitoring Dashboard",
    description:
      "Full-stack API monitoring platform with JWT auth, real-time WebSocket updates via SignalR, and a live world map of global ping activity. p50/p95/p99 latency charts, anomaly detection, and Claude AI-generated health summaries.",
    image: "/images/934shots_so.png",
    stack: ["Angular 17", "TypeScript", ".NET 10", "SignalR", "PostgreSQL"],
    href: "https://pulsar-bay.vercel.app",
  },
  {
    title: "Kraken2D",
    category: "Custom 2D Arcade Engine",
    description:
      "A C++ game engine built from scratch with fixed-timestep physics, procedural audio generation, and impulse-based collision resolution. Re-architected from ECS to a flat header-per-game design, cutting the engine core by 62%.",
    image: "/images/715shots_so.png",
    stack: ["C++17", "SDL3", "CMake", "Fixed-Timestep Physics"],
    href: "https://shreyasdhekane.github.io/Kraken2D/",
  },
  {
    title: "Ryde",
    category: "Ride-Hailing Rider App",
    description:
      "A Lyft/Uber-style rider app built end to end — Expo & React Native on the front, Node, Express, Prisma and PostgreSQL on the back, with a live socket-driven ride simulation in between.",
    image: "/images/115shots_so.png",
    stack: ["Expo", "React Native", "Node.js", "Express", "Prisma", "PostgreSQL"],
    href: "https://github.com/shreyasdhekane/ryde",
  },
]

export function ProjectsSection() {
  return (
    <>
      <div id="work" className="md:col-span-2 lg:col-span-4 flex items-end justify-between mt-2 scroll-mt-24">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold">
          Featured Work
        </h2>
        <span className="text-sm text-[#a1a1aa]">Selected projects</span>
      </div>

      {projects.map((project) => (
        <a
          key={project.title}
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group md:col-span-2 relative rounded-[32px] overflow-hidden border border-[#262626] transition-all hover:border-[#404040] hover:-translate-y-0.5 flex flex-col min-h-[420px] sm:min-h-[460px]"
        >
          <img
            src={project.image || "/placeholder.svg"}
            alt={`${project.title} preview`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* always-on gradient so the bottom tech chips stay legible over any image */}
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/90 to-transparent" />

          {/* hover-only darken so the title/description read clearly */}
          <div className="absolute inset-0 bg-black/0 opacity-0 group-hover:bg-black/75 group-hover:opacity-100 transition-all duration-300" />

          <span className="relative z-10 m-4 sm:m-6 self-start bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold">
            {project.category}
          </span>

          <div className="relative z-10 flex-1 flex flex-col justify-center p-6 sm:p-8 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl sm:text-2xl font-bold text-white">
                {project.title}
              </h3>
              <ArrowUpRight
                className="w-5 h-5 text-[#a1a1aa] transition-all group-hover:text-[#ccf381] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </div>
            <p className="text-sm sm:text-base text-[#e4e4e7]">{project.description}</p>
          </div>

          <div className="relative z-10 mt-auto p-6 sm:p-8 pt-0 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>
        </a>
      ))}

      {/* 4th tile: browse all */}
      <a
        href="https://github.com/shreyasdhekane?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="group md:col-span-2 bg-black rounded-[32px] overflow-hidden border border-[#262626] transition-all hover:border-[#ccf381]/50 hover:-translate-y-0.5 flex flex-col items-center justify-center text-center p-8 gap-4 min-h-[320px]"
      >
        <div className="w-14 h-14 rounded-full bg-[#ccf381]/10 flex items-center justify-center">
          <Github className="w-6 h-6 text-[#ccf381]" aria-hidden="true" />
        </div>
        <div>
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl sm:text-2xl font-bold mb-2">
            Browse all projects
          </h3>
          <p className="text-sm text-[#a1a1aa]">See everything else I&apos;ve shipped on GitHub</p>
        </div>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#ccf381]">
          github.com/shreyasdhekane
          <ArrowUpRight
            className="w-4 h-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </span>
      </a>
    </>
  )
}
