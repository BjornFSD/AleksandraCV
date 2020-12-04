import React from "react";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";

function Sections() {
  return (
    <div className="sections">
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default Sections;
