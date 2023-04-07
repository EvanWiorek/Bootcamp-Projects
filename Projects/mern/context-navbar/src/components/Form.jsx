//holds the input form
import React, { useContext } from "react";
import { MyContext } from "../App";

export default () => {
  //this is grabbing the string and the function (established in the app wrapper) out of context
  const { name, setName } = useContext(MyContext);

  return (
    <>
      <div className="form-floating m-3">
        {/* <label htmlFor="name">Enter Name here:</label> */}
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          value={name}
          placeholder="Name:"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="name">Name:</label>
      </div>
    </>
  );
};
