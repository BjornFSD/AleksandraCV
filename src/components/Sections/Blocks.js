import React from "react";

function Blocks() {
  const Arr = [
    { src: "", name: "", desc: "" },
    { src: "", name: "", desc: "" },
    { src: "", name: "", desc: "" },
  ];
  return (
    <div className="blocks">
      <div className="blocks_header">Blocks</div>
      <div className="underline"></div>
      <div className="box"></div>
    </div>
  );
}

export default Blocks;
