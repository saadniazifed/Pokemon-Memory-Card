import React from "react";
import "./Score.css";

const Score = () => {
  return (
    <div className="score--container">
      <div className="currentScore">Current Score: </div>
      <div className="bestScore">Best Score: </div>
    </div>
  );
};

export default Score;
