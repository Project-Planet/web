import { Avatar, IconButton } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import "./ChatScreenStyles.css"
import TimeAgo from "timeago-react"
import { useSelector } from 'react-redux'
import fire from '../../APIS/firebase'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
import { useParams } from 'react-router-dom'
import Message from '../Message/Message'
import firebase from "firebase/compat/app";


const ChatScreen = () => {

  const userData = useSelector((state) => state.userDetail.userDetails);
  const { id } = useParams();
  const [userChatRef, setUserChatRef] = useState(null);
  const [recipientRef, setRecipientRef] = useState(null);
  const [input, setInput] = useState("");
  const endOfMessagesRef = useRef(null);


  useEffect(() => {
    if (userData.uid) {
      let chatRef = fire
        .firestore()
        .collection("chats")
        .doc(id)
      setUserChatRef(chatRef);
    }
  }, [userData]);

  const [chatsSnapshot] = useDocument(userChatRef);
  const getRecipientDetails = () => {
    let recipientUid;
    if(chatsSnapshot) {
      const users = chatsSnapshot?.data().users;
      users?.forEach((user) => {
        if(user != userData.uid){
          recipientUid = user
        }
      });
      return recipientUid
    }
  }

  const recipientUid = getRecipientDetails();

  useEffect(() => {
    if(recipientUid){
      let resRef = fire.firestore()
        .collection("users").where("uid", "==", recipientUid)
      setRecipientRef(resRef);
    }
  }, [recipientUid])

  const [recipientSnapshot] = useCollection(recipientRef);

  const [messagesSnapshot] = useCollection(
    fire.firestore()
      .collection("chats")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "asc")
  );

  const recipient = recipientSnapshot?.docs?.[0]?.data();
  const recipientEmail = recipient?.email;

  const showMessages = () => {
    if (messagesSnapshot) {
      return messagesSnapshot.docs.map((message) => (
        <Message
          key={message.id}
          user={message.data().user}
          currentUser={userData.uid}
          message={{
            ...message.data(),
            timestamp: message.data().timestamp?.toDate().getTime(),
          }}
        />
      ));
    }
  };

  const scrollToBottom = () => {
    endOfMessagesRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const sendMessage = (e) => {
    e.preventDefault();

    fire.firestore().collection("chats").doc(id).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: userData.uid,
      photoURL: userData.profilePic,
    });

    setInput("");
    scrollToBottom();
  };

  return (
    <div>
      <div className="ChatScreen__header">
        {recipient ? (
          <Avatar src={recipient?.profilePic} />
        ) : (
          <Avatar>user</Avatar>
        )}

        <div className="ChatScreen__headerInfo">
          {recipient ? <h3>{recipientEmail}</h3> : <h3>user</h3>}
        </div>
      </div>

      <div className="ChatScreen__messageContainer">
        {showMessages()}
        <div className="ChatScreen__EndOfMessaage" ref={endOfMessagesRef} />
      </div>

      <form className="ChatScreen__inputContainer">
        <input
          className="ChatScreen__input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          disabled={!input}
          type="submit"
          onClick={sendMessage}
          className="btn-aboutus"
          style={{ cursor: "pointer", borderRadius: "12px", marginLeft: "0" }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ChatScreen