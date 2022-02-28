import React from "react";

const SignUp = ({ signUpfun }) => {
  return (
    <div className="panel left-panel">
      <div className="content">
        <h3>New here ?</h3>
        <p>
          Do you want a professional change? Then ConcatIt is for you, head over
          to the sign up page!
        </p>
        <button
          className="btnCustom transparent"
          onClick={signUpfun}
          id="sign-up-btn"
        >
          Sign up
        </button>
      </div>
      <img src="img/surprise.svg" className="image" alt="" />
    </div>
  );
};

export default SignUp;
