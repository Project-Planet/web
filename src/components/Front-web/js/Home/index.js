import React from "react";
import Footer from "../../Footer";
import About from "./About";
import Contact from "./Contact";
import Events from "./Events";
import Header from "./Header";
import Services from "./Services";
import VolOrg from "./VolOrg";

const Home = ({ isAuthenticated, logoutUser }) => {
  return (
    <div>
      <Header isAuthenticated={isAuthenticated} logoutUser={logoutUser} />
      <About />
      <Services />
      <VolOrg isAuthenticated={isAuthenticated} logoutUser={logoutUser} />
      <Events />
      <Contact />
      <Footer />

    </div>
  );
};

export default Home;
