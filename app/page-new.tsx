'use client'

import { ParallaxBlobs } from './components/ParallaxBackground'
import { CursorGlow } from './components/CursorGlow'
import { ScrollProgressBar } from './components/ScrollProgressBar'
import { HeroSection } from './components/HeroSection'
import { StatsSection } from './components/StatsSection'
import { ProjectsGrid } from './components/ProjectsParallaxSection'
import { TechMarquee } from './components/TechMarquee'
import { ContactSectionNew } from './components/ContactSectionNew'

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden bg-black">
      {/* Fixed background elements */}
      <ParallaxBlobs />
      <CursorGlow />
      <ScrollProgressBar />

      {/* Main content */}
      <div className="relative z-10">
        <HeroSection />
        <StatsSection />
        <ProjectsGrid />
        <TechMarquee />
        <ContactSectionNew />

        {/* Footer */}
        <footer className="relative py-8 px-4 border-t border-purple-900/20 bg-black/50 backdrop-blur">
          <div className="max-w-6xl mx-auto text-center text-zinc-500 text-sm">
            <p>© 2024 Mario García. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </main>
  )
}
