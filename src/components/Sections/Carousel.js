import React, { useState, useEffect } from "react";
import ImgComp from "./ImgComp";

function Carousel1() {
  let sliderArr = [
    { name: <ImgComp src="../img/t1.jpg" />, id: 0 },
    { name: <ImgComp src="../img/t2.jpg" />, id: 1 },
    { name: <ImgComp src="../img/t3.jpg" />, id: 2 },
  ];
  const [x, setX] = useState(0);
  const goLeft = () => {
    console.log(x);
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    console.log(x);
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
  );
}

export default Carousel1;
