// import "./App.css";

export default (props) => {
  const { pokemonArr, setPokemonArr } = props;
  
  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        // not the actual JSON response body but the entire HTTP response
        // console.log("1");
        return response.json();
      })
      .then((response) => {
        // we now run another promise to parse the HTTP response into usable JSON
        // console.log(response.results);
        setPokemonArr(response.results);
        // setPokemonArr(...pokemonArr, response.results);
        // console.log("2");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
    <div>
      <button className="btn btn-warning" onClick={fetchPokemon}>Fetch Pokemon</button>
    </div>
    </>
  )
};
