import React from "react";
import { Link } from "react-scroll";

function Nav() {
  const los = window.offset > window.offset - 500;

  return (
    <div className="nav">
      <ul className="nav_ul">
        <li className="nav_ul-li">
          <Link
            to="main"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Home
          </Link>
        </li>
        <li className="nav_ul-li">
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={1000}
          >
            About Me
          </Link>
        </li>
        <li className="nav_ul-li">
          <Link
            to="skills"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Skills & Programms
          </Link>
        </li>
        <li className="nav_ul-li">
          <Link
            to="pro"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Projects
          </Link>
        </li>
        <li className="nav_ul-li">
          <Link
            to="footer"
            activeClass="active"
            offset={-290}
            spy={true}
            smooth={true}
            duration={1000}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
