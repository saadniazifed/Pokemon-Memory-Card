import React from "react";
import {
  Pikachu,
  Charizard,
  Litten,
  Sharpedo,
  Zygarde,
  Decidueye,
  Garchomp,
  Mimikyu,
  Rayquaza,
  Dragonite,
  Gyarados,
  Snorlax,
} from "../../../pokemonImages/pokemonImg";

import "./Cards.css";

const Cards = (props) => {
  const { updateCurrentScore } = props;

  return (
    <div className="card--container">
      <img
        src={Pikachu}
        alt="pikachu"
        className="pokemon--image"
        id="0"
        onClick={updateCurrentScore}
      />
      <img
        src={Charizard}
        alt="charizard"
        className="pokemon--image"
        id="1"
        onClick={updateCurrentScore}
      />
      <img
        src={Litten}
        alt="litten"
        className="pokemon--image"
        id="2"
        onClick={updateCurrentScore}
      />
      <img
        src={Sharpedo}
        alt="sharpedo"
        className="pokemon--image"
        id="3"
        onClick={updateCurrentScore}
      />
      <img
        src={Zygarde}
        alt="zygarde"
        className="pokemon--image"
        id="4"
        onClick={updateCurrentScore}
      />
      <img
        src={Decidueye}
        alt="decidueye"
        className="pokemon--image"
        id="5"
        onClick={updateCurrentScore}
      />
      <img
        src={Garchomp}
        alt="garchomp"
        className="pokemon--image"
        id="6"
        onClick={updateCurrentScore}
      />
      <img
        src={Mimikyu}
        alt="mimikyu"
        className="pokemon--image"
        id="7"
        onClick={updateCurrentScore}
      />
      <img
        src={Rayquaza}
        alt="rayquaza"
        className="pokemon--image"
        id="8"
        onClick={updateCurrentScore}
      />
      <img
        src={Dragonite}
        alt="dragonite"
        className="pokemon--image"
        id="9"
        onClick={updateCurrentScore}
      />
      <img
        src={Gyarados}
        alt="gyardos"
        className="pokemon--image"
        id="10"
        onClick={updateCurrentScore}
      />
      <img
        src={Snorlax}
        alt="snorlax"
        className="pokemon--image"
        id="11"
        onClick={updateCurrentScore}
      />
    </div>
  );
};

export default Cards;
