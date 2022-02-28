import React from "react";
import { connect } from "react-redux";
import Home from "./js/Home";

const Front_web = ({ isLogined, logoutUser }) => {
  return (
    <div>
      <Home isAuthenticated={isLogined} logoutUser={logoutUser} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLogined: state.auth.isLogined,
});

export default connect(mapStateToProps, null)(Front_web);
