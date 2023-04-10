import ErrorGIF from "./assets/404.gif";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();

  const goBackLink = () => {
    navigate(-1);
  }

  return (
    <div className="text-center">
      <img
        src={ErrorGIF}
        alt="404 GIF"
        className="ErrorGIF rounded mt-4 col-5"
      />
      <h2 className="mt-3">Sorry! This search was out of the SWAPI Paramters.</h2>
      <button className="btn btn-warning" onClick={goBackLink}>Go Back</button>
    </div>
  );
};
