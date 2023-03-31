import React from "react";

const Navbar = ({ handleLess, handlePlus, pokemonIndex, pokemonsLength }) => {
  return (
    <div>
      <button onClick={handleLess} disabled={pokemonIndex === 0 ? true : false}>
        Prev
      </button>
      <button
        onClick={handlePlus}
        disabled={pokemonIndex === pokemonsLength - 1 ? true : false}
      >
        Next
      </button>
    </div>
  );
};

export default Navbar;