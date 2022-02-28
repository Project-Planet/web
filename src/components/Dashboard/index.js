import React, { useEffect } from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router";
import { connect } from "react-redux";
import NavbarDashboard from "./components/NavbarDashboard";
import Home from "./Home";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import EditProfile from "./Edit Profile";
import Profile from "./Profile/index";
import AddPost from "./AddPost";
import MyPosts from "./myPosts";
import EditPost from "./EditPost/EditPost";
import { getPosts, getUserDetails } from "../../redux/actionCreaters";
import SeePost from "./SeePost";
import UserProfile from "./Profile/UserProfile/UserProfile";
import fire from "../APIS/firebase";

const Dashboard = ({
  logoutUser,
  isAuthenticated,
  set_auth,
  set_userId,
  set_user,
  getPosts,
  reset_userDetails,
}) => {
  const history = useHistory();
  useEffect(() => {
    if (!isAuthenticated) {
      return history.push("/loginRegister");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        set_auth(true);
        set_userId(user.uid);
        set_user(user);
        getUserDetails(user.uid);
        // getPosts();
      }
    });
  }, []);
  const { path } = useRouteMatch();
  return (
    <div className="dashboard">
      <NavbarDashboard logoutUser={logoutUser} />
      <Switch>
        <Route exact path={`${path}/`} component={() => <Home />} />
        <Route exact path={`${path}/profile`} component={() => <Profile />} />
        <Route
          exact
          path={`${path}/profile/:id/:name`}
          component={() => <UserProfile />}
        />
        <Route
          exact
          path={`${path}/profile/edit`}
          component={() => <EditProfile />}
        />
        <Route exact path={`${path}/addPost`} component={() => <AddPost />} />
        <Route exact path={`${path}/myPosts`} component={() => <MyPosts />} />
        <Route
          exact
          path={`${path}/myPosts/:id/edit`}
          component={() => <EditPost />}
        />
        <Route
          exact
          path={`${path}/:userName/:postTitle`}
          component={(props) => <SeePost {...props} />}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isLogined,
    user_details: state.auth.userDetails,
    userId: state.auth.userId,
    postsLoading: state.posts.postsLoading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    set_user_detail: (userId) => {
      dispatch({ type: "SET_USER_DETAILS", payload: userId });
    },
    getPosts: () => {
      dispatch(getPosts());
    },
    getUserDetails: (userId) => {
      dispatch(getUserDetails(userId));
    },
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
    reset_posts: () => {
      dispatch({ type: "RESET_POSTS", payload: [] });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
