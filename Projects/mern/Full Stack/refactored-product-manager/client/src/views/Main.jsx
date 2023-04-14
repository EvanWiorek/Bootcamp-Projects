import React, { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import axios from "axios";
import "../App.css";

export default () => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        setProducts(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const removeFromDom = (productId) => {
    setProducts(products.filter((product) => product._id != productId));
  };

  const createProduct = (product) => {
    axios.post("http://localhost:8000/api/newproduct", product).then((res) => {
      setProducts([...products, res.data]);
    });
  };

  return (
    <div className="m-auto card border-info p-3 mt-3 mb-4 col-5">
      <div className="m-auto col-10">
        <h1 className="text-center mt-3 mb-4">Product Manager</h1>
        <ProductForm
          onSubmitProp={createProduct}
          initialTitle=""
          initialPrice=""
          initialDescription=""
          goBackButton="hidden"
          formTitle="Add New Product"
        />
        <hr />
        {loaded && (
          <ProductList products={products} setProducts={setProducts} removeFromDom={removeFromDom} />
          // <ProductList products={products} />
        )}
      </div>
    </div>
  );
};
