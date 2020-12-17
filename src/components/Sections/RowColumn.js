import React from "react";

function RowColumn() {
  const stylesEven = {
    backgroundColor: "#21202670",
    boxShadow: " 350px 0 0 #21202670",
    justifyContent: "flex-start",
  };
  const stylesOdd = {
    backgroundColor: "#dfdfdf",
    boxShadow: " -350px 0 0 #dfdfdf",
  };

  let boxArr = [
    { src: "./img/t1.jpg", id: 0 },
    { src: "./img/t2.jpg", id: 1 },
    { src: "./img/t3.jpg", id: 2 },
    { src: "./img/t1.jpg", id: 3 },
    { src: "./img/t2.jpg", id: 4 },
    { src: "./img/t3.jpg", id: 5 },
    { src: "./img/t1.jpg", id: 6 },
    { src: "./img/t2.jpg", id: 7 },
  ];

  const splitArr = boxArr.reduce(function (box, key, index) {
    //  console.log(index);
    return (
      (index % 2 === 0 ? box.push([key]) : box[box.length - 1].push(key)) && box
    );
  }, []);

  const showImages = splitArr.map((item, index) => {
    // console.log(index % 2, item[1]);
    const ss = item.map((item2, index) => {
      return item2.src === undefined ? null : (
        <img alt="" src={item2.src} id={item2.id} key={index}></img>
      );
    });

    const odd = index % 2 === 0 ? ss : null;
    const even = !(index % 2 === 0) ? ss : null;
    // console.log(`parzyste ${odd}`);
    // console.log(`nieparzyste ${even}`);
    // console.log(ss.item);
    return !(odd === null) ? (
      <div className="columns_box-img" key={index} style={stylesOdd}>
        {odd}
      </div>
    ) : (
      <div className="columns_box-img" key={index} style={stylesEven}>
        {even}
      </div>
    );
  });
  return (
    <div className="columns">
      <div className="columns_title">Two Columns</div>
      <div className="underline"></div>
      <div className="columns_desc">description here smileW</div>
      <div className="columns_box">{showImages}</div>
    </div>
  );
}
export default RowColumn;
