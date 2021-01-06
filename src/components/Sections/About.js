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
        <p className="about_right-header">About Me</p>
        <div className="about_right_underline"></div>

        {language ? (
          <p className="about_right-desc">a</p>
        ) : (
          <p className="about_right-desc">
            My name is Aleksandra Klińska, I’m a Freelancer Developer based in
            Gdańsk, Poland. I’m very passionate and dedicated to my work. I was
            crazy about projecting home and other buildings when i was 10.
          </p>
        )}
        <div className="about_right-box">
          <div className="about_right-box_a1">
            Name: Aleksandra Klińska
            <br />
            Phone: 798 742 945
            <br />
            E-mail: aleksandraklinska20@gmail.com
            <br />
            Experience: 3 years(Self-Learning)
          </div>
          <div className="about_right-box_a2">
            Age: 23
            <br />
            Address: Gdańsk, Poland
            <br />
            Freelancer: Available
            <br />
            Skype: aleksandraklinska20
          </div>
        </div>
        <div className="download">
          <a href="./files/test.pdf" className="download_text" download>
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
