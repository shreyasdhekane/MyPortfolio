import { FileText } from "lucide-react"

const experiences = [
  {
    period: "October 2026 — Present",
    title: "Full Stack Web Developer Intern",
    company: "IU School of Public Health",
    description:
      "Built a role-based React/TypeScript gift-card tracking app for 55 users across faculty, purchasing, and finance, replacing a manual spreadsheet-and-email process. Automated quarterly grant reconciliation with balanced journal entry files and print-ready disbursement logs, and built the API layer that unifies Denodo and SharePoint data for internal finance apps.",
  },
  {
    period: "June 2026 — August 2026",
    title: "Software Engineer Intern",
    company: "Fastflo.AI",
    description:
      "Shipped 8 full-stack features across 10 sprints with TypeScript, SQL, and WebSockets. Built REST APIs and Entity Framework/SQL integrations for automated multi-channel candidate messaging, and a global command palette with keyboard navigation and search that cut average navigation time by 65%.",
  },
]

export function ExperienceSection() {
  return (
    <div
      id="experience"
      className="lg:col-span-4 bg-black rounded-[32px] p-6 sm:p-8 lg:p-12 border border-[#262626] transition-all hover:border-[#404040] hover:-translate-y-0.5 scroll-mt-24"
    >
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            Professional <span className="text-[#ccf381]">experience</span>
          </h2>
          <p className="text-[#a1a1aa] mb-6 leading-relaxed text-sm sm:text-base">
            Computer Science graduate student at Indiana University with hands-on experience in full-stack
            development, real-time systems, and cloud deployment.
          </p>
          <a
            href="/ShreyasDhekane-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-all hover:scale-105 hover:bg-[#ccf381]"
          >
            <FileText className="w-4 h-4" />
            See full resume
          </a>
        </div>

        <div className="space-y-5">
          {experiences.map((exp) => (
            <div key={exp.title} className="bg-gradient-to-br from-[#1a1a1a] to-[#121212] border border-[#262626] rounded-3xl p-6 sm:p-8">
              <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#ccf381] mb-3">
                {exp.period}
              </div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl sm:text-2xl font-bold mb-3">
                {exp.title} <span className="text-[#a1a1aa] font-medium">@ {exp.company}</span>
              </h3>
              <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
