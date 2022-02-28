import React from "react";

export const SignIn = ({ signInfun }) => {
  return (
    <div className="panel right-panel">
      <div className="content">
        <h3>One of us ?</h3>
        <p>
          We got it, you are already a part of our community, so lets explore it
          together!
        </p>
        <button
          className="btnCustom transparent"
          onClick={signInfun}
          id="sign-in-btn"
        >
          Sign in
        </button>
      </div>
      <img src="img/party.svg" className="image" alt="" />
    </div>
  );
};
