import React from "react";
import Carousel1 from "./Carousel";
import RowColumn from "./RowColumn";
import Blocks from "./Blocks";
import OtherProjects from "./OtherProjects";
import Carousel2 from "./Carousel2";

function Projects({ language, setlanguage }) {
  return (
    <div className="projects">
      <div className="template1">
        <div className="template1_header">My Projects</div>
        <div className="underline"></div>
      </div>
      <div className="temp">
        <p className="head_pro">
          {" "}
          {language
            ? "Projekt konkursowy - Microhome 2020"
            : "Competition project - Microhome 2020"}
        </p>
        <div className="underline2"></div>
        <Carousel1 language={language} setlanguage={setlanguage} />
      </div>
      <div className="template3">
        <RowColumn language={language} setlanguage={setlanguage} />
      </div>
      <div className="template4">
        <Blocks language={language} setlanguage={setlanguage} />
      </div>
      <div className="temp">
        <p className="head_pro">
          {language ? "Projekt stolika kawowego" : "Coffee table design"}
        </p>
        <div className="underline2"></div>
        <Carousel2 language={language} setlanguage={setlanguage} />
      </div>
      <div className="template5">
        <OtherProjects language={language} setlanguage={setlanguage} />
      </div>
    </div>
  );
}

export default Projects;
