import React from "react";
import FormEmail from "./FormEmail";

function Footer() {
  return (
    <div className="footer">
      <div className="mainF">
        <div className="mainF_social">
          <div className="mainF_social-head">SOCIAL MEDIA</div>
          <div className="mainF_social-text">
            <div className="mainF_social-text--fb">
              <div className="mainF_social-text--fb-icon">
                <img src="../img/fb.png" alt=""></img>
              </div>
              <div className="mainF_social-text--fb-link">
                <a
                  className="mainF_social-text--a"
                  href="https://www.facebook.com/aleksandra.klinska.50/"
                >
                  facebook.com/aleksandra.klinska.50
                </a>
              </div>
            </div>
            <div className="mainF_social-text--ig">
              <div className="mainF_social-text--ig-icon">
                <img src="../img/ig.png" alt=""></img>
              </div>
              <div className="mainF_social-text--ig-link">
                <a
                  className="mainF_social-text--a"
                  href="https://www.instagram.com/k___aleksandra/"
                >
                  instagram.com/k___aleksandra/
                </a>
              </div>
            </div>
            <div className="mainF_social-text--linkedin">
              <div className="mainF_social-text--linkedin-icon">
                <img src="../img/linkedin.png" alt=""></img>
              </div>
              <div className="mainF_social-text--linkedin-link">
                <a
                  className="mainF_social-text--a"
                  href="https://www.linkedin.com/in/aleksandra-kli%C5%84ska-730283163/?trk=public-profile-join-page"
                >
                  linkedin.com/in/aleksandra-klinska
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mainF_contact">
          <div className="mainF_contact-head">CONTACT ME</div>
          <div className="mainF_contact-form">
            <FormEmail />
          </div>
        </div>
      </div>
      <div className="stopka">
        © 2020 Design & Developed by Michał Dulko . All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
