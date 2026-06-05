import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FormationSection } from "@/components/formation-section"
import { ProjectsSection } from "@/components/projects-section"
import { ObservationsSection } from "@/components/observations-section"
import { SkillsSection } from "@/components/skills-section"
import { CertificatesSection } from "@/components/certificates-section"
import { ResumeSection } from "@/components/resume-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <FormationSection />
      <ProjectsSection />
      <ObservationsSection />
      <SkillsSection />
      <CertificatesSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
