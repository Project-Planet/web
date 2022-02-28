import React from "react";
import { Link, useHistory } from "react-router-dom";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ChatIcon from "@material-ui/icons/Chat";

import { toast } from "react-toastify";

import "../../Styles/NavbarDashboard.css";

const NavbarDashboard = ({ logoutUser }) => {
  const history = useHistory();
  return (
    <div className="col-md-12 bg-white border-bottom">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div id="logo" className="leftContainer">
          <h1>
            <Link to="/dashboard" className="ml-5" style={{ fontSize: "2rem" }}>
              Dash<span>board</span>.
            </Link>
          </h1>
        </div>

        <div className="col-md-6 ml-auto">
          <form>
            <div className="input-field input-search">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Search here..." />
            </div>
          </form>
        </div>

        <div className="d-flex ml-auto mr-3">
          <OverlayTrigger
            placement="left"
            overlay={
              <Tooltip>
                <strong>Open chats</strong>
              </Tooltip>
            }
          >
            <ChatIcon
              style={{
                margin: "auto 10px",
                color: "#5995fd",
                cursor: "pointer",
                transform: "scale(1)",
              }}
              onClick={() => history.push("/chat")}
            />
          </OverlayTrigger>

          <OverlayTrigger
            placement="left"
            overlay={
              <Tooltip>
                <strong>Notifications</strong>
              </Tooltip>
            }
          >
            <NotificationsIcon
              style={{
                margin: "auto 10px",
                color: "#5995fd",
                cursor: "pointer",
                transform: "scale(1.1)",
              }}
              onClick={() =>
                toast.info("This feature will come in upcoming updates!")
              }
            />
          </OverlayTrigger>

          <OverlayTrigger
            placement="left"
            overlay={
              <Tooltip>
                <strong>Home Page</strong>
              </Tooltip>
            }
          >
            <HomeIcon
              onClick={() => history.push("/")}
              style={{
                margin: "auto 10px",
                color: "#5995fd",
                cursor: "pointer",
                transform: "scale(1.1)",
              }}
            />
          </OverlayTrigger>
          <OverlayTrigger
            placement="left"
            overlay={
              <Tooltip>
                <strong>Logout</strong>
              </Tooltip>
            }
          >
            <ExitToAppIcon
              onClick={logoutUser}
              style={{
                margin: "auto 10px",
                color: "#5995fd",
                cursor: "pointer",
                transform: "scale(1.1)",
              }}
            />
          </OverlayTrigger>
        </div>
      </nav>
    </div>
  );
};

export default NavbarDashboard;
