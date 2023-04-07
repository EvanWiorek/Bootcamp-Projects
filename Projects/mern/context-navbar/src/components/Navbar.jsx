//This component should be your navbar which contains the greeting.
import { useContext } from "react";
import { MyContext } from "../App";

export default (props) => {
  //this component is just grabbing `name` from context to display it
  const { name } = useContext(MyContext);

  return (
    <>
      <nav className="my-navbar">
        <h1>Hello, { name }</h1>
      </nav>
    </>
  );
};
