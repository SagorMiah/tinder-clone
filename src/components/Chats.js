import React from "react";
import Chat from "./Chat";
import "./css/chats.css";

const Chats = () => {
  return (
    <div>
      <Chat
        name="sagor"
        message="what's up"
        timestamp="2 seconds ago"
        profilePic="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg"
      />
    </div>
  );
};

export default Chats;
