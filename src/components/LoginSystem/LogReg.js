import React, { useEffect, useState } from "react";
import "../Styles/LogReg.css";
import Register from "./Register";
import SignUp from "../LoginSystemPanels/SignUp";
import { SignIn } from "../LoginSystemPanels/SignIn";
import Login from "./Login";
import { useHistory } from "react-router";
import { connect } from "react-redux";

const LogReg = ({ loginUser, registerUser, isAuthenticated }) => {
  const [signUp, setSignUp] = useState("LogRegcontainer");

  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/dashboard");
    }
  }, [isAuthenticated]);

  const signUpfun = () => {
    setSignUp("LogRegcontainer sign-up-mode");
  };

  const signInfun = () => {
    setSignUp("LogRegcontainer");
  };

  return (
    <>
      {/* {`${signUp ? "sign-up-btn" : "sign-up-mode"}`} */}
      <button
        type="button"
        className="btn btn-primary px-3 rounded-0 outline-0 text-white position-fixed"
        style={{
          top: "4%",
          left: "-2px",
          zIndex: 99999,
          fontSize: "1.3rem",
          background: "#5995fd !important",
        }}
        onClick={() => history.push("/")}
      >
        <i className="fas fa-angle-left"></i> Go Back
      </button>
      <div className={signUp}>
        <div className="forms-container">
          <div className="signin-signup">
            <Login loginUser={loginUser} />
            <Register registerUser={registerUser} />
          </div>
        </div>

        <div className="panels-container">
          <SignUp signUpfun={signUpfun} />

          <SignIn signInfun={signInfun} />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isLogined,
    user: state.auth.user,
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps)(LogReg);
