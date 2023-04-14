import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default ({
  initialFirstName,
  initialLastName,
  onSubmitProp,
  formTitle,
  initialFirstNameError,
  initialLastNameError,
}) => {
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);
  const [firstNameError, setFirstNameError] = useState(initialFirstNameError);
  const [lastNameError, setLastNameError] = useState(initialLastNameError);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const homeButton = () => {
    navigate("/");
  };

  let formIsValid = false;
  formIsValid = firstNameError === null && lastNameError === null;

  const handlefirstName = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length < 1) {
      setFirstNameError("First name must not be blank.");
    } else if (e.target.value.length < 3) {
      setFirstNameError("First name must be longer than 3 characters.");
    } else {
      setFirstNameError(null);
    }
  };

  const handlelastName = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 1) {
      setLastNameError("Last name must not be blank.");
    } else if (e.target.value.length < 3) {
      setLastNameError("Last name must be longer than 3 characters.");
    } else {
      setLastNameError(null);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({ firstName, lastName });
    navigate("/");
    setFirstName("");
    setLastName("");
  };

  // const onSubmitHandler = (e) => {
  //   e.preventDefault();
  //   //Send a post request to our API to create a Book
  //   axios
  //     .post("http://localhost:8000/api/newauthor", {
  //       firstName,
  //       lastName,
  //     })
  //     .then(
  //       (res) => onSubmitProp({ firstName, lastName })
  //       // navigate("/"),
  //       // setFirstName(""),
  //       // setLastName("")
  //     ) // If successful, do something with the response.
  //     .catch((err) => {
  //       // console.log(err);
  //       const errorResponse = err.response.data.errors; // Get the errors from err.response.data
  //       const errorArr = []; // Define a temp error array to push the messages in
  //       const errorDict = {}
  //       // for (const key of Object.keys(errorResponse)) {
  //       //   // Loop through all errors and get the messages
  //       //   errorArr.push(errorResponse[key].message);
  //       // }
  //       // // Set Errors

  //       console.log(errorResponse.firstName.message);
  //     });
  // };

  return (
    <div>
      <h2 className="text-center">{formTitle}</h2>
      <form onSubmit={onSubmitHandler}>
        {/* {errors.map((err, index) => (
          <p key={index}>{err}</p>
        ))} */}
        <div className="form-floating">
          <input
            type="text"
            onChange={handlefirstName}
            id="firstName"
            value={firstName}
            className="form-control mt-4"
            placeholder="First Name:"
          />
          <label>First Name:</label>
          {firstNameError ? (
            <p style={{ color: "tomato" }} className="mt-2">
              {firstNameError}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="form-floating">
          <input
            type="text"
            onChange={handlelastName}
            id="lastName"
            value={lastName}
            className="form-control  mt-4"
            placeholder="Last Name:"
          />
          <label>Last Name:</label>
          {lastNameError ? (
            <p style={{ color: "tomato" }} className="mt-2">
              {lastNameError}
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
          <div>
            <button className="btn btn-outline-success" onClick={homeButton}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
