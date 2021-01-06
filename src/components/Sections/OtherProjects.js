import React from "react";
import OthersOne from "./Others/OthersOne";

function OtherProjects({ language, setlanguage }) {
  return (
    <div className="others">
      <div className="others_title">
        {language ? "Inne Projekty" : "Other Projects"}
      </div>
      <div className="underline"></div>
      <div className="others_one">
        <OthersOne language={language} setlanguage={setlanguage} />
      </div>
    </div>
  );
}

export default OtherProjects;
