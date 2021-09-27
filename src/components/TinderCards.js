import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./css/tinder.css";
import db from "../firebase";

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div>
      <div className="tinder___wraper">
        {people.map((person) => (
          <TinderCard
            key={person.name}
            className="swipe"
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.img})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
