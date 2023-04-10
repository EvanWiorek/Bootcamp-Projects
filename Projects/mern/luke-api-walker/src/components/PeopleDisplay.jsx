import { Link } from "react-router-dom";
import axios from "axios";

export default ({ SWAPIObject, homeWorld, planetNumber, setSWAPIObject }) => {
  const planetClick = () => {
    axios
      .get(`https://swapi.dev/api/planets/${planetNumber}`)
      .then((response) => {
        setSWAPIObject(response.data);
      });
  };

  return (
    <div className="card m-auto mt-3 card-width">
      <div className="card-header my-card-title text-center display-6">
        {SWAPIObject.name}
      </div>
      <div className="card-body d-flex gap-5">
        <div className="left-side col-5">
          <h5>Height:</h5>
          <h5>Mass:</h5>
          <h5>Hair Color:</h5>
          <h5>Skin Color:</h5>
          <h5>Homeworld:</h5>
        </div>
        <div className="right-side col-5">
          <h5>{SWAPIObject.height}</h5>
          <h5>{SWAPIObject.mass}</h5>
          <h5>{SWAPIObject.hair_color}</h5>
          <h5>{SWAPIObject.skin_color}</h5>
          <h5>
            <Link to={`/planets/${planetNumber}`} onClick={planetClick}>
              {homeWorld.name}
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
};
