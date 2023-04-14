import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import AddAuthor from './views/AddAuthor';
import Update from './views/Update';
import Navbar from './components/Navbar';
import Home from './views/Home';

function App() {
  const [authors, setAuthors] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const removeFromDom = (authorId) => {
    setAuthors(authors.filter((author) => author._id != authorId));
  };

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route element={<Home authors={authors} setAuthors={setAuthors} loaded={loaded} setLoaded={setLoaded} removeFromDom={removeFromDom} />} path="/" />
        <Route element={<AddAuthor authors={authors} setAuthors={setAuthors} loaded={loaded} setLoaded={setLoaded}/>} path="/newauthor/" />
        <Route element={<Update/>} path="/author/:id/edit/" />
      </Routes>
    </div>
  );
}
export default App;