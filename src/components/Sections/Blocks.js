import React from "react";

function Blocks() {
  const Arr = [
    { src: "./img/t1.jpg", name: "Bedroom", desc: "You can sleep there" },
    { src: "./img/t2.jpg", name: "Salon", desc: "You can rest there" },
    {
      src: "./img/t3.jpg",
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
      <div className="blocks_header">Blocks</div>
      <div className="underline"></div>
      <div className="blocks_box">{displayBlocks}</div>
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
    </div>
  );
}

export default Blocks;
