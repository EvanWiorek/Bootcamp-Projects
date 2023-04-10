import { Link } from "react-router-dom";
import axios from "axios";

export default ({
  SWAPIObject,
  homeWorld,
  planetNumber,
  setSWAPIObject,
}) => {
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
          <h5>Classification:</h5>
          <h5>Designation:</h5>
          <h5>Homeworld:</h5>
          <h5>Language:</h5>
        </div>
        <div className="right-side col-5">
          <h5>{SWAPIObject.classification}</h5>
          <h5>{SWAPIObject.designation}</h5>
          <h5>
            <Link to={`/planets/${planetNumber}`} onClick={planetClick}>
              {homeWorld.name}
            </Link>
          </h5>
          <h5>{SWAPIObject.language}</h5>
        </div>
      </div>
    </div>
  );
};
