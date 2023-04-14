import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import AuthorForm from "../components/AuthorForm";
import DeleteButton from "../components/DeleteButton";

export default (props) => {
  const { id } = useParams();
  const [author, setAuthor] = useState();
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/author/${id}`).then((res) => {
      setAuthor(res.data);
      setLoaded(true);
    });
  }, []);

  const updateAuthor = (author) => {
    axios
      .put(`http://localhost:8000/api/author/${id}`, author)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="card my-shadow mt-5 col-4 p-4 m-auto">
        {loaded && (
          <>
            <AuthorForm
              onSubmitProp={updateAuthor}
              initialFirstName={author.firstName}
              initialLastName={author.lastName}
              initialFirstNameError={null}
              initialPriceError={null}
              initialLastNameError={null}
              formTitle={`Edit ${author.firstName} ${author.lastName}`}
            />
            <br/>
            <DeleteButton authorId={author._id} deleteCallback={() => navigate("/")} />
          </>
        )}
      </div>
    </div>
  );
};
