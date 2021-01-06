import React, { useState, useEffect } from "react";
import ImgComp from "./ImgComp";

function Carousel2({ language, setlanguage }) {
  let sliderArr = [
    { name: <ImgComp src="../img/Stolik/1.jpg" />, id: 0 },
    { name: <ImgComp src="../img/Stolik/2.jpg" />, id: 1 },
    { name: <ImgComp src="../img/Stolik/3.jpg" />, id: 2 },
    { name: <ImgComp src="../img/Stolik/4.jpg" />, id: 3 },
    { name: <ImgComp src="../img/Stolik/5.jpg" />, id: 4 },
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
    </div>
  );
}

export default Carousel2;
