"use client";

import React, { useEffect } from "react";
import Skills from "@/components/skills";
import About from "../components/about";
import Intro from "../components/intro";
import Projects from "../components/projects";
import SectionDivider from '../components/sectionDivider';
import Contact from "@/components/contact";
import Affiliations from "@/components/affiliations";

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Affiliations />
      <SectionDivider />
      <Contact />

    </main>
  )
}
