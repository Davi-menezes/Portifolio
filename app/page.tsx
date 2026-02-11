import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TechSection } from "@/components/tech-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectSection } from "@/components/project-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TechSection />
        <ExperienceSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
