import React, { useState, useEffect } from "react";
import ImgComp from "./ImgComp";

function Carousel1() {
  let sliderArr = [
    { name: <ImgComp src="../img/BlueHouse/1.jpg" />, id: 0 },
    { name: <ImgComp src="../img/BlueHouse/2.jpg" />, id: 1 },
    { name: <ImgComp src="../img/BlueHouse/3.jpg" />, id: 2 },
    { name: <ImgComp src="../img/BlueHouse/4.jpg" />, id: 3 },
    { name: <ImgComp src="../img/BlueHouse/5.jpg" />, id: 4 },
    { name: <ImgComp src="../img/BlueHouse/6.jpg" />, id: 5 },
    { name: <ImgComp src="../img/BlueHouse/7.jpg" />, id: 6 },
    { name: <ImgComp src="../img/BlueHouse/8.jpg" />, id: 7 },
    { name: <ImgComp src="../img/BlueHouse/9.jpg" />, id: 8 },
  ];
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  const time = 3000;

  useEffect(() => {
    const changeSlide = () => {
      setX(x - 100);
      x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
    };
    const intervalChange = setInterval(() => {
      changeSlide();
    }, time);
    return () => clearInterval(intervalChange);
  });

  const takeId = document.querySelectorAll("#img");

  return (
    <div>
      <div className="slider">
        {sliderArr.map((item, index) => {
          return (
            <div
              key={index}
              className="slide"
              id={`img`}
              style={{ transform: `translateX(${x}%)` }}
            >
              {item.name}
            </div>
          );
        })}
        <button className="goLeft" onClick={goLeft}>
          Left
        </button>
        <button className="goRight" onClick={goRight}>
          Right
        </button>
      </div>
      <div className="smallImage">
        <div className="smallImages">
          {sliderArr.map((item, index) => {
            const transX = item.id * -100;

            // const changeX = () => {
            //   console.log(document.querySelectorAll(`#img`)[2]);

            //   //.style.transform = `translateX(-100%)`;
            // };
            // for (let v = 0; v < sliderArr.length; v++);
            const changeId = () => {
              for (let n = 0; n < sliderArr.length; n++) {
                takeId[n].style.transform = `translateX(${transX}%)`;
                setX(item.id * -100);
              }
            };
            return (
              <div key={index} className="smallSlide" onClick={changeId}>
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
      <p className="desc_pro">
        The design assumption was to create a residential house for a young
        couple. It has: kitchen, work space, bedroom (antresol), bathroom and
        small wardrobe. The whole house and its equipment is monochrome. It is
        blue. The exception is a wooden table with two chairs. They are to refer
        to the family home, memories and childhood. The entire facade is glazed
        so that as much light as possible gets inside. The facade has one more
        task. Interior and exterior integration - the user goes outside with the
        functions of the house. It is to be an intuitive desire to be close to
        nature. Equipment also has a purpose. When no resident uses any of the
        zones - they are closed or hidden. When he wants to use them - he opens
        them. The kitchen has an additional worktop hidden in the wall, and in
        the apparent wardrobe and place of relaxation is hidden in the closet to
        work on the computer.. When the user wants to work, he moves the chair
        from the kitchen to the second room and works there. It is also possible
        to continue it elsewhere. Just open the terrace door and go from the
        work area to the mini terrace. The house has a single-fall roof. It is
        cheaper and easier to make. You can also collect rainwater and use it
        for work, e.g. in the garden (axonometry). A large number of windows
        will allow home insulation. By respecting nature, the project uses less
        material. One piece of furniture has several functions.
      </p>
    </div>
  );
}

export default Carousel1;
