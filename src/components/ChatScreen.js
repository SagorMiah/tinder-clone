import React, { useState } from "react";
import "./css/chatScreen.css";
import Avatar from "@material-ui/core/Avatar";

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "SAGOR",
      img: "",
      message: "Fine.",
    },
    { name: "SAGOR", img: "", message: "how are you doing? " },
    {
      message: "Nothing name and image",
    },
  ]);

  const handleClick = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">YOU MATCHED WITH SAGOR ON10/08/12</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              alt={message.name}
              src={message.img}
              className="chatScreen__image"
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input" action="">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Type a Message"
        />
        <button onClick={handleClick} type="submit">
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;
