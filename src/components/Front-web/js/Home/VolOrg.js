import React from "react";
import "../../css/VolOrg.css";
import { Link } from "react-router-dom";

function VolOrg({ isAuthenticated }) {
  const [name, setName] = React.useState(false);

  function handleTwo(event) {
    event.preventDefault();
    setName(!name);
  }

  return (
    <div
      className="container1"
      style={{
        backgroundImage: "url(/img/nature04.svg)",
        backgroundRepeat: "no-repeat",
        width: "100%",
        position: "relative",
        top: "10%",
      }}
    >
      <div className="section1">
        <div className="volOrgCon col-md-6 col-sm-6 col-xs-12" id="htext">
          <h2>Help others to help other!</h2>
          <hr />
          <br />
          <p>
            <span className="text-warning">So,</span>{" "}
            <span className="text-primary">Are you a volunteer ?</span> <br />
            <br />
            If yes, then join our platform and collaborate with NGOs,
            participate in the events to help the NGOs to solve the problems
            that are coming in the way of sustainable develoment of our planet.
          </p>
          <br />

          <Link
            to={isAuthenticated ? "/dashboard" : "/loginRegister"}
            className="btn-sections"
          >
            Explore Projects
          </Link>
        </div>
        <div className="volOrgCon col-md-6 col-sm-6 col-xs-12">
          <br />
          <img src="img/nature2.svg" className="col-lg-12 img1" />
        </div>
      </div>

      <div className="volOrgCon2 col-md-12 col-sm-12 col-xs-12">
        <div>
          <h4>🔷 We will will help you to meet the extra ordinary People 🔷</h4>
        </div>
      </div>

      <div className="section1">
        <div className="col-md-6 col-sm-6 col-xs-12">
          <img src="img/nature3.svg" className="col-lg-12 img2" />
        </div>
        <div className="volOrgCon col-md-6 col-sm-6 col-xs-12" id="htext">
          <h2>Are you an Organization?</h2>
          <hr />
          <br />
          <p>
            If <span className="text-primary">yes</span>, then join our platform
            and find the volunteers for your organization, collaborate with
            other NGOs and create events to help the needy people and to solve
            the problems that are in the way of sustainable development of our
            planet.
          </p>
          <br />

          <Link
            to={isAuthenticated ? "/dashboard" : "/loginRegister"}
            className="btn-sections"
          >
            Post Requirements
          </Link>
          <br />
          <br />

          {/* <h4>
            We are currently working with <span onClick={handleTwo}>2</span>{" "}
            talented Experts.{" "}

          </h4> */}
          <br />
          {/* <div className={name ? "name" : "name2"}>
            <p className="nam1">
              <a href="https://github.com/hardikk2002">Hardik Kaushik</a>
            </p>
            <p className="nam2">
              <a href="https://github.com/RamanSharma100">Raman Sharma</a>
            </p>
          </div> */}
        </div>
        <br />
      </div>
    </div>
  );
}

export default VolOrg;
