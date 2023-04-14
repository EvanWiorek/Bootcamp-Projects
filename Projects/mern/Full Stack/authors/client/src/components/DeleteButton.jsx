import React from "react";
import axios from "axios";

export default (props) => {
  const { authorId, deleteCallback } = props;

  const deleteAuthor = (e) => {
    axios
      .delete(`http://localhost:8000/api/author/${authorId}`)
      .then((res) => {
        deleteCallback();
      });
  };

  return (
    <button className="btn btn-outline-danger" onClick={deleteAuthor}>
      Delete
    </button>
  );
};
