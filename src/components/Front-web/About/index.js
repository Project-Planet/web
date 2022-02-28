import React from "react";
import Navigation from "../Navigation";
import Header from "./js/Header";
import Footer from "../Footer";
import Mission from "./js/Mission";
import Inspiration from "./js/Inspiration";
import Team from "./js/Team";

function About({ isAuthenticated, logoutUser }) {
  return (
    <div>
      <Navigation isAuthenticated={isAuthenticated} logoutUser={logoutUser} />
      <Header />
      <Mission />
      <Inspiration />
      {/* <Team /> */}
      <Footer />
    </div>
  );
}

export default About;
