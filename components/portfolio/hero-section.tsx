import { Mail, Github, Linkedin, FolderOpen, ArrowUpRight } from "lucide-react"
import { Typewriter } from "./typewriter"

const links = [
  { icon: Mail, label: "Email", href: "mailto:dhekaneshreyas@gmail.com" },
  { icon: Github, label: "GitHub", href: "https://github.com/shreyasdhekane" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/shreyasdhekane/" },
  { icon: FolderOpen, label: "Resume", href: "/ShreyasDhekane-resume.pdf" },
]

export function HeroSection() {
  return (
    <>
      {/* Hero */}
      <div className="md:col-span-2 lg:col-span-3 bg-black rounded-[32px] p-6 sm:p-8 relative overflow-hidden flex flex-col justify-end min-h-[420px] border border-[#262626] transition-all hover:border-[#404040] hover:-translate-y-0.5">
        <img
          src="/images/hero-abstract.png"
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60 mix-blend-lighten"
        />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-[#ccf381]/10 text-[#ccf381] px-3 py-1 rounded-full text-xs font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ccf381] animate-pulse" />
            Open to New Grad Roles · 2027
          </div>
          <div className="text-xl sm:text-2xl text-[#ccf381] mb-2 font-medium">Hey, I&apos;m Shreyas</div>
          <div className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tighter text-white min-h-[2.2em] sm:min-h-[1.1em]">
            <Typewriter strings={["Software Developer", "UI/UX Engineer", "Full Stack Developer", "Software Engineer"]} />
          </div>
          <div className="mt-6 bg-white/10 backdrop-blur-md border-t border-white/20 p-4 sm:p-5 rounded-2xl">
            <p className="text-sm sm:text-base font-medium opacity-90">
              Master&apos;s student at Indiana University in Computer Science, building scalable web applications
              with Next.js, React, and Angular — with a focus on clean APIs and thoughtful UI/UX.
            </p>
          </div>
        </div>
      </div>

      {/* Quick connect, linktree-style */}
      <div className="bg-black rounded-[32px] p-6 sm:p-8 flex flex-col min-h-[420px] border border-[#262626] transition-all hover:border-[#404040] hover:-translate-y-0.5">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-full bg-[#ccf381] flex items-center justify-center flex-shrink-0">
            <span className="font-[family-name:var(--font-space-grotesk)] font-bold text-sm text-black">SD</span>
          </div>
          <div>
            <div className="font-semibold text-white text-sm leading-tight">Shreyas Dhekane</div>
            <div className="text-xs text-[#a1a1aa]">Let&apos;s connect</div>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 w-full rounded-full bg-white/5 border border-white/10 px-5 py-3.5 transition-all hover:bg-[#ccf381] hover:border-[#ccf381]"
            >
              <link.icon className="w-4 h-4 text-white group-hover:text-black transition-colors" aria-hidden="true" />
              <span className="text-sm font-semibold text-white group-hover:text-black transition-colors flex-1">
                {link.label}
              </span>
              <ArrowUpRight
                className="w-4 h-4 text-[#a1a1aa] group-hover:text-black transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
