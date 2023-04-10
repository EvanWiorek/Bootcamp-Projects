export default ({ SWAPIObject }) => {
  console.log(SWAPIObject);
  
  return (
    <div className="card m-auto mt-3 card-width">
      <div className="card-header my-card-title text-center display-6">{SWAPIObject.name}</div>
      <div className="card-body d-flex gap-5">
        <div className="left-side col-5">
          <h5>Cost (in Credits):</h5>
          <h5>Length:</h5>
          <h5>Vehicle Class:</h5>
          <h5>Passenger Limit:</h5>
        </div>
        <div className="right-side col-5">
          <h5>{SWAPIObject.cost_in_credits}</h5>
          <h5>{SWAPIObject.length}</h5>
          <h5>{SWAPIObject.vehicle_class}</h5>
          <h5>{SWAPIObject.passengers}</h5>
        </div>
      </div>
    </div>
  );
};
