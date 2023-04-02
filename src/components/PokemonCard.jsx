import PropTypes from "prop-types";
import React from "react";

const PokemonCard = (props) => {
  const pokemon = props.pokemon;
  return (
    <figure>
      {pokemon.imgSrc !== undefined ? <img src={pokemon.imgSrc} /> : <p>???</p>}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
};

PokemonCard.propType = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }),
};
export default PokemonCard;
