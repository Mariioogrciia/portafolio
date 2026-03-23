'use client'

import GalaxyBackground from './components/GalaxyBackground'
import { ScrollProgressBar } from './components/ScrollProgressBar'
import Navbar from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { StickyZoomSection } from './components/StickyZoomSection'
import { AboutSection } from './components/AboutSection'
import { ProjectsGrid } from './components/ProjectsParallaxSection'
import { TechMarquee } from './components/TechMarquee'
import { HorizontalTimeline } from './components/HorizontalTimeline'
import { CertificationsSection } from './components/CertificationsSection'
import { ContactSectionNew } from './components/ContactSectionNew'

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden bg-black">
      {/* Fixed background canvas (z-0) */}
      <GalaxyBackground />

      {/* Fixed navbar (z-50) */}
      <Navbar />

      {/* Fixed scroll progress bar (z-50) */}
      <ScrollProgressBar />

      {/* Main content (z-10) */}
      <div className="relative z-10 pt-16">
        <HeroSection />
        <StickyZoomSection />
        <AboutSection />
        <ProjectsGrid />
        <TechMarquee />
        <HorizontalTimeline />
        <CertificationsSection />
        <ContactSectionNew />

        {/* Footer */}
        <footer className="relative py-8 px-4 border-t border-white/5 bg-black/40 backdrop-blur">
          <div className="max-w-6xl mx-auto text-center text-zinc-500 text-sm">
            <p>© 2024 Mario García. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </main>
  )
}
