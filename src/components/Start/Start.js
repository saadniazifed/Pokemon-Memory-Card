import React from "react";
import Header from "../Header/Header";
import Score from "../Score/Score";
import "./Start.css";
import Cards from "../Gameboard/Cards/Cards";

const Start = () => {
  return (
    <>
      <Header />
      <Score />
      <Cards />
    </>
  );
};

export default Start;
