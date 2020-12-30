import React from "react";

function Blocks() {
  const Arr = [
    { src: "./img/Zukowo/1.jpg", name: "Bedroom", desc: "You can sleep there" },
    { src: "./img/Zukowo/2.jpg", name: "Salon", desc: "You can rest there" },
    {
      src: "./img/Zukowo/3.jpg",
      name: "Bathroom",
      desc: "You can take a bath there",
    },
    { src: "./img/Zukowo/4.jpg", name: "Bedroom", desc: "You can sleep there" },
    { src: "./img/Zukowo/5.jpg", name: "Salon", desc: "You can rest there" },
    {
      src: "./img/Zukowo/6.jpg",
      name: "Bathroom",
      desc: "You can take a bath there",
    },
    { src: "./img/Zukowo/7.jpg", name: "Bedroom", desc: "You can sleep there" },
    { src: "./img/Zukowo/8.jpg", name: "Salon", desc: "You can rest there" },
    {
      src: "./img/Zukowo/9.jpg",
      name: "Bathroom",
      desc: "You can take a bath there",
    },
    {
      src: "./img/Zukowo/10.jpg",
      name: "Bedroom",
      desc: "You can sleep there",
    },
    { src: "./img/Zukowo/11.jpg", name: "Salon", desc: "You can rest there" },
    {
      src: "./img/Zukowo/12.jpg",
      name: "Bathroom",
      desc: "You can take a bath there",
    },
    {
      src: "./img/Zukowo/13.jpg",
      name: "Bedroom",
      desc: "You can sleep there",
    },
    { src: "./img/Zukowo/14.jpg", name: "Salon", desc: "You can rest there" },
    {
      src: "./img/Zukowo/15.jpg",
      name: "Bathroom",
      desc: "You can take a bath there",
    },
  ];

  const displayBlocks = Arr.map((item, index) => {
    return (
      <div className="blocks_box-element" key={index}>
        <div className="blocks_box-element--image">
          <img alt="" src={item.src} />
        </div>

        <div className="blocks_box-element--name">{item.name}</div>
        <div className="blocks_box-element--desc">{item.desc}</div>
      </div>
    );
  });

  return (
    <div className="blocks">
      <div className="blocks_header">Żukowo</div>
      <div className="underline"></div>
      <p className="blocks_description">
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod
        lacinia vestibulum. Duis malesuada risus sit amet turpis accumsan, eu
        pellentesque justo interdum. Maecenas tincidunt libero et dolor lacinia
        fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
        euismod lacinia vestibulum. Duis malesuada risus sit amet turpis
        accumsan, eu pellentesque justo interdum. Maecenas tincidunt libero et
        dolor lacinia fermentum.
      </p>
      <div className="blocks_box">{displayBlocks}</div>
    </div>
  );
}

export default Blocks;
