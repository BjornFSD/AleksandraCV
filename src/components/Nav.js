import React from "react";

function Nav({ language, setlanguage, swap, PL, ENG }) {
  return (
    <div className="nav">
      <div className="nav_name">
        <p>Aleksandra Klińska</p>
      </div>
      <div className="nav_language">
        <div className="nav_language-item" onClick={PL}>
          <img src="./img/PL.png" alt="" />
        </div>
        <div className="nav_language-item" onClick={ENG}>
          <img src="./img/UK.png" alt="" />
        </div>
      </div>
      <ul className="nav_ul">
        <li
          className="nav_ul-li"
          onClick={() => {
            window.scrollTo({
              top: document.querySelector(".main").offsetTop,
              behavior: "smooth",
            });
          }}
        >
          {language ? "Strona Główna" : "Home"}
        </li>
        <li
          className="nav_ul-li"
          onClick={() => {
            window.scrollTo({
              top: document.querySelector(".about").offsetTop,
              behavior: "smooth",
            });
          }}
        >
          {language ? "O Mnie" : "About Me"}
        </li>
        <li
          className="nav_ul-li"
          onClick={() => {
            window.scrollTo({
              top: document.querySelector(".skills").offsetTop,
              behavior: "smooth",
            });
          }}
        >
          {language ? "Programy" : "Programms"}
        </li>
        <li
          className="nav_ul-li"
          onClick={() => {
            window.scrollTo({
              top: document.querySelector(".projects").offsetTop,
              behavior: "smooth",
            });
          }}
        >
          {language ? "Moje Projekty" : "My Projects"}
        </li>
        <li
          className="nav_ul-li"
          onClick={() => {
            window.scrollTo({
              top: document.querySelector(".footer").offsetTop,
              behavior: "smooth",
            });
          }}
        >
          {language ? "Kontakt" : "Contact"}
        </li>
      </ul>
    </div>
  );
}

export default Nav;
