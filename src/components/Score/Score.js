import React, { useState } from "react";
import "./Score.css";
import Cards from "../Gameboard/Cards/Cards";

const Score = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function updateCurrentScore(e) {
    setCurrentScore(currentScore + 1);
  }

  return (
    <>
      <div className="score--container">
        <div className="currentScore">Current Score: {currentScore} </div>
        <div className="bestScore">Best Score: </div>
      </div>
      <div>
        <Cards updateCurrentScore={updateCurrentScore} />
      </div>
    </>
  );
};

export default Score;
