import React, { useState, useEffect } from "react";
import ImgComp from "./ImgComp";

function Carousel1({ language, setlanguage }) {
  let sliderArr = [
    { name: <ImgComp src="../img/BlueHouse/1.jpg" />, id: 0 },
    { name: <ImgComp src="../img/BlueHouse/2.jpg" />, id: 1 },
    { name: <ImgComp src="../img/BlueHouse/3.jpg" />, id: 2 },
    { name: <ImgComp src="../img/BlueHouse/4.jpg" />, id: 3 },
    { name: <ImgComp src="../img/BlueHouse/5.jpg" />, id: 4 },
    { name: <ImgComp src="../img/BlueHouse/6.jpg" />, id: 5 },
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
          ? "Założeniem projektowym było stworzenie domu mieszkalnego dla młodej pary. Posiada on: kuchnię, miejsce do pracy, sypialnię (antresola), łazienkę i małą szafę. Cały dom jest niebieski i jego wyposażenie jest monochromatyczne. Wyjątkiem jest drewniany stół z dwoma krzesłami. Mają one nawiązywać do domu rodzinnego, wspomnień i dzieciństwa. Cała elewacja jest przeszklona tak, aby jak najwięcej światła dostało się do środka. Fasada ma jeszcze jedno zadanie, zintegrować wnętrze i zewnętrze - kiedy użytkownik wychodzi na zewnątrz to wychodzi razem z funkcjami domu. Ma to być intuicyjne pragnienie bycia blisko natury. Wyposażenie ma również swoje zadanie. Gdy żaden mieszkaniec nie korzysta z żadnej ze stref - są one zamknięte lub ukryte, ale kiedy chce z nich korzystać - otwiera je. Kuchnia ma dodatkowy blat ukryty w ścianie, a w pozornej szafie i miejscu wypoczynku jest ukryte biurko przeznaczone do pracy przy komputerze... Kiedy użytkownik chce pracować, przenosi krzesło z kuchni do drugiego pokoju i tam pracuje. Możliwe jest również kontynuowanie go w innym miejscu. Wystarczy otworzyć drzwi tarasowe i przejść z miejsca pracy na mini taras. Dom ma dach jednospadowy. Jest on tańszy i łatwiejszy do wykonania. Można też zbierać wodę deszczową i wykorzystać ją do pracy np. w ogrodzie (aksonometria). Duża ilość okien pozwoli na ocieplenie domu. Szanując przyrodę, projekt zużywa mniej materiału. Jeden mebel ma kilka funkcji."
          : "The design assumption was to create a residential house for a youngcouple. It has: kitchen, work space, bedroom (antresol), bathroom andsmall wardrobe. The whole house and its equipment is monochrome. It isblue. The exception is a wooden table with two chairs. They are to referto the family home, memories and childhood. The entire facade is glazedso that as much light as possible gets inside. The facade has one moretask. Interior and exterior integration - the user goes outside with thefunctions of the house. It is to be an intuitive desire to be close tonature. Equipment also has a purpose. When no resident uses any of thezones - they are closed or hidden. When he wants to use them - he opensthem. The kitchen has an additional worktop hidden in the wall, and inthe apparent wardrobe and place of relaxation is hidden desk in the closet towork on the computer.. When the user wants to work, he moves the chairfrom the kitchen to the second room and works there. It is also possibleto continue it elsewhere. Just open the terrace door and go from thework area to the mini terrace. The house has a single-fall roof. It ischeaper and easier to make. You can also collect rainwater and use itfor work, e.g. in the garden (axonometry). A large number of windowswill allow home insulation. By respecting nature, the project uses lessmaterial. One piece of furniture has several functions."}
      </p>
    </div>
  );
}

export default Carousel1;
