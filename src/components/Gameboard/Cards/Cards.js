import React, { useEffect, useState } from "react";
import { charData } from "../../../pokemonImages/pokemonImg";
import "./Cards.css";

const Cards = (props) => {
  const [clickedCards, setClickedCards] = useState([]);

  const randomCards = charData;

  function shuffle() {
    for (let i = randomCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomCards[i], randomCards[j]] = [randomCards[j], randomCards[i]];
    }
    console.log("shuffled");
  }

  useEffect(() => {
    shuffle();
  });

  function checkForPoint(e) {
    if (!clickedCards.includes(Number(e.target.closest(".card").id))) {
      setClickedCards((clickedCards) => [
        ...clickedCards,
        Number(e.target.closest(".card").id),
      ]);
      props.increaseScore();
    } else {
      props.setBestScore(clickedCards.length);
      props.resetScore();
      setClickedCards([]);
    }
  }

  return (
    <div className="card--container">
      {randomCards.map((item) => {
        return (
          <div
            onClick={(e) => {
              checkForPoint(e);
              console.log(clickedCards);
            }}
            key={item.id}
            id={item.id}
            className="card"
          >
            <img
              style={{
                width: "280px",
                borderRadius: "5px 5px 0 0",
              }}
              alt={item.text}
              src={item.img}
              className="pokemon--image"
              onClick={props.updateCurrentScore}
            ></img>
            <p
              style={{ textAlign: "center", color: "white", fontSize: "1rem" }}
            >
              {item.text}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
