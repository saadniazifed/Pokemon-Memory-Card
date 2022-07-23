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

const Cards = () => {
  return (
    <div className="card--container">
      <img src={Pikachu} alt="pikachu" className="pokemon--image" />
      <img src={Charizard} alt="charizard" className="pokemon--image" />
      <img src={Litten} alt="litten" className="pokemon--image" />
      <img src={Sharpedo} alt="sharpedo" className="pokemon--image" />
      <img src={Zygarde} alt="zygarde" className="pokemon--image" />
      <img src={Decidueye} alt="decidueye" className="pokemon--image" />
      <img src={Garchomp} alt="garchomp" className="pokemon--image" />
      <img src={Mimikyu} alt="mimikyu" className="pokemon--image" />
      <img src={Rayquaza} alt="rayquaza" className="pokemon--image" />
      <img src={Dragonite} alt="dragonite" className="pokemon--image" />
      <img src={Gyarados} alt="gyardos" className="pokemon--image" />
      <img src={Snorlax} alt="snorlax" className="pokemon--image" />
    </div>
  );
};

export default Cards;
