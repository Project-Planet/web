import React from 'react';
import "./MessageStyles.css";
import moment from "moment";

export default function Message({ user, message, currentUser }) {
  const TypeOfMessage = user === currentUser ? true : false;
  return (
    <div>
      {
        TypeOfMessage ? (
          <div className="Message__senderMessageElement">
            {message.message}{" "}
            <span className="Message__timestamp">
              {message.timestamp ? moment(message.timestamp).format("LT") : "..."}
            </span>
          </div>
        ) : (
          <div className="Message__recieverMessageElement">
            {message.message}{" "}
            <span className="Message__timestamp">
              {message.timestamp ? moment(message.timestamp).format("LT") : "..."}
            </span>
          </div>
        )
      }
      
    </div>
  );
}