import About from "./components/about";
import Footer from "./components/footer";
import Header from "./components/header";
import Introduction from "./components/introduction";
import Projects from "./components/projects";
import React, { useRef } from "react";
import Skills from "./components/skills";
import Work from "./components/work";

const Index = () => {
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const workRef = useRef(null);

  return (
    <div className="relative h-screen w-screen">
      <Header
        introRef={introRef}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        workRef={workRef}
      />
      <Introduction introRef={introRef} />
      <About aboutRef={aboutRef} />
      <Skills skillsRef={skillsRef} />
      <Projects projectsRef={projectsRef} />
      <Work workRef={workRef} />
      <Footer introRef={introRef} />
    </div>
  );
};

export default Index;
