import React from "react";
import Carousel1 from "./Carousel";
import RowColumn from "./RowColumn";
import Blocks from "./Blocks";
import OtherProjects from "./OtherProjects"

function Projects() {
  return (
    <div className="projects">
      <div className="template1">
        <div className="template1_header">My Projects</div>
        <div className="underline"></div>
        <div className="template1_box">
          <div className="template1_box-desc">
            <p className="template1_box-desc--top">Sleeping-room </p>
            <p className="template1_box-desc--bot">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              euismod lacinia vestibulum. Duis malesuada risus sit amet turpis
              accumsan, eu pellentesque justo interdum. Maecenas tincidunt
              libero et dolor lacinia fermentum.
            </p>
          </div>
          <div className="template1_box-img">
            <img src="../img/pro1.png" alt=""></img>
          </div>
        </div>
      </div>
      <div className="temp">
        <p className="head_pro">Słynny kamień</p>
        <div className="underline2"></div>
        <Carousel1 />
      </div>
      <div className="template3">
        <RowColumn />
      </div>
      <div className="template4">
        <Blocks />
      </div>
      <div className="template5">
        <OtherProjects />
      </div>
    </div>
  );
}

export default Projects;
