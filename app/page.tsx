import Skills from "@/components/skills";
import About from "../components/about";
import Intro from "../components/intro";
import Projects from "../components/projects";
import SectionDivider from '../components/sectionDivider';
import Contact from "@/components/contact";
import Affiliations from "@/components/affiliations";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <div className="md:mb-projectsComponent">
        <Projects />
      </div>
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Affiliations />
      <SectionDivider />
      <Contact />

    </main>
  )
}
