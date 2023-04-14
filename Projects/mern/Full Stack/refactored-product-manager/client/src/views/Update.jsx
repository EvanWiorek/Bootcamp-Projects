import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import DeleteButton from "../components/DeleteButton";

export default (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${id}`).then((res) => {
      setProduct(res.data);
      setLoaded(true);
    });
  }, []);

  const updateProduct = (product) => {
    axios
      .put(`http://localhost:8000/api/product/${id}`, product)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="card border-info mt-5 col-4 p-4 m-auto">
        {loaded && (
          <>
            <ProductForm
              onSubmitProp={updateProduct}
              initialTitle={product.title}
              initialPrice={product.price}
              initialDescription={product.description}
              initialTitleError={null}
              initialPriceError={null}
              initialDescriptionError={null}
              goBackButton={"visible"}
              formTitle={`Edit ${product.title}`}
            />
            <br/>
            <DeleteButton productId={product._id} deleteCallback={() => navigate("/products")} />
          </>
        )}
      </div>
    </div>
  );
};
