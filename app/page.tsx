'use client'

import { useRef } from 'react'
import GalaxyBackground from './components/GalaxyBackground'
import { ScrollProgressBar } from './components/ScrollProgressBar'
import Navbar from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { ExperienceEducationSection } from './components/ExperienceEducationSection'
import { ProjectsGrid } from './components/ProjectsParallaxSection'
import { TechMarquee } from './components/TechMarquee'
import { CertificationsSection } from './components/CertificationsSection'
import { ContactSectionNew } from './components/ContactSectionNew'
import { Footer } from './components/Footer'
import { ScrollToTopButton } from './components/ScrollToTopButton'

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <main className="relative w-full overflow-hidden bg-black">
      {/* Fixed background canvas (z-0) */}
      <GalaxyBackground />

      {/* Fixed navbar (z-50) */}
      <Navbar />

      {/* Fixed scroll progress bar (z-50) */}
      <ScrollProgressBar contentRef={contentRef} />

      {/* Scroll to top button (z-40) */}
      <ScrollToTopButton />

      {/* Main content (z-10) */}
      <div ref={contentRef} className="relative z-10 pt-16">
        <HeroSection />
        <AboutSection />
        <ExperienceEducationSection />
        <ProjectsGrid />
        <TechMarquee />
        <CertificationsSection />
        <ContactSectionNew />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  )
}
