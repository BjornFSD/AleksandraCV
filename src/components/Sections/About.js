import React from "react";

function About() {
  return (
    <div ref={About} className="about">
      <div className="about_left">
        <img className="about_left-img" src="../img/profiloweS.png" alt="" />
      </div>
      <div className="about_right">
        <p className="about_right-header">About Me</p>
        <div className="underline"></div>
        <p className="about_right-desc">
          My name is Aleksandra Klińska, I’m a Freelancer Developer based in
          Gdańsk, Poland. I’m very passionate and dedicated to my work. My name
          is Aleksandra Klińska, I’m a Freelancer Developer based in Gdańsk,
          Poland. I’m very passionate and dedicated to my work.{" "}
        </p>
        <div className="about_right-box">
          <div className="about_right-box_a1">
            Name: Aleksandra Klińska
            <br />
            Phone: 21 37 666 420
            <br />
            E-mail: A.K.@gmail.com
            <br />
            Experience: There is no better than mine
          </div>
          <div className="about_right-box_a2">
            Age: 23(old ass)
            <br />
            Address: Gdańsk, Poland
            <br />
            Freelancer: Available
            <br />
            Skype: Bombola97
          </div>
        </div>
        <div className="download">Download CV</div>
      </div>
    </div>
  );
}

export default About;
