'use client'

import GalaxyBackground from './components/GalaxyBackground'
import { ScrollProgressBar } from './components/ScrollProgressBar'
import Navbar from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { ProjectsGrid } from './components/ProjectsParallaxSection'
import { TechMarquee } from './components/TechMarquee'
import { HorizontalTimeline } from './components/HorizontalTimeline'
import { CertificationsSection } from './components/CertificationsSection'
import { ContactSectionNew } from './components/ContactSectionNew'
import { Footer } from './components/Footer'
import { ScrollToTopButton } from './components/ScrollToTopButton'

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden bg-black">
      {/* Fixed background canvas (z-0) */}
      <GalaxyBackground />

      {/* Fixed navbar (z-50) */}
      <Navbar />

      {/* Fixed scroll progress bar (z-50) */}
      <ScrollProgressBar />

      {/* Scroll to top button (z-40) */}
      <ScrollToTopButton />

      {/* Main content (z-10) */}
      <div className="relative z-10 pt-16">
        <HeroSection />
        <AboutSection />
        <ProjectsGrid />
        <TechMarquee />
        <HorizontalTimeline />
        <CertificationsSection />
        <ContactSectionNew />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  )
}
