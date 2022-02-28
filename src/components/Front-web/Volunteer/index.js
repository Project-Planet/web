import React from "react";
import Footer from "../Footer";
import Navigation from "../Navigation";
import Header from "./js/Header";
import Path from "./js/Path";

const Volunteer = ({ isAuthenticated, logoutUser }) => {
  return (
    <div>
      <Navigation isAuthenticated={isAuthenticated} logoutUser={logoutUser} />
      <Header />
      <Path isAuthenticated={isAuthenticated} logoutUser={logoutUser} />
      <Footer />
    </div>
  );
};

export default Volunteer;
