import React, { useState } from "react";
import "./css/Footer.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { Link } from "react-router-dom";
import keys from "../APIS/fetchWeather";

const api = {
  key: keys.API_KEY,
  base: keys.BASE_URL,
};

function Footer() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery("");
          setWeather(result);
          console.log(result);
        });
    }
  };

  return (
    <div>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div id="logo" className="">
                    <h1>
                      <Link to="/">
                        plan<span>et</span>.
                      </Link>
                    </h1>
                  </div>
                  <div className="footer-text">
                    <p>
                      Project Planet is an initiative to make the Earth a better
                      place to live. It is a platform where Organisations can
                      post their requirements and find collaborators for their
                      requirements.
                    </p>
                  </div>
                  <div className="footer-social-icon footer-widget-heading">
                    <h3>Follow us</h3>
                    <a href="#" target="_blank" rel="noreferrer">
                      <i>
                        <GitHubIcon />
                      </i>
                    </a>

                    <a href="#" target="_blank" rel="noreferrer">
                      <i>
                        <YouTubeIcon />
                      </i>
                    </a>

                    <a href="#">
                      <i>
                        <LinkedInIcon style={{ color: "lightgrey" }} />
                      </i>
                    </a>

                    <a href="#">
                      <i>
                        <TwitterIcon style={{ color: "lightgrey" }} />
                      </i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>

                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>

                    <li>
                      <Link to="/About">About</Link>
                    </li>

                    <li>
                      <Link to="/Service">Services</Link>
                    </li>
                    <li>
                      <Link to="/volunteer">Volunteer</Link>
                    </li>
                    <li>
                      <Link to="/Organisation">Organisation</Link>
                    </li>
                    <li>
                      <Link to="/Organisation">NGOs</Link>
                    </li>

                    {/* <li>
                      <a href="#">Hardik Kaushik</a>
                    </li>
                    <li>
                      <a href="#">Raman Sharma</a>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Check Temperature</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p>Lets see the wheather at your Place!</p>
                  </div>
                  <div className="subscribe-form">
                    <form action="#">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="search-bar"
                        onChange={(e) => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={search}
                      />
                    </form>

                    <div className="text-center">
                      <main>
                        {typeof weather.main != "undefined" ? (
                          <div>
                            <div className="weather-container">
                              <div className="temperature">
                                <div className="cityName">
                                  {" "}
                                  {weather.name}, {weather.sys.country}
                                </div>
                                {Math.round(weather.main.temp)}°C
                                <div className="weather">
                                  ({weather.weather[0].main})
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </main>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p>
                    Copyright &copy; {new Date().getFullYear()}, All Right
                    Reserved <a href="#">Planet</a>
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>

                    <li>
                      <Link to="/">Terms</Link>
                    </li>
                    <li>
                      <Link to="/">Privacy</Link>
                    </li>
                    <li>
                      <Link to="/">Policy</Link>
                    </li>
                    <li>
                      <a href="#contactUs">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
