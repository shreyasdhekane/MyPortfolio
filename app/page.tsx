"use client"

import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google"
import { useState, useEffect } from "react"
import { Navigation } from "@/components/portfolio/navigation"
import { HeroSection } from "@/components/portfolio/hero-section"
import { AboutSection } from "@/components/portfolio/about-section"
import { LogoMarquee } from "@/components/portfolio/logo-marquee"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { ServicesSection } from "@/components/portfolio/services-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { Footer } from "@/components/portfolio/footer"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export default function Page() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className={`${plusJakarta.variable} ${spaceGrotesk.variable} font-[family-name:var(--font-plus-jakarta)] bg-[#050505]`}>
      <div className="min-h-screen bg-[#050505] text-white flex justify-center px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-10">
        <style jsx global>{`
          body {
            background-image: radial-gradient(circle at 10% 20%, rgba(121, 40, 202, 0.08) 0%, transparent 40%),
                              radial-gradient(circle at 90% 80%, rgba(204, 243, 129, 0.05) 0%, transparent 40%);
          }
        `}</style>

        <div className="w-full max-w-[1200px] flex flex-col gap-6">
          <Navigation />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-auto gap-4 sm:gap-6">
            <HeroSection />
            <AboutSection />
            <LogoMarquee />
            <ExperienceSection />
            <ProjectsSection />
            <ServicesSection />
            <ContactSection />
          </div>
        </div>
      </div>

      <Footer />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg transition-all hover:bg-[#ccf381] hover:scale-105"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5" aria-hidden="true">
            <path d="M18 15l-6-6-6 6"></path>
          </svg>
        </button>
      )}
    </div>
  )
}
