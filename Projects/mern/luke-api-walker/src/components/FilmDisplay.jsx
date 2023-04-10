export default ({ SWAPIObject }) => {
  console.log(SWAPIObject);
  
  return (
    <div className="card m-auto mt-3 card-width">
      <div className="card-header my-card-title text-center display-6">{SWAPIObject.title}</div>
      <div className="card-body d-flex gap-5">
        <div className="left-side col-5">
          <h5>Episode ID:</h5>
          <h5>Release Date:</h5>
          <h5>Director:</h5>
        </div>
        <div className="right-side col-5">
          <h5>{SWAPIObject.episode_id}</h5>
          <h5>{SWAPIObject.release_date}</h5>
          <h5>{SWAPIObject.director}</h5>
        </div>
      </div>
    </div>
  );
};
