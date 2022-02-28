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
                    button given at the end and complete your profile.
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
                  <h4>Post the Requirements</h4>
                  <p className="font-weight-light my-3">
                    Go to add post section to add posts by putting images and
                    writing about post with suitable category provided by our
                    interface.
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
                  <h4>Choose the right Candidate</h4>
                  <p className="font-weight-light my-3">
                    After creating post see your post by going to my posts and
                    click on see post icon for a particular post and checkout
                    some interested volunteers and NGOs.
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
                  <h4>Connect with Volunteer</h4>
                  <p className="font-weight-light my-3">
                    After seeing interested volunteers for particular send them
                    email or chat message provided by our interface.
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
                  <h4>Confirm completion of Project</h4>
                  <p className="font-weight-light my-3">
                    After getting conformation collaborate with them and start
                    working on project.
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
