import React from "react";
import "../css/Header.css";

function Header() {
  return (
    <div className="volHeader" style={{
      backgroundImage: "url(/img/nature8.svg)",
      backgroundRepeat: "no-repeat",
      width: "100%",
      position: "relative",
      top: "10%",
    }}>
      <div className="row">
        <div className="col-md-6 sec1">
          <br />
          <img src="img/VolOrg/1.svg" className="col-lg-12 img1" />
        </div>

        <div className="col-md-6 sec2">
          <h2>How do I become an Online Volunteer?</h2>
          <hr />
          <br />
          <p>
            To become a volunteer with us, you will need to sign up with us.
            Once you sign up and fill in your details, you can collaborate with
            NGOs, you can select a project of your choice by browsing posts.
            When you’ve completed the project, you get a certificate at the end
            by the NGO.
          </p>

          <p> Follow these steps and you’ll be ready to make a difference!</p>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Header;
