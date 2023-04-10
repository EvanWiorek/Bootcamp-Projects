import { useState } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import "./App.css";

const Home = (props) => {
  return (
    <div>
      <h1 style={{ color: "red" }}>Welcome</h1>
    </div>
  );
};

const Input = (props) => {
  const { input, bgc, color } = useParams();
  console.log(input, bgc, color);

  if (bgc === undefined){
    if (isNaN(+input) === false) {
      return (
        <div>
          <h1>The number is: {input}</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>The word is: {input}</h1>
        </div>
      );
    }
  }
  if (bgc.length > 0) {
    if (isNaN(+input) === false) {
      return (
        <div>
          <h1 style={{ color: color, backgroundColor: bgc }}>The number is: {input}</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1 style={{ color: color, backgroundColor: bgc }}>The word is: {input}</h1>
        </div>
      );
    }
  }
};

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:input" element={<Input />} />
        <Route path="/:input/:color/:bgc" element={<Input />} />
      </Routes>
    </div>
  );
}

export default App;
