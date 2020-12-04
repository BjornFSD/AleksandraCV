import React from "react";
import { Carousel } from "react-responsive-carousel";

function Carousel1() {
  return (
    <Carousel autoPlay>
      <div>
        <img alt="" src="../img/t1.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img alt="" src="../img/t2.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img alt="" src="../img/t3.jpg" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
}

export default Carousel1;
