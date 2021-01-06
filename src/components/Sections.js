import React from "react";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";

function Sections({ language, setlanguage }) {
  return (
    <div className="sections">
      <About language={language} setlanguage={setlanguage} />
      <Skills language={language} setlanguage={setlanguage} />
      <Projects language={language} setlanguage={setlanguage} />
    </div>
  );
}

export default Sections;
