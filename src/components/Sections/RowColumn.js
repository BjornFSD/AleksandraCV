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
  // to show titles set title with id
  const boxArr = [
    { src: "./img/t1.jpg", id: 0, title: "Something 1" },
    { src: "./img/t2.jpg", id: 1, title: "2" },
    { src: "./img/t3.jpg", id: 2, title: "Something 3" },
    { src: "./img/t1.jpg", id: 3, title: "4" },
    { src: "./img/t2.jpg", id: 4, title: "Something 5" },
    { src: "./img/t3.jpg", id: 5, title: "6" },
    { src: "./img/t1.jpg", id: 6, title: "Something 7" },
    { src: "./img/t2.jpg", id: 7, title: "8" },
  ];

  const splitArr = boxArr.reduce(function (box, key, index) {
    //  console.log(index);
    return (
      (index % 2 === 0 ? box.push([key]) : box[box.length - 1].push(key)) && box
    );
  }, []);

  const showImages = splitArr.map((item, index) => {
    // console.log(index % 2, item[1]);
    let n = 0;
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
      <div className="columns_box-titleOdd" key={index}>
        <p>{item[n].title}</p>
        <div className="columns_box-img" style={stylesOdd}>
          {odd}
        </div>
      </div>
    ) : (
      <div className="columns_box-titleEven" key={index}>
        <p>{item[n].title}</p>
        <div className="columns_box-img" style={stylesEven}>
          {even}
        </div>
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
