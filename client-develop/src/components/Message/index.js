import React from "react";

import ReactEmoji from "react-emoji";

import "./styled.css";

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? ( // Mosque aqui
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{trimmedName}</p>
      <div className="messageBox bg-blue">
        <p className="messageText color-white">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer">
      <div className="messageBox bg-light">
        <p className="messageText justifyEnd color-dark">
          {ReactEmoji.emojify(text)}
        </p>
      </div>
      <p className="sentText pl-10">{trimmedName}</p>
    </div>
  );
};

export default Message;
