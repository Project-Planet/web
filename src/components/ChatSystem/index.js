import React, { useEffect } from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router";
import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import ChatScreen from "./ChatScreen/ChatScreen";
import "./indexStyles.css";

const ChatPage = () => {
  const { path } = useRouteMatch();
  return (
    <div className="Index__Container">
      <Sidebar />

      <div className="Index__ChatContainer">
        <Switch>
          <Route
            exact
            path={`${path}/:id`}
            component={() => <ChatScreen />}
          />
        </Switch>
      </div>
    </div>
  );
};

export default ChatPage;