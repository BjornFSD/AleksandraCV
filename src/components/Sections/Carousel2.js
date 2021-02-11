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
        {language
          ? "Zaprojektowany przeze mnie stolik kawowy powstał z założeniem wkomponowania go do wybranej przestrzeni mieszkalnej. Jest nią salon w XVII-wiecznym katalońskim domu w Hiszpanii. Cały obiekt jest wykonany z kamienia naturalnego o różnej strukturze. Założeniem projektowym stolika była przede wszystkim forma i funkcja. Ze względu na kubaturę wybranego pomieszczenia zdecydowałam się na zaprojektowanie dwóch stolików, które po zespoleniu tworzą wspólną całość. Bryła ma nawiązywać do uproszczonej formy naturalnego kamienia, dlatego też krawędzie stolików prowadzone są po delikatnym łuku, a wykorzystane przeze mnie drewno jesionowe oraz malowane na czarny mat stalowe nogi nawiązują do kontrastujących sobie cech domu jakimi są surowość, miękkość, delikatność."
          : "The coffee table I designed was created with the idea of incorporating it into a selected living space. It is a living room in a 17th century Catalan house in Spain. The whole object is made of natural stone with different textures. The design assumption for the table was primarily form and function. Because of the cubature of the chosen room I've decided to design two tables, which after joining together create a common whole. The shape is supposed to refer to the simplified form of natural stone, that's why the edges of the tables are led in a delicate arc, and the ash wood and matte black painted steel legs I used refer to the contrasting features of the house which are rawness, softness and delicacy."}
      </p>
    </div>
  );
}

export default Carousel2;
