import React, { useState, useEffect, useRef } from "react";
import { useWindowScroll } from "react-use";
import { ReactComponent as ScrollTop } from "./Sections/svg/arrowToTop.svg";

function ScrollToTop({ content }) {
  const refToTop = useRef(null);

  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);

  const scrollTo = () =>
    window.scrollTo({
      top: document.querySelector(".main").offsetTop,
      behavior: "smooth",
    });

  useEffect(() => {
    const top = document.querySelector(".main").offsetTop;
    if (pageYOffset > top) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [pageYOffset]);

  if (!visible) {
    return false;
  }

  return (
    <div ref={refToTop} onClick={scrollTo} className="scroll_to-top">
      <ScrollTop className="scroll_to-top--animation" />
    </div>
  );
}

export default ScrollToTop;
