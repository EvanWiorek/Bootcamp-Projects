import axios from "axios";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";
import React, { useState, useEffect } from "react";

export default ({ authors, setAuthors, removeFromDom }) => {
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/author")
      .then((res) => setAuthors(res.data));
  }, []);

  return (
    <div className="col-4 m-auto">
      <table className="table table-hover my-shadow">
        <thead className="table-head-color">
          <tr>
            <th scope="col">
              <h5 className="p-2">All Authors</h5>
            </th>
            <th scope="col">
              <h5 className="p-2">Actions</h5>
            </th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author, i) => (
            <tr key={i}>
              <td className="p-3">
                <h5>
                  {author.firstName} {author.lastName}
                </h5>
              </td>
              <td className="p-3 col-3">
                <p className="d-flex gap-3">
                  <Link
                    to={`/author/${author._id}/edit`}
                    className="btn btn-outline-warning"
                  >
                    Edit
                  </Link>
                  <DeleteButton
                    authorId={author._id}
                    deleteCallback={() => removeFromDom(author._id)}
                  />
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
