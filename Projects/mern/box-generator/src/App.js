import React, { useState } from 'react';
import BoxForm from './components/BoxForm'
import BoxDisplay from './components/BoxDisplay'

function App() {
  const [colorBoxArr, setColorBoxArr] = useState([]);

  return (
    <div className="App m-auto col-4">
      <BoxForm setColorBoxArr={setColorBoxArr} colorBoxArr={colorBoxArr}/>
      <BoxDisplay colorBoxArr={colorBoxArr} />
    </div>
  );
}

export default App;
