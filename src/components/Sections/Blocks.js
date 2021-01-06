import React from "react";

function Blocks({ language, setlanguage }) {
  const Arr = [
    { src: "./img/Zukowo/1.jpg", name: "Salon", nameEng: "Salon" },
    { src: "./img/Zukowo/3.jpg", name: "Kuchnia", nameEng: "Kitchen" },
    { src: "./img/Zukowo/4.jpg", name: "Kuchnia", nameEng: "Kitchen" },
    {
      src: "./img/Zukowo/5.jpg",
      name: "Łazienka nr.1",
      nameEng: "Bathroom No.1",
    },
    {
      src: "./img/Zukowo/6.jpg",
      name: "Łazienka nr.1",
      nameEng: "Bathroom No.1",
    },
    {
      src: "./img/Zukowo/7.jpg",
      name: "Łazienka nr.1",
      nameEng: "Bathroom No.1",
    },
    {
      src: "./img/Zukowo/8.jpg",
      name: "Łazienka nr.2",
      nameEng: "Bathroom No.2",
    },
    {
      src: "./img/Zukowo/2.jpg",
      name: "Sypialnia nr.1",
      nameEng: "Bedroom No.1",
    },
    {
      src: "./img/Zukowo/13.jpg",
      name: "Sypialnia nr.2",
      nameEng: "Bedroom No.2",
    },
    {
      src: "./img/Zukowo/15.jpg",
      name: "Sypialnia nr.2",
      nameEng: "Bedroom No.2",
    },
    {
      src: "./img/Zukowo/14.jpg",
      name: "Sypialnia nr.2",
      nameEng: "Bedroom No.2",
    },
    {
      src: "./img/Zukowo/12.jpg",
      name: "Sypialnia nr.2",
      nameEng: "Bedroom No.2",
    },
    {
      src: "./img/Zukowo/10.jpg",
      name: "Sypialnia nr.3",
      nameEng: "Bedroom No.3",
    },
    {
      src: "./img/Zukowo/11.jpg",
      name: "Sypialnia nr.3",
      nameEng: "Bedroom No.3",
    },
    {
      src: "./img/Zukowo/9.jpg",
      name: "Sypialnia nr.3",
      nameEng: "Bedroom No.3",
    },
    {
      src: "./img/Zukowo/16.jpg",
      name: "Rzut mieszkania",
      nameEng: "Technical section",
    },
    {
      src: "./img/Zukowo/17.jpg",
      name: "Kuchnia",
      nameEng: "Technical section",
    },
    {
      src: "./img/Zukowo/18.jpg",
      name: "Łazienka No.1",
      nameEng: "Technical section",
    },
  ];

  const displayBlocks = Arr.map((item, index) => {
    return (
      <div className="blocks_box-element" key={index}>
        <div className="blocks_box-element--image">
          <img alt="" src={item.src} />
        </div>
        <div className="blocks_box-element--name">
          {language ? item.name : item.nameEng}
        </div>
      </div>
    );
  });

  return (
    <div className="blocks">
      <div className="blocks_header">
        {language ? "Realizacja" : "Implementation"}
      </div>
      <div className="underline"></div>
      <ul className="blocks_ul">
        <li className="blocks_ul-li">
          <p>{language ? "Lokaizacja" : "Location"}: Żukowo</p>
        </li>
        <li className="blocks_ul-li">
          <p> {language ? "Powierzchnia" : "Area"}: 86m2</p>
        </li>
        <li className="blocks_ul-li">
          <p>
            {language
              ? "Przeznaczenie: Projekt mieszkania dla rodziny 4-osobowej"
              : "Destiny: Design of an apartment for a four-person family"}
          </p>
        </li>
      </ul>
      <p className="blocks_description"></p>
      <div className="blocks_box">{displayBlocks}</div>
    </div>
  );
}

export default Blocks;
