import React, { useEffect, useState } from "react";
import AuthorList from "../components/AuthorList";
import axios from "axios";

export default ({authors, setAuthors, loaded, setLoaded, removeFromDom}) => {
  
  // const removeFromDom = (authorId) => {
  //   setAuthors(authors.filter((author) => author._id != authorId));
  // };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors")
      .then((res) => {
        setAuthors(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <div className="mt-3">
      {loaded && (
        <AuthorList
          authors={authors}
          setAuthors={setAuthors}
          removeFromDom={removeFromDom}
        />
      )}
    </div>
  );
};
