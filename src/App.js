import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Switch, Route, useHistory } from "react-router-dom";

import "./App.css";
import fire from "./components/APIS/firebase";
import LogReg from "./components/LoginSystem/LogReg";
import Dashboard from "./components/Dashboard";
import Front_web from "./components/Front-web";
import Volunteer from "./components/Front-web/Volunteer";
import { connect } from "react-redux";
import About from "./components/Front-web/About";
import { getPosts, getUserDetails } from "./redux/actionCreaters";
import Organisation from "./components/Front-web/Organisation";
import Service from "./components/Front-web/Service";
import ChatPage from "./components/ChatSystem";

const App = ({
  isLogined,
  set_auth,
  set_userId,
  set_user,
  reset_userDetails,
  getUserDetails,
  getPosts,
  reset_posts,
  allPosts,
}) => {
  const history = useHistory();

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        set_auth(true);
        set_userId(user.uid);
        set_user(user);
        getUserDetails(user.uid);
        getPosts();
      }
    });
  }, []);
  const loginUser = ({ email, password }) => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (user) => {
        set_auth(true);
        set_userId(user.uid);
        set_user(user);
        await getUserDetails(user.uid);
        await getPosts();
        toast.success("You are Logged In successfully!!");
        history.push("/dashboard");
      })
      .catch((err) => {
        if (err.code === "auth/user-not-found") {
          return toast.error("Invalid email and password");
        }
        if (err.code === "auth/wrong-password") {
          return toast.error("Invalid email and password");
        }
      });
  };

  const registerUser = ({ email, password, joinAs }) => {
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (user) => {
        if (joinAs === "organization") {
          // const ngo = await NgoProfileModel(joinAs, user.user.id, email);
          // const volunteer = await VolunteerProfileModel(
          //   joinAs,
          //   user.user.id,
          //   email
          // );
          fire
            .firestore()
            .collection("users")
            .add({
              address: null,
              city: null,
              country: null,
              daysForWork: [],
              email: email,
              organizationName: null,
              joinedAs: joinAs,
              landline: null,
              ngo: joinAs === "organization",
              ngoType: `/ngos/${user.user.uid}`,
              phoneNumber: null,
              zipcode: null,
              state: null,
              uid: user.user.uid,
              profilePic: null,
              likedPosts: [],
              requests: [],
              chats: [],
            })
            .then((users) => {
              fire.firestore().collection("ngos").add({
                head: null,
                chairman: null,
                joined: Date.now(),
                ngoProfileId: user.user.uid,
                posts: [],
                updatee: Date.now(),
                vounteers: [],
              });
            });
        } else {
          // const volunteer = await VolunteerProfileModel(
          //   joinAs,
          //   user.user.id,
          //   email
          // );
          fire
            .firestore()
            .collection("users")
            .add({
              address: null,
              city: null,
              country: null,
              daysForWork: [],
              email: email,
              firstName: null,
              joinedAs: joinAs,
              landline: null,
              ngo: joinAs === "organization",
              ngoType: null,
              phoneNumber: null,
              zipcode: null,
              secondName: null,
              state: null,
              uid: user.user.uid,
              profilePic: null,
              likedPosts: [],
              requests: [],
              chats: [],
            });
        }
        set_auth(true);
        set_userId(user.uid);
        set_user(user);
        getUserDetails(user.uid);
        getPosts();
        toast.success("You are registered successfully!!");
        history.push("/dashboard/profile/edit");
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
          return toast.error("This email is already registered!");
        }
      });
  };

  const logoutUser = () => {
    fire
      .auth()
      .signOut()
      .then((user) => {
        set_auth(false);
        set_userId(null);
        set_user(null);
        reset_userDetails();
        reset_posts();
        toast.success("you are logged out successfully!!");
        history.push("/loginRegister");
      });
  };

  return (
    <div className="App">
      <ToastContainer position="bottom-left" />
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Front_web logoutUser={logoutUser} />}
        />

        <Route
          exact
          path="/About"
          component={() => (
            <About isAuthenticated={isLogined} logoutUser={logoutUser} />
          )}
        />

        <Route
          exact
          path="/Service"
          component={() => (
            <Service isAuthenticated={isLogined} logoutUser={logoutUser} />
          )}
        />

        <Route
          exact
          path="/volunteer"
          component={() => (
            <Volunteer isAuthenticated={isLogined} logoutUser={logoutUser} />
          )}
        />

        <Route
          exact
          path="/Organisation"
          component={() => (
            <Organisation isAuthenticated={isLogined} logoutUser={logoutUser} />
          )}
        />

        <Route
          path="/dashboard"
          component={() => <Dashboard logoutUser={logoutUser} />}
        />
        <Route path="/chat" component={() => <ChatPage />} />
        <Route
          exact
          path="/loginRegister"
          component={() => (
            <LogReg loginUser={loginUser} registerUser={registerUser} />
          )}
        />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    set_auth: (isLogin) => {
      dispatch({ type: "SET_AUTH", payload: isLogin });
    },
    set_user: (user) => {
      dispatch({ type: "SET_USER", payload: user });
    },
    set_userId: (userId) => {
      dispatch({ type: "SET_USERID", payload: userId });
    },
    reset_userDetails: () => {
      dispatch({ type: "RESET_USER_DETAILS", payload: true });
    },
    getPosts: () => {
      dispatch(getPosts());
    },
    getUserDetails: (userId) => {
      dispatch(getUserDetails(userId));
    },
    reset_posts: () => {
      dispatch({ type: "RESET_POSTS", payload: [] });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    isLogined: state.auth.isLogined,
    user: state.auth.user,
    allPosts: state.posts.allPosts,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
