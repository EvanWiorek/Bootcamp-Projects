// import "./App.css";

export default (props) => {
  const { name, url, idx } = props;
  // console.log(pokemonArr);
  
  return (
    <div className="text-light">
      <p id={idx}> {name}</p>
    </div>
  );
};
