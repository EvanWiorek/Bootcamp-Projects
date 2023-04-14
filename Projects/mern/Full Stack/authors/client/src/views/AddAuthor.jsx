import React, { useEffect, useState } from "react";
import AuthorForm from "../components/AuthorForm";
import axios from "axios";
import "../App.css";

export default ({authors, setAuthors, loaded, setLoaded}) => {
  // const [authors, setAuthors] = useState([]);
  // const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/api/authors")
  //     .then((res) => {
  //       setAuthors(res.data);
  //       setLoaded(true);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const removeFromDom = (authorId) => {
    setAuthors(authors.filter((author) => author._id != authorId));
  };

  const createauthor = (author) => {
    axios.post("http://localhost:8000/api/newauthor", author).then((res) => {
      setAuthors([...authors, res.data]);
    });
  };

  return (
    <div className="m-auto card p-3 mt-3 mb-4 col-5 my-shadow">
      <h1 className="text-center">Add New Author</h1>
      <div className="m-auto col-10">
        <AuthorForm
          onSubmitProp={createauthor}
          initialFirstName=""
          initialLastName=""
        />
      </div>
    </div>
  );
};