import React from "react";

function About({ language, setlanguage }) {
  return (
    <div ref={About} className="about">
      <div className="about_left">
        <p className="about_left-header">About Me</p>
        <div className="about_left_underline"></div>
        <img className="about_left-img" src="../img/profiloweS.png" alt="" />
      </div>
      <div className="about_right">
        <p className="about_right-header">{language ? "O mnie" : "About Me"}</p>
        <div className="about_right_underline"></div>
        <p className="about_right-desc">
          {language
            ? "Nazywam się Aleksandra Klińska, jestem Freelancerką projektowania wnętrz. Aktualnie mieszkam w Gdańsku, Polsce. Jestem pasjonatką i oddaję całą siebe w swojej pracy."
            : " My name is Aleksandra Klińska, I’m a Freelancer Interior Designer. I'm currently based inGdańsk, Poland. I’m very passionate and dedicated to my work. I was crazy about projecting home and other buildings when i was 10."}
        </p>
        <div className="about_right-box">
          <div className="about_right-box_a1">
            {language ? "Imię i Nazwisko" : "Name"}
            : Aleksandra Klińska
            <br />
            {language ? "Telefon" : "Name"}: 798 742 945
            <br />
            E-mail: aleksandraklinska20@gmail.com
            <br />
            {language
              ? "Doświadczenie: Absolwent Akademii Sztuk Pięknych w Gdańsku"
              : "Experience: 3 years(Self-Learning)"}
          </div>
          <div className="about_right-box_a2">
            {language ? "Wiek" : "Age"}: 23
            <br />
            {language ? "Adres: Gdańsk, Polska" : "Address: Gdańsk, Poland"}
            <br />
            Freelancer: {language ? "Dostępna" : "Available"}
            <br />
            Skype: aleksandraklinska20
          </div>
        </div>
        <div className="download">
          <a href="./files/test.pdf" className="download_text" download>
            {language ? "Pobierz CV" : "Download CV"}
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
