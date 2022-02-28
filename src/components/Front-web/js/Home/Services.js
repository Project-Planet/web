import React from "react";
import "../../css/Services.css";
import OpacityIcon from "@material-ui/icons/Opacity";
import ExposureZeroIcon from "@material-ui/icons/ExposureZero";
import CallToActionIcon from "@material-ui/icons/CallToAction";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      <div
        id="services"
        style={{
          backgroundImage: "url(/img/nature6.svg)",
          backgroundRepeat: "no-repeat",
          width: "100%",
          position: "relative",
          top: "10%",
        }}
      >
        <div className="container">
          <div className="section-header" id="htext">
            <h2>Sectors on which we Work!</h2>
            <p>
              These are some sectors which are in our first priority, so that we
              can help NGOs and volunteers to solve the problems in these
              sectors. We chose these sectors because these sectors are the
              major part of our planet to make our planet sustainable.
            </p>
          </div>

          <div className="row">
            {/* <div className="col-container"> */}
              <div className="col-lg-6 col-sm-12">
                <div className="box">
                  <div className="icon">
                    <OpacityIcon />
                  </div>
                  <h4 className="title">
                    <a
                      href="https://www.un.org/sustainabledevelopment/wp-content/uploads/2017/03/3_Why-It-Matters-2020.pdf"
                      target="_blank"
                    >
                      Clean Water & Sanitation
                    </a>
                  </h4>
                  <p className="description">
                    We provide the support to NGOs or volunteers who work in
                    this area because if our water is clean...
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-sm-12">
                <div className="box">
                  <div className="icon">
                    <ExposureZeroIcon />
                  </div>
                  <h4 className="title">
                    <a
                      href="https://www.un.org/sustainabledevelopment/wp-content/uploads/2016/08/1_Why-It-Matters-2020.pdf"
                      target="_blank"
                    >
                      Zero Hunger & no Poverty
                    </a>
                  </h4>
                  <p className="description">
                    We provide the support to NGOs or volunteers who work in
                    this area because there are many countries...
                  </p>
                </div>
              </div>
            {/* </div> */}

            {/* <div className="col-container"> */}
              <div className="col-lg-6 col-sm-12">
                <div className="box">
                  <div className="icon">
                    <CallToActionIcon />
                  </div>
                  <h4 className="title">
                    <a
                      href="https://www.un.org/sustainabledevelopment/wp-content/uploads/2016/08/1_Why-It-Matters-2020.pdf"
                      target="_blank"
                    >
                      Climate Action
                    </a>
                  </h4>
                  <p className="description">
                    We provide the support to NGOs or volunteers who work in
                    this area because the climate action...
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-sm-12">
                <div className="box">
                  <div className="icon">
                    <LocationCityIcon />
                  </div>
                  <h4 className="title">
                    <a
                      href="https://www.un.org/sustainabledevelopment/wp-content/uploads/2016/08/1_Why-It-Matters-2020.pdf"
                      target="_blank"
                    >
                      Sustainable Cities
                    </a>
                  </h4>
                  <p className="description">
                    We provide the support to NGOs or volunteers who work in
                    this area because it is also a big problem...
                  </p>
                </div>
              </div>


            {/* </div> */}
            <Link to="/service" className="btn-aboutus scrollto mx-auto">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
