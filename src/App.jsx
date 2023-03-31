import PokemonCard from "./components/PokemonCard";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/NavBar";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];
function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handlePlus = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  const handleLess = () => {
    setPokemonIndex(pokemonIndex - 1);
  };
  return (
    <div className="App">
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <Navbar
        handleLess={handleLess}
        handlePlus={handlePlus}
        pokemonIndex={pokemonIndex}
        pokemonsLength={pokemonList.length}
      />
    </div>
  );
}
export default App;
