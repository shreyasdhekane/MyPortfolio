import { Github, Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#262626] mt-6">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-[#a1a1aa]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#ccf381] flex items-center justify-center font-[family-name:var(--font-space-grotesk)] font-bold text-[10px] text-black">
            SD
          </div>
          <span>Shreyas Dhekane &lt;3</span>
        </div>

        <div className="flex items-center gap-5">
          <a href="mailto:dhekaneshreyas@gmail.com" className="flex items-center gap-1.5 transition-colors hover:text-white">
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">dhekaneshreyas@gmail.com</span>
          </a>
          <a href="tel:+18129292319" className="flex items-center gap-1.5 transition-colors hover:text-white">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">+1 (812) 929-2319</span>
          </a>
          <a
            href="https://github.com/shreyasdhekane"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/shreyasdhekane/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
