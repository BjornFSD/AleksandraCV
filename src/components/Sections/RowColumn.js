import React from "react";

function RowColumn({ language, setlanguage }) {
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
    {
      src: "../img/Karuzela/1.jpg",
      id: 0,
      title: "Strefa wejściowa",
      titleEng: "Entrance zone",
    },
    { src: "../img/Karuzela/2.jpg", id: 1, title: "2" },
    {
      src: "../img/Karuzela/3.jpg",
      id: 2,
      title: "Strefa główna",
      titleEng: "Main zone",
    },
    { src: "../img/Karuzela/4.jpg", id: 3, title: "4" },
    {
      src: "../img/Karuzela/5.jpg",
      id: 4,
      title: "Strefa techniczna",
      titleEng: "Technical zone",
    },
    { src: "../img/Karuzela/5a.jpg", id: 5, title: "6" },
    {
      src: "../img/Karuzela/6.jpg",
      id: 6,
      title: "mini lab - Strefa kreatywna",
      titleEng: "Creative zone",
    },
    { src: "../img/Karuzela/7.jpg", id: 7, title: "8" },
    {
      src: "../img/Karuzela/8.jpg",
      id: 8,
      title: "Warsztat",
      titleEng: "Workshop",
    },
    { src: "../img/Karuzela/9.jpg", id: 9, title: "10" },
    {
      src: "../img/Karuzela/10.jpg",
      id: 10,
      title: "Rysunki techniczne",
      titleEng: "Technical section",
    },
    { src: "../img/Karuzela/11.jpg", id: 11, title: "12" },
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
        <p>{language ? item[n].title : item[n].titleEng}</p>
        <div className="columns_box-img" style={stylesOdd}>
          {odd}
        </div>
      </div>
    ) : (
      <div className="columns_box-titleEven" key={index}>
        <p>{language ? item[n].title : item[n].titleEng}</p>
        <div className="columns_box-img" style={stylesEven}>
          {even}
        </div>
      </div>
    );
  });
  return (
    <div className="columns">
      <div className="columns_title">mini LAB</div>
      <div className="underline"></div>
      {language ? (
        <div className="columns_desc">
          <p>
            Ideą mini laboratorium(miniLAB) ma za zadanie wyostrzyć zmysły
            obserwacji pobudzić dziecko do działania indywidualnie oraz w
            grupie, ale przede wszystkim pomóc odkryć w nim pierwiastek twórczy,
            dociekając przy tym piękną również w małych rzeczach i ich detalu.
            Program przeprowadzonych warszatatów będzie sporządzony w taki
            sposób, aby jego uczestnicy wraz z gościnnym projektantem mogliby
            wspólnie tworzyć ideę istnienia małej pracowni, gdzie każdy z nich
            pełny ważną rolę. Przestrzeń będzie zaprojektowana w taki sposób,
            aby użytkownicy czuli się w niej swobodnie.
          </p>
          <p>
            Estetyczne zestawienie kolorystyczne oraz czytelne formy
            przestrzenne nadadzą wnętrzom charakteru, w których dziecko nie
            będzie rozproszone, lecz skupione i chętne do działania. Droga
            procesu projektowego od idei, poprzez projektowanie ma za zadanie
            sprawić, by dziecko czułoby się równie ważne jak prawdziwy
            projektant. W ten sposób powinno zaowocować poprawę samooceny,
            wspólnej integracji, rozwoju wrażliwości i swobodnej twórczości
            nawet u najmłodszych.
          </p>
        </div>
      ) : (
        <div className="columns_desc">
          <p>
            The idea of mini lab (miniLAB) is to sharpen the senses to stimulate
            the child to act individually and in group, but most importantly,
            help to discover the creative element in it, while also exploring
            the beautiful in my things and their details. The program of the
            workshops will be prepared in such a way that its participants
            together with the guest designer could together create the idea of a
            small studio where each of them a full role. The space will be
            designed this way, so that users can feel comfortable in it.
          </p>
          <p>
            Aesthetic color combination and legible forms spatial will give the
            interiors a character, in which the child does not will be
            dispersed, but focused and willing to act. Route the design process
            from idea to design has the task of to make the child feel as
            important as the real one designer. In this way it should result in
            improved self-esteem, common integration, development of sensitivity
            and free creation even in the youngest.
          </p>
        </div>
      )}
      <div className="columns_box">{showImages}</div>
    </div>
  );
}
export default RowColumn;
