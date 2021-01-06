import React from "react";

function Nav({ language, setlanguage, swap }) {
  return (
    <div className="nav">
      <div className="nav_name">
        <p>Aleksandra Klińska</p>
        <div className="nav_name-language" onClick={swap}>
          Zmień język
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
          home
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
          about me
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
          skills & programms
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
          projects
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
          contact
        </li>
      </ul>
    </div>
  );
}

export default Nav;
