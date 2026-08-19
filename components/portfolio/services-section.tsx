import { Code, Database, Palette, Cloud, Smartphone } from "lucide-react"

const services = [
  {
    title: "Frontend Development",
    description: "React, Next.js, Angular, and TypeScript — responsive, component-driven interfaces.",
    icon: Code,
  },
  {
    title: "Full Stack Development",
    description: "End-to-end apps with .NET, C#, Python, and SQL, integrating secure APIs and cloud services.",
    icon: Database,
  },
  {
    title: "UI/UX Design",
    description: "Intuitive experiences in Figma, cutting design-to-dev handoff time by 20% with standardized workflows.",
    icon: Palette,
  },
  {
    title: "Cloud Computing",
    description: "Cloud-ready deployment on AWS and Vercel, with Convex, Clerk, and Supabase for scalable apps.",
    icon: Cloud,
  },
  {
    title: "Mobile Development",
    description: "Cross-platform apps with Flutter and React Native.",
    icon: Smartphone,
  },
]

export function ServicesSection() {
  return (
    <div className="lg:col-span-4 bg-gradient-to-br from-[#1a1a1a] to-[#121212] rounded-[32px] p-6 sm:p-8 border border-[#262626] transition-all hover:border-[#404040] hover:-translate-y-0.5">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl sm:text-2xl font-bold">What I Do</h3>
        <span className="text-sm text-[#a1a1aa]">Technical expertise</span>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl bg-black/40 border border-[#262626] p-5 transition-all hover:border-[#ccf381]/50"
          >
            <div className="w-10 h-10 rounded-full bg-[#ccf381]/10 flex items-center justify-center mb-4">
              <service.icon className="w-5 h-5 text-[#ccf381]" aria-hidden="true" />
            </div>
            <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">{service.title}</h4>
            <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
