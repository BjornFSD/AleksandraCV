import React from "react";

function OthersOne() {
  const Library = ["./img/Czytelnia/1.jpg", "./img/Czytelnia/2.jpg"];
  const Kitchen1 = [
    "./img/Kuchnia1/1.jpg",
    "./img/Kuchnia1/2.jpg",
    "./img/Kuchnia1/3.jpg",
    "./img/Kuchnia1/4.jpg",
  ];
  const Kitchen2 = [
    "./img/Kuchnia2/1.jpg",
    "./img/Kuchnia2/2.jpg",
    "./img/Kuchnia2/3.jpg",
    "./img/Kuchnia2/4.jpg",
    "./img/Kuchnia2/5.jpg",
  ];
  const HairSalon = [
    "./img/SalonFryzjerski/1.jpg",
    "./img/SalonFryzjerski/2.jpg",
  ];
  const Seat1 = ["./img/Siedzisko1/1.jpg", "./img/Siedzisko1/2.jpg"];
  const Seat2 = [
    "./img/Siedzisko2/1.jpg",
    "./img/Siedzisko2/2.jpg",
    "./img/Siedzisko2/3.jpg",
    "./img/Siedzisko2/4.jpg",
    "./img/Siedzisko2/5.jpg",
    "./img/Siedzisko2/6.jpg",
  ];

  const displayLibrary = Library.map((item, index) => {
    return (
      <div className="Others_First_box-element" key={index}>
        <img alt="" src={item} />
      </div>
    );
  });
  const displayKitchen1 = Kitchen1.map((item, index) => {
    return (
      <div className="Others_First_box-element" key={index}>
        <img alt="" src={item} />
      </div>
    );
  });
  const displayKitchen2 = Kitchen2.map((item, index) => {
    return (
      <div className="Others_First_box-element" key={index}>
        <img alt="" src={item} />
      </div>
    );
  });
  const displayHairSalon = HairSalon.map((item, index) => {
    return (
      <div className="Others_First_box-element" key={index}>
        <img alt="" src={item} />
      </div>
    );
  });
  const displaySeat1 = Seat1.map((item, index) => {
    return (
      <div className="Others_First_box-element" key={index}>
        <img alt="" src={item} />
      </div>
    );
  });
  const displaySeat2 = Seat2.map((item, index) => {
    return (
      <div className="Others_First_box-element" key={index}>
        <img alt="" src={item} />
      </div>
    );
  });

  return (
    <div className="Others">
      <div className="Others_First">
        <div className="Others_First_header">Czytelnia</div>
        <div className="underline"></div>
        <p className="Others_First_description">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod
          lacinia vestibulum. Duis malesuada risus sit amet turpis accumsan, eu
          pellentesque justo interdum. Maecenas tincidunt libero et dolor
          lacinia fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
        <div className="Others_First_box">{displayLibrary}</div>
      </div>
      <div className="Others_First">
        <div className="Others_First_header">Kuchnia 1</div>
        <div className="underline"></div>
        <p className="Others_First_description">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod
          lacinia vestibulum. Duis malesuada risus sit amet turpis accumsan, eu
          pellentesque justo interdum. Maecenas tincidunt libero et dolor
          lacinia fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
        <div className="Others_First_box">{displayKitchen1}</div>
      </div>
      <div className="Others_First">
        <div className="Others_First_header">Kuchnia 2</div>
        <div className="underline"></div>
        <p className="Others_First_description">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod
          lacinia vestibulum. Duis malesuada risus sit amet turpis accumsan, eu
          pellentesque justo interdum. Maecenas tincidunt libero et dolor
          lacinia fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
        <div className="Others_First_box">{displayKitchen2}</div>
      </div>
      <div className="Others_First">
        <div className="Others_First_header">Salon Fryzjerski Ściana</div>
        <div className="underline"></div>
        <p className="Others_First_description">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod
          lacinia vestibulum. Duis malesuada risus sit amet turpis accumsan, eu
          pellentesque justo interdum. Maecenas tincidunt libero et dolor
          lacinia fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
        <div className="Others_First_box">{displayHairSalon}</div>
      </div>
      <div className="Others_First">
        <div className="Others_First_header">Siedzisko 1</div>
        <div className="underline"></div>
        <p className="Others_First_description">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod
          lacinia vestibulum. Duis malesuada risus sit amet turpis accumsan, eu
          pellentesque justo interdum. Maecenas tincidunt libero et dolor
          lacinia fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
        <div className="Others_First_box">{displaySeat1}</div>
      </div>
      <div className="Others_First">
        <div className="Others_First_header">Siedzisko 2</div>
        <div className="underline"></div>
        <p className="Others_First_description">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod
          lacinia vestibulum. Duis malesuada risus sit amet turpis accumsan, eu
          pellentesque justo interdum. Maecenas tincidunt libero et dolor
          lacinia fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
        <div className="Others_First_box">{displaySeat2}</div>
      </div>
    </div>
  );
}

export default OthersOne;
