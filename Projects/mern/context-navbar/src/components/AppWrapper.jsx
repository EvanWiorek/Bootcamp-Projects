//This component should wrap the Navbar and the FormWrapper components (and will access useState).
import { useState } from "react";
import { MyContext } from "../App";

export default ({ children }) => {
  //this adding the string and the function to state
  const [name, setName] = useState("");

  return (
    <MyContext.Provider value={{ name, setName }}>
      {children}
    </MyContext.Provider>
  );
};
