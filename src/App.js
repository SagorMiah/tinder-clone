import React from "react";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import TinderCards from "./components/TinderCards";
import SwipeCards from "./components/SwipeCards";
import Chats from "./components/Chats";
import ChatScreen from "./components/ChatScreen";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Header />
          <TinderCards />
          <SwipeCards />
        </Route>
        <Route exact path="/chat">
          <Header backButton="/" />
          <Chats />
        </Route>
        <Route exact path="/chat/:person">
          <Header backButton="/chat" />
          <ChatScreen />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
