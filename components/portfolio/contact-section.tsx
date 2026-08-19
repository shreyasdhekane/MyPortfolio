import { FolderOpen } from "lucide-react";

export function ContactSection() {
  return (
    <div
      id="contact"
      className="md:col-span-2 lg:col-span-4 bg-gradient-to-r from-[#121212] to-[#1a1a1a] rounded-[32px] p-6 sm:p-8 lg:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 min-h-[200px] sm:min-h-[240px] border border-[#262626] transition-all hover:border-[#404040] hover:-translate-y-0.5 scroll-mt-24"
    >
      <div>
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold mb-2">
          Let&apos;s build something
        </h3>
        <p className="text-[#a1a1aa] text-sm sm:text-base">
          Open to full-time roles and interesting collaborations.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
        <a
          href="/ShreyasDhekane-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/5 text-white border border-white/10 px-6 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-all hover:bg-[#ccf381] hover:border-[#ccf381] hover:text-black whitespace-nowrap flex items-center justify-center gap-2"
        >
          <FolderOpen className="w-4 h-4" />
          Resume
        </a>
        <a
          href="https://github.com/shreyasdhekane"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/5 text-white border border-white/10 px-6 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-all hover:bg-[#ccf381] hover:border-[#ccf381] hover:text-black whitespace-nowrap flex items-center justify-center gap-2"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
            aria-hidden="true"
          >
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.25 5.68.42.36.79 1.08.79 2.18v3.24c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"></path>
          </svg>
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/shreyasdhekane/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/5 text-white border border-white/10 px-6 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-all hover:bg-[#ccf381] hover:border-[#ccf381] hover:text-black whitespace-nowrap flex items-center justify-center gap-2"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
            aria-hidden="true"
          >
            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"></path>
          </svg>
          LinkedIn
        </a>
        <a
          href="mailto:dhekaneshreyas@gmail.com"
          className="bg-white/5 text-white border border-white/10 px-6 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-all hover:bg-[#ccf381] hover:border-[#ccf381] hover:text-black flex items-center justify-center gap-2 whitespace-nowrap"
        >
          Email Me
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-4 h-4"
            aria-hidden="true"
          >
            <path d="M4 4h16v16H4z" fill="none"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </a>
      </div>
    </div>
  );
}
