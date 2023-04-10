export default ({ SWAPIObject }) => {
  console.log(SWAPIObject);
  
  return (
    <div className="card m-auto mt-3 card-width">
      <div className="card-header my-card-title text-center display-6">{SWAPIObject.name}</div>
      <div className="card-body d-flex gap-5">
        <div className="left-side col-5">
          <h5>Climate:</h5>
          <h5>Terrain:</h5>
          <h5>Diameter:</h5>
          <h5>Population:</h5>
        </div>
        <div className="right-side col-5">
          <h5>{SWAPIObject.climate}</h5>
          <h5>{SWAPIObject.terrain}</h5>
          <h5>{SWAPIObject.diameter}</h5>
          <h5>{SWAPIObject.population}</h5>
        </div>
      </div>
    </div>
  );
};
