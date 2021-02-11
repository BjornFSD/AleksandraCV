import React from "react";

function OthersOne({ language, setlanguage }) {
  const Library = [
    "./img/Czytelnia/1.jpg",
    "./img/Czytelnia/2.jpg",
    "./img/Czytelnia/3.jpg",
    "./img/Czytelnia/4.jpg",
  ];
  const Kitchen1 = [
    "./img/Kuchnia1/1.jpg",
    "./img/Kuchnia1/2.jpg",
    "./img/Kuchnia1/3.jpg",
    "./img/Kuchnia1/4.jpg",
    "./img/Kuchnia1/5.jpg",
    "./img/Kuchnia1/6.jpg",
    "./img/Kuchnia1/7.jpg",
  ];
  const Kitchen2 = [
    "./img/Kuchnia2/1.jpg",
    "./img/Kuchnia2/2.jpg",
    "./img/Kuchnia2/3.jpg",
    "./img/Kuchnia2/4.jpg",
    "./img/Kuchnia2/5.jpg",
    "./img/Kuchnia2/6.jpg",
    "./img/Kuchnia2/7.jpg",
    "./img/Kuchnia2/8.jpg",
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
        <div className="Others_First_header">
          {language ? "Czytelnia" : "Reading room"}
        </div>
        <div className="underline"></div>
        {language ? (
          <p className="Others_First_description">
            Założeniem projektu było zagospodarowanie przestrzeni publicznej w
            formie czytelni. Jest to miejsce specjalistyczne, gdzie znajdują się
            książki, audiobooki, publikacje i albumy, wyłącznie o tematyce
            botanicznej. Czytelnia botaniczna swoją kolorystyką i formą ma za
            zadanie odprężać i wyciszać. Celowy zabieg ustawienia siedzisk ma za
            zadanie tworzyć dodatkowy komfort dla czytelnika, tak, żeby każdy
            mógł znaleźć miejsce dla siebie. Główną inspiracją projektu była
            analiza struktur roślin pod mikroskopem. Ich organiczna forma
            nakierowała mnie do zaprojektowaia przestrzeni o charakterze
            płynnym, falistym i lekkim. Wnętrza są wypełnione tkaninami
            począwszy od posadzki kończąc na siedziskach w kontraście z
            metalowymi rurkami w barwach natury. Tworzą one formę, w której
            znajdują się miejsca przeznaczone na książki.
          </p>
        ) : (
          <p className="Others_First_description">
            The aim of the project was to develop public space in The form of a
            reading room. It is a specialized place where there are books,
            audiobooks, publications and albums, exclusively on the subject of
            botanical. The botanical reading room with its colors and form has
            the task of relaxing and silencing. A purposeful procedure of
            setting the seats has the task of creating additional comfort for
            the reader, so that everyone can find a place for themselves. The
            main inspiration for the project were analysis of plant structures
            under a microscope. Their organic form directed me to design a space
            with liquid, wavy and light character. The interiors are filled with
            fabrics starting from the floor to the seats in contrast to the
            metal tubes in the colors of nature. They create a form in which
            they are finding places for books.
          </p>
        )}

        <div className="Others_First_box">{displayLibrary}</div>
      </div>
      <div className="Others_First">
        <div className="Others_First_header">
          {" "}
          {language ? "Kuchnia nr.1" : "Kitchen No.1"}
        </div>
        <div className="underline"></div>
        <p className="Others_First_description"></p>
        <div className="Others_First_box">{displayKitchen1}</div>
      </div>
      <div className="Others_First">
        <div className="Others_First_header">
          {" "}
          {language ? "Kuchnia nr.2" : "Kitchen No.2"}
        </div>
        <div className="underline"></div>
        <p className="Others_First_description"></p>
        <div className="Others_First_box">{displayKitchen2}</div>
      </div>
      <div className="Others_First">
        <div className="Others_First_header">
          {language
            ? "Projekt i realizacja ściany dekoracyjnej w salonie fryzjerskim ,,Magia,,"
            : "Design and implementation of a decorative wall in the hairdressing salon ,,Magia,,"}
        </div>
        <div className="underline"></div>
        <p className="Others_First_description"></p>
        <div className="Others_First_box">{displayHairSalon}</div>
      </div>
      <div className="Others_First">
        <div className="Others_First_header">
          {language ? "Siedziesko nr.1" : "Seat no.1"}
        </div>
        <div className="underline"></div>
        <p className="Others_First_description">
          {language
            ? "Projekt powstał z założeniem wykorzystania jak największej ilości odpadów materiału. Jest to mebel który można złożyć bez użycia dodatkowych narzędzi."
            : "The project was created with the assumption of using as much waste material as possible. It is a piece of furniture that can be assembled without using additional tools."}
        </p>
        <div className="Others_First_box">{displaySeat1}</div>
      </div>
      <div className="Others_First">
        <div className="Others_First_header">
          {language ? "Siedziesko nr.2" : "Seat no.2"}
        </div>
        <div className="underline"></div>

        {language ? (
          <div className="Others_First_description">
            <p>
              Projekt mebla modułowego DROP kształtem przypominający kroplę
              wody, powstał z przeznaczeniem do wykorzystania między innymi w
              miejscach publicznych. Głównym założeniem projektowym było
              umożliwienie użytkownikowi zaaranżowanie siedzisk w własny,
              kreatywny układ. Kolekcja siedzisk modułowych świetnie rozwija
              wyobraźnię dzieci, uczy kreatywności oraz współpracy. Kolekcja
              składa się z trzech podstawowych modułów o tej samej formie,
              natomiast o różnych wysokościach: 30/40/45 cm. Stabilne siedziska
              zostają obite materiałem o wysokiej jakości (tkanina Ballagie
              velvet col. 07, 19, 23).
            </p>
            <p>
              Bryła siedziska powstała z inspiracji naturalnymi formami przyrody
              jak kształt szyszki. Zbudowana jest ona z powtarzających się
              elementów, które pomimo zwiększającej się skali tworzą zespoloną,
              ciekawą formę. Wysokości siedzisk są zróżnicowane ze względów
              ergonomicznych. Przeznaczone są dla dzieci jak i dorosłych.
              Dlatego modułowe siedziska DROP są wygodne i dostosowane dla
              każdego. Dzięki wyprofilowanemu kształtowi, który powstał na bazie
              dwóch okręgów, siedziska można łączyć ze sobą w zależności od
              potrzeb, tworząc wiele ciekawych kompozycji.
            </p>
          </div>
        ) : (
          <div className="Others_First_description">
            <p>
              The design of DROP modular furniture resembling a drop of water
              was created for use in public places. The main design assumption
              was to enable the user to arrange the seats in their own creative
              arrangement. The collection of modular seats perfectly develops
              children's imagination, teaches creativity and cooperation. The
              collection consists of three basic modules of the same form and
              different heights: 30/40/45 cm. Stable seats are upholstered with
              high quality material (fabric Ballagie velvet col. 07, 19, 23).
            </p>
            <p>
              The body of the seat was inspired by natural forms of nature like
              a cone shape. It is made up of repetitive elements which, despite
              the increasing scale, form a complex, interesting form. Seat
              heights are varied for ergonomic reasons. They are designed for
              both children and adults. That is why DROP modular seats are
              comfortable and adapted for everyone. Thanks to the profiled
              shape, which is based on two circles, the seats can be combined
              with each other depending on the needs, creating many interesting
              compositions.
            </p>
          </div>
        )}

        <div className="Others_First_box">{displaySeat2}</div>
      </div>
    </div>
  );
}

export default OthersOne;
