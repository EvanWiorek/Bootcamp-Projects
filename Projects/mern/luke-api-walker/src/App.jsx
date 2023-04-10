import { useState } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import PeopleDisplay from "./components/PeopleDisplay";
import PlanetDisplay from "./components/PlanetDisplay";
import FilmDisplay from "./components/FilmDisplay";
import StarshipDisplay from "./components/StarshipDisplay";
import VehicleDisplay from "./components/VehicleDisplay";
import SpeciesDisplay from "./components/SpeciesDisplay";
import ErrorHandler from "./components/ErrorHandler";

function App() {
  const [SWAPIObject, setSWAPIObject] = useState({});
  const [isClicked, setIsClicked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [searchIdBlank, setSearchIdBlank] = useState("");
  const [homeWorld, setHomeWorld] = useState({});
  const [planetNumber, setPlanetNumber] = useState("");
  const [searchTerms, setSearchTerms] = useState({
    category: "people",
    idNum: "1",
  });

  return (
    <div>
      <Navbar
        planetNumber={planetNumber}
        setPlanetNumber={setPlanetNumber}
        setSWAPIObject={setSWAPIObject}
        searchTerms={searchTerms}
        setSearchTerms={setSearchTerms}
        setHomeWorld={setHomeWorld}
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
        setSearchIdBlank={setSearchIdBlank}
        searchIdBlank={searchIdBlank}
      />
      <Routes>
        <Route
          path="/"
          element={
            <PeopleDisplay
                SWAPIObject={SWAPIObject}
                homeWorld={homeWorld}
                planetNumber={planetNumber}
                isClicked={isClicked}
                setIsClicked={setIsClicked}
                setSWAPIObject={setSWAPIObject}
              />
          }
        />
        <Route
          path="/404"
          element={
            <>
              <ErrorHandler />
            </>
          }
        />
        <Route
          path="/people/:int"
          element={
            <>
              <PeopleDisplay
                SWAPIObject={SWAPIObject}
                homeWorld={homeWorld}
                planetNumber={planetNumber}
                isClicked={isClicked}
                setIsClicked={setIsClicked}
                setSWAPIObject={setSWAPIObject}
              />
            </>
          }
        />
        <Route
          path="/planets/:int"
          element={
            <>
              <PlanetDisplay SWAPIObject={SWAPIObject} />
            </>
          }
        />
        <Route
          path="/films/:int"
          element={
            <>
              <FilmDisplay SWAPIObject={SWAPIObject} />
            </>
          }
        />
        <Route
          path="/starships/:int"
          element={
            <>
              <StarshipDisplay SWAPIObject={SWAPIObject} />
            </>
          }
        />
        <Route
          path="/vehicles/:int"
          element={
            <>
              <VehicleDisplay SWAPIObject={SWAPIObject} />
            </>
          }
        />
        <Route
          path="/species/:int"
          element={
            <>
              <SpeciesDisplay
                SWAPIObject={SWAPIObject}
                homeWorld={homeWorld}
                planetNumber={planetNumber}
                isClicked={isClicked}
                setIsClicked={setIsClicked}
                setSWAPIObject={setSWAPIObject}
                isSubmitted={isSubmitted}
                setIsSubmitted={setIsSubmitted}
              />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
