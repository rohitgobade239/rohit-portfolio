import { SiteHeader } from '@/components/portfolio/site-header'
import { Hero } from '@/components/portfolio/hero'
import { TechMarquee } from '@/components/portfolio/tech-marquee'
import { About } from '@/components/portfolio/about'
import { Skills } from '@/components/portfolio/skills'
import { Experience } from '@/components/portfolio/experience'
import { Projects } from '@/components/portfolio/projects'
import { Education } from '@/components/portfolio/education'
import { Contact } from '@/components/portfolio/contact'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>
      <Contact />
    </>
  )
}
