import { Avatar } from "@material-ui/core";
import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { connect, useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { setChatId } from "../../../redux/actionCreaters";
import fire from "../../APIS/firebase";
import "./ChatStyles.css";

const Chat = ({ userData, id, openedChatId, users }) => {
  const history = useHistory();

  let recipientUid;
  users.forEach((user) => {
    if (user !== userData.uid) {
      recipientUid = user;
    }
  });

  const [recipientSnapshot] = useCollection(
    fire.firestore().collection("users").where("uid", "==", recipientUid)
  );

  const recipient = recipientSnapshot?.docs?.[0]?.data();
  const chatId = useSelector((state) => state.chat);
  const dispatch = useDispatch();

  const enterChat = () => {
    dispatch(setChatId(id));
    history.push(`/chat/${id}`);
  };

  return (
    <div
      className="Chat__container"
      style={{
        background:
          id === openedChatId ? "#eef6f8" : "hsla(228, 100%, 97%, 0.87)",
      }}
      onClick={enterChat}
    >
      {recipient ? (
        <Avatar className="Chat__UseAvatar" src={recipient?.profilePic} />
      ) : (
        <Avatar className="Chat__UseAvatar">{recipient?.email[0]}</Avatar>
      )}
      <div>
        {recipient &&
          (!recipient.ngo ? (
            <h5 className="my-0">
              {recipient.firstName
                ? recipient.firstName + recipient.secondName
                : "Un Named"}
            </h5>
          ) : (
            <h5 className="my-0">
              {recipient.organizationName
                ? recipient.organizationName
                : "Un Named"}
            </h5>
          ))}
        <p className="lead small my-0">{recipient?.email}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userData: state.userDetail.userDetails,
  openedChatId: state.chat.chatId,
});

export default connect(mapStateToProps, null)(Chat);
