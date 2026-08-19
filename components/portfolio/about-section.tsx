import { GraduationCap, Trophy, BadgeCheck } from "lucide-react"

const background = [
  {
    icon: GraduationCap,
    accent: "#6366F1",
    title: "Education",
    body: "MS in Computer Science — Indiana University (CGPA 3.43/4). B.Tech Computer Science & Business Systems — D.Y. Patil University (CGPA 8.76/10).",
  },
  {
    icon: Trophy,
    accent: "#ff0080",
    title: "Leadership & Awards",
    body: "Vice President, Computer Society of India — leading 50+ members and 150+ volunteers. Hardest Working Member (2023–24) and Best Domain Lead (2022–24).",
  },
  {
    icon: BadgeCheck,
    accent: "#ccf381",
    title: "Certifications",
    body: "Harvard CS50x, IBM Deep Learning (TensorFlow, Keras), and Game Design (HPGG02.en).",
  },
]

export function AboutSection() {
  return (
    <>
      {/* Background: education, leadership, certifications */}
      <div
        id="about"
        className="lg:col-span-4 bg-gradient-to-br from-[#1a1a1a] to-[#121212] rounded-[32px] p-6 sm:p-8 border border-[#262626] transition-all hover:border-[#404040] hover:-translate-y-0.5 scroll-mt-24"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl sm:text-2xl font-bold">Background</h3>
          <span className="text-sm text-[#a1a1aa]">Education &amp; recognition</span>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          {background.map((item) => (
            <div key={item.title} className="rounded-2xl bg-black/40 border border-[#262626] p-5 sm:p-6">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: `${item.accent}1a` }}
              >
                <item.icon className="w-5 h-5" style={{ color: item.accent }} aria-hidden="true" />
              </div>
              <h4 className="font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
