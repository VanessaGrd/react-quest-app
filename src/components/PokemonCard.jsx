import PropTypes from "prop-types";



const PokemonCard = (props) => {
  const pokemon = props.pokemon;
  return (
    <figure>
      {pokemon.imgSrc !== undefined ? <img src={pokemon.imgSrc} /> : <p>???</p>}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
};

PokemonCard.protoType = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.object,
  })
}
export default PokemonCard;

