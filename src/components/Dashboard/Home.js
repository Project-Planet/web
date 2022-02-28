import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import ShowPosts from "../ShowPosts";
import PlusSignButton from "./components/PlusSignButton";
import ProfileLook from "./components/ProfileLook";
import Users from "./components/Users";

import LaunchIcon from "@material-ui/icons/Launch";
import PostAddIcon from "@material-ui/icons/PostAdd";
import SettingsIcon from "@material-ui/icons/Settings";
import { PersonAdd } from "@material-ui/icons";

import "./dashboard.css";

import { toast } from "react-toastify";


const Home = ({ userId, userData, isLoading }) => {

  const history = useHistory();

  return (
    <>
      {/* <PlusSignButton /> */}
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-3 px-4"
            style={{
              boxShadow: "0px 3px 7px rgba(37, 115, 126, 0.3)",
              backgroundColor: "hsl(0, 0%, 100%)",
            }}
          >
            <ProfileLook userData={userData} isLoading={isLoading} />

            <div className="mx-auto text-center mb-3">
              <h4
                style={{
                  fontWeight: "500",
                  fontFamily: "Rubik, sans-serif",
                  fontSize: "1.4rem",
                  margin: "3% 10% 0 10%",
                }}
              >
                Quote of the Day
              </h4>
              <hr
                style={{
                  border: "none",
                  borderTop: "5px solid #ff9900",
                  borderRadius: "30%",
                  width: "25%",
                  margin: "2% auto",
                }}
              />
            </div>

            <div
              className="quotesDash"
              style={{
                padding: "4% 10%",
                backgroundColor: "hsla(228, 100%, 97%, 0.87)",
                borderRadius: "12px",
              }}
            >
              <h4
                style={{
                  color: "#8b8b8bea",
                  fontWeight: "500",
                  fontFamily: "Rubik, sans-serif",
                  fontSize: "1rem",
                }}
              >
                “Community service gives me a valuable opportunity to walk into
                a different community that is less familiar to me but just as
                colorful and most importantly, in need.”
              </h4>
            </div>

            <ul className="menu mt-3">
              <li
                className="menu__item"
                onClick={() => history.push("/dashboard/addPost")}
              >
                <span className="menu__icon">
                  <PostAddIcon />
                </span>
                Add Post
              </li>
              <li
                className="menu__item"
                onClick={() => history.push("/dashboard/myPosts")}
              >
                <span className="menu__icon">
                  <LaunchIcon />
                </span>
                My Posts
              </li>

              <li
                className="menu__item"
                onClick={() => history.push("/dashboard/profile/edit")}
              >
                <span className="menu__icon">
                  <PersonAdd />
                </span>
                Update Profile
              </li>
              <li
                className="menu__item"
                onClick={() =>
                  toast.info("This feature will come in upcoming updates!")
                }
              >
                <span className="menu__icon">
                  <SettingsIcon />
                </span>
                Settings
              </li>
            </ul>
          </div>

          <div
            className="col-md-6 postsContainer"
            style={{
              height: "90vh",
              overflow: "auto",
              padding: "2% 5% 5% 5%",
            }}
          >
            <div
              className="col-md-12 mb-3 border py-2"
              style={{
                borderRadius: "8px",
                backgroundColor: "#ffff",
                boxShadow: "0px 0px 2px rgba(37, 115, 126, 0.3)",
              }}
            >
              <div className="profile">
                <div
                  className="profile-pic mu-3 ml-3"
                  style={{ overflow: "hidden" }}
                >
                  {!isLoading ? (
                    userData.profilePic ? (
                      <img
                        src={userData.profilePic}
                        style={{
                          position: "relative",
                          height: "100%",
                          width: "100%",
                        }}
                        alt={"profile"}
                      />
                    ) : !userData.ngo ? (
                      <p>
                        {userData.firstName
                          ? userData.firstName.charAt(0) +
                            userData.secondName.charAt(0)
                          : "UN"}
                      </p>
                    ) : (
                      <p>
                        {userData.organizationName
                          ? userData.organizationName
                          : "Un Named"}
                      </p>
                    )
                  ) : (
                    "Loading"
                  )}
                </div>

                <div className="info ml-2">
                  <p className="font-weight-bold">
                    {!isLoading
                      ? !userData.ngo
                        ? userData.firstName
                          ? userData.firstName + " " + userData.secondName
                          : "Un Named"
                        : userData.organizationName
                        ? userData.organizationName
                        : "Un Named"
                      : "loading..."}
                  </p>
                </div>
              </div>
              <div
                className="col-md-12 mx-auto mb-4"
                onClick={() => history.push("/dashboard/addPost")}
                style={{ cursor: "pointer" }}
              >
                <div
                  className="input-field"
                  style={{ maxWidth: "100%", borderRadius: "5px " }}
                  onClick={() => history.push("/dashboard/addPost")}
                >
                  <i className="fas fa-plus-circle"></i>
                  <input
                    type="button"
                    className="text-left"
                    value="Write Post..."
                  />
                </div>
              </div>
            </div>
            <ShowPosts userId={userId} />
          </div>

          <div
            className="col-md-3 postsContainer py-4 px-4 hide-m"
            style={{
              height: "90vh",
              overflow: "auto",
            }}
          >
            {/* Dummy INFO======== */}
            <Users
              img={
                "https://media.istockphoto.com/photos/the-concept-of-unity-cooperation-teamwork-and-charity-picture-id1290692045?b=1&k=20&m=1290692045&s=170667a&w=0&h=mjKRZccVf2DDaVN83LFmpunPjuBNrCO3kuetFCPm45g="
              }
              name="Lorem Ipsum"
              profile={null}
              designation="ngo"
              style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
            />
            <Users
              img={
                "https://media.istockphoto.com/photos/global-culture-picture-id1278525359?b=1&k=20&m=1278525359&s=170667a&w=0&h=-YF9ut3C7_eFlaw6qfqIkgH03YRq_seh18o4zxSZEZ8="
              }
              name="Lorem Ipsum"
              profile={null}
              designation="ngo"
              style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
            />
            <Users
              img={
                "https://media.istockphoto.com/photos/shot-of-an-unrecognisable-teenager-picking-up-litter-off-a-field-at-picture-id1326024656?b=1&k=20&m=1326024656&s=170667a&w=0&h=6ZeoEq_OYHd2aGCOwAHMFQwUvAgcrSOVERojh_1QKvs="
              }
              name="Lorem Ipsum"
              profile={null}
              designation="ngo"
              style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
            />

            <Users
              img={
                "https://images.unsplash.com/photo-1448518340475-e3c680e9b4be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
              }
              name="Lorem Ipsum"
              profile={null}
              designation="ngo"
              style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
            />

            {/* Dummy INFO======== */}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.userDetail.isLoading,
  userData: state.userDetail.userDetails,
  userId: state.auth.userId,
});

export default connect(mapStateToProps, null)(Home);
