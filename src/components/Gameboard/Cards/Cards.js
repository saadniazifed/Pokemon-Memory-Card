import React, { useEffect } from "react";
import axios from "axios";

const Cards = () => {
  const NUMBER_OF_POKEMONS = 20;

  useEffect(() => {
    getPokemon();
  }, []);

  async function getPokemon() {
    for (let i = 1; i < NUMBER_OF_POKEMONS; i++) {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
      console.log(res.data.name);
      console.log(res.data.sprites.front_default);
    }
  }

  return <></>;
};

export default Cards;
