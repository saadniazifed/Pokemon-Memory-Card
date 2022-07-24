import React, { useState } from "react";
import "./Score.css";
import Cards from "../Gameboard/Cards/Cards";

const Score = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function updateCurrentScore(e) {
    setCurrentScore((prev) => {
      const latestScore = prev + 1;
      if (latestScore > bestScore) {
        setBestScore(latestScore);
      }
      return latestScore;
    });
  }

  function updateBestScore(e) {
    if (bestScore < e) {
      setBestScore(e);
    }
  }

  const resetScore = () => {
    setCurrentScore(0);
  };

  return (
    <>
      <div className="score--container">
        <div className="currentScore">Current Score: {currentScore} </div>
        <div className="bestScore">Best Score: {bestScore}</div>
      </div>
      <div>
        <Cards
          updateCurrentScore={updateCurrentScore}
          updateBestScore={updateBestScore}
          resetScore={resetScore}
          setBestScore={setBestScore}
        />
      </div>
    </>
  );
};

export default Score;
