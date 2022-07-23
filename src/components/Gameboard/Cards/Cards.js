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
      <img src={Pikachu} alt="pikachu" className="pokemon--image" id="0" />
      <img src={Charizard} alt="charizard" className="pokemon--image" id="1" />
      <img src={Litten} alt="litten" className="pokemon--image" id="2" />
      <img src={Sharpedo} alt="sharpedo" className="pokemon--image" id="3" />
      <img src={Zygarde} alt="zygarde" className="pokemon--image" id="4" />
      <img src={Decidueye} alt="decidueye" className="pokemon--image" id="5" />
      <img src={Garchomp} alt="garchomp" className="pokemon--image" id="6" />
      <img src={Mimikyu} alt="mimikyu" className="pokemon--image" id="7" />
      <img src={Rayquaza} alt="rayquaza" className="pokemon--image" id="8" />
      <img src={Dragonite} alt="dragonite" className="pokemon--image" id="9" />
      <img src={Gyarados} alt="gyardos" className="pokemon--image" id="10" />
      <img src={Snorlax} alt="snorlax" className="pokemon--image" id="11" />
    </div>
  );
};

export default Cards;
