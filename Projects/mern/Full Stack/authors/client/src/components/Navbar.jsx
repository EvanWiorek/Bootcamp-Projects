import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();

  const navAddAuthor = () => {
    navigate("/newauthor");
  };

  return (
    <div className="my-navbar d-flex gap-5 align-items-center">
      <h1>Favorite Authors</h1>
      <button className="btn btn-outline-light" onClick={navAddAuthor}>Add an Author</button>
    </div>
  );
};
