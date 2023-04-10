import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default ({
  setSWAPIObject,
  setSearchTerms,
  searchTerms,
  setHomeWorld,
  setPlanetNumber,
  isSubmitted,
  setIsSubmitted,
  searchIdBlank,
  setSearchIdBlank,
}) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchTerms({
      ...searchTerms,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    navigate(`/${searchTerms.category}/${searchTerms.idNum}`);
    document.querySelector(".searchId").value = "";
  };

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/${searchTerms.category}/${searchTerms.idNum}`)
      .then((response) => {
        if ("homeworld" in response.data) {
          setSWAPIObject(response.data);
          setPlanetNumber(response.data.homeworld.slice(30, 31));
          axios.get(response.data.homeworld).then((homeWorldResponse) => {
            setHomeWorld(homeWorldResponse.data);
          });
        } else {
          setSWAPIObject(response.data);
        }
      })
      .catch((err) => navigate("/404"));
    setIsSubmitted(false);
  }, [isSubmitted]);

  return (
    <div className="navbar-body">
      <div className="card-body d-flex justify-content-between m-auto col-9">
        <h1 className="site-title text-warning">
          <a href="/">Luke APi Walker</a>
        </h1>
        <form
          className="form-body d-flex justify-content-evenly col-6 align-items-center"
          onSubmit={handleSubmit}
        >
          <div className="form-floating col-7">
            <select
              name="category"
              id="category"
              className="form-select"
              onChange={handleChange}
            >
              <option value="people">People</option>
              <option value="starships">Spaceships</option>
              <option value="vehicles">Vehicles</option>
              <option value="planets">Planets</option>
              <option value="films">Films</option>
              <option value="species">Species</option>
            </select>
            <label htmlFor="category">Search for:</label>
          </div>
          <div className="form-floating col-2">
            <input
              type="text"
              className="form-control searchId"
              name="idNum"
              id="idNum"
              placeholder="ID:"
              onChange={handleChange}
            />
            <label htmlFor="idNum">ID:</label>
          </div>
          <input
            type="submit"
            value="Search"
            className="btn btn-warning site-button"
          />
        </form>
      </div>
    </div>
  );
};
