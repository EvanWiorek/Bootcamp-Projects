import { createContext, useState } from "react";
import "./App.css";
import AppWrapper from "./components/AppWrapper";
import FormWrapper from "./components/FormWrapper";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
export const MyContext = createContext();

function App() {
  //Navbar and FormWrapper don't take in any props

  return (
    <div className="App">
      <MyContext.Provider value={"test"}>
        <AppWrapper>
          <Navbar />
          <FormWrapper />
        </AppWrapper>
      </MyContext.Provider>
    </div>
  );
}

export default App;
