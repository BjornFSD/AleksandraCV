import React from "react";

function Nav() {
  return (
    <div className="nav">
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
          Home
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
          About Me
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
          Skills & Programms
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
          Projects
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
          Contact
        </li>
      </ul>
    </div>
  );
}

export default Nav;
