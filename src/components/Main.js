import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Sections from "./Sections";

function Main() {
  const [language, setlanguage] = useState(true);

  const swap = () => {
    setlanguage(!language);
    console.log(language);
  };
  const PL = () => {
    setlanguage(true);
  };
  const ENG = () => {
    setlanguage(false);
  };
  return (
    <div className="all">
      <Nav
        language={language}
        setlanguage={setlanguage}
        swap={swap}
        PL={PL}
        ENG={ENG}
      />

      <div className="main">
        <img className="profile" src="../img/profilePhoto.png" alt="" />

        <p className="title">Aleksandra Klińska</p>
        <p className="subtitle">Interior Designer</p>
      </div>

      <Sections language={language} setlanguage={setlanguage} />

      <Footer language={language} setlanguage={setlanguage} />
    </div>
  );
}

export default Main;
