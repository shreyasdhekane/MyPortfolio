"use client"

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiOpenjdk,
  SiAngular,
  SiTailwindcss,
  SiDocker,
  SiMongodb,
  SiDotnet,
  SiJavascript,
  SiFlutter,
  SiTensorflow,
} from "react-icons/si"

const stack = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiPython, name: "Python", color: "#4B8BBE" },
  { icon: SiOpenjdk, name: "Java", color: "#59B4E7" },
  { icon: SiAngular, name: "Angular", color: "#DD0031" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiDotnet, name: ".NET", color: "#8B5CF6" },
  { icon: SiFlutter, name: "Flutter", color: "#02569B" },
  { icon: SiTensorflow, name: "TensorFlow", color: "#FF6F00" },
]

export function LogoMarquee() {
  const loop = [...stack, ...stack]

  return (
    <div className="lg:col-span-4 bg-gradient-to-br from-[#1a1a1a] to-[#121212] rounded-[32px] p-6 sm:p-8 border border-[#262626] transition-all hover:border-[#404040] hover:-translate-y-0.5 overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl sm:text-2xl font-bold">Tech I work with</h3>
        <span className="text-sm text-[#a1a1aa]">Daily drivers</span>
      </div>

      <div
        className="relative overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex items-center gap-10 sm:gap-14 w-max animate-marquee">
          {loop.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={`${item.name}-${index}`} className="inline-flex items-center justify-center" title={item.name}>
                <Icon size={36} color={item.color} className="opacity-90 transition-opacity hover:opacity-100" />
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
      `}</style>
    </div>
  )
}
