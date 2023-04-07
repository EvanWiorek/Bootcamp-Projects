import { useState } from "react";
import "./App.css";
import PokemonFetch from "./components/PokemonFetch";
import PokemonDisplay from "./components/PokemonDisplay";

function App() {
  const [pokemonArr, setPokemonArr] = useState([]);

  console.log(pokemonArr);

  return (
    <div className="App col-11 text-center">
      <PokemonFetch setPokemonArr={setPokemonArr} pokemonArr={pokemonArr} />
      {pokemonArr.map((pokemon, idx) => {
        return <PokemonDisplay name={pokemon.name} url={pokemon.url} idx={idx} />;
      })}
    </div>
  );
}

export default App;
