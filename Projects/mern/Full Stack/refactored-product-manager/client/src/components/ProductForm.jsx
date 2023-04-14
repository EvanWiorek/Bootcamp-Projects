import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default ({
  initialTitle,
  initialPrice,
  initialDescription,
  goBackButton,
  onSubmitProp,
  formTitle,
  initialTitleError,
  initialPriceError,
  initialDescriptionError
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [price, setPrice] = useState(initialPrice);
  const [description, setDescription] = useState(initialDescription);
  const [titleError, setTitleError] = useState(initialTitleError);
  const [priceError, setPriceError] = useState(initialPriceError);
  const [descriptionError, setDescriptionError] = useState(initialDescriptionError);
  const navigate = useNavigate();

  const goBackLink = () => {
    navigate(-1);
  };

  let formIsValid = false;
  formIsValid =
    titleError === null && priceError === null && descriptionError === null;

  const handleTitle = (e) => {
    setTitle(e.target.value);
    if (e.target.value.length < 1) {
      setTitleError("Title must not be blank.");
    } else {
      setTitleError(null);
    }
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
    if (e.target.value.length < 1) {
      setPriceError("Price must not be blank.");
    } else if (isNaN(e.target.value) === true) {
      setPriceError("Price must be a number.");
    } else {
      setPriceError(null);
    }
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
    if (e.target.value.length < 1) {
      setDescriptionError("Description must not be blank.");
    } else {
      setDescriptionError(null);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({ title, price, description });
    navigate('/products')
    setTitle("");
    setPrice("");
    setDescription("");
  };

  //onChange to update title and price
  return (
    <div>
      <h2 className="text-center">{formTitle}</h2>
      <form onSubmit={onSubmitHandler}>
        <div className="form-floating">
          <input
            type="text"
            onChange={handleTitle}
            id="title"
            value={title}
            className="form-control mt-4"
            placeholder="Title"
          />
          <label>Title</label>
          {titleError ? (
            <p style={{ color: "tomato" }} className="mt-2">
              {titleError}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="form-floating">
          <input
            type="text"
            onChange={handlePrice}
            id="price"
            value={price}
            className="form-control  mt-4"
            placeholder="Price"
          />
          <label>Price</label>
          {priceError ? (
            <p style={{ color: "tomato" }} className="mt-2">
              {priceError}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="form-floating">
          <input
            type="text"
            onChange={handleDescription}
            id="description"
            value={description}
            className="form-control  mt-4"
            placeholder="Description"
          />
          <label>Description</label>
          {descriptionError ? (
            <p style={{ color: "tomato" }} className="mt-2">
              {descriptionError}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="d-flex align-items-center gap-3 mt-4">
          <input
            type="submit"
            className={`btn btn-outline-primary ${
              formIsValid ? "" : "disabled"
            }`}
          />
          <div className={goBackButton}>
            <button className="btn btn-outline-success" onClick={goBackLink}>
              Go Back
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
