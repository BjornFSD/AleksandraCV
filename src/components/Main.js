import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Sections from "./Sections";

function main() {
  return (
    <div className="all">
      <Nav />
      <div className="main">
        <img className="profile" src="../img/profilePhoto.png" alt="" />
        <p className="title">Aleksandra Klińska</p>
        <p className="subtitle">Architect & Designer</p>
      </div>
      <Sections />

      <Footer />
    </div>
  );
}

export default main;
