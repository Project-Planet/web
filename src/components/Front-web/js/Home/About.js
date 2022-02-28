import React from "react";
import "../../css/About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 about-img">
            <img src="img/nature5.svg" alt="" />
          </div>

          <div className="col-lg-6 content" id="htext">
            <h2>Who are we and how we work?</h2>
            <h4>
              We are the group of smart people, working for the
              welfare of society , to save the environment and our planet.
            </h4>

            <ul>
              <li>🔶 We provide a platform for NGOs and Voluteers.</li>
              <li>🔶 We provide sponsers and volunteers for NGOs.</li>
              <li>
                🔶 We provide serivces to them, so they can help needy people,
                protect our planet and environment.
              </li>
              <li>
                🔶 We are providing services to the NGOs and volunteers so they
                can join , collaborate with each other and can organize events
                by posting posts.
              </li>
            </ul>

            <Link to="/about" className="btn-aboutus scrollto">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
