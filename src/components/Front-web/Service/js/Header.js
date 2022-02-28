import React from "react";
import "../css/Header.css";

function Header() {
  return (
    <div className="serHeader">
      <div className="row">
        <div className="col-md-6 sec2">
          <h2>How we work and Services we provide</h2>
          <hr />
          <br />
          <p>
            We work here by providing services to the organizations that want to
            fullfill there requirements to complete there needs to solve the
            problems. <br />
            These are the some problems given below which are in our first
            priority and these are major problems that are affecting the
            sustainability of our planet.
          </p>
          <br />
        </div>

        <div className="col-md-6 sec1">
          <br />
          <img src="img/aboutService/4.svg" className="col-lg-12 img1" />
        </div>
      </div>
    </div>
  );
}

export default Header;
