import React, { useEffect } from "react";
import { useSelector, shallowEqual, useDispatch, connect } from "react-redux";
import { useHistory, useParams, Link } from "react-router-dom";
import {
  getUserProfileData,
  getUserProfilePosts,
} from "../../../../redux/actionCreaters";
import { toast } from "react-toastify";

import "./userProfile.css";

import LaunchIcon from "@material-ui/icons/Launch";
import PostAddIcon from "@material-ui/icons/PostAdd";
import SettingsIcon from "@material-ui/icons/Settings";
import EditIcon from "@material-ui/icons/Edit";
import TelegramIcon from "@material-ui/icons/Telegram";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Email, Message, PersonAdd } from "@material-ui/icons";

import MyPostCard from "./MyPostCard";
import fire from "../../../APIS/firebase";
import { useCollection } from "react-firebase-hooks/firestore";

const UserProfile = ({ userData }) => {
  const history = useHistory();

  const { userProfileData, userProfileLoading, userProfilePosts, userId } =
    useSelector(
      (state) => ({
        userProfileData: state.userProfile.userProfileData,
        userProfileLoading: state.userProfile.userProfileLoading,
        userProfilePosts: state.userProfile.userProfilePosts,
        userId: state.auth.userId,
      }),
      shallowEqual
    );
  let totalLikes = 0,
    events = 0;
  userProfilePosts.length > 0 &&
    userProfilePosts.forEach((pst) => (totalLikes += pst.postData.likes));
  userProfilePosts.length > 0 &&
    userProfilePosts.forEach(
      (pst) => pst.postData.category === "event" && (events = events + 1)
    );

  const dispatch = useDispatch();

  const { id, name } = useParams();

  useEffect(() => {
    dispatch(getUserProfileData(id));
    dispatch(getUserProfilePosts(id));

    return () => {
      if (userProfileData?.data.uid !== userId) {
        dispatch({ type: "RESET_USER_PROFILE" });
      }
    };
  }, [dispatch]);

  const requests = [1, 2, 3];
  console.log(userData.uid);
  const userChatRef = fire
    .firestore()
    .collection("chats")
    .where("users", "array-contains", userData.uid);

  const [chatsSnapshot] = useCollection(userChatRef);
  // const chatExists = () =>
  // !!chatsSnapshot.docs?.get().find(
  //   (chat) =>
  //     chat.data().users.find((user) => user === )?.length > 0
  // ); // NOT WORKING

  const createChat = () => {
    fire
      .firestore()
      .collection("chats")
      .where("users", "array-contains", userData.uid)
      .get()
      .then(async (snapshot) => {
        if (snapshot.empty) {
          fire
            .firestore()
            .collection("chats")
            .add({
              users: [userData.uid, userProfileData.data.uid],
            });

          history.push("/chat");
        } else {
          let currentDoc;
          snapshot.docs.forEach((doc) => {
            if (doc.data().users.includes(userProfileData.data.uid)) {
              currentDoc = doc;
            }
          });
          if (currentDoc) {
            history.push(`/chat/${currentDoc.id}`);
          } else {
            fire
              .firestore()
              .collection("chats")
              .add({
                users: [userData.uid, userProfileData.data.uid],
              });
            history.push("/chat");
          }
        }
      });

    // if(!chatExists){
    //   console.log("working fine")
    // }
    // console.log(chatsSnapshot);
  };

  return (
    <div className="UserDashboard" style={{ overflow: "hidden" }}>
      <div
        className="container-fluid"
        style={{
          backgroundColor: "hsl(0, 0%, 100%)",
        }}
      >
        <div className="row">
          {userProfileLoading ? (
            <h1 className="text-center mx-auto py-5">Profile Loading</h1>
          ) : (
            <>
              <div
                className="col-md-3 p-0 col-sm-12"
                style={{
                  boxShadow: "0px 3px 7px rgba(37, 115, 126, 0.3)",
                }}
              >
                <div
                  className="infoHeader d-flex flex-row "
                  style={{
                    justifyContent: "space-between",
                    padding: "10% 10% 3% 10%",
                  }}
                >
                  {userProfileData.data.profilePic ? (
                    <img
                      src={userProfileData.data.profilePic}
                      alt="Profile"
                      style={{
                        borderRadius: "50%",
                        width: "100px",
                        height: "100px",
                        marginLeft: "7%",
                      }}
                    />
                  ) : (
                    <p
                      className="border mx-auto d-flex align-items-center justify-content-center"
                      style={{
                        borderRadius: "50%",
                        width: "100px",
                        height: "100px",
                      }}
                    >
                      {!userProfileData.data.ngo
                        ? userProfileData.data.firstName
                          ? userProfileData.data.firstName.charAt(0) +
                            userProfileData.data.secondName.charAt(0)
                          : "Vol"
                        : userProfileData.data.organizationName
                        ? userProfileData.data.organizationName
                            .split(" ")[0]
                            .charAt(0) +
                          userProfileData.data.organizationName
                            .split(" ")[1]
                            .charAt(0)
                        : "Org"}
                    </p>
                  )}
                  <div className="headerContent ml-4 my-auto">
                    <h3>
                      {!userProfileData.data.ngo
                        ? userProfileData.data.firstName
                          ? userProfileData.data.firstName +
                            " " +
                            userProfileData.data.secondName
                          : "Un Named"
                        : userProfileData.data.organizationName
                        ? userProfileData.data.organizationName
                        : "Un Named"}
                    </h3>

                    <p>{userProfileData.data.joinedAs}</p>
                    {userProfileData.data.uid === userId ? (
                      <h6 style={{ cursor: "pointer" }}>
                        <Link
                          to="/dashboard/profile/edit"
                          className="text-dark"
                        >
                          <EditIcon />
                        </Link>
                      </h6>
                    ) : null}
                  </div>
                </div>

                <div
                  className="userDetail"
                  style={{
                    padding: "5% 10% 3% 10%",
                    // height: "25vh",
                    marginTop: "-15px",
                  }}
                >
                  <div className="userContent">
                    <h4>
                      {" "}
                      <span>
                        {" "}
                        To become a volunteer with us, you will need to sign up
                        with us. Once you sign up and fill in your details, you
                        can collaborate with NGOs, you can select a project of
                        your choice by browsing posts.
                      </span>
                    </h4>

                    <div
                      className="row text-center py-4"
                      style={{
                        backgroundColor: "hsla(228, 100%, 97%, 0.87)",
                        borderRadius: "12px",
                        margin: "7% auto",
                        justifyContent: "space-around",
                      }}
                    >
                      <div className="">
                        <h4>Posts</h4>
                        <span>{userProfilePosts.length} </span>
                      </div>
                      <div className="">
                        <h4>Likes</h4>
                        <span>{totalLikes} </span>
                      </div>
                      <div className="">
                        <h4>Events</h4>
                        <span>{events} </span>
                      </div>
                    </div>
                  </div>
                  <ul className="menu">
                    {userProfileData.data.uid === userId ? (
                      <>
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
                          onClick={() =>
                            toast.info(
                              "This feature will come in upcoming updates!"
                            )
                          }
                        >
                          <span className="menu__icon">
                            <SettingsIcon />
                          </span>
                          Settings
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="menu__item">
                          <span className="menu__icon">
                            <Email />
                          </span>
                          <a
                            href={`mailto:${userProfileData.data.email}`}
                            style={{ textDecoration: "none", color: "#5995fd" }}
                          >
                            Send E-Mail
                          </a>
                        </li>
                        <li className="menu__item" onClick={createChat}>
                          <span className="menu__icon">
                            <Message />
                          </span>
                          Start Chat
                        </li>
                        <li
                          className="menu__item"
                          onClick={() =>
                            toast.info(
                              "This feature will come in upcoming updates!"
                            )
                          }
                        >
                          <span className="menu__icon">
                            <PersonAdd />
                          </span>
                          Send Request
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>

              <div
                className="col-md-7 postsCon"
                style={{
                  height: "90vh",
                  overflow: "auto",
                  padding: "2% 5% 5% 5%",
                }}
              >
                <div
                  className="postsContainer pb-5"
                  style={{
                    borderRadius: "21px",
                    color: "#eef6f8",
                    backgroundColor: "hsla(165, 40%, 98%, 0.582)",
                    padding: "10px 5%",
                    boxShadow: "0px 0px 6px rgba(37, 115, 126, 0.3)",
                  }}
                >
                  <h4>About Me</h4>
                  <span>
                    {userProfileData.data.about
                      ? userProfileData.data.about
                      : "Not Assigned"}
                  </span>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <h4>
                        Email: <span> {userProfileData.data.email}</span>
                      </h4>
                      <h4>
                        Location:{" "}
                        <span>
                          {userProfileData.data.state
                            ? userProfileData.data.state
                            : null}
                          {userProfileData.data.state ? " , " : null}
                          {userProfileData.data.country
                            ? userProfileData.data.country
                            : "Not Assigned"}
                        </span>{" "}
                      </h4>
                    </div>
                    <div className="col-md-6 mt-1">
                      <h4>
                        Contact:{" "}
                        <span>
                          {userProfileData.data.phoneNumber
                            ? userProfileData.data.phoneNumber
                            : "Not Assigned"}
                        </span>{" "}
                      </h4>
                      <h4>
                        Skills:{" "}
                        <span>
                          {userProfileData.data.skills
                            ? userProfileData.data.skills
                            : "Not Assigned"}
                        </span>{" "}
                      </h4>
                    </div>
                  </div>
                  <h4>Find Me at</h4>
                  <span>
                    <FacebookIcon /> <InstagramIcon /> <TwitterIcon />{" "}
                    <LinkedInIcon />
                  </span>
                </div>
                <h3 className="col-md-12 text-center py-5">
                  {userProfileData.data.uid === userId
                    ? "My Posts"
                    : "Recent 3 Uploaded Posts"}
                </h3>
                {userProfilePosts.length > 0 ? (
                  userProfilePosts
                    .slice(0, 3)
                    .map((pst, id) => (
                      <MyPostCard
                        post={pst}
                        userProfileData={userProfileData}
                        id={id}
                        userId={userId}
                      />
                    ))
                ) : (
                  <h1>Loading Posts</h1>
                )}
                {userProfileData.data.uid === userId && (
                  <Link
                    to="/dashboard/myPosts"
                    className="btn userProBtn2 my-3"
                    style={{
                      padding: " 12px 28px",
                      fontSize: "16px",
                    }}
                  >
                    All Posts
                  </Link>
                )}
              </div>

              <div
                className="col-md-2 hide-m"
                style={{
                  boxShadow: "0px -2px 7px rgba(37, 115, 126, 0.3)",
                }}
              >
                {/* Dummy Content=================== */}
                <div
                  className="requestNames my-3"
                  key={id}
                  style={{
                    padding: "20px",
                  }}
                >
                  <div className="requestedPeople d-flex ">
                    <img
                      src="/img/event/breachthebeach.jpg"
                      alt="Barry"
                      style={{
                        borderRadius: "50%",
                        width: "60px",
                        height: "60px",
                      }}
                    />
                    <div className="requestContent m-auto">
                      <h4 className="m-0">Barry Allen</h4>
                      <span>Volunteer</span>
                    </div>
                  </div>
                  <button className="ml-1 mt-2 userProBtn2">Accept</button>
                  <button className="ml-3 mt-2 userProBtn1">Decline</button>
                </div>

                <div
                  className="requestNames my-3"
                  key={id}
                  style={{
                    padding: "20px",
                  }}
                >
                  <div className="requestedPeople d-flex ">
                    <img
                      src="/img/event/cityclean.jpg"
                      alt="Rohan"
                      style={{
                        borderRadius: "50%",
                        width: "60px",
                        height: "60px",
                      }}
                    />
                    <div className="requestContent m-auto">
                      <h4 className="m-0">Rohan Jain</h4>
                      <span>NGO</span>
                    </div>
                  </div>
                  <button className="ml-1 mt-2 userProBtn2">Accept</button>
                  <button className="ml-3 mt-2 userProBtn1">Decline</button>
                </div>

                <div
                  className="requestNames my-3"
                  key={id}
                  style={{
                    padding: "20px",
                  }}
                >
                  <div className="requestedPeople d-flex ">
                    <img
                      src="/img/event/foodforpoor.jpeg"
                      alt="John"
                      style={{
                        borderRadius: "50%",
                        width: "60px",
                        height: "60px",
                      }}
                    />
                    <div className="requestContent m-auto">
                      <h4 className="m-0">John Cena</h4>
                      <span>Volunteer</span>
                    </div>
                  </div>
                  <button className="ml-1 mt-2 userProBtn2">Accept</button>
                  <button className="ml-3 mt-2 userProBtn1">Decline</button>
                </div>
                {/* Dummy Content=================== */}

                <div
                  className="feedbackCon text-center"
                  style={{
                    position: "absolute",
                    bottom: "6%",
                  }}
                >
                  <h4>Feedback and Suggestions</h4>
                  <span>We would really appreciate suggestions.</span>
                  <br />
                  <a
                    className="userProBtn1 mt-2"
                    href="https://docs.google.com/forms/d/e/1FAIpQLScl0N3gb1ISqoFRb48ukNfAA4BPTRlFzvDSpFtlXQq1E4eRXA/viewform?usp=sf_link"
                    target="_blank"
                    style={
                      {
                        // padding: "10px 25px",
                      }
                    }
                  >
                    {" "}
                    Feedback <TelegramIcon />{" "}
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userData: state.userDetail.userDetails,
});

export default connect(mapStateToProps, null)(UserProfile);
