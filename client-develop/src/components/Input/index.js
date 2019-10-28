import React from "react";

import "./styled.css";

const Input = ({ message, sendMessage, setMessage }) => (
  <form className="form">
    <input
      type="text"
      className="input"
      placeholder="Type a message..."
      value={message}
      onChange={e => setMessage(e.target.value)}
      onKeyPress={e => (e.key === "Enter" ? sendMessage(e) : null)}
    />
    <button className="sendBtn" onClick={e => sendMessage(e)}>
      Send
    </button>
  </form>
);

export default Input;
