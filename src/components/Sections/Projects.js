import React from "react";
import Carousel1 from "./Carousel";
// import hoverEffect from "hover-effect";
// import one from "../../images/balloon.jpg";
// import two from "../../images/balloon2.jpg";
// import fluid from "../../images/fluid.jpg";

function Projects() {
  // new hoverEffect({
  //   parent: document.querySelector(".temp"),
  //   intensity: 0.3,
  //   image1: one,
  //   image2: two,
  //   displacementImage: fluid,
  // });

  return (
    <div className="pro">
      <div className="pro_header">My Projects</div>
      <div className="underline"></div>
      <div className="pro_template1">
        <div className="pro_desc">
          <p className="pro_desc-top">Sleeping-room </p>
          <p className="pro_desc-bot">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            euismod lacinia vestibulum. Duis malesuada risus sit amet turpis
            accumsan, eu pellentesque justo interdum. Maecenas tincidunt libero
            et dolor lacinia fermentum.
          </p>
        </div>
        <div className="pro_img">
          <img src="../img/pro1.png" alt=""></img>
        </div>
      </div>
      <div className="break"></div>
      <div className="temp">
        <p className="head_pro">Słynny kamień</p>
        <div className="underline2"></div>
        <Carousel1 />
        <p className="desc_pro">
          Opis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          euismod lacinia vestibulum. Duis malesuada risus sit amet turpis
          accumsan, eu pellentesque justo interdum. Maecenas tincidunt libero et
          dolor lacinia fermentum.asdsad Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nunc euismod lacinia vestibulum. Duis malesuada risus
          sit amet turpis accumsan, eu pellentesque justo interdum. Maecenas
          tincidunt libero et dolor lacinia fermentum.asdsad{" "}
        </p>
      </div>
      {/* {hoverEffect} */}
    </div>
  );
}

export default Projects;
