import React from "react";
import Carousel1 from "./Carousel";
import RowColumn from "./RowColumn";
import Blocks from "./Blocks";
import OtherProjects from "./OtherProjects";
import Carousel2 from "./Carousel2";

function Projects() {
  return (
    <div className="projects">
      <div className="template1">
        <div className="template1_header">My Projects</div>
        <div className="underline"></div>
      </div>
      <div className="temp">
        <p className="head_pro">Blue House</p>
        <div className="underline2"></div>
        <Carousel1 />
      </div>
      <div className="template3">
        <RowColumn />
      </div>
      <div className="template4">
        <Blocks />
      </div>
      <div className="temp">
        <p className="head_pro">Słynny kamień</p>
        <div className="underline2"></div>
        <Carousel2 />
      </div>
      <div className="template5">
        <OtherProjects />
      </div>
    </div>
  );
}

export default Projects;
