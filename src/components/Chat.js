import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

const Chat = ({ name, message, timestamp, profilePic }) => {
  return (
    <Link to={`/chat/${name}`}>
      <div className="chat">
        <Avatar alt={name} src={profilePic} className="chat__image" />
        <div className="chat__details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="chat__timestamp">{timestamp}</p>
      </div>
    </Link>
  );
};

export default Chat;
