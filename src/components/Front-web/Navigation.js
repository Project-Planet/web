import React from "react";
import { FaAlignJustify } from "react-icons/fa";
import "./css/Navigation.css";
import { NavLink, Link, useHistory } from "react-router-dom";

function Navigation({ isAuthenticated, logoutUser }) {
  const [toggle, setToggle] = React.useState(true);

  const history = useHistory();

  return (
      <div className="navBar">
        <div className="navContainer">
          <div id="logo" className="leftContainer">
            <h1>
              <Link to="/">
                plan<span>et</span>.
              </Link>
            </h1>
          </div>
          <div className="rightContainer">
            {toggle ? (
              <div className="rightContainer1">
                <div className="navItems">
                  <NavLink to="/" activeClassName={"activeItem"} exact>Home</NavLink>
                  <NavLink to="/About" activeClassName={"activeItem"} exact>About</NavLink>
                  <NavLink to="/Service" activeClassName={"activeItem"} exact>Services</NavLink>
                  <NavLink to="/volunteer" activeClassName={"activeItem"} exact>Volunteer</NavLink>
                  <NavLink to="/Organisation" activeClassName={"activeItem"} exact>Organisation</NavLink>
                  {isAuthenticated ? (
                    <>
                      <button
                        className="btn btn-dash mx-1"
                        onClick={() => history.push("/dashboard")}
                      >
                        Dashboard
                      </button>
                      <button className="btn btn-log" onClick={logoutUser}>
                        Logout
                      </button>
                    </>
                  ) : (
                      <button
                        className="rbutton"
                        onClick={() => history.push("/loginRegister")}
                      >
                        Login
                      </button>
                    )}
                </div>
              </div>
            ) : (
                <div className="rightContainer2">
                  <div className="navItems">
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Service">Services</Link>
                    <Link to="/volunteer">Volunteer</Link>
                    <Link to="/Organisation">Organisation</Link>
                    {isAuthenticated ? (
                      <>
                        <button
                          className="btn btn-dash mx-1"
                          onClick={() => history.push("/dashboard")}
                        >
                          Dashboard
                      </button>
                        <button className="btn btn-log" onClick={logoutUser}>
                          Logout
                      </button>
                      </>
                    ) : (
                        <button
                          className="rbutton"
                          onClick={() => history.push("/loginRegister")}
                        >
                          Login
                        </button>
                      )}
                  </div>
                </div>
              )}
          </div>
          <div className="toggle" onClick={() => setToggle(!toggle)}>
            <FaAlignJustify />
          </div>
        </div>
      </div>
  );
}

export default Navigation;
