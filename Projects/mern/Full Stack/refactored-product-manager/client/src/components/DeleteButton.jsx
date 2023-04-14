import React from "react";
import axios from "axios";

export default (props) => {
  const { productId, deleteCallback } = props;

  const deleteProduct = (e) => {
    axios
      .delete(`http://localhost:8000/api/product/${productId}`)
      .then((res) => {
        deleteCallback();
      });
  };

  return (
    <button className="btn btn-outline-danger" onClick={deleteProduct}>
      Delete
    </button>
  );
};
