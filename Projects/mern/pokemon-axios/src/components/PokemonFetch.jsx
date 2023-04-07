import axios from 'axios';

export default (props) => {
  const { pokemonArr, setPokemonArr } = props;

  const fetchPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807').then(response => {
      setPokemonArr(response.data.results);
    })
  };

  return (
    <>
    <div>
      <button className="btn btn-warning" onClick={fetchPokemon}>Fetch Pokemon</button>
    </div>
    </>
  )
};
