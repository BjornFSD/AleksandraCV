import React from "react";

function About({ language }) {
  return (
    <div ref={About} className="about">
      <div className="about_left">
        <p className="about_left-header">{language ? "O mnie" : "About Me"}</p>
        <div className="about_left_underline"></div>
        <img className="about_left-img" src="../img/profiloweS.png" alt="" />
      </div>
      <div className="about_right">
        <p className="about_right-header">{language ? "O mnie" : "About Me"}</p>
        <div className="about_right_underline"></div>
        <p className="about_right-desc">
          {language
            ? "Nazywam się Aleksandra Klińska, jestem studentką studiów magisterskich na Akademii Sztuk Pięknych w Gdańsku na Wydziale Architektury i Wzornictwa. Moją pasją jest poszukiwanie form, barw, struktur, które wspólnie tworzą unikatową przestrzeń. Lubię zdobywać doświadczenie w sztuce. Z zamiłowania maluję i tworze zdjęcia analogowoe."
            : "My name is Aleksandra Klińska, I am a Master's student at the Academy of Fine Arts in Gdansk at the Faculty of Architecture and Design. My passion is searching for forms, colors, structures, which together create a unique space. I like to gain experience in art. I am passionate about painting and creating analogue photographs."}{" "}
        </p>
        <div className="about_right-box">
          <div className="about_right-box_a1">
            {language ? "Imię i Nazwisko" : "Name"}
            : Aleksandra Klińska
            <br />
            {language ? "Telefon" : "Phone"}: 798 742 945
            <br />
            E-mail: aleksandraklinska20@gmail.com
            <br />
            {language
              ? "Doświadczenie: Absolwent Akademii Sztuk Pięknych w Gdańsku"
              : "Graduate of the Academy of Fine Arts in Gdańsk"}
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
          <a
            href="./files/Aleksandra_Klińska_CV.pdf"
            className="download_text"
            download
          >
            {language ? "Pobierz CV" : "Download CV"}
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
