import React from "react";

import "../css/Works.css";

function Works() {
  return (
    <>
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
          <div className="volOrgCon col-md-6 col-sm-6 col-xs-12">
            <h2>Climate Action</h2>
            <hr />
            <br />
            <p>
              <br />
              We provide the support to NGOs or volunteers who work in this area
              because the climate action is also the big problem of our planet
              for sustainable development and due to pollution and global
              warming it is changing so rapidly in recent years.
            </p>
            <br />
          </div>
          <div className="volOrgCon col-md-6 col-sm-6 col-xs-12">
            <br />
            <img src="img/aboutService/5.svg" className="col-lg-12 img1" />
          </div>
        </div>

        <div className="volOrgCon2 col-md-12 col-sm-12 col-xs-12">
          <div>
            <h4>
              🔷 Sustainable development requires human ingenuity. People are the most important resource.🔷
            </h4>
          </div>
        </div>

        <div className="section1">
          <div className="col-md-6 col-sm-6 col-xs-12">
            <img src="img/aboutService/8.svg" className="col-lg-12 img2" />
          </div>
          <div className="volOrgCon col-md-6 col-sm-6 col-xs-12">
            <h2>Zero Hunger an no Poverty</h2>
            <hr />
            <br />
            <p>
              We provide the support to NGOs or volunteers who work in this area
              because there are many countries on our planet who are developing
              countries and there are many poor people who can't affort food and
              food is only the source for energy for us and it is also a big
              problem of our planet.
            </p>
          </div>
          <br />
        </div>
      </div>

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
          <div className="volOrgCon col-md-6 col-sm-6 col-xs-12">
            <h2>Clean Water and Sanitation</h2>
            <hr />
            <br />
            <p>
              <br />
              We provide the support to NGOs or volunteers who work in this area
              because if our water is clean and we have proper sanitization so
              our planet can't lead to diseases that are due to water and with
              the proper usage of water, we can also save our planet from water
              shortage.
            </p>
            <br />
          </div>
          <div className="volOrgCon col-md-6 col-sm-6 col-xs-12">
            <br />
            <img src="img/aboutService/6.svg" className="col-lg-12 img1" alt="service" />
          </div>
        </div>

        <div className="volOrgCon2 col-md-12 col-sm-12 col-xs-12">
          <div>
            <h4>
              🔷 Population needs to be stabilised for sustainable development.🔷
            </h4>
          </div>
        </div>

        <div className="section1">
          <div className="col-md-6 col-sm-6 col-xs-12">
            <img src="img/aboutService/7.svg" className="col-lg-12 img2" alt="service" />
          </div>
          <div className="volOrgCon col-md-6 col-sm-6 col-xs-12">
            <h2>Sustainable Cities</h2>
            <hr />
            <br />
            <p>
              We provide the support to NGOs or volunteers who work in this area
              because it is also a big problem for our sustainable development
              of our planet. In our planet there are many cities or countrie
              which are so poor and they even don't have all needs in the city
              for the people. so for that we need sustainaible cities.
            </p>
          </div>
          <br />
        </div>
      </div>
    </>
  );
}

export default Works;
