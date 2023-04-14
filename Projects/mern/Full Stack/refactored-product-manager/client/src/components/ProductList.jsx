import axios from "axios";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";
import React, { useState, useEffect } from "react";

export default ({ products, setProducts, removeFromDom}) => {
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product")
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="col-10 m-auto">
      <table className="table table-bordered table-hover my-shadow">
        <thead>
          <tr>
            <th scope="col">
              <h5 className="p-2">All Products</h5>
            </th>
            <th scope="col">
              <h5 className="p-2">Actions</h5>
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <tr key={i}>
              <td className="p-3">
                <h5>
                  <Link to={`/product/${product._id}`}>{product.title}</Link>
                </h5>
              </td>
              <td className="p-3">
                <p className="d-flex gap-3">
                  <Link
                    to={`/product/${product._id}/edit`}
                    className="btn btn-outline-warning"
                  >
                    Edit
                  </Link>
                  <DeleteButton productId={product._id} deleteCallback={() => removeFromDom(product._id)} />
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
