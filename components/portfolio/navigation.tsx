import { FolderOpen } from "lucide-react"

export function Navigation() {
  return (
    <header className="flex justify-end items-center py-4 sm:py-5 mb-4 sm:mb-5">
      <nav className="flex items-center gap-1 sm:gap-2">
        <a
          href="#work"
          className="hidden sm:inline-block px-4 py-2 rounded-full text-sm font-medium text-[#a1a1aa] transition-colors hover:text-white"
        >
          Work
        </a>
        <a
          href="#experience"
          className="hidden sm:inline-block px-4 py-2 rounded-full text-sm font-medium text-[#a1a1aa] transition-colors hover:text-white"
        >
          Experience
        </a>
        <a
          href="#about"
          className="hidden sm:inline-block px-4 py-2 rounded-full text-sm font-medium text-[#a1a1aa] transition-colors hover:text-white"
        >
          About
        </a>
        <a
          href="/ShreyasDhekane-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium text-[#a1a1aa] transition-colors hover:text-white"
        >
          <FolderOpen className="w-3.5 h-3.5" />
          Resume
        </a>
        <a
          href="#contact"
          className="px-4 py-2 rounded-full text-sm font-semibold bg-white text-black transition-all hover:bg-[#ccf381] hover:scale-105"
        >
          Contact
        </a>
      </nav>
    </header>
  )
}
