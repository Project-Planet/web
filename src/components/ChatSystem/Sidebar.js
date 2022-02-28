import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import fire from "../APIS/firebase";
import Chat from "./Chat/Chat";
import "./SidebarStyles.css";

const Sidebar = ({ userData }) => {
  const [userChatRef, setUserChatRef] = useState(null);

  const history = useHistory();

  useEffect(() => {
    if (userData.uid) {
      let chatRef = fire
        .firestore()
        .collection("chats")
        .where("users", "array-contains", userData.uid);
      setUserChatRef(chatRef);
    }
  }, [userData]);

  const [chatsSnapshot] = useCollection(userChatRef);

  return (
    <div className="Sidebar__container">
      <div className="Sidebar__header  d-flex">
        <button
          type="button"
          className="btn px-3 rounded-0 outline-0"
          style={{
            top: "4%",
            left: "-2px",
            fontSize: "1.1rem",
          }}
          onClick={() => history.push("/dashboard")}
        >
          <i className="fas fa-angle-left"></i>
        </button>

        <Avatar className="Sidebar__userAvatar" src={userData.profilePic} />
        <div>
          <h5 className="my-0">
            {!userData.ngo ? (
              <h5 className="my-0">
                {userData.firstName
                  ? userData.firstName + userData.secondName
                  : "Un Named"}
              </h5>
            ) : (
              <h5 className="my-0">
                {userData.organizationName
                  ? userData.organizationName
                  : "Un Named"}
              </h5>
            )}
          </h5>
          <p className="lead small my-0">{userData.email}</p>
        </div>
      </div>
      {chatsSnapshot?.docs.map((chat) => (
        <Chat key={chat.id} id={chat.id} users={chat.data().users} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  userData: state.userDetail.userDetails,
});

export default connect(mapStateToProps, null)(Sidebar);
