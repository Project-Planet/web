import React from "react";
import "../css/Path.css";
import { Link } from "react-router-dom";

function Path({ isAuthenticated }) {
  return (
    <div>
      <div className="container my-5">
        <section id="steps">
          <div className="text-center mb-5 volHead">
            <h2 className="display-4">
              Follow these Steps and you are <span>GTG</span>.
            </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="cardPath  position-relative px-3 my-5">
                <div className="numberCircle  circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative border border-white">
                  <p>1</p>
                </div>
                <div className="px-3 text-center pb-3">
                  <h4>Sign up and create Profile</h4>
                  <p className="font-weight-light my-3">
                    Simply click on Login button in navbar or click on get start
                    button given at the end.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="cardPath position-relative px-3 my-5">
                <div className="numberCircle  circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative border border-white">
                  <p>2</p>
                </div>
                <div className="px-3 text-center pb-3">
                  <h4>Browse and Apply</h4>
                  <p className="font-weight-light my-3">
                    After completing the signup , complete your profile, browse
                    posts and apply in which you are interested and even you can
                    create your posts.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="cardPath  position-relative px-3 my-5">
                <div className="numberCircle  circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative border border-white">
                  <p>3</p>
                </div>
                <div className="px-3 text-center pb-3">
                  <h4>Get selected</h4>
                  <p className="font-weight-light my-3">
                    After applying for any event or collaboration, wait for NGO
                    for interview.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="cardPath  position-relative px-3 my-5">
                <div
                  className="numberCircle  circle text-white rounded-circle d-flex align-items-center justify-content-center 
                                mx-auto position-relative border border-white"
                >
                  <p>4</p>
                </div>
                <div className="px-3 text-center pb-3">
                  <h4>Get connected</h4>
                  <p className="font-weight-light my-3">
                    After selecting for interview, wait for NGO or volunteer to
                    contact you on chat provided by our platform or on email and
                    get selected for your work.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 mx-auto">
              <div className="cardPath  position-relative px-3 my-5">
                <div
                  className="numberCircle  circle text-white rounded-circle d-flex
                                 align-items-center justify-content-center mx-auto position-relative border border-white"
                >
                  <p>5</p>
                </div>
                <div className="px-3 text-center pb-3">
                  <h4>Recieve your Certificate</h4>
                  <p className="font-weight-light my-3">
                    After completing the project get e-certificate by NGO on our
                    platform and you can put that in your profile.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center ">
            <Link
              to={isAuthenticated ? "/dashboard" : "/loginRegister"}
              className="btn-Vol "
            >
              {!isAuthenticated ? "Get Started" : "Dasboard"}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Path;
