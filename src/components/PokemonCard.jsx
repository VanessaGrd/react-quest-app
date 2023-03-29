const PokemonCard = (props) => {
  const pokemon = props.pokemon;
  return (
    <figure>
      {pokemon.imgSrc !== undefined ? <img src={pokemon.imgSrc} /> : <p>???</p>}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
};

export default PokemonCard;

