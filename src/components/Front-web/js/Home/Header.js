import React from "react";
import "../../css/Header.css";
import Navigation from "../../Navigation";

function Header({ isAuthenticated, logoutUser }) {
  return (
    <>
      <header id="header">
        <div>
          <Navigation
            isAuthenticated={isAuthenticated}
            logoutUser={logoutUser}
          />
        </div>
      </header>
      <section id="intro">
        <div className="intro-content">
          <h2 style={{fontSize: "3rem"}}>
            Make{" "}
            <span>
              <strong>the Earth*</strong>
            </span>
            <br />a better place!
          </h2>
          <div>
            <a href="#about" className="btn-get-started ">
              Get Started
            </a>
            <a href="#Join" className="btn-projects ">
              Join Planet
            </a>
          </div>
        </div>

        <div id="shapes">
          <div className="item1">
            <img src="shapes/shape-1.png" alt="" />
          </div>
          <div className="item2">
            <img src="shapes/shape-2.png" alt="" />
          </div>
          <div className="item3">
            <img src="shapes/shape-3.png" alt="" />
          </div>
          <div className="item4">
            <img src="shapes/shape-4.png" alt="" />
          </div>
          <div className="item5">
            <img src="shapes/shape-5.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
