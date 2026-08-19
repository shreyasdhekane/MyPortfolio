import { FileText } from "lucide-react"

const experiences = [
  {
    period: "June 2026 — August 2026",
    title: "Software Engineering Intern",
    company: "Fastflo.AI",
    description:
      "Designing, developing, testing, and documenting software features across the front end and back end of the Fastflo platform. Building and maintaining APIs and integrations that support automated, multi-channel candidate messaging workflows.",
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
            development, cloud computing, and UI/UX design.
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
